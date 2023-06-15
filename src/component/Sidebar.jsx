import React, { useState } from "react";
import SidebarMobile from "./SidebarMobile";
import { NavLink } from "react-router-dom";

function Sidebar(props) {
  const [isUserMenuOpen, setisUserMenuOpen] = useState(false);

  function togglePagesMenu() {
    setisUserMenuOpen(!isUserMenuOpen);
  }

  return (
    <div>
      {/* Desktop sidebar */}
      <aside className="h-screen z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block flex-shrink-0">
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <NavLink
            to={"/"}
            className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200 place-content-center"
          >
            <img
              src="https://files.readme.io/29c6fee-blue_short.svg"
              width={200}
              alt="logo"
              className="inline-flex px-2"
            />
          </NavLink>
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <NavLink
                to={"/dashboard"}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 sidebar-active"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span className="ml-4">Dashboard</span>
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink
                to={"/movie-list"}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 sidebar-active"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                <span className="ml-4">Movie List</span>
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink
                to={"/popular-list"}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 sidebar-active"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                <span className="ml-4">Popular Movie List</span>
              </NavLink>
            </li>
          </ul>
          <div className="px-6 my-6">
            <NavLink
              to={"/dashboard"}
              className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            >
              Create account
              <span className="ml-2" aria-hidden="true">
                +
              </span>
            </NavLink>
          </div>
        </div>
      </aside>
      {/* Desktop sidebar end */}

      {/* Mobile Sidebar */}
      <SidebarMobile
        isSideMenuOpen={props.isSideMenuOpen}
        togglePagesMenu={togglePagesMenu}
        isUserMenuOpen={isUserMenuOpen}
      />
      {/* Mobile Sidebar End */}
    </div>
  );
}

export default Sidebar;
