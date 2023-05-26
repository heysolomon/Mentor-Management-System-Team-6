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
import { DiscussionForum } from './pages/Dashboard/DiscussionForum/DiscussionForum';
import MessageHome from './pages/Dashboard/Messages/MessageHome';
import BrowsePeople from './pages/Dashboard/Messages/BrowsePeople';
import BroadcastMessage from './pages/Dashboard/Messages/BroadcastMessage';
import Chats from './pages/Dashboard/Messages/Chats';
import { ForgotPasswordProtected } from './private/ForgotPasswordProtected';
import Mentors from './pages/Dashboard/Mentors/Mentors';
import MentorsHome from './pages/Dashboard/Mentors/MentorsHome';
import MentorsInfo from './pages/Dashboard/Mentors/MentorsInfo';
import { MentorsInfoProtected } from './private/MentorsInfo';
import MentorAbout from './pages/Dashboard/Mentors/MentorAbout';
import EditTask from './pages/Dashboard/Tasks/EditTask';
import MentorsPrograms from './pages/Dashboard/Mentors/MentorsPrograms';
import MentorTasks from './pages/Dashboard/Mentors/MentorTasks';
import MentorCertificates from './pages/Dashboard/Mentors/MentorCertificates';
import Reports from './pages/Dashboard/Reports/Reports';
import MentorManager from './pages/Dashboard/MentorManager/MentorManager';
import MentorManagerHome from './pages/Dashboard/MentorManager/MentorManagerHome';
import MentorManagerInfo from './pages/Dashboard/MentorManager/MentorManagerInfo';
import MentorManagerAbout from './pages/Dashboard/MentorManager/MentorManagerAbout';
import MentorManagerPrograms from './pages/Dashboard/MentorManager/MentorManagerPrograms';
import MentorManagerTasks from './pages/Dashboard/MentorManager/MentorManagerTasks';
import MentorManagersCertificates from './pages/Dashboard/MentorManager/MentorManagersCertificates';
import MentorManagerMentors from './pages/Dashboard/MentorManager/MentorManagerMentors';
import Programs from './pages/Dashboard/Programs/Programs';
import CriteriaSetupHome from './pages/Dashboard/Programs/CriteriaSetupHome';
import ProgramsHome from './pages/Dashboard/Programs/ProgramsHome';
import NewProgram from './pages/Dashboard/Programs/NewProgram';
import EditProgram from './pages/Dashboard/Programs/EditProgram';
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
        element: <Programs />,
        children: [
          {
            path: '',
            element: <ProgramsHome />,
          },
          {
            path: 'new_program',
            element: <NewProgram />,
          },
          {
            path: 'edit_program',
            element: <EditProgram />,
          },
          {
            path: 'criteria-setup',
            element: <CriteriaSetupHome />,
          },
        ],
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
        path: 'task_Edit',
        element: <EditTask />,
      },
      {
        path: 'reports',
        element: <Reports />,
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
            element: (
              <MentorsInfoProtected>
                <MentorsInfo />
              </MentorsInfoProtected>
            ),
            children: [
              {
                path: '',
                element: <MentorAbout />,
              },
              {
                path: 'programs',
                element: <MentorsPrograms />,
              },
              {
                path: 'tasks',
                element: <MentorTasks />,
              },
              {
                path: 'certificates',
                element: <MentorCertificates />,
              },
            ],
          },
        ],
      },
      {
        path: 'mentor-managers',
        element: <MentorManager />,
        children: [
          {
            path: '',
            element: <MentorManagerHome />,
          },
          {
            path: 'mentor-info',
            element: (
              <MentorsInfoProtected>
                <MentorManagerInfo />
              </MentorsInfoProtected>
            ),
            children: [
              {
                path: '',
                element: <MentorManagerAbout />,
              },
              {
                path: 'programs',
                element: <MentorManagerPrograms />,
              },
              {
                path: 'mentors',
                element: <MentorManagerMentors />,
              },
              {
                path: 'tasks',
                element: <MentorManagerTasks />,
              },
              {
                path: 'certificates',
                element: <MentorManagersCertificates />,
              },
            ],
          },
        ],
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
