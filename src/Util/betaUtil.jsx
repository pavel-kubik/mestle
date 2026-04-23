export const isBeta = () => {
  return document.cookie.split(';').some((item) => item.trim().startsWith('nf_ab=develop'));
};

/**
 * Switch between production and beta (develop) versions
 * Page reload is required because beta mode switches between different code deployments
 * on Netlify (production vs develop branch). This is different from feature flags which
 * only affect UI state and don't require reloading.
 */
export const switchToBeta = () => {
  if (isBeta()) {
    document.cookie = 'nf_ab=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
  } else {
    document.cookie = `nf_ab=develop;max-age=31536000;path=/`;
  }
  window.location.reload(true);
};

/**
 * Check if URL has nf_ab=develop parameter and set cookie if needed
 * This enables beta mode via URL: https://mestle.cz/?nf_ab=develop
 */
export const initBetaFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const nfAbParam = urlParams.get('nf_ab');

  if (nfAbParam === 'develop' && !isBeta()) {
    // Set the beta cookie
    document.cookie = `nf_ab=develop;max-age=31536000;path=/`;

    // Remove the URL parameter and reload
    urlParams.delete('nf_ab');
    const newUrl = urlParams.toString()
      ? `${window.location.pathname}?${urlParams.toString()}`
      : window.location.pathname;
    window.history.replaceState({}, '', newUrl);
    window.location.reload(true);
  } else if (nfAbParam !== null && nfAbParam !== 'develop' && isBeta()) {
    // Remove beta cookie if different parameter is set
    document.cookie = 'nf_ab=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';

    // Remove the URL parameter and reload
    urlParams.delete('nf_ab');
    const newUrl = urlParams.toString()
      ? `${window.location.pathname}?${urlParams.toString()}`
      : window.location.pathname;
    window.history.replaceState({}, '', newUrl);
    window.location.reload(true);
  }
};
