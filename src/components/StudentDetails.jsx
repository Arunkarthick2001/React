import React, { useEffect, useState } from "react";
import data from "../data/data";
import { useNavigate } from "react-router-dom";
const StudentDetails = () => {
  const [cls, setCls] = useState("");
  const [sec, setSec] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [Sdata, setData] = useState([]);
  const [showtable, setShowtable] = useState(false);
  var masterData;
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("masterdata"))) {
      setMaster(JSON.parse(localStorage.getItem("masterdata")));
    } else {
      setMaster(localStorage.setItem("masterdata", JSON.stringify(data)));
    }
  });
  const setMaster = (Mdata) => {
    masterData = Mdata;
  };
  const getDetails = () => {
    console.log(masterData);
    const listItems = masterData.filter((items) =>
      !rollNumber
        ? items.class === cls + sec
        : items.class === cls + sec && items.rollNumber === rollNumber
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
  const navigate = useNavigate();
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
                  <td>{item.class}</td>
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

export default StudentDetails;
