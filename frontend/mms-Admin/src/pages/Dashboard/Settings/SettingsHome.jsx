import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../components/Dashboard/Settings/Sidebar';

function SettingsHome() {
  return (
    <div className="w-full h-screen font-mukta overflow-y-auto scroll">
      <div className="">
        <Sidebar />
        <div className="md:absolute sm:left-[20%] w-full md:w-[80%] md:pt-[69px]">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsHome;
