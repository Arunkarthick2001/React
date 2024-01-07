import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      {/* <!-- Image and text --> */}
      <div className="row">
        <div className=" col-sm-6  bg-body-secondary">
          <div className="row">
            <div className="col-sm-2">
              <Link to="/home" className="fs-5 text-danger">
                Home
              </Link>
            </div>
            <div className="col-sm-3">
              <Link to="/academic" className="fs-5 text-danger">
                Academic
              </Link>
            </div>
            <div className="col-sm-3">
              <Link to="/studentdetails" className="fs-5 text-danger">
                Student details
              </Link>
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
