import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CountryPage from './CountryPage';

// Mock modules
vi.mock('../Util/citiesUtil', () => ({
  getCitiesArray: vi.fn(() => [
    {
      name: 'Praha',
      population: 1324000,
      region: 'Hlavní město Praha'
    },
    {
      name: 'Brno',
      population: 380000,
      region: 'Jihomoravský kraj'
    },
    {
      name: 'Ostrava',
      population: 290000,
      region: 'Moravskoslezský kraj'
    }
  ])
}));

vi.mock('../Util/urlUtil', () => ({
  getCountryFromUrl: vi.fn((country) => (country === 'czechia' ? 'cz' : country === 'germany' ? 'de' : null))
}));

vi.mock('../Util/slugUtil', () => ({
  slugify: vi.fn((name) => name.toLowerCase())
}));

vi.mock('../Util/translate', () => ({
  t: vi.fn((key, params) => {
    const translations = {
      'country.cz.name': 'Czech Republic',
      'country.de.name': 'Germany',
      'countryPage.tableDescription': 'Browse all cities in this country',
      'countryPage.table.order': 'Order',
      'countryPage.table.name': 'City Name',
      'countryPage.table.population': 'Population',
      'countryPage.table.link': 'Details',
      'countryPage.table.viewDetails': 'View Details',
      'countryPage.seoTitle': 'All Cities',
      'countryPage.seoDescription': `Explore all cities in ${params?.country}`
    };
    return translations[key] || key;
  })
}));

vi.mock('../Util/countryUtil', () => ({
  getCountryFlag: vi.fn((country) => (country === 'cz' ? '🇨🇿' : '🇩🇪'))
}));

describe('CountryPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render country page with title', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/cities']}>
        <Routes>
          <Route path='/:lang/:country/cities' element={<CountryPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Czech Republic/)).toBeInTheDocument();
    // Check for flag emoji in the title
    const title = screen.getByRole('heading', { level: 1 });
    expect(title.textContent).toContain('🇨🇿');
  });

  it('should render table with all cities', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/cities']}>
        <Routes>
          <Route path='/:lang/:country/cities' element={<CountryPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Praha')).toBeInTheDocument();
    expect(screen.getByText('Brno')).toBeInTheDocument();
    expect(screen.getByText('Ostrava')).toBeInTheDocument();
  });

  it('should render table headers', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/cities']}>
        <Routes>
          <Route path='/:lang/:country/cities' element={<CountryPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Order')).toBeInTheDocument();
    expect(screen.getByText('City Name')).toBeInTheDocument();
    expect(screen.getByText('Population')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
  });

  it('should sort cities by population (largest first)', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/cities']}>
        <Routes>
          <Route path='/:lang/:country/cities' element={<CountryPage />} />
        </Routes>
      </MemoryRouter>
    );

    const rows = screen.getAllByRole('row');
    // First row is header, second row should be Praha (largest population)
    expect(rows[1]).toHaveTextContent('Praha');
    expect(rows[2]).toHaveTextContent('Brno');
    expect(rows[3]).toHaveTextContent('Ostrava');
  });

  it('should render "View Details" links for each city', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/cities']}>
        <Routes>
          <Route path='/:lang/:country/cities' element={<CountryPage />} />
        </Routes>
      </MemoryRouter>
    );

    const viewDetailsLinks = screen.getAllByText('View Details');
    expect(viewDetailsLinks).toHaveLength(3);
  });

  it('should have correct link format for city details', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/cities']}>
        <Routes>
          <Route path='/:lang/:country/cities' element={<CountryPage />} />
        </Routes>
      </MemoryRouter>
    );

    const viewDetailsLinks = screen.getAllByText('View Details');
    expect(viewDetailsLinks[0].closest('a')).toHaveAttribute('href', '/cs/czechia/city/praha');
  });

  it('should show error for invalid country', () => {
    render(
      <MemoryRouter initialEntries={['/cs/invalid/cities']}>
        <Routes>
          <Route path='/:lang/:country/cities' element={<CountryPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Invalid country')).toBeInTheDocument();
  });

  it('should display formatted population numbers', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/cities']}>
        <Routes>
          <Route path='/:lang/:country/cities' element={<CountryPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Check that numbers are formatted with commas
    expect(screen.getByText('1,324,000')).toBeInTheDocument();
    expect(screen.getByText('380,000')).toBeInTheDocument();
  });
});
