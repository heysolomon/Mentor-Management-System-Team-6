/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.user.userInfo);
  if (isAuthenticated === null) {
    return <Navigate to="/" />;
  }
  return children;
}
