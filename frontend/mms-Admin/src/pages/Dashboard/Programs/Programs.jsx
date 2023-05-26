import React from 'react';
import { Outlet } from 'react-router-dom';

function Programs() {
  return (
    <div className="w-full max-h-screen overflow-y-auto scroll pr-[10px]">
      <Outlet />
    </div>
  );
}

export default Programs;
