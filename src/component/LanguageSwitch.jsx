import React, { useCallback, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { getLanguage, setLanguage as setStorageLanguage, LANGUAGES, t } from '../Util/translate';
import { getCountry } from '../Util/countryUtil';
import { buildUrlPath, removeLanguagePrefix } from '../Util/urlUtil';

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

    // Get current path without language prefix and current country
    const pathWithoutLang = removeLanguagePrefix(location.pathname);
    const country = getCountry();

    // Build new URL with new language and current country
    const newPath = buildUrlPath(newLanguage, pathWithoutLang, country);

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
