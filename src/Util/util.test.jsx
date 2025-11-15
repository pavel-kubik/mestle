import { describe, it, expect } from 'vitest';
import { countDirection, calculateAzimuth, neighboringRegion, regionComparator, numberComparator, normalize, obfuscateUrl } from './util';

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

  describe('calculateAzimuth', () => {
    it('should return null for same coordinates', () => {
      const city = { latitude: 50, longitude: 14 };
      expect(calculateAzimuth(city, city)).toBe(null);
    });

    it('should calculate north bearing (0°)', () => {
      const prague = { latitude: 50.0755, longitude: 14.4378 };
      const north = { latitude: 51.0755, longitude: 14.4378 };
      const azimuth = calculateAzimuth(prague, north);
      // Allow for small variation due to Earth's curvature
      expect(azimuth).toBeGreaterThanOrEqual(0);
      expect(azimuth).toBeLessThanOrEqual(10);
    });

    it('should calculate east bearing (90°)', () => {
      const prague = { latitude: 50.0755, longitude: 14.4378 };
      const east = { latitude: 50.0755, longitude: 15.4378 };
      const azimuth = calculateAzimuth(prague, east);
      // Should be close to 90 degrees
      expect(azimuth).toBeGreaterThanOrEqual(85);
      expect(azimuth).toBeLessThanOrEqual(95);
    });

    it('should calculate south bearing (180°)', () => {
      const prague = { latitude: 50.0755, longitude: 14.4378 };
      const south = { latitude: 49.0755, longitude: 14.4378 };
      const azimuth = calculateAzimuth(prague, south);
      // Should be close to 180 degrees
      expect(azimuth).toBeGreaterThanOrEqual(175);
      expect(azimuth).toBeLessThanOrEqual(185);
    });

    it('should calculate west bearing (270°)', () => {
      const prague = { latitude: 50.0755, longitude: 14.4378 };
      const west = { latitude: 50.0755, longitude: 13.4378 };
      const azimuth = calculateAzimuth(prague, west);
      // Should be close to 270 degrees
      expect(azimuth).toBeGreaterThanOrEqual(265);
      expect(azimuth).toBeLessThanOrEqual(275);
    });

    it('should calculate northeast bearing', () => {
      const prague = { latitude: 50.0755, longitude: 14.4378 };
      const northeast = { latitude: 51.0755, longitude: 15.4378 };
      const azimuth = calculateAzimuth(prague, northeast);
      // Should be between 0 and 90 degrees
      expect(azimuth).toBeGreaterThan(0);
      expect(azimuth).toBeLessThan(90);
    });

    it('should return value in 0-360 range', () => {
      const city1 = { latitude: 50.0755, longitude: 14.4378 };
      const city2 = { latitude: 48.2082, longitude: 16.3738 }; // Vienna
      const azimuth = calculateAzimuth(city1, city2);
      expect(azimuth).toBeGreaterThanOrEqual(0);
      expect(azimuth).toBeLessThan(360);
    });
  });

  describe('neighboringRegion', () => {
    it('should identify Prague and Central Bohemia as neighbors', () => {
      expect(neighboringRegion('Hl. m. Praha', 'Středočeský')).toBe(true);
      expect(neighboringRegion('Středočeský', 'Hl. m. Praha')).toBe(true);
    });

    it('should identify non-neighboring regions', () => {
      expect(neighboringRegion('Středočeský', 'Moravskoslezský')).toBe(false);
      expect(neighboringRegion('Karlovarský', 'Jihomoravský')).toBe(false);
    });

    it('should handle invalid regions gracefully', () => {
      expect(neighboringRegion('InvalidRegion', 'Středočeský')).toBe(undefined);
      expect(neighboringRegion('Středočeský', 'InvalidRegion')).toBe(false);
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
