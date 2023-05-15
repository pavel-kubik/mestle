import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './GuessBoard.css';
import background from '../img/background.svg';

import cities from '../Data/data.js';
import Guess from '../Guess/guess';
import {
  dateOfPublish,
  distanceComparator,
  districtComparator,
  GREEN_CIRCLE,
  normalize,
  obfuscateUrl,
  ORANGE_CIRCLE,
  populationComparator,
  regionComparator,
  WHITE_CIRCLE
} from '../Util/util';
import { calculateTimeLeft, getRandCity, getSeedFromDate } from '../Rand/rand';
import { getEog, getGuesses, setGuesses } from '../History/history';
import Tippy from '@tippyjs/react';
import useVH from 'react-viewport-height';
import { t } from '../Util/translate';

function GuessBoard({ todaySeed, history, setHistory }) {
  useVH();

  const bottom = useRef(null);

  const [cityPart, setCityPart] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [guessEnabled, setGuessEnabled] = useState(false);
  const [shared, setShared] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const guessedCity = cities.find((c) => normalize(c.name) === normalize(cityPart.trim()));
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
      const filteredCities = cities.filter((c) => !getGuesses(history, todaySeed).includes(c));
      const matchedCities = new Set([
        ...filteredCities.filter((c) => normalize(c.name).startsWith(normalize(cityPart.trim()))),
        ...filteredCities.filter((c) => normalize(c.name).includes(normalize(cityPart.trim())))
      ]);
      setFilteredCities([...matchedCities]);
    } else {
      setFilteredCities([]);
    }
  };

  const handleGuess = () => {
    if (getSeedFromDate(new Date()) !== todaySeed) {
      window.location.reload();
    }
    const guessedCity = cities.find((c) => normalize(c.name) === normalize(cityPart.trim()));
    if (guessedCity && !getGuesses(history, todaySeed).includes(guessedCity)) {
      setCityPart('');
      setFilteredCities([]);
      const eog = guessedCity.name === getRandCity(cities, todaySeed).name;
      setGuesses(history, [...getGuesses(history, todaySeed), guessedCity], eog, setHistory, todaySeed);
    }
    setTimeout(() => bottom.current.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const handleSelectCity = (cityName) => {
    setCityPart(cityName);
    setFilteredCities([]);
  };

  const getResult = () => {
    const targetCity = getRandCity(cities, todaySeed);
    return (
      t('components.guessBoard.todayDate', { date: todaySeed - dateOfPublish }) +
      getGuesses(history, todaySeed)
        .map((guess) => [
          regionComparator(guess, targetCity),
          populationComparator(guess, targetCity),
          distanceComparator(guess, targetCity),
          guess == targetCity ? 'green' : 'red',
          districtComparator(guess, targetCity)
        ])
        .map((guess) =>
          guess
            .map((item) => {
              switch (item) {
                case 'green':
                  return GREEN_CIRCLE;
                case 'orange':
                  return ORANGE_CIRCLE;
                default:
                  return WHITE_CIRCLE;
              }
            })
            .reduce((out, i) => (out += i + ' '), '')
        )
        .reduce((out, line) => (out += line + '\n'), '') +
      'https://mestle.cz\n\n#mestle'
    );
  };

  const handleShare = () => {
    const shareResults = getResult();
    navigator.clipboard.writeText(shareResults);
    setShared(true);
  };

  return (
    <>
      <div className='requirements'>
        <span>{t('components.guessBoard.todayCityBadgeTitle')}</span>
        <img src={obfuscateUrl(getRandCity(cities, todaySeed).signUrl)} />
      </div>
      {getGuesses(history, todaySeed).length > 0 && (
        <div className='differences title'>
          <div className='guess'>{t('components.guessBoard.differences.district')}</div>
          <div className='guess'>{t('components.guessBoard.differences.population')}</div>
          <div className='guess'>{t('components.guessBoard.differences.distance')}</div>
          <div className='guess'>{t('components.guessBoard.differences.badge')}</div>
          <div className='guess'>{t('components.guessBoard.differences.location')}</div>
        </div>
      )}
      <div className='body'>
        <div className='body-background' style={{ backgroundImage: `url(${background})` }}></div>
        {getGuesses(history, todaySeed).length == 0 && (
          <div className='no-guess-help'>
            <div>{t('components.guessBoard.noGuesses')}</div>
          </div>
        )}
        {getGuesses(history, todaySeed).length > 0 && (
          <>
            {getGuesses(history, todaySeed).map((g, idx, array) => (
              <Guess
                key={idx}
                idx={idx}
                guessedCity={g}
                targetCity={getRandCity(cities, todaySeed)}
                isLast={idx === array.length - 1}
                isEog={getEog(history, todaySeed)}
              />
            ))}
          </>
        )}
        <div ref={bottom}>&nbsp;</div>
      </div>
      {!getEog(history, todaySeed) && (
        <div className='guess-box'>
          <input
            value={cityPart}
            type='search'
            placeholder={t('components.guessBoard.guessInput.placeholder')}
            onChange={(event) => handleChangeCityPart(event.target.value)}
          />
          {filteredCities.length > 0 && (
            <>
              <div className='city-list'>
                {filteredCities.map((c) => (
                  <div key={c.name} onClick={() => handleSelectCity(c.name)}>
                    {c.name}
                  </div>
                ))}
              </div>
            </>
          )}
          <div className={`big button ${guessEnabled ? 'enabled' : 'disabled'}`} onClick={handleGuess}>
            {t('components.guessBoard.guessInput.submit')}
          </div>
        </div>
      )}
      {getEog(history, todaySeed) && (
        <div className='congratulation'>
          <Tippy content={getResult()} allowHTML={true} placement='auto' visible={true}>
            <div className='big button enabled' onClick={handleShare}>
              {t('components.guessBoard.guessResult.copy')}
            </div>
          </Tippy>
          {shared && <div className='notification'>{t('components.guessBoard.guessResult.copyDone')}</div>}
          <div>{t('components.guessBoard.guessResult.title', { timeLeft })}</div>
        </div>
      )}
    </>
  );
}

GuessBoard.propTypes = {
  todaySeed: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
  setHistory: PropTypes.func.isRequired
};

export default GuessBoard;
