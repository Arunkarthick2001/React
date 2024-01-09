import React from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import AddMarks from "./AddMarks";
const AcademicDropdown = ({ isOpen, handleClose }) => {
  const navigate = useNavigate();
  const getReport = () => {
    navigate("/academichome/academic", {});
  };
  const addMarks = () => {
    navigate("/academichome/addmarks", {});
  };
  return isOpen
    ? createPortal(
        <div
          className="bg-grey text-base z-10 mx-4 list-none divide-y divide-gray-100 rounded shadow my-0 absolute"
          style={{ top: "10%", left: "265px" }}
          onMouseEnter={() => {}}
          onMouseLeave={handleClose}
        >
          <ul className="px-1 bg-grey">
            <li className="text-md dark:bg-gray-200 dark:hover:bg-gray-500  text-black-100 pe-3 px-3 mt-1 mb-1 rounded fw-bold">
              <button onClick={getReport}>Reports</button>
            </li>
            {/* Add other dropdown items here */}

            <li className="text-md dark:bg-gray-200 dark:hover:bg-gray-500   text-gray-700 pe-3 px-3 mt-1 mb-1 rounded fw-bold">
              <button onClick={addMarks}>Add New marks</button>
            </li>
          </ul>
        </div>,
        document.body
      )
    : null;
};

export default AcademicDropdown;
