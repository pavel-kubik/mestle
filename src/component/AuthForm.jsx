import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './AuthForm.css';
import { t } from '../Util/translate';
import { clearUserDataInLocalStorage, signIn, signUp } from '../lib/auth';

const AuthForm = ({ loggedUser, setLoggedUser }) => {
  const [authMode, setAuthMode] = useState('signin');
  // https://linguinecode.com/post/how-to-get-form-data-on-submit-in-reactjs
  const [formData, updateFormData] = useState({});
  const [loginError, setLoginError] = useState(null);

  const changeAuthMode = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
  };

  const isSignUp = () => {
    return authMode === 'signup';
  };

  const isSignIn = () => {
    return authMode === 'signin';
  };

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
    setLoginError(null);
  };

  const signInHandler = async () => {
    return await signIn(formData.email, formData.password, setLoggedUser, setLoginError);
  };

  const signUpHandler = async () => {
    return await signUp(formData.username, formData.email, formData.password, setLoggedUser, setLoginError);
  };

  const signOut = async () => {
    setLoggedUser(null);
    updateFormData({});
    clearUserDataInLocalStorage();
  };

  return (
    <div className='auth'>
      <div className='login-sign-up-form'>
        {loggedUser && (
          <>
            <div>Welcome {loggedUser.username}!</div>
            <div className='button' onClick={signOut}>
              Sign out
            </div>
          </>
        )}
        {!loggedUser && (
          <>
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
                  <fieldset>
                    <div className='field-wrap'>
                      <label>{t('components.user.login.email')}</label>
                      <input type='text' name='email' value={formData.email || ''} autoComplete='off' onChange={handleChange} />
                    </div>
                    <div className='field-wrap'>
                      <label>{t('components.user.login.password')}</label>
                      <input type='password' name='password' value={formData.password || ''} autoComplete='off' onChange={handleChange} />
                    </div>
                    {loginError && <div className='field-error'>{loginError}</div>}
                    <div className='button' onClick={signInHandler}>
                      {t('components.user.login.submit')}
                    </div>
                  </fieldset>
                </form>
              </div>
            )}
            {isSignUp() && (
              <div className='auth-form'>
                <form>
                  <fieldset>
                    <div className='field-wrap'>
                      <label>{t('components.user.register.username')}</label>
                      <input type='text' name='username' value={formData.username || ''} autoComplete='off' onChange={handleChange} />
                    </div>
                    <div className='field-wrap'>
                      <label>{t('components.user.register.email')}</label>
                      <input type='text' name='email' value={formData.email || ''} autoComplete='off' onChange={handleChange} />
                    </div>
                    <div className='field-wrap'>
                      <label>{t('components.user.register.password')}</label>
                      <input type='password' name='password' value={formData.password || ''} autoComplete='off' onChange={handleChange} />
                    </div>
                    <div className='button' onClick={signUpHandler}>
                      {t('components.user.register.submit')}
                    </div>
                  </fieldset>
                </form>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

AuthForm.propTypes = {
  loggedUser: PropTypes.object,
  setLoggedUser: PropTypes.func.isRequired
};

export default AuthForm;
