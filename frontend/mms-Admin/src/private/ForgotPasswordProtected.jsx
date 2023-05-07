/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function ForgotPasswordProtected({ children }) {
  const isAuthenticated = useSelector((state) => state.resetPassword.passwordResetToken);
  if (isAuthenticated === null) {
    return <Navigate to="/password-reset-verify-email" />;
  }
  return children;
}
