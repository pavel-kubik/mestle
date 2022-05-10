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

const random = (seed) => {
  var x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export const getSeedFromDate = () => {
  const dayNumber = Math.floor(Date.now() / 1000 / 24 / 60 / 60);
  console.log("Seed from day is " + dayNumber);
  return dayNumber;
}

export const getRandCity = (cities) => {
  const city = cities[Math.floor(cities.length * random(getSeedFromDate()))];
  console.log("Target city is " + city.name);
  return city;
}

export const ARROW_UP = '\u2191';
export const ARROW_DOWN = '\u2193';
export const GREEN_CIRCLE = '\uD83D\uDFE2';
export const WHITE_CIRCLE = '\u26AA';
