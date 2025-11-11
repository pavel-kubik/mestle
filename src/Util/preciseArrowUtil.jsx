/**
 * Utility functions for precise arrow direction feature flag
 * This feature allows users to see exact azimuth direction instead of 8-way directions
 */

const PRECISE_ARROW_KEY = 'preciseArrow';

/**
 * Check if precise arrow mode is enabled
 * @returns {boolean} true if precise arrow is enabled
 */
export const isPreciseArrow = () => {
  const value = window.localStorage.getItem(PRECISE_ARROW_KEY);
  return value === 'true';
};

/**
 * Toggle precise arrow mode on/off
 */
export const togglePreciseArrow = () => {
  const currentValue = isPreciseArrow();
  window.localStorage.setItem(PRECISE_ARROW_KEY, (!currentValue).toString());
  window.location.reload(true);
};
