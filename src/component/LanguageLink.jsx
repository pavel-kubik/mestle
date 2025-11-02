import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getLanguage } from '../Util/translate';
import { getCountry } from '../Util/countryUtil';
import { buildUrlPath, parseUrl } from '../Util/urlUtil';

/**
 * A wrapper for React Router's Link component that automatically includes
 * the current language and country in the URL
 */
const LanguageLink = ({ to, children, ...props }) => {
  const location = useLocation();

  // Parse current URL to get language and country
  const parsed = parseUrl(location.pathname);
  const currentLanguage = parsed?.language || getLanguage();
  const currentCountry = parsed?.country || getCountry();

  // Build the full URL with language and country
  const fullPath = buildUrlPath(currentLanguage, currentCountry, to);

  return (
    <Link to={fullPath} {...props}>
      {children}
    </Link>
  );
};

export default LanguageLink;
