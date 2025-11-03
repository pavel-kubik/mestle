import { dateOfPublish } from '../Util/util';
import { DateTime } from 'luxon';

// Configuration constants for backward compatibility
const dateOfSwitchToRandomPreferSmallUnique = 19135;
const dateOfSwitchToCubic = 20395; // November 3, 2025
const dateOfSwitchToSextic = 20396; // November 4, 2025
const MEMORY = 21;

// Cache for memoization
let cache = {};

/**
 * Clear the cache (useful for testing)
 */
export const clearCache = () => {
  cache = {};
};

/**
 * Base random generator using sine function
 * Returns a value between 0 and 1
 */
const generateBaseRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  const value = x - Math.floor(x);
  return value;
};

/**
 * Simple random: uniform distribution
 */
const randomSimple = (seed, max) => {
  const value = generateBaseRandom(seed);
  return Math.floor(value * max);
};

/**
 * Square: prefer smaller numbers (value^2)
 */
const randomPreferSmallSquaring = (seed, max) => {
  const value = generateBaseRandom(seed);
  return Math.floor(value * value * max);
};

/**
 * Cubic: prefer smaller numbers more (value^3)
 */
const randomPreferSmallCubic = (seed, max) => {
  const value = generateBaseRandom(seed);
  return Math.floor(value * value * value * max);
};

/**
 * Sextic: prefer smaller numbers heavily (value^6)
 */
const randomPreferSmallSextic = (seed, max) => {
  const value = generateBaseRandom(seed);
  return Math.floor(value * value * value * value * value * value * max);
};

/**
 * Default collision handler - tries negative seeds with incrementing collision counter
 * @param {number} seed - The original seed
 * @param {number} max - Maximum value
 * @param {Set} history - Set of numbers to avoid
 * @param {Function} randomFunc - Random function to use
 * @returns {number} A number not in history
 */
const defaultCollisionHandler = (seed, max, history, randomFunc) => {
  let collision = 0;
  let number;
  do {
    number = randomFunc(-seed - collision++, max);
    if (collision > max * 2) {
      console.warn(`defaultCollisionHandler: Too many collisions (${collision}) for seed ${seed}, max ${max}`);
      break;
    }
  } while (history.has(number));
  return number;
};

/**
 * Algorithm Configuration Map
 * Maps date ranges to random function and collision handler
 * Sorted by seed in ascending order for easy lookup
 *
 * Format: {
 *   seed: starting seed for this configuration,
 *   randomFunc: function to generate random numbers,
 *   collisionHandler: function to handle collisions (optional, uses default if not specified)
 * }
 */
const ALGORITHM_CONFIG = [
  {
    seed: dateOfSwitchToRandomPreferSmallUnique,
    randomFunc: randomPreferSmallSquaring,
    collisionHandler: defaultCollisionHandler,
    description: 'Square distribution with uniqueness'
  },
  {
    seed: dateOfSwitchToCubic + 1,
    randomFunc: randomPreferSmallCubic,
    collisionHandler: defaultCollisionHandler,
    description: 'Cubic distribution with uniqueness'
  },
  {
    seed: dateOfSwitchToSextic + 1,
    randomFunc: randomPreferSmallSextic,
    collisionHandler: defaultCollisionHandler,
    description: 'Sextic distribution with uniqueness'
  }
];

/**
 * Get the appropriate algorithm configuration for a given seed
 * This maintains backward compatibility with historical algorithm switches
 * @param {number} seed - The seed to look up
 * @returns {Object} Configuration object with randomFunc and collisionHandler
 */
const getAlgorithmConfigForSeed = (seed) => {
  // Find the last config where config.seed <= seed
  let selectedConfig = ALGORITHM_CONFIG[0];
  for (const config of ALGORITHM_CONFIG) {
    if (seed >= config.seed) {
      selectedConfig = config;
    } else {
      break;
    }
  }
  return selectedConfig;
};

/**
 * Get the appropriate random function for a given seed (backward compatible)
 * This maintains backward compatibility with historical algorithm switches
 */
const getRandomFunctionForSeed = (seed) => {
  const config = getAlgorithmConfigForSeed(seed);
  return config.randomFunc;
};

/**
 * Generate history of numbers from the old simple generator
 * TODO: delete after 14-6-2022 (kept for backward compatibility)
 */
const generateOldRandomNumbersFromPreviousGenerator = (seed, max) => {
  const history = new Set();
  for (let i = Math.max(dateOfPublish, seed - MEMORY); i < Math.min(dateOfSwitchToRandomPreferSmallUnique, seed); i++) {
    history.add(random(i, max));
  }
  return history;
};

/**
 * Generate history of recent numbers (within MEMORY window)
 * Uses the default cache-based randomPreferSmallUnique
 */
const generateHistory = (seed, max) => {
  const history = new Set();
  for (let i = Math.max(dateOfSwitchToRandomPreferSmallUnique, seed - MEMORY); i < seed; i++) {
    history.add(randomPreferSmallUnique(i, max));
  }
  return history;
};

/**
 * Generate history using a custom random function (for testing)
 * @param {number} seed - Current seed
 * @param {number} max - Maximum value
 * @param {Function} randomFunc - Custom random function to use
 * @param {number} memoryWindow - Number of previous values to track
 * @param {number} startSeed - Starting seed for history (default: dateOfSwitchToRandomPreferSmallUnique)
 * @returns {Set} Set of previously generated numbers
 */
export const generateHistoryWithFunction = (
  seed,
  max,
  randomFunc,
  memoryWindow = MEMORY,
  startSeed = dateOfSwitchToRandomPreferSmallUnique
) => {
  const history = new Set();
  for (let i = Math.max(startSeed, seed - memoryWindow); i < seed; i++) {
    const value = randomFunc(i, max);
    history.add(value);
  }
  return history;
};

/**
 * Find a unique number that's not in the history
 * @param {number} seed - The seed for random generation
 * @param {number} max - Maximum value
 * @param {Set} history - Set of numbers to avoid
 * @param {Function} randomFunc - Random function to use
 * @param {Function} collisionHandler - Optional collision handler (uses default if not provided)
 * @returns {number} A unique random number
 */
export const findUniqueNumber = (seed, max, history, randomFunc, collisionHandler = null) => {
  let number = randomFunc(seed, max);

  // If number is already unique, return it immediately
  if (!history.has(number)) {
    return number;
  }

  // Use collision handler if provided, otherwise use default
  const handler = collisionHandler || defaultCollisionHandler;
  return handler(seed, max, history, randomFunc);
};

/**
 * Generate a random number with uniqueness constraint (no repeats in memory window)
 * This is the main function that maintains backward compatibility
 * @param {number} seed - The seed for random generation
 * @param {number} max - Maximum value
 * @returns {number} A random number that hasn't appeared in recent history
 */
const randomPreferSmallUnique = (seed, max) => {
  if (seed in cache) {
    return cache[seed];
  }

  // Build history from both old and new generators
  let history = generateOldRandomNumbersFromPreviousGenerator(seed, max);
  history = new Set([...history, ...generateHistory(seed, max)]);

  // Get the appropriate algorithm configuration based on the seed date
  const config = getAlgorithmConfigForSeed(seed);

  // Find a unique number using the configured collision handler
  const number = findUniqueNumber(seed, max, history, config.randomFunc, config.collisionHandler);

  cache[seed] = number;
  return number;
};

/**
 * Generate a random number with uniqueness using a custom function (for testing)
 * @param {number} seed - The seed for random generation
 * @param {number} max - Maximum value
 * @param {Function} randomFunc - Custom random function to use
 * @param {Object} options - Configuration options
 * @param {number} options.memoryWindow - Number of previous values to avoid (default: MEMORY)
 * @param {number} options.startSeed - Starting seed for history (default: dateOfSwitchToRandomPreferSmallUnique)
 * @param {boolean} options.useCache - Whether to use caching (default: false for custom functions)
 * @param {Object} options.customCache - Custom cache object to use
 * @param {Function} options.collisionHandler - Custom collision handler (default: defaultCollisionHandler)
 * @returns {number} A unique random number
 */
export const randomWithUniqueConstraint = (seed, max, randomFunc, options = {}) => {
  const {
    memoryWindow = MEMORY,
    startSeed = dateOfSwitchToRandomPreferSmallUnique,
    useCache = false,
    customCache = {},
    collisionHandler = null
  } = options;

  // Check cache if enabled
  if (useCache && seed in customCache) {
    return customCache[seed];
  }

  // Generate history
  const history = generateHistoryWithFunction(seed, max, randomFunc, memoryWindow, startSeed);

  // Find unique number with optional custom collision handler
  const number = findUniqueNumber(seed, max, history, randomFunc, collisionHandler);

  // Store in cache if enabled
  if (useCache) {
    customCache[seed] = number;
  }

  return number;
};

/**
 * Main random function - routes to appropriate algorithm based on seed
 * @param {number} seed - The seed for random generation
 * @param {number} max - Maximum value
 * @returns {number} A random number
 */
const random = (seed, max) => {
  if (seed < dateOfSwitchToRandomPreferSmallUnique) {
    return randomSimple(seed, max);
  } else {
    return randomPreferSmallUnique(seed, max);
  }
};

export const getSeedFromDate = (time, zone) => {
  const timezoneOffsetInMinutes = DateTime.now().setZone(zone).offset;
  const dayNumber = Math.floor((time.getTime() + timezoneOffsetInMinutes * 60 * 1000) / 1000 / 24 / 60 / 60);
  return dayNumber;
};

export const calculateTimeLeft = (todaySeed, nowUTC, zone) => {
  const timezoneOffsetInMinutes = DateTime.now().setZone(zone).offset;
  const tomorrowAtTimezoneInUTC = (todaySeed + 1) * 1000 * 24 * 60 * 60 - timezoneOffsetInMinutes * 60 * 1000; // TODO validate :)
  let diffSec = Math.floor((tomorrowAtTimezoneInUTC - nowUTC) / 1000);
  // refresh on next day
  if (diffSec <= 0) {
    console.log('Reloading...');
    setTimeout(() => window.location.reload(), 1000); // TODO remove delay
  }
  const hoursLeft = Math.floor(diffSec / 3600);
  diffSec -= hoursLeft * 3600;
  const minutesLeft = Math.floor(diffSec / 60);
  diffSec -= minutesLeft * 60;
  const secondsLeft = diffSec;
  return ('0' + hoursLeft).slice(-2) + ':' + ('0' + minutesLeft).slice(-2) + ':' + ('0' + secondsLeft).slice(-2);
};

export const getRandCity = (cities, seed) => {
  const city = cities[random(seed, cities.length)];
  return city;
};

export const exportedForTesting = {
  random,
  randomSimple,
  randomPreferSmallSquaring,
  randomPreferSmallCubic,
  randomPreferSmallSextic,
  generateOldRandomNumbersFromPreviousGenerator,
  generateHistory,
  randomPreferSmallUnique,
  dateOfSwitchToRandomPreferSmallUnique,
  dateOfSwitchToCubic,
  dateOfSwitchToSextic,
  MEMORY,
  generateBaseRandom,
  getRandomFunctionForSeed,
  getAlgorithmConfigForSeed,
  defaultCollisionHandler,
  ALGORITHM_CONFIG
};
