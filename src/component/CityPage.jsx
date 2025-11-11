import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCitiesArray } from '../Util/citiesUtil';
import { getCountryFromUrl } from '../Util/urlUtil';
import { getCityNameFromSlug } from '../Util/slugUtil';
import { t } from '../Util/translate';
import './CityPage.css';

/**
 * City detail page component that displays detailed information about a specific city
 */
const CityPage = () => {
  const { lang, country, city: citySlug } = useParams();

  // Validate slug format (only lowercase letters, numbers, hyphens, and underscores)
  if (!citySlug || !/^[a-z0-9_-]+$/.test(citySlug)) {
    return (
      <div className='city-page-error'>
        <h2>{t('cityPage.invalidUrl')}</h2>
        <Link to={`/${lang}/${country}/cities`} className='back-link'>
          {t('cityPage.backToCountry')}
        </Link>
      </div>
    );
  }

  // Get the internal country code from the URL
  const countryCode = getCountryFromUrl(country);

  if (!countryCode) {
    return <div className='city-page-error'>Invalid country</div>;
  }

  // Get all cities for this country
  const cities = getCitiesArray(countryCode);

  // Find the city by slug
  const cityName = getCityNameFromSlug(citySlug, cities);

  if (!cityName) {
    return (
      <div className='city-page-error'>
        <h2>{t('cityPage.notFound')}</h2>
        <Link to={`/${lang}/${country}/cities`} className='back-link'>
          {t('cityPage.backToCountry')}
        </Link>
      </div>
    );
  }

  // Get the full city object
  const cityData = cities.find((c) => c.name === cityName);

  if (!cityData) {
    return <div className='city-page-error'>City data not found</div>;
  }

  // SEO: Set page title and meta description
  useEffect(() => {
    const countryName = t(`country.${countryCode}.name`);
    document.title = `${cityData.name}, ${countryName} | Městle`;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        t('cityPage.seoDescription', {
          city: cityData.name,
          population: cityData.population.toLocaleString(),
          region: cityData.region,
          country: countryName
        })
      );
    }
  }, [cityData, countryCode]);

  return (
    <div className='city-page'>
      <Link to={`/${lang}/${country}/cities`} className='back-link'>
        ← {t('cityPage.backToCountry')}
      </Link>

      <div className='city-header'>
        {cityData.signUrl && (
          <img src={cityData.signUrl} alt={`${cityData.name} coat of arms`} className='city-page-coat-of-arms' />
        )}
        <h1 className='city-page-title'>{cityData.name}</h1>
      </div>

      <div className='city-details-grid'>
        <div className='city-detail-card'>
          <h3>{t('geo.population')}</h3>
          <p className='city-detail-value'>{cityData.population.toLocaleString()}</p>
        </div>

        <div className='city-detail-card'>
          <h3>{t('geo.area')}</h3>
          <p className='city-detail-value'>
            {cityData.area.toLocaleString()} km<sup>2</sup>
          </p>
        </div>

        <div className='city-detail-card'>
          <h3>{t('geo.altitude')}</h3>
          <p className='city-detail-value'>{cityData.altitude} m</p>
        </div>

        <div className='city-detail-card'>
          <h3>{t('geo.region')}</h3>
          <p className='city-detail-value'>{cityData.region}</p>
        </div>

        <div className='city-detail-card'>
          <h3>{t('geo.coordinates')}</h3>
          <p className='city-detail-value'>
            {cityData.latitude.toFixed(4)}°N, {cityData.longitude.toFixed(4)}°E
          </p>
        </div>
      </div>

      {cityData.urlWikipedia && (
        <div className='city-links'>
          <a href={cityData.urlWikipedia} target='_blank' rel='noopener noreferrer' className='wikipedia-link'>
            {t('cityPage.readMore')} →
          </a>
        </div>
      )}
    </div>
  );
};

export default CityPage;
