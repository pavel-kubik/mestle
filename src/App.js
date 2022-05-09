import { useEffect, useState } from 'react';

import './App.css';
import cities from './Data/data.js';
import { countDirection } from './Util/util';

function App() {

  const [cityPart, setCityPart] = useState('');
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

  const handleChangeCityPart = (cityPart) => {
    setCityPart(cityPart);
    if (cityPart.length >= 2) {
      setFilteredCities(
        cities
          .filter(c => !guesses.includes(c))
          .filter(c => c.name.toUpperCase().includes(cityPart.toUpperCase())));
    } else {
      setFilteredCities([]);
    }
  }

  const handleGuess = () => {
    const guessedCity = cities.find(c => c.name.toUpperCase() === cityPart.toUpperCase());
    if (guessedCity && !guesses.includes(guessedCity)) {
      setGuesses([...guesses, guessedCity]);
      setCityPart('');
    }
  }

  const regionComparator = (city1, city2) => {
    // TODO return orange for neigbour regions
    if (city1.region === city2.region) {
      return 'green';
    } else {
      return 'red';
    }
  }

  const populationComparator = (city1, city2) => {
    return numberComparator(city1.population, city2.population);
  }

  const areaComparator = (city1, city2) => {
    return numberComparator(city1.area, city2.area);
  }

  const altitudeComparator = (city1, city2) => {
    return numberComparator(city1.altitude, city2.altitude);
  }

  const numberComparator = (number1, number2) => {
    const numberDiffRatio = Math.abs(number1 - number2)/Math.max(number1, number2);
    if (numberDiffRatio < 0.1) {
      return 'green';
    } else if (numberDiffRatio < 0.2) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  return (
    <div className="App">
      {
        guesses.length > 0 &&
        <>
          {guesses.map((g, idx) => 
            <>
              <div key={idx}>
                <div>{idx+1}. {g.name}</div>
                <div className="differences">
                  <div className={`guess district ${regionComparator(g, targetCity)}`}>{g.region}</div>
                  <div className={`guess population ${populationComparator(g, targetCity)}`}>{g.population}</div>
                  <div className={`guess area ${areaComparator(g, targetCity)}`}>{g.area}</div>
                  <div className={`guess altitude ${altitudeComparator(g, targetCity)}`}>{g.altitude}</div>
                  <div className={'guess direction blue'}>{countDirection(g, targetCity)}</div>
                </div>
              </div>
            </>
            )}
        </>
      }
      <input value={cityPart} placeholder='Napiš a vyber město' onChange={event => handleChangeCityPart(event.target.value)}/>
      {
        filteredCities.length > 0 && 
        <>
          <div>Vyber:
            {
              filteredCities.map(c =><div key={c.name} onClick={() => setCityPart(c.name)}>{c.name}</div>)
            }
          </div>
        </>
      }
      <div onClick={() => handleGuess()}>Hádej</div>
    </div>
  );
}

export default App;
