import React from 'react';
import {
  BrandLogo,
  MessageIcon,
  NotificationBellIcon,
  SearchIcon,
  UserAvatar,
} from '../../assets/images';

function Navbar() {
  return (
    <nav className="fixed w-full z-40 bg-pri3 h-20 flex justify-between items-center px-10">
      <div className="flex items-center">
        <BrandLogo styling="w-[7%]" />
        <p className="font-[600] text-[16px] text-white ml-[5px]">
          Mentor’s Managers System
        </p>
      </div>
      <div className="w-[60%] flex justify-between h-full items-center">
        {/* Search Bar */}
        <div className="flex items-center bg-white h-[28px] w-[70%] rounded-[5px] py-4 text-black5 font-[400] text-[16px]">
          <SearchIcon styling="ml-5" />
          <input
            type="text"
            className="focus:outline-none bg-transparent pl-5 w-full"
            placeholder="Search for anything"
          />
        </div>
        <MessageIcon color="#F7FEFF" />
        <NotificationBellIcon color="#F7FEFF" />
        <UserAvatar />
      </div>
    </nav>
  );
}

export default Navbar;
