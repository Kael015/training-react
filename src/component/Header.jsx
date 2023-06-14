import React from "react";

function Header(props) {
  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* Mobile hamburger */}
        <button
          id="humbergerButton"
          name="hamburger"
          type="button"
          className="p-1 mr-5 -ml-1 lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={props.toggleSideMenu}
        >
          <span className="hamburger-line origin-top-left"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line origin-bottom-left"></span>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20" rx="10"></rect>
            <rect y="30" width="100" height="20" rx="10"></rect>
            <rect y="60" width="100" height="20" rx="10"></rect>
          </svg>
        </button>
        <div className="capitalize font-semibold">Dashboard</div>
      </div>
    </header>
  );
}

export default Header;
