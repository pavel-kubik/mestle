import React from 'react';
import { t } from '../Util/translate';

const HowToPlay = () => {
  return (
    <div className='how-to-play'>
      <h1>{t('components.howToPlay.title')}</h1>
      <p>
        The goal of the game is to guess a city. The city is randomly selected from a list of cities. All users guess same city each day.
        You will be given sign of the city. We will show relation of last attempt and daily city and you can go closer in each attempt.
      </p>
    </div>
  );
};

export default HowToPlay;
