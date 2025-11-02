import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mergeHistory, getScore, isEog, getTotalScore, getScoresByCountry } from './history';

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

  describe('getTotalScore', () => {
    let localStorageData = {};

    beforeEach(() => {
      // Create a working localStorage mock
      localStorageData = {};

      vi.spyOn(window.localStorage, 'getItem').mockImplementation((key) => {
        return localStorageData[key] || null;
      });

      vi.spyOn(window.localStorage, 'setItem').mockImplementation((key, value) => {
        localStorageData[key] = value;
      });

      vi.spyOn(window.localStorage, 'clear').mockImplementation(() => {
        localStorageData = {};
      });
    });

    afterEach(() => {
      // Clean up after each test
      vi.restoreAllMocks();
    });

    it('should calculate total score across all countries', () => {
      const historyCz = {
        19001: { guesses: ['Praha'], eog: true },
        19002: { guesses: ['Brno'], eog: true }
      };
      const historyDe = {
        19001: { guesses: ['Berlin'], eog: true },
        19002: { guesses: ['Hamburg'], eog: false },
        19003: { guesses: ['München'], eog: true }
      };
      const historyLegacy = {
        19001: { guesses: ['City1'], eog: true }
      };

      window.localStorage.setItem('mestle_history_cz', JSON.stringify(historyCz));
      window.localStorage.setItem('mestle_history_de', JSON.stringify(historyDe));
      window.localStorage.setItem('mestle_history', JSON.stringify(historyLegacy));

      // 2 from CZ + 2 from DE + 1 from legacy = 5
      expect(getTotalScore()).toBe(5);
    });

    it('should return 0 when all histories are empty', () => {
      window.localStorage.setItem('mestle_history_cz', JSON.stringify({}));
      window.localStorage.setItem('mestle_history_de', JSON.stringify({}));
      window.localStorage.setItem('mestle_history', JSON.stringify({}));

      expect(getTotalScore()).toBe(0);
    });

    it('should handle missing localStorage entries', () => {
      const historyCz = {
        19001: { guesses: ['Praha'], eog: true }
      };
      window.localStorage.setItem('mestle_history_cz', JSON.stringify(historyCz));
      // mestle_history_de and mestle_history are not set

      expect(getTotalScore()).toBe(1);
    });

    it('should return 0 when localStorage is completely empty', () => {
      expect(getTotalScore()).toBe(0);
    });

    it('should handle only completed games', () => {
      const historyCz = {
        19001: { guesses: ['Praha'], eog: false },
        19002: { guesses: ['Brno'], eog: false }
      };
      const historyDe = {
        19001: { guesses: ['Berlin'], eog: false }
      };

      window.localStorage.setItem('mestle_history_cz', JSON.stringify(historyCz));
      window.localStorage.setItem('mestle_history_de', JSON.stringify(historyDe));

      expect(getTotalScore()).toBe(0);
    });

    it('should handle mix of completed and incomplete games', () => {
      const historyCz = {
        19001: { guesses: ['Praha'], eog: true },
        19002: { guesses: ['Brno'], eog: false },
        19003: { guesses: ['Ostrava'], eog: true }
      };

      window.localStorage.setItem('mestle_history_cz', JSON.stringify(historyCz));

      expect(getTotalScore()).toBe(2);
    });
  });

  describe('getScoresByCountry', () => {
    let localStorageData = {};

    beforeEach(() => {
      // Create a working localStorage mock
      localStorageData = {};

      vi.spyOn(window.localStorage, 'getItem').mockImplementation((key) => {
        return localStorageData[key] || null;
      });

      vi.spyOn(window.localStorage, 'setItem').mockImplementation((key, value) => {
        localStorageData[key] = value;
      });

      vi.spyOn(window.localStorage, 'clear').mockImplementation(() => {
        localStorageData = {};
      });
    });

    afterEach(() => {
      // Clean up after each test
      vi.restoreAllMocks();
    });

    it('should return scores breakdown by country', () => {
      const historyCz = {
        19001: { guesses: ['Praha'], eog: true },
        19002: { guesses: ['Brno'], eog: true }
      };
      const historyDe = {
        19001: { guesses: ['Berlin'], eog: true },
        19002: { guesses: ['Hamburg'], eog: false },
        19003: { guesses: ['München'], eog: true }
      };
      const historyLegacy = {
        19001: { guesses: ['City1'], eog: true }
      };

      window.localStorage.setItem('mestle_history_cz', JSON.stringify(historyCz));
      window.localStorage.setItem('mestle_history_de', JSON.stringify(historyDe));
      window.localStorage.setItem('mestle_history', JSON.stringify(historyLegacy));

      const scores = getScoresByCountry();

      expect(scores.cz).toBe(2);
      expect(scores.de).toBe(2);
      expect(scores.legacy).toBe(1);
      expect(scores.total).toBe(5);
    });

    it('should return zero scores when all histories are empty', () => {
      window.localStorage.setItem('mestle_history_cz', JSON.stringify({}));
      window.localStorage.setItem('mestle_history_de', JSON.stringify({}));
      window.localStorage.setItem('mestle_history', JSON.stringify({}));

      const scores = getScoresByCountry();

      expect(scores.cz).toBe(0);
      expect(scores.de).toBe(0);
      expect(scores.legacy).toBe(0);
      expect(scores.total).toBe(0);
    });

    it('should handle missing localStorage entries', () => {
      const historyCz = {
        19001: { guesses: ['Praha'], eog: true }
      };
      window.localStorage.setItem('mestle_history_cz', JSON.stringify(historyCz));

      const scores = getScoresByCountry();

      expect(scores.cz).toBe(1);
      expect(scores.de).toBe(0);
      expect(scores.legacy).toBe(0);
      expect(scores.total).toBe(1);
    });

    it('should correctly sum all countries in total', () => {
      const historyCz = {
        19001: { guesses: ['Praha'], eog: true },
        19002: { guesses: ['Brno'], eog: true },
        19003: { guesses: ['Ostrava'], eog: true }
      };
      const historyDe = {
        19001: { guesses: ['Berlin'], eog: true }
      };

      window.localStorage.setItem('mestle_history_cz', JSON.stringify(historyCz));
      window.localStorage.setItem('mestle_history_de', JSON.stringify(historyDe));

      const scores = getScoresByCountry();

      expect(scores.total).toBe(scores.cz + scores.de + scores.legacy);
    });
  });
});
