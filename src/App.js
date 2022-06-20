import { useEffect, useRef, useState } from 'react';

import './App.css';
import background from './img/background.svg';

import preval from 'preval.macro'

import cities from './Data/data.js';
import Guess from './Guess/guess';
import { altitudeComparator, dateOfPublish, distanceComparator, districtComparator, GREEN_CIRCLE, normalize, ORANGE_CIRCLE, populationComparator, regionComparator, useStickyState, WHITE_CIRCLE } from './Util/util';
import { calculateTimeLeft, getRandCity, getSeedFromDate } from './Rand/rand';
import { getEog, getGuesses, getScore, setGuesses } from './History/history';
import Tippy from '@tippyjs/react';
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import useVH from 'react-viewport-height';

const Box = styled(animated.div)`
  background: orange;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  max-width: 270px;
  font-size: x-large;
`;

function App() {

  useVH();

  const dateTimeStamp = preval`module.exports = new Date().toLocaleString();`

  const bottom = useRef(null);

  const [cityPart, setCityPart] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [guessEnabled, setGuessEnabled] = useState(false);
  const [shared, setShared] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  // generated from current date and cities list
  const [todaySeed, setTodaySeed] = useState(null);

  // permanent
  const [history, setHistory] = useStickyState({}, 'mestle_history');

  // animation start tippy
  const config = { tension: 300, friction: 15 };
  const initialStyles = { opacity: 0, transform: "scale(0.5)" };
  const [props, setSpring] = useSpring(() => initialStyles);
  function onMount() {
    setSpring({
      delay: 3000,
      opacity: 1,
      transform: "scale(1)",
      onRest: () => {},
      config,
    });
  }

  function onHide({ unmount }) {
    setSpring({
      ...initialStyles,
      onRest: unmount,
      config: { ...config, clamp: true }
    });
  }

  useEffect(() => {
    const todaySeed = getSeedFromDate(new Date());
    //console.log("Today seed " + todaySeed + " => " + getRandCity(cities, todaySeed).name);
    setTodaySeed(todaySeed);
  }, []);

  useEffect(() => {
    const guessedCity = cities.find(c => normalize(c.name) === normalize(cityPart.trim()));
    if (guessedCity && !getGuesses(history, todaySeed).includes(guessedCity)) {
      setGuessEnabled(true);
    } else {
      setGuessEnabled(false);
    }
  }, [cityPart, history, todaySeed]);

  useEffect(() => {
    if (getEog(history, todaySeed)) {
      setTimeLeft(calculateTimeLeft(todaySeed));
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(todaySeed));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [history, todaySeed]);

  const handleChangeCityPart = (cityPart) => {
    if (getSeedFromDate(new Date()) !== todaySeed) {
      window.location.reload();
    }
    setCityPart(cityPart);
    if (cityPart.length >= 2) {
      const filteredCities = cities.filter(c => !getGuesses(history, todaySeed).includes(c));
      const matchedCities = new Set(
        [...filteredCities.filter(c => normalize(c.name).startsWith(normalize(cityPart.trim()))),
          ...filteredCities.filter(c => normalize(c.name).includes(normalize(cityPart.trim())))]
      );
      setFilteredCities([...matchedCities]);
    } else {
      setFilteredCities([]);
    }
  }

  const handleGuess = () => {
    if (getSeedFromDate(new Date()) !== todaySeed) {
      window.location.reload();
    }
    const guessedCity = cities.find(c => normalize(c.name) === normalize(cityPart.trim()));
    if (guessedCity && !getGuesses(history, todaySeed).includes(guessedCity)) {
      setCityPart('');
      setFilteredCities([]);
      const eog = guessedCity.name === getRandCity(cities, todaySeed).name;
      setGuesses(
        history,
        [...getGuesses(history, todaySeed), guessedCity],
        eog,
        setHistory,
        todaySeed);
    }
    setTimeout(() => bottom.current.scrollIntoView({ behavior: "smooth" }), 100);
  }

  const handleSelectCity = (cityName) => {
    setCityPart(cityName);
    setFilteredCities([]);
  }

  const handleShare = () => {
    const targetCity = getRandCity(cities, todaySeed);
    const shareResults = getGuesses(history, todaySeed).map(guess =>
      [
        regionComparator(guess, targetCity),
        populationComparator(guess, targetCity),
        distanceComparator(guess, targetCity),
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
      `Městle den #${todaySeed - dateOfPublish}\n` +
      shareResults +
      'https://mestle.cz');
    setShared(true);
  }

  const isBeta = () => {
    return document.cookie.split(';').some((item) => item.trim().startsWith('nf_ab='));
  }

  const switchToBeta = () => {
    if (isBeta()) {
      document.cookie = "nf_ab=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    } else {
      document.cookie = `nf_ab=develop;max-age=31536000`;
    }
    window.location.reload(true);
  }

  return (
    <div className='app'>
      <div className='header'>
        <div>Skóre: {getScore(history)}</div>
        <div onClick={switchToBeta}>Městle {isBeta() ? <i style={{color: 'red'}}>beta</i> : ''}</div>
        <div>{new Date().toLocaleDateString("cz-CS")}</div>
      </div>
      <div className='body'>
        <div className='body-background' style={{ backgroundImage: `url(${background})`}}></div>
        <div className="differences title">
          <div className="guess">Kraj</div>
          <div className="guess">Populace</div>
          <div className="guess">Vzdálenost</div>
          <div className="guess">Nadmořská výška</div>
          <div className="guess">Poloha</div>
        </div>
        {
          getGuesses(history, todaySeed).length > 0 &&
          <>
            {
              getGuesses(history, todaySeed).map((g, idx, array) => 
                <Guess
                  key={idx}
                  idx={idx} guessedCity={g}
                  targetCity={getRandCity(cities, todaySeed)}
                  isLast={idx === array.length - 1}
                  isEog={getEog(history, todaySeed)}
                />
              )
            }
          </>
        }
        <div ref={bottom}>&nbsp;</div>
      </div>
      {
        !getEog(history, todaySeed) &&
        <div className='guess-box'>
          <Tippy
            render={attrs => (
              <Box style={props} {...attrs}>
                Začni náhodným městem a pak zlepšuj odhad.
              </Box>
            )}
            placement="top"
            theme="orange"
            zIndex={11}
            disabled={getGuesses(history, todaySeed).length > 0 || cityPart !== ''}
            visible={true}
            animation={true}
            onMount={onMount}
            onHide={onHide}
          >
            <input
              value={cityPart}
              placeholder="Uhádni dnešní město"
              onChange={(event) => handleChangeCityPart(event.target.value)}
            />
          </Tippy>
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
        getEog(history, todaySeed) &&  // TODO show city sign
        <div className="congratulation">
          <div className='big button enabled' onClick={() => {handleShare()}}>Sdílej</div>
          {
            shared &&
            <div className="notification">Výsledek zkopírován do schránky.</div>
          }
          <div>Gratulace! Další město můžeš hádat za {timeLeft}.</div>
        </div>
      }
      <div className="build-time">Build {dateTimeStamp}</div>
    </div>
  );
}

export default App;
