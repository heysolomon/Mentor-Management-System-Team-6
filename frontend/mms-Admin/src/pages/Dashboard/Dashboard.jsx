import React from 'react';

import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Navbar from '../../components/Dashboard/Navbar';

import Sidebar from '../../components/Dashboard/Sidebar';

import Modal from '../../components/Modals/Modal';

function Dashboard() {
  const content = useSelector((state) => state.modal.content);
  return (
    <>
      {/* for all modals */}
      <Modal content={content} />
      <div className="w-full h-screen font-mukta">
        <Navbar />

        <div className="relative left-0 right-0 bottom-0 top-14 md:top-20">
          <Sidebar />

          <div className="fixed md:left-[20%] w-full md:w-[80%] h-screen p-5 pb-20">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
