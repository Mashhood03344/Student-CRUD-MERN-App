// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


///////////////////////////////////////////////////////////////TWO COMPONENTS CREATE STUDENT AND STUDENT LIST /////////////////////////

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { Routes, Route, Link } from "react-router-dom";
// import CreateStudent from "./components/CreateStudent";
// import EditStudent from "./components/EditStudent";
// import StudentList from "./components/StudentList";
// function App() {
//   return (
//     <div className="App">
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container">
//           <Link to={"/create-student"} className="nav-link">
//             React MERN Stack App
//           </Link>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to={"/create-student"} className="nav-link">
//                   Create Student
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to={"/student-list"} className="nav-link">
//                   Student List
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="container mt-5">
//         <div className="wrapper">
//           <Routes>
//             <Route exact path="/create-student" element={<CreateStudent />} />
//             <Route exact path="/edit-student/:id" element={<EditStudent />} />
//             <Route exact path="/student-list" element={<StudentList />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;


////////////////////////////////////////////////////THREE COMPONENTS CREATE STUDENT, STUDENT LIST AND FIND STUDENT/////////////////////////

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { Routes, Route, Link } from "react-router-dom";
// import CreateStudent from "./components/CreateStudent";
// import EditStudent from "./components/EditStudent";
// import StudentList from "./components/StudentList";
// import FindStudent from "./components/FindStudent"; // Import the FindStudent component

// function App() {
//   return (
//     <div className="App">
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container">
//           <Link to={"/create-student"} className="nav-link">
//             React MERN Stack App
//           </Link>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to={"/create-student"} className="nav-link">
//                   Create Student
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to={"/student-list"} className="nav-link">
//                   Student List
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to={"/find-student"} className="nav-link">
//                   Find Student
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="container mt-5">
//         <div className="wrapper">
//           <Routes>
//             <Route exact path="/create-student" element={<CreateStudent />} />
//             <Route exact path="/edit-student/:id" element={<EditStudent />} />
//             <Route exact path="/student-list" element={<StudentList />} />
//             <Route exact path="/find-student" element={<FindStudent />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

//////////////////FOUR COMPONENTS CREATE STUDENT, STUDENT LIST, FIND STUDENT AND GET STUDENTS ASCENDING ORDER/////////////////////////


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CreateStudent from "./components/CreateStudent";
import EditStudent from "./components/EditStudent";
import StudentList from "./components/StudentList";
import FindStudent from "./components/FindStudent";
import GetStudentsAscending from "./components/GetStudentsAscending"; // Import the GetStudentsAscending component

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to={"/create-student"} className="nav-link">
            React MERN Stack App
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/find-student"} className="nav-link">
                  Find Student
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/get-students-ascending"} className="nav-link">
                  Get Students Ascending
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="wrapper">
          <Routes>
            <Route exact path="/create-student" element={<CreateStudent />} />
            <Route exact path="/edit-student/:id" element={<EditStudent />} />
            <Route exact path="/student-list" element={<StudentList />} />
            <Route exact path="/find-student" element={<FindStudent />} />
            <Route
              exact
              path="/get-students-ascending"
              element={<GetStudentsAscending />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
