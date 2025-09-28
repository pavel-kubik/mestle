import bcrypt from 'bcryptjs-react';
import { httpClient } from './httpClient';
import { t } from '../Util/translate';

class AuthService {
  async getSalt(email) {
    try {
      const response = await httpClient.post('/.netlify/functions/sign_in_salt', {
        email: email
      });
      return response.salt;
    } catch (error) {
      console.error('Error getting salt:', error);
      throw new Error(t('lib.auth.signIn.cantLogin'));
    }
  }

  async signIn(email, password, setLoggedUser, setLoginError) {
    try {
      const salt = await this.getSalt(email);
      const saltedPassword = await bcrypt.hash(password, salt);

      const userData = await httpClient.post('/.netlify/functions/sign_in', {
        email: email,
        password: saltedPassword
      });

      setLoggedUser(userData);
      this.storeUserDataInLocalStorage(userData);
      return userData;
    } catch (error) {
      console.error('Login error:', error);
      setLoginError(t('lib.auth.signIn.cantLogin'));
      throw error;
    }
  }

  async signUp(username, email, password, setLoggedUser, setLoginError) {
    try {
      const salt = await bcrypt.genSalt(10);
      const saltedPassword = await bcrypt.hash(password, salt);

      const userData = await httpClient.post('/.netlify/functions/sign_up', {
        username: username,
        email: email,
        password: saltedPassword,
        salt: salt
      });

      setLoggedUser(userData);
      this.storeUserDataInLocalStorage(userData);
      return userData;
    } catch (error) {
      console.error('SignUp error:', error);

      if (error.message && error.message.includes('errorCode')) {
        const data = JSON.parse(error.message);
        setLoginError(t(data.errorCode));
      } else {
        setLoginError(t('lib.auth.signUp.cantSignUp'));
      }
      throw error;
    }
  }

  storeUserDataInLocalStorage(userData) {
    localStorage.setItem('_user', JSON.stringify(userData));
  }

  clearUserDataInLocalStorage() {
    localStorage.removeItem('_user');
  }

  getUserDataInLocalStorage() {
    return JSON.parse(localStorage.getItem('_user'));
  }
}

export const authService = new AuthService();
