import { getScoresByCountry } from '../History/history';
import BetaSwitch from './BetaSwitch';
import CountrySwitch from './CountrySwitch';

import './User.css';
import { t } from '../Util/translate';
/* eslint-disable */
import AuthForm from 'jwt-auth-mongodb/dist/fe/component/AuthForm';
//import { AuthForm } from 'jwt-auth-mongodb'; // not works
import 'jwt-auth-mongodb/src/fe/component/AuthForm.css';

/* eslint-disable */
const User = ({ history, loggedUser, setLoggedUser, initBECall, syncAttempts }) => {
  const scores = getScoresByCountry();

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
        <div>
          {t('components.user.totalGuessCities.title', {
            total: scores.total,
            cz: scores.cz,
            de: scores.de
          })}
        </div>
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
        {t('components.user.country.title')}
        <CountrySwitch />
      </div>
      <div>
        {t('components.user.betaTesting.title')}
        <BetaSwitch />
      </div>
      <div style={{ color: 'red' }}>{t('components.user.login.futureFeature')}</div>
    </div>
  );
};

export default User;
