import { useState, useEffect } from 'react';

/**
 * Utility functions for precise arrow direction feature flag
 * This feature allows users to see exact azimuth direction instead of 8-way directions
 * Uses localStorage for user preference persistence (unlike betaUtil which uses cookies
 * for Netlify branch detection and requires page reload to switch code deployments)
 */

const PRECISE_ARROW_KEY = 'preciseArrow';

// Event name for custom events when precise arrow setting changes
const PRECISE_ARROW_CHANGE_EVENT = 'preciseArrowChange';

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
 * This is a pure state change that doesn't require page reload
 * Dispatches a custom event to notify all components using usePreciseArrow hook
 */
export const togglePreciseArrow = () => {
  const currentValue = isPreciseArrow();
  const newValue = !currentValue;
  window.localStorage.setItem(PRECISE_ARROW_KEY, newValue.toString());
  // Dispatch custom event to notify all listeners
  window.dispatchEvent(new CustomEvent(PRECISE_ARROW_CHANGE_EVENT, { detail: newValue }));
};

/**
 * React hook to use precise arrow state with automatic updates
 * This hook listens to changes and triggers re-renders when the setting changes
 * @returns {boolean} true if precise arrow is enabled
 */
export const usePreciseArrow = () => {
  const [isEnabled, setIsEnabled] = useState(isPreciseArrow());

  useEffect(() => {
    const handleChange = (event) => {
      setIsEnabled(event.detail);
    };

    window.addEventListener(PRECISE_ARROW_CHANGE_EVENT, handleChange);
    return () => {
      window.removeEventListener(PRECISE_ARROW_CHANGE_EVENT, handleChange);
    };
  }, []);

  return isEnabled;
};
