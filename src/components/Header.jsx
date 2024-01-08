import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Header = () => {
  const [isAcademicDropdownOpen, setAcademicDropdownOpen] = useState(false);
  const [isStudentDropdownOpen, setStudentDropdownOpen] = useState(false);

  const handleAcademicDropdownToggle = (isOpen) => {
    setAcademicDropdownOpen(isOpen);
  };

  const handleStudentDropdownToggle = (isOpen) => {
    setStudentDropdownOpen(isOpen);
  };

  const handleAcademicDropdownClose = () => {
    setAcademicDropdownOpen(false);
  };

  const handleStudentDropdownClose = () => {
    setStudentDropdownOpen(false);
  };
  const navigate = useNavigate();
  const addNewStudent = () => {
    navigate("/studentdetails", {
      state: { new: true },
    });
  };
  const getStudentDetails = () => {
    navigate("/studentdetails", {
      state: { new: false },
    });
  };
  return (
    <>
      {/* <!-- Image and text --> */}
      <div className="row">
        <div className="col-sm-6 bg-body-secondary">
          <div className="row">
            <div className="col-sm-2">
              <Link to="/home" className="fs-5 text-danger">
                Home
              </Link>
            </div>
            <div className="col-sm-3">
              <Dropdown
                show={isAcademicDropdownOpen}
                onMouseEnter={() => handleAcademicDropdownToggle(true)}
                // onMouseLeave={() => handleAcademicDropdownToggle(false)}
              >
                <Dropdown.Toggle
                  variant="link"
                  id="dropdown-academic"
                  className="fs-5 text-danger"
                >
                  Academic scores
                </Dropdown.Toggle>

                <Dropdown.Menu
                  onMouseEnter={() => handleAcademicDropdownToggle(true)}
                  // onMouseLeave={handleAcademicDropdownClose}
                >
                  <Dropdown.Item
                    as={Link}
                    to="/academichome"
                    // onMouseEnter={() => handleAcademicDropdownToggle(true)}
                    onMouseLeave={handleAcademicDropdownClose}
                  >
                    Academic Home
                  </Dropdown.Item>
                  {/* Add more dropdown items as needed */}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-sm-3">
              <Dropdown
                show={isStudentDropdownOpen}
                onMouseEnter={() => handleStudentDropdownToggle(true)}
                // onMouseLeave={() => handleStudentDropdownToggle(false)}
              >
                <Dropdown.Toggle
                  variant="link"
                  id="dropdown-student"
                  className="fs-5 text-danger"
                >
                  Student details
                </Dropdown.Toggle>

                <Dropdown.Menu
                  onMouseEnter={() => handleStudentDropdownToggle(true)}
                  onMouseLeave={handleStudentDropdownClose}
                >
                  <Dropdown.Item onClick={getStudentDetails}>
                    Student Details
                  </Dropdown.Item>
                  <Dropdown.Item onClick={addNewStudent}>
                    Add new student
                  </Dropdown.Item>
                  {/* Add more dropdown items as needed */}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-sm-3">
              <Link to="/public" className="fs-5 text-danger">
                Public
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6 bg-body-secondary"></div>
      </div>
    </>
  );
};

export default Header;
