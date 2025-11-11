import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCitiesArray } from '../Util/citiesUtil';
import { getCountryFromUrl } from '../Util/urlUtil';
import { slugify } from '../Util/slugUtil';
import { t } from '../Util/translate';
import { getCountryFlag } from '../Util/countryUtil';
import './CountryPage.css';

/**
 * Country page component that displays all cities in a table
 * with links to individual city detail pages
 */
const CountryPage = () => {
  const { lang, country } = useParams();
  const navigate = useNavigate();

  // Get the internal country code from the URL
  const countryCode = getCountryFromUrl(country);

  if (!countryCode) {
    return <div className='country-page-error'>Invalid country</div>;
  }

  // Get all cities for this country
  const cities = getCitiesArray(countryCode);

  // Sort cities by population (largest first)
  const sortedCities = [...cities].sort((a, b) => b.population - a.population);

  // SEO: Set page title and meta description
  useEffect(() => {
    const countryName = t(`country.${countryCode}.name`);
    document.title = `${countryName} - ${t('countryPage.seoTitle')} | Městle`;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('countryPage.seoDescription', { country: countryName }));
    }
  }, [countryCode]);

  return (
    <div className='country-page'>
      <div className='country-page-back'>
        <button onClick={() => navigate(`/${lang}`)} className='back-button'>
          ← {t('countryPage.backToHome')}
        </button>
      </div>

      <h1 className='country-page-title'>
        {getCountryFlag(countryCode)} {t(`country.${countryCode}.name`)}
      </h1>

      <p className='country-page-description'>{t('countryPage.tableDescription')}</p>

      <div className='cities-table-wrapper'>
        <table className='cities-table'>
          <thead>
            <tr>
              <th>{t('countryPage.table.name')}</th>
              <th>{t('countryPage.table.population')}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortedCities.map((city) => {
              const citySlug = slugify(city.name);
              const cityUrl = `/${lang}/${country}/city/${citySlug}`;

              const handleRowClick = () => navigate(cityUrl);
              const handleKeyDown = (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate(cityUrl);
                }
              };

              return (
                <tr
                  key={city.name}
                  className='city-row'
                  onClick={handleRowClick}
                  onKeyDown={handleKeyDown}
                  tabIndex={0}
                  role='button'
                  aria-label={`View details for ${city.name}`}
                >
                  <td className='city-name'>{city.name}</td>
                  <td className='city-population'>{city.population.toLocaleString()}</td>
                  <td className='city-link'>
                    <span className='city-detail-icon' aria-hidden='true'>
                      👁
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryPage;
