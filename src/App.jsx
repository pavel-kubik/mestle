import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import { getScore } from './History/history';
import { useStickyState } from './Util/util';
import { isBeta } from './Util/betaUtil';
import GuessBoard from './component/GuessBoard';
import User from './component/User';
import LeaderBoard from './component/LeaderBoard';
import HowToPlay from './component/HowToPlay';
import userNotLogged from './img/user_not_logged.svg';
import LanguageSwitch from './component/LanguageSwitch';
import { t } from './Util/translate';

import { hotjar } from 'react-hotjar';

hotjar.initialize(3360376, 6);

if (hotjar.initialized()) {
  hotjar.identify('USER_ID', { userProperty: 'value' });
}

const App = () => {
  // permanent
  const [history, setHistory] = useStickyState({}, 'mestle_history');
  const score = getScore(history);

  return (
    <Router>
      <div className='app'>
        <div className='header'>
          {/*<Link to='/login-sign-up'>Login / Sign Up</Link>*/}
          <Link to='/user' title={t('app.loginButton.title', { score })}>
            <img className='login-user' src={userNotLogged} />
          </Link>
          <Link to='/'>
            <div>
              <span>Městle</span>
              {isBeta() && <span style={{ color: 'red', fontStyle: 'italic' }}> beta</span>}
              <div className='debug'>({new Date().toLocaleDateString('cz-CS')})</div>
            </div>
          </Link>
          {/*TODO <Link to='/leader-board'>Leader Board</Link>*/}
          {/*TODO <Link to='/help'>How To Play</Link>*/}

          <div style={{ display: 'flex', gap: 16 }}>
            <LanguageSwitch />
          </div>
        </div>
        <Routes>
          <Route exact path='/' element={<GuessBoard history={history} setHistory={setHistory} />} />
          <Route exact path='/user' element={<User history={history} />} />
          <Route exact path='/leader-board' element={<LeaderBoard />} />
          <Route exact path='/help' element={<HowToPlay />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
