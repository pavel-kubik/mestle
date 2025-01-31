import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import { getScore, mergeHistory } from './History/history';
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
import { getUserDataInLocalStorage } from './lib/auth';
import { getSeedFromDate } from './Rand/rand';
import { loadAttempts, addAttempt, storeAttempts } from './Util/attemptUtil';

import preval from 'preval.macro';
import { getCitiesMap } from './Util/citiesUtil';
import FadeLoader from 'react-spinners/FadeLoader';

hotjar.initialize(3360376, 6);

if (hotjar.initialized()) {
  hotjar.identify('USER_ID', { userProperty: 'value' });
}

const App = () => {
  const [isLoading, setLoading] = useState(false);
  // permanent
  const [history, setHistory] = useStickyState({}, 'mestle_history');
  const score = getScore(history);

  const dateTimeStamp = preval`module.exports = new Date().toLocaleString();`;

  const [loggedUser, setLoggedUser] = useState(null);
  useEffect(() => {
    const loggedInUser = getUserDataInLocalStorage();
    if (loggedInUser !== null) {
      setLoggedUser(loggedInUser);
    }
  }, []);

  const [todaySeed, setTodaySeed] = useState(null);
  useEffect(() => {
    const todaySeedValue = getSeedFromDate(new Date());
    setTodaySeed(todaySeedValue);
  }, []);

  const setTodayHistory = (todayHistory) => {
    const allHistory = Object.assign({}, history);
    allHistory[todaySeed] = todayHistory;
    setHistory(allHistory);
  };

  const getTodayHistory = () => {
    let out = { guesses: [], eog: false };
    if (history && history[todaySeed]) {
      out = history[todaySeed];
    }
    return out;
  };

  const addAttemptHandler = async (attempt, eog) => {
    setLoading(true);
    if (loggedUser) {
      const out = await addAttempt(loggedUser.token, todaySeed, attempt.name, eog);
      if (!out) {
        setLoading(false);
        return;
      }
    }
    const todayGuesses = getTodayHistory();
    setTodayHistory({ guesses: [...todayGuesses.guesses, attempt], eog: eog });
    setLoading(false);
  };

  const syncAttempts = async (userData) => {
    try {
      if (userData) {
        const jwt = userData.token;
        const serverHistory = await loadAttempts(jwt, todaySeed);
        const todayHistory = getTodayHistory();
        const mergedHistory = mergeHistory(
          {
            guesses: [...todayHistory.guesses.map((c) => c.name)],
            eog: todayHistory.eog
          },
          {
            guesses: [...serverHistory.attempts],
            eog: serverHistory.eog
          }
        );
        const citiesMap = getCitiesMap();
        const newHistory = {
          guesses: [...mergedHistory.guesses.map((city) => citiesMap[city])],
          eog: mergedHistory.eog
        };
        setTodayHistory(newHistory);
        await storeAttempts(jwt, todaySeed, mergedHistory.guesses, mergedHistory.eog);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadBE = async () => {
      await syncAttempts(loggedUser);
    };
    if (loggedUser && todaySeed) {
      loadBE();
    }
  }, [loggedUser, todaySeed]);

  const initBECall = () => {
    setLoading(true);
  };

  if (!todaySeed) {
    // skip first render if todaySeed is not set yet
    return;
  }

  return (
    <div className={isLoading ? 'loader loading' : 'loader hide'}>
      <div className='spinner'>
        <FadeLoader />
      </div>
      <Router>
        <div className='app'>
          <div className='header'>
            <Link to='/user' title={loggedUser ? loggedUser.username : t('app.loginButton.title', { score })}>
              {loggedUser && <div className='user-icon'>{loggedUser.username.substr(0, 1).toUpperCase()}</div>}
              {!loggedUser && <img className='login-user' src={userNotLogged} />}
            </Link>
            <Link to='/'>
              <div>
                <span>Městle</span>
                {isBeta() && <span style={{ color: 'red', fontStyle: 'italic' }}> beta</span>}
                <div className='debug'>({new Date().toLocaleDateString('cz-CS')})</div>
              </div>
            </Link>
            <div style={{ display: 'flex', gap: 16 }}>
              <LanguageSwitch />
            </div>
          </div>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <GuessBoard
                  loggedUser={loggedUser}
                  todaySeed={todaySeed}
                  todayHistory={getTodayHistory()}
                  addAttemptHandler={addAttemptHandler}
                />
              }
            />
            <Route
              exact
              path='/user'
              element={
                <User //
                  history={history}
                  loggedUser={loggedUser}
                  setLoggedUser={setLoggedUser}
                  initBECall={initBECall}
                  syncAttempts={syncAttempts}
                />
              }
            />
            <Route exact path='/leader-board' element={<LeaderBoard />} />
            <Route exact path='/help' element={<HowToPlay />} />
          </Routes>
          <div className='build-time debug'>{t('app.buildNumber', { dateTimeStamp })}</div>
        </div>
      </Router>
    </div>
  );
};

export default App;
