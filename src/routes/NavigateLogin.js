import React from 'react';
import { Navigate } from 'react-router-dom';
import { getTokensFn } from '../utils/browserStorage';

const NavigateLogin = ({ children }) => {
  const { refresh, access } = getTokensFn();

  const isLogin = refresh && access;

  if (!isLogin) return children;

  return <Navigate to="/" replace />;
};

export default NavigateLogin;
