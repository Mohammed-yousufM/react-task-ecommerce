import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js'; //for redirecting to login page if user is logged-out state
import NavigateLogin from './NavigateLogin.js'; //for redirecting to homepage if already in logged-in state

import LoginPage from '../pages/LoginPage.js';
import HomePage from '../pages/HomePage.js';
import NotFound from '../pages/NotFound.js';
import NavBar from '../pages/NavBar.js';
import BookmarksPage from '../pages/BookmarksPage.js';

function CustomRoutes() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <PrivateRoute>
              <BookmarksPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <NavigateLogin>
              <LoginPage />
            </NavigateLogin>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default CustomRoutes;
