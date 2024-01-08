import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../Database/firebase";
import { useNavigate, useLocation } from "react-router-dom";
const StudentDetails = () => {
  const location = useLocation();
  var tabShow = location.state.new;
  const [cls, setCls] = useState("");
  const [sec, setSec] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [Sdata, setData] = useState([]);
  const [showtable, setShowtable] = useState(false);
  var masterData;
  useEffect(() => {}, []);
  const onInit = async () => {
    // const q = query(collection(db, "admin"));
    const querySnapshot = await getDocs(collection(db, "studentdetails"));
    const firebaseData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setMaster(firebaseData);

    // console.log(firebaseData);
  };
  const setMaster = (Mdata) => {
    masterData = Mdata;
  };
  const navigate = useNavigate();
  const getStudentDetails = () => {
    console.log("gettd nnn");
    const getDetails = async () => {
      const querySnapshot = await getDocs(collection(db, "studentdetails"));
      const firebaseData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMaster(firebaseData);

      console.log(masterData);
      console.log(cls, sec);
      const listItems = masterData.filter((items) =>
        !rollNumber
          ? items.cls === cls + sec
          : items.cls === cls + sec && items.rollNumber === rollNumber
      );
      if (listItems.length) {
        setData(listItems);
        console.log(Sdata);
        setShowtable(true);
      } else {
        alert("No record founf");
        setShowtable(false);
      }
      console.log(listItems);
    };

    const onTableSelect = (dat) => {
      const dataToPass = Sdata.filter((item) => item.rollNumber === dat);
      console.log(dataToPass);
      navigate("/studentdetails/studentfulldetail", {
        state: { jsonData: dataToPass[0] },
      });
    };
    return (
      <>
        <div className="row">
          <div className="col-2">
            <label htmlFor="exampleFormControlSelect1">
              Select class and give num
            </label>
          </div>
          <div className="col-2">
            <div className="form-group">
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                value={cls}
                onChange={(e) => setCls(e.target.value)}
              >
                <option>-Select-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
          </div>
          <div className="col-2">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              value={sec}
              onChange={(e) => setSec(e.target.value)}
            >
              <option>-Select-</option>
              <option value={"A"}>A</option>
              <option value={"B"}>B</option>
              <option value={"C"}>C</option>
            </select>
          </div>
          <div className="col-6">
            <input
              type="text"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
            />

            <button onClick={getDetails}>get details</button>
          </div>
        </div>
        ;
        {showtable ? (
          <div>
            <table className="table table-striped-columns">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Roll Number</th>
                  <th>Class</th>
                  <th>Place</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {Sdata.map((item) => (
                  <tr
                    key={item.rollNumber}
                    onClick={() => onTableSelect(item.rollNumber)}
                  >
                    <td>{item.name}</td>
                    <td>{item.rollNumber}</td>
                    <td>{item.cls}</td>
                    <td>{item.place}</td>
                    <td>{item.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p></p>
        )}
      </>
    );
  };
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    cls: "",
    rollNumber: "",
    fatherName: "",
    motherName: "",
    phoneNumber: "",
    address: "",
    marks: "",
  });
  const addNewStudent = () => {
    const handleInputChange = (e) => {
      // console.log(e.target);
      const { name, value } = e.target;
      setFormData((prevData) => {
        // console.log("Previous State:", prevData);

        // Updating state based on the previous state
        return {
          ...prevData,
          [name]: value,
        };
      });

      // console.log(prevData);
    };
    const onSave = async (rollNumber) => {
      console.log(rollNumber);
      const querySnapshot = await getDocs(collection(db, "studentdetails"));
      const firebaseData = querySnapshot.docs.map((doc) => doc.id);
      const isIdPresent = firebaseData.includes(rollNumber);
      console.log(isIdPresent);
      if (!isIdPresent) {
        await setDoc(doc(db, "studentdetails", rollNumber), formData);
        setFormData({
          name: "",
          place: "",
          cls: "",
          rollNumber: "",
          fatherName: "",
          motherName: "",
          phoneNumber: "",
          address: "",
          marks: "",
        });
      } else {
        alert("rollnum already exixts");
      }
      onInit();
    };
    return (
      <>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="name">Name:</label>
            <input
              required
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleInputChange}
            />

            <label htmlFor="rollNumber">Roll Number:</label>
            <input
              required
              name="rollNumber"
              type="text"
              className="form-control"
              placeholder="Enter roll number"
              value={formData.rollNumber}
              onChange={handleInputChange}
            />

            <label htmlFor="cls">Class:</label>
            <input
              required
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
              required
              name="place"
              type="text"
              className="form-control"
              placeholder="Enter place"
              value={formData.place}
              onChange={handleInputChange}
            />

            <label htmlFor="fatherName">Father's Name:</label>
            <input
              required
              name="fatherName"
              type="text"
              className="form-control"
              placeholder="Enter father's name"
              value={formData.fatherName}
              onChange={handleInputChange}
            />

            <label htmlFor="motherName">Mother's Name:</label>
            <input
              required
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
              required
              name="phoneNumber"
              type="text"
              className="form-control"
              placeholder="Enter phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />

            <label htmlFor="address">Address:</label>
            <input
              required
              name="address"
              type="text"
              className="form-control"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleInputChange}
            />

            <label htmlFor="marks">Marks:</label>
            <input
              required
              name="marks"
              type="text"
              className="form-control"
              placeholder="Enter marks"
              value={formData.marks}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button onClick={() => onSave(formData.rollNumber)}>Save</button>
      </>
    );
  };

  return <>{!tabShow ? getStudentDetails() : addNewStudent()}</>;
};

export default StudentDetails;
