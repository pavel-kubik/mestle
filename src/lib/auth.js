export const storeUserDataInLocalStorage = (token) => {
  localStorage.setItem('_user', JSON.stringify(token));
};

export const clearUserDataInLocalStorage = () => {
  localStorage.removeItem('_user');
};

export const getUserDataInLocalStorage = () => {
  return JSON.parse(localStorage.getItem('_user'));
};
