import './guess.css';

import React from 'react';
import {
  countDirection,
  distanceComparator,
  getDistanceInKm,
  LESS_ARROW,
  MORE_ARROW,
  populationComparator,
  regionComparator
} from '../Util/util';
import compassCS from '../img/new_compass_cs.svg';
import compassEN from '../img/new_compass_en.svg';
import compassArrow from '../img/compass_arrow.svg';
import compassPin from '../img/compass_pin.svg';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { getLanguage, LANGUAGES, t } from '../Util/translate';
import { getCountry } from '../Util/countryUtil';

const Guess = ({ idx, guessedCity, targetCity, isLast, isEog }) => {
  const tooltipWidth = '17vw';

  const valueComparator = (number1, number2) => {
    if (number1 > number2) {
      return <div className='less-guess'>{LESS_ARROW}</div>;
    } else if (number1 < number2) {
      return <div className='more-guess'>{MORE_ARROW}</div>;
    } else {
      return '';
    }
  };

  const regionFilter = (region) => {
    switch (region) {
      case 'Jihomoravský':
        return 'Jiho- moravský';
      case 'Moravskoslezský':
        return 'Moravsko- slezský';
      case 'Královéhradecký':
        return 'Králové- hradecký';
      case 'Středočeský':
        return 'Středo- český';
      default:
        return region;
    }
  };

  const regionGuess = regionComparator(guessedCity, targetCity);
  const populationGuess = populationComparator(guessedCity, targetCity);
  const populationDiff = () => {
    if (guessedCity.population < targetCity.population) {
      return t('components.guess.populationDiff.more');
    } else if (guessedCity.population > targetCity.population) {
      return t('components.guess.populationDiff.less');
    } else {
      return t('components.guess.populationDiff.same');
    }
  };

  const distanceGuess = distanceComparator(guessedCity, targetCity);
  const distanceDiff = getDistanceInKm(guessedCity, targetCity);

  const directionGuess = countDirection(guessedCity, targetCity);
  const directionDiff = (directionGuess) => {
    switch (directionGuess) {
      case 'N':
        return t('components.guess.directionDiff.north');
      case 'NE':
        return t('components.guess.directionDiff.northEast');
      case 'E':
        return t('components.guess.directionDiff.east');
      case 'SE':
        return t('components.guess.directionDiff.southEast');
      case 'S':
        return t('components.guess.directionDiff.south');
      case 'SW':
        return t('components.guess.directionDiff.southWest');
      case 'W':
        return t('components.guess.directionDiff.west');
      case 'NW':
        return t('components.guess.directionDiff.northWest');
      default:
        return t('components.guess.directionDiff.same');
    }
  };

  const getSign = (guessedCity) => {
    const currentCountry = getCountry();
    return guessedCity.hashFilename != undefined ? `/img/sign_${currentCountry}/` + guessedCity.hashFilename : guessedCity.signUrl;
  };

  return (
    <div className='guessLine'>
      <div className='guess-city'>
        {idx + 1}. {guessedCity.name}
      </div>
      <div className={`differences ${isLast ? 'last' : ''}`}>
        <Tippy
          placement='bottom'
          content={
            regionGuess === 'green'
              ? t('components.guess.regionDiff.same')
              : regionGuess === 'orange'
                ? t('components.guess.regionDiff.neighbour')
                : t('components.guess.regionDiff.other')
          }
          theme={regionGuess}
          zIndex={9}
          disabled={!isLast || isEog}
          visible={true}
          maxWidth={tooltipWidth}
          className='guess-tippy'
        >
          <div className={`guess district ${regionGuess}`}>{regionFilter(guessedCity.region)}</div>
        </Tippy>
        <Tippy
          placement='bottom'
          content={t('components.guess.populationDiff.title', {
            prefix: populationGuess !== 'red' ? t('components.guess.populationDiff.prefix') : '',
            diff: populationDiff()
          })}
          theme={populationGuess}
          zIndex={9}
          disabled={!isLast || isEog}
          visible={true}
          maxWidth={tooltipWidth}
          className='guess-tippy'
        >
          <div className={`guess population ${populationGuess}`}>
            {`${guessedCity.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`}
            {valueComparator(guessedCity.population, targetCity.population)}
          </div>
        </Tippy>
        <Tippy
          placement='bottom'
          content={t('components.guess.distanceDiff.title', { distanceDiff })}
          theme={distanceGuess}
          zIndex={9}
          disabled={!isLast || isEog}
          visible={true}
          maxWidth={tooltipWidth}
          className='guess-tippy'
        >
          <div className={`guess area ${distanceGuess}`}>{Math.trunc(distanceDiff)} km</div>
        </Tippy>
        <div className={`guess sign`}>
          {/* TODO directory to constant; move images to src and import them */}
          <img src={getSign(guessedCity)} />
        </div>
        <Tippy
          placement='bottom'
          content={t('components.guess.directionDiff.title', { directionDiff: directionDiff(directionGuess) })}
          theme={directionGuess === 'X' ? 'green' : 'red'}
          zIndex={9}
          disabled={!isLast || isEog}
          visible={true}
          maxWidth={tooltipWidth}
          className='guess-tippy'
        >
          <div className={`guess direction`} style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Compass base background */}
            <img
              src={getLanguage() === LANGUAGES.cs ? compassCS : compassEN}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              alt='compass base'
            />

            {/* Arrow or Pin overlay */}
            <img
              src={directionGuess === 'X' ? compassPin : compassArrow}
              className={`guess direction compass ${directionGuess} ${directionGuess !== 'X' ? 'filter-' + distanceGuess : ''}`}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              alt='compass direction'
            />
          </div>
        </Tippy>
      </div>
    </div>
  );
};

export default Guess;
