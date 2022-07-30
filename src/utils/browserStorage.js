//Manage browser local storage

export const setUserBrowserStorage = (itemName, itemValue) => {
  localStorage.setItem(itemName, itemValue);
};

export const getUserBrowserStorage = (itemName) => {
  return localStorage.getItem(itemName);
};

export const clearAllBrowserStorage = (cb) => {
  localStorage.clear();
  if (cb) cb();
};
