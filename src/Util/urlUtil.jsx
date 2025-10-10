// URL utility functions for language and country handling

// Internal country codes to URL country names mapping
export const COUNTRY_CODE_TO_URL = {
  cz: 'czechia',
  de: 'germany'
};

// URL country names to internal country codes mapping
export const URL_TO_COUNTRY_CODE = {
  czechia: 'cz',
  germany: 'de'
};

// Supported country names for URL path validation
export const VALID_URL_COUNTRIES = ['czechia', 'germany'];

// Supported languages for URL path validation
export const VALID_LANGUAGES = ['cs', 'de', 'en'];

/**
 * Convert internal country code to URL country name
 * @param {string} countryCode - Internal country code (cz, de)
 * @returns {string} URL country name (czechia, germany)
 */
export const countryCodeToUrl = (countryCode) => {
  return COUNTRY_CODE_TO_URL[countryCode] || 'czechia';
};

/**
 * Convert URL country name to internal country code
 * @param {string} urlCountry - URL country name (czechia, germany)
 * @returns {string} Internal country code (cz, de)
 */
export const urlToCountryCode = (urlCountry) => {
  return URL_TO_COUNTRY_CODE[urlCountry] || 'cz';
};

/**
 * Build a URL path with country and language in the path
 * @param {string} countryCode - Internal country code (cz, de)
 * @param {string} languageCode - Language code (cs, de, en)
 * @param {string} path - Path without country/language prefix
 * @returns {string} Full URL path like /czechia/cs/user
 */
export const buildUrlPath = (countryCode, languageCode, path = '') => {
  // Convert country code to URL-friendly name
  const urlCountry = countryCodeToUrl(countryCode);

  // Validate language
  if (!VALID_LANGUAGES.includes(languageCode)) {
    console.warn(`Invalid language code: ${languageCode}, defaulting to 'cs'`);
    languageCode = 'cs';
  }

  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${urlCountry}/${languageCode}${cleanPath}`;
};

/**
 * Parse country from URL pathname
 * @param {string} pathname - URL pathname like /czechia/cs/user
 * @returns {string|null} Internal country code (cz, de) or null if not found
 */
export const getCountryFromPath = (pathname) => {
  const match = pathname.match(/^\/([a-z]+)\//);
  if (match && VALID_URL_COUNTRIES.includes(match[1])) {
    return urlToCountryCode(match[1]);
  }
  return null;
};

/**
 * Parse language from URL pathname
 * @param {string} pathname - URL pathname like /czechia/cs/user
 * @returns {string|null} Language code (cs, de, en) or null if not found
 */
export const getLanguageFromPath = (pathname) => {
  const match = pathname.match(/^\/[a-z]+\/([a-z]{2})(\/|$)/);
  if (match && VALID_LANGUAGES.includes(match[1])) {
    return match[1];
  }
  return null;
};

/**
 * Remove country and language prefix from path
 * @param {string} pathname - URL pathname like /czechia/cs/user
 * @returns {string} Path without country/language prefix like /user
 */
export const removeCountryAndLanguagePrefix = (pathname) => {
  return pathname.replace(/^\/[a-z]+\/[a-z]{2}(\/|$)/, '/');
};

/**
 * @deprecated Use removeCountryAndLanguagePrefix instead
 * Remove language prefix from path (kept for backward compatibility)
 * @param {string} pathname - URL pathname with language prefix
 * @returns {string} Path without language prefix
 */
export const removeLanguagePrefix = (pathname) => {
  return removeCountryAndLanguagePrefix(pathname);
};
