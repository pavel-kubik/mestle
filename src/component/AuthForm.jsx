import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import bcrypt from 'bcryptjs-react';
import './AuthForm.css';
import { t } from '../Util/translate';
import { clearUserDataInLocalStorage, storeUserDataInLocalStorage } from '../lib/auth';

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

  const signIn = async () => {
    try {
      const responseSalt = await fetch('/.netlify/functions/sign_in_salt', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email
        })
      });
      if (!responseSalt.ok) {
        console.log('Error read salt: ' + JSON.stringify(responseSalt));
        setLoginError("Can't login. Please check your email and password.");
        return;
      }
      const { salt } = await responseSalt.json();
      const saltedPassword = await bcrypt.hash(formData.password, salt);
      const response = await fetch('/.netlify/functions/sign_in', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: saltedPassword
        })
      });
      if (response.status === 200) {
        //const token = response.headers.get('x-access-token');
        const userData = await response.json();
        setLoggedUser(userData);
        storeUserDataInLocalStorage(userData);
      } else {
        const data = response.json();
        console.log('Error: ' + data);
        setLoginError("Can't login. Please check your email and password.");
      }
    } catch (error) {
      console.log('Login error: ' + error);
      setLoginError("Can't login. Please check your email and password.");
    }
  };

  const signUp = async () => {
    console.log(formData);
    const salt = await bcrypt.genSalt(10);
    const saltedPassword = await bcrypt.hash(formData.password, salt);
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
        password: saltedPassword,
        salt: salt
      })
    });
    if (response.status === 200) {
      //const token = response.headers.get('x-access-token');
      const userData = await response.json();
      setLoggedUser(userData);
      storeUserDataInLocalStorage(userData);
    } else {
      const data = response.json();
      console.log('SignUp error: ' + data);
      setLoginError("Can't sign up now. Please try it later.");
    }
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
                    <div className='button' onClick={signUp}>
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
