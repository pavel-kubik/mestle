import { describe, it, expect } from 'vitest';
import { countDirection, neigbourRegion, regionComparator, numberComparator, normalize, obfuscateUrl } from './util';

describe('util.jsx - Geographic and Game Logic Functions', () => {
  describe('countDirection', () => {
    it('should calculate N direction correctly', () => {
      expect(countDirection({ latitude: -1, longitude: 0 }, { latitude: 1, longitude: 0.3 })).toBe('N');
    });

    it('should return X for same coordinates', () => {
      expect(countDirection({ latitude: 50, longitude: 14 }, { latitude: 50, longitude: 14 })).toBe('X');
    });

    it('should calculate all 8 directions correctly', () => {
      const center = { latitude: 50, longitude: 14 };

      // North
      expect(countDirection(center, { latitude: 52, longitude: 14 })).toBe('N');
      // South
      expect(countDirection(center, { latitude: 48, longitude: 14 })).toBe('S');
      // East
      expect(countDirection(center, { latitude: 50, longitude: 16 })).toBe('E');
      // West
      expect(countDirection(center, { latitude: 50, longitude: 12 })).toBe('W');
      // Northeast
      expect(countDirection(center, { latitude: 51, longitude: 15 })).toBe('NE');
      // Northwest
      expect(countDirection(center, { latitude: 51, longitude: 13 })).toBe('NW');
      // Southeast
      expect(countDirection(center, { latitude: 49, longitude: 15 })).toBe('SE');
      // Southwest
      expect(countDirection(center, { latitude: 49, longitude: 13 })).toBe('SW');
    });
  });

  describe('neigbourRegion', () => {
    it('should identify Prague and Central Bohemia as neighbors', () => {
      expect(neigbourRegion('Hl. m. Praha', 'Středočeský')).toBe(true);
      expect(neigbourRegion('Středočeský', 'Hl. m. Praha')).toBe(true);
    });

    it('should identify non-neighboring regions', () => {
      expect(neigbourRegion('Středočeský', 'Moravskoslezský')).toBe(false);
      expect(neigbourRegion('Karlovarský', 'Jihomoravský')).toBe(false);
    });

    it('should handle invalid regions gracefully', () => {
      expect(neigbourRegion('InvalidRegion', 'Středočeský')).toBe(undefined);
      expect(neigbourRegion('Středočeský', 'InvalidRegion')).toBe(false);
    });
  });

  describe('regionComparator', () => {
    const pragueCity = { region: 'Hl. m. Praha' };
    const centralBohemiaCity = { region: 'Středočeský' };
    const moraviaCity = { region: 'Moravskoslezský' };

    it('should return green for same region', () => {
      expect(regionComparator(pragueCity, pragueCity)).toBe('green');
    });

    it('should return orange for neighboring regions', () => {
      expect(regionComparator(pragueCity, centralBohemiaCity)).toBe('orange');
    });

    it('should return red for non-neighboring regions', () => {
      expect(regionComparator(pragueCity, moraviaCity)).toBe('red');
    });
  });

  describe('numberComparator', () => {
    it('should return green for very similar numbers (< 10% difference)', () => {
      expect(numberComparator(100, 105)).toBe('green');
      expect(numberComparator(1000, 1050)).toBe('green');
    });

    it('should return orange for moderately similar numbers (10-20% difference)', () => {
      expect(numberComparator(100, 115)).toBe('orange');
      expect(numberComparator(1000, 1150)).toBe('orange');
    });

    it('should return red for very different numbers (> 20% difference)', () => {
      expect(numberComparator(100, 130)).toBe('red');
      expect(numberComparator(1000, 1300)).toBe('red');
    });
  });

  describe('normalize', () => {
    it('should replace numbers with letters according to Czech keyboard layout', () => {
      expect(normalize('2')).toBe('E');
      expect(normalize('3')).toBe('S');
      expect(normalize('4')).toBe('C');
      expect(normalize('5')).toBe('R');
    });

    it('should convert to uppercase and remove diacritics', () => {
      expect(normalize('měšťanský')).toBe('MESTANSKY');
      expect(normalize('Příbram')).toBe('PRIBRAM');
    });

    it('should handle mixed input', () => {
      expect(normalize('Brno2')).toBe('BRNOE');
    });
  });

  describe('obfuscateUrl', () => {
    const testUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Test_Image.jpg';

    it('should URL encode non-ASCII characters', () => {
      const result = obfuscateUrl(testUrl);
      expect(result).toContain('https://upload.wikimedia.org/wikipedia/commons/thumb/');
      expect(result).toContain('%');
    });

    it('should preserve URL structure', () => {
      const result = obfuscateUrl(testUrl);
      expect(result.startsWith('https://upload.wikimedia.org/wikipedia/commons/thumb/')).toBe(true);
    });
  });
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
