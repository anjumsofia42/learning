import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Sofia’s Java Full Stack Learning Platform</h1>
        <p>Your one-stop journey to master Web Development — from HTML to Java!</p>
      </header>

      <section className="courses-section">
        <div className="course-card">
          <h3>HTML</h3>
          <p>Build the structure of your web pages using HTML tags.</p>
          <Link to="/html" className="start-btn">Start Learning</Link>
        </div>
        <div className="course-card">
          <h3>CSS</h3>
          <p>Style your pages beautifully using modern CSS techniques.</p>
          <Link to="/css" className="start-btn">Start Learning</Link>
        </div>
        <div className="course-card">
          <h3>Bootstrap</h3>
          <p>Build responsive, mobile-first websites quickly using Bootstrap’s</p>
          <Link to="/bootstrap" className="start-btn">
          Start Learning
          </Link>
        </div>
        <div className="course-card">
          <h3>JavaScript</h3>
          <p>Make your websites interactive with JavaScript.</p>
          <Link to="/javascript" className="start-btn">Start Learning</Link>
        </div>
        <div className="course-card">
          <h3>React</h3>
          <p>Build dynamic user interfaces with React.js.</p>
          <Link to="/react" className="start-btn">Start Learning</Link>
        </div>
        <div className="course-card">
          <h3>SQL</h3>
          <p>Learn how to manage and query data with SQL.</p>
          <Link to="/sql" className="start-btn">Start Learning</Link>
        </div>
        <div className="course-card">
          <h3>Java</h3>
          <p>Master backend development and APIs using Java.</p>
          <Link to="/java" className="start-btn">Start Learning</Link>
        </div>
        <div className="course-card">
          <h3>MySql</h3>
          <p>MySQL is an open-source relational database management system (RDBMS).</p>
          <Link to="/mysql" className="start-btn">Start Learning</Link>
        </div>
      </section>

      <section className="about-section">
        <h2>About This Course</h2>
        <p>
          This Full Stack Course is designed to guide you step-by-step through both frontend and backend development.
          Learn practical skills with real examples and projects to become job-ready.
        </p>
      </section>

      
    </div>
  );
}
