import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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

  // Get the internal country code from the URL
  const countryCode = getCountryFromUrl(country);

  if (!countryCode) {
    return <div className='country-page-error'>Invalid country</div>;
  }

  // Get all cities for this country
  const cities = getCitiesArray(countryCode);

  // Sort cities by population (largest first) and add order numbers
  const sortedCities = [...cities]
    .sort((a, b) => b.population - a.population)
    .map((city, index) => ({ ...city, order: index + 1 }));

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
      <h1 className='country-page-title'>
        {getCountryFlag(countryCode)} {t(`country.${countryCode}.name`)}
      </h1>

      <p className='country-page-description'>{t('countryPage.tableDescription')}</p>

      <div className='cities-table-wrapper'>
        <table className='cities-table'>
          <thead>
            <tr>
              <th>{t('countryPage.table.order')}</th>
              <th>{t('countryPage.table.name')}</th>
              <th>{t('countryPage.table.population')}</th>
              <th>{t('countryPage.table.link')}</th>
            </tr>
          </thead>
          <tbody>
            {sortedCities.map((city) => {
              const citySlug = slugify(city.name);
              const cityUrl = `/${lang}/${country}/city/${citySlug}`;

              return (
                <tr key={city.name}>
                  <td className='city-order'>{city.order}</td>
                  <td className='city-name'>{city.name}</td>
                  <td className='city-population'>{city.population.toLocaleString()}</td>
                  <td className='city-link'>
                    <Link to={cityUrl} className='city-detail-link'>
                      {t('countryPage.table.viewDetails')}
                    </Link>
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
