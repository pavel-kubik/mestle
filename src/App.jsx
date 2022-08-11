import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TwitterFollowButton } from 'react-twitter-embed';

import './App.css';

import { getScore } from './History/history';
import { useStickyState } from './Util/util';
import { isBeta } from './Util/betaUtil';
import GuessBoard from './component/GuessBoard';
import User from './component/User';
import LeaderBoard from './component/LeaderBoard';
import HowToPlay from './component/HowToPlay';

import userNotLogged from './img/user_not_logged.svg';

const App = () => {
  // permanent
  const [history, setHistory] = useStickyState({}, 'mestle_history');

  return (
    <Router>
      <div className='app'>
        <div className='header'>
          {/*<Link to='/login-sign-up'>Login / Sign Up</Link>*/}
          <img
            className='login-user'
            src={userNotLogged}
            title={`Nepřihlášený uživatel.\nKlikni pro přihlášení nebo vytvoření účtu.\n\nSkóre: ${getScore(history)}`}
            onClick={() => {
              window.location.href = '/user';
            }}
          />
          <Link to='/'>
            <div>
              Městle {isBeta() ? <i style={{ color: 'red' }}>beta </i> : ''}
              <div className='debug'>({new Date().toLocaleDateString('cz-CS')})</div>
            </div>
          </Link>
          {/*TODO <Link to='/leader-board'>Leader Board</Link>*/}
          {/*TODO <Link to='/help'>How To Play</Link>*/}
          <TwitterFollowButton
            options={{
              showScreenName: 'false',
              showCount: 'false',
              size: 'large'
            }}
            screenName={'MestleCz'}
          />
        </div>
        <Routes>
          <Route exact path='/' element={<GuessBoard history={history} setHistory={setHistory} />}></Route>
          <Route exact path='/user' element={<User history={history} />}></Route>
          <Route exact path='/leader-board' element={<LeaderBoard />}></Route>
          <Route exact path='/help' element={<HowToPlay />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
