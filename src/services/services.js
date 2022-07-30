import httpService from './httpService';

class Services {
  reqLogin({ username, password }) {
    return httpService.post('/login', { username, password });
  }
  reqNewAccesToken({ refreshToken }) {
    return httpService.post('/user/refresh', { refreshToken });
  }
}

export default new Services();
