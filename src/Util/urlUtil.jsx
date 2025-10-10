// URL utility functions for language and country handling

export const COUNTRY_QUERY_MAP = {
  cz: 'czechia',
  de: 'germany'
};

export const QUERY_TO_COUNTRY_MAP = {
  czechia: 'cz',
  germany: 'de'
};

/**
 * Convert internal country code to URL query parameter value
 * @param {string} countryCode - Internal country code (cz, de)
 * @returns {string} URL query parameter value (czechia, germany)
 */
export const countryToQuery = (countryCode) => {
  return COUNTRY_QUERY_MAP[countryCode] || COUNTRY_QUERY_MAP.cz;
};

/**
 * Convert URL query parameter value to internal country code
 * @param {string} queryValue - URL query parameter value (czechia, germany)
 * @returns {string} Internal country code (cz, de)
 */
export const queryToCountry = (queryValue) => {
  return QUERY_TO_COUNTRY_MAP[queryValue] || 'cz';
};

/**
 * Build a URL path with language and optional query parameters
 * @param {string} languageCode - Language code (cs, de, en)
 * @param {string} path - Path without language prefix
 * @param {string} countryCode - Internal country code (cz, de)
 * @returns {string} Full URL path with language and query params
 */
export const buildUrlPath = (languageCode, path = '', countryCode = null) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  let url = `/${languageCode}${cleanPath}`;

  if (countryCode) {
    const countryQuery = countryToQuery(countryCode);
    url += `?country=${countryQuery}`;
  }

  return url;
};

/**
 * Parse language from URL pathname
 * @param {string} pathname - URL pathname
 * @returns {string} Language code (cs, de, en)
 */
export const getLanguageFromPath = (pathname) => {
  const match = pathname.match(/^\/([a-z]{2})(\/|$)/);
  if (match && ['cs', 'de', 'en'].includes(match[1])) {
    return match[1];
  }
  return 'cs'; // default
};

/**
 * Parse country from URL search params
 * @param {string} search - URL search string
 * @returns {string} Country code (cz, de)
 */
export const getCountryFromQuery = (search) => {
  const params = new URLSearchParams(search);
  const countryParam = params.get('country');
  return countryParam ? queryToCountry(countryParam) : null;
};

/**
 * Remove language prefix from path
 * @param {string} pathname - URL pathname with language prefix
 * @returns {string} Path without language prefix
 */
export const removeLanguagePrefix = (pathname) => {
  return pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');
};
