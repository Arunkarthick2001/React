import React, { useState } from "react";
import StudentDropdown from "./StudentDropdown";
import AcademicDropdown from "./AcademicDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    handleAcademicClose();
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };
  const [isAcademicOpen, setAcademicOpen] = useState(false);

  const handelAcademicOpen = () => {
    setAcademicOpen(!isAcademicOpen);
    handleDropdownClose();
  };

  const handleAcademicClose = () => {
    setAcademicOpen(false);
  };

  return (
    <div className="mx-0">
      <nav className="border-gray-200 bg-gray-400">
        <div className="container mx-0 flex flex-wrap items-center">
          <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-2 md:mt-0 md:text-lg md:font-large">
              {/* Other menu items */}
              <li>
                <Link
                  to="/home"
                  className="text-gray-700 hover:bg-gray-50 border-b font-bold border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
                >
                  Home
                </Link>
              </li>

              <li>
                <button
                  id="dropdownNavbarLink"
                  className="text-gray-700 hover:bg-gray-50 border-b font-bold border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
                  onMouseEnter={handleDropdownToggle}
                >
                  StudentDetails
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {/* Dropdown menu */}
                <StudentDropdown
                  isOpen={isDropdownOpen}
                  handleClose={handleDropdownClose}
                />
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  className="text-gray-700 hover:bg-gray-50 border-b font-bold border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
                  onMouseEnter={handelAcademicOpen}
                >
                  Acadeimics
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {/* Dropdown menu */}
                <AcademicDropdown
                  isOpen={isAcademicOpen}
                  handleClose={handleAcademicClose}
                />
              </li>
              {/* Other menu items */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
