import React from 'react';
import PropTypes from 'prop-types';
import { getScore } from '../History/history';
import BetaSwitch from './BetaSwitch';
import { TwitterFollowButton } from 'react-twitter-embed';

import './User.css';
import { t } from '../Util/translate';
import AuthForm from './AuthForm';

const User = ({ history, loggedUser, setLoggedUser }) => {
  const getUserScore = () => {
    return getScore(history);
  };

  return (
    <div className='user-info'>
      <div className='statistics'>
        <div>{t('components.user.guessCities.title', { score: getUserScore() })}</div>
        {false && (
          <div className='daily-statistics'>
            <div className='empty'></div>
            <div className='solved1'></div>
            <div className='solved2'></div>
            <div className='solved3'></div>
            <div className='solved4'></div>
            <div className='solved5'></div>
            <div className='solved6'></div>
          </div>
        )}
      </div>
      <div>
        {t('components.user.betaTesting.title')}
        <BetaSwitch />
      </div>
      <AuthForm loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <div>
        <div className='twitter-wrapper'>
          <TwitterFollowButton
            options={{
              showScreenName: 'false',
              showCount: 'false',
              size: 'large'
            }}
            screenName={'MestleCz'}
          />
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  history: PropTypes.object.isRequired,
  loggedUser: PropTypes.object,
  setLoggedUser: PropTypes.func.isRequired
};

export default User;
