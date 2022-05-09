export const countDirection = (city1, city2) => {
  const latitudeDiff = city2.latitude - city1.latitude; // NS
  const longtitudeDiff = city2.longtitude - city1.longtitude; // EW

  const latLongRatio = Math.abs(latitudeDiff)/Math.abs(longtitudeDiff);
  if (latLongRatio > 2) {
    // simple direction - NS
    if (latitudeDiff > 0) {
      return 'N';
    } else {
      return 'S';
    }
  } else if (latLongRatio < 0.5) {
    // simlpe direction - EW
    if (longtitudeDiff > 0) {
      return 'E';
    } else {
      return 'W';
    }
  } else {
    // combination of two
    if (latitudeDiff > 0) {
      if (longtitudeDiff > 0) {
        return 'NE';
      } else {
        return 'NW';
      }
    } else {
      if (longtitudeDiff > 0) {
        return 'SE';
      } else {
        return 'SW';
      }
    }
  }
}
