import React, { useState } from "react";
import academic from "../data/academic";
import { query, collection, getDocs } from "firebase/firestore";
import { db } from "../Database/firebase";

const Academic = () => {
  const [cls, setCls] = useState("");
  const [sec, setSec] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [Sdata, setData] = useState([]);
  const [showtable, setShowtable] = useState(false);
  var masterData = academic;
  const getMarks = async () => {
    console.log(masterData);
    const listItems = masterData.filter((items) =>
      !rollNumber
        ? items.class === cls + sec
        : items.class === cls + sec && items.rollNumber === rollNumber
    );
    const q = query(collection(db, "marks", "2024", cls + sec));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
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
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const renderMarksSection = (sectionName) => {
    const checkItems = Sdata.map((student) => {
      return student.marks.filter((mark) => mark.year === selectedYear);
    });
    var render = false;
    for (const item of checkItems) {
      if (item.length !== 0) render = true;
      else render = false;
    }
    return (
      <>
        {showtable ? (
          <div key={sectionName}>
            <h3 className="bg-info-subtle">
              {sectionName} Marks - Year {selectedYear}
            </h3>
            {render ? (
              <div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Math</th>
                      <th>English</th>
                      <th>Science</th>
                      <th>History</th>
                      <th>edit/delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Sdata.map((student) => (
                      <tr key={student.rollNumber}>
                        <td>{student.name}</td>
                        {student.marks
                          .filter(
                            (mark) =>
                              mark.testName === sectionName &&
                              mark.year === selectedYear
                          )
                          .map((mark) => (
                            <React.Fragment key={mark.year}>
                              <td>{mark.subjectMarks.math}</td>
                              <td>{mark.subjectMarks.english}</td>
                              <td>{mark.subjectMarks.science}</td>
                              <td>{mark.subjectMarks.history}</td>
                              <td>
                                <button>edit</button> / <button>del</button>
                              </td>
                            </React.Fragment>
                          ))}
                      </tr>
                    ))}
                  </tbody>
                </table>{" "}
              </div>
            ) : (
              <p>No Data Found</p>
            )}
          </div>
        ) : (
          <p>Nodata dounn</p>
        )}
      </>
    );
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value, 10));
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

          <button onClick={getMarks}>get details</button>
        </div>
      </div>
      {showtable ? (
        <div>
          <label htmlFor="yearSelect">Select Year: </label>
          <select
            id="yearSelect"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value={new Date().getFullYear()}>Current Year</option>
            <option value={new Date().getFullYear() - 1}>
              {new Date().getFullYear() - 1}
            </option>
            <option value={new Date().getFullYear() - 2}>
              {new Date().getFullYear() - 2}
            </option>
          </select>

          {renderMarksSection("midTerm")}
          {renderMarksSection("finalExam")}
        </div>
      ) : (
        <p className="fs-1">No data</p>
      )}
    </>
  );
};

export default Academic;
