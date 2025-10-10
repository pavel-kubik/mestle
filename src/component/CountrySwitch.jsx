import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getCountry, setCountry, COUNTRIES, getCountryFlag } from '../Util/countryUtil';
import { getLanguage, t } from '../Util/translate';
import { buildUrlPath, removeLanguagePrefix } from '../Util/urlUtil';

const CountrySwitch = () => {
  const currentCountry = getCountry();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCountrySwitch = () => {
    // Toggle country
    const newCountry = currentCountry === COUNTRIES.CZECH ? COUNTRIES.GERMAN : COUNTRIES.CZECH;

    // Update localStorage
    setCountry(newCountry);

    // Get current language and path without language prefix
    const language = getLanguage();
    const pathWithoutLang = removeLanguagePrefix(location.pathname);

    // Build new URL with current language and new country
    const newPath = buildUrlPath(language, pathWithoutLang, newCountry);

    // Navigate to the new path
    navigate(newPath);

    // Reload to ensure all data is updated for the new country
    window.location.reload();
  };

  return (
    <div className='button left' onClick={handleCountrySwitch}>
      {currentCountry === COUNTRIES.CZECH && (
        <>
          {getCountryFlag(COUNTRIES.CZECH)} {t('components.countrySwitch.button.czech')}
        </>
      )}
      {currentCountry === COUNTRIES.GERMAN && (
        <>
          {getCountryFlag(COUNTRIES.GERMAN)} {t('components.countrySwitch.button.german')}
        </>
      )}
    </div>
  );
};

export default CountrySwitch;
