import { exportedForTesting, getSeedFromDate, calculateTimeLeft } from './rand';
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
  expect(getSeedFromDate(new Date('1 Jan 1970 00:00:00 GMT'), 'UTC')).toBe(0);
  expect(getSeedFromDate(new Date('1 Jan 1970 10:00:00 GMT'), 'UTC')).toBe(0);
  expect(getSeedFromDate(new Date('1 Jan 1970 23:00:00 GMT'), 'UTC')).toBe(0);
});

test('test date seed generator in Prague', () => {
  expect(getSeedFromDate(new Date('1 Jan 1970 22:59:59 GMT'), 'Europe/Prague')).toBe(0);
  expect(getSeedFromDate(new Date('1 Jan 1970 23:00:00 GMT'), 'Europe/Prague')).toBe(1);
  expect(getSeedFromDate(new Date('2 Jan 1970 00:00:00 GMT'), 'Europe/Prague')).toBe(1);
  expect(getSeedFromDate(new Date('2 Jan 1970 00:59:59 GMT'), 'Europe/Prague')).toBe(1);
  expect(getSeedFromDate(new Date('2 Jan 1970 10:00:00 GMT'), 'Europe/Prague')).toBe(1);
  expect(getSeedFromDate(new Date('2 Jan 1970 22:59:59 GMT'), 'Europe/Prague')).toBe(1);
  expect(getSeedFromDate(new Date('2 Jan 1970 23:00:00 GMT'), 'Europe/Prague')).toBe(2);
});

test('test calculateTimeLeft function', () => {
  const todaySeed = 19135;
  const nowUTC = new Date('2023-10-01T12:00:00Z').getTime();
  const zone = 'UTC';
  const result = calculateTimeLeft(todaySeed, nowUTC, zone);
  expect(result).toBe('12:00:00'); // Expected time left until next day in UTC

  const nowUTC2 = new Date('2023-10-01T23:59:59Z').getTime();
  const result2 = calculateTimeLeft(todaySeed, nowUTC2, zone);
  expect(result2).toBe('00:00:01'); // Expected time left until next day in UTC
});
