/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import brandLogo from './logo.svg';
import googleLogo from './google-icon.svg';
import resetIll from './password-reset-sucess-illustration.png';

// am importing pictures from the assets folder and exporting them as components
// mentor management system logo
export function BrandLogo({ styling }) {
  return <img src={brandLogo} className={styling} alt="logo" />;
}
// password eye show icon
export function PasswordEyeShow({ styling }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={styling}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
// password eye hide icon
export function PasswordEyeHide({ styling }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={styling}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L22 22"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
// google logo
export function GoogleLogo({ styling }) {
  return <img src={googleLogo} className={styling} alt="logo" />;
}
// password rest success illustration
export function ResetPasswordIllustration({ styling }) {
  return <img src={resetIll} className={styling} alt="logo" />;
}
