import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../styles/dashboard.module.css';
import Sidebar from '../../../components/Dashboard/Settings/Sidebar';

function SettingsHome() {
  return (
    <div
      className={`w-full h-screen font-mukta overflow-y-auto ${styles.scroll}`}
    >
      <div className="left-0 right-0 bottom-0 top-14 md:top-20">
        <Sidebar />
        <div className="absolute md:left-[20%] top-[68px] w-full md:w-[80%] h-screen p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SettingsHome;
