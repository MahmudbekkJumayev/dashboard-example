import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex overflow-x-hidden">
      <aside>
        <Sidebar />
      </aside>
      <div className="flex-grow px-2">
        <Navbar />
        <main className="snap-y md:px-10 overflow-y-scroll h-[calc(100vh-90px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
