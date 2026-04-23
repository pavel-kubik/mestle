import './guess.css';

import React from 'react';
import {
  countDirection,
  distanceComparator,
  getDistanceInKm,
  populationComparator,
  regionComparator
} from '../Util/util';
import compassCS from '../img/new_compass_cs.svg';
import compassEN from '../img/new_compass_en.svg';
import compassArrow from '../img/compass_arrow.svg';
import compassPin from '../img/compass_pin.svg';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { getLanguage, LANGUAGES, t } from '../Util/translate';
import { getCountry } from '../Util/countryUtil';

const DIRECTION_BEARING = {
  N: 0, NE: 45, E: 90, SE: 135, S: 180, SW: 225, W: 270, NW: 315, X: 0
};

const toneClass = (tone) => {
  if (tone === 'green') return 'chip-correct';
  if (tone === 'orange') return 'chip-warm';
  return 'chip-far';
};

const AttrChip = React.forwardRef(function AttrChip({ label, value, tone, arrow }, ref) {
  return (
    <div ref={ref} className={`attr-chip ${toneClass(tone)}`}>
      <div className='attr-chip-label'>{label}</div>
      <div className='attr-chip-value'>
        <span>{value}</span>
        {arrow && <span className='attr-arrow'>{arrow}</span>}
      </div>
    </div>
  );
});

const CompassChip = React.forwardRef(function CompassChip({ directionGuess, distanceTone }, ref) {
  const isCorrect = directionGuess === 'X';
  return (
    <div ref={ref} className={`attr-chip attr-chip-compass ${isCorrect ? 'chip-correct' : toneClass(distanceTone)}`}>
      <div className='attr-chip-label'>{t('components.guess.attr.dir')}</div>
      <div className='attr-chip-compass-inner'>
        <img
          src={getLanguage() === LANGUAGES.cs ? compassCS : compassEN}
          className='compass-base'
          alt='compass base'
        />
        <img
          src={isCorrect ? compassPin : compassArrow}
          className={`compass-needle ${directionGuess} ${!isCorrect ? 'filter-' + distanceTone : ''}`}
          alt='compass direction'
        />
      </div>
    </div>
  );
});

const getSign = (guessedCity) => {
  const currentCountry = getCountry();
  return guessedCity.hashFilename != undefined
    ? `/img/sign_${currentCountry}/` + guessedCity.hashFilename
    : guessedCity.signUrl;
};

const getMapUrl = (city) => {
  return `https://mapy.com/fnc/v1/showmap?center=${city.longitude},${city.latitude}&zoom=11&marker=true`;
};

const Guess = ({ idx, guessedCity, targetCity, isLast, isEog }) => {
  const regionTone = regionComparator(guessedCity, targetCity);
  const popTone = populationComparator(guessedCity, targetCity);
  const distTone = distanceComparator(guessedCity, targetCity);
  const distKm = getDistanceInKm(guessedCity, targetCity);
  const dirGuess = countDirection(guessedCity, targetCity);
  const isCorrect = distTone === 'green' && dirGuess === 'X';

  const popArrow = guessedCity.population < targetCity.population ? '▲'
    : guessedCity.population > targetCity.population ? '▼' : null;

  const overallTone = isCorrect ? 'green'
    : (distTone === 'orange' || popTone === 'orange' || regionTone === 'orange') ? 'orange' : 'red';

  const popFormatted = guessedCity.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');

  const directionDiffText = () => {
    switch (dirGuess) {
      case 'N': return t('components.guess.directionDiff.north');
      case 'NE': return t('components.guess.directionDiff.northEast');
      case 'E': return t('components.guess.directionDiff.east');
      case 'SE': return t('components.guess.directionDiff.southEast');
      case 'S': return t('components.guess.directionDiff.south');
      case 'SW': return t('components.guess.directionDiff.southWest');
      case 'W': return t('components.guess.directionDiff.west');
      case 'NW': return t('components.guess.directionDiff.northWest');
      default: return t('components.guess.directionDiff.same');
    }
  };

  const populationDiffText = () => {
    if (guessedCity.population < targetCity.population) return t('components.guess.populationDiff.more');
    if (guessedCity.population > targetCity.population) return t('components.guess.populationDiff.less');
    return t('components.guess.populationDiff.same');
  };

  return (
    <div className={`guess-card ${isLast ? 'last' : ''}`}>
      <div className='guess-card-header'>
        <div className={`guess-number-badge ${toneClass(overallTone)}`}>{idx + 1}</div>
        <div className='guess-card-city'>
          {guessedCity.name}
          {isLast && (
            <a
              href={getMapUrl(guessedCity)}
              target='_blank'
              rel='noopener noreferrer'
              className='guess-map-link'
              title='Open on map'
            >🗺️</a>
          )}
        </div>
        {isCorrect && (
          <div className='guess-correct-badge'>✓ {t('components.guess.correct')}</div>
        )}
      </div>

      <div className='guess-chips'>
        <Tippy
          content={t('components.guess.distanceDiff.title', { distanceDiff: distKm })}
          theme={distTone === 'green' ? 'green' : distTone === 'orange' ? 'orange' : 'red'}
          disabled={!isLast || isEog}
          visible={isLast && !isEog}
          placement='bottom'
          zIndex={9}
          maxWidth='150px'
        >
          <AttrChip
            label={t('components.guess.attr.dist')}
            value={`${distKm} km`}
            tone={distTone}
          />
        </Tippy>

        <Tippy
          content={t('components.guess.populationDiff.title', {
            prefix: popTone !== 'red' ? t('components.guess.populationDiff.prefix') : '',
            diff: populationDiffText()
          })}
          theme={popTone === 'green' ? 'green' : popTone === 'orange' ? 'orange' : 'red'}
          disabled={!isLast || isEog}
          visible={isLast && !isEog}
          placement='bottom'
          zIndex={9}
          maxWidth='150px'
        >
          <AttrChip
            label={t('components.guess.attr.pop')}
            value={popFormatted}
            tone={popTone}
            arrow={popArrow}
          />
        </Tippy>

        <Tippy
          content={
            regionTone === 'green'
              ? t('components.guess.regionDiff.same')
              : regionTone === 'orange'
                ? t('components.guess.regionDiff.neighbour')
                : t('components.guess.regionDiff.other')
          }
          theme={regionTone === 'green' ? 'green' : regionTone === 'orange' ? 'orange' : 'red'}
          disabled={!isLast || isEog}
          visible={isLast && !isEog}
          placement='bottom'
          zIndex={9}
          maxWidth='150px'
        >
          <AttrChip
            label={t('components.guess.attr.region')}
            value={guessedCity.region}
            tone={regionTone}
          />
        </Tippy>

        <Tippy
          content={t('components.guess.directionDiff.title', { directionDiff: directionDiffText() })}
          theme={dirGuess === 'X' ? 'green' : 'red'}
          disabled={!isLast || isEog}
          visible={isLast && !isEog}
          placement='bottom'
          zIndex={9}
          maxWidth='150px'
        >
          <CompassChip directionGuess={dirGuess} distanceTone={distTone} />
        </Tippy>
      </div>
    </div>
  );
};

export default Guess;
