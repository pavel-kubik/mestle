import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams, useLocation } from 'react-router-dom';

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
import { t, getLanguage, setLanguage } from './Util/translate';
import { buildUrlPath, parseUrl, getLanguageFromUrl, getCountryFromUrl } from './Util/urlUtil';

import { hotjar } from 'react-hotjar';
import { getUserDataInLocalStorage } from './lib/auth';
import { getSeedFromDate } from './Rand/rand';
import { loadAttempts, addAttempt, storeAttempts } from './Util/attemptUtil';

import { DateTime } from 'luxon';

import { getCitiesMap } from './Util/citiesUtil';
import { getCountry, setCountry } from './Util/countryUtil';
import FadeLoader from 'react-spinners/FadeLoader';

hotjar.initialize(3360376, 6);

if (hotjar.initialized()) {
  hotjar.identify('USER_ID', { userProperty: 'value' });
}

// Build timestamp is now generated at build time using unplugin-macros
// Import the macro at build time using unplugin-macros
import { buildTime } from './macros.js' with { type: 'macro' };

const dateTimeStamp = buildTime();

/**
 * Component to redirect root URL to /{lang}/{country}/
 */
const RootRedirect = () => {
  // Try to get language and country from localStorage
  const savedLanguage = getLanguage();
  const savedCountry = getCountry();

  // Build URL with saved or default values
  const targetPath = buildUrlPath(savedLanguage, savedCountry, '/');

  return <Navigate to={targetPath} replace />;
};

/**
 * Component to redirect legacy URLs (without lang/country) to new format
 */
const LegacyRedirect = ({ path }) => {
  const savedLanguage = getLanguage();
  const savedCountry = getCountry();
  const targetPath = buildUrlPath(savedLanguage, savedCountry, path);

  return <Navigate to={targetPath} replace />;
};

/**
 * Wrapper component to validate and sync URL params with localStorage
 */
const RouteWrapper = ({ children }) => {
  const { lang, country } = useParams();
  const location = useLocation();

  useEffect(() => {
    // Validate URL parameters
    const languageCode = getLanguageFromUrl(lang);
    const countryCode = getCountryFromUrl(country);

    if (languageCode && countryCode) {
      // Sync URL params with localStorage
      const currentLanguage = getLanguage();
      const currentCountry = getCountry();

      if (currentLanguage !== languageCode) {
        setLanguage(languageCode);
      }

      if (currentCountry !== countryCode) {
        setCountry(countryCode);
        // Reload needed for country change as it affects city data
        window.location.reload();
      }
    }
  }, [lang, country]);

  return <>{children}</>;
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
          <AppContent
            loggedUser={loggedUser}
            score={score}
            zone={zone}
            todaySeed={todaySeed}
            getTodayHistory={getTodayHistory}
            addAttemptHandler={addAttemptHandler}
            history={history}
            setLoggedUser={setLoggedUser}
            initBECall={initBECall}
            syncAttempts={syncAttempts}
          />
        </div>
      </Router>
    </div>
  );
};

/**
 * App content component that uses router hooks
 */
const AppContent = ({
  loggedUser,
  score,
  zone,
  todaySeed,
  getTodayHistory,
  addAttemptHandler,
  history,
  setLoggedUser,
  initBECall,
  syncAttempts
}) => {
  const location = useLocation();
  const parsed = parseUrl(location.pathname);

  // Get current language and country from URL or fallback to localStorage
  const currentLanguage = parsed?.language || getLanguage();
  const currentCountry = parsed?.country || getCountry();

  return (
    <>
      <div className='header'>
        <Link to={buildUrlPath(currentLanguage, currentCountry, '/user')} title={loggedUser ? loggedUser.username : t('app.loginButton.title', { score })}>
          {loggedUser && <div className='user-icon'>{loggedUser.username.substr(0, 1).toUpperCase()}</div>}
          {!loggedUser && <img className='login-user' src={userNotLogged} />}
        </Link>
        <Link to={buildUrlPath(currentLanguage, currentCountry, '/')}>
          <div>
            <span>Městle</span>
            {isBeta() && <span style={{ color: 'red', fontStyle: 'italic' }}> beta</span>}
            <div className='debug'>({DateTime.now().setZone(zone).toLocaleString()})</div>
          </div>
        </Link>
        <div style={{ display: 'flex', gap: 16 }}>
          <LanguageSwitch />
        </div>
      </div>
      <Routes>
        {/* Root redirect */}
        <Route path='/' element={<RootRedirect />} />

        {/* New routes with language and country */}
        <Route
          path='/:lang/:country'
          element={
            <RouteWrapper>
              <GuessBoard
                loggedUser={loggedUser}
                todaySeed={todaySeed}
                todayHistory={getTodayHistory()}
                addAttemptHandler={addAttemptHandler}
                zone={zone}
              />
            </RouteWrapper>
          }
        />
        <Route
          path='/:lang/:country/'
          element={
            <RouteWrapper>
              <GuessBoard
                loggedUser={loggedUser}
                todaySeed={todaySeed}
                todayHistory={getTodayHistory()}
                addAttemptHandler={addAttemptHandler}
                zone={zone}
              />
            </RouteWrapper>
          }
        />
        <Route
          path='/:lang/:country/user'
          element={
            <RouteWrapper>
              <User
                history={history}
                loggedUser={loggedUser}
                setLoggedUser={setLoggedUser}
                initBECall={initBECall}
                syncAttempts={syncAttempts}
              />
            </RouteWrapper>
          }
        />
        <Route
          path='/:lang/:country/leader-board'
          element={
            <RouteWrapper>
              <LeaderBoard />
            </RouteWrapper>
          }
        />
        <Route
          path='/:lang/:country/help'
          element={
            <RouteWrapper>
              <HowToPlay />
            </RouteWrapper>
          }
        />

        {/* Legacy routes redirect to new format */}
        <Route path='/user' element={<LegacyRedirect path='/user' />} />
        <Route path='/leader-board' element={<LegacyRedirect path='/leader-board' />} />
        <Route path='/help' element={<LegacyRedirect path='/help' />} />
      </Routes>
      <div className='build-time debug'>{t('app.buildNumber', { dateTimeStamp })}</div>
    </>
  );
};

export default App;
