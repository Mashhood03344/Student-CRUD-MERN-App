//////////////////FOUR COMPONENTS CREATE STUDENT, STUDENT LIST, FIND STUDENT AND GET STUDENTS ASCENDING ORDER/////////////////////////


// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { Routes, Route, Link, Navigate } from "react-router-dom";
// import CreateStudent from "./components/CreateStudent";
// import EditStudent from "./components/EditStudent";
// import StudentList from "./components/StudentList";
// import FindStudent from "./components/FindStudent";
// import GetStudentsAscending from "./components/GetStudentsAscending";
// import Login from "./components/Login";
// import LoginHomePage from "./components/LoginHomePage";
// import { useNavigate } from 'react-router-dom';

// function App() {
//   const [token, setToken] = useState(localStorage.getItem('token') || null);
//   const navigate = useNavigate();

//   const handleLogin = (newToken) => {
//     setToken(newToken);
//     localStorage.setItem('token', newToken);
//     navigate('/login-home');
//   };

//   const handleLogout = () => {
//     setToken(null);
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <div className="container mt-5">
//       {token ? (
//         // Render authenticated content with navigation bar
//         <>
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="container">
//             <Link to={"/login-home"} className="navbar-brand">
//                React MERN Stack App
//              </Link>             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav ms-auto">
//                 <li className="nav-item">
//                   <Link to={"/create-student"} className="nav-link">
//                     Create Student
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to={"/student-list"} className="nav-link">
//                     Student List
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to={"/find-student"} className="nav-link">
//                     Find Student
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to={"/get-students-ascending"} className="nav-link">
//                     Get Students Ascending
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <button className="nav-link" onClick={handleLogout}>
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           </nav>
//           <div className="wrapper">
//             <Routes>
//             <Route
//             path="/login"
//             element={<Login setToken={handleLogin} />}
//           />
//           {token ? (
//             <Route
//               path="/login-home"
//               element={<LoginHomePage />}
//             />
//           ) : (
//             <Route
//               path="/"
//               element={<Navigate to="/login" replace />}
//             />
//           )}
//           <Route
//             path="/create-student"
//             element={token ? <CreateStudent /> : <Navigate to="/login" />}
//           />
//           <Route
//             path="/edit-student/:id"
//             element={token ? <EditStudent /> : <Navigate to="/login" />}
//           />
//           <Route
//             path="/student-list"
//             element={token ? <StudentList /> : <Navigate to="/login" />}
//           />
//           <Route
//             path="/find-student"
//             element={token ? <FindStudent /> : <Navigate to="/login" />}
//           />
//           <Route
//             path="/get-students-ascending"
//             element={token ? <GetStudentsAscending /> : <Navigate to="/login" />}
//           />
//             </Routes>
//           </div>
//         </>
//       ) : (
//         // Render login page
//         <Login setToken={handleLogin} />
//       )}
//     </div>
//   );
// }

// export default App;


// src/App.js
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes, Route, Link } from 'react-router-dom';
// import CreateStudent from './components/CreateStudent';
// import EditStudent from './components/EditStudent';
// import StudentList from './components/StudentList';
// import FindStudent from './components/FindStudent';
// import GetStudentsAscending from './components/GetStudentsAscending';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import LoginHomePage from './components/LoginHomePage';

// function App() {
//   const [token, setToken] = useState(localStorage.getItem('token') || null);
//   const [loginMode, setLoginMode] = useState(true);

//   const handleLogout = () => {
//     // Clear the token from state and localStorage
//     setToken(null);
//     localStorage.removeItem('token');
//   };

//   return (
//     <div className="container mt-5">
//       {token ? (
//         <div>
//           {/* Authenticated content */}
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//               <Link className="navbar-brand" to="/login-home">
//                 Home
//               </Link>
//               <div className="collapse navbar-collapse" id="navbarNav">
//                 <ul className="navbar-nav">
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/create-student">
//                       Create Student
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/student-list">
//                       Student List
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/find-student">
//                       Find Student
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/get-students-ascending">
//                       Get Students Ascending
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <button className="btn btn-link nav-link" onClick={handleLogout}>
//                       Logout
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//           <Routes>
//             <Route path="/create-student" element={<CreateStudent />} />
//             <Route path="/edit-student/:id" element={<EditStudent />} />
//             <Route path="/student-list" element={<StudentList />} />
//             <Route path="/find-student" element={<FindStudent />} />
//             <Route path="/get-students-ascending" element={<GetStudentsAscending />} />
//             <Route path="/login-home" element={<LoginHomePage />} />
//           </Routes>
//         </div>
//       ) : loginMode ? (
//         // Render login page
//         <Login setToken={setToken} setSignupMode={() => setLoginMode(false)} />
//       ) : (
//         // Render signup page
//         <Signup setToken={setToken} setLoginMode={() => setLoginMode(true)} />
//       )}
//     </div>
//   );
// }

// export default App;


// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';
import StudentList from './components/StudentList';
import FindStudent from './components/FindStudent';
import GetStudentsAscending from './components/GetStudentsAscending';
import Login from './components/Login';
import Signup from './components/Signup';
import LoginHomePage from './components/LoginHomePage';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const handleLogout = () => {
    // Clear the token from state and localStorage
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <div className="container mt-5">
      {token ? (
        // Authenticated content
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/login-home">
                Home
              </Link>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/create-student">
                      Create Student
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/student-list">
                      Student List
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/find-student">
                      Find Student
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/get-students-ascending">
                      Get Students Ascending
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-link nav-link" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/create-student" element={<CreateStudent />} />
            <Route path="/edit-student/:id" element={<EditStudent />} />
            <Route path="/student-list" element={<StudentList />} />
            <Route path="/find-student" element={<FindStudent />} />
            <Route path="/get-students-ascending" element={<GetStudentsAscending />} />
            <Route path="/login-home" element={<LoginHomePage />} />
          </Routes>
        </div>
      ) : (
        // Render login page
        <Login setToken={setToken} />
      )}
    </div>
  );
}

export default App;








