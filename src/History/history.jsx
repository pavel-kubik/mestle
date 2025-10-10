export const getScore = (history) => {
  return Object.keys(history)
    .map((day) => history[day].eog)
    .filter((eog) => eog).length;
};

export const getTotalScore = () => {
  const historyKeys = ['mestle_history', 'mestle_history_cz', 'mestle_history_de'];
  let totalScore = 0;

  historyKeys.forEach((key) => {
    const historyData = window.localStorage.getItem(key);
    if (historyData) {
      try {
        const history = JSON.parse(historyData);
        totalScore += getScore(history);
      } catch (e) {
        console.warn(`Failed to parse history for key ${key}:`, e);
      }
    }
  });

  return totalScore;
};

export const isEog = (todayHistory) => {
  if (todayHistory && todayHistory.eog) {
    return todayHistory.eog;
  }
  return false;
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
