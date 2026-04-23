import { useSyncExternalStore } from 'react';

/**
 * Utility functions for precise arrow direction feature flag
 * This feature allows users to see exact azimuth direction instead of 8-way directions
 * Uses localStorage for user preference persistence (unlike betaUtil which uses cookies
 * for Netlify branch detection and requires page reload to switch code deployments)
 */

const PRECISE_ARROW_KEY = 'preciseArrow';
const PRECISE_ARROW_CHANGE_EVENT = 'preciseArrowChange';

/**
 * Check if precise arrow mode is enabled
 * @returns {boolean} true if precise arrow is enabled
 */
export const isPreciseArrow = () => {
  return window.localStorage.getItem(PRECISE_ARROW_KEY) === 'true';
};

/**
 * Toggle precise arrow mode on/off
 * This is a pure state change that doesn't require page reload
 * Dispatches a custom event to notify all components using usePreciseArrow hook
 */
export const togglePreciseArrow = () => {
  const newValue = !isPreciseArrow();
  window.localStorage.setItem(PRECISE_ARROW_KEY, newValue.toString());
  window.dispatchEvent(new CustomEvent(PRECISE_ARROW_CHANGE_EVENT));
};

const subscribe = (callback) => {
  window.addEventListener(PRECISE_ARROW_CHANGE_EVENT, callback);
  return () => window.removeEventListener(PRECISE_ARROW_CHANGE_EVENT, callback);
};

/**
 * React hook to use precise arrow state with automatic updates
 * Uses useSyncExternalStore to sync with localStorage-backed state
 * @returns {boolean} true if precise arrow is enabled
 */
export const usePreciseArrow = () => useSyncExternalStore(subscribe, isPreciseArrow);
