/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function MentorsInfoProtected({ children }) {
  const { isMentorClicked } = useSelector((state) => state.mentors);
  if (isMentorClicked === false) {
    return <Navigate to="/admin-dashboard/mentors" />;
  }
  return children;
}
