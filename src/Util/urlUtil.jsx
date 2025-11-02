/**
 * URL Utility for managing language and country routing
 * Handles conversion between internal codes and URL-friendly names
 */

// Mapping between internal language codes and URL segments
export const LANGUAGE_URL_MAP = {
  cs: 'cs',
  de: 'de',
  en: 'en'
};

// Mapping between internal country codes and URL-friendly names
export const COUNTRY_URL_MAP = {
  cz: 'czechia',
  de: 'germany'
};

// Reverse mappings for parsing URLs
export const URL_TO_LANGUAGE = Object.fromEntries(
  Object.entries(LANGUAGE_URL_MAP).map(([code, url]) => [url, code])
);

export const URL_TO_COUNTRY = Object.fromEntries(
  Object.entries(COUNTRY_URL_MAP).map(([code, url]) => [url, code])
);

/**
 * Build a URL path with language and country
 * @param {string} languageCode - Internal language code (cs, de, en)
 * @param {string} countryCode - Internal country code (cz, de)
 * @param {string} path - Path to append (e.g., '/user', '/leader-board')
 * @returns {string} Complete URL path (e.g., '/en/czechia/user')
 */
export function buildUrlPath(languageCode, countryCode, path = '/') {
  const langUrl = LANGUAGE_URL_MAP[languageCode] || LANGUAGE_URL_MAP.cs;
  const countryUrl = COUNTRY_URL_MAP[countryCode] || COUNTRY_URL_MAP.cz;

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // Remove trailing slash from path if it's not root
  const cleanPath = normalizedPath === '/' ? '' : normalizedPath.replace(/\/$/, '');

  return `/${langUrl}/${countryUrl}${cleanPath}`;
}

/**
 * Get language code from URL segment
 * @param {string} urlLang - URL language segment (cs, de, en)
 * @returns {string|null} Internal language code or null if invalid
 */
export function getLanguageFromUrl(urlLang) {
  return URL_TO_LANGUAGE[urlLang] || null;
}

/**
 * Get country code from URL segment
 * @param {string} urlCountry - URL country segment (czechia, germany)
 * @returns {string|null} Internal country code or null if invalid
 */
export function getCountryFromUrl(urlCountry) {
  return URL_TO_COUNTRY[urlCountry] || null;
}

/**
 * Parse URL pathname to extract language, country, and path
 * @param {string} pathname - URL pathname (e.g., '/en/czechia/user')
 * @returns {object} Object with { language, country, path } or null if invalid
 */
export function parseUrl(pathname) {
  const parts = pathname.split('/').filter(Boolean);

  if (parts.length < 2) {
    return null;
  }

  const [langUrl, countryUrl, ...pathParts] = parts;

  const language = getLanguageFromUrl(langUrl);
  const country = getCountryFromUrl(countryUrl);

  if (!language || !country) {
    return null;
  }

  const path = pathParts.length > 0 ? `/${pathParts.join('/')}` : '/';

  return { language, country, path };
}

/**
 * Check if a pathname is a valid language/country route
 * @param {string} pathname - URL pathname
 * @returns {boolean} True if pathname has valid language and country
 */
export function isValidRoute(pathname) {
  return parseUrl(pathname) !== null;
}

/**
 * Get all valid language codes
 * @returns {string[]} Array of language codes
 */
export function getValidLanguages() {
  return Object.keys(LANGUAGE_URL_MAP);
}

/**
 * Get all valid country codes
 * @returns {string[]} Array of country codes
 */
export function getValidCountries() {
  return Object.keys(COUNTRY_URL_MAP);
}
