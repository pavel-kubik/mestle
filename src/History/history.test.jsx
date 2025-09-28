import { describe, it, expect } from 'vitest';
import { mergeHistory, getScore, isEog } from './history';

describe('history.jsx - Game History Management', () => {
  describe('mergeHistory', () => {
    it('should merge both non-eog histories correctly', () => {
      const h1 = {
        guesses: ['Praha', 'Brno'],
        eog: false
      };
      const h2 = {
        guesses: ['Plzen', 'Ostrava'],
        eog: false
      };
      const merged = mergeHistory(h1, h2);
      expect(merged.guesses).toEqual(['Ostrava', 'Plzen', 'Praha', 'Brno']);
      expect(merged.eog).toEqual(false);
    });

    it('should prioritize first history when only first has eog', () => {
      const h1 = {
        guesses: ['Praha', 'Brno'],
        eog: true
      };
      const h2 = {
        guesses: ['Plzen', 'Ostrava'],
        eog: false
      };
      const merged = mergeHistory(h1, h2);
      expect(merged.guesses).toEqual(['Ostrava', 'Plzen', 'Praha', 'Brno']);
      expect(merged.eog).toEqual(true);
    });

    it('should prioritize second history when only second has eog', () => {
      const h1 = {
        guesses: ['Praha', 'Brno'],
        eog: false
      };
      const h2 = {
        guesses: ['Plzen', 'Ostrava'],
        eog: true
      };
      const merged = mergeHistory(h1, h2);
      expect(merged.guesses).toEqual(['Brno', 'Praha', 'Plzen', 'Ostrava']);
      expect(merged.eog).toEqual(true);
    });

    it('should handle both histories having eog', () => {
      const h1 = {
        guesses: ['Praha', 'Brno'],
        eog: true
      };
      const h2 = {
        guesses: ['Plzen', 'Brno'],
        eog: true
      };
      const merged = mergeHistory(h1, h2);
      expect(merged.guesses).toEqual(['Praha', 'Plzen', 'Brno']);
      expect(merged.eog).toEqual(true);
    });

    it('should handle duplicates when first history has eog', () => {
      const h1 = {
        guesses: ['Praha', 'Brno'],
        eog: true
      };
      const h2 = {
        guesses: ['Plzen', 'Brno'],
        eog: false
      };
      const merged = mergeHistory(h1, h2);
      expect(merged.guesses).toEqual(['Plzen', 'Praha', 'Brno']);
      expect(merged.eog).toEqual(true);
    });

    it('should handle duplicates when second history has eog', () => {
      const h1 = {
        guesses: ['Praha', 'Brno'],
        eog: false
      };
      const h2 = {
        guesses: ['Plzen', 'Brno'],
        eog: true
      };
      const merged = mergeHistory(h1, h2);
      expect(merged.guesses).toEqual(['Praha', 'Plzen', 'Brno']);
      expect(merged.eog).toEqual(true);
    });

    it('should handle empty first history', () => {
      const h1 = {
        guesses: [],
        eog: false
      };
      const h2 = {
        guesses: ['Plzen', 'Brno'],
        eog: true
      };
      const merged = mergeHistory(h1, h2);
      expect(merged.guesses).toEqual(['Plzen', 'Brno']);
      expect(merged.eog).toEqual(true);
    });

    it('should handle empty second history', () => {
      const h1 = {
        guesses: ['Praha', 'Brno'],
        eog: false
      };
      const h2 = {
        guesses: [],
        eog: false
      };
      const merged = mergeHistory(h1, h2);
      expect(merged.guesses).toEqual(['Praha', 'Brno']);
      expect(merged.eog).toEqual(false);
    });

    it('should handle both histories being empty', () => {
      const h1 = {
        guesses: [],
        eog: false
      };
      const h2 = {
        guesses: [],
        eog: false
      };
      const merged = mergeHistory(h1, h2);
      expect(merged.guesses).toEqual([]);
      expect(merged.eog).toEqual(false);
    });
  });

  describe('getScore', () => {
    it('should calculate score correctly from history', () => {
      const history = {
        19001: { guesses: ['Praha'], eog: true },
        19002: { guesses: ['Brno', 'Ostrava'], eog: false },
        19003: { guesses: ['Plzen'], eog: true },
        19004: { guesses: ['Liberec'], eog: true }
      };
      expect(getScore(history)).toBe(3);
    });

    it('should return 0 for empty history', () => {
      expect(getScore({})).toBe(0);
    });

    it('should return 0 when no games are completed', () => {
      const history = {
        19001: { guesses: ['Praha'], eog: false },
        19002: { guesses: ['Brno', 'Ostrava'], eog: false }
      };
      expect(getScore(history)).toBe(0);
    });
  });

  describe('isEog', () => {
    it('should return true when eog is true', () => {
      const todayHistory = { guesses: ['Praha'], eog: true };
      expect(isEog(todayHistory)).toBe(true);
    });

    it('should return false when eog is false', () => {
      const todayHistory = { guesses: ['Praha'], eog: false };
      expect(isEog(todayHistory)).toBe(false);
    });

    it('should return false when history is null', () => {
      expect(isEog(null)).toBe(false);
    });

    it('should return false when history is undefined', () => {
      expect(isEog(undefined)).toBe(false);
    });

    it('should return false when eog property is missing', () => {
      const todayHistory = { guesses: ['Praha'] };
      expect(isEog(todayHistory)).toBe(false);
    });
  });
});
