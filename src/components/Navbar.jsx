import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/Sofia.png" alt="Sofia Logo" className="logo" />
          <h1 className="navbar-title">
            Start Learning <span>Java Full Stack</span> with Sofia
          </h1>
        </div>

        <div className="subject-box">
          <NavLink to="/" className="subject-btn">
            🏠 Home
          </NavLink>
          <NavLink to="/html" className="subject-btn">
            HTML
          </NavLink>
          <NavLink to="/css" className="subject-btn">
            CSS
          </NavLink>
          <NavLink to="/bootstrap" className="subject-btn">
            Bootstrap
          </NavLink>
          <NavLink to="/javascript" className="subject-btn">
            JavaScript
          </NavLink>
          <NavLink to="/react" className="subject-btn">
            React
          </NavLink>
          <NavLink to="/sql" className="subject-btn">
            SQL
          </NavLink>
          <NavLink to="/java" className="subject-btn">
            Java
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
