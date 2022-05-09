import { countDirection } from './util';

test('test direction', () => {
  expect(countDirection({latitude: -1, longtitude: 0}, {latitude: 1, longtitude: .3})).toBe('N');
})