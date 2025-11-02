export const getScore = (history) => {
  return Object.keys(history)
    .map((day) => history[day].eog)
    .filter((eog) => eog).length;
};

export const isEog = (todayHistory) => {
  if (todayHistory && todayHistory.eog) {
    return todayHistory.eog;
  }
  return false;
};

export const getTotalScore = () => {
  const historyKeys = ['mestle_history', 'mestle_history_cz', 'mestle_history_de'];

  return historyKeys.reduce((total, key) => {
    const historyData = window.localStorage.getItem(key);
    const history = historyData ? JSON.parse(historyData) : {};
    return total + getScore(history);
  }, 0);
};

export const getScoresByCountry = () => {
  const getCountryScore = (key) => {
    const historyData = window.localStorage.getItem(key);
    const history = historyData ? JSON.parse(historyData) : {};
    return getScore(history);
  };

  return {
    cz: getCountryScore('mestle_history_cz'),
    de: getCountryScore('mestle_history_de'),
    legacy: getCountryScore('mestle_history'),
    total: getTotalScore()
  };
};

/**
 * Merge two guess Object { guesses: string[], eog: boolean} and return merged object.
 * Duplicity in guesses will be removed.
 * Last city will be from param with eog === true.
 *
 * @param {Object} history1
 * @param {Object} history2
 */
export const mergeHistory = (history1, history2) => {
  let newGuesses;
  if (history2.eog) {
    newGuesses = [...history2.guesses];
    history1.guesses.forEach((guess) => {
      if (!history2.guesses.includes(guess)) {
        newGuesses.unshift(guess);
      }
    });
  } else {
    newGuesses = [...history1.guesses];
    history2.guesses.forEach((guess) => {
      if (!history1.guesses.includes(guess)) {
        newGuesses.unshift(guess);
      }
    });
  }
  return {
    guesses: newGuesses,
    eog: history1.eog || history2.eog
  };
};

export const exportedForTesting = {
  mergeHistory
};
