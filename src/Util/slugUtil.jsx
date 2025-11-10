/**
 * Utility for creating URL-safe slugs from city names with special characters
 * Handles transliteration of special characters to ASCII equivalents
 */

// Mapping of special characters to their ASCII equivalents
// This is a 1:n mapping where some characters map to multiple ASCII characters
const TRANSLITERATION_MAP = {
  // German umlauts
  ä: 'ae',
  ö: 'oe',
  ü: 'ue',
  Ä: 'Ae',
  Ö: 'Oe',
  Ü: 'Ue',
  ß: 'ss',

  // Czech characters
  á: 'a',
  č: 'c',
  ď: 'd',
  é: 'e',
  ě: 'e',
  í: 'i',
  ň: 'n',
  ó: 'o',
  ř: 'r',
  š: 's',
  ť: 't',
  ú: 'u',
  ů: 'u',
  ý: 'y',
  ž: 'z',
  Á: 'A',
  Č: 'C',
  Ď: 'D',
  É: 'E',
  Ě: 'E',
  Í: 'I',
  Ň: 'N',
  Ó: 'O',
  Ř: 'R',
  Š: 'S',
  Ť: 'T',
  Ú: 'U',
  Ů: 'U',
  Ý: 'Y',
  Ž: 'Z'
};

/**
 * Convert a string to a URL-safe slug
 * Handles special character transliteration and converts to lowercase
 *
 * @param {string} text - Text to convert to slug
 * @returns {string} URL-safe slug
 *
 * @example
 * slugify('München') // returns 'muenchen'
 * slugify('Plzeň') // returns 'plzen'
 * slugify('Köln') // returns 'koeln'
 */
export function slugify(text) {
  if (!text) return '';

  let result = text;

  // Replace special characters with their ASCII equivalents
  for (const [char, replacement] of Object.entries(TRANSLITERATION_MAP)) {
    result = result.split(char).join(replacement);
  }

  // Convert to lowercase and remove any remaining non-alphanumeric characters
  result = result
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens

  return result;
}

/**
 * Create a reverse mapping to find original names from slugs
 * This is useful for looking up cities by their slug
 *
 * @param {Array} cities - Array of city objects with 'name' property
 * @returns {Object} Map of slug to original city name
 *
 * @example
 * const cities = [{ name: 'München' }, { name: 'Berlin' }];
 * const map = createSlugToCityMap(cities);
 * // map = { 'muenchen': 'München', 'berlin': 'Berlin' }
 */
export function createSlugToCityMap(cities) {
  const map = {};
  cities.forEach((city) => {
    const slug = slugify(city.name);
    map[slug] = city.name;
  });
  return map;
}

/**
 * Get city name from slug
 *
 * @param {string} slug - URL slug
 * @param {Array} cities - Array of city objects
 * @returns {string|null} Original city name or null if not found
 */
export function getCityNameFromSlug(slug, cities) {
  const map = createSlugToCityMap(cities);
  return map[slug] || null;
}
