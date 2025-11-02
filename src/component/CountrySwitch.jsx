import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getCountry, setCountry, COUNTRIES, getCountryFlag } from '../Util/countryUtil';
import { getLanguage } from '../Util/translate';
import { t } from '../Util/translate';
import { buildUrlPath, parseUrl } from '../Util/urlUtil';

const CountrySwitch = () => {
  const currentCountry = getCountry();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCountrySwitch = useCallback(() => {
    const newCountry = currentCountry === COUNTRIES.CZECH ? COUNTRIES.GERMAN : COUNTRIES.CZECH;

    // Get current language and path from URL
    const parsed = parseUrl(location.pathname);
    const currentLanguage = parsed?.language || getLanguage();
    const currentPath = parsed?.path || '/';

    // Update country in localStorage
    setCountry(newCountry);

    // Navigate to new URL with updated country
    const newUrl = buildUrlPath(currentLanguage, newCountry, currentPath);
    navigate(newUrl);

    // Reload to apply country changes (city data changes)
    window.location.reload();
  }, [currentCountry, navigate, location]);

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
