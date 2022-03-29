import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import Teachers from "./Teachers";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./NotFound";
import Featured from "./Featured";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="courses/*" element={<Courses />}></Route>
          <Route
            path={"/courses"}
            element={<Navigate to="/courses/html" />}
          ></Route>
          <Route path="/teachers" element={<Teachers />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/teachers/:topic/:name" element={<Featured />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
