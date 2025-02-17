import React from 'react';
import PropTypes from 'prop-types';
import { getScore } from '../History/history';
import BetaSwitch from './BetaSwitch';

import './User.css';
import { t } from '../Util/translate';
/* eslint-disable */
import AuthForm from 'jwt-auth-mongodb/dist/fe/component/AuthForm';
//import { AuthForm } from 'jwt-auth-mongodb'; // not works
import 'jwt-auth-mongodb/src/fe/component/AuthForm.css';

/* eslint-disable */
const User = ({ history, loggedUser, setLoggedUser, initBECall, syncAttempts }) => {
  const getUserScore = () => {
    return getScore(history);
  };

  return (
    <div className='user-info'>
      {false && (
        <AuthForm //
          loggedUser={loggedUser}
          setLoggedUser={setLoggedUser}
          preSignIn={initBECall}
          preSignUp={initBECall}
          postSignIn={syncAttempts}
          postSignUp={syncAttempts}
          t={t}
        />
      )}
      <div className='statistics'>
        <div>{t('components.user.guessCities.title', { score: getUserScore() })}</div>
      </div>
      {loggedUser && ( //
        <>
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
        </>
      )}
      <div>
        {t('components.user.betaTesting.title')}
        <BetaSwitch />
      </div>
      <div style={{ color: 'red' }}>{t('components.user.login.futureFeature')}</div>
    </div>
  );
};

User.propTypes = {
  history: PropTypes.object.isRequired,
  loggedUser: PropTypes.object,
  setLoggedUser: PropTypes.func.isRequired,
  initBECall: PropTypes.func.isRequired,
  syncAttempts: PropTypes.func.isRequired
};

export default User;
