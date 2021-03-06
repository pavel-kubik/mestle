import './guess.css';

import React from 'react';
import PropTypes from 'prop-types';
import {
  altitudeComparator,
  countDirection,
  distanceComparator,
  getDistanceInKm,
  LESS_ARROW,
  MORE_ARROW,
  populationComparator,
  regionComparator
} from '../Util/util';
import compass from '../img/compass_background.svg';
import compassArrow from '../img/compass_arrow.svg';
import compassPin from '../img/compass_pin.svg';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

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
      return 'více';
    } else if (guessedCity.population > targetCity.population) {
      return 'méně';
    } else {
      return 'stejně';
    }
  };

  const distanceGuess = distanceComparator(guessedCity, targetCity);
  const distanceDiff = getDistanceInKm(guessedCity, targetCity);

  const altitudeGuess = altitudeComparator(guessedCity, targetCity);
  const altitudeDiff = () => {
    if (guessedCity.altitude < targetCity.altitude) {
      return 'větší';
    } else if (guessedCity.altitude > targetCity.altitude) {
      return 'menší';
    } else {
      return 'stejnou';
    }
  };

  const directionGuess = countDirection(guessedCity, targetCity);
  const directionDiff = (directionGuess) => {
    switch (directionGuess) {
      case 'N':
        return 'sever';
      case 'NE':
        return 'severo- východ';
      case 'E':
        return 'východ';
      case 'SE':
        return 'jihovýchod';
      case 'S':
        return 'jih';
      case 'SW':
        return 'jihozápad';
      case 'W':
        return 'západ';
      case 'NW':
        return 'severo- západ';
      default:
        return 'stejném místě';
    }
  };

  return (
    <div>
      <div className='guess-city'>
        {idx + 1}. {guessedCity.name}
      </div>
      <div className={`differences ${isLast ? 'last' : ''}`}>
        <Tippy
          placement='bottom'
          content={
            regionGuess === 'green'
              ? 'Hádané město je ve stejném kraji.'
              : regionGuess === 'orange'
              ? 'Hádané město je v sousedním kraji.'
              : 'Hádané město je v jiném kraji.'
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
          content={`Hádané město má ${populationGuess !== 'red' ? 'o trochu' : ''} ${populationDiff()} obyvatel.`}
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
          content={`Hádané město je ${distanceDiff}\u00A0km daleko.`}
          theme={distanceGuess}
          zIndex={9}
          disabled={!isLast || isEog}
          visible={true}
          maxWidth={tooltipWidth}
          className='guess-tippy'
        >
          <div className={`guess area ${distanceGuess}`}>{Math.trunc(distanceDiff)} km</div>
        </Tippy>
        <Tippy
          placement='bottom'
          content={`Hádané město má ${altitudeGuess !== 'red' ? 'o trochu' : ''} ${altitudeDiff()} nadmořskou výšku.`}
          theme={altitudeGuess}
          zIndex={9}
          disabled={!isLast || isEog}
          visible={true}
          maxWidth={tooltipWidth}
          className='guess-tippy'
        >
          <div className={`guess altitude ${altitudeGuess}`}>
            {guessedCity.altitude} m.n.m.
            {valueComparator(guessedCity.altitude, targetCity.altitude)}
          </div>
        </Tippy>
        <Tippy
          placement='bottom'
          content={`Hádané město je na ${directionDiff(directionGuess)}.`}
          theme={directionGuess === 'X' ? 'green' : 'red'}
          zIndex={9}
          disabled={!isLast || isEog}
          visible={true}
          maxWidth={tooltipWidth}
          className='guess-tippy'
        >
          <div
            className={`guess direction`}
            style={{
              backgroundImage: `url(${compass})`,
              backgroundRepeat: 'no-repeat',
              overflow: 'hidden'
            }}
          >
            <div
              className={`guess direction compass ${directionGuess} ${directionGuess !== 'X' ? 'filter-' + distanceGuess : ''}`}
              style={{ backgroundImage: `url(${directionGuess === 'X' ? compassPin : compassArrow})`, backgroundRepeat: 'no-repeat' }}
            ></div>
          </div>
        </Tippy>
      </div>
    </div>
  );
};

Guess.propTypes = {
  idx: PropTypes.number.isRequired,
  guessedCity: PropTypes.object.isRequired,
  targetCity: PropTypes.object.isRequired,
  isLast: PropTypes.bool.isRequired,
  isEog: PropTypes.bool.isRequired
};

export default Guess;
