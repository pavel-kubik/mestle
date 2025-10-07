import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { isBeta, switchToBeta } from './Util/betaUtil';

// Mock all child components to avoid complex dependencies
vi.mock('./component/GuessBoard', () => ({
  default: () => <div data-testid='guess-board'>GuessBoard</div>
}));

vi.mock('./component/User', () => ({
  default: () => <div data-testid='user-page'>User Page</div>
}));

vi.mock('./component/LeaderBoard', () => ({
  default: () => <div data-testid='leader-board-page'>LeaderBoard</div>
}));

vi.mock('./component/HowToPlay', () => ({
  default: () => <div data-testid='how-to-play-page'>How To Play</div>
}));

vi.mock('./component/LanguageSwitch', () => ({
  default: () => <div data-testid='language-switch'>LanguageSwitch</div>
}));

// Mock utilities
vi.mock('./lib/auth', () => ({
  getUserDataInLocalStorage: vi.fn(() => null)
}));

vi.mock('./Rand/rand', () => ({
  getSeedFromDate: vi.fn(() => '20250929')
}));

vi.mock('./Util/attemptUtil', () => ({
  loadAttempts: vi.fn(() => Promise.resolve({ attempts: [], eog: false })),
  addAttempt: vi.fn(() => Promise.resolve(true)),
  storeAttempts: vi.fn(() => Promise.resolve())
}));

vi.mock('./Util/citiesUtil', () => ({
  getCitiesMap: vi.fn(() => ({}))
}));

vi.mock('./History/history', () => ({
  getScore: vi.fn(() => 0),
  mergeHistory: vi.fn((a) => a)
}));

vi.mock('react-hotjar', () => ({
  hotjar: {
    initialize: vi.fn(),
    initialized: vi.fn(() => false),
    identify: vi.fn()
  }
}));

vi.mock('./macros.js', () => ({
  buildTime: () => '2025-09-29 12:00:00'
}));

// eslint-disable-next-line no-unused-vars
import App from './App';

describe('App Routing and Beta Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Clear cookies
    document.cookie.split(';').forEach((cookie) => {
      const name = cookie.split('=')[0].trim();
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    });

    // Mock window.location with full properties needed for BrowserRouter
    delete window.location;
    window.location = {
      reload: vi.fn(),
      href: 'http://localhost:3000/',
      origin: 'http://localhost:3000',
      protocol: 'http:',
      host: 'localhost:3000',
      hostname: 'localhost',
      port: '3000',
      pathname: '/',
      search: '',
      hash: ''
    };

    // Mock localStorage
    const localStorageMock = {
      getItem: vi.fn(() => null),
      setItem: vi.fn(),
      clear: vi.fn(),
      removeItem: vi.fn()
    };
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true
    });
  });

  describe('App component with beta functionality', () => {
    it('should render App with GuessBoard on home route', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByTestId('guess-board')).toBeInTheDocument();
      });
    });

    it('should not show beta indicator when not in beta mode', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByText('Městle')).toBeInTheDocument();
      });

      expect(screen.queryByText(/beta/i)).not.toBeInTheDocument();
    });

    it('should show beta indicator when in beta mode', async () => {
      document.cookie = 'nf_ab=develop';

      render(<App />);

      await waitFor(() => {
        expect(screen.getByText('Městle')).toBeInTheDocument();
        expect(screen.getByText('beta')).toBeInTheDocument();
      });
    });

    it('should toggle beta mode and reload page', () => {
      expect(isBeta()).toBe(false);

      switchToBeta();

      expect(window.location.reload).toHaveBeenCalledWith(true);
    });

    it('should render language switch component', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByTestId('language-switch')).toBeInTheDocument();
      });
    });

    it('should show user login icon when not logged in', async () => {
      render(<App />);

      await waitFor(() => {
        const loginImage = screen.getByRole('img', { className: 'login-user' });
        expect(loginImage).toBeInTheDocument();
      });
    });

    it('should show user initial when logged in', async () => {
      const { getUserDataInLocalStorage } = await import('./lib/auth');
      getUserDataInLocalStorage.mockReturnValue({
        username: 'TestUser',
        token: 'fake-token'
      });

      render(<App />);

      await waitFor(() => {
        expect(screen.getByText('T')).toBeInTheDocument();
      });
    });
  });

  describe('App routing to different pages', () => {
    it('should have navigation links in header', async () => {
      render(<App />);

      await waitFor(() => {
        // Check that links to routes exist
        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThan(0);

        // Check for Městle home link
        expect(screen.getByText('Městle')).toBeInTheDocument();
      });
    });

    it('should render the GuessBoard component on home route', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByTestId('guess-board')).toBeInTheDocument();
      });
    });

    it('should have user page link in navigation', async () => {
      render(<App />);

      // Wait for initial render on home page
      await waitFor(() => {
        expect(screen.getByTestId('guess-board')).toBeInTheDocument();
      });

      // Find and verify the user link exists with correct href
      const links = screen.getAllByRole('link');
      const userLink = links.find((link) => link.getAttribute('href') === '/user');
      expect(userLink).toBeInTheDocument();
      expect(userLink).toHaveAttribute('href', '/user');
    });
  });

  describe('Beta cookie behavior', () => {
    it('should read beta status from cookie correctly', () => {
      // Initially not in beta
      expect(isBeta()).toBe(false);

      // Set beta cookie
      document.cookie = 'nf_ab=develop';
      expect(isBeta()).toBe(true);
    });

    it('should toggle beta mode and trigger page reload', () => {
      document.cookie = 'nf_ab=develop';
      expect(isBeta()).toBe(true);

      switchToBeta();

      expect(window.location.reload).toHaveBeenCalledWith(true);
    });

    it('should display beta indicator in App header when enabled', async () => {
      document.cookie = 'nf_ab=develop';

      render(<App />);

      await waitFor(() => {
        expect(screen.getByText('Městle')).toBeInTheDocument();
        expect(screen.getByText('beta')).toBeInTheDocument();
      });
    });
  });
});
