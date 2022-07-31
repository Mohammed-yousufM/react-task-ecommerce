import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getUserBrowserStorage } from '../utils/browserStorage';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isLogin = !!JSON.parse(getUserBrowserStorage('isLogin'));

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? Component : <Navigate replace to="/login" />
      }
    />
  );
};

export default PrivateRoute;
