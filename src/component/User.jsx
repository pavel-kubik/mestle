import React from 'react';
import PropTypes from 'prop-types';
import { getScore } from '../History/history';
import BetaSwitch from './BetaSwitch';

const User = ({ history }) => {
  const getUserScore = () => {
    return getScore(history);
  };

  return (
    <>
      Uhádnutých měst: {getUserScore()}
      <BetaSwitch />
      <div className='login-sign-up-form'>
        <h1>Login / Sign Up</h1>
        <form>
          <label>
            Username:
            <input type='text' />
          </label>
          <label>
            Password:
            <input type='password' />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    </>
  );
};

User.propTypes = {
  history: PropTypes.object.isRequired
};

export default User;
