import { useEffect, useState } from 'react';

import './App.css';
import cities from './Data/data.js';

import background from './img/background.svg';

function App() {

  const [cityPart, setCityPart] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  // generated from current date and cities list
  const [targetCity, setTargetCity] = useState('');

  // TODO permanent
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    const random = (seed) => {
      var x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    }

    const getSeedFromDate = () => {
      const dayNumber = Math.floor(Date.now() / 1000 / 24 / 60 / 60);
      console.log("Seed from day is " + dayNumber);
      return dayNumber;
    }

    const getRandCity = () => {
      const city = cities[Math.floor(cities.length * random(getSeedFromDate()))];
      console.log("Target city is " + city.name);
      return city;
    }

    setTargetCity(getRandCity());
  }, []);

  const countDirection = (city1, city2) => {
    const ratio = 3;
    const latitudeDiff = city2.latitude - city1.latitude; // NS
    const longitudeDiff = city2.longitude - city1.longitude; // EW

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
      setCityPart('');
      setFilteredCities([]);
      setGuesses([...guesses, guessedCity]);
      if (guessedCity.name === targetCity.name) {
        // end of game
        console.log("EOG");
      }
    }
  }

  const handleSelectCity = (cityName) => {
    setCityPart(cityName);
    setFilteredCities([]);
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
    <div className='app'>
      <div className='header'>Městle</div>
      <div className='body'>
        <div className='body-background' style={{ backgroundImage: `url(${background})`}}></div>
        <div className="differences">
          <div className="guess">Kraj</div>
          <div className="guess">Populace</div>
          <div className="guess">Rozloha</div>
          <div className="guess">Nadmořská výška</div>
          <div className="guess">Poloha</div>
        </div>
        {
          guesses.length > 0 &&
          <>
            {guesses.map((g, idx) =>
              <>
                <div key={idx}>
                  <div className='guess-city'>{idx+1}. {g.name}</div>
                  <div className='differences'>
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
      </div>
      <div className='guess-box'>
        <input value={cityPart} placeholder='Napiš a vyber město' onChange={event => handleChangeCityPart(event.target.value)}/>
        {
          filteredCities.length > 0 &&
          <>
            <div className='city-list'>
              {
                filteredCities.map(c =><div key={c.name} onClick={() => handleSelectCity(c.name)}>{c.name}</div>)
              }
            </div>
          </>
        }
        <div onClick={() => handleGuess()}>Hádej</div>
      </div>
    </div>
  );
}

export default App;
