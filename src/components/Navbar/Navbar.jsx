import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import personProf from "../../assets/images/person.jpg";

const Navbar = () => {
  return (
    <div className=" bg-white mb-5 fixed table-fixed z-10 w-[90%] ml-[100px] container py-5 drop-shadow-md flex items-center justify-between md:px-20">
      <div className="w-[350px] ">
        <span className="block">
          <label className="relative">
            <IoSearchSharp
              color="gray"
              className="top-[-15px] w-7 h-7 left-2  absolute z-10"
            />
            <input
              className="bg-gradient-to-r outline-0 top-[-20px] text-gray  text-[17px]  sm:px-10 py-10 sm:py-2 text-base sm:text-[15px] md:py-3 absolute from-slate-200 rounded-md h-[30px] sm:w-[300px] to-slate-200"
              type="text"
              placeholder="Search"
            />
          </label>
        </span>
      </div>
      <div className="flex justify-center items-center gap-5">
        <RiMessage2Line
          color="gray"
          className="w-[30px] h-[25px] cursor-pointer"
        />
        <IoNotifications
          color="gray"
          className="w-[30px] h-[25px] cursor-pointer"
        />
        <span className="w-[40px] h-[40px] rounded-full cursor-pointer">
          <img
            className="w-[40px] h-[40px] rounded-full object-cover"
            src={personProf}
            alt="Profil img"
          />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
