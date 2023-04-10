import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthHome from './pages/Auth/AuthHome';
import ForgotPassword from './pages/Auth/ForgotPassword';
import LoginPage from './pages/Auth/LoginPage';
import SetNewPassword from './pages/Auth/SetNewPassword';
import DashboardHome from './pages/Dashboard/DashboardHome';
import ErrorPage from './pages/Error/ErrorPage';
import SplashScreen from './pages/SplashScreen/SplashScreen';
import { stopLoader } from './redux/features/splashSlice';

// Moved the router here to be able to call the splash screen once to avoid redundant code.
// This is were you add routes for the pages you are building
const router = createBrowserRouter([
  {
    // your route goes here
    path: '/',
    // this is where you add the component of the page you are routing to
    element: <AuthHome />,
    // this is a fallback error page that appears and shows you the error of the particular route
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <LoginPage />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'set-new-password',
        element: <SetNewPassword />,
      },
    ],
  },
  {
    path: '/admin-dashboard',
    element: <DashboardHome />,
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  const dispatch = useDispatch();
  // Get the isloaded state
  const isLoaded = useSelector((state) => state.splashScreen.isLoaded);
  setTimeout(() => dispatch(stopLoader()), 2000);
  // return the splash screen if the isloaded state is false
  return !isLoaded ? <SplashScreen /> : <RouterProvider router={router} />;
}
