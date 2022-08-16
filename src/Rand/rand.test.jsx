import { exportedForTesting, getSeedFromDate } from './rand';
const { dateOfSwitchToRandomPreferSmallUnique, random, randomSimple, randomPreferSmall, randomPreferSmallUnique, MEMORY } =
  exportedForTesting;

test('test unique random number generator', () => {
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

test('test unique random number generator memory', () => {
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

test('test small number generator', () => {
  const size = 1000;
  const seeds = [...Array(size).keys()];
  const rands = seeds.map((s) => randomPreferSmall(s, size));
  const smaller = rands.filter((x) => x < size / 2);
  const bigger = rands.filter((x) => x >= size / 2);
  expect(smaller.length > 2 * bigger.length).toBe(true);
});

test('test date seed generator', () => {
  expect(getSeedFromDate(new Date('1 Jan 1970 00:00:00 GMT'))).toBe(0);
  expect(getSeedFromDate(new Date('1 Jan 1970 10:00:00 GMT'))).toBe(0);
  expect(getSeedFromDate(new Date('1 Jan 1970 23:00:00 GMT'))).toBe(0);
});
