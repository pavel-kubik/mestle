import { httpClient } from './httpClient';

class GameService {
  async addAttempt(jwt, todaySeed, attempt, eog) {
    try {
      const client = httpClient.withAuth(jwt);
      await client.put('/.netlify/functions/attempts', {
        todaySeed: todaySeed,
        attempt: attempt,
        eog: eog
      });
      return true;
    } catch (error) {
      console.error('Error adding attempt:', error);
      return false;
    }
  }

  async storeAttempts(jwt, todaySeed, attempts, eog) {
    try {
      const client = httpClient.withAuth(jwt);
      await client.post('/.netlify/functions/attempts', {
        todaySeed: todaySeed,
        attempts: attempts,
        eog: eog
      });
      return true;
    } catch (error) {
      console.error('Error storing attempts:', error);
      return false;
    }
  }

  async loadAttempts(jwt, todaySeed) {
    try {
      const client = httpClient.withAuth(jwt);
      const data = await client.get(`/.netlify/functions/attempts/?seed=${todaySeed}`);
      return JSON.parse(data.history);
    } catch (error) {
      console.error('Error loading attempts:', error);
      return null;
    }
  }
}

export const gameService = new GameService();
