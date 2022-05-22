import { dateOfPublish } from "../Util/util";

export const dateOfSwitchToRandomPreferSmallUnique = 19135;
const MEMORY = 21;

const random = (seed, max) => {
  if (seed < dateOfSwitchToRandomPreferSmallUnique) {
    return randomSimple(seed, max);
  } else {
    return randomPreferSmallUnique(seed, max);
  }
}

const randomSimple = (seed, max) => {
  const x = Math.sin(seed) * 10000;
  const value = x - Math.floor(x);
  return Math.floor(value*max);
}

const randomPreferSmall = (seed, max) => {
  const x = Math.sin(seed) * 10000;
  const value = x - Math.floor(x);
  return Math.floor(value*value*max);
}

//TODO delete after 14-6-2022
const generateOldRandomNumbersFromPreviousGenerator = (seed, max) => {
  const history = new Set();
  for (let i = Math.max(dateOfPublish, seed - MEMORY);
        i < Math.min(dateOfSwitchToRandomPreferSmallUnique, seed);
        i++) {
    history.add(random(i, max));
  }
  return history;
}
let cache = {};

const generateHistory = (seed, max) => {
  const history = new Set();
  for (let i = Math.max(dateOfSwitchToRandomPreferSmallUnique, seed - MEMORY); i < seed; i++) {
    history.add(randomPreferSmallUnique(i, max));
  }
  return history;
}

const randomPreferSmallUnique = (seed, max) => {
  if (seed in cache) {
    return cache[seed];
  }
  let history = generateOldRandomNumbersFromPreviousGenerator(seed, max);
  history = new Set([...history, ...generateHistory(seed, max)]);
  let number = randomPreferSmall(seed, max);
  let collision = 0;
  while (history.has(number)) {
    number = randomPreferSmall(-seed-collision++, max);
  }
  cache[seed] = number;
  return number;
}

export const getSeedFromDate = () => {
  const dayNumber = Math.floor(Date.now() / 1000 / 24 / 60 / 60);
  //console.log("Seed from day is " + dayNumber);
  return dayNumber;
}

export const getRandCity = (cities) => {
  const city = cities[random(getSeedFromDate(), cities.length)];
  //console.log("Target city is " + city.name);
  return city;
}

export const exportedForTesting = {
  random,
  randomSimple,
  randomPreferSmall,
  generateOldRandomNumbersFromPreviousGenerator,
  generateHistory,
  randomPreferSmallUnique,
  dateOfSwitchToRandomPreferSmallUnique,
  MEMORY
}