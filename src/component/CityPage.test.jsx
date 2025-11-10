import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CityPage from './CityPage';

// Mock modules
vi.mock('../Util/citiesUtil', () => ({
  getCitiesArray: vi.fn(() => [
    {
      name: 'Praha',
      population: 1324000,
      area: 496,
      altitude: 399,
      region: 'Hlavní město Praha',
      latitude: 50.0755,
      longitude: 14.4378,
      signUrl: 'https://example.com/praha.png',
      urlWikipedia: 'https://cs.wikipedia.org/wiki/Praha'
    },
    {
      name: 'Brno',
      population: 380000,
      area: 230,
      altitude: 237,
      region: 'Jihomoravský kraj',
      latitude: 49.1951,
      longitude: 16.6068,
      signUrl: 'https://example.com/brno.png',
      urlWikipedia: 'https://cs.wikipedia.org/wiki/Brno'
    }
  ])
}));

vi.mock('../Util/urlUtil', () => ({
  getCountryFromUrl: vi.fn((country) => (country === 'czechia' ? 'cz' : country === 'germany' ? 'de' : null))
}));

vi.mock('../Util/slugUtil', () => ({
  getCityNameFromSlug: vi.fn((slug) => {
    if (slug === 'praha') return 'Praha';
    if (slug === 'brno') return 'Brno';
    return null;
  })
}));

vi.mock('../Util/translate', () => ({
  t: vi.fn((key, params) => {
    const translations = {
      'cityPage.notFound': 'City not found',
      'cityPage.invalidUrl': 'Invalid city URL',
      'cityPage.backToCountry': 'Back to cities list',
      'cityPage.population': 'Population',
      'cityPage.area': 'Area',
      'cityPage.altitude': 'Altitude',
      'cityPage.region': 'Region',
      'cityPage.coordinates': 'Coordinates',
      'cityPage.readMore': 'Read more on Wikipedia',
      'country.cz.name': 'Czech Republic',
      'cityPage.seoDescription': `${params?.city} is a city`
    };
    return translations[key] || key;
  })
}));

describe('CityPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render city details when valid city slug is provided', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/city/praha']}>
        <Routes>
          <Route path='/:lang/:country/city/:city' element={<CityPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Praha')).toBeInTheDocument();
    expect(screen.getByText('1,324,000')).toBeInTheDocument();
    expect(screen.getByText('Hlavní město Praha')).toBeInTheDocument();
  });

  it('should show error message for invalid city slug format', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/city/invalid@city!']}>
        <Routes>
          <Route path='/:lang/:country/city/:city' element={<CityPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Invalid city URL')).toBeInTheDocument();
    expect(screen.getByText('Back to cities list')).toBeInTheDocument();
  });

  it('should show error message for non-existent city', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/city/nonexistent']}>
        <Routes>
          <Route path='/:lang/:country/city/:city' element={<CityPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('City not found')).toBeInTheDocument();
  });

  it('should display all city information fields', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/city/praha']}>
        <Routes>
          <Route path='/:lang/:country/city/:city' element={<CityPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Population')).toBeInTheDocument();
    expect(screen.getByText('Area')).toBeInTheDocument();
    expect(screen.getByText('Altitude')).toBeInTheDocument();
    expect(screen.getByText('Region')).toBeInTheDocument();
    expect(screen.getByText('Coordinates')).toBeInTheDocument();
  });

  it('should render Wikipedia link when available', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/city/praha']}>
        <Routes>
          <Route path='/:lang/:country/city/:city' element={<CityPage />} />
        </Routes>
      </MemoryRouter>
    );

    const wikiLink = screen.getByText(/Read more on Wikipedia/);
    expect(wikiLink).toBeInTheDocument();
    expect(wikiLink.closest('a')).toHaveAttribute('href', 'https://cs.wikipedia.org/wiki/Praha');
  });

  it('should have back link to cities list', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/city/praha']}>
        <Routes>
          <Route path='/:lang/:country/city/:city' element={<CityPage />} />
        </Routes>
      </MemoryRouter>
    );

    const backLink = screen.getByText(/Back to cities list/);
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/cs/czechia/cities');
  });
});
