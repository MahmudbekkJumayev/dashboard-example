import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex gap-10">
      <aside>
        <Sidebar />
      </aside>
      <div className="flex-grow">
        <Navbar />
        <main className="snap-y ml-[100px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
