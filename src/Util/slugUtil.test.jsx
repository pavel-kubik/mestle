import { describe, it, expect } from 'vitest';
import { slugify, createSlugToCityMap, getCityNameFromSlug } from './slugUtil';

describe('slugUtil', () => {
  describe('slugify', () => {
    it('should convert German umlauts correctly', () => {
      expect(slugify('München')).toBe('muenchen');
      expect(slugify('Köln')).toBe('koeln');
      expect(slugify('Düsseldorf')).toBe('duesseldorf');
      expect(slugify('Lübeck')).toBe('luebeck');
    });

    it('should convert German ß correctly', () => {
      expect(slugify('Straße')).toBe('strasse');
    });

    it('should convert Czech characters correctly', () => {
      expect(slugify('Plzeň')).toBe('plzen');
      expect(slugify('Praha')).toBe('praha');
      expect(slugify('Brno')).toBe('brno');
      expect(slugify('České Budějovice')).toBe('ceske-budejovice');
    });

    it('should handle uppercase characters', () => {
      expect(slugify('MÜNCHEN')).toBe('muenchen');
      expect(slugify('PLZEŇ')).toBe('plzen');
    });

    it('should handle mixed case', () => {
      expect(slugify('MüNcHeN')).toBe('muenchen');
    });

    it('should handle spaces and special characters', () => {
      expect(slugify('Bad Homburg')).toBe('bad-homburg');
      expect(slugify('Frankfurt am Main')).toBe('frankfurt-am-main');
    });

    it('should handle cities without special characters', () => {
      expect(slugify('Berlin')).toBe('berlin');
      expect(slugify('Hamburg')).toBe('hamburg');
    });

    it('should handle empty string', () => {
      expect(slugify('')).toBe('');
    });

    it('should remove leading and trailing hyphens', () => {
      expect(slugify('-München-')).toBe('muenchen');
    });
  });

  describe('createSlugToCityMap', () => {
    it('should create a map from slugs to city names', () => {
      const cities = [{ name: 'München' }, { name: 'Berlin' }, { name: 'Plzeň' }];

      const map = createSlugToCityMap(cities);

      expect(map['muenchen']).toBe('München');
      expect(map['berlin']).toBe('Berlin');
      expect(map['plzen']).toBe('Plzeň');
    });

    it('should handle empty array', () => {
      const map = createSlugToCityMap([]);
      expect(Object.keys(map).length).toBe(0);
    });
  });

  describe('getCityNameFromSlug', () => {
    const cities = [{ name: 'München' }, { name: 'Berlin' }, { name: 'Plzeň' }];

    it('should find city name from slug', () => {
      expect(getCityNameFromSlug('muenchen', cities)).toBe('München');
      expect(getCityNameFromSlug('berlin', cities)).toBe('Berlin');
      expect(getCityNameFromSlug('plzen', cities)).toBe('Plzeň');
    });

    it('should return null for non-existent slug', () => {
      expect(getCityNameFromSlug('notfound', cities)).toBeNull();
    });
  });
});
