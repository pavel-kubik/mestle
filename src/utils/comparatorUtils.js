import { getDistance } from 'geolib';
import { countDirection, neighboringRegion } from '../Util/util';

// Generic comparator factory for threshold-based comparisons
const createThresholdComparator = (valueExtractor, greenThreshold, orangeThreshold) => {
  return (item1, item2) => {
    const value = valueExtractor(item1, item2);

    if (value <= greenThreshold) {
      return 'green';
    } else if (value <= orangeThreshold) {
      return 'orange';
    } else {
      return 'red';
    }
  };
};

// Distance comparator configuration
const DISTANCE_THRESHOLDS = {
  green: 30, // < 30km
  orange: 70 // < 70km, else red
};

export const getDistanceInKm = (city1, city2) => {
  return Math.round(getDistance(city1, city2) / 1000);
};

export const distanceComparator = createThresholdComparator(getDistanceInKm, DISTANCE_THRESHOLDS.green, DISTANCE_THRESHOLDS.orange);

// Population comparator using ratio-based comparison
const POPULATION_RATIO_THRESHOLDS = {
  green: 0.1, // < 10% difference
  orange: 0.2 // < 20% difference, else red
};

const getPopulationRatio = (city1, city2) => {
  return Math.abs(city1.population - city2.population) / Math.max(city1.population, city2.population);
};

export const populationComparator = createThresholdComparator(
  getPopulationRatio,
  POPULATION_RATIO_THRESHOLDS.green,
  POPULATION_RATIO_THRESHOLDS.orange
);

// Generic number comparator that can be reused
export const createNumberComparator = (greenRatio = 0.1, orangeRatio = 0.2) => {
  return (number1, number2) => {
    const ratio = Math.abs(number1 - number2) / Math.max(number1, number2);

    if (ratio < greenRatio) {
      return 'green';
    } else if (ratio < orangeRatio) {
      return 'orange';
    } else {
      return 'red';
    }
  };
};

// Default number comparator with standard thresholds
export const numberComparator = createNumberComparator();

// Region comparator with neighbor logic
export const regionComparator = (city1, city2) => {
  if (city1.region === city2.region) {
    return 'green';
  } else if (neighboringRegion(city1.region, city2.region)) {
    return 'orange';
  } else {
    return 'red';
  }
};

// District comparator using direction logic
export const districtComparator = (city1, city2) => {
  return countDirection(city1, city2) === 'X' ? 'green' : 'blue';
};

// Unified game comparison system
export const createGameComparator = (targetCity) => {
  return {
    compareRegion: (guessedCity) => regionComparator(guessedCity, targetCity),
    comparePopulation: (guessedCity) => populationComparator(guessedCity, targetCity),
    compareDistance: (guessedCity) => distanceComparator(guessedCity, targetCity),
    compareDistrict: (guessedCity) => districtComparator(guessedCity, targetCity),
    compareExact: (guessedCity) => (guessedCity === targetCity ? 'green' : 'red')
  };
};
