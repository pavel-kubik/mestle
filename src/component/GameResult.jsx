import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import { t } from '../Util/translate';
import {
  dateOfPublish,
  distanceComparator,
  districtComparator,
  GREEN_CIRCLE,
  ORANGE_CIRCLE,
  populationComparator,
  regionComparator,
  WHITE_CIRCLE
} from '../Util/util';

function GameResult({ attempts, targetCity, todaySeed, timeLeft }) {
  const [shared, setShared] = useState(false);

  const generateResult = () => {
    return (
      t('components.guessBoard.todayDate', { date: todaySeed - dateOfPublish }) +
      attempts
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
    const shareResults = generateResult();
    navigator.clipboard.writeText(shareResults);
    setShared(true);
  };

  return (
    <div className='congratulation'>
      <Tippy content={generateResult()} allowHTML={true} placement='auto' visible={true}>
        <div className='big button enabled' onClick={handleShare}>
          {t('components.guessBoard.guessResult.copy')}
        </div>
      </Tippy>
      {shared && <div className='notification'>{t('components.guessBoard.guessResult.copyDone')}</div>}
      <div>{t('components.guessBoard.guessResult.title', { timeLeft })}</div>
    </div>
  );
}

GameResult.propTypes = {
  attempts: PropTypes.array.isRequired,
  targetCity: PropTypes.object.isRequired,
  todaySeed: PropTypes.number.isRequired,
  timeLeft: PropTypes.string.isRequired
};

export default GameResult;
