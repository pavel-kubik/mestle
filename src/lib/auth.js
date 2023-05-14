export const storeUserDataInLocalStorage = (userData) => {
  localStorage.setItem('_user', JSON.stringify(userData));
};

export const clearUserDataInLocalStorage = () => {
  localStorage.removeItem('_user');
};

export const getUserDataInLocalStorage = () => {
  return JSON.parse(localStorage.getItem('_user'));
};
