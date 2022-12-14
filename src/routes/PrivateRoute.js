import React from 'react';
import { Navigate } from 'react-router-dom';
import { getTokensFn } from '../utils/browserStorage';

const PrivateRoute = ({ children }) => {
  const { refresh, access } = getTokensFn();

  const isLogin = refresh && access;

  if (!isLogin) return <Navigate to="/login" replace />;

  return children;
};

export default PrivateRoute;
