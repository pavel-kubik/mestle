import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getScore } from '../History/history';
import BetaSwitch from './BetaSwitch';

import './User.css';

const User = ({ history }) => {
  let [authMode, setAuthMode] = useState('signin');

  const changeAuthMode = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
  };

  const getUserScore = () => {
    return getScore(history);
  };

  const isSignUp = () => {
    return authMode === 'signup';
  };

  const isSignIn = () => {
    return authMode === 'signin';
  };

  const signIn = () => {};

  const signUp = () => {};

  return (
    <div className='user-info'>
      <div className='statistics'>
        <div>Uhádnutých měst: {getUserScore()}</div>
        <div className='daily-statistics'>
          <div className='empty'></div>
          <div className='solved1'></div>
          <div className='solved2'></div>
          <div className='solved3'></div>
          <div className='solved4'></div>
          <div className='solved5'></div>
          <div className='solved6'></div>
        </div>
      </div>
      <div>
        Přihlásit se k beta testování. Dostanete testovac funkce jako první!
        <BetaSwitch />
      </div>
      <div className='login-sign-up-form'>
        <ul className='tab-group'>
          <li className='tab active'>
            <div onClick={changeAuthMode} className={isSignIn() ? 'active' : ''}>
              Přihlášení
            </div>
          </li>
          <li className='tab'>
            <div onClick={changeAuthMode} className={isSignUp() ? 'active' : ''}>
              Registrace
            </div>
          </li>
        </ul>
        {isSignIn() && (
          <div className='auth-form'>
            <form>
              <div className='field-wrap'>
                <label>Jméno</label>
                <input type='text' autoComplete='off' />
              </div>
              <div className='field-wrap'>
                <label>Heslo</label>
                <input type='password' autoComplete='off' />
              </div>
              <div className='button' onClick={signIn}>
                Přihlásit
              </div>
            </form>
          </div>
        )}
        {isSignUp() && (
          <div className='auth-form'>
            <form>
              <div className='field-wrap'>
                <label>Jméno</label>
                <input type='text' autoComplete='off' />
              </div>
              <div className='field-wrap'>
                <label>Email</label>
                <input type='text' autoComplete='off' />
              </div>
              <div className='field-wrap'>
                <label>Heslo</label>
                <input type='password' autoComplete='off' />
              </div>
              <div className='button' onClick={signUp}>
                Registrovat
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

User.propTypes = {
  history: PropTypes.object.isRequired
};

export default User;
