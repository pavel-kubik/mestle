import { getSeedFromDate } from '../Rand/rand';

export const useSeedValidation = (todaySeed, zone) => {
  const validateSeed = (actionName = 'action') => {
    if (getSeedFromDate(new Date(), zone) !== todaySeed) {
      console.log(`Outdated seed on ${actionName}, reloading...`);
      setTimeout(() => window.location.reload(), 1000);
      return false;
    }
    return true;
  };

  return { validateSeed };
};
