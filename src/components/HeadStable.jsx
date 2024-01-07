import React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Public from "./Public";
import Academic from "./Academic";
import StudentDetails from "./StudentDetails";
import StudentFullDetail from "./StudentFullDetail";

const HeadStable = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/public" element={<Public />}></Route>
        <Route path="/academic" element={<Academic />}></Route>
        <Route path="/studentdetails">
          <Route index element={<StudentDetails />}></Route>
          <Route
            path="studentfulldetail"
            element={<StudentFullDetail />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};

export default HeadStable;
