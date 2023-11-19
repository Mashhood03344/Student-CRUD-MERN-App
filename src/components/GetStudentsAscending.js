import React, { useState, useEffect } from "react";
import axios from "axios";

function GetStudentsAscending() {
  const [sortedStudents, setSortedStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const getStudentsAscending = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:4000/students/get-students-ascending");
      if (response.data.data) {
        setSortedStudents(response.data.data);
      } else {
        console.error("No sorted students found.");
      }
    } catch (error) {
      console.error("Error getting sorted students:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudentsAscending();
  }, []);

  return (
    <div>
      <h2>Get Students in Ascending Order</h2>
      {/* <button onClick={getStudentsAscending} disabled={loading}>
        {loading ? "Loading..." : "Get Sorted Students"}
      </button> */}

      {sortedStudents.length > 0 && (
        <div>
            <br></br>
          <h3>Sorted Students:</h3>
          <br></br>
          <ul>
            {sortedStudents.map((student) => (
              <li key={student._id}>
                <p>Name: {student.name}</p>
                <p>Email: {student.email}</p>
                <p>Roll no: {student.rollno}</p>
              </li>
            ))}
          </ul>
          
        </div>
      )}
    </div>
  );
}

export default GetStudentsAscending;
