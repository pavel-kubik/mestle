import { getSeedFromDate } from "../Rand/rand";

export const getScore = (history) => {
  return Object
    .keys(history)
    .map(day => history[day].eog)
    .filter(eog => eog)
    .length;
}

export const getCurrentData = (history) => {
  const todaySeed = getSeedFromDate();
  return history[todaySeed];
}

export const getGuesses = (history) => {
  const today = getCurrentData(history);
  if (today && today.guesses) {
    return today.guesses;
  }
  return [];
}

export const setGuesses = (history, guesses, eog, setHistory) => {
  // TODO set state with function
  const allHistory = Object.assign({}, history);
  const todaySeed = getSeedFromDate();
  allHistory[todaySeed] = {
    guesses: guesses,
    eog: eog,
  }
 setHistory(allHistory);
}

export const getEog = (history) => {
  const today = getCurrentData(history);
  if (today && today.eog) {
    return today.eog;
  }
  return false;
}
