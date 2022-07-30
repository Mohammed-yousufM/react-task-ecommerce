import { logins } from '../constants';

export const checkAuth = ({ username, password, resolve, reject }) => {
  const usernameOk = username === logins.username;
  const passwordOk = password === logins.password;
  if (usernameOk && passwordOk) {
    resolve({
      data: {
        tokens: {
          accessToken: 'dummy-access-token',
          refreshToken: 'dummy-refresh-token',
        },
      },
      responscode: 200,
    });
  } else {
    reject({
      data: {
        tokens: {},
      },
      responscode: 400,
    });
  }
};
