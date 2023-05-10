import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen/SplashScreen';
import { stopLoader } from './redux/features/splashSlice';
import Profile from './pages/Dashboard/Profile';
import ErrorPage from './pages/Error/ErrorPage';
import AuthHome from './pages/Auth/AuthHome';
import LoginPage from './pages/Auth/LoginPage';
import Dashboard from './pages/Dashboard/Dashboard';
import ForgotPassword from './pages/Auth/ForgotPassword';
import SetNewPassword from './pages/Auth/SetNewPassword';
import DashboardHome from './pages/Dashboard/DashboardHome';
import SettingsHome from './pages/Dashboard/Settings/SettingsHome';
import Support from './pages/Dashboard/Settings/Support';
import SettingsGeneral from './pages/Dashboard/Settings/SettingsGeneral';
import SettingChangePassword from './pages/Dashboard/Settings/SettingChangePassword';
import Faqs from './pages/Dashboard/Settings/Faqs/Faqs';
import Notifications from './pages/Dashboard/Settings/Notifications/Notifications';
import Privacy from './pages/Dashboard/Settings/Privacy';
import Archive from './pages/Dashboard/Settings/Archive';
import Tasks from './pages/Dashboard/Tasks/Tasks';
import ForgotPasswordVerifyEmail from './pages/Auth/ForgotPasswordVerifyEmail';
import NewTask from './pages/Dashboard/Tasks/NewTask';
import { ProtectedRoute } from './private/ProtectedRoute';
import DiscussionForum from './pages/Dashboard/DiscussionForum/DiscussionForum';
import MessageHome from './pages/Dashboard/Messages/MessageHome';
import BrowsePeople from './pages/Dashboard/Messages/BrowsePeople';
import BroadcastMessage from './pages/Dashboard/Messages/BroadcastMessage';
import Chats from './pages/Dashboard/Messages/Chats';
import { ForgotPasswordProtected } from './private/ForgotPasswordProtected';
import Mentors from './pages/Dashboard/Mentors/Mentors';
import MentorsHome from './pages/Dashboard/Mentors/MentorsHome';
import MentorsInfo from './pages/Dashboard/Mentors/MentorsInfo';
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
        path: 'password-reset-verify-email',
        element: <ForgotPasswordVerifyEmail />,
      },
      {
        path: 'set-new-password',
        element: (
          <ForgotPasswordProtected>
            <SetNewPassword />
          </ForgotPasswordProtected>
        ),
      },
    ],
  },
  {
    path: '/admin-dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <DashboardHome />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'programs',
        element: 'this is the programs',
      },
      {
        path: 'tasks',
        element: <Tasks />,
      },
      {
        path: 'task_new',
        element: <NewTask />,
      },
      {
        path: 'reports',
        element: 'this is the reports',
      },
      {
        path: 'mentors',
        element: <Mentors />,
        children: [
          {
            path: '',
            element: <MentorsHome />,
          },
          {
            path: 'mentor-info',
            element: <MentorsInfo />,
          },
        ],
      },
      {
        path: 'mentor-managers',
        element: 'this is the mentor-managers',
      },
      {
        path: 'approval-requests',
        element: 'this is the approval-requests',
      },
      {
        path: 'certificates',
        element: 'this is the certificates',
      },
      {
        path: 'messages',
        children: [
          {
            path: '',
            element: <MessageHome />,
          },
          {
            path: 'browse-people',
            element: <BrowsePeople />,
          },
          {
            path: 'chats',
            element: <Chats />,
          },
          {
            path: 'broadcast-message',
            element: <BroadcastMessage />,
          },
        ],
      },
      {
        path: 'discussion-forum',
        element: <DiscussionForum />,
      },
      {
        path: 'settings',
        element: <SettingsHome />,
        children: [
          {
            path: '',
            element: <SettingsGeneral />,
          },
          {
            path: 'password',
            element: <SettingChangePassword />,
          },
          {
            path: 'notifications',
            element: <Notifications />,
          },
          {
            path: 'privacy',
            element: <Privacy />,
          },
          {
            path: 'archive',
            element: <Archive />,
          },
          {
            path: 'support',
            element: <Support />,
          },
          {
            path: 'faq',
            element: <Faqs />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  const dispatch = useDispatch();
  // Get the isloaded state
  const isLoaded = useSelector((state) => state.splashScreen.isLoaded);
  setTimeout(() => dispatch(stopLoader()), 500);
  // return the splash screen if the isloaded state is false
  return !isLoaded ? <SplashScreen /> : <RouterProvider router={router} />;
}
