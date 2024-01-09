import React from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
const StudentDropdown = ({ isOpen, handleClose }) => {
  const navigate = useNavigate();
  const getStudentDetails = () => {
    navigate("/studentdetails", {
      state: { new: false },
    });
  };
  const addNewStudent = () => {
    navigate("/studentdetails", {
      state: { new: true },
    });
  };
  return isOpen
    ? createPortal(
        <div
          className="bg-white   list-none divide-y divide-gray-100 rounded shadow my-0 absolute"
          style={{ top: "10%", left: "120px" }}
          onMouseEnter={() => {}}
          onMouseLeave={handleClose}
        >
          <ul className="px-1 bg-grey">
            <li className="text-md dark:bg-gray-200 dark:hover:bg-gray-500  text-black-100 pe-3 px-3 mt-1 mb-1 rounded fw-bold">
              <button onClick={getStudentDetails}>Stdent details</button>
            </li>
            {/* Add other dropdown items here */}

            <li className="text-md dark:bg-gray-200 dark:hover:bg-gray-500   text-gray-700 pe-3 px-3 mt-1 mb-1 rounded fw-bold">
              <button onClick={addNewStudent}>Ad new stud</button>
            </li>
          </ul>
        </div>,
        document.body
      )
    : null;
};

export default StudentDropdown;
