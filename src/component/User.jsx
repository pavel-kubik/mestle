import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getScore } from '../History/history';
import BetaSwitch from './BetaSwitch';

import './User.css';
import { t } from '../Util/translate';

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

  // https://linguinecode.com/post/how-to-get-form-data-on-submit-in-reactjs
  const [formData, updateFormData] = useState({});

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
    console.log(formData);
  };

  const signIn = async () => {
    console.log(formData);
    const response = await fetch('/.netlify/functions/sign_in', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password //TODO use bcrypt
      })
    });
    if (response.status === 200) {
      setAuthMode('logged');
    } else {
      const data = response.json();
      console.log('Error: ' + data);
    }
  };

  const signUp = async () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    console.log(formData);
    const response = await fetch('/.netlify/functions/sign_up', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password //TODO use bcrypt
      })
    });
    if (response.status === 200) {
      setAuthMode('signin');
    } else {
      const data = response.json();
      console.log('Error: ' + data);
    }
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
      <div className='auth'>
        <div className='login-sign-up-form'>
          <ul className='tab-group'>
            <li className='tab active'>
              <div onClick={changeAuthMode} className={isSignIn() ? 'active' : ''}>
                {t('components.user.login.title')}
              </div>
            </li>
            <li className='tab'>
              <div onClick={changeAuthMode} className={isSignUp() ? 'active' : ''}>
                {t('components.user.register.title')}
              </div>
            </li>
          </ul>
          {isSignIn() && (
            <div className='auth-form'>
              <form>
                <fieldset disabled='true'>
                  <div className='field-wrap'>
                    <label>{t('components.user.login.username')}</label>
                    <input type='text' name='username' value={formData.username} autoComplete='off' onChange={handleChange} />
                  </div>
                  <div className='field-wrap'>
                    <label>{t('components.user.login.password')}</label>
                    <input type='password' name='password' value={formData.password} autoComplete='off' onChange={handleChange} />
                  </div>
                  <div className='button' onClick={signIn}>
                    {t('components.user.login.submit')}
                  </div>
                </fieldset>
              </form>
            </div>
          )}
          {isSignUp() && (
            <div className='auth-form'>
              <form>
                <fieldset disabled='true'>
                  <div className='field-wrap'>
                    <label>{t('components.user.register.username')}</label>
                    <input type='text' name='username' value={formData.username} autoComplete='off' onChange={handleChange} />
                  </div>
                  <div className='field-wrap'>
                    <label>{t('components.user.register.email')}</label>
                    <input type='text' name='email' autoComplete='off' onChange={handleChange} />
                  </div>
                  <div className='field-wrap'>
                    <label>{t('components.user.register.password')}</label>
                    <input type='password' name='password' value={formData.password} autoComplete='off' onChange={handleChange} />
                  </div>
                  <div className='button' onClick={signUp}>
                    {t('components.user.register.submit')}
                  </div>
                </fieldset>
              </form>
            </div>
          )}
          <div style={{ color: 'red' }}>{t('components.user.login.futureFeature')}</div>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  history: PropTypes.object.isRequired
};

export default User;
