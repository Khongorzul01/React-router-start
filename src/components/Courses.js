import React from "react";
import { NavLink } from "react-router-dom";
import CoursesContent from "./courses/CoursesContent";
import { CSSCourses, HTMLCourses, JSCourses } from "../data/courses";
import { Routes, Route } from "react-router-dom";

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li>
          <NavLink to="/courses/html">HTML</NavLink>
        </li>
        <li>
          <NavLink to="/courses/css">CSS</NavLink>
        </li>
        <li>
          <NavLink to="/courses/javascript">JavaScript</NavLink>
        </li>
      </ul>
    </div>

    {/* Write routes here... */}

    <Routes>
      <Route
        path={"/html"}
        element={<CoursesContent data={HTMLCourses} />}
      ></Route>
      <Route path="/css" element={<CoursesContent data={CSSCourses} />}></Route>
      <Route
        path="/javascript"
        element={<CoursesContent data={JSCourses} />}
      ></Route>
    </Routes>
  </div>
);

export default Courses;
