import React, { useCallback, useState } from 'react';

import { getLanguage, setLanguage as setStorageLanguage, LANGUAGES, t } from '../Util/translate';

const LanguageSwitch = () => {
  const [language, setLanguage] = useState(getLanguage());

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
    window.location.reload();
  }, [language]);

  return (
    <div style={{ cursor: 'pointer' }} onClick={toggleLanguage}>
      {t(`languages.${language}`)}
    </div>
  );
};

export default LanguageSwitch;
