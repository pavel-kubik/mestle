import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  addAttempt,
  storeAttempts,
  loadAttempts
} from './attemptUtil';

// Mock global fetch
global.fetch = vi.fn();

describe('attemptUtil.jsx - API Utility Functions', () => {
  const mockJwt = 'mock-jwt-token';
  const mockTodaySeed = 19631;
  const mockAttempt = 'Praha';
  const mockAttempts = ['Brno', 'Ostrava', 'Praha'];
  const mockEog = true;

  beforeEach(() => {
    fetch.mockClear();
  });

  describe('addAttempt', () => {
    it('should add attempt successfully', async () => {
      fetch.mockResolvedValueOnce({
        ok: true
      });

      const result = await addAttempt(mockJwt, mockTodaySeed, mockAttempt, mockEog);

      expect(fetch).toHaveBeenCalledWith('/.netlify/functions/attempts', {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': mockJwt
        },
        body: JSON.stringify({
          todaySeed: mockTodaySeed,
          attempt: mockAttempt,
          eog: mockEog
        })
      });

      expect(result).toBe(true);
    });

    it('should handle failed attempt addition', async () => {
      fetch.mockResolvedValueOnce({
        ok: false
      });

      const result = await addAttempt(mockJwt, mockTodaySeed, mockAttempt, false);

      expect(result).toBe(false);
    });

    it('should handle network errors in addAttempt', async () => {
      fetch.mockRejectedValueOnce(new Error('Network error'));

      // Function doesn't handle errors, so it should throw
      await expect(addAttempt(mockJwt, mockTodaySeed, mockAttempt, false))
        .rejects
        .toThrow('Network error');
    });

    it('should send correct headers and authentication', async () => {
      const customJwt = 'custom-jwt-token-123';
      fetch.mockResolvedValueOnce({ ok: true });

      await addAttempt(customJwt, mockTodaySeed, mockAttempt, mockEog);

      const fetchCall = fetch.mock.calls[0];
      expect(fetchCall[1].headers['x-access-token']).toBe(customJwt);
      expect(fetchCall[1].headers['Content-Type']).toBe('application/json');
    });
  });

  describe('storeAttempts', () => {
    it('should store attempts successfully', async () => {
      fetch.mockResolvedValueOnce({
        ok: true
      });

      const result = await storeAttempts(mockJwt, mockTodaySeed, mockAttempts, mockEog);

      expect(fetch).toHaveBeenCalledWith('/.netlify/functions/attempts', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': mockJwt
        },
        body: JSON.stringify({
          todaySeed: mockTodaySeed,
          attempts: mockAttempts,
          eog: mockEog
        })
      });

      expect(result).toBe(true);
    });

    it('should handle failed attempt storage', async () => {
      fetch.mockResolvedValueOnce({
        ok: false
      });

      const result = await storeAttempts(mockJwt, mockTodaySeed, mockAttempts, false);

      expect(result).toBe(false);
    });

    it('should handle empty attempts array', async () => {
      fetch.mockResolvedValueOnce({ ok: true });

      const result = await storeAttempts(mockJwt, mockTodaySeed, [], false);

      const fetchCall = fetch.mock.calls[0];
      const requestBody = JSON.parse(fetchCall[1].body);

      expect(requestBody.attempts).toEqual([]);
      expect(result).toBe(true);
    });

    it('should handle large attempts arrays', async () => {
      const largeAttempts = Array(20).fill().map((_, i) => `City${i}`);
      fetch.mockResolvedValueOnce({ ok: true });

      const result = await storeAttempts(mockJwt, mockTodaySeed, largeAttempts, false);

      const fetchCall = fetch.mock.calls[0];
      const requestBody = JSON.parse(fetchCall[1].body);

      expect(requestBody.attempts).toEqual(largeAttempts);
      expect(result).toBe(true);
    });
  });

  describe('loadAttempts', () => {
    const mockHistoryData = {
      attempts: ['Brno', 'Ostrava'],
      eog: false
    };

    it('should load attempts successfully', async () => {
      const mockResponseData = {
        history: JSON.stringify(mockHistoryData)
      };

      fetch.mockResolvedValueOnce({
        status: 200,
        json: vi.fn().mockResolvedValue(mockResponseData)
      });

      const result = await loadAttempts(mockJwt, mockTodaySeed);

      expect(fetch).toHaveBeenCalledWith(
        `/.netlify/functions/attempts/?seed=${mockTodaySeed}`,
        {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': mockJwt
          }
        }
      );

      expect(result).toEqual(mockHistoryData);
    });

    it('should handle non-200 status codes', async () => {
      fetch.mockResolvedValueOnce({
        status: 404,
        json: vi.fn().mockResolvedValue({ error: 'Not found' })
      });

      const result = await loadAttempts(mockJwt, mockTodaySeed);

      expect(result).toBeUndefined();
    });

    it('should handle malformed JSON response', async () => {
      const mockResponseData = {
        history: 'invalid-json'
      };

      fetch.mockResolvedValueOnce({
        status: 200,
        json: vi.fn().mockResolvedValue(mockResponseData)
      });

      // Should throw when trying to parse invalid JSON
      await expect(loadAttempts(mockJwt, mockTodaySeed)).rejects.toThrow();
    });

    it('should handle empty history response', async () => {
      const mockResponseData = {
        history: JSON.stringify({ attempts: [], eog: false })
      };

      fetch.mockResolvedValueOnce({
        status: 200,
        json: vi.fn().mockResolvedValue(mockResponseData)
      });

      const result = await loadAttempts(mockJwt, mockTodaySeed);

      expect(result).toEqual({ attempts: [], eog: false });
    });

    it('should build correct query URL with seed parameter', async () => {
      const customSeed = 12345;
      fetch.mockResolvedValueOnce({
        status: 200,
        json: vi.fn().mockResolvedValue({ history: JSON.stringify(mockHistoryData) })
      });

      await loadAttempts(mockJwt, customSeed);

      expect(fetch).toHaveBeenCalledWith(
        `/.netlify/functions/attempts/?seed=${customSeed}`,
        expect.any(Object)
      );
    });
  });

  describe('API integration patterns', () => {
    it('should handle JWT token expiration scenario', async () => {
      fetch.mockResolvedValueOnce({
        status: 401,
        json: vi.fn().mockResolvedValue({ error: 'Token expired' })
      });

      const result = await loadAttempts(mockJwt, mockTodaySeed);

      expect(result).toBeUndefined();
      // In a real app, this would trigger a re-authentication flow
    });

    it('should handle network timeout scenarios', async () => {
      fetch.mockRejectedValueOnce(new Error('Request timeout'));

      await expect(addAttempt(mockJwt, mockTodaySeed, mockAttempt, false))
        .rejects
        .toThrow('Request timeout');
    });

    it('should maintain consistent API contract', () => {
      // Verify all functions accept JWT as first parameter
      expect(addAttempt.length).toBe(4);
      expect(storeAttempts.length).toBe(4);
      expect(loadAttempts.length).toBe(2);
    });

    it('should use consistent HTTP methods', async () => {
      fetch
        .mockResolvedValueOnce({ ok: true })                    // addAttempt
        .mockResolvedValueOnce({ ok: true })                    // storeAttempts
        .mockResolvedValueOnce({                                // loadAttempts
          status: 200,
          json: vi.fn().mockResolvedValue({
            history: JSON.stringify({ attempts: [], eog: false })
          })
        });

      await addAttempt(mockJwt, mockTodaySeed, mockAttempt, false);
      await storeAttempts(mockJwt, mockTodaySeed, mockAttempts, false);
      await loadAttempts(mockJwt, mockTodaySeed);

      const fetchCalls = fetch.mock.calls;
      expect(fetchCalls[0][1].method).toBe('PUT');    // addAttempt
      expect(fetchCalls[1][1].method).toBe('POST');   // storeAttempts
      expect(fetchCalls[2][1].method).toBe('GET');    // loadAttempts
    });
  });

  describe('security and data validation', () => {
    it('should include authentication headers in all requests', async () => {
      fetch
        .mockResolvedValueOnce({ ok: true })                    // addAttempt
        .mockResolvedValueOnce({ ok: true })                    // storeAttempts
        .mockResolvedValueOnce({                                // loadAttempts
          status: 200,
          json: vi.fn().mockResolvedValue({
            history: JSON.stringify({ attempts: [], eog: false })
          })
        });

      await addAttempt(mockJwt, mockTodaySeed, mockAttempt, false);
      await storeAttempts(mockJwt, mockTodaySeed, mockAttempts, false);
      await loadAttempts(mockJwt, mockTodaySeed);

      const fetchCalls = fetch.mock.calls;
      fetchCalls.forEach((call) => {
        expect(call[1].headers['x-access-token']).toBe(mockJwt);
      });
    });

    it('should properly serialize request data', async () => {
      fetch.mockResolvedValue({ ok: true });

      await addAttempt(mockJwt, mockTodaySeed, mockAttempt, mockEog);

      const fetchCall = fetch.mock.calls[0];
      const requestBody = JSON.parse(fetchCall[1].body);

      expect(requestBody).toEqual({
        todaySeed: mockTodaySeed,
        attempt: mockAttempt,
        eog: mockEog
      });
    });

    it('should handle special characters in city names', async () => {
      const cityWithSpecialChars = 'Říčany';
      fetch.mockResolvedValue({ ok: true });

      await addAttempt(mockJwt, mockTodaySeed, cityWithSpecialChars, false);

      const fetchCall = fetch.mock.calls[0];
      const requestBody = JSON.parse(fetchCall[1].body);

      expect(requestBody.attempt).toBe(cityWithSpecialChars);
    });
  });
});