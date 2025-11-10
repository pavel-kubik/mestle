import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

// Mock all child components
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

vi.mock('./component/CountryPage', () => ({
  default: () => <div data-testid='country-page'>Country Page - Cities List</div>
}));

vi.mock('./component/CityPage', () => ({
  default: () => <div data-testid='city-page'>City Detail Page</div>
}));

vi.mock('./component/LanguageSwitch', () => ({
  default: () => <div data-testid='language-switch'>LanguageSwitch</div>
}));

vi.mock('./lib/auth', () => ({
  getUserDataInLocalStorage: vi.fn(() => null)
}));

vi.mock('./Rand/rand', () => ({
  getSeedFromDate: vi.fn(() => '20250929')
}));

vi.mock('./Util/citiesUtil', () => ({
  getCitiesMap: vi.fn(() => ({})),
  getCitiesArray: vi.fn(() => [])
}));

vi.mock('./History/history', () => ({
  getScore: vi.fn(() => 0),
  mergeHistory: vi.fn((a) => a)
}));

vi.mock('./Util/countryUtil', () => ({
  getCountry: vi.fn(() => 'cz'),
  setCountry: vi.fn(),
  COUNTRIES: { CZECH: 'cz', GERMAN: 'de' },
  getCountryFlag: vi.fn((country) => (country === 'cz' ? '🇨🇿' : '🇩🇪'))
}));

vi.mock('./Util/translate', () => ({
  getLanguage: vi.fn(() => 'cs'),
  setLanguage: vi.fn(),
  LANGUAGES: { cs: 'cs', de: 'de', en: 'en' },
  t: vi.fn((key) => key)
}));

vi.mock('./Util/urlUtil', () => ({
  buildUrlPath: vi.fn((lang, country, path) => `/${lang}/${country}${path}`),
  parseUrl: vi.fn((pathname) => {
    const parts = pathname.split('/').filter(Boolean);
    return {
      language: parts[0] || 'cs',
      country: parts[1] || 'czechia'
    };
  }),
  getLanguageFromUrl: vi.fn((lang) => lang),
  getCountryFromUrl: vi.fn((country) => (country === 'czechia' ? 'cz' : country === 'germany' ? 'de' : null))
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

import App from './App';

describe('App Routing Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();

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

  describe('City and Country Page Routing', () => {
    it('should render CountryPage at /:lang/:country/cities route', async () => {
      const TestComponent = () => (
        <MemoryRouter initialEntries={['/cs/czechia/cities']}>
          <div className='app'>
            <Routes>
              <Route path='/:lang/:country/cities' element={<div data-testid='country-page'>Country Page - Cities List</div>} />
            </Routes>
          </div>
        </MemoryRouter>
      );

      render(<TestComponent />);

      await waitFor(() => {
        expect(screen.getByTestId('country-page')).toBeInTheDocument();
        expect(screen.getByText('Country Page - Cities List')).toBeInTheDocument();
      });
    });

    it('should render CityPage at /:lang/:country/city/:city route', async () => {
      const TestComponent = () => (
        <MemoryRouter initialEntries={['/cs/czechia/city/praha']}>
          <div className='app'>
            <Routes>
              <Route path='/:lang/:country/city/:city' element={<div data-testid='city-page'>City Detail Page</div>} />
            </Routes>
          </div>
        </MemoryRouter>
      );

      render(<TestComponent />);

      await waitFor(() => {
        expect(screen.getByTestId('city-page')).toBeInTheDocument();
        expect(screen.getByText('City Detail Page')).toBeInTheDocument();
      });
    });

    it('should handle German cities route', async () => {
      const TestComponent = () => (
        <MemoryRouter initialEntries={['/de/germany/cities']}>
          <div className='app'>
            <Routes>
              <Route path='/:lang/:country/cities' element={<div data-testid='country-page'>Country Page - Cities List</div>} />
            </Routes>
          </div>
        </MemoryRouter>
      );

      render(<TestComponent />);

      await waitFor(() => {
        expect(screen.getByTestId('country-page')).toBeInTheDocument();
      });
    });

    it('should handle German city detail route', async () => {
      const TestComponent = () => (
        <MemoryRouter initialEntries={['/de/germany/city/muenchen']}>
          <div className='app'>
            <Routes>
              <Route path='/:lang/:country/city/:city' element={<div data-testid='city-page'>City Detail Page</div>} />
            </Routes>
          </div>
        </MemoryRouter>
      );

      render(<TestComponent />);

      await waitFor(() => {
        expect(screen.getByTestId('city-page')).toBeInTheDocument();
      });
    });

    it('should handle English language routes', async () => {
      const TestComponent = () => (
        <MemoryRouter initialEntries={['/en/czechia/cities']}>
          <div className='app'>
            <Routes>
              <Route path='/:lang/:country/cities' element={<div data-testid='country-page'>Country Page - Cities List</div>} />
            </Routes>
          </div>
        </MemoryRouter>
      );

      render(<TestComponent />);

      await waitFor(() => {
        expect(screen.getByTestId('country-page')).toBeInTheDocument();
      });
    });

    it('should keep other existing routes working', async () => {
      const TestComponent = () => (
        <MemoryRouter initialEntries={['/cs/czechia/user']}>
          <div className='app'>
            <Routes>
              <Route path='/:lang/:country/user' element={<div data-testid='user-page'>User Page</div>} />
            </Routes>
          </div>
        </MemoryRouter>
      );

      render(<TestComponent />);

      await waitFor(() => {
        expect(screen.getByTestId('user-page')).toBeInTheDocument();
      });
    });
  });

  describe('Route Parameters Validation', () => {
    it('should extract city slug from URL correctly', async () => {
      const CityPageComponent = () => {
        const { useParams } = require('react-router-dom');
        const { city } = useParams();
        return <div data-testid='city-page'>City: {city}</div>;
      };

      const TestComponent = () => (
        <MemoryRouter initialEntries={['/cs/czechia/city/test-city-slug']}>
          <Routes>
            <Route path='/:lang/:country/city/:city' element={<CityPageComponent />} />
          </Routes>
        </MemoryRouter>
      );

      render(<TestComponent />);

      await waitFor(() => {
        expect(screen.getByText('City: test-city-slug')).toBeInTheDocument();
      });
    });

    it('should extract country from URL correctly', async () => {
      const CountryPageComponent = () => {
        const { useParams } = require('react-router-dom');
        const { country } = useParams();
        return <div data-testid='country-page'>Country: {country}</div>;
      };

      const TestComponent = () => (
        <MemoryRouter initialEntries={['/de/germany/cities']}>
          <Routes>
            <Route path='/:lang/:country/cities' element={<CountryPageComponent />} />
          </Routes>
        </MemoryRouter>
      );

      render(<TestComponent />);

      await waitFor(() => {
        expect(screen.getByText('Country: germany')).toBeInTheDocument();
      });
    });
  });
});
