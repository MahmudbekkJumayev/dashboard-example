import React, { useState } from "react";
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
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  const navLinks = [
    {
      to: "/home",
      icon: <IoHomeOutline className="w-[25px] h-[25px]" />,
      label: "Home",
    },
    {
      to: "/linechart",
      icon: <LuLayout className="w-[25px] h-[25px]" />,
      label: "Line Chart",
    },
    {
      to: "/pulse",
      icon: <BiPulse className="w-[25px] h-[25px]" />,
      label: "Pulse",
    },
    {
      to: "/coinstack",
      icon: <BiCoinStack className="w-[25px] h-[25px]" />,
      label: "Coin Stack",
    },
    {
      to: "/documents",
      icon: <HiOutlineDocumentDuplicate className="w-[27px] h-[27px]" />,
      label: "Documents",
    },
    {
      to: "/envelope",
      icon: <FaRegEnvelope className="w-[25px] h-[25px]" />,
      label: "Envelope",
    },
    {
      to: "/messages",
      icon: <FaRegMessage className="w-[25px] h-[25px]" />,
      label: "Messages",
    },
    {
      to: "/cart",
      icon: <AiOutlineShoppingCart className="w-[27px] h-[27px]" />,
      label: "Cart",
    },
    {
      to: "/dotcircle",
      icon: <FaRegDotCircle className="w-[25px] h-[25px]" />,
      label: "Dot Circle",
    },
    {
      to: "/calendar",
      icon: <MdCalendarToday className="w-[25px] h-[25px]" />,
      label: "Calendar",
    },
  ];

  return (
    <div
      className={`bg-white drop-shadow-md hidden md:block h-[100vh] rounded-r-lg ${
        isExpanded ? "w-[200px]" : "w-[80px]"
      }`}
    >
      <div className="h-screen flex justify-center">
        <div className="flex flex-col items-center">
          <div
            className="flex items-center justify-center rounded-md p-4 text-blue-600 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <img className="w-[30px] h-[30px]" src={menu} alt="Menu" />
          </div>
          <div className="mt-10 rounded-md bg-white flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`w-full rounded-lg flex items-center cursor-pointer py-4 px-4 ${
                  location.pathname === link.to
                    ? "text-white bg-violet-500"
                    : "text-gray-500 hover:text-white hover:bg-violet-500"
                }`}
                style={
                  location.pathname === link.to
                    ? { boxShadow: "0px 0px 10px rgba(128, 90, 213, 0.6)" }
                    : {}
                }
              >
                {link.icon}
                {isExpanded && <span className="ml-4">{link.label}</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
