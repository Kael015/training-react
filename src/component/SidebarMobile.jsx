import React from "react";
import { NavLink } from "react-router-dom";

function SidebarMobile(props) {
  return (
    <aside
      className={`${
        props.isSideMenuOpen ? "fixed sidebar-open-mobile" : "hidden"
      } inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden`}
    >
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <NavLink
          to={"/"}
          className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        >
          <img
            src=""
            alt="logo"
            className="inline-flex"
            style={{ maxHeight: 33 }}
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
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
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
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span className="ml-4">Popular Movie List</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="px-6 my-6">
        <NavLink className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
          Create account
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </NavLink>
      </div>
    </aside>
  );
}

export default SidebarMobile;
