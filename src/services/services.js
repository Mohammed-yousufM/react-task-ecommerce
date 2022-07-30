import httpService from './httpService';

class Services {
  reqNewAccesToken({ refreshToken }) {
    return httpService.post('/user/refresh', { refreshToken });
  }
}

export default new Services();
