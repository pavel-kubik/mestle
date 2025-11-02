import React, { useCallback, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { getLanguage, setLanguage as setStorageLanguage, LANGUAGES, t } from '../Util/translate';
import { getCountry } from '../Util/countryUtil';
import { buildUrlPath, parseUrl } from '../Util/urlUtil';

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

    // Get current country and path from URL
    const parsed = parseUrl(location.pathname);
    const currentCountry = parsed?.country || getCountry();
    const currentPath = parsed?.path || '/';

    // Update language in localStorage
    setLanguage(newLanguage);
    setStorageLanguage(newLanguage);

    // Navigate to new URL with updated language
    const newUrl = buildUrlPath(newLanguage, currentCountry, currentPath);
    navigate(newUrl);

    // Reload to apply language changes throughout the app
    window.location.reload();
  }, [language, navigate, location]);

  return (
    <div style={{ cursor: 'pointer' }} onClick={toggleLanguage}>
      {t(`languages.${language}`)}
    </div>
  );
};

export default LanguageSwitch;
