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
