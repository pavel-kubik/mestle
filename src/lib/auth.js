import bcrypt from 'bcryptjs-react';
import { t } from '../Util/translate';

export const storeUserDataInLocalStorage = (userData) => {
  localStorage.setItem('_user', JSON.stringify(userData));
};

export const clearUserDataInLocalStorage = () => {
  localStorage.removeItem('_user');
};

export const getUserDataInLocalStorage = () => {
  return JSON.parse(localStorage.getItem('_user'));
};

export const signIn = async (email, password, setLoggedUser, setLoginError) => {
  try {
    const responseSalt = await fetch('/.netlify/functions/sign_in_salt', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    });
    if (!responseSalt.ok) {
      console.log('Error read salt: ' + JSON.stringify(responseSalt));
      setLoginError(t('lib.auth.signIn.cantLogin'));
      return;
    }
    const { salt } = await responseSalt.json();
    const saltedPassword = await bcrypt.hash(password, salt);
    const response = await fetch('/.netlify/functions/sign_in', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: saltedPassword
      })
    });
    if (response.status === 200) {
      const userData = await response.json();
      setLoggedUser(userData);
      storeUserDataInLocalStorage(userData);
      return userData;
    } else {
      const data = await response.json();
      console.log('Error: ' + JSON.stringify(data));
      setLoginError(t('lib.auth.signIn.cantLogin'));
    }
  } catch (error) {
    console.log('Login error: ' + error);
    setLoginError(t('lib.auth.signIn.cantLogin'));
  }
};

export const signUp = async (username, email, password, setLoggedUser, setLoginError) => {
  const salt = await bcrypt.genSalt(10);
  const saltedPassword = await bcrypt.hash(password, salt);
  const response = await fetch('/.netlify/functions/sign_up', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: saltedPassword,
      salt: salt
    })
  });
  if (response.status === 200) {
    //const token = response.headers.get('x-access-token');
    const userData = await response.json();
    setLoggedUser(userData);
    storeUserDataInLocalStorage(userData);
    return userData;
  } else {
    const data = await response.json();
    console.log('SignUp error: ' + JSON.stringify(data));
    if (data.errorCode) {
      setLoginError(t(data.errorCode));
    } else {
      setLoginError(t('lib.auth.signUp.cantSignUp'));
    }
  }
};
