import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import personProf from "../../assets/images/person.jpg";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="bg-white flex items-center justify-between py-5 px-5 md:px-10 drop-shadow-md rounded-b-lg">
        <div className="w-full md:w-[350px]">
          <label className="relative block">
            <IoSearchSharp
              color="gray"
              className="absolute top-1/2 transform -translate-y-1/2 left-3 w-5 h-5 md:w-7 md:h-7"
            />
            <input
              className="w-full bg-gradient-to-r from-slate-200 to-slate-200 rounded-md pl-10 pr-4 py-2 outline-none text-gray-700 text-sm md:text-base"
              type="text"
              placeholder="Search"
            />
          </label>
        </div>
        <div className="flex items-center gap-4 md:gap-5">
          <RiMessage2Line
            color="gray"
            className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
          />
          <IoNotifications
            color="gray"
            className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
          />
          <span className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src={personProf}
              alt="Profile"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
