import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './redux/store';
import ErrorPage from './pages/Error/ErrorPage';

// This is were you add routes for the pages you are building
const router = createBrowserRouter([
  {
    // your route goes here
    path: '/',
    // this is where you add the component of the page you are routing to
    element: 'this is the landing page nwwwww',
    // this is a fallback error page that appears and shows you the error of the particular route
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* this the entry point for the redux store */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
