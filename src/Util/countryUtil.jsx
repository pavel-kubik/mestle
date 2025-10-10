import { getCountryFromQuery } from './urlUtil';

export const COUNTRIES = {
  CZECH: 'cz',
  GERMAN: 'de'
};

const COUNTRY_STORAGE_KEY = 'mestle_country';

export const getCountry = () => {
  // First try to get country from URL query parameter
  if (typeof window !== 'undefined' && window.location) {
    const countryFromUrl = getCountryFromQuery(window.location.search);
    if (countryFromUrl && Object.values(COUNTRIES).includes(countryFromUrl)) {
      return countryFromUrl;
    }
  }

  // Fallback to localStorage for backward compatibility
  const storedCountry = window.localStorage.getItem(COUNTRY_STORAGE_KEY);
  return storedCountry || COUNTRIES.CZECH; // Default to Czech for existing users
};

export const setCountry = (country) => {
  if (!Object.values(COUNTRIES).includes(country)) {
    console.error('Invalid country:', country);
    return;
  }
  window.localStorage.setItem(COUNTRY_STORAGE_KEY, country);
};

export const switchCountry = () => {
  const currentCountry = getCountry();
  const newCountry = currentCountry === COUNTRIES.CZECH ? COUNTRIES.GERMAN : COUNTRIES.CZECH;
  setCountry(newCountry);
  window.location.reload(true);
};

export const getCountryName = (country) => {
  switch (country) {
    case COUNTRIES.CZECH:
      return 'Czech Republic';
    case COUNTRIES.GERMAN:
      return 'Germany';
    default:
      return 'Unknown';
  }
};

export const getCountryFlag = (country) => {
  switch (country) {
    case COUNTRIES.CZECH:
      return '🇨🇿';
    case COUNTRIES.GERMAN:
      return '🇩🇪';
    default:
      return '';
  }
};
