import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import './App.css';

import { getScore, mergeHistory } from './History/history';
import { useStickyState } from './Util/util';
import { isBeta, initBetaFromUrl } from './Util/betaUtil';
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

import { DateTime } from 'luxon';

import { getCitiesMap } from './Util/citiesUtil';
import { getCountry } from './Util/countryUtil';
import { buildUrlPath } from './Util/urlUtil';
import { getLanguage } from './Util/translate';
import FadeLoader from 'react-spinners/FadeLoader';

hotjar.initialize(3360376, 6);

if (hotjar.initialized()) {
  hotjar.identify('USER_ID', { userProperty: 'value' });
}

// Build timestamp is now generated at build time using unplugin-macros
// Import the macro at build time using unplugin-macros
import { buildTime } from './macros.js' with { type: 'macro' };

const dateTimeStamp = buildTime();

// Component to handle country and language-aware links
const LanguageLink = ({ to, children, ...props }) => {
  const lang = getLanguage();
  const country = getCountry();
  const fullPath = buildUrlPath(country, lang, to);
  return <Link to={fullPath} {...props}>{children}</Link>;
};

// Component to redirect from root to country/language-prefixed path
const RootRedirect = () => {
  const lang = getLanguage();
  const country = getCountry();
  const fullPath = buildUrlPath(country, lang, '/');
  return <Navigate to={fullPath} replace />;
};

const App = () => {
  const [isLoading, setLoading] = useState(false);
  // permanent - country-specific history
  const currentCountry = getCountry();
  const historyKey = `mestle_history_${currentCountry}`;
  const [history, setHistory] = useStickyState({}, historyKey);
  const score = getScore(history);

  // Initialize beta mode from URL parameter if present
  useEffect(() => {
    initBetaFromUrl();
  }, []);

  const [loggedUser, setLoggedUser] = useState(null);
  useEffect(() => {
    const loggedInUser = getUserDataInLocalStorage();
    if (loggedInUser !== null) {
      setLoggedUser(loggedInUser);
    }
  }, []);

  const zone = 'Europe/Prague';

  const [todaySeed, setTodaySeed] = useState(null);
  useEffect(() => {
    const todaySeedValue = getSeedFromDate(new Date(), zone);
    setTodaySeed(todaySeedValue);
    console.log('Today seed:', todaySeedValue);
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
            <LanguageLink to='/user' title={loggedUser ? loggedUser.username : t('app.loginButton.title', { score })}>
              {loggedUser && <div className='user-icon'>{loggedUser.username.substr(0, 1).toUpperCase()}</div>}
              {!loggedUser && <img className='login-user' src={userNotLogged} />}
            </LanguageLink>
            <LanguageLink to='/'>
              <div>
                <span>Městle</span>
                {isBeta() && <span style={{ color: 'red', fontStyle: 'italic' }}> beta</span>}
                <div className='debug'>({DateTime.now().setZone(zone).toLocaleString()})</div>
              </div>
            </LanguageLink>
            <div style={{ display: 'flex', gap: 16 }}>
              <LanguageSwitch />
            </div>
          </div>
          <Routes>
            {/* Redirect root to country/language-prefixed path */}
            <Route path='/' element={<RootRedirect />} />

            {/* Country and language-prefixed routes */}
            <Route
              exact
              path='/:country/:lang/'
              element={
                <GuessBoard
                  loggedUser={loggedUser}
                  todaySeed={todaySeed}
                  todayHistory={getTodayHistory()}
                  addAttemptHandler={addAttemptHandler}
                  zone={zone}
                />
              }
            />
            <Route
              exact
              path='/:country/:lang/user'
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
            <Route exact path='/:country/:lang/leader-board' element={<LeaderBoard />} />
            <Route exact path='/:country/:lang/help' element={<HowToPlay />} />

            {/* Catch-all: redirect any other paths to root */}
            <Route path='*' element={<RootRedirect />} />
          </Routes>
          <div className='build-time debug'>{t('app.buildNumber', { dateTimeStamp })}</div>
        </div>
      </Router>
    </div>
  );
};

export default App;
