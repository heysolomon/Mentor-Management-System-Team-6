import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';
// import styles from './styles/dashboard.module.css';

function DashboardHome() {
  return (
    <div className="w-screen h-screen font-mukta">
      <Navbar />
      <div className="relative left-0 right-0 bottom-0 top-20">
        <Sidebar />
        <div className="fixed left-[20%] w-[80%] h-full p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
