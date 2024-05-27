import React, { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import personProf from "../../assets/images/person.jpg";
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
import burger from "../../assets/images/main1.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsExpanded(false); // Reset the sidebar state when switching to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full">
      {/* sidebar */}
      <div className="md:hidden">
        <div
          className={`bg-white drop-shadow-md fixed z-10 h-[100vh] rounded-r-lg transition-transform duration-300 ${
            isExpanded
              ? "w-[200px] translate-x-0"
              : "w-[80px] -translate-x-full"
          }`}
        >
          <div className="h-screen flex justify-center">
            <div className="flex flex-col items-center">
              <span
                className="mt-5 block md:hidden"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <img src={burger} alt="menu icon" className="cursor-pointer" />
              </span>
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
      </div>
      {/* navbar */}
      <div className="bg-white flex items-center justify-between py-5 px-5 md:px-10 drop-shadow-md rounded-b-lg">
        <div className="w-full flex justify-start items-center gap-2 md:w-[350px]">
          <span className="block md:hidden" onClick={toggleSidebar}>
            <img src={burger} alt="menu icon" className="cursor-pointer" />
          </span>
          <label className="relative block">
            <IoSearchSharp
              color="gray"
              className="absolute top-1/2 transform -translate-y-1/2 left-3 w-5 h-5 md:w-7 md:h-7"
            />
            <input
              className="w-[90%] bg-gradient-to-r from-slate-200 to-slate-200 rounded-md pl-10 pr-4 py-2 outline-none text-gray-700 text-sm md:text-base"
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
