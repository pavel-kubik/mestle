import { useEffect, useState } from 'react';

import './App.css';
import background from './img/background.svg';

import cities from './Data/data.js';
import Guess from './Guess/guess';
import { altitudeComparator, areaComparator, dateOfPublish, districtComparator, GREEN_CIRCLE, ORANGE_CIRCLE, populationComparator, regionComparator, useStickyState, WHITE_CIRCLE } from './Util/util';
import { getRandCity, getSeedFromDate } from './Rand/rand';
import { getEog, getGuesses, getScore, setGuesses } from './History/history';

function App() {

  const [cityPart, setCityPart] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [guessEnabled, setGuessEnabled] = useState(false);
  const [shared, setShared] = useState(false);

  // generated from current date and cities list
  const [targetCity, setTargetCity] = useState('');

  // permanent
  const [history, setHistory] = useStickyState({}, 'mestle_history');

  useEffect(() => {
    setTargetCity(getRandCity(cities));
  }, []);

  useEffect(() => {
    const guessedCity = cities.find(c => c.name.toUpperCase() === cityPart.toUpperCase());
    if (guessedCity && !getGuesses(history).includes(guessedCity)) {
      setGuessEnabled(true);
    } else {
      setGuessEnabled(false);
    }
  }, [cityPart, history]);

  const handleChangeCityPart = (cityPart) => {
    setCityPart(cityPart);
    if (cityPart.length >= 2) {
      setFilteredCities(
        cities
          .filter(c => !getGuesses(history).includes(c))
          .filter(c => c.name.toUpperCase().includes(cityPart.toUpperCase())));
    } else {
      setFilteredCities([]);
    }
  }

  const handleGuess = () => {
    const guessedCity = cities.find(c => c.name.toUpperCase() === cityPart.toUpperCase());
    if (guessedCity && !getGuesses(history).includes(guessedCity)) {
      setCityPart('');
      setFilteredCities([]);
      setGuesses(history, [...getGuesses(history), guessedCity], guessedCity.name === targetCity.name, setHistory);
    }
  }

  const handleSelectCity = (cityName) => {
    setCityPart(cityName);
    setFilteredCities([]);
  }

  const handleShare = () => {
    const shareResults = getGuesses(history).map(guess =>
      [
        regionComparator(guess, targetCity),
        populationComparator(guess, targetCity),
        areaComparator(guess, targetCity),
        altitudeComparator(guess, targetCity),
        districtComparator(guess, targetCity)
      ]
    ).map(guess =>
      guess
        .map(item => {
          switch(item) {
            case "green": return GREEN_CIRCLE;
            case "orange": return ORANGE_CIRCLE;
            default:
              return WHITE_CIRCLE;
          }
        })
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
      <div className='header'>
        <div>Skóre: {getScore(history)}</div>
        <div>Městle</div>
        <div>{new Date().toLocaleDateString("cz-CS")}</div>
      </div>
      <div className='body'>
        <div className='body-background' style={{ backgroundImage: `url(${background})`}}></div>
        <div className="differences title">
          <div className="guess">Kraj</div>
          <div className="guess">Populace</div>
          <div className="guess">Rozloha</div>
          <div className="guess">Nadmořská výška</div>
          <div className="guess">Poloha</div>
        </div>
        {
          getGuesses(history).length > 0 &&
          <>
            {getGuesses(history).map((g, idx) => <Guess key={idx} idx={idx} guessedCity={g} targetCity={targetCity}/> )}
          </>
        }
      </div>
      {
        !getEog(history) &&
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
        getEog(history) &&  // TODO show city sign
        <div className="congratulation">
          <div className='big button enabled' onClick={() => {handleShare()}}>Sdílej</div>
          {
            shared &&
            <div className="notification">Výsledek zkopírován do schránky.</div>
          }
          <div>Gratulace! Další město můžeš hádat zítra.</div>
        </div>
      }
    </div>
  );
}

export default App;
