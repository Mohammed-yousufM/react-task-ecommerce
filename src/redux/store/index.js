import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../slice/login/loginSlice';
import itemsReducer from '../slice/items/itemsSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    items: itemsReducer,
  },
});

export default store;
