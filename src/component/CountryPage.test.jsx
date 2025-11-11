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
      'countryPage.tableDescription': 'Browse all cities in this country. Click on any row to learn more about each city.',
      'countryPage.backToHome': 'Back to home',
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

    expect(screen.getByText('City Name')).toBeInTheDocument();
    expect(screen.getByText('Population')).toBeInTheDocument();
  });

  it('should sort cities by population (largest first)', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/cities']}>
        <Routes>
          <Route path='/:lang/:country/cities' element={<CountryPage />} />
        </Routes>
      </MemoryRouter>
    );

    const cityRows = screen.getAllByRole('button').filter(button => button.tagName === 'TR');
    // Check the cities are in order of population (largest first)
    expect(cityRows[0]).toHaveTextContent('Praha');
    expect(cityRows[1]).toHaveTextContent('Brno');
    expect(cityRows[2]).toHaveTextContent('Ostrava');
  });

  it('should render eye icon for each city', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/cities']}>
        <Routes>
          <Route path='/:lang/:country/cities' element={<CountryPage />} />
        </Routes>
      </MemoryRouter>
    );

    const eyeIcons = screen.getAllByText('👁');
    expect(eyeIcons).toHaveLength(3);
  });

  it('should have clickable rows with proper accessibility attributes', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/cities']}>
        <Routes>
          <Route path='/:lang/:country/cities' element={<CountryPage />} />
        </Routes>
      </MemoryRouter>
    );

    const buttons = screen.getAllByRole('button');
    // Filter out the back button to get only the city rows
    const cityRows = buttons.filter(button => button.tagName === 'TR');

    // Check that city rows have the proper attributes
    expect(cityRows.length).toBe(3); // Praha, Brno, Ostrava
    expect(cityRows[0]).toHaveClass('city-row');
    expect(cityRows[0]).toHaveAttribute('tabIndex', '0');
    expect(cityRows[0]).toHaveAttribute('aria-label');
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

  it('should render back button', () => {
    render(
      <MemoryRouter initialEntries={['/cs/czechia/cities']}>
        <Routes>
          <Route path='/:lang/:country/cities' element={<CountryPage />} />
        </Routes>
      </MemoryRouter>
    );

    const backButton = screen.getByText(/Back to home/);
    expect(backButton).toBeInTheDocument();
    expect(backButton.tagName).toBe('BUTTON');
  });
});
