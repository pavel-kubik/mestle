import cities from '../Data/cities_cz.js';

let citiesMap = null;

export const getCitiesMap = () => {
  if (citiesMap == null) {
    citiesMap = {};
    cities.map((city) => {
      citiesMap[city.name] = city;
    });
  }
  return citiesMap;
};
