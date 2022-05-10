import { useEffect, useState } from 'react';

import './App.css';
import cities from './Data/data.js';
import { altitudeComparator, areaComparator, districtComparator, getRandCity, getSeedFromDate, GREEN_CIRCLE, populationComparator, regionComparator, WHITE_CIRCLE } from './Util/util';

import background from './img/background.svg';
import Guess from './Guess/guess';

function App() {

  const dateOfPublish = 19127;

  const [cityPart, setCityPart] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [guessEnabled, setGuessEnabled] = useState(false);
  const [eog, setEog] = useState(false);
  const [shared, setShared] = useState(false);

  // generated from current date and cities list
  const [targetCity, setTargetCity] = useState('');

  // TODO permanent
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    setTargetCity(getRandCity(cities));
  }, []);

  useEffect(() => {
    const guessedCity = cities.find(c => c.name.toUpperCase() === cityPart.toUpperCase());
    if (guessedCity && !guesses.includes(guessedCity)) {
      setGuessEnabled(true);
    } else {
      setGuessEnabled(false);
    }
  }, [cityPart, guesses]);

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
        setEog(true);
      }
    }
  }

  const handleSelectCity = (cityName) => {
    setCityPart(cityName);
    setFilteredCities([]);
  }

  const handleShare = () => {
    const shareResults = guesses.map(guess =>
      [
        regionComparator(guess, targetCity),
        populationComparator(guess, targetCity),
        areaComparator(guess, targetCity),
        altitudeComparator(guess, targetCity),
        districtComparator(guess, targetCity)
      ]
    ).map(guess =>
      guess
        .map(item => item === "green" ? GREEN_CIRCLE : WHITE_CIRCLE)
        .reduce((out, i) => out += i + ' ', '')
    ).reduce((out, line) => out += line + '\n', '');
    navigator.clipboard.writeText(
      `Městle den #${getSeedFromDate() - dateOfPublish}\n` +
      shareResults +
      'https://mestle.cz');
    setShared(true);
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
            {guesses.map((g, idx) => <Guess key={idx} idx={idx} guessedCity={g} targetCity={targetCity}/> )}
          </>
        }
      </div>
      {
        !eog &&
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
          <div className={`big button ${guessEnabled ? 'enabled' : 'disabled'}`} onClick={() => handleGuess()}>Hádej</div>
        </div>
      }
      {
        eog &&  // TODO show city sign
        <div className="congratulation">
          <div className='big button enabled' onClick={() => {handleShare()}}>Sdílej</div>
          {
            shared &&
            <div className="notification">Výsledek zkopírován do schránky.</div>
          }
          <div>Gralulace!!!</div>
        </div>
      }
    </div>
  );
}

export default App;
