export const storeAttempt = async (jwt, todaySeed, attempt, eog) => {
  const result = await fetch('/.netlify/functions/attempts', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': jwt
    },
    body: JSON.stringify({
      todaySeed: todaySeed,
      attempt: attempt.name,
      eog: eog
    })
  });
  return result.ok;
};

export const loadAttempts = async (jwt, todaySeed) => {
  const result = await fetch('/.netlify/functions/attempts/?seed=' + todaySeed, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': jwt
    }
  });
  if (result.status === 200) {
    const data = await result.json();
    return JSON.parse(data.history);
  }
};
