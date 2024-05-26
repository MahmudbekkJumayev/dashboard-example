import React from "react";
import menu from "../../assets/images/main1.svg";
import { IoHomeOutline } from "react-icons/io5";
import { LuLayout } from "react-icons/lu";
import { BiPulse } from "react-icons/bi";
import { BiCoinStack } from "react-icons/bi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegDotCircle } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" bg-white drop-shadow-md fixed z-10 rounded-r-lg">
      <div className=" h-screen flex justify-center">
        <div className="flex w-[80px] flex-col items-center">
          <div className="flex items-center justify-center rounded-md  p-4 text-blue-600"></div>
          <img className="w-[30px] h-[30px] cursor-pointer" src={menu} alt="" />
          <div className=" mt-10 rounded-md bg-white">
            <div className="h-screen  text-white flex flex-col items-center">
              <Link
                to="/home"
                className="w-[60px] rounded-lg flex justify-center items-center cursor-pointer py-4 text-gray-500 hover:text-white hover:bg-violet-500"
              >
                <IoHomeOutline className="w-[25px] h-[25px]" />
              </Link>
              <Link
                to="/linechart"
                className="w-[60px] rounded-lg flex justify-center items-center cursor-pointer py-4 text-gray-500 hover:text-white hover:bg-violet-500"
              >
                <LuLayout className="w-[25px] h-[25px]" />
              </Link>
              <Link
                to="/pulse"
                className="w-[60px] rounded-lg flex justify-center items-center cursor-pointer py-4 text-gray-500 hover:text-white hover:bg-violet-500"
              >
                <BiPulse className="w-[25px] h-[25px]" />
              </Link>
              <Link
                to="/coinstack"
                className="w-[60px] rounded-lg flex justify-center items-center cursor-pointer py-4 text-gray-500 hover:text-white hover:bg-violet-500"
              >
                <BiCoinStack className="w-[25px] h-[25px]" />
              </Link>
              <Link
                to="/documents"
                className="w-[60px] rounded-lg flex justify-center items-center cursor-pointer py-4 text-gray-500 hover:text-white hover:bg-violet-500"
              >
                <HiOutlineDocumentDuplicate className="w-[27px] h-[27px]" />
              </Link>
              <Link
                to="/envelope"
                className="w-[60px] rounded-lg flex justify-center items-center cursor-pointer py-4 text-gray-500 hover:text-white hover:bg-violet-500"
              >
                <FaRegEnvelope className="w-[25px] h-[25px]" />
              </Link>
              <Link
                to="/messages"
                className="w-[60px] rounded-lg flex justify-center items-center cursor-pointer py-4 text-gray-500 hover:text-white hover:bg-violet-500"
              >
                <FaRegMessage className="w-[25px] h-[25px]" />
              </Link>
              <Link
                to="/cart"
                className="w-[60px] rounded-lg flex justify-center items-center cursor-pointer py-4 text-gray-500 hover:text-white hover:bg-violet-500"
              >
                <AiOutlineShoppingCart className="w-[27px] h-[27px]" />
              </Link>
              <Link
                to="/dotcircle"
                className="w-[60px] rounded-lg flex justify-center items-center cursor-pointer py-4 text-gray-500 hover:text-white hover:bg-violet-500"
              >
                <FaRegDotCircle className="w-[25px] h-[25px]" />
              </Link>
              <Link
                to="/calendar"
                className="w-[60px] rounded-lg flex justify-center items-center cursor-pointer py-4 text-gray-500 hover:text-white hover:bg-violet-500"
              >
                <MdCalendarToday className="w-[25px] h-[25px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
