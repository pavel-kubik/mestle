import { useState, useEffect } from 'react';
import cities from '../Data/data.js';
import { normalize } from '../Util/util';
import { calculateTimeLeft } from '../Rand/rand';
import { isEog } from '../History/history';

export const useGameState = (todayHistory, todaySeed, zone) => {
  const [cityPart, setCityPart] = useState('');
  const [guessEnabled, setGuessEnabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  const getAttempts = (history) => {
    return history.guesses;
  };

  // Check if current guess is valid
  useEffect(() => {
    const guessedCity = cities.find((c) => normalize(c.name) === normalize(cityPart.trim()));
    if (guessedCity && !getAttempts(todayHistory).includes(guessedCity)) {
      setGuessEnabled(true);
    } else {
      setGuessEnabled(false);
    }
  }, [cityPart, todayHistory, todaySeed]);

  // Update countdown timer when game ends
  useEffect(() => {
    if (isEog(todayHistory)) {
      setTimeLeft(calculateTimeLeft(todaySeed, new Date(), zone));
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(todaySeed, new Date(), zone));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [todayHistory, todaySeed, zone]);

  return {
    cityPart,
    setCityPart,
    guessEnabled,
    timeLeft,
    getAttempts
  };
};
