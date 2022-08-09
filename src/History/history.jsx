export const getScore = (history) => {
  console.log(history);
  return Object.keys(history)
    .map((day) => history[day].eog)
    .filter((eog) => eog).length;
};

const getCurrentData = (history, todaySeed) => {
  return history[todaySeed];
};

export const getGuesses = (history, todaySeed) => {
  const today = getCurrentData(history, todaySeed);
  if (today && today.guesses) {
    return today.guesses;
  }
  return [];
};

export const setGuesses = (history, guesses, eog, setHistory, todaySeed) => {
  // TODO set state with function
  const allHistory = Object.assign({}, history);
  allHistory[todaySeed] = {
    guesses: guesses,
    eog: eog
  };
  setHistory(allHistory);
};

export const getEog = (history, todaySeed) => {
  const today = getCurrentData(history, todaySeed);
  if (today && today.eog) {
    return today.eog;
  }
  return false;
};
