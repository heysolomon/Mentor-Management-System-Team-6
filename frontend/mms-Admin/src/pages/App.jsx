import React from "react";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Error/ErrorPage";
import SplashScreen from "./SplashScreen/SplashScreen";

// This is were you add routes for the pages you are building
const router = createBrowserRouter([
  {
    // your route goes here
    path: "/",
    // this is where you add the component of the page you are routing to
    element: "this is the landing page nwwwww",
    // this is a fallback error page that appears and shows you the error of the particular route
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  const isLoaded = useSelector((state) => state.splashScreen.isLoaded);
  console.log(isLoaded);
  return isLoaded ? <SplashScreen /> : <RouterProvider router={router} />;
}
