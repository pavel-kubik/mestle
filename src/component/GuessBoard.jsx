import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './GuessBoard.css';
import background from '../img/background.svg';

import cities from '../Data/cities_cz.js';
import { getRandCity } from '../Rand/rand';
import { isEog } from '../History/history';
import useVH from 'react-viewport-height';
import { t } from '../Util/translate';
import { useGameState } from '../hooks/useGameState';
import { useSeedValidation } from '../hooks/useSeedValidation';

function GuessBoard({ todaySeed, todayHistory, addAttemptHandler, zone }) {
  useVH(); // TODO move to App.jsx

  const bottom = useRef(null);

  const { cityPart, setCityPart, guessEnabled, timeLeft, getAttempts } = useGameState(todayHistory, todaySeed, zone);
  const { validateSeed } = useSeedValidation(todaySeed, zone);

  const handleGuess = (guessedCity) => {
    if (!validateSeed('guess')) return;

    const eog = guessedCity.name === getRandCity(cities, todaySeed).name;
    addAttemptHandler(guessedCity, eog);
    setTimeout(() => bottom.current.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <>
      <div className='requirements'>
        <span>{t('components.guessBoard.todayCityBadgeTitle')}</span>
        {/* TODO directory to constant; move images to src and import them */}
        <img src={'/img/sign/' + getRandCity(cities, todaySeed).hashFilename} />
      </div>
      {getAttempts(todayHistory).length > 0 && (
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
        {getAttempts(todayHistory).length == 0 && (
          <div className='no-guess-help'>
            <div>{t('components.guessBoard.noGuesses')}</div>
          </div>
        )}
        {getAttempts(todayHistory).length > 0 && (
          <>
            {getAttempts(todayHistory).map((g, idx, array) => (
              <Guess
                key={idx}
                idx={idx}
                guessedCity={g}
                targetCity={getRandCity(cities, todaySeed)}
                isLast={idx === array.length - 1}
                isEog={isEog(todayHistory)}
              />
            ))}
          </>
        )}
        <div ref={bottom}>&nbsp;</div>
      </div>
      {!isEog(todayHistory) && (
        <CitySearchInput
          cityPart={cityPart}
          setCityPart={setCityPart}
          guessEnabled={guessEnabled}
          onGuess={handleGuess}
          excludedCities={getAttempts(todayHistory)}
        />
      )}
      {isEog(todayHistory) && (
        <GameResult
          attempts={getAttempts(todayHistory)}
          targetCity={getRandCity(cities, todaySeed)}
          todaySeed={todaySeed}
          timeLeft={timeLeft}
        />
      )}
    </>
  );
}

GuessBoard.propTypes = {
  todaySeed: PropTypes.number.isRequired,
  todayHistory: PropTypes.object.isRequired,
  addAttemptHandler: PropTypes.func.isRequired,
  zone: PropTypes.string.isRequired
};

export default GuessBoard;
