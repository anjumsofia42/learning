import React from "react";



const Layout = ({ children }) => {
  return (
    <div className="javascript-page-layout">
      {/* 🧭 Left Navbar */}
      <nav className="navbar-section bg-dark text-white">
        <div className="p-3">
          <h4 className="text-warning mb-4">📘 Full Stack with Sofia</h4>
          <ul className="nav flex-column">
            <li className="nav-item"><a href="/" className="nav-link text-light">🏠 Home</a></li>
            <li className="nav-item"><a href="/html" className="nav-link text-light">🌐 HTML</a></li>
            <li className="nav-item"><a href="/css" className="nav-link text-light">🎨 CSS</a></li>
            <li className="nav-item"><a href="/bootstrap" className="nav-link text-light">🧱 Bootstrap</a></li>
            <li className="nav-item"><a href="/javascript" className="nav-link text-light">⚡ JavaScript</a></li>
            <li className="nav-item"><a href="/react" className="nav-link text-light">⚛️ React</a></li>
            <li className="nav-item"><a href="/sql" className="nav-link text-light">🧩 SQL</a></li>
            <li className="nav-item"><a href="/java" className="nav-link text-light">☕ Java</a></li>
          </ul>
        </div>
      </nav>

      {/* 🧠 Main content (your subject content) */}
      <div className="javascript-course-container">
        {children}
      </div>
    </div>
  );
};

export default Layout;
