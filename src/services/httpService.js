//setting up interceptors (for JWT auth) and defaults with axios
//reference: https://dev.to/franciscomendes10866/how-to-use-axios-interceptors-b7d
//reference: axios docs
//Mohammed yousuf

import axios from 'axios';
import config from '../config/config.json';
import { refreshTokenFn } from './getAccessToken';

const handleReq = async (config) => {
  const tokens = JSON.parse(localStorage.getItem('tokens'));
  if (tokens?.accessToken) {
    config.headers = {
      ...config.headers,
      authorization: `Bearer ${tokens?.accessToken}`, //adding JWT to req header
    };
  }
  return config;
};

const handleResError = async (error) => {
  const config = error?.config;
  const expiredToken = error?.response?.status === 401 && !config?.sent;
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  //receive error status 401 on expired accesstoken from backend
  if (expiredToken) {
    config.sent = true;

    //get new accesstoken and replay the failed request
    const result = await refreshTokenFn();
    if (result?.accessToken) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${result?.accessToken}`,
      };
    }
    return axios(config);
  } else if (!expectedError) {
    alert('An unexpected error occured');
  }
  return Promise.reject(error);
};

//setting up defaults with axios
axios.defaults.baseURL = config.API_BASE_URL;

//request interceptor to add jwt token with every request
axios.interceptors.request.use(
  (config) => handleReq(config),
  (error) => Promise.reject(error)
);

//response interceptor to handle expired accesstoken and other unexpected errors globally
axios.interceptors.response.use(
  (response) => response,
  (error) => handleResError(error)
);

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
