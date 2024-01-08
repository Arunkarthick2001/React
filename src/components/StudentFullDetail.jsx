import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../Database/firebase";

const StudentFullDetail = () => {
  const location = useLocation();
  // const { jsonData } = location.state || {};
  const [jsonData, setJsonData] = useState(location.state.jsonData);
  const [edit, setEdit] = useState(false);
  // const []
  const [formData, setFormData] = useState({
    name: jsonData.name || "",
    place: jsonData.place || "",
    cls: jsonData.cls || "",
    rollNumber: jsonData.rollNumber || "",
    fatherName: jsonData.fatherName || "",
    motherName: jsonData.motherName || "",
    phoneNumber: jsonData.phoneNumber || "",
    address: jsonData.address || "",
    marks: jsonData.marks || "",
  });
  const onEdit = () => {
    setEdit(!edit);
  };
  const onSave = async (rollNumber) => {
    const newItems = {
      name: formData.name,
      place: formData.place,
      cls: formData.cls,
      rollNumber: formData.rollNumber,
      fatherName: formData.fatherName,
      motherName: formData.motherName,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      marks: formData.marks,
    };

    // const freshList =  newItems];
    await setDoc(doc(db, "studentdetails", rollNumber), newItems);
    // console.log("freshdata", freshList);
    setJsonData(newItems);
    // console.log(jsonData);
    // localStorage.setItem("masterdata", JSON.stringify(freshList));
    setEdit(!edit);
  };
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

  return (
    <>
      {!edit ? (
        <div>
          <button onClick={onEdit}>Edit</button>
          <br></br>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Name:</label>
                <p>{jsonData.name}</p>
              </div>

              <div className="form-group">
                <label>Roll Number:</label>
                <p>{jsonData.rollNumber}</p>
              </div>

              <div className="form-group">
                <label>Class:</label>
                <p>{jsonData.cls}</p>
              </div>

              <div className="form-group">
                <label>Place:</label>
                <p>{jsonData.place}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Father's Name:</label>
                <p>{jsonData.fatherName}</p>
              </div>

              <div className="form-group">
                <label>Mother's Name:</label>
                <p>{jsonData.motherName}</p>
              </div>

              <div className="form-group">
                <label>Phone Number:</label>
                <p>{jsonData.phoneNumber}</p>
              </div>

              <div className="form-group">
                <label>Address:</label>
                <p>{jsonData.address}</p>
              </div>

              <div className="form-group">
                <label>Marks:</label>
                <p>{jsonData.marks}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="editItems">
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="name">Name:</label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleInputChange}
              />

              <label htmlFor="rollNumber">Roll Number:</label>
              <input
                name="rollNumber"
                type="text"
                className="form-control"
                placeholder="Enter roll number"
                value={formData.rollNumber}
                onChange={handleInputChange}
              />

              <label htmlFor="cls">Class:</label>
              <input
                name="cls"
                type="text"
                className="form-control"
                placeholder="Enter class"
                value={formData.cls}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="place">Place:</label>
              <input
                name="place"
                type="text"
                className="form-control"
                placeholder="Enter place"
                value={formData.place}
                onChange={handleInputChange}
              />

              <label htmlFor="fatherName">Father's Name:</label>
              <input
                name="fatherName"
                type="text"
                className="form-control"
                placeholder="Enter father's name"
                value={formData.fatherName}
                onChange={handleInputChange}
              />

              <label htmlFor="motherName">Mother's Name:</label>
              <input
                name="motherName"
                type="text"
                className="form-control"
                placeholder="Enter mother's name"
                value={formData.motherName}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                name="phoneNumber"
                type="text"
                className="form-control"
                placeholder="Enter phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />

              <label htmlFor="address">Address:</label>
              <input
                name="address"
                type="text"
                className="form-control"
                placeholder="Enter address"
                value={formData.address}
                onChange={handleInputChange}
              />

              <label htmlFor="marks">Marks:</label>
              <input
                name="marks"
                type="text"
                className="form-control"
                placeholder="Enter marks"
                value={formData.marks}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button onClick={() => onSave(jsonData.rollNumber)}>Save</button>
        </div>
      )}
    </>
  );
};

export default StudentFullDetail;
