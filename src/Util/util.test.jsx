import { countDirection, neigbourRegion } from './util';

test('test direction', () => {
  expect(countDirection({ latitude: -1, longtitude: 0 }, { latitude: 1, longtitude: 0.3 })).toBe('NW');
});

test('test neigbour regions', () => {
  expect(neigbourRegion('Hl. m. Praha', 'Středočeský')).toBe(true);
  expect(neigbourRegion('Středočeský', 'Hl. m. Praha')).toBe(true);
  expect(neigbourRegion('Středočeský', 'Moravskoslezský')).toBe(false);
});

/*
TODO it shows SE, but it is E by map
{
  'name': 'Borovany',
  'population': 4137,
  'area': 42.33,
  'altitude': 522,
  'longitude': 14.392464,
  'latitude': 49.342995,
  'region': 'Jihočeský'
},

{
  'name': 'Trhové Sviny',
  'population': 5187,
  'area': 52.78,
  'altitude': 458,
  'longitude': 14.639240,
  'latitude': 48.842315,
  'region': 'Jihočeský'
},
*/
