import { countDirection, getSeedFromDate } from './util';

test('test direction', () => {
  expect(countDirection({latitude: -1, longtitude: 0}, {latitude: 1, longtitude: .3})).toBe('NW');
})

test('test date seed generator', () => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date("1 Jan 1970 00:00:00 GMT"));
  expect(getSeedFromDate()).toBe(0);
  jest.setSystemTime(new Date("1 Jan 1970 10:00:00 GMT"));
  expect(getSeedFromDate()).toBe(0);
  jest.setSystemTime(new Date("1 Jan 1970 23:00:00 GMT"));
  expect(getSeedFromDate()).toBe(0);
  jest.useRealTimers();
});
