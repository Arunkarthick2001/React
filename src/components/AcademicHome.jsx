import React from "react";
import { Link } from "react-router-dom";

const AcademicHome = () => {
  return (
    <>
      <div>
        <Link to="/academichome/academic">Reports</Link>
        <br />
        <Link to="/academichome/addmarks">Add marks</Link>
      </div>
    </>
  );
};

export default AcademicHome;
