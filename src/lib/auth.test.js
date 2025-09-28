import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  storeUserDataInLocalStorage,
  clearUserDataInLocalStorage,
  getUserDataInLocalStorage,
  signIn,
  signUp
} from './auth';

// Mock bcryptjs-react
vi.mock('bcryptjs-react', () => ({
  default: {
    hash: vi.fn(),
    genSalt: vi.fn()
  }
}));

// Mock translation function
vi.mock('../Util/translate', () => ({
  t: vi.fn((key) => key)
}));

// Mock global fetch
global.fetch = vi.fn();

describe('auth.js - Authentication Functions', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
    localStorage.clear();
    fetch.mockClear();
  });

  describe('localStorage operations', () => {
    const mockUserData = {
      username: 'testuser',
      email: 'test@example.com',
      token: 'mock-jwt-token'
    };

    it('should store user data in localStorage', () => {
      storeUserDataInLocalStorage(mockUserData);

      expect(localStorage.setItem).toHaveBeenCalledWith(
        '_user',
        JSON.stringify(mockUserData)
      );
    });

    it('should retrieve user data from localStorage', () => {
      localStorage.getItem.mockReturnValue(JSON.stringify(mockUserData));

      const result = getUserDataInLocalStorage();

      expect(localStorage.getItem).toHaveBeenCalledWith('_user');
      expect(result).toEqual(mockUserData);
    });

    it('should handle null values from localStorage', () => {
      localStorage.getItem.mockReturnValue(null);

      const result = getUserDataInLocalStorage();

      expect(result).toBeNull();
    });

    it('should clear user data from localStorage', () => {
      clearUserDataInLocalStorage();

      expect(localStorage.removeItem).toHaveBeenCalledWith('_user');
    });
  });

  describe('signIn', () => {
    const mockSetLoggedUser = vi.fn();
    const mockSetLoginError = vi.fn();
    const email = 'test@example.com';
    const password = 'password123';

    beforeEach(() => {
      mockSetLoggedUser.mockClear();
      mockSetLoginError.mockClear();
    });

    it('should sign in successfully with valid credentials', async () => {
      const mockSalt = 'mock-salt';
      const mockHashedPassword = 'hashed-password';
      const mockUserData = {
        username: 'testuser',
        email: 'test@example.com',
        token: 'mock-jwt-token'
      };

      // Mock bcrypt hash
      const bcrypt = await import('bcryptjs-react');
      bcrypt.default.hash.mockResolvedValue(mockHashedPassword);

      // Mock fetch responses
      fetch
        .mockResolvedValueOnce({
          ok: true,
          json: vi.fn().mockResolvedValue({ salt: mockSalt })
        })
        .mockResolvedValueOnce({
          status: 200,
          json: vi.fn().mockResolvedValue(mockUserData)
        });

      const result = await signIn(email, password, mockSetLoggedUser, mockSetLoginError);

      expect(fetch).toHaveBeenCalledTimes(2);
      expect(fetch).toHaveBeenNthCalledWith(1, '/.netlify/functions/sign_in_salt', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      expect(bcrypt.default.hash).toHaveBeenCalledWith(password, mockSalt);

      expect(fetch).toHaveBeenNthCalledWith(2, '/.netlify/functions/sign_in', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: mockHashedPassword })
      });

      expect(mockSetLoggedUser).toHaveBeenCalledWith(mockUserData);
      expect(localStorage.setItem).toHaveBeenCalledWith('_user', JSON.stringify(mockUserData));
      expect(result).toEqual(mockUserData);
      expect(mockSetLoginError).not.toHaveBeenCalled();
    });

    it('should handle salt fetch failure', async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
        json: vi.fn()
      });

      await signIn(email, password, mockSetLoggedUser, mockSetLoginError);

      expect(mockSetLoginError).toHaveBeenCalledWith('lib.auth.signIn.cantLogin');
      expect(mockSetLoggedUser).not.toHaveBeenCalled();
    });

    it('should handle sign in failure with wrong credentials', async () => {
      const mockSalt = 'mock-salt';
      const mockHashedPassword = 'hashed-password';
      const bcrypt = await import('bcryptjs-react');
      bcrypt.default.hash.mockResolvedValue(mockHashedPassword);

      fetch
        .mockResolvedValueOnce({
          ok: true,
          json: vi.fn().mockResolvedValue({ salt: mockSalt })
        })
        .mockResolvedValueOnce({
          status: 401,
          json: vi.fn().mockResolvedValue({ error: 'Invalid credentials' })
        });

      await signIn(email, password, mockSetLoggedUser, mockSetLoginError);

      expect(mockSetLoginError).toHaveBeenCalledWith('lib.auth.signIn.cantLogin');
      expect(mockSetLoggedUser).not.toHaveBeenCalled();
    });

    it('should handle network errors', async () => {
      fetch.mockRejectedValue(new Error('Network error'));

      await signIn(email, password, mockSetLoggedUser, mockSetLoginError);

      expect(mockSetLoginError).toHaveBeenCalledWith('lib.auth.signIn.cantLogin');
      expect(mockSetLoggedUser).not.toHaveBeenCalled();
    });
  });

  describe('signUp', () => {
    const mockSetLoggedUser = vi.fn();
    const mockSetLoginError = vi.fn();
    const username = 'newuser';
    const email = 'new@example.com';
    const password = 'password123';

    beforeEach(() => {
      mockSetLoggedUser.mockClear();
      mockSetLoginError.mockClear();
    });

    it('should sign up successfully with valid data', async () => {
      const mockSalt = 'generated-salt';
      const mockHashedPassword = 'hashed-password';
      const mockUserData = {
        username: 'newuser',
        email: 'new@example.com',
        token: 'mock-jwt-token'
      };

      const bcrypt = await import('bcryptjs-react');
      bcrypt.default.genSalt.mockResolvedValue(mockSalt);
      bcrypt.default.hash.mockResolvedValue(mockHashedPassword);

      fetch.mockResolvedValueOnce({
        status: 200,
        json: vi.fn().mockResolvedValue(mockUserData)
      });

      const result = await signUp(username, email, password, mockSetLoggedUser, mockSetLoginError);

      expect(bcrypt.default.genSalt).toHaveBeenCalledWith(10);
      expect(bcrypt.default.hash).toHaveBeenCalledWith(password, mockSalt);

      expect(fetch).toHaveBeenCalledWith('/.netlify/functions/sign_up', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          email,
          password: mockHashedPassword,
          salt: mockSalt
        })
      });

      expect(mockSetLoggedUser).toHaveBeenCalledWith(mockUserData);
      expect(localStorage.setItem).toHaveBeenCalledWith('_user', JSON.stringify(mockUserData));
      expect(result).toEqual(mockUserData);
      expect(mockSetLoginError).not.toHaveBeenCalled();
    });

    it('should handle sign up failure with existing user', async () => {
      const mockSalt = 'generated-salt';
      const mockHashedPassword = 'hashed-password';

      const bcrypt = await import('bcryptjs-react');
      bcrypt.default.genSalt.mockResolvedValue(mockSalt);
      bcrypt.default.hash.mockResolvedValue(mockHashedPassword);

      fetch.mockResolvedValueOnce({
        status: 409,
        json: vi.fn().mockResolvedValue({
          errorCode: 'lib.auth.signUp.userExists'
        })
      });

      await signUp(username, email, password, mockSetLoggedUser, mockSetLoginError);

      expect(mockSetLoginError).toHaveBeenCalledWith('lib.auth.signUp.userExists');
      expect(mockSetLoggedUser).not.toHaveBeenCalled();
    });

    it('should handle sign up failure without specific error code', async () => {
      const mockSalt = 'generated-salt';
      const mockHashedPassword = 'hashed-password';

      const bcrypt = await import('bcryptjs-react');
      bcrypt.default.genSalt.mockResolvedValue(mockSalt);
      bcrypt.default.hash.mockResolvedValue(mockHashedPassword);

      fetch.mockResolvedValueOnce({
        status: 500,
        json: vi.fn().mockResolvedValue({
          error: 'Internal server error'
        })
      });

      await signUp(username, email, password, mockSetLoggedUser, mockSetLoginError);

      expect(mockSetLoginError).toHaveBeenCalledWith('lib.auth.signUp.cantSignUp');
      expect(mockSetLoggedUser).not.toHaveBeenCalled();
    });
  });

  describe('security considerations', () => {
    it('should not store plain text passwords', async () => {
      const password = 'plainTextPassword';
      const bcrypt = await import('bcryptjs-react');
      bcrypt.default.genSalt.mockResolvedValue('salt');
      bcrypt.default.hash.mockResolvedValue('hashedPassword');

      fetch.mockResolvedValueOnce({
        status: 200,
        json: vi.fn().mockResolvedValue({ username: 'test', token: 'token' })
      });

      await signUp('user', 'email@test.com', password, vi.fn(), vi.fn());

      // Verify that the original password is not sent in the request
      const fetchCall = fetch.mock.calls[0];
      const requestBody = JSON.parse(fetchCall[1].body);

      expect(requestBody.password).toBe('hashedPassword');
      expect(requestBody.password).not.toBe(password);
    });

    it('should handle sensitive data properly in localStorage', () => {
      const sensitiveUserData = {
        username: 'testuser',
        email: 'test@example.com',
        token: 'sensitive-jwt-token',
        // Should not include plain passwords
      };

      storeUserDataInLocalStorage(sensitiveUserData);

      const storedData = JSON.parse(localStorage.setItem.mock.calls[0][1]);
      expect(storedData).not.toHaveProperty('password');
      expect(storedData).toHaveProperty('token');
    });
  });
});