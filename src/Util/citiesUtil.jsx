import cities from '../Data/data.js';

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
