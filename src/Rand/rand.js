export const random = (seed) => {
  const x = Math.sin(seed) * 10000;
  const value = x - Math.floor(x);
  return value;
}

export const getSeedFromDate = () => {
  const dayNumber = Math.floor(Date.now() / 1000 / 24 / 60 / 60);
  //console.log("Seed from day is " + dayNumber);
  return dayNumber;
}

export const getRandCity = (cities) => {
  const city = cities[Math.floor(cities.length * random(getSeedFromDate()))];
  //console.log("Target city is " + city.name);
  return city;
}
