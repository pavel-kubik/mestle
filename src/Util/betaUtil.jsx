export const isBeta = () => {
  return document.cookie.split(';').some((item) => item.trim().startsWith('nf_ab=develop'));
};

export const switchToBeta = () => {
  if (isBeta()) {
    document.cookie = 'nf_ab=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  } else {
    document.cookie = `nf_ab=develop;max-age=31536000`;
  }
  window.location.reload(true);
};
