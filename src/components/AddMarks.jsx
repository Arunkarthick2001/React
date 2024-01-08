import { doc, setDoc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../Database/firebase";
const AddMarks = () => {
  const [testName, setTestName] = useState("");
  var year = new Date().getFullYear();
  const [formData, setFormData] = useState({
    english: 0,
    math: 0,
    science: 0,
    history: 0,
    rollNumber: "",
  });
  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormData((prevData) => {
      console.log("Previous State:", prevData);

      // Updating state based on the previous state
      return {
        ...prevData,
        [name]: value,
      };
    });
    // console.log(prevData);
  };
  const onSave = async (rollNumber) => {
    const newItems = {
      [rollNumber]: {
        english: formData.english,
        math: formData.math,
        science: formData.science,
        history: formData.history,
      },
    };
    console.log(newItems);

    // const freshList =  newItems];
    await updateDoc(doc(db, `marks/${year}/1A/${testName}`), newItems);
    setFormData({
      english: 0,
      math: 0,
      science: 0,
      history: 0,
      rollNumber: "",
    });
  };
  return (
    <>
      <select
        className="form-control"
        id="exampleFormControlSelect1"
        value={testName}
        onChange={(e) => setTestName(e.target.value)}
      >
        <option>-Select-</option>
        <option>midterm-I</option>
        <option>midterm-II</option>
        <option>quarterly</option>
        <option>halfyearly</option>
        <option>annual</option>
        <option>public</option>
        <option>revision</option>
      </select>
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="rollNumber">Roll Number:</label>
          <input
            name="rollNumber"
            type="text"
            className="form-control"
            placeholder="Enter roll number"
            value={formData.rollNumber}
            onChange={handleInputChange}
          />
          <label htmlFor="name">English mark:</label>
          <input
            name="english"
            type="number"
            className="form-control"
            placeholder="Enter english mark"
            value={formData.english}
            onChange={handleInputChange}
          />

          <label htmlFor="math">Math:</label>
          <input
            name="math"
            type="number"
            className="form-control"
            placeholder="Enter math"
            value={formData.math}
            onChange={handleInputChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="science">science:</label>
          <input
            name="science"
            type="number"
            className="form-control"
            placeholder="Enter science"
            value={formData.science}
            onChange={handleInputChange}
          />

          <label htmlFor="fatherName">History</label>
          <input
            name="history"
            type="number"
            className="form-control"
            placeholder="Enter history"
            value={formData.history}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button onClick={() => onSave(formData.rollNumber)}>Save</button>
    </>
  );
};

export default AddMarks;
