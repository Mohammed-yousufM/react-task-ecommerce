import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute.js';

import LoginPage from '../pages/LoginPage.js';
import HomePage from '../pages/HomePage.js';

function CustomRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default CustomRoutes;
