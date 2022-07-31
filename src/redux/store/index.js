import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../slice/login/loginSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    // posts: postsReducer,
  },
});

export default store;
