import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCitiesArray } from '../Util/citiesUtil';
import { getCountryFromUrl } from '../Util/urlUtil';
import { slugify } from '../Util/slugUtil';
import { t } from '../Util/translate';
import { getCountryFlag } from '../Util/countryUtil';
import './CountryPage.css';

/**
 * Country page component that displays all cities for a given country
 * with links to individual city detail pages
 */
const CountryPage = () => {
  const { lang, country } = useParams();

  // Get the internal country code from the URL
  const countryCode = getCountryFromUrl(country);

  if (!countryCode) {
    return <div className='country-page-error'>Invalid country</div>;
  }

  // Get all cities for this country
  const cities = getCitiesArray(countryCode);

  // Sort cities by population (largest first)
  const sortedCities = [...cities].sort((a, b) => b.population - a.population);

  return (
    <div className='country-page'>
      <h1 className='country-page-title'>
        {getCountryFlag(countryCode)} {t(`country.${countryCode}.name`)}
      </h1>

      <p className='country-page-description'>{t('countryPage.description')}</p>

      <div className='cities-grid'>
        {sortedCities.map((city) => {
          const citySlug = slugify(city.name);
          const cityUrl = `/${lang}/${country}/${citySlug}`;

          return (
            <Link key={city.name} to={cityUrl} className='city-card'>
              <div className='city-card-content'>
                {city.signUrl && (
                  <img src={city.signUrl} alt={`${city.name} coat of arms`} className='city-coat-of-arms' />
                )}
                <div className='city-info'>
                  <h2 className='city-name'>{city.name}</h2>
                  <p className='city-details'>
                    {t('countryPage.population')}: {city.population.toLocaleString()}
                  </p>
                  <p className='city-details'>
                    {t('countryPage.region')}: {city.region}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountryPage;
