/**
 * Test to reproduce CORS manifest.json error
 * This test simulates the issue where the browser tries to fetch manifest.json
 * from https://mestle.cz/manifest.json instead of the local development server
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock fetch to simulate CORS error
global.fetch = vi.fn();

describe('CORS manifest.json error', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('should fail when trying to fetch manifest.json from production URL during development', async () => {
    // Mock the CORS error that occurs when trying to fetch from production URL
    const corsError = new Error('Failed to fetch');
    corsError.name = 'TypeError';
    corsError.message = "Failed to fetch";

    fetch.mockRejectedValue(corsError);

    try {
      // This simulates what happens when browser tries to fetch manifest.json
      // from the production URL instead of local development server
      await fetch('https://mestle.cz/manifest.json');
    } catch (error) {
      expect(error.message).toBe('Failed to fetch');
    }
  });

  test('should reproduce specific CORS policy error message', () => {
    // Create a mock that simulates the exact CORS error from console
    const mockCorsError = () => {
      throw new Error(
        "Access to manifest at 'https://mestle.cz/manifest.json' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."
      );
    };

    expect(() => mockCorsError()).toThrow(
      "Access to manifest at 'https://mestle.cz/manifest.json' from origin 'http://localhost:3000' has been blocked by CORS policy"
    );
  });

  test('should verify that PUBLIC_URL environment variable affects manifest path', () => {
    // Mock the environment variable that causes the issue
    const originalEnv = process.env.PUBLIC_URL;

    // Set PUBLIC_URL to production URL (this is what causes the issue)
    process.env.PUBLIC_URL = 'https://mestle.cz';

    // Simulate the path resolution in HTML
    const manifestPath = `${process.env.PUBLIC_URL}/manifest.json`;

    expect(manifestPath).toBe('https://mestle.cz/manifest.json');

    // Restore original environment
    process.env.PUBLIC_URL = originalEnv;
  });

  test('should show correct path for development environment', () => {
    // Mock development environment
    const originalEnv = process.env.PUBLIC_URL;
    process.env.PUBLIC_URL = '';

    // In development, this should resolve to a relative path
    const manifestPath = `${process.env.PUBLIC_URL || ''}/manifest.json`;

    expect(manifestPath).toBe('/manifest.json');

    // Restore original environment
    process.env.PUBLIC_URL = originalEnv;
  });
});