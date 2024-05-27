import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex overflow-x-hidden">
      <Sidebar />
      <div className="flex-grow md:px-2">
        <Navbar />
        <main className="snap-y xs:px-0 md:px-10 overflow-y-scroll h-[calc(100vh-90px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
