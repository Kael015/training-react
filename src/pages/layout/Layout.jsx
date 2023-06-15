import React, { useState } from "react";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  function toggleSideMenu() {
    const hamburger = document.getElementById("humbergerButton");
    hamburger.classList.toggle("hamburger-active");
    setIsSideMenuOpen(!isSideMenuOpen);
  }

  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar isSideMenuOpen={isSideMenuOpen} />
        <div className="flex flex-col flex-1 w-full">
          <Header toggleSideMenu={toggleSideMenu} />
          <div className="flex mx-auto">
            <div className="w-full rounded shadow-lg">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
