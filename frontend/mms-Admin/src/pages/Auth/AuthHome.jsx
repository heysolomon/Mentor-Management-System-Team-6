import React from 'react';
import { Outlet } from 'react-router-dom';
import { BrandLogo } from '../../assets/images';

function AuthHome() {
  return (
    // the whole page both left and right
    <div className="w-screen h-screen grid grid-cols-2">
      {/* left hand side of the page */}
      <div className="bg-pri3 h-full flex flex-col items-center justify-center">
        {/* imported mentor management system logo */}
        <BrandLogo styling="w-[35%]" />
        <h1 className="text-white font-[700] font-mukta text-[30px]">Mentor Management System</h1>
      </div>
      {/* right hand side of the page */}
      <div className="bg-white">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthHome;
