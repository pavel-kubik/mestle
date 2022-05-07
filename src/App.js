import { useEffect, useState } from 'react';

import './App.css';
import cities from './Data/data.js';

function App() {

  const [city, setCity] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  // generated from current date and cities list
  const [targetCity, setTargetCity] = useState('');

  // TODO permanent
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    setTargetCity(getRandCity());
  })

  const random = (seed) => {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  const getSeedFromDate = () => {
    return Date.now() / 1000 / 24 / 60 / 60;
  }

  const getRandCity = () => {
    return cities[Math.floor(cities.length * random(getSeedFromDate()))];
  }

  const countDirection = (city1, city2) => {
    const latitudeDiff = city1.latitude - city2.latitude; // NS
    const longtitudeDiff = city1.longtitude - city2.longtitude; // EW

  }

  const handleSelectCity = (cityPart) => {
    setCity(cityPart);
    if (cityPart.length >= 2) {
      setFilteredCities(
        cities
          .map(c => c.name)
          .filter(c => !guesses.includes(c))
          .filter(c => c.toUpperCase().includes(cityPart.toUpperCase())));
    } else {
      setFilteredCities([]);
    }
  }

  const handleGuess = () => {
    const guessedCity = cities.find(c => c.name === city);
    if (guessedCity) {
      setGuesses([...guesses, guessedCity]);
      setCity('');
    }
  }

  return (
    <div className="App">
      {
        guesses.length > 0 &&
        <>
          {guesses.map((g, idx) => 
            <>
              <div>{idx+1}. {g.name}</div>
              <div className="differences">
                <div className="population">{g.population}</div>
                <div className="area">{g.area}</div>
                <div className="direction">{countDirection(g, targetCity)}</div>
                <div className="altitude">{g.altitude}</div>
                <div className="district">{g.region}</div>
              </div>
            </>
            )}
        </>
      }
      <input value={city} placeholder='Napiš a vyber město' onChange={event => handleSelectCity(event.target.value)}/>
      {
        filteredCities.length > 0 && 
        <>
          <div>Vyber:
            {
              filteredCities.map(c =><div onClick={() => setCity(c)}>{c}</div>)
            }
          </div>
        </>
      }
      <div onClick={() => handleGuess()}>Hádej</div>
    </div>
  );
}

export default App;
