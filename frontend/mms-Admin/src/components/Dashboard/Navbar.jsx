import React from 'react';
import { BrandLogo, SearchIcon } from '../../assets/images';

function Navbar() {
  return (
    <div className="fixed w-full z-40 bg-pri3 h-24 flex justify-between items-center px-10">
      <div className="flex items-center">
        <BrandLogo styling="w-[7%]" />
        <p className="font-[600] text-[16px] text-white ml-[5px]">
          Mentor’s Managers System
        </p>
      </div>
      <div className="w-[60%]">
        {/* Search Bar */}
        <div className="flex items-center bg-white h-[28px] rounded-[5px] py-4 text-black5 font-[400] text-[16px]">
          <SearchIcon styling="ml-5" />
          <input
            type="text"
            className="focus:outline-none bg-transparent pl-5"
            placeholder="Search for anything"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
