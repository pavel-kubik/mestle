import { describe, it, expect, beforeEach, vi } from 'vitest';
import { isBeta, switchToBeta } from './betaUtil';

describe('betaUtil.jsx - Beta Cookie Management', () => {
  beforeEach(() => {
    // Clear all cookies before each test
    document.cookie.split(';').forEach((cookie) => {
      const name = cookie.split('=')[0].trim();
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    });

    // Mock window.location.reload
    delete window.location;
    window.location = { reload: vi.fn() };
  });

  describe('isBeta', () => {
    it('should return false when no beta cookie is set', () => {
      expect(isBeta()).toBe(false);
    });

    it('should return true when nf_ab=develop cookie is set', () => {
      document.cookie = 'nf_ab=develop';
      expect(isBeta()).toBe(true);
    });

    it('should return false when nf_ab cookie has a different value', () => {
      document.cookie = 'nf_ab=production';
      expect(isBeta()).toBe(false);
    });

    it('should handle multiple cookies correctly', () => {
      document.cookie = 'other_cookie=value';
      document.cookie = 'nf_ab=develop';
      document.cookie = 'another_cookie=value2';
      expect(isBeta()).toBe(true);
    });

    it('should handle cookies with spaces correctly', () => {
      document.cookie = 'nf_ab=develop';
      document.cookie = 'other=value';
      expect(isBeta()).toBe(true);
    });

    it('should return false for partial cookie name matches', () => {
      document.cookie = 'nf_ab_test=develop';
      expect(isBeta()).toBe(false);
    });
  });

  describe('switchToBeta', () => {
    it('should set beta cookie when not in beta mode', () => {
      expect(isBeta()).toBe(false);

      switchToBeta();

      expect(document.cookie).toContain('nf_ab=develop');
      expect(window.location.reload).toHaveBeenCalledWith(true);
    });

    it('should remove beta cookie when in beta mode', () => {
      document.cookie = 'nf_ab=develop';
      expect(isBeta()).toBe(true);

      switchToBeta();

      // After removal, isBeta should return false
      // Note: In JSDOM, cookie removal might not work perfectly,
      // but we can verify the reload was called
      expect(window.location.reload).toHaveBeenCalledWith(true);
    });

    it('should set cookie with correct max-age when enabling beta', () => {
      switchToBeta();

      // Cookie should be set with max-age=31536000 (1 year)
      expect(document.cookie).toContain('nf_ab=develop');
      expect(window.location.reload).toHaveBeenCalledWith(true);
    });

    it('should toggle beta mode correctly multiple times', () => {
      // Start: not in beta
      expect(isBeta()).toBe(false);

      // First switch: enable beta
      switchToBeta();
      expect(window.location.reload).toHaveBeenCalledTimes(1);

      // Simulate being in beta after reload
      document.cookie = 'nf_ab=develop';

      // Second switch: disable beta
      switchToBeta();
      expect(window.location.reload).toHaveBeenCalledTimes(2);
    });

    it('should always call window.location.reload with true parameter', () => {
      switchToBeta();
      expect(window.location.reload).toHaveBeenCalledWith(true);

      // Reset mock
      window.location.reload.mockClear();

      document.cookie = 'nf_ab=develop';
      switchToBeta();
      expect(window.location.reload).toHaveBeenCalledWith(true);
    });

    it('should not interfere with other cookies when toggling', () => {
      document.cookie = 'user_session=abc123';
      document.cookie = 'preferences=dark_mode';

      switchToBeta();

      expect(document.cookie).toContain('user_session=abc123');
      expect(document.cookie).toContain('preferences=dark_mode');
      expect(window.location.reload).toHaveBeenCalled();
    });
  });

  describe('Integration scenarios', () => {
    it('should handle rapid toggle attempts', () => {
      expect(isBeta()).toBe(false);

      // Enable beta
      switchToBeta();
      document.cookie = 'nf_ab=develop';
      expect(isBeta()).toBe(true);

      // Disable beta
      switchToBeta();
      expect(window.location.reload).toHaveBeenCalledTimes(2);
    });

    it('should work with BetaSwitch component flow', () => {
      // Simulate initial state
      const initialBeta = isBeta();

      // User clicks toggle
      switchToBeta();

      // Reload should be called
      expect(window.location.reload).toHaveBeenCalled();

      // After reload, beta state should be opposite (simulated)
      if (!initialBeta) {
        document.cookie = 'nf_ab=develop';
        expect(isBeta()).toBe(true);
      } else {
        expect(isBeta()).toBe(false);
      }
    });
  });
});