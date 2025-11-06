import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

import HtmlCourse from "./components/subjects/HtmlCourse";
import CssCourse from "./components/subjects/CssCourse";
import BootstrapCourse from "./components/subjects/BootstrapCourse";
import JavascriptCourse from "./components/subjects/JavascriptCourse";
import ReactCourse from "./components/subjects/ReactCourse";
import SqlCourse from "./components/subjects/SqlCourse";
import JavaCourse from "./components/subjects/JavaCourse";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<HtmlCourse />} />
        <Route path="/css" element={<CssCourse />} />
        <Route path="/bootstrap" element={<BootstrapCourse/>} />
        <Route path="/javascript" element={<JavascriptCourse />} />
        <Route path="/react" element={<ReactCourse />} />
        <Route path="/sql" element={<SqlCourse />} />
        <Route path="/java" element={<JavaCourse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
