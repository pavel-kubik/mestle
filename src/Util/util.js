import { useEffect, useState } from "react";

export const countDirection = (city1, city2) => {
  const ratio = 3;
  const latitudeDiff = city2.latitude - city1.latitude; // NS
  const longitudeDiff = city2.longitude - city1.longitude; // EW

  if (latitudeDiff === 0 && longitudeDiff === 0) {
    return 'X'
  }

  const latLongRatio = Math.abs(latitudeDiff)/Math.abs(longitudeDiff);
  if (latLongRatio > ratio) {
    // simple direction - NS
    if (latitudeDiff > 0) {
      return 'N';
    } else {
      return 'S';
    }
  } else if (latLongRatio < 1/ratio) {
    // simlpe direction - EW
    if (longitudeDiff > 0) {
      return 'E';
    } else {
      return 'W';
    }
  } else {
    // combination of two
    if (latitudeDiff > 0) {
      if (longitudeDiff > 0) {
        return 'NE';
      } else {
        return 'NW';
      }
    } else {
      if (longitudeDiff > 0) {
        return 'SE';
      } else {
        return 'SW';
      }
    }
  }
}

export const neigbourRegion = (region1, region2) => {
  const neigbours = {
    'Hl. m. Praha': ['Středočeský'],
    'Středočeský': ['Hl. m. Praha', 'Ústecký', 'Liberecký', 'Královéhradecký', 'Pardubický', 'Vysočina', 'Jihočeský', 'Plzeňský'],
    'Jihočeský': ['Plzeňský', 'Středočeský', 'Vysočina', 'Jihomoravský'],
    'Plzeňský': ['Karlovarský', 'Ústecký', 'Středočeský', 'Jihočeský'],
    'Karlovarský': ['Ústecký', 'Plzeňský'],
    'Ústecký': ['Karlovarský', 'Plzeňský', 'Středočeský', 'Liberecký'],
    'Liberecký': ['Ústecký', 'Středočeský', 'Královéhradecký'],
    'Královéhradecký': ['Liberecký', 'Středočeský', 'Pardubický'],
    'Pardubický': ['Olomoucký', 'Jihomoravský', 'Vysočina', 'Středočeský', 'Liberecký'],
    'Vysočina': ['Jihočeský', 'Středočeský', 'Pardubický', 'Jihomoravský'],
    'Jihomoravský': ['Jihočeský', 'Vysočina', 'Pardubický', 'Olomoucký', 'Zlínský'],
    'Olomoucký': ['Pardubický', 'Jihomoravský', 'Moravskoslezský', 'Zlínský'],
    'Moravskoslezský': ['Olomoucký', 'Zlínský'],
    'Zlínský': ['Jihomoravský', 'Olomoucký', 'Moravskoslezský'],
  };
  if (!neigbours[region1]) {
    console.warn('Region ' + region1 + ' not found.')
  }
  return neigbours[region1] && neigbours[region1].includes(region2);
}

export const regionComparator = (city1, city2) => {
  // TODO return orange for neigbour regions
  if (city1.region === city2.region) {
    return 'green';
  } else if (neigbourRegion (city1.region, city2.region)) {
    return 'orange';
  } else {
    return 'red';
  }
}

export const populationComparator = (city1, city2) => {
  return numberComparator(city1.population, city2.population);
}

export const areaComparator = (city1, city2) => {
  return numberComparator(city1.area, city2.area);
}

export const altitudeComparator = (city1, city2) => {
  return numberComparator(city1.altitude, city2.altitude);
}

export const districtComparator = (city1, city2) => {
  return countDirection(city1, city2) === 'X' ? 'green' : 'blue';
}

export const numberComparator = (number1, number2) => {
  const numberDiffRatio = Math.abs(number1 - number2)/Math.max(number1, number2);
  if (numberDiffRatio < 0.1) {
    return 'green';
  } else if (numberDiffRatio < 0.2) {
    return 'orange';
  } else {
    return 'red';
  }
}

export const useStickyState = (defaultValue, key) => {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export const ARROW_UP = '\u2191';
export const ARROW_DOWN = '\u2193';
export const GREEN_CIRCLE = '\uD83D\uDFE2';
export const ORANGE_CIRCLE = '\uD83D\uDFE0';
export const WHITE_CIRCLE = '\u26AA';
export const ARROW_COMPASS = '\u27A4';
export const CROSS = '📌';
export const LESS_ARROW = '\u25BC';
export const MORE_ARROW = '\u25B2';

export const dateOfPublish = 19127;
