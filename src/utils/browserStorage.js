//Manage browser local storage

export const setUserBrowserStorage = (itemName, itemValue) => {
  localStorage.setItem(itemName, itemValue);
  return;
};

export const getUserBrowserStorage = (itemName) => {
  return localStorage.getItem(itemName);
};

export const clearAllBrowserStorage = (cb) => {
  localStorage.clear();
  if (cb) cb();
  return;
};

export const getTokensFn = () => {
  const tokens = JSON.parse(getUserBrowserStorage('tokens'));
  return { refresh: tokens?.refresh, access: tokens?.access };
};

export const setTokensFn = ({ access, refresh }) => {
  const tokens = JSON.stringify({ access, refresh });
  setUserBrowserStorage('tokens', tokens);
  return;
};

export const getBookmarksFn = () => {
  const bookmarks = JSON.parse(getUserBrowserStorage('bookmarks'));
  return {
    bookmarks: bookmarks?.bookmarks || [],
    bookmarkIds: bookmarks?.bookmarkIds || [],
  };
};

export const setBookmarksFn = ({ newBookmarks, newIds }) => {
  const bookmarks = JSON.stringify({
    bookmarks: newBookmarks,
    bookmarkIds: newIds,
  });
  setUserBrowserStorage('bookmarks', bookmarks);
  return;
};
