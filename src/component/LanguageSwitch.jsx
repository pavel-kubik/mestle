import React, { useCallback, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { getLanguage, setLanguage as setStorageLanguage, LANGUAGES, t } from '../Util/translate';
import { getCountry } from '../Util/countryUtil';
import { buildUrlPath, removeCountryAndLanguagePrefix } from '../Util/urlUtil';

const LanguageSwitch = () => {
  const [language, setLanguage] = useState(getLanguage());
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = useCallback(() => {
    let newLanguage;
    if (language === LANGUAGES.cs) {
      newLanguage = LANGUAGES.en;
    } else if (language === LANGUAGES.en) {
      newLanguage = LANGUAGES.de;
    } else {
      newLanguage = LANGUAGES.cs;
    }

    setLanguage(newLanguage);
    setStorageLanguage(newLanguage);

    // Get current path without country/language prefix and current country
    const pathWithoutPrefix = removeCountryAndLanguagePrefix(location.pathname);
    const country = getCountry();

    // Build new URL with current country and new language
    const newPath = buildUrlPath(country, newLanguage, pathWithoutPrefix);

    // Navigate to the new path
    navigate(newPath);

    // Reload to ensure all translations are updated
    window.location.reload();
  }, [language, navigate, location]);

  return (
    <div style={{ cursor: 'pointer' }} onClick={toggleLanguage}>
      {t(`languages.${language}`)}
    </div>
  );
};

export default LanguageSwitch;
