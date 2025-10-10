import cities_cz from '../Data/cities_cz.js';
import cities_de from '../Data/cities_de.js';
import { getCountry, COUNTRIES } from './countryUtil';

let citiesMapCz = null;
let citiesMapDe = null;

const buildCitiesMap = (cities) => {
  const map = {};
  cities.map((city) => {
    map[city.name] = city;
  });
  return map;
};

export const getCitiesMap = (country) => {
  const currentCountry = country || getCountry();

  if (currentCountry === COUNTRIES.GERMAN) {
    if (citiesMapDe == null) {
      citiesMapDe = buildCitiesMap(cities_de);
    }
    return citiesMapDe;
  } else {
    if (citiesMapCz == null) {
      citiesMapCz = buildCitiesMap(cities_cz);
    }
    return citiesMapCz;
  }
};

export const getCitiesArray = (country) => {
  const currentCountry = country || getCountry();
  return currentCountry === COUNTRIES.GERMAN ? cities_de : cities_cz;
};
