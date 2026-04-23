import React, { useRef, useState } from 'react';

import './GuessBoard.css';
import backgroundCz from '../img/map-cz.svg';
import backgroundDe from '../img/map-de.svg';

import { getCitiesArray } from '../Util/citiesUtil';
import Guess from '../Guess/guess';
import CitySearchInput from './CitySearchInput';
import GameResult from './GameResult';
import { getRandCity } from '../Rand/rand';
import { isEog } from '../History/history';
import { t, getLanguage } from '../Util/translate';
import { useGameState } from '../hooks/useGameState';
import { useSeedValidation } from '../hooks/useSeedValidation';
import { getCountry } from '../Util/countryUtil';
import { distanceComparator } from '../Util/util';

// Geographic bounds for pin projection
const COUNTRY_BOUNDS = {
  cz: { lonMin: 12.09, lonMax: 18.86, latMin: 48.55, latMax: 51.06 },
  de: { lonMin: 6.0,   lonMax: 15.0,  latMin: 47.3,  latMax: 55.1  },
};

function projectCity(city, country) {
  const b = COUNTRY_BOUNDS[country] || COUNTRY_BOUNDS.cz;
  const x = ((city.longitude - b.lonMin) / (b.lonMax - b.lonMin)) * 100;
  const y = ((b.latMax - city.latitude) / (b.latMax - b.latMin)) * 100;
  return { x: Math.max(2, Math.min(98, x)), y: Math.max(2, Math.min(98, y)) };
}

function MapPin({ city, idx, tone }) {
  const toneClass = tone === 'green' ? 'map-pin-correct' : tone === 'orange' ? 'map-pin-warm' : 'map-pin-far';
  return (
    <div
      className={`map-pin ${toneClass}`}
      style={{ left: `${city.x}%`, top: `${city.y}%` }}
      title={city.name}
    >
      <span className='pin-label'>{idx + 1}</span>
    </div>
  );
}

function MapWithPins({ guesses, country, targetCity }) {
  const background = country === 'cz' ? backgroundCz : backgroundDe;
  const pins = guesses.map((g, idx) => ({
    ...projectCity(g, country),
    name: g.name,
    tone: distanceComparator(g, targetCity),
    idx,
  }));

  return (
    <div className='map-panel-inner'>
      <img src={background} className='map-panel-img' alt='country map' />
      {pins.map((p, i) => (
        <MapPin key={i} city={p} idx={p.idx} tone={p.tone} />
      ))}
    </div>
  );
}

function HowToPlayLanding() {
  const steps = [
    {
      h: t('components.guessBoard.howToPlay.step1.h'),
      b: t('components.guessBoard.howToPlay.step1.b'),
    },
    {
      h: t('components.guessBoard.howToPlay.step2.h'),
      b: t('components.guessBoard.howToPlay.step2.b'),
    },
    {
      h: t('components.guessBoard.howToPlay.step3.h'),
      b: t('components.guessBoard.howToPlay.step3.b'),
    },
  ];

  return (
    <div className='how-to-play'>
      <div className='how-to-play-title'>{t('components.guessBoard.howToPlay.title')}</div>
      <div className='how-to-play-attempts'>{t('components.guessBoard.howToPlay.attempts')}</div>

      <div className='how-to-play-steps'>
        {steps.map((s, i) => (
          <div key={i} className='how-to-play-step'>
            <div className='how-to-play-step-num'>{i + 1}</div>
            <div>
              <div className='how-to-play-step-h'>{s.h}</div>
              <div className='how-to-play-step-b'>{s.b}</div>
            </div>
          </div>
        ))}
      </div>

      <div className='how-to-play-legend-row'>
        <span className='how-to-play-legend-label'>{t('components.guessBoard.howToPlay.legendLabel')}:</span>
        {[
          { key: 'legendFar',     cls: 'legend-far'     },
          { key: 'legendClose',   cls: 'legend-close'   },
          { key: 'legendCorrect', cls: 'legend-correct' },
        ].map(({ key, cls }) => (
          <span key={key} className='how-to-play-legend-item'>
            <span className={`legend-dot ${cls}`} />
            {t(`components.guessBoard.howToPlay.${key}`)}
          </span>
        ))}
      </div>

      <div className='how-to-play-arrow-note'>{t('components.guessBoard.howToPlay.arrowNote')}</div>
    </div>
  );
}

function GuessBoard({ todaySeed, todayHistory, addAttemptHandler, zone }) {
  const bottom = useRef(null);
  const currentCountry = getCountry();
  const cities = getCitiesArray(currentCountry);
  const [mapExpanded, setMapExpanded] = useState(true);

  const { cityPart, setCityPart, guessEnabled, timeLeft, getAttempts } = useGameState(todayHistory, todaySeed, zone);
  const { validateSeed } = useSeedValidation(todaySeed, zone);

  const handleGuess = (guessedCity) => {
    if (!validateSeed('guess')) return;

    const eog = guessedCity.name === getRandCity(cities, todaySeed).name;
    addAttemptHandler(guessedCity, eog);
    setTimeout(() => bottom.current.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const attempts = getAttempts(todayHistory);
  const targetCity = getRandCity(cities, todaySeed);

  return (
    <>
      <div className='requirements'>
        <span>{t('components.guessBoard.todayCityBadgeTitle', { country: t(`countries.${getCountry()}`) })}</span>
        <img src={`/img/sign_${currentCountry}/` + targetCity.hashFilename} />
      </div>

      {/* Collapsible map */}
      <div
        className='map-panel'
        style={{ height: mapExpanded ? 200 : 0 }}
      >
        <MapWithPins guesses={attempts} country={currentCountry} targetCity={targetCity} />
      </div>
      <button
        className='map-toggle'
        onClick={() => setMapExpanded(e => !e)}
        aria-expanded={mapExpanded}
      >
        <span className={`map-toggle-chevron ${mapExpanded ? '' : 'collapsed'}`}>▾</span>
        <span className='map-toggle-label'>{t('components.guessBoard.mapToggle.label')}</span>
        {!mapExpanded && attempts.length > 0 && (
          <span className='map-toggle-pins'>
            {t('components.guessBoard.mapToggle.pins', { count: attempts.length })}
          </span>
        )}
      </button>

      <div className='body'>
        {attempts.length === 0 ? (
          <HowToPlayLanding />
        ) : (
          <>
            {attempts.map((g, idx, array) => (
              <Guess
                key={idx}
                idx={idx}
                guessedCity={g}
                targetCity={targetCity}
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
          attempts={attempts}
          targetCity={targetCity}
          todaySeed={todaySeed}
          timeLeft={timeLeft}
        />
      )}
    </>
  );
}

export default GuessBoard;
