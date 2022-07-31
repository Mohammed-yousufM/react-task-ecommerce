import services from './services';
import {
  getTokensFn,
  setTokensFn,
  clearAllBrowserStorage,
} from '../utils/browserStorage';

const clearAndLogout = () => {
  clearAllBrowserStorage();
  window.location('/login');
};

export const refreshTokenFn = async () => {
  const { refresh } = getTokensFn();
  try {
    const response = await services.reqNewAccesToken({ refreshToken: refresh });
    const { tokens } = response.data;
    if (!tokens?.accessToken) {
      clearAndLogout();
      return;
    }
    const newTokens = {
      access: tokens?.accessToken,
      refresh: tokens?.refreshToken,
    };
    setTokensFn({ ...newTokens });
    return { ...newTokens };
  } catch (error) {
    clearAndLogout();
    return;
  }
};
