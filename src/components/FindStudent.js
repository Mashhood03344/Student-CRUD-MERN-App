// src/components/FindStudent.js

//////////////////////////////////////////////////////////////FIND BY USING NAME AND EMAIL////////////////////////////////////////////////////

import React, { useState } from "react";
import axios from "axios";

function FindStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [foundStudent, setFoundStudent] = useState(null);

  const findStudent = async () => {
    try {
      const response = await axios.post("http://localhost:4000/students/find-student", {
        name: name,
        email: email,
      });

      // Assuming the API returns the found student as 'data'
      setFoundStudent(response.data.data);
    } catch (error) {
      console.error("Error finding student:", error);
    }
  };

  return (
    <div>
      <h2>Find Student</h2>
      <br></br>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br></br>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br></br>
        <button type="button" onClick={findStudent}>
          Find Student
        </button>
        <br></br>
        <br></br>
      </form>
      {foundStudent && (
        <div>
          <h3>Found Student:</h3>
          <p>Name: {foundStudent.name}</p>
          <p>Email: {foundStudent.email}</p>
          <p>Roll no: {foundStudent.rollno}</p>
        </div>
      )}
    </div>
  );
}

export default FindStudent;

