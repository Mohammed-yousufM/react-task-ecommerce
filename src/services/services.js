import httpService from './httpService';

class Services {
  reqLogin({ username, password }) {
    return httpService.post('login', { username, password }); //didn't use
  }
  reqNewAccesToken({ refreshToken }) {
    return httpService.post('user/refresh', { refreshToken });
  }
  getAllProducts() {
    return httpService.get('products');
  }
  getAllCategories() {
    return httpService.get('products/categories');
  }
  getProductsByCategory({ value }) {
    return httpService.get(`/products/category/${value}`);
  }
}

export default new Services();
