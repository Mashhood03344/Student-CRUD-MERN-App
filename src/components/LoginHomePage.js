// src/components/LoginHomePage.js

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import CreateStudent from "./CreateStudent";
import EditStudent from "./EditStudent";
import StudentList from "./StudentList";
import FindStudent from "./FindStudent";
import GetStudentsAscending from "./GetStudentsAscending";

function LoginHomePage(){

    return(
        <div>

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

            <div className="container mt-5">
        <div className="jumbotron">
            <h1 className="display-4">Welcome to Student CRUD APP</h1>
            <p className="lead">
            Welcome to the Home Page Authenticated User.
            </p>
      </div>
    </div>
        </div>
    );
};

export default LoginHomePage;

