import { describe, it, expect, beforeEach } from 'vitest';
import {
  exportedForTesting,
  getSeedFromDate,
  calculateTimeLeft,
  getRandCity,
  clearCache,
  generateHistoryWithFunction,
  findUniqueNumber,
  randomWithUniqueConstraint
} from './rand';

const {
  dateOfSwitchToRandomPreferSmallUnique,
  dateOfSwitchToCubic,
  dateOfSwitchToSextic,
  random,
  randomSimple,
  randomPreferSmallSquaring,
  randomPreferSmallCubic,
  randomPreferSmallSextic,
  randomPreferSmallUnique,
  getRandomFunctionForSeed,
  getAlgorithmConfigForSeed,
  defaultCollisionHandler,
  ALGORITHM_CONFIG,
  generateBaseRandom,
  MEMORY
} = exportedForTesting;

describe('rand.jsx - Random Number Generation and Date Utilities', () => {
  beforeEach(() => {
    clearCache();
  });

  describe('base random generation', () => {
    it('should generate values between 0 and 1', () => {
      for (let seed = 0; seed < 100; seed++) {
        const value = generateBaseRandom(seed);
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThan(1);
      }
    });

    it('should be deterministic for same seed', () => {
      const seed = 12345;
      const value1 = generateBaseRandom(seed);
      const value2 = generateBaseRandom(seed);
      expect(value1).toBe(value2);
    });
  });

  describe('distribution functions', () => {
    it('randomSimple should have uniform distribution', () => {
      const size = 1000;
      const seeds = [...Array(size).keys()];
      const rands = seeds.map((s) => randomSimple(s, size));
      const smaller = rands.filter((x) => x < size / 2);
      const bigger = rands.filter((x) => x >= size / 2);
      // Uniform distribution should have roughly equal counts
      expect(Math.abs(smaller.length - bigger.length)).toBeLessThan(size * 0.15);
    });

    it('randomPreferSmallSquaring should prefer smaller numbers', () => {
      const size = 1000;
      const seeds = [...Array(size).keys()];
      const rands = seeds.map((s) => randomPreferSmallSquaring(s, size));
      const smaller = rands.filter((x) => x < size / 2);
      const bigger = rands.filter((x) => x >= size / 2);
      expect(smaller.length > bigger.length).toBe(true);
    });

    it('randomPreferSmallCubic should prefer smaller numbers more than square', () => {
      const size = 1000;
      const seeds = [...Array(size).keys()];
      const squareRands = seeds.map((s) => randomPreferSmallSquaring(s, size));
      const cubicRands = seeds.map((s) => randomPreferSmallCubic(s, size));

      const squareSmall = squareRands.filter((x) => x < size / 4).length;
      const cubicSmall = cubicRands.filter((x) => x < size / 4).length;

      expect(cubicSmall).toBeGreaterThan(squareSmall);
    });

    it('randomPreferSmallSextic should prefer smaller numbers heavily', () => {
      const size = 1000;
      const seeds = [...Array(size).keys()];
      const rands = seeds.map((s) => randomPreferSmallSextic(s, size));
      const smaller = rands.filter((x) => x < size / 2);
      const bigger = rands.filter((x) => x >= size / 2);
      expect(smaller.length > 2 * bigger.length).toBe(true);
    });
  });

  describe('algorithm configuration map', () => {
    it('should have properly ordered configuration', () => {
      expect(ALGORITHM_CONFIG.length).toBeGreaterThan(0);

      // Check that configs are ordered by seed
      for (let i = 1; i < ALGORITHM_CONFIG.length; i++) {
        expect(ALGORITHM_CONFIG[i].seed).toBeGreaterThan(ALGORITHM_CONFIG[i - 1].seed);
      }
    });

    it('should return correct config for seed before uniqueness switch', () => {
      const seed = dateOfSwitchToRandomPreferSmallUnique - 1;
      const config = getAlgorithmConfigForSeed(seed);
      expect(config.randomFunc).toBe(randomSimple);
      expect(config.collisionHandler).toBe(null);
    });

    it('should return correct config for seed at uniqueness switch', () => {
      const seed = dateOfSwitchToRandomPreferSmallUnique;
      const config = getAlgorithmConfigForSeed(seed);
      expect(config.randomFunc).toBe(randomPreferSmallSquaring);
      expect(config.collisionHandler).toBe(defaultCollisionHandler);
    });

    it('should return correct config for seed before cubic switch', () => {
      const seed = dateOfSwitchToCubic;
      const config = getAlgorithmConfigForSeed(seed);
      expect(config.randomFunc).toBe(randomPreferSmallSquaring);
    });

    it('should return correct config for seed at cubic switch', () => {
      const seed = dateOfSwitchToCubic + 1;
      const config = getAlgorithmConfigForSeed(seed);
      expect(config.randomFunc).toBe(randomPreferSmallCubic);
      expect(config.collisionHandler).toBe(defaultCollisionHandler);
    });

    it('should return correct config for seed at sextic switch', () => {
      const seed = dateOfSwitchToSextic + 1;
      const config = getAlgorithmConfigForSeed(seed);
      expect(config.randomFunc).toBe(randomPreferSmallSextic);
      expect(config.collisionHandler).toBe(defaultCollisionHandler);
    });
  });

  describe('algorithm switching based on seed (backward compatible)', () => {
    it('should use squaring before dateOfSwitchToCubic', () => {
      const seed = dateOfSwitchToCubic - 1;
      const func = getRandomFunctionForSeed(seed);
      expect(func).toBe(randomPreferSmallSquaring);
    });

    it('should use squaring at dateOfSwitchToCubic', () => {
      const seed = dateOfSwitchToCubic;
      const func = getRandomFunctionForSeed(seed);
      expect(func).toBe(randomPreferSmallSquaring);
    });

    it('should use cubic between cubic and sextic dates', () => {
      const seed = dateOfSwitchToCubic + 1;
      const func = getRandomFunctionForSeed(seed);
      expect(func).toBe(randomPreferSmallCubic);
    });

    it('should use sextic after dateOfSwitchToSextic', () => {
      const seed = dateOfSwitchToSextic + 1;
      const func = getRandomFunctionForSeed(seed);
      expect(func).toBe(randomPreferSmallSextic);
    });
  });

  describe('random number generation with backward compatibility', () => {
    it('should generate unique random numbers', () => {
      const SIZE = 100;
      const seedBeforeSwitch = dateOfSwitchToRandomPreferSmallUnique - 1;
      const randomNminus1 = random(seedBeforeSwitch, SIZE);
      expect(randomNminus1).toBe(randomSimple(seedBeforeSwitch, SIZE));
      const history = new Set();
      history.add(randomNminus1);
      for (let i = 0; i < MEMORY; i++) {
        const number = random(dateOfSwitchToRandomPreferSmallUnique + i, SIZE);
        expect(history.has(number)).toBe(false);
        history.add(number);
      }
    });

    it('should maintain memory constraint for unique numbers', () => {
      const SIZE = 100;
      const history = [];
      for (let i = 0; i < 300; i++) {
        const number = randomPreferSmallUnique(dateOfSwitchToRandomPreferSmallUnique + i, SIZE);
        for (let j = Math.max(0, history.length - MEMORY); j < history.length; j++) {
          expect(history[j]).not.toBe(number);
        }
        history.push(number);
      }
      expect(true).toBe(true);
    });
  });

  describe('new testable functions', () => {
    describe('generateHistoryWithFunction', () => {
      it('should generate history for a custom function', () => {
        const seed = 100;
        const max = 50;
        const history = generateHistoryWithFunction(seed, max, randomSimple, 10, 0);

        expect(history.size).toBeLessThanOrEqual(10);
        expect(history instanceof Set).toBe(true);
      });

      it('should respect memory window parameter', () => {
        const seed = 50;
        const max = 100;
        const memoryWindow = 5;
        const history = generateHistoryWithFunction(seed, max, randomSimple, memoryWindow, 0);

        expect(history.size).toBeLessThanOrEqual(memoryWindow);
      });

      it('should not include the current seed', () => {
        const seed = 20;
        const max = 100;
        const history = generateHistoryWithFunction(seed, max, randomSimple, 10, 0);
        const currentValue = randomSimple(seed, max);

        // History should not contain current seed's value
        expect(history.has(currentValue)).toBe(false);
      });
    });

    describe('findUniqueNumber', () => {
      it('should find a number not in history', () => {
        const seed = 100;
        const max = 50;
        const history = new Set([1, 2, 3, 4, 5]);

        const number = findUniqueNumber(seed, max, history, randomSimple);
        expect(history.has(number)).toBe(false);
      });

      it('should return the first generated number if no collision', () => {
        const seed = 100;
        const max = 50;
        const history = new Set([]);

        const number = findUniqueNumber(seed, max, history, randomSimple);
        expect(number).toBe(randomSimple(seed, max));
      });

      it('should handle case when collision occurs', () => {
        const seed = 100;
        const max = 50;
        const firstValue = randomSimple(seed, max);
        const history = new Set([firstValue]);

        const number = findUniqueNumber(seed, max, history, randomSimple);
        expect(number).not.toBe(firstValue);
      });
    });

    describe('randomWithUniqueConstraint', () => {
      it('should generate unique numbers with custom function', () => {
        const max = 100; // Increased to reduce collision probability
        const startSeed = 1000;
        const numbers = [];

        for (let i = 0; i < MEMORY; i++) {
          const number = randomWithUniqueConstraint(
            startSeed + i,
            max,
            randomPreferSmallCubic,
            { memoryWindow: MEMORY, startSeed }
          );
          numbers.push(number);
        }

        // Check that each number doesn't appear in its own memory window
        for (let i = MEMORY; i < numbers.length; i++) {
          const recentWindow = numbers.slice(Math.max(0, i - MEMORY), i);
          expect(recentWindow.includes(numbers[i])).toBe(false);
        }
      });

      it('should respect custom memory window', () => {
        const max = 100;
        const startSeed = 2000;
        const customMemory = 5;
        const customCache = {};

        const numbers = [];
        for (let i = 0; i < 20; i++) {
          const number = randomWithUniqueConstraint(
            startSeed + i,
            max,
            randomSimple,
            { memoryWindow: customMemory, startSeed, useCache: true, customCache }
          );
          numbers.push(number);
        }

        // Check that only last customMemory numbers are unique
        for (let i = customMemory; i < numbers.length; i++) {
          const recent = numbers.slice(i - customMemory, i);
          expect(recent.includes(numbers[i])).toBe(false);
        }
      });

      it('should use cache when enabled', () => {
        const max = 50;
        const seed = 3000;
        const customCache = {};

        const number1 = randomWithUniqueConstraint(
          seed,
          max,
          randomPreferSmallSquaring,
          { useCache: true, customCache, startSeed: seed }
        );

        const number2 = randomWithUniqueConstraint(
          seed,
          max,
          randomPreferSmallSquaring,
          { useCache: true, customCache, startSeed: seed }
        );

        expect(number1).toBe(number2);
        expect(customCache[seed]).toBe(number1);
      });

      it('should work with different random functions', () => {
        const max = 100;
        const seed = 4000;

        const squareNum = randomWithUniqueConstraint(
          seed,
          max,
          randomPreferSmallSquaring,
          { startSeed: seed }
        );

        const cubicNum = randomWithUniqueConstraint(
          seed,
          max,
          randomPreferSmallCubic,
          { startSeed: seed }
        );

        const sexticNum = randomWithUniqueConstraint(
          seed,
          max,
          randomPreferSmallSextic,
          { startSeed: seed }
        );

        // All should be valid numbers
        expect(squareNum).toBeGreaterThanOrEqual(0);
        expect(squareNum).toBeLessThan(max);
        expect(cubicNum).toBeGreaterThanOrEqual(0);
        expect(cubicNum).toBeLessThan(max);
        expect(sexticNum).toBeGreaterThanOrEqual(0);
        expect(sexticNum).toBeLessThan(max);
      });
    });

    describe('clearCache', () => {
      it('should clear the internal cache', () => {
        const seed = dateOfSwitchToRandomPreferSmallUnique + 100;
        const max = 50;

        // Generate a number (should be cached)
        const num1 = randomPreferSmallUnique(seed, max);

        // Clear cache and regenerate
        clearCache();
        const num2 = randomPreferSmallUnique(seed, max);

        // Should be the same (deterministic) but cache was cleared
        expect(num1).toBe(num2);
      });
    });

    describe('collision handlers', () => {
      it('should use default collision handler', () => {
        const seed = 5000;
        const max = 50;
        const firstValue = randomPreferSmallCubic(seed, max);
        const history = new Set([firstValue]);

        const number = findUniqueNumber(seed, max, history, randomPreferSmallCubic);
        expect(number).not.toBe(firstValue);
        expect(history.has(number)).toBe(false);
      });

      it('should work with custom collision handler', () => {
        const seed = 6000;
        const max = 50;
        const firstValue = randomPreferSmallCubic(seed, max);
        const history = new Set([firstValue]);

        // Custom handler that tries sequential seeds
        const customHandler = (seed, max, history, randomFunc) => {
          let attempt = 1;
          let number;
          do {
            number = randomFunc(seed + attempt++, max);
            if (attempt > max * 2) break;
          } while (history.has(number));
          return number;
        };

        const number = findUniqueNumber(seed, max, history, randomPreferSmallCubic, customHandler);
        expect(number).not.toBe(firstValue);
        expect(history.has(number)).toBe(false);
      });

      it('should use custom collision handler in randomWithUniqueConstraint', () => {
        const max = 50;
        const startSeed = 7000;
        let handlerCalled = false;

        // Custom handler that tracks if it was called
        const trackingHandler = (seed, max, history, randomFunc) => {
          handlerCalled = true;
          return defaultCollisionHandler(seed, max, history, randomFunc);
        };

        // Generate numbers that will likely cause collisions
        for (let i = 0; i < 10; i++) {
          randomWithUniqueConstraint(startSeed + i, max, randomPreferSmallSextic, {
            memoryWindow: MEMORY,
            startSeed,
            collisionHandler: trackingHandler
          });
        }

        // With sextic and small max, collisions should occur
        expect(handlerCalled).toBe(true);
      });
    });
  });

  describe('date seed generation', () => {
    it('should generate correct seeds for UTC dates', () => {
      expect(getSeedFromDate(new Date('1 Jan 1970 00:00:00 GMT'), 'UTC')).toBe(0);
      expect(getSeedFromDate(new Date('1 Jan 1970 10:00:00 GMT'), 'UTC')).toBe(0);
      expect(getSeedFromDate(new Date('1 Jan 1970 23:00:00 GMT'), 'UTC')).toBe(0);
    });

    it('should handle timezone-specific date transitions (Prague)', () => {
      // Note: Prague timezone offset calculation uses current offset, not historical
      // These tests reflect the actual behavior of the function
      expect(getSeedFromDate(new Date('1 Jan 1970 22:59:59 GMT'), 'Europe/Prague')).toBe(0);
      expect(getSeedFromDate(new Date('1 Jan 1970 23:00:00 GMT'), 'Europe/Prague')).toBe(1);
      expect(getSeedFromDate(new Date('2 Jan 1970 00:00:00 GMT'), 'Europe/Prague')).toBe(1);
      expect(getSeedFromDate(new Date('2 Jan 1970 00:59:59 GMT'), 'Europe/Prague')).toBe(1);
      expect(getSeedFromDate(new Date('2 Jan 1970 10:00:00 GMT'), 'Europe/Prague')).toBe(1);
      expect(getSeedFromDate(new Date('2 Jan 1970 21:59:59 GMT'), 'Europe/Prague')).toBe(1);
      expect(getSeedFromDate(new Date('2 Jan 1970 22:00:00 GMT'), 'Europe/Prague')).toBe(1);
    });
  });

  describe('calculateTimeLeft', () => {
    it('should calculate time remaining until next day correctly', () => {
      // Use a seed that corresponds to the test date (days since epoch)
      // Oct 1, 2023 is approximately 19631 days since Jan 1, 1970
      const todaySeed = 19631;
      const nowUTC = new Date('2023-10-01T12:00:00Z').getTime();
      const zone = 'UTC';
      const result = calculateTimeLeft(todaySeed, nowUTC, zone);
      expect(result).toBe('12:00:00'); // Expected time left until next day in UTC

      const nowUTC2 = new Date('2023-10-01T23:59:59Z').getTime();
      const result2 = calculateTimeLeft(todaySeed, nowUTC2, zone);
      expect(result2).toBe('00:00:01'); // Expected time left until next day in UTC
    });

    it('should handle realistic current date calculations', () => {
      // Test with a date closer to the current era
      const testDate = new Date('2024-01-01T18:00:00Z');
      const todaySeed = getSeedFromDate(testDate, 'UTC');
      const result = calculateTimeLeft(todaySeed, testDate.getTime(), 'UTC');
      expect(result).toBe('06:00:00'); // 6 hours until next day
    });
  });

  describe('getRandCity', () => {
    it('should select a city from the provided array', () => {
      const cities = [
        { name: 'Praha', population: 1000000 },
        { name: 'Brno', population: 400000 },
        { name: 'Ostrava', population: 300000 }
      ];
      const seed = 12345;
      const selectedCity = getRandCity(cities, seed);

      expect(cities).toContain(selectedCity);
      expect(selectedCity).toHaveProperty('name');
      expect(selectedCity).toHaveProperty('population');
    });

    it('should return same city for same seed', () => {
      const cities = [
        { name: 'Praha', population: 1000000 },
        { name: 'Brno', population: 400000 },
        { name: 'Ostrava', population: 300000 }
      ];
      const seed = 12345;
      const city1 = getRandCity(cities, seed);
      const city2 = getRandCity(cities, seed);

      expect(city1).toEqual(city2);
    });
  });
});
