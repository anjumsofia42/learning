import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "../Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './ReactCourse.css';

const ReactCourse = () => {
  const [activeSection, setActiveSection] = useState('react-introduction');
  const navigate = useNavigate();

  return (
    <div className="react-course-container d-flex">
      {/* ======= Sidebar (Desktop) ======= */}
      <aside className="sidebar d-none d-md-block p-3">
        <h4 className="sidebar-title">React Tutorial</h4>
        <ul className="list-unstyled mt-3">
          <li onClick={() => navigate('/')}>🏠 Home</li>

          <li className={activeSection === 'react-introduction' ? 'active' : ''} onClick={() => setActiveSection('react-introduction')}>🧩 Introduction to React</li>
          <li className={activeSection === 'react-setup' ? 'active' : ''} onClick={() => setActiveSection('react-setup')}>🧱 Setting Up the React Environment</li>
          <li className={activeSection === 'react-jsx' ? 'active' : ''} onClick={() => setActiveSection('react-jsx')}>🧩 Understanding JSX (JavaScript XML)</li>
          <li className={activeSection === 'react-components' ? 'active' : ''} onClick={() => setActiveSection('react-components')}>🧱 Components in React</li>
          <li className={activeSection === 'react-props-state' ? 'active' : ''} onClick={() => setActiveSection('react-props-state')}>🔁 Props and State</li>
          <li className={activeSection === 'react-hooks' ? 'active' : ''} onClick={() => setActiveSection('react-hooks')}>🔄 React Hooks (Core Hooks)</li>
          <li className={activeSection === 'react-event-handling' ? 'active' : ''} onClick={() => setActiveSection('react-event-handling')}>📋Event Handling</li>
          <li className={activeSection === 'react-router' ? 'active' : ''} onClick={() => setActiveSection('react-router')}>🧭 React Router</li>
          <li className={activeSection === 'react-lists-keys' ? 'active' : ''} onClick={() => setActiveSection('react-lists-keys')}>🧮 Lists and Keys</li>
          <li className={activeSection === 'react-conditional-rendering' ? 'active' : ''} onClick={() => setActiveSection('react-conditional-rendering')}>⚙️ Conditional Rendering</li>
          <li className={activeSection === 'react-forms' ? 'active' : ''} onClick={() => setActiveSection('react-forms')}>🧩 Forms in React</li>
          <li className={activeSection === 'react-fetching-data' ? 'active' : ''} onClick={() => setActiveSection('react-fetching-data')}>🌍 Fetching Data (API Integration)</li>
          <li className={activeSection === 'react-advanced-hooks' ? 'active' : ''} onClick={() => setActiveSection('react-advanced-hooks')}>💡 Advanced Hooks (useReducer, useMemo, useCallback, useRef)</li>
          <li className={activeSection === 'react-performance' ? 'active' : ''} onClick={() => setActiveSection('react-performance')}>⚡ Performance Optimization (memo, Suspense, Lazy Loading)</li>
          <li className={activeSection === 'react-custom-hooks' ? 'active' : ''} onClick={() => setActiveSection('react-custom-hooks')}>🧭 Custom Hooks</li>
          <li className={activeSection === 'react-external-libraries' ? 'active' : ''} onClick={() => setActiveSection('react-external-libraries')}>🧰 React with External Libraries (UI, Animations, Charts)</li>
          <li className={activeSection === 'react-state-management' ? 'active' : ''} onClick={() => setActiveSection('react-state-management')}>🧱 State Management (Redux Toolkit / Zustand)</li>
          <li className={activeSection === 'react-error-handling' ? 'active' : ''} onClick={() => setActiveSection('react-error-handling')}>🧠 React Error Handling & Debugging Tools 🆕</li>
          <li className={activeSection === 'react-testing' ? 'active' : ''} onClick={() => setActiveSection('react-testing')}>🧩 React Testing (Jest & React Testing Library)</li>
          <li className={activeSection === 'react-routing-advanced' ? 'active' : ''} onClick={() => setActiveSection('react-routing-advanced')}>🧱 React Routing Advanced (Nested Routes, Params, Protected Routes) 🆕</li>
          <li className={activeSection === 'react-security' ? 'active' : ''} onClick={() => setActiveSection('react-security')}>🔒 Security Best Practices in React 🆕</li>
          <li className={activeSection === 'react-build-tools' ? 'active' : ''} onClick={() => setActiveSection('react-build-tools')}>⚙️ Build Tools & Environment Configuration (Vite, Webpack, Babel) 🆕</li>
          <li className={activeSection === 'react-backend-integration' ? 'active' : ''} onClick={() => setActiveSection('react-backend-integration')}>🧱 React with Backend Integration (REST API, GraphQL, Auth) 🆕</li>
          <li className={activeSection === 'react-server-components' ? 'active' : ''} onClick={() => setActiveSection('react-server-components')}>🧭 React Server Components (React 19+) 🆕</li>
          <li className={activeSection === 'react-query' ? 'active' : ''} onClick={() => setActiveSection('react-query')}>💡React Query / TanStack Query 🆕</li>
          <li className={activeSection === 'react-file-handling' ? 'active' : ''} onClick={() => setActiveSection('react-file-handling')}>🧩 File & Image Handling in React 🆕</li>
          <li className={activeSection === 'react-animations' ? 'active' : ''} onClick={() => setActiveSection('react-animations')}>⚡React Animations (Framer Motion, React Spring, CSS Transitions) 🆕</li>
          <li className={activeSection === 'react-accessibility' ? 'active' : ''} onClick={() => setActiveSection('react-accessibility')}>🧠 Accessibility (a11y) in React 🆕</li>
          <li className={activeSection === 'react-internationalization' ? 'active' : ''} onClick={() => setActiveSection('react-internationalization')}>🌍 Internationalization (i18n) 🆕</li>
          <li className={activeSection === 'react-deployment' ? 'active' : ''} onClick={() => setActiveSection('react-deployment')}>🚀 Deployment (Netlify, Vercel, GitHub Pages)</li>
          <li className={activeSection === 'react-advanced-topics' ? 'active' : ''} onClick={() => setActiveSection('react-advanced-topics')}>🧱 Advanced Topics (React 19 Features, Suspense, TypeScript with React)</li>
          <li className={activeSection === 'react-mini-projects' ? 'active' : ''} onClick={() => setActiveSection('react-mini-projects')}>🧩 Mini Projects (Hands-on Practice)</li>
        </ul>
      </aside>
    {/* ======= Sidebar Toggle (Mobile only, beside content) ======= */}
      <button
        className="btn btn-dark d-md-none position-fixed toggle-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#reactSidebar"
        aria-controls="reactSidebar"
      >
        <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
      </button>

      {/* ======= Offcanvas Sidebar (Mobile) ======= */}
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex="-1"
        id="reactSidebar"
        aria-labelledby="reactSidebarLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="reactSidebarLabel">
            React Tutorial
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
        <ul className="list-unstyled mt-3">
          <li onClick={() => navigate('/')}>🏠 Home</li>

          <li className={activeSection === 'react-introduction' ? 'active' : ''} onClick={() => setActiveSection('react-introduction')}>🧩 Introduction to React</li>
          <li className={activeSection === 'react-setup' ? 'active' : ''} onClick={() => setActiveSection('react-setup')}>🧱 Setting Up the React Environment</li>
          <li className={activeSection === 'react-jsx' ? 'active' : ''} onClick={() => setActiveSection('react-jsx')}>🧩 Understanding JSX (JavaScript XML)</li>
          <li className={activeSection === 'react-components' ? 'active' : ''} onClick={() => setActiveSection('react-components')}>🧱 Components in React</li>
          <li className={activeSection === 'react-props-state' ? 'active' : ''} onClick={() => setActiveSection('react-props-state')}>🔁 Props and State</li>
          <li className={activeSection === 'react-hooks' ? 'active' : ''} onClick={() => setActiveSection('react-hooks')}>🔄 React Hooks (Core Hooks)</li>
          <li className={activeSection === 'react-event-handling' ? 'active' : ''} onClick={() => setActiveSection('react-event-handling')}>📋Event Handling</li>
          <li className={activeSection === 'react-router' ? 'active' : ''} onClick={() => setActiveSection('react-router')}>🧭 React Router</li>
          <li className={activeSection === 'react-lists-keys' ? 'active' : ''} onClick={() => setActiveSection('react-lists-keys')}>🧮 Lists and Keys</li>
          <li className={activeSection === 'react-conditional-rendering' ? 'active' : ''} onClick={() => setActiveSection('react-conditional-rendering')}>⚙️ Conditional Rendering</li>
          <li className={activeSection === 'react-forms' ? 'active' : ''} onClick={() => setActiveSection('react-forms')}>🧩 Forms in React</li>
          <li className={activeSection === 'react-fetching-data' ? 'active' : ''} onClick={() => setActiveSection('react-fetching-data')}>🌍 Fetching Data (API Integration)</li>
          <li className={activeSection === 'react-advanced-hooks' ? 'active' : ''} onClick={() => setActiveSection('react-advanced-hooks')}>💡 Advanced Hooks (useReducer, useMemo, useCallback, useRef)</li>
          <li className={activeSection === 'react-performance' ? 'active' : ''} onClick={() => setActiveSection('react-performance')}>⚡ Performance Optimization (memo, Suspense, Lazy Loading)</li>
          <li className={activeSection === 'react-custom-hooks' ? 'active' : ''} onClick={() => setActiveSection('react-custom-hooks')}>🧭 Custom Hooks</li>
          <li className={activeSection === 'react-external-libraries' ? 'active' : ''} onClick={() => setActiveSection('react-external-libraries')}>🧰 React with External Libraries (UI, Animations, Charts)</li>
          <li className={activeSection === 'react-state-management' ? 'active' : ''} onClick={() => setActiveSection('react-state-management')}>🧱 State Management (Redux Toolkit / Zustand)</li>
          <li className={activeSection === 'react-error-handling' ? 'active' : ''} onClick={() => setActiveSection('react-error-handling')}>🧠 React Error Handling & Debugging Tools 🆕</li>
          <li className={activeSection === 'react-testing' ? 'active' : ''} onClick={() => setActiveSection('react-testing')}>🧩 React Testing (Jest & React Testing Library)</li>
          <li className={activeSection === 'react-routing-advanced' ? 'active' : ''} onClick={() => setActiveSection('react-routing-advanced')}>🧱 React Routing Advanced (Nested Routes, Params, Protected Routes) 🆕</li>
          <li className={activeSection === 'react-security' ? 'active' : ''} onClick={() => setActiveSection('react-security')}>🔒 Security Best Practices in React 🆕</li>
          <li className={activeSection === 'react-build-tools' ? 'active' : ''} onClick={() => setActiveSection('react-build-tools')}>⚙️ Build Tools & Environment Configuration (Vite, Webpack, Babel) 🆕</li>
          <li className={activeSection === 'react-backend-integration' ? 'active' : ''} onClick={() => setActiveSection('react-backend-integration')}>🧱 React with Backend Integration (REST API, GraphQL, Auth) 🆕</li>
          <li className={activeSection === 'react-server-components' ? 'active' : ''} onClick={() => setActiveSection('react-server-components')}>🧭 React Server Components (React 19+) 🆕</li>
          <li className={activeSection === 'react-query' ? 'active' : ''} onClick={() => setActiveSection('react-query')}>💡React Query / TanStack Query 🆕</li>
          <li className={activeSection === 'react-file-handling' ? 'active' : ''} onClick={() => setActiveSection('react-file-handling')}>🧩 File & Image Handling in React 🆕</li>
          <li className={activeSection === 'react-animations' ? 'active' : ''} onClick={() => setActiveSection('react-animations')}>⚡React Animations (Framer Motion, React Spring, CSS Transitions) 🆕</li>
          <li className={activeSection === 'react-accessibility' ? 'active' : ''} onClick={() => setActiveSection('react-accessibility')}>🧠 Accessibility (a11y) in React 🆕</li>
          <li className={activeSection === 'react-internationalization' ? 'active' : ''} onClick={() => setActiveSection('react-internationalization')}>🌍 Internationalization (i18n) 🆕</li>
          <li className={activeSection === 'react-deployment' ? 'active' : ''} onClick={() => setActiveSection('react-deployment')}>🚀 Deployment (Netlify, Vercel, GitHub Pages)</li>
          <li className={activeSection === 'react-advanced-topics' ? 'active' : ''} onClick={() => setActiveSection('react-advanced-topics')}>🧱 Advanced Topics (React 19 Features, Suspense, TypeScript with React)</li>
          <li className={activeSection === 'react-mini-projects' ? 'active' : ''} onClick={() => setActiveSection('react-mini-projects')}>🧩 Mini Projects (Hands-on Practice)</li>
        </ul>
        </div>
        </div>
    {/* Main Course Content */}
<main className="course-content flex-grow-1 p-4">
  {/* ✅ Introduction to React */}
  {activeSection === 'react-introduction' && (
    <>
      <h1>Welcome to the React Course ⚛️</h1>
      <p className="subtitle">
        Learn how to build interactive, component-based user interfaces with React — from basics to advanced.
      </p>

      <h2>What is React?</h2>
      <ul className="bullet-points">
        <li>React is a JavaScript library.</li>
        <li>building user interfaces (UIs) — especially single-page applications (SPAs).</li>
        <li>It allows developers to create dynamic and interactive websites.</li>
        <li>React uses a Virtual DOM (Document Object Model) — a lightweight copy of the real DOM.</li>
        <li>When something changes in the app, React first updates the Virtual DOM, compares it with the previous version (using a process called reconciliation), and then updates only the changed parts of the real DOM.</li>
      </ul>

      <h2>Why Learn React?</h2>
      <ul className="bullet-points">
        <li>High demand in the web development industry.</li>
        <li>Easy to integrate with other frameworks and libraries.</li>
        <li>Large ecosystem and community support.</li>
        <li>Used by top companies like Netflix, Instagram, and Airbnb.</li>
      </ul>

      <h2>Example:</h2>
      <pre className="code-block">
{`import React from 'react';

function Welcome() {
  return <h1>Hello, React World! 🌎</h1>;
}

export default Welcome;`}
      </pre>
    </>
  )}

  {/* 🧱 Setting Up the React Environment */}
{activeSection === "react-setup" && (
  <>
    <h1>🧱 Setting Up the React Environment</h1>
    <p className="subtitle">
      Before we start building with React, we need to set up the environment — the tools required
      to run React on your computer.
    </p>

    <h2>💻 Step 1: Install Node.js and npm</h2>
    <ul className="bullet-points">
      <li>React requires <b>Node.js</b> and <b>npm</b> (Node Package Manager) to work.</li>
      <li>They help us run React and install packages.</li>
    </ul>

    <p>✅ To install:</p>
    <ul className="bullet-points">
      <li>Go to 👉 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">https://nodejs.org/</a></li>
      <li>Download the <b>LTS (Recommended)</b> version.</li>
      <li>Install it like any other software.</li>
    </ul>

    <p>🧠 To check if it’s installed correctly:</p>
    <pre className="code-block">
{`node -v
npm -v`}
    </pre>
    <p>If you see version numbers, Node and npm are ready! 🎉</p>

    <h2>⚙️ Step 2: Create a New React App</h2>
    <p>There are two popular ways to create a React project:</p>

    <h3>🅰️ Method 1 — Using Create React App (CRA)</h3>
    <p>This is the easiest way for beginners.</p>
    <pre className="code-block">
{`npx create-react-app my-react-app

cd my-react-app
npm start`}
    </pre>
    <p>Your React app will open automatically at 👉 <b>http://localhost:3000</b></p>
    <ul className="bullet-points">
      <li>🟢 <b>npx</b> comes with npm and runs packages without installing them globally.</li>
    </ul>

    <h3>🅱️ Method 2 — Using Vite (Faster Alternative)</h3>
    <p>Vite is a modern build tool that’s faster than Create React App.</p>
    <pre className="code-block">
{`npm create vite@latest my-react-app`}
    </pre>
    <p>Choose:</p>
    <ul className="bullet-points">
      <li>✔ Framework: <b>React</b></li>
      <li>✔ Variant: <b>JavaScript</b></li>
    </ul>

    <pre className="code-block">
{`cd my-react-app
npm install
npm run dev`}
    </pre>
    <p>Now open the app in your browser (usually at 👉 <b>http://localhost:5173</b>).</p>

    <h2>🧩 Step 3: Folder Structure Overview</h2>
    <pre className="code-block">
{`my-react-app/
├── node_modules/   → All installed packages
├── public/         → Static files (like index.html)
├── src/            → Your React code (components, App.js, etc.)
├── package.json    → Project information & dependencies
└── README.md       → Project notes`}
    </pre>
    <p>🧠 Most of your work will happen inside the <b>src</b> folder.</p>

    <h2>🧰 Step 4: Open Project in VS Code</h2>
    <ul className="bullet-points">
      <li>Use <b>Visual Studio Code (VS Code)</b> — the most popular editor for React.</li>
      <li>Download from 👉 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">https://code.visualstudio.com/</a></li>
      <li>Open your project folder in VS Code.</li>
    </ul>

    <p>Install helpful extensions:</p>
    <ul className="bullet-points">
      <li>💡 <b>ES7+ React/Redux/React-Native snippets</b></li>
      <li>🎨 <b>Prettier</b> (for auto formatting)</li>
      <li>🔍 <b>Auto Import</b></li>
    </ul>

    <h2>🔄 Step 5: Start the React App</h2>
    <p>In your terminal, run:</p>
    <pre className="code-block">
{`npm start`}
    </pre>
    <p>or for Vite:</p>
    <pre className="code-block">
{`npm run dev`}
    </pre>

    <p>Now your React app is live! 🎉</p>

    <h2>🧠 Quick Recap</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Step</th>
          <th>Task</th>
          <th>Command / Tool</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1️⃣</td><td>Install Node.js</td><td>nodejs.org</td></tr>
        <tr><td>2️⃣</td><td>Create App (CRA)</td><td>npx create-react-app my-react-app</td></tr>
        <tr><td>3️⃣</td><td>Or Create App (Vite)</td><td>npm create vite@latest my-react-app</td></tr>
        <tr><td>4️⃣</td><td>Open in VS Code</td><td>code my-react-app</td></tr>
        <tr><td>5️⃣</td><td>Start the App</td><td>npm start / npm run dev</td></tr>
      </tbody>
    </table>

    <p className="subtitle">
      ✅ You’re Ready! Now your environment is set up for React development.  
      Next, we’ll learn how React combines JavaScript and HTML using a special syntax called <b>JSX</b>.
    </p>
  </>
)}
{/* 🧩 Understanding JSX (JavaScript XML) */}
{activeSection === "react-jsx" && (
  <>
    <h1>🧩 Understanding JSX (JavaScript XML)</h1>
    <p className="subtitle">
      JSX stands for <b>JavaScript XML</b>.  
      It allows you to write HTML-like code inside JavaScript — making React components easy to read and write.
    </p>

    <h2>🔷 Example</h2>
    <pre className="code-block">
{`const element = <h1>Hello, React!</h1>;`}
    </pre>
    <p>
      Here, <code>h1</code> looks like HTML, but it’s actually JSX — it’s converted into JavaScript behind the scenes.
    </p>

    <h2>🧠 Why JSX?</h2>
    <p>
      JSX makes it simple to create user interfaces using HTML-like syntax, instead of writing long
      <code> React.createElement() </code> code.
    </p>

    <h3>Without JSX 👇</h3>
    <pre className="code-block">
{`const element = React.createElement('h1', null, 'Hello, React!');`}
    </pre>

    <h3>With JSX 👇</h3>
    <pre className="code-block">
{`const element = <h1>Hello, React!</h1>;`}
    </pre>

    <p>Both do the same thing, but JSX is cleaner, shorter, and easier to understand.</p>

    <h2>⚙️ How JSX Works Behind the Scenes</h2>
    <p>When you write:</p>
    <pre className="code-block">
{`<h1>Hello React!</h1>`}
    </pre>

    <p>React’s compiler (Babel) converts it into:</p>
    <pre className="code-block">
{`React.createElement("h1", null, "Hello React!");`}
    </pre>

    <p>✅ JSX is not HTML — it’s converted to JavaScript code that React can understand.</p>

    <h2>📘 Rules of JSX</h2>
    <ul className="bullet-points">
      <li>🧩 <b>Return a Single Parent Element:</b> Everything must be wrapped in one parent element.</li>
    </ul>

    <pre className="code-block">
{`return (
  <div>
    <h1>Hello</h1>
    <p>Welcome to React</p>
  </div>
);`}
    </pre>

    <p>❌ Wrong:</p>
    <pre className="code-block">
{`return (
  <h1>Hello</h1>
  <p>Welcome</p>
);`}
    </pre>

    <ul className="bullet-points">
      <li>🧱 <b>Use className Instead of class:</b> “class” is reserved in JavaScript.</li>
    </ul>

    <pre className="code-block">
{`<div className="container">Hello!</div>`}
    </pre>

    <ul className="bullet-points">
      <li>⚡ <b>Use Curly Braces {"{}"} for JavaScript Expressions:</b> Insert variables or logic.</li>
    </ul>

    <pre className="code-block">
{`const name = "Sofia";
return <h1>Hello, {name}!</h1>;`}
    </pre>

    <ul className="bullet-points">
      <li>🔤 <b>JSX Must Be Properly Closed:</b> Tags must always close.</li>
    </ul>

    <pre className="code-block">
{`<img src="logo.png" />  ✅ Correct
<img src="logo.png">   ❌ Wrong`}
    </pre>

    <ul className="bullet-points">
      <li>🧠 <b>Use CamelCase for Attributes:</b> Example: onClick, tabIndex, backgroundColor</li>
    </ul>

    <pre className="code-block">
{`<button onClick={handleClick}>Click Me</button>`}
    </pre>

    <h2>🎯 Example: Using JSX in a Component</h2>
    <pre className="code-block">
{`function Welcome() {
  const name = "React Learner";
  return (
    <div>
      <h1>Welcome to React, {name}!</h1>
      <p>Let’s start learning JSX today 🚀</p>
    </div>
  );
}`}
    </pre>

    <p><b>Output 👇</b></p>
    <pre className="code-block">
{`Welcome to React, React Learner!
Let’s start learning JSX today 🚀`}
    </pre>

    <h2>🧩 Embedding Expressions in JSX</h2>
    <pre className="code-block">
{`function Info() {
  const a = 5;
  const b = 10;
  return <h2>Sum: {a + b}</h2>;
}`}</pre>

    <p>✅ Output: <b>Sum: 15</b></p>

    <h2>⚡ Conditional Rendering in JSX</h2>
    <pre className="code-block">
{`const isLoggedIn = true;
return (
  <div>
    {isLoggedIn ? <h2>Welcome Back!</h2> : <h2>Please Log In</h2>}
  </div>
);`}
    </pre>

    <h2>💡 JSX vs HTML (Quick Comparison)</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>JSX</th>
          <th>HTML</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Syntax</td><td>Looks like HTML but inside JS</td><td>Plain HTML</td></tr>
        <tr><td>Attributes</td><td>className, htmlFor</td><td>class, for</td></tr>
        <tr><td>JavaScript</td><td>Can use {"{}"} to embed JS</td><td>Not possible</td></tr>
        <tr><td>Compilation</td><td>Compiled by Babel</td><td>Rendered by browser</td></tr>
        <tr><td>Closing tags</td><td>Required for all elements</td><td>Optional for some</td></tr>
      </tbody>
    </table>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>JSX allows writing HTML-like code in JavaScript.</li>
      <li>Makes React components clear, readable, and maintainable.</li>
      <li>Must have a single parent element.</li>
      <li>Properly closed tags.</li>
      <li>Use {"{}"} for embedding JS.</li>
      <li>Use <code>className</code> instead of <code>class</code>.</li>
    </ul>
  </>
)}
{/* 🧱 Components in React */}
{activeSection === "react-components" && (
  <>
    <h1>🧱 Components in React</h1>
    <p className="subtitle">
      A <b>component</b> is a reusable piece of code that represents a part of the UI (User Interface).  
      Think of components like <b>LEGO blocks</b> — each block builds a small part of your website, and together they form the full app.
    </p>

    <h2>🔷 Example Components</h2>
    <ul className="bullet-points">
      <li>Header Component</li>
      <li>Footer Component</li>
      <li>Button Component</li>
      <li>Card Component</li>
    </ul>

    <p>Each part can be created, reused, and maintained separately.</p>

    <h2>💡 Why Components?</h2>
    <ul className="bullet-points">
      <li>🧩 Break down complex UIs into smaller pieces.</li>
      <li>🔁 Reuse the same code in multiple places.</li>
      <li>⚙️ Manage data easily using props and state.</li>
      <li>🧠 Make your app organized and modular.</li>
    </ul>

    <h2>🧱 Types of Components</h2>
    <p>There are two main types of components in React:</p>
    <ul className="bullet-points">
      <li>🧩 <b>Functional Components (Modern Way)</b></li>
      <li>🧱 <b>Class Components (Older Way)</b></li>
    </ul>

    <h2>🧩 1. Functional Components (Modern Way)</h2>
    <p className="subtitle">
      Functional components are simple JavaScript functions that return JSX.
    </p>

    <h3>Example 👇</h3>
    <pre className="code-block">
{`function Welcome() {
  return <h1>Hello, React!</h1>;
}

export default Welcome;`}
    </pre>

    <p>✅ Or using an arrow function:</p>
    <pre className="code-block">
{`const Welcome = () => {
  return <h1>Hello, React!</h1>;
};`}
    </pre>

    <h3>To use this component:</h3>
    <pre className="code-block">
{`import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}`}
    </pre>

    <p><b>Output:</b> Hello, React!</p>
    <p>🧠 Functional components are lightweight, easy to read, and commonly used in modern React (especially with Hooks).</p>

    <h2>🧱 2. Class Components (Older Way)</h2>
    <p>
      Before React Hooks, class components were used for managing state and lifecycle methods.
    </p>

    <pre className="code-block">
{`import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}

export default Welcome;`}
    </pre>

    <p>They work fine but are less preferred in new React projects.  
    Most developers now use <b>functional components with Hooks</b>.</p>

    <h2>⚙️ Component Naming Rules</h2>
    <ul className="bullet-points">
      <li>Component names must start with a capital letter.</li>
      <li>✅ Use <code>&lt;Welcome /&gt;</code> not <code>&lt;welcome /&gt;</code>.</li>
      <li>Each component should return only one parent element.</li>
      <li>You can reuse components multiple times.</li>
    </ul>

    <h3>Example 👇</h3>
    <pre className="code-block">
{`function Button() {
  return <button>Click Me</button>;
}

function App() {
  return (
    <div>
      <Button />
      <Button />
      <Button />
    </div>
  );
}`}
    </pre>

    <p><b>Output 👇</b> Three buttons appear — all created from the same component!</p>

    <h2>🧩 Components Inside Components (Nested Components)</h2>
    <p>
      You can use one component inside another — this is called <b>composition</b>.
    </p>

    <pre className="code-block">
{`function Header() {
  return <h2>Welcome to My Website</h2>;
}

function Footer() {
  return <p>© 2025 My Website</p>;
}

function App() {
  return (
    <div>
      <Header />
      <p>This is the main content area.</p>
      <Footer />
    </div>
  );
}`}
    </pre>

    <p><b>Output:</b></p>
    <pre className="code-block">
{`Welcome to My Website
This is the main content area.
© 2025 My Website`}
    </pre>

    <h2>🧠 Real-World Analogy</h2>
    <p>
      Imagine a car 🚗:
    </p>
    <ul className="bullet-points">
      <li>The <b>Car</b> = React App</li>
      <li><b>Engine, Wheels, Seats</b> = Components</li>
      <li>Each part is independent but works together to form the full car (your app).</li>
    </ul>

    <h2>💬 Quick Recap</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Component</td><td>Reusable part of a UI</td></tr>
        <tr><td>Functional Component</td><td>Simple JavaScript function returning JSX</td></tr>
        <tr><td>Class Component</td><td>Uses ES6 classes, older style</td></tr>
        <tr><td>Composition</td><td>Using one component inside another</td></tr>
        <tr><td>Reusability</td><td>The same component can be used multiple times</td></tr>
      </tbody>
    </table>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>Components are building blocks of every React app.</li>
      <li>They make the UI modular, reusable, and easy to maintain.</li>
      <li>Use functional components with Hooks (modern standard).</li>
      <li>Always return a single parent element.</li>
    </ul>
  </>
)}
{/* 🔁 Props and State */}
{activeSection === "react-props-state" && (
  <>
    <h1>🔁 Props and State</h1>

    <p className="subtitle">
      In React, <b>Props</b> and <b>State</b> are used to manage data inside components — 
      but they are used in different ways.
    </p>

    <h2>🔷 What are Props and State?</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Props</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Meaning</td><td>Short for “Properties”</td><td>Represents internal data of a component</td></tr>
        <tr><td>Used For</td><td>Passing data from parent to child</td><td>Managing data inside a component</td></tr>
        <tr><td>Mutable?</td><td>❌ Immutable (cannot be changed)</td><td>✅ Mutable (can be changed)</td></tr>
        <tr><td>Who updates it?</td><td>Parent Component</td><td>The Component itself</td></tr>
        <tr><td>Accessed by</td><td><code>props.propertyName</code></td><td><code>useState()</code> Hook (in functional components)</td></tr>
      </tbody>
    </table>

    <h2>🧩 1. Props (Passing Data Between Components)</h2>
    <p className="subtitle">
      Props allow you to send data from a <b>parent component</b> to a <b>child component</b>. 
      Think of props like <b>function parameters</b> — they let you customize a component’s behavior or appearance.
    </p>

    <h3>Example 👇</h3>
    <pre className="code-block">
{`function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sofia" />
      <Welcome name="John" />
      <Welcome name="Ava" />
    </div>
  );
}`}
    </pre>

    <p><b>✅ Output:</b></p>
    <pre className="code-block">
{`Hello, Sofia!
Hello, John!
Hello, Ava!`}
    </pre>

    <ul className="bullet-points">
      <li><code>name</code> is a <b>prop</b>.</li>
      <li>Each <code>&lt;Welcome /&gt;</code> component receives a different value.</li>
    </ul>
    <h2>🧩What is Destructuring in JavaScript</h2>
    <p className="subtitle">
  <b>Destructuring</b> is a short and clean way to extract values from arrays or objects 
  and assign them to variables. It helps make your code concise and readable.
  </p>
  <pre className="code-block">
{`// 🧩 Example: Array Destructuring
const numbers = [10, 20, 30];

// Old way
let a = numbers[0];
let b = numbers[1];
let c = numbers[2];
console.log("Old way:", a, b, c); // 10 20 30

// ✅ Using destructuring
const [x, y, z] = numbers;
console.log("Using Destructuring:", x, y, z); // 10 20 30
`}
</pre>

<p className='subtitle'>
💡 You can also use <b>object destructuring</b> to unpack properties from objects easily.
</p>

<pre className="code-block">
{`// 🧱 Example: Object Destructuring
const person = { name: "Sofia", age: 22, city: "Delhi" };

// Old way
// let name = person.name;
// let age = person.age;

// ✅ Using destructuring
const { name, age, city } = person;
console.log(name, age, city); // Sofia 22 Delhi
`}
</pre>

<p className="subtitle">
✅ Destructuring is commonly used in React for props:
</p>

<pre className="code-block">
{`// Example in React
function Welcome({ name, age }) {
  return <h3>Hello {name}, you are {age} years old!</h3>;
}

// Instead of:
// function Welcome(props) {
//   return <h3>Hello {props.name}, you are {props.age} years old!</h3>;
// }`}
</pre>
    <h2>💬 Using Destructuring with Props</h2>
    <p className="subtitle">You can simplify props using <b>destructuring</b>.</p>

    <p>Instead of:</p>
    <pre className="code-block">
{`function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}`}
    </pre>

    <p className="subtitle">Write:</p>
    <pre className="code-block">
{`function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}`}
    </pre>
    <p className="subtitle">✅ Same output — cleaner and shorter!</p>

    <h2>🧱 Props Are Read-Only</h2>
    <p className="subtitle">You cannot modify props inside a child component.</p>
    <pre className="code-block">
{`❌ Wrong:
props.name = "Emma"; // Error!`}
    </pre>

    <p className="subtitle">✅ Correct: Props should only be received and displayed, not changed.</p>

    <h2>⚙️ Passing Multiple Props</h2>
    <pre className="code-block">
{`function Student({ name, age, grade }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}

function App() {
  return <Student name="Sofia" age="20" grade="A" />;
}`}
    </pre>

    <p className="subtitle"><b>✅ Output:</b></p>
    <pre className="code-block">
{`Sofia
Age: 20
Grade: A`}
    </pre>

    <h2>🔁 2. State (Dynamic Data Inside a Component)</h2>
    <p className="subtitle">
      State is an object in a React component that stores dynamic data — data that can change over time and affect what’s shown on the screen.
    </p>

    <h3>⚡ Using useState Hook</h3>
    <pre className="code-block">
{`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}`}
    </pre>

    <p className="subtitle"><b>✅ Output:</b></p>
    <pre className="code-block">
{`Count: 0
[Increase]`}
    </pre>

    <p className="subtitle">Clicking the button updates the count dynamically! 🔄</p>

    <h2>💡 How useState Works</h2>
    <pre className="code-block">
{`const [variable, setVariable] = useState(initialValue);`}
    </pre>

    <ul className="bullet-points">
      <li><b>variable</b> → current state value</li>
      <li><b>setVariable</b> → function to update the state</li>
      <li><b>initialValue</b> → starting value</li>
    </ul>

    <pre className="code-block">
{`const [name, setName] = useState("Sofia");

// To update:
setName("Ava");`}
    </pre>

    <h2>🧠 Example: Toggle Text</h2>
    <pre className="code-block">
{`function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible ? <p>Hello, React Learner!</p> : <p>Text Hidden</p>}
    </div>
  );
}`}
    </pre>

    <p className="subtitle">✅ When you click the button, the text hides and shows dynamically!</p>

    <h2>🧩 Props vs State Example Together</h2>
    <pre className="code-block">
{`function Message({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Hello, {name}!</h3>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

function App() {
  return <Message name="Sofia" />;
}`}
    </pre>

    <p className="subtitle"><b>✅ Output:</b></p>
    <pre className="code-block">
{`Hello, Sofia!
You clicked 0 times.
[Click Me]`}
    </pre>

    <ul className="bullet-points">
      <li>Each click updates the <b>state</b> (<code>count</code>).</li>
      <li>It also uses a <b>prop</b> (<code>name</code>) from the parent.</li>
    </ul>

    <h2>🧩 Real-World Analogy</h2>
    <ul className="bullet-points">
      <li><b>Props</b> → like ingredients passed into a recipe (fixed values) 🍅</li>
      <li><b>State</b> → like the temperature inside an oven (changes over time) 🔥</li>
      <li>Both are needed to make the React dish delicious 😋</li>
    </ul>

    <h2>💬 Quick Recap</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Props</td><td>Data passed from parent to child</td><td><code>&lt;User name="Sofia" /&gt;</code></td></tr>
        <tr><td>State</td><td>Data that changes inside a component</td><td><code>const [count, setCount] = useState(0)</code></td></tr>
        <tr><td>Props are immutable</td><td>Can’t be changed by the child</td><td><code>props.name</code></td></tr>
        <tr><td>State is mutable</td><td>Can be updated with setState or setCount</td><td><code>setCount(count + 1)</code></td></tr>
      </tbody>
    </table>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>Props → For passing data between components.</li>
      <li>State → For managing internal data that changes.</li>
      <li>Changing state re-renders the component automatically.</li>
      <li>Together, they make components interactive and dynamic.</li>
    </ul>
  </>
)}
{/* 🔄 React Hooks (Core Hooks) */}
{activeSection === "react-hooks" && (
  <>
    <h1>🔄 React Hooks (Core Hooks)</h1>
    <p className="subtitle">
      React Hooks allow you to use <b>state</b> lifecycle, and context React features in functional components — without writing a class.  
      Before hooks, class components handled state and lifecycle methods.  
      Now, you can do everything with functional components using Hooks. 💡
    </p>

    <h2>⚙️ What Are Hooks?</h2>
    <p>
      Hooks are special functions that let you “hook into” React features such as state, lifecycle, and context.
    </p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Hook</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>useState</td><td>Manage state (data that changes)</td></tr>
        <tr><td>useEffect</td><td>Handle side effects (fetching data, timers, etc.)</td></tr>
        <tr><td>useContext</td><td>Access data from Context API</td></tr>
        <tr><td>useRef</td><td>Access or store DOM elements or mutable values</td></tr>
        <tr><td>useMemo</td><td>Optimize performance by memoizing values</td></tr>
        <tr><td>useCallback</td><td>Optimize functions to prevent re-renders</td></tr>
      </tbody>
    </table>

    <h2>🧠 Rules of Hooks</h2>
    <ul className="bullet-points">
      <li>✅ Only call hooks at the <b>top level</b> — not inside loops, conditions, or nested functions.</li>
      <li>✅ Only call hooks inside React functions — functional components or custom hooks.</li>
    </ul>

    <h2>🧩 1. useState Hook — Managing State</h2>
    <p className='subtitle'>
      useState is a Hook that lets you add state (data that can change) to a function component in React.
    </p>

    <pre className="code-block">
{`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}`}
    </pre>

    <p className='subtitle'>✅ Each time you click the button, <code>setCount()</code> updates the state and re-renders the component automatically.</p>

    <h2>🧩 2. useEffect Hook — Handling Side Effects</h2>
    <p className='subtitle'>
      useEffect is a React Hook that lets you perform side effects in a functional component.
A side effect means anything that happens outside the normal rendering of the UI 
    </p>
    <ul className="bullet-points">
    <li>Fetching data from an API</li>
    <li>Working with the browser (e.g., document.title, localStorage)</li>
    <li>Setting up a timer or interval</li>
    <li>Subscribing to an event (and cleaning it up)</li>
    </ul>

    <pre className="code-block">
{`useEffect(() => {
  // code to run
}, [dependencies]);`}
    </pre>

    <p className='subtitle'>
      Empty dependency <code>[]</code> → runs only once.  
      Dependencies present → runs when those values change.
    </p>

    <pre className="code-block">
{`import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}`}
    </pre>

    <p className='subtitle'>✅ The document title updates dynamically every time the count changes.</p>


<h2>🧩 3. useContext Hook — Accessing Global Data</h2>
<p className="subtitle">
  The <b>useContext()</b> hook lets you <b>share data</b> between components 
  without passing props manually through every level of the component tree. 
  It works with the <b>Context API</b> — React’s built-in way to manage global data like themes, user info, or settings.
</p>

<h3>🌐 What is useContext in React?</h3>
<p className='subtitle'>
  <code>useContext</code> is a React Hook that allows components to directly access data 
  from a <b>Context</b> instead of using prop drilling. It's great for managing global data such as:
</p>
<ul className='bullet-points'>
  <li>🌗 Theme (dark/light mode)</li>
  <li>👤 Logged-in user info</li>
  <li>🌍 App language</li>
  <li>⚙️ Global settings</li>
</ul>

<h3>🧩 The Problem (Without useContext)</h3>
<pre className="code-block">
{`function App() {
  const user = "Sofia";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <p>Hello, {user}!</p>;
}

// 😩 If your component tree has many levels,
// you'll need to pass props through each one manually!`}
</pre>

<h3>✅ The Solution — useContext + createContext</h3>
<p className='subtitle'>
  React <b>Context</b> lets you share data directly, skipping all the middle components.
</p>

<pre className="code-block">
{`import React, { createContext, useContext } from "react";

// 1️⃣ Create Context
const UserContext = createContext();

// 2️⃣ Provide the value at a higher level
function App() {
  const userName = "Sofia";

  return (
    <UserContext.Provider value={userName}>
      <Dashboard />
    </UserContext.Provider>
  );
}

// 3️⃣ Consume the context in a child component
function Dashboard() {
  const user = useContext(UserContext);
  return <h2>Welcome, {user}! 🎉</h2>;
}

export default App;`}
</pre>

<p className="subtitle">
  ✅ Output: <b>Welcome, Sofia! 🎉</b> — no prop drilling needed!
</p>

<h3>🧠 Explanation</h3>
<ul className='bullet-points'>
  <li><code>createContext()</code> → creates a Context object.</li>
  <li><code>&lt;UserContext.Provider&gt;</code> → makes the data (value) available to all nested components.</li>
  <li><code>useContext(UserContext)</code> → reads that shared data from any component.</li>
</ul>

<h3>🧱 Example 2: Sharing Multiple Values</h3>
<pre className="code-block">
{`import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

function App() {
  const theme = { color: "white", background: "black" };

  return (
    <ThemeContext.Provider value={theme}>
      <Navbar />
    </ThemeContext.Provider>
  );
}

function Navbar() {
  const { color, background } = useContext(ThemeContext);

  return (
    <nav style={{ color, background }}>
      <h2>Dark Mode Navbar 🌙</h2>
    </nav>
  );
}

export default App;`}
</pre>

<h3>🧩 Real-World Uses of useContext</h3>
<table className="style-table">
  <thead>
    <tr>
      <th>Use Case</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>🌗 Theme Management</td><td>Dark/Light mode toggle</td></tr>
    <tr><td>👤 User Authentication</td><td>Share logged-in user info</td></tr>
    <tr><td>🌍 App Language</td><td>Switch between languages</td></tr>
    <tr><td>⚙️ Global Settings</td><td>Font size, layout preferences</td></tr>
  </tbody>
</table>

<h3>💬 In Short</h3>
<table className="style-table">
  <thead>
    <tr><th>Concept</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>createContext()</code></td><td>Creates a new context</td></tr>
    <tr><td><b>Provider</b></td><td>Makes data available to child components</td></tr>
    <tr><td><code>useContext()</code></td><td>Reads the shared data in any component</td></tr>
    <tr><td><b>Advantage</b></td><td>Avoids prop drilling (no need to pass props through many layers)</td></tr>
  </tbody>
</table>

<h3>🔁 Summary Visualization</h3>
<pre className="code-block">
{`<App> 
 └── <Provider value="Sofia">
       ├── <Parent>
       │     └── <Child> --> useContext(UserContext) = "Sofia"
`}
</pre>

<h2>🧩 4. useRef Hook — Accessing DOM or Persistent Values</h2>
<p className="subtitle">
  The <code>useRef()</code> hook in React is used to <b>reference DOM elements</b> or 
  <b>store mutable values</b> that persist across re-renders without causing the component 
  to re-render when updated.
</p>

<h3>💡 Common Uses:</h3>
<ul className='bullet-points'>
  <li>🎯 Accessing DOM elements directly (like focusing an input box)</li>
  <li>⏱️ Storing values that should persist between renders (like timers or counters)</li>
</ul>

<h3>⚙️ Syntax:</h3>
<pre className="code-block">
{`const refName = useRef(initialValue);

// useRef() returns an object: { current: initialValue }
// You can read or update it as refName.current
// Updating refName.current does NOT trigger a re-render
`}
</pre>

<h3>🧠 Example 1: Accessing a DOM Element</h3>
<pre className="code-block">
{`import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // directly accesses DOM element
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <br /><br />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocus;`}
</pre>

<p className="subtitle">
  ✅ <b>Explanation:</b> 
  <br />
  - <code>useRef(null)</code> creates a reference object. <br />
  - The <code>ref</code> attribute connects it to the input field. <br />
  - <code>inputRef.current.focus()</code> directly interacts with the DOM — without re-rendering.
</p>


    <h2>🧩 5. useMemo Hook — Memoizing Expensive Calculations</h2>
    <p className='subtitle'>
      The <code>useMemo()</code> hook caches a computed value to avoid recalculating it on every render.
    </p>
    <h2>💡 What is useMemo and Why We Use It</h2>
    <p className='subtitle'>
    When a React component updates (re-renders), everything inside it runs again — even if some parts don’t need to. If you have a big or slow calculation, this can make your app lag or feel slow. 👉 useMemo helps by remembering the result of that slow work. It only recalculates when the data (dependencies) you care about changes.
    </p>
    <h2>🧠 In Very Simple Words:</h2>
    <p className='subtitle'>
      “useMemo saves a value so React doesn’t have to recalculate it every time.”
    </p>
    <pre className="code-block">
{`import React, { useMemo } from "react";

function ExpensiveCalculation({ number }) {
  const double = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  return <p>Double: {double}</p>;
}`}
    </pre>

    <p className='subtitle'>✅ React only recalculates when <b>number</b> changes — improving performance.</p>

    <h2>🧩 6. useCallback Hook — Optimizing Functions</h2>
    <p className='subtitle'>
      useCallback() is a hook that memoizes (remembers) a function,
      so React doesn’t recreate that function every time the component re-renders.
    </p>
    <h2>💡 Simple Explanation</h2>
    <p className='subtitle'>
      🔁 useCallback tells React:
    “Don’t recreate this function unless something important changes.”
    It’s like React saying:
    “I’ll just reuse the old function — no need to make a new one.”
    </p>

    <pre className="code-block">
{`import React, { useState, useCallback } from "react";

function Button({ onClick }) {
  console.log("Button rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </div>
  );
}`}
    </pre>

    <p className='subtitle'>✅ The Button component doesn’t re-render unnecessarily — it’s optimized!</p>

    <h2>💡 Summary</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Hook</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>useState</td><td>Manage state</td><td><code>const [count, setCount] = useState(0)</code></td></tr>
        <tr><td>useEffect</td><td>Handle side effects</td><td><code>useEffect(() =&gt; &#123;&#125;, [])</code></td></tr>
        <tr><td>useContext</td><td>Access context values</td><td><code>useContext(UserContext)</code></td></tr>
        <tr><td>useRef</td><td>Access DOM elements</td><td><code>inputRef.current.focus()</code></td></tr>
        <tr><td>useMemo</td><td>Cache computed values</td><td><code>useMemo(() =&gt; calc(), [deps])</code></td></tr>
        <tr><td>useCallback</td><td>Cache functions</td><td><code>useCallback(() =&gt; &#123;&#125;, [deps])</code></td></tr>
      </tbody>
    </table>

    <h2>🧠 Real-World Analogy</h2>
    <ul className="bullet-points">
      <li>🧱 <b>useState</b> → Your whiteboard (data that changes)</li>
      <li>⏰ <b>useEffect</b> → The assistant reacting to any change</li>
      <li>🌍 <b>useContext</b> → Shared folder accessible by everyone</li>
      <li>🔍 <b>useRef</b> → Pointer to a specific item (like a note)</li>
      <li>⚡ <b>useMemo</b> → Saves time by reusing previous calculations</li>
      <li>🪄 <b>useCallback</b> → Prevents doing the same work again</li>
    </ul>

    <h2>✅ Summary Line</h2>
    <p className='subtitle'>
      Hooks make functional components powerful and reactive — managing state, effects, and optimization elegantly. 💪
    </p>
  </>
)}


  
{/* 📋 Event Handling in React */}
{activeSection === "react-event-handling" && (
  <>
    <h1>📋 Event Handling in React</h1>
    <p className="subtitle">
      Event handling means responding to user actions like <b>clicks</b>, <b>typing</b>, <b>form submissions</b>, or <b>hovering</b> over an element. 🖱️⌨️  
      In React, event names use <b>camelCase</b> (e.g., <code>onClick</code>, <code>onChange</code>) instead of lowercase as in plain JavaScript.
    </p>

    <h2>💡 Key Rules in React Event Handling</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>JavaScript</th>
          <th>React</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>onclick="doSomething()"</td><td><code>onClick={'{doSomething}'}</code></td></tr>
        <tr><td>Functions are strings</td><td>Functions are references</td></tr>
        <tr><td>return false stops default</td><td>Use <code>event.preventDefault()</code></td></tr>
      </tbody>
    </table>

    <h2>🧩 1. Handling Click Events</h2>
    <pre className="code-block">
{`function ClickButton() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}`}
    </pre>
    <p className='subtitle'>✅ When you click the button, it shows an alert “Button clicked!”.</p>

    <h2>⚙️ Using Arrow Functions</h2>
    <pre className="code-block">
{`function ClickButton() {
  return <button onClick={() => alert("Clicked with Arrow Function!")}>Click</button>;
}`}
    </pre>
    <p className='subtitle'>✅ Works the same — best for simple, one-line actions.</p>

    <h2>🧱 2. Passing Parameters in Events</h2>
    <pre className="code-block">
{`function GreetUser() {
  function sayHello(name) {
    alert(\`Hello, \${name}!\`);
  }

  return <button onClick={() => sayHello("Sofia")}>Greet</button>;
}`}
    </pre>
    <p className='subtitle'>✅ Output: Click the button → “Hello, Sofia!”</p>

    <h2>🧠 3. Event Object</h2>
    <pre className="code-block">
{`function ShowEvent() {
  function handleClick(e) {
    console.log(e.type); // 'click'
  }

  return <button onClick={handleClick}>Show Event Type</button>;
}`}
    </pre>
    <p className='subtitle'>✅ Console Output: <code>click</code></p>

    <h2>✍️ 4. Handling Input Changes</h2>
    <pre className="code-block">
{`import React, { useState } from "react";

function InputExample() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
}`}
    </pre>
    <p className='subtitle'>✅ Displays the typed text in real-time as you type.</p>

    <h2>🧮 5. Handling Form Submission</h2>
    <pre className="code-block">
{`function FormExample() {
  function handleSubmit(e) {
    e.preventDefault(); // stops page reload
    alert("Form submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter name" />
      <button type="submit">Submit</button>
    </form>
  );
}`}
    </pre>
    <p className='subtitle'>✅ When you click submit, it alerts without reloading the page.</p>

    <h2>🔄 6. Combining Events and State</h2>
    <pre className="code-block">
{`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}`}
    </pre>
    <p className='subtitle'>✅ Two buttons — Increase and Decrease — control count dynamically.</p>

    <h2>🧩 Event Handling in Class Components (Older Way)</h2>
    <pre className="code-block">
{`import React, { Component } from "react";

class ClickClass extends Component {
  handleClick() {
    alert("Clicked in Class Component!");
  }

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}

export default ClickClass;`}
    </pre>
    <p>✅ Works fine, but functional components + Hooks are preferred today.</p>

    <h2>💬 Common Event Types in React</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Event</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>onClick</td><td>When a user clicks an element</td></tr>
        <tr><td>onChange</td><td>When input value changes</td></tr>
        <tr><td>onSubmit</td><td>When a form is submitted</td></tr>
        <tr><td>onMouseOver</td><td>When mouse moves over element</td></tr>
        <tr><td>onKeyDown</td><td>When a key is pressed</td></tr>
        <tr><td>onFocus</td><td>When an input gets focus</td></tr>
        <tr><td>onBlur</td><td>When an input loses focus</td></tr>
      </tbody>
    </table>

    <h2>🧠 Real-World Analogy</h2>
    <ul className="bullet-points">
      <li>🎮 Your app is like a remote control — each button triggers a function.</li>
      <li>Power Button → turns on TV (<code>onClick</code>)</li>
      <li>Volume Knob → changes volume (<code>onChange</code>)</li>
      <li>Netflix Button → opens Netflix (<code>onSubmit</code>)</li>
    </ul>

    <h2>✅ Quick Recap</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Event Handling</td><td>Responding to user actions</td><td><code>onClick={'{handleClick}'}</code></td></tr>
        <tr><td>Passing Parameters</td><td>Use arrow functions</td><td><code>{"onClick={() => greet('Sofia')}"}</code></td></tr>
        <tr><td>Input Events</td><td>Use onChange</td><td><code>onChange={'{handleChange}'}</code></td></tr>
        <tr><td>Prevent Default</td><td>Stops page reload</td><td><code>e.preventDefault()</code></td></tr>
        <tr><td>Functional Components</td><td>Modern way</td><td><code>useState, onClick</code></td></tr>
        <tr><td>Class Components</td><td>Old way</td><td><code>this.handleClick</code></td></tr>
      </tbody>
    </table>

    <h2>💡 Summary</h2>
    <ul className="bullet-points">
      <li>Use <b>camelCase</b> event names (<code>onClick</code>, <code>onChange</code>).</li>
      <li>Use <b>functions</b>, not strings.</li>
      <li>Use <code>e.preventDefault()</code> to stop form reloads.</li>
      <li>Combine <b>state</b> and <b>events</b> for interactive components.</li>
    </ul>
  </>
)}

{/* 🧭 React Router */}
{activeSection === "react-router" && (
  <>
    <h1>🧭 React Router</h1>
    <p className="subtitle">
      React Router is a library that allows you to create multiple pages (routes) in a single-page React app (SPA) — without reloading the browser.
    </p>

    <h2>💡 Why Use React Router?</h2>
    <ul className="bullet-points">
      <li>Without React Router, React can only show one component at a time.</li>
      <li>React Router shows different components based on the URL path — just like a normal website.</li>
      <li>Navigation happens instantly without refreshing the page. 🚀</li>
    </ul>

    <table className="style-table">
      <thead>
        <tr>
          <th>Path</th>
          <th>Page</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>/</td><td>Home Page</td></tr>
        <tr><td>/about</td><td>About Page</td></tr>
        <tr><td>/contact</td><td>Contact Page</td></tr>
      </tbody>
    </table>

    <h2>⚙️ 1. Installing React Router</h2>
    <pre className="code-block">{`npm install react-router-dom`}</pre>

    <h2>🧩 2. Setting Up Basic Routing</h2>
    <pre className="code-block">
{`import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return <h2>🏠 Home Page</h2>;
}

function About() {
  return <h2>ℹ️ About Page</h2>;
}

function Contact() {
  return <h2>📞 Contact Page</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;`}
    </pre>
    <p className='subtitle'>✅ Visit <code>/</code>, <code>/about</code>, or <code>/contact</code> — no page reloads!</p>

    <h2>🧭 3. Adding Navigation Links</h2>
    <pre className="code-block">
{`import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}`}
    </pre>

    <p className='subtitle'>✅ Use <code>&lt;Link&gt;</code> instead of <code>&lt;a&gt;</code> for smooth in-app navigation.</p>

    <h2>🧭 4. useNavigate in React Router</h2>
<p>
  The <b>useNavigate</b> hook (React Router v6+) lets you <b>navigate between pages programmatically</b> — 
  meaning you can change routes using JavaScript, not just by clicking a <code>&lt;Link&gt;</code>.
</p>

<h3>🧩 Syntax</h3>
<pre className="code-block">
{`import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home"); // 👈 navigate to /home route
  };

  return <button onClick={goToHome}>Go Home</button>;
};`}
</pre>

<h3>💡 When to Use useNavigate</h3>
<p>Use it when you want to change routes <b>without</b> user clicking a link, such as:</p>

<table className="style-table">
  <thead>
    <tr>
      <th>Scenario</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>✅ After a form submission</td>
      <td>After user logs in → navigate to dashboard</td>
    </tr>
    <tr>
      <td>✅ After a certain event</td>
      <td>After clicking a button → go to another page</td>
    </tr>
    <tr>
      <td>✅ Conditional redirects</td>
      <td>If user not logged in → navigate to login page</td>
    </tr>
    <tr>
      <td>✅ Logout</td>
      <td>After logout → navigate to home/login page</td>
    </tr>
  </tbody>
</table>

<h3>⚙️ Extra Options</h3>
<pre className="code-block">
{`navigate(-1); // 👈 Go back one page
navigate(1);  // 👈 Go forward one page
navigate("/login", { replace: true }); // 👈 Replaces current route (no back button)`}
</pre>

<h3>🧠 Example (Login Redirect)</h3>
<pre className="code-block">
{`import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // ✅ after successful login
    navigate("/dashboard");
  };

  return (
    <button onClick={handleLogin}>Login</button>
  );
}`}
</pre>

<p className="subtitle">
  🔍 In short: <b>useNavigate()</b> lets you navigate between routes using JavaScript logic instead of user actions like clicking <code>&lt;Link&gt;</code>.
</p>

    <h2>🧠 5. Dynamic Routing (URL Parameters)</h2>
    <pre className="code-block">
{`import { useParams } from "react-router-dom";

function UserProfile() {
  const { username } = useParams();
  return <h2>Welcome, {username}!</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}`}
    </pre>
    <p className='subtitle'>✅ Visit <code>/user/Sofia</code> → shows “Welcome, Sofia!”</p>

    <h2>🔄 6. Navigate Component (Redirects)</h2>
    <pre className="code-block">
{`import { Navigate } from "react-router-dom";

function ProtectedPage({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <h2>Welcome to the Dashboard!</h2>;
}`}
    </pre>

    <p className='subtitle'>✅ If not logged in → redirected to <code>/login</code>.</p>

    <h2>💬 7. Nested Routes</h2>
    <pre className="code-block">
{`import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<h3>Profile Page</h3>} />
          <Route path="settings" element={<h3>Settings Page</h3>} />
        </Route>
      </Routes>
    </Router>
  );
}`}
    </pre>

    <p className='subtitle'>✅ Visit <code>/dashboard/profile</code> → renders Profile inside Dashboard.</p>

    <h2>🧭 8. 404 Page (No Match Route)</h2>
    <pre className="code-block">
{`function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

<Routes>
  <Route path="*" element={<NotFound />} />
</Routes>`}
    </pre>
    <p className='subtitle'>✅ Unknown routes show the 404 page.</p>

    <h2>🧠 Real-World Analogy</h2>
    <ul className="bullet-points">
      <li>🗺️ React Router is like Google Maps for your app.</li>
      <li>Each path (<code>/home</code>, <code>/about</code>) is a different destination.</li>
      <li>Links are like roads connecting those destinations.</li>
    </ul>

    <h2>💬 Quick Recap</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>BrowserRouter</td><td>Wraps all routes</td><td><code>{"<Router>"}</code></td></tr>
        <tr><td>Routes</td><td>Holds all route definitions</td><td><code>{"<Routes>...</Routes>"}</code></td></tr>
        <tr><td>Route</td><td>Defines path and component</td><td><code>{"<Route path='/' element={<Home />}/>"}</code></td></tr>
        <tr><td>Link</td><td>Navigation without reload</td><td><code>{"<Link to='/about' />"}</code></td></tr>
        <tr><td>useNavigate</td><td>Navigate programmatically</td><td><code>{"navigate('/home')"}</code></td></tr>
        <tr><td>useParams</td><td>Get dynamic URL data</td><td><code>{"useParams()"}</code></td></tr>
        <tr><td>Navigate</td><td>Redirect component</td><td><code>{"<Navigate to='/login' />"}</code></td></tr>
      </tbody>
    </table>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>React Router enables <b>multi-page navigation</b> without reloads.</li>
      <li>Use <b>BrowserRouter</b>, <b>Routes</b>, and <b>Route</b> for setup.</li>
      <li>Use <b>Link</b> for navigation and <b>useNavigate</b> for redirects.</li>
      <li>Supports <b>dynamic</b> and <b>nested</b> routes.</li>
      <li>Use <code>path="*"</code> for 404 pages.</li>
    </ul>
  </>
)}
{/* 🧮 Lists and Keys in React */}
{activeSection === "react-lists-keys" && (
  <>
    <h1>🧮 Lists and Keys in React</h1>
    <p className="subtitle">
      When building React apps, you often need to display multiple similar items — like users, products, or messages.  
      React handles this easily using <b>lists and keys</b>.
    </p>

    <h2>🧩 1. What is a List in React?</h2>
    <p className="subtitle">
      A list is a collection of elements rendered from an array using the <code>.map()</code> function.
    </p>

    <pre className="code-block">
{`function NameList() {
  const names = ["Sofia", "bareera", "Faseeha", "humera"];

  return (
    <ul>
      {names.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
}

export default NameList;`}
    </pre>

    <p className="subtitle">✅ Output:</p>
    <ul className="bullet-points">
      <li>Sofia</li>
      <li>Bareera</li>
      <li>Faseeha</li>
      <li>Humera</li>
    </ul>

    <h2>💡 .map() creates a new array of &lt;li&gt; elements — one per name.</h2>

    <h2>🧩 2. Why We Need “Keys”</h2>
    <p className="subtitle">
      React needs a unique <b>key</b> for each list element to efficiently update only changed items.
    </p>

    <pre className="code-block">
{`function NameList() {
  const names = ["Sofia", "Aarav", "Emma", "Liam"];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}`}
    </pre>

    <p className="subtitle">✅ Always provide a unique <b>key</b> for each list item.</p>

    <h2>🧠 Example 3: Using Unique IDs as Keys</h2>
    <pre className="code-block">
{`function UserList() {
  const users = [
    { id: 1, name: "Sofia" },
    { id: 2, name: "Aarav" },
    { id: 3, name: "Emma" },
    { id: 4, name: "Liam" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}
    </pre>

    <p className="subtitle">✅ React now uses <code>id</code> to efficiently track list changes.</p>

    <h2>⚙️ 3. Rendering Lists of Components</h2>
    <pre className="code-block">
{`function User({ name }) {
  return <h3>{name}</h3>;
}

function UserList() {
  const users = ["Sofia", "Aarav", "Emma", "Liam"];

  return (
    <div>
      {users.map((user, index) => (
        <User key={index} name={user} />
      ))}
    </div>
  );
}`}
    </pre>

    <p className="subtitle">✅ Each User component gets a key and name prop.</p>

    <h2>🧠 4. Why Keys Are Important</h2>
    <ul className="bullet-points">
      <li>Helps React identify which items changed or moved.</li>
      <li>Prevents incorrect updates or UI flickers.</li>
      <li>Improves rendering performance.</li>
    </ul>

    <pre className="code-block">{`<li>{name}</li> // ❌ Missing key`}</pre>

    <p>⚠️ React Warning: “Each child in a list should have a unique ‘key’ prop.”</p>

    <h2 className="subtitle">🔄 5. Lists Inside Components</h2>
    <pre className="code-block">
{`function HobbyList({ hobbies }) {
  return (
    <ul>
      {hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  );
}

function App() {
  const myHobbies = ["Coding", "Reading", "Gaming"];
  return <HobbyList hobbies={myHobbies} />;
}`}
    </pre>

    <p className="subtitle">✅ Output:</p>
    <ul className="bullet-points">
      <li>Coding</li>
      <li>Reading</li>
      <li>Gaming</li>
    </ul>

    <h2>💡 6. Conditional Rendering in Lists</h2>
    <pre className="code-block">
{`function ProductList() {
  const products = [
    { id: 1, name: "Laptop", available: true },
    { id: 2, name: "Phone", available: false },
    { id: 3, name: "Tablet", available: true },
  ];

  return (
    <ul>
      {products
        .filter((p) => p.available)
        .map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
    </ul>
  );
}`}
    </pre>

    <p className="subtitle">✅ Output:</p>
    <ul className="bullet-points">
      <li>Laptop</li>
      <li>Tablet</li>
    </ul>

    <h2>💬 7. Real-World Example</h2>
    <pre className="code-block">
{`function Blog() {
  const posts = [
    { id: 1, title: "React Basics", author: "Sofia" },
    { id: 2, title: "React Hooks Explained", author: "Liam" },
  ];

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>by {post.author}</p>
        </div>
      ))}
    </div>
  );
}`}
    </pre>

    <p className="subtitle">✅ Output:</p>
    <ul className="bullet-points">
      <li>React Basics — by Sofia</li>
      <li>React Hooks Explained — by Liam</li>
    </ul>

    <h2>💬 Quick Recap</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>.map()</td><td>Converts array to JSX list</td><td><code>names.map()</code></td></tr>
        <tr><td>key</td><td>Unique id for each element</td><td><code>{`<li key={id}>`}</code></td></tr>
        <tr><td>Use IDs</td><td>Better than using index</td><td><code>{`key={user.id}`}</code></td></tr>
        <tr><td>Filter + Map</td><td>Combine to show selected items</td><td><code>.filter().map()</code></td></tr>
        <tr><td>Components</td><td>Render components in lists</td><td><code>{`<User key={...} />`}</code></td></tr>
      </tbody>
    </table>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>Use <code>.map()</code> to render lists from arrays.</li>
      <li>Add a unique <code>key</code> to each list element.</li>
      <li>Prefer unique IDs over array indexes.</li>
      <li>You can render components inside lists.</li>
      <li>Combine <code>.map()</code> with <code>.filter()</code> for more control.</li>
    </ul>
  </>
)}
{/* ⚙️ Conditional Rendering in React */}
{activeSection === "react-conditional-rendering" && (
  <>
    <h1>⚙️ Conditional Rendering in React</h1>
    <p className="subtitle">
      Conditional rendering means showing or hiding elements (or components)
      based on certain conditions — just like <b>if / else</b> in JavaScript.
    </p>

    <ul className="bullet-points">
      <li>✅ Show a message if the user is logged in.</li>
      <li>✅ Hide content while loading data.</li>
      <li>✅ Display different layouts based on user actions.</li>
    </ul>

    <h2>🧩 1. Basic Example: Using if / else</h2>
    <pre className="code-block">
{`function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome back, Sofia!</h2>;
  } else {
    return <h2>Please log in to continue.</h2>;
  }
}

function App() {
  return <Greeting isLoggedIn={true} />;
}`}
    </pre>
    <p className="subtitle">✅ Output: <b>Welcome back, Sofia!</b></p>

    <h2>🧠 2. Using Ternary Operator (Short Way)</h2>
    <pre className="code-block">
{`function Greeting({ isLoggedIn }) {
  return (
    <h2>{isLoggedIn ? "Welcome back, Sofia!" : "Please log in to continue."}</h2>
  );
}

function App() {
  return <Greeting isLoggedIn={false} />;
}`}
    </pre>
    <p className="subtitle">✅ Output: <b>Please log in to continue.</b></p>

    <h2>🔁 3. Using Logical AND (&&)</h2>
    <pre className="code-block">
{`function Message({ hasNewMessage }) {
  return (
    <div>
      <h2>Inbox</h2>
      {hasNewMessage && <p>You have a new message! 📩</p>}
    </div>
  );
}

function App() {
  return <Message hasNewMessage={true} />;
}`}
    </pre>
    <p className="subtitle">✅ Output:</p>
    <ul className="bullet-points">
      <li>Inbox</li>
      <li>You have a new message! 📩</li>
    </ul>

    <h2>⚙️ 4. Using if Statements Inside JSX (Not Directly!)</h2>
    <pre className="code-block">
{`function LoginStatus({ isLoggedIn }) {
  let message;

  if (isLoggedIn) {
    message = "Welcome back! 😊";
  } else {
    message = "Please log in 🔐";
  }

  return <h3>{message}</h3>;
}`}
    </pre>

    <p className="subtitle">✅ Simple and easy to read!</p>

    <h2>🧱 5. Conditional Rendering with Components</h2>
    <pre className="code-block">
{`function LoggedIn() {
  return <h3>Welcome, Sofia!</h3>;
}

function LoggedOut() {
  return <h3>Please log in to continue.</h3>;
}

function App({ isLoggedIn }) {
  return <div>{isLoggedIn ? <LoggedIn /> : <LoggedOut />}</div>;
}`}
    </pre>
    <p className="subtitle">✅ Output depends on <code>isLoggedIn</code>.</p>

    <h2>🧠 6. Example: Toggle Between States</h2>
    <pre className="code-block">
{`import React, { useState } from "react";

function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible ? <p>Hello React Learner! 🎉</p> : <p>Message Hidden 👀</p>}
    </div>
  );
}

export default Toggle;`}
    </pre>

    <ul className="bullet-points">
      <li>Initially: Hello React Learner! 🎉</li>
      <li>After clicking: Message Hidden 👀</li>
    </ul>

    <h2>💬 7. Using Multiple Conditions</h2>
    <pre className="code-block">
{`function UserStatus({ role }) {
  return (
    <div>
      {role === "admin"
        ? "Welcome, Admin 👑"
        : role === "member"
        ? "Welcome, Member 👋"
        : "Guest Access Only 🔒"}
    </div>
  );
}`}
    </pre>

    <ul className="bullet-points">
      <li>role="admin" → Welcome, Admin 👑</li>
      <li>role="member" → Welcome, Member 👋</li>
      <li>role="guest" → Guest Access Only 🔒</li>
    </ul>

    <h2>🧩 8. Rendering Nothing (Null)</h2>
    <pre className="code-block">
{`function Notification({ show }) {
  if (!show) {
    return null;
  }
  return <p>You have new notifications! 🔔</p>;
}

function App() {
  return <Notification show={false} />;
}`}
    </pre>

    <p className="subtitle">✅ Nothing will be displayed on screen when <code>show</code> is false.</p>

    <h2>🧮 9. Real-World Example: Login/Logout Button</h2>
    <pre className="code-block">
{`import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h2>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}`}
    </pre>

    <ul className="bullet-points">
      <li>Initially: “Please Log In” + [Login]</li>
      <li>After click: “Welcome Back!” + [Logout]</li>
    </ul>

    <h2>💬 Quick Recap</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>if / else</td><td>Show elements based on conditions</td><td><code>if (isLoggedIn)</code></td></tr>
        <tr><td>Ternary Operator</td><td>Inline condition</td><td><code>{`{isLoggedIn ? A : B}`}</code></td></tr>
        <tr><td>Logical AND (&&)</td><td>Show only if true</td><td><code>{`{hasMessage && <p>...</p>}`}</code></td></tr>
        <tr><td>Returning null</td><td>Hide component completely</td><td><code>return null</code></td></tr>
        <tr><td>Component Switching</td><td>Render different components</td><td><code>{`{isAdmin ? <Admin/> : <User/>}`}</code></td></tr>
      </tbody>
    </table>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>Conditional rendering = dynamic display of components or elements.</li>
      <li>Use <code>if</code>, <code>else</code>, <code>?:</code>, and <code>&amp;&amp;</code>.</li>
      <li>Combine with <code>state</code> for interactivity.</li>
      <li>Returning <code>null</code> hides components.</li>
      <li>Keep conditions clean — avoid deep nesting.</li>
    </ul>
  </>
)}
{/* 🧩 Forms in React */}
{activeSection === "react-forms" && (
  <>
    <h1>🧩 Forms in React</h1>
    <p className="subtitle">
      Forms are how users interact with your app — typing input, selecting options, or submitting data.
      In React, we handle form inputs a bit differently than in plain HTML.
    </p>

    <h2>📋 1. Normal HTML Form Example (Without React)</h2>
    <pre className="code-block">{`<form>
  <input type="text" placeholder="Enter your name" />
  <button>Submit</button>
</form>`}</pre>

    <p className="subtitle">
      ✅ This works fine in plain HTML, but it doesn’t store input values in your app’s state.
    </p>

    <h2>⚙️ 2. Controlled Components</h2>
    <p className="subtitle">
      In React, form elements are controlled by <b>state</b> — meaning input values are stored in the component’s state.
    </p>

    <pre className="code-block">{`import React, { useState } from "react";

function FormExample() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(\`Hello, \${name}!\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:</label>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;`}</pre>

    <h2>🔄 3. Handling Multiple Inputs</h2>
    <pre className="code-block">{`import React, { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Name: \${formData.name}\\nEmail: \${formData.email}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
      <input name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;`}</pre>

    <h2>🧠 4. Handling Select Dropdowns</h2>
    <pre className="code-block">{`import React, { useState } from "react";

function SelectExample() {
  const [language, setLanguage] = useState("JavaScript");

  return (
    <div>
      <label>Choose a language: </label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option>JavaScript</option>
        <option>Python</option>
        <option>Java</option>
      </select>
      <p>You selected: {language}</p>
    </div>
  );
}`}</pre>

    <h2>🔘 5. Handling Radio Buttons</h2>
    <pre className="code-block">{`import React, { useState } from "react";

function GenderSelect() {
  const [gender, setGender] = useState("");

  return (
    <form>
      <label>
        <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} />
        Male
      </label>
      <label>
        <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} />
        Female
      </label>
      <p>Selected Gender: {gender}</p>
    </form>
  );
}`}</pre>

    <h2>☑️ 6. Handling Checkboxes</h2>
    <pre className="code-block">{`import React, { useState } from "react";

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
        I agree to the terms and conditions
      </label>
      <p>{isChecked ? "✅ Agreed" : "❌ Not Agreed"}</p>
    </div>
  );
}`}</pre>

    <h2>🧩 7. Handling Textarea</h2>
    <pre className="code-block">{`import React, { useState } from "react";

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  return (
    <form>
      <label>Your Feedback:</label>
      <textarea rows="4" cols="30" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
      <p>Preview: {feedback}</p>
    </form>
  );
}`}</pre>

    <h2>⚙️ 8. Preventing Default Form Behavior</h2>
    <pre className="code-block">{`const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted!");
};`}</pre>

    <h2>💬 9. Form Validation (Basic Example)</h2>
    <pre className="code-block">{`function SimpleValidation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("❌ Invalid email address");
    } else {
      setError("");
      alert("✅ Form Submitted!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
      <p style={{ color: "red" }}>{error}</p>
    </form>
  );
}`}</pre>

    <h2>💬 Quick Recap</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Controlled Component</td>
          <td>Input managed by state</td>
          <td><code>value={'{state}'}</code></td>
        </tr>
        <tr>
          <td>useState Hook</td>
          <td>Stores form data</td>
          <td><code>const [name, setName] = useState("")</code></td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>Updates state when typing</td>
          <td><code>onChange={'{e => setName(e.target.value)}'}</code></td>
        </tr>
        <tr>
          <td>onSubmit</td>
          <td>Handles form submission</td>
          <td><code>onSubmit={'{handleSubmit}'}</code></td>
        </tr>
        <tr>
          <td>e.preventDefault()</td>
          <td>Stops page reload</td>
          <td><code>Inside submit handler</code></td>
        </tr>
        <tr>
          <td>Validation</td>
          <td>Check input before submit</td>
          <td><code>if (!email.includes('@'))</code></td>
        </tr>
      </tbody>
    </table>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>Use controlled components to manage form data.</li>
      <li>Always connect <code>value</code> and <code>onChange</code>.</li>
      <li>Prevent form reload using <code>e.preventDefault()</code>.</li>
      <li>Manage multiple inputs easily with one state object.</li>
      <li>Add validation for better user experience.</li>
    </ul>
  </>
)}


{activeSection === "react-fetching-data" && (
  <>
    <h1>🌍 Fetching Data (API Integration)</h1>
    <p className="subtitle">
      Fetching data means getting information from a server or API
      (Application Programming Interface). React apps use this to display data such as:
    </p>

    <ul className='bullet-points'>
      <li>User data 👤</li>
      <li>Product lists 🛒</li>
      <li>Weather updates ☀️</li>
      <li>Posts or comments 📰</li>
    </ul>

    <h2>🔷 What is an API?</h2>
    <p className="subtitle">
      API (Application Programming Interface) allows two systems to communicate.
      In React, you can use API endpoints (URLs) to fetch backend data.
    </p>
    <p className='subtitle'><code>https://jsonplaceholder.typicode.com/users</code> → returns fake users (test API).</p>

    <h2>🧩 2. Common Ways to Fetch Data</h2>
    <p className='subtitle'>There are two main methods:</p>
    <ul className='bullet-points'>
      <li>Using <strong>Fetch API</strong> (built-in)</li>
      <li>Using <strong>Axios</strong> (external, simpler syntax)</li>
    </ul>

    <h3>🔹 Method 1: Using Fetch API</h3>
    <pre className="code-block">{`import React, { useState, useEffect } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>👥 User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}`}</pre>

    <p className="subtitle">
      ✅ <strong>How it works:</strong> useEffect runs once, fetch sends a GET request, stores data in state, and re-renders the UI.
    </p>

    <h3>🔹 Method 2: Using Axios</h3>
    <pre className="code-block">{`import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div>
      <h2>📰 Posts</h2>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}`}</pre>

    <h2>🔄 3. Showing Loading and Error States</h2>
    <pre className="code-block">{`import React, { useState, useEffect } from "react";

function FetchWithStatus() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>⏳ Loading...</p>;
  if (error) return <p>❌ Error: {error}</p>;

  return (
    <div>
      <h2>✅ Fetched Data</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}`}</pre>

    <h2>🧩 4. Fetch Data on Button Click</h2>
    <pre className="code-block">{`import React, { useState } from "react";

function FetchOnClick() {
  const [data, setData] = useState([]);

  const handleFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data.slice(0, 5)));
  };

  return (
    <div>
      <button onClick={handleFetch}>Fetch Todos 📝</button>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}`}</pre>

    <h2>🧱 5. Fetch with Async/Await</h2>
    <pre className="code-block">{`import React, { useState, useEffect } from "react";

function FetchAsyncAwait() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data.slice(0, 5));
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };

    getPosts();
  }, []);

  return (
    <div>
      <h2>🧠 Posts (Async/Await)</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}`}</pre>

    <h2>💾 6. POST Request (Send Data)</h2>
    <pre className="code-block">{`import React, { useState } from "react";

function PostData() {
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    const data = await res.json();
    console.log("Posted:", data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit 📨</button>
    </div>
  );
}`}</pre>

    <h2>💬 8. Real-World Example – Weather App 🌦️</h2>
    <pre className="code-block">{`import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [city] = useState("London");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch(
        \`https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=0.1276&current_weather=true\`
      );
      const data = await res.json();
      setWeather(data.current_weather);
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <h2>🌦️ Weather in {city}</h2>
      {weather ? (
        <p>Temperature: {weather.temperature}°C</p>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}`}</pre>

    <h2>📘 Summary</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Fetch API</td><td>Built-in JavaScript method</td><td><code>fetch(url)</code></td></tr>
        <tr><td>Axios</td><td>External library, cleaner syntax</td><td><code>axios.get(url)</code></td></tr>
        <tr><td>useEffect</td><td>Runs fetch when component loads</td><td><code>[] dependency</code></td></tr>
        <tr><td>Async/Await</td><td>Cleaner async code</td><td><code>await fetch()</code></td></tr>
        <tr><td>Error/Loading</td><td>Improves UX</td><td><code>setError, setLoading</code></td></tr>
        <tr><td>POST Request</td><td>Sends data</td><td><code>method: "POST"</code></td></tr>
      </tbody>
    </table>

    <p className="subtitle">
      ✅ Always handle loading and error states.<br />
      ✅ Use async/await for clean syntax.<br />
      ✅ Use Axios for real-world projects.<br />
      ✅ Test APIs in Postman before using.
    </p>
  </>
)}
{activeSection === "react-advanced-hooks" && (
  <>
    <h1>💡 Advanced Hooks (useReducer, useMemo, useCallback, useRef)</h1>
    <p className="subtitle">
      React provides some advanced hooks that make your apps more powerful, optimized, and organized.
      Let’s learn the 4 most important ones step by step 👇
    </p>

    <h2>🧮 1. useReducer (For Complex State Logic)</h2>
    <p className="subtitle">
      <strong>useReducer</strong> is used when you have complex state updates — especially when the new
      state depends on the previous one. It’s like a more powerful version of <code>useState</code>.
    </p>

    <pre className="code-block">{`import React, { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>➕</button>
      <button onClick={() => dispatch({ type: "decrement" })}>➖</button>
      <button onClick={() => dispatch({ type: "reset" })}>🔁</button>
    </div>
  );
}

export default Counter;`}</pre>

    <p className="subtitle">
      ✅ Use <code>useReducer</code> for managing complex state logic or when 
       <code>useState</code> becomes messy.
    </p>

    <h2>⚡ 2. useMemo (Performance Optimization)</h2>
    <p className="subtitle">
      <strong>useMemo</strong> memoizes a value — it remembers the result of an expensive calculation,
      so React doesn’t recompute it every render.
    </p>

    <pre className="code-block">{`import React, { useState, useMemo } from "react";

function ExpensiveCalc() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("light");

  const doubleNumber = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  return (
    <div>
      <h2>Number: {number}</h2>
      <p>Double: {doubleNumber}</p>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ExpensiveCalc;`}</pre>

    <p className="subtitle">
      ✅ Use <code>useMemo</code> for heavy computations like filtering or sorting.
    </p>

    <h2>🔁 3. useCallback (Memoizing Functions)</h2>
    <p className="subtitle">
      <strong>useCallback</strong> memoizes a function, so it doesn’t get recreated unnecessarily on
      each render — improving performance.
    </p>

    <pre className="code-block">{`import React, { useState, useCallback } from "react";

function Button({ onClick, children }) {
  console.log("Rendering:", children);
  return <button onClick={onClick}>{children}</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

export default Parent;`}</pre>

    <p className="subtitle">
      ✅ Use <code>useCallback</code> when passing functions to child components to prevent unnecessary re-renders.
    </p>

    <h2>🧱 4. useRef (Access DOM or Store Values)</h2>
    <p className="subtitle">
      <strong>useRef</strong> lets you access DOM elements directly or store mutable values without
      causing re-renders.
    </p>

    <pre className="code-block">{`import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default InputFocus;`}</pre>

    <h3>Another Example: Count Renders</h3>
    <pre className="code-block">{`import React, { useRef, useState, useEffect } from "react";

function RenderCounter() {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Component Rendered: {renders.current} times</p>
    </div>
  );
}

export default RenderCounter;`}</pre>

    <h2>🧠 Summary Table</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Hook</th>
          <th>Purpose</th>
          <th>When to Use</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>useReducer</td><td>Manage complex state logic</td><td>When useState gets messy</td><td>Counter</td></tr>
        <tr><td>useMemo</td><td>Optimize calculations</td><td>Heavy computation</td><td>Sorting</td></tr>
        <tr><td>useCallback</td><td>Memoize functions</td><td>Prevent re-renders</td><td>Callback props</td></tr>
        <tr><td>useRef</td><td>Access DOM / store value</td><td>Track renders, focus input</td><td>Ref usage</td></tr>
      </tbody>
    </table>

    <p className="subtitle">
      ✅ <strong>useReducer</strong> → Manage complex state<br />
      ✅ <strong>useMemo</strong> → Optimize heavy computations<br />
      ✅ <strong>useCallback</strong> → Prevent child re-renders<br />
      ✅ <strong>useRef</strong> → Access DOM or store mutable values
    </p>
  </>
)}
{activeSection === "performance-optimization" && (
  <>
    <h1>⚡ Performance Optimization (memo, Suspense, Lazy Loading)</h1>
    <p className="subtitle">
      React automatically optimizes rendering — but as your app grows, you may notice unnecessary re-renders or slow loading times.
      To fix that, React provides tools like <strong>React.memo</strong>, <strong>Suspense</strong>, and <strong>Lazy Loading</strong>.
      Let’s understand them step-by-step 👇
    </p>

    <h2>🧩 1. React.memo (Prevent Unnecessary Re-renders)</h2>
    <p className="subtitle">
      If your component’s props didn’t change, React.memo tells React —
      “Don’t re-render this component, just reuse the last one.”
    </p>

    <pre className="code-block">{`import React, { useState } from "react";

function Child({ name }) {
  console.log("Child Rendered");
  return <h3>Hello, {name}</h3>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child name="Sofia" />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;`}</pre>

    <p className="tip">🧠 Problem: Even though only count changes, the Child component still re-renders.</p>

    <pre className="code-block">{`import React, { useState, memo } from "react";

const Child = memo(function Child({ name }) {
  console.log("Child Rendered");
  return <h3>Hello, {name}</h3>;
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child name="Sofia" />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;`}</pre>

    <p className="tip">✅ Now the child component does not re-render when only count changes!</p>

    <h3>💡 When to Use React.memo</h3>
    <ul className="subtitle">
      <li>When the component’s props rarely change</li>
      <li>When the component re-renders often due to parent changes</li>
      <li>When you want to skip unnecessary re-renders</li>
    </ul>

    <h2>🧭 2. React.lazy and Suspense (Lazy Loading Components)</h2>
    <p className="subtitle">
      <strong>React.lazy()</strong> and <strong>Suspense</strong> let you load components only when needed — reducing the initial load time.
      This technique is known as <strong>Code Splitting</strong> 🧩
    </p>

    <pre className="code-block">{`import React, { Suspense, lazy } from "react";

const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));

function App() {
  return (
    <div>
      <h1>My Website</h1>
      <Suspense fallback={<p>Loading component...</p>}>
        <About />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;`}</pre>

    <p className="tip">
      ✅ Components are loaded only when needed, not all at once — improving page loading speed!
    </p>

    <h3>💡 Why Use Lazy Loading</h3>
    <ul className="subtitle">
      <li>Reduces bundle size</li>
      <li>Improves page loading time</li>
      <li>Perfect for large apps with multiple pages or routes</li>
    </ul>

    <h2>🧠 3. Combining with React Router (Lazy Route Loading)</h2>
    <pre className="code-block">{`import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading Page...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;`}</pre>

    <p className="tip">✅ Pages load only when visited, not all at once — boosting performance!</p>

    <h2>🧮 4. Additional Performance Tips</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Optimization</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>useMemo()</td>
          <td>Memoize expensive calculations</td>
          <td><code>useMemo(() {`=>`}compute(data), [data])</code></td>
        </tr>
        <tr>
          <td>useCallback()</td>
          <td>Memoize functions to avoid re-renders</td>
          <td><code>useCallback(() {`=>`} handleClick(), [])</code></td>
        </tr>
        <tr>
          <td>React.memo()</td>
          <td>Prevent re-rendering of components</td>
          <td><code>export default memo(MyComponent)</code></td>
        </tr>
        <tr>
          <td>Code Splitting</td>
          <td>Load only what’s needed</td>
          <td><code>React.lazy() + Suspense</code></td>
        </tr>
        <tr>
          <td>Virtualization</td>
          <td>Render only visible list items</td>
          <td><code>react-window / react-virtualized</code></td>
        </tr>
      </tbody>
    </table>

    <h3>🧩 Real-World Analogy</h3>
    <p className="subtitle">
      <strong>React.memo</strong> → “Don’t repaint the wall if the color hasn’t changed.” 🎨
      <br />
      <strong>React.lazy + Suspense</strong> → “Don’t bring all the groceries into the kitchen unless you need them right now.” 🛒
    </p>

    <h2>💬 Quick Recap</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Purpose</th>
          <th>Benefit</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>React.memo</td><td>Prevents re-render when props don’t change</td><td>Faster rendering</td></tr>
        <tr><td>React.lazy</td><td>Loads components only when needed</td><td>Smaller initial bundle</td></tr>
        <tr><td>Suspense</td><td>Displays fallback UI while loading</td><td>Better UX</td></tr>
        <tr><td>useMemo / useCallback</td><td>Prevent unnecessary computations</td><td>Efficient re-renders</td></tr>
      </tbody>
    </table>

    <p className="tip">
      ✅ <strong>React.memo</strong> → Prevent extra re-renders<br />
      ✅ <strong>useMemo / useCallback</strong> → Optimize logic<br />
      ✅ <strong>React.lazy + Suspense</strong> → Load components only when needed
    </p>

    <p className="subtitle">
      React Performance Optimization helps your app run:
      <br />⚡ Faster<br />🧠 Smarter<br />💎 More Efficiently
    </p>
  </>
)}

{activeSection === "react-performance" && (
  <>
    <h1>⚡ Performance Optimization (memo, Suspense, Lazy Loading)</h1>
    <p className="subtitle">
      React automatically optimizes rendering — but as your app grows, you may notice unnecessary re-renders or slow loading times.
      To fix that, React provides tools like <strong>React.memo</strong>, <strong>Suspense</strong>, and <strong>Lazy Loading</strong>.
      Let’s understand them step-by-step 👇
    </p>

    <h2>🧩 1. React.memo (Prevent Unnecessary Re-renders)</h2>
    <p className="subtitle">
      <strong>React.memo()</strong> is a higher-order component that prevents re-rendering if a component’s props haven’t changed.
      It ensures that if the parent re-renders but the props remain the same, the memoized component won’t re-render. ✅
    </p>

    <pre className="code-block">{`import React, { useState } from "react";

function Child({ name }) {
  console.log("Child Rendered");
  return <h3>Hello, {name}</h3>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child name="Sofia" />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;`}</pre>

    <p className="tip">🧠 Problem: Even though only count changes, the Child component still re-renders.</p>

    <pre className="code-block">{`import React, { useState, memo } from "react";

const Child = memo(function Child({ name }) {
  console.log("Child Rendered");
  return <h3>Hello, {name}</h3>;
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child name="Sofia" />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;`}</pre>

    <p className="tip">✅ Now the child component does not re-render when only count changes!</p>

    <h3>💡 When to Use React.memo</h3>
    <ul className="subtitle">
      <li>When the component’s props rarely change</li>
      <li>When the component re-renders often due to parent changes</li>
      <li>When you want to skip unnecessary re-renders</li>
    </ul>

    <h2>🧭 2. React.lazy and Suspense (Lazy Loading Components)</h2>
    <p className="subtitle">
      <strong>React.lazy()</strong> and <strong>Suspense</strong> let you load components only when needed — reducing the initial load time.
      This technique is known as <strong>Code Splitting</strong> 🧩
    </p>

    <pre className="code-block">{`import React, { Suspense, lazy } from "react";

const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));

function App() {
  return (
    <div>
      <h1>My Website</h1>
      <Suspense fallback={<p>Loading component...</p>}>
        <About />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;`}</pre>

    <p className="tip">
      ✅ Components are loaded only when needed, not all at once — improving page loading speed!
    </p>

    <h3>💡 Why Use Lazy Loading</h3>
    <ul className="subtitle">
      <li>Reduces bundle size</li>
      <li>Improves page loading time</li>
      <li>Perfect for large apps with multiple pages or routes</li>
    </ul>

    <h2>🧠 3. Combining with React Router (Lazy Route Loading)</h2>
    <pre className="code-block">{`import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading Page...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;`}</pre>

    <p className="tip">✅ Pages load only when visited, not all at once — boosting performance!</p>

    <h2>🧮 4. Additional Performance Tips</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Optimization</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>useMemo()</td>
          <td>Memoize expensive calculations</td>
          <td><code>useMemo(() {`=>`} compute(data), [data])</code></td>
        </tr>
        <tr>
          <td>useCallback()</td>
          <td>Memoize functions to avoid re-renders</td>
          <td><code>useCallback(() {`=>`} handleClick(), [])</code></td>
        </tr>
        <tr>
          <td>React.memo()</td>
          <td>Prevent re-rendering of components</td>
          <td><code>export default memo(MyComponent)</code></td>
        </tr>
        <tr>
          <td>Code Splitting</td>
          <td>Load only what’s needed</td>
          <td><code>React.lazy() + Suspense</code></td>
        </tr>
        <tr>
          <td>Virtualization</td>
          <td>Render only visible list items</td>
          <td><code>react-window / react-virtualized</code></td>
        </tr>
      </tbody>
    </table>

    <h3>🧩 Real-World Analogy</h3>
    <p className="subtitle">
      <strong>React.memo</strong> → “Don’t repaint the wall if the color hasn’t changed.” 🎨
      <br />
      <strong>React.lazy + Suspense</strong> → “Don’t bring all the groceries into the kitchen unless you need them right now.” 🛒
    </p>

    <h2>💬 Quick Recap</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Purpose</th>
          <th>Benefit</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>React.memo</td><td>Prevents re-render when props don’t change</td><td>Faster rendering</td></tr>
        <tr><td>React.lazy</td><td>Loads components only when needed</td><td>Smaller initial bundle</td></tr>
        <tr><td>Suspense</td><td>Displays fallback UI while loading</td><td>Better UX</td></tr>
        <tr><td>useMemo / useCallback</td><td>Prevent unnecessary computations</td><td>Efficient re-renders</td></tr>
      </tbody>
    </table>

    <p className="tip">
      ✅ <strong>React.memo</strong> → Prevent extra re-renders<br />
      ✅ <strong>useMemo / useCallback</strong> → Optimize logic<br />
      ✅ <strong>React.lazy + Suspense</strong> → Load components only when needed
    </p>

    <p className="subtitle">
      React Performance Optimization helps your app run:
      <br />⚡ Faster<br />🧠 Smarter<br />💎 More Efficiently
    </p>
  </>
)}
{activeSection === "react-custom-hooks" && (
  <>
    <h1>🧭 Custom Hooks</h1>
    <p className="subtitle">
      A <strong>Custom Hook</strong> is a reusable function in React that uses one or more built-in hooks
      (<code>useState</code>, <code>useEffect</code>, etc.) to share logic between components.
      <br />
      They make your code:
    </p>
    <ul className="subtitle">
      <li>🧼 Cleaner (no repetition)</li>
      <li>🧠 Reusable</li>
      <li>🧩 Easy to maintain</li>
    </ul>

    <h2>🔹 Rules for Custom Hooks</h2>
    <ul className="subtitle">
      <li>The name must start with “use” (e.g., <code>useFetch</code>, <code>useCounter</code>, <code>useForm</code>)</li>
      <li>You can use other hooks inside a custom hook</li>
      <li>You cannot call hooks inside loops, conditions, or nested functions</li>
    </ul>

    <h2>⚙️ Syntax</h2>
    <pre className="code-block">{`function useCustomHook() {
  // useState, useEffect, etc.
  return something;
}

// Using it
const value = useCustomHook();`}</pre>

    <h2>🧮 Example 1: useCounter Hook</h2>
    <p className="subtitle">A simple reusable counter logic.</p>

    <pre className="code-block">{`// ✅ useCounter.js
import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default useCounter;`}</pre>

    <pre className="code-block">{`// ✅ CounterApp.js
import React from "react";
import useCounter from "./useCounter";

function CounterApp() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApp;`}</pre>

    <p className="tip">✅ Reusable counter logic that works across multiple components.</p>

    <h2>🌐 Example 2: useFetch Hook (API Fetching)</h2>
    <p className="subtitle">A reusable hook for fetching data from APIs.</p>

    <pre className="code-block">{`// ✅ useFetch.js
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;`}</pre>

    <pre className="code-block">{`// ✅ UserList.js
import React from "react";
import useFetch from "./useFetch";

function UserList() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;`}</pre>

    <p className="tip">✅ Fetches and displays user data with clean reusable logic.</p>

    <h2>🎯 Example 3: useLocalStorage Hook</h2>
    <p className="subtitle">A hook to store and retrieve data from localStorage.</p>

    <pre className="code-block">{`// ✅ useLocalStorage.js
import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

export default useLocalStorage;`}</pre>

    <pre className="code-block">{`// ✅ ThemeApp.js
import React from "react";
import useLocalStorage from "./useLocalStorage";

function ThemeApp() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div>
      <h3>Current Theme: {theme}</h3>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeApp;`}</pre>

    <p className="tip">✅ Stores theme preference and remembers it even after reload.</p>

    <h2>💡 Why Use Custom Hooks?</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Without Custom Hook</th>
          <th>With Custom Hook</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Repeated code in many components</td><td>Shared reusable logic</td></tr>
        <tr><td>Hard to maintain</td><td>Centralized logic</td></tr>
        <tr><td>Difficult to test</td><td>Easier to test</td></tr>
        <tr><td>Messy useEffect/useState logic</td><td>Clean separation of concerns</td></tr>
      </tbody>
    </table>

    <h2>🧠 Real-Life Analogy</h2>
    <p className="subtitle">
      Think of <strong>Custom Hooks</strong> like power adapters ⚡ — you build one once, and reuse it with multiple devices (components).
    </p>

    <h2>🧾 Common Custom Hooks in Real Projects</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Hook Name</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>useFetch</td><td>Fetch API data</td></tr>
        <tr><td>useLocalStorage</td><td>Store and get data locally</td></tr>
        <tr><td>useToggle</td><td>Toggle between true/false</td></tr>
        <tr><td>useForm</td><td>Manage form state</td></tr>
        <tr><td>useDebounce</td><td>Delay function execution</td></tr>
        <tr><td>usePrevious</td><td>Get previous value of a state</td></tr>
        <tr><td>useWindowSize</td><td>Detect window width/height</td></tr>
        <tr><td>useOnlineStatus</td><td>Detect internet connection</td></tr>
      </tbody>
    </table>

    <h2>✅ Summary</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Custom Hook</td><td>Function that reuses stateful logic</td><td>useFetch, useCounter</td></tr>
        <tr><td>Benefits</td><td>Reusable, cleaner, easier to test</td><td>Shared logic across components</td></tr>
        <tr><td>Rules</td><td>Start with “use”, can use hooks inside</td><td>useEffect, useState, etc.</td></tr>
      </tbody>
    </table>

    <p className="tip">
      💬 “Custom Hooks let you extract and share React logic across components, making your code
      <strong> DRY (Don’t Repeat Yourself)</strong> and professional!” 💎
    </p>
  </>
)}
{activeSection === "react-external-libraries" && (
  <>
    <h1>🧰 React with External Libraries (UI, Animations, Charts)</h1>
    <p className="subtitle">
      React gives you the <b>core building blocks</b>, but you don’t have to reinvent the wheel.
      External libraries help you:
    </p>

    <ul className="subtitle">
      <li>💅 Build beautiful UIs quickly</li>
      <li>⚡ Add animations & effects easily</li>
      <li>📊 Visualize data with charts</li>
      <li>📦 Speed up development with ready-made components</li>
    </ul>

    <h2>🧱 1. UI Libraries</h2>
    <p className="subtitle">
      UI libraries provide pre-built, responsive, and customizable components (buttons, modals, forms, etc.)
    </p>

    <h3>🌟 Popular UI Libraries</h3>
    <table className="summary-table">
      <thead>
        <tr><th>Library</th><th>Features</th><th>Install</th></tr>
      </thead>
      <tbody>
        <tr><td>Material UI (MUI)</td><td>Google’s Material Design components</td><td><code>npm install @mui/material @emotion/react @emotion/styled</code></td></tr>
        <tr><td>Chakra UI</td><td>Simple, theme-based & accessible</td><td><code>npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion</code></td></tr>
        <tr><td>Ant Design</td><td>Enterprise-grade components</td><td><code>npm install antd</code></td></tr>
        <tr><td>Bootstrap (React Bootstrap)</td><td>Classic, responsive, familiar</td><td><code>npm install react-bootstrap bootstrap</code></td></tr>
        <tr><td>Tailwind CSS</td><td>Utility-first CSS framework</td><td><code>npm install -D tailwindcss</code></td></tr>
      </tbody>
    </table>

    <h3>💡 Example: Material UI Button</h3>
    <pre className="code-block">{`import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
}

export default App;`}</pre>

    <p className="tip">✅ Output: A beautiful blue Material UI button with hover & ripple effects.</p>

    <h3>💡 Example: Chakra UI Card</h3>
    <pre className="code-block">{`import { Box, Heading, Text, Button } from "@chakra-ui/react";

function ProfileCard() {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" maxW="sm" m="auto" mt="5">
      <Heading size="md">Sofia</Heading>
      <Text mt="2">React Learner ✨</Text>
      <Button mt="4" colorScheme="teal">Follow</Button>
    </Box>
  );
}

export default ProfileCard;`}</pre>

    <p className="tip">✅ Output: A clean, responsive card with built-in Chakra UI styling.</p>

    <h2>🎬 2. Animation Libraries</h2>
    <p className="subtitle">Animations make your React app more engaging and modern.</p>

    <h3>✨ Popular Animation Libraries</h3>
    <table className="summary-table">
      <thead>
        <tr><th>Library</th><th>Description</th><th>Install</th></tr>
      </thead>
      <tbody>
        <tr><td>Framer Motion</td><td>Modern, easy, flexible motion</td><td><code>npm install framer-motion</code></td></tr>
        <tr><td>React Spring</td><td>Physics-based animations</td><td><code>npm install @react-spring/web</code></td></tr>
        <tr><td>GSAP</td><td>Industry-grade animation engine</td><td><code>npm install gsap</code></td></tr>
      </tbody>
    </table>

    <h3>💡 Example: Framer Motion Button Animation</h3>
    <pre className="code-block">{`import { motion } from "framer-motion";

function AnimatedButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      style={{
        backgroundColor: "#61dafb",
        border: "none",
        padding: "10px 20px",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      Hover Me
    </motion.button>
  );
}

export default AnimatedButton;`}</pre>

    <p className="tip">✅ Output: Button smoothly grows on hover and shrinks on click ⚡</p>

    <h3>💡 Example: Framer Motion Fade In</h3>
    <pre className="code-block">{`import { motion } from "framer-motion";

function FadeInText() {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Welcome to React Animations 🚀
    </motion.h2>
  );
}

export default FadeInText;`}</pre>

    <p className="tip">✅ Output: Text fades in smoothly when rendered.</p>

    <h2>📊 3. Charts & Data Visualization</h2>
    <p className="subtitle">Charts make data more understandable and interactive.</p>

    <table className="summary-table">
      <thead>
        <tr><th>Library</th><th>Description</th><th>Install</th></tr>
      </thead>
      <tbody>
        <tr><td>Recharts</td><td>Easy, React-based charting library</td><td><code>npm install recharts</code></td></tr>
        <tr><td>Chart.js + react-chartjs-2</td><td>Versatile & powerful charts</td><td><code>npm install chart.js react-chartjs-2</code></td></tr>
        <tr><td>Victory</td><td>Modular charts & graphs</td><td><code>npm install victory</code></td></tr>
      </tbody>
    </table>

    <h3>💡 Example: Bar Chart with Recharts</h3>
    <pre className="code-block">{`import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { name: "React", users: 80 },
  { name: "Angular", users: 40 },
  { name: "Vue", users: 60 },
];

function ChartDemo() {
  return (
    <BarChart width={400} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="users" fill="#8884d8" />
    </BarChart>
  );
}

export default ChartDemo;`}</pre>

    <p className="tip">✅ Output: A clean bar chart comparing framework usage.</p>

    <h2>🧠 Bonus: Combining Libraries</h2>
    <pre className="code-block">{`import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { PieChart, Pie, Tooltip } from "recharts";

const data = [
  { name: "React", value: 70 },
  { name: "Angular", value: 20 },
  { name: "Vue", value: 10 },
];

function DashboardCard() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card style={{ maxWidth: 400, margin: "auto", marginTop: 20 }}>
        <CardContent>
          <Typography variant="h6">Framework Popularity</Typography>
          <PieChart width={300} height={200}>
            <Pie data={data} dataKey="value" nameKey="name" fill="#82ca9d" label />
            <Tooltip />
          </PieChart>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default DashboardCard;`}</pre>

    <p className="tip">✅ Output: A Material UI card that fades in with a Recharts pie chart — dashboard style! 💼</p>

    <h2>💬 Quick Recap</h2>
    <table className="summary-table">
      <thead>
        <tr><th>Category</th><th>Example Libraries</th><th>Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td>UI</td><td>MUI, Chakra UI, Bootstrap</td><td>Build interfaces faster</td></tr>
        <tr><td>Animations</td><td>Framer Motion, React Spring, GSAP</td><td>Add smooth effects</td></tr>
        <tr><td>Charts</td><td>Recharts, Chart.js, Victory</td><td>Visualize data</td></tr>
        <tr><td>CSS Utilities</td><td>Tailwind CSS, Emotion</td><td>Style quickly</td></tr>
      </tbody>
    </table>

    <h2>✅ Summary</h2>
    <p className="subtitle">
      React supports hundreds of third-party libraries.<br />
      Use UI libraries for styling, animations for interactivity, and charts for analytics.
      <br />💎 Together, they make your React apps look great, feel dynamic, and perform smartly! 🚀
    </p>
  </>
)}
{/* 🧱 State Management (Redux Toolkit / Zustand) */}
{activeSection === "react-state-management" && (
  <>
    <h1>🧱 State Management (Redux Toolkit / Zustand)</h1>

    <p className="subtitle">
      As your React app grows, managing data across multiple components becomes complex.  
      That’s where <b>State Management Libraries</b> like <b>Redux Toolkit</b> and <b>Zustand</b> come in —  
      they help you keep your app’s data <b>organized, predictable, and easy to debug.</b>
    </p>

    <h2>🔍 Why Do We Need State Management?</h2>
    <ul className="bullet-points">
      <li>🧩 Local state (useState) works well for small apps.</li>
      <li>📦 But as your app grows, data needs to be shared across many components.</li>
      <li>⚙️ Manually passing props through multiple levels becomes messy (called <b>prop drilling</b>).</li>
      <li>💡 State Management provides a <b>central store</b> to share data easily between components.</li>
    </ul>

    <h2>🧠 Two Popular Tools</h2>
    <ul className="bullet-points">
      <li>⚡ <b>Redux Toolkit</b> — Official, robust state management for React.</li>
      <li>🌿 <b>Zustand</b> — Lightweight, minimal, and easy to use alternative.</li>
    </ul>

    <hr />

    {/* 🔷 Redux Toolkit Section */}
    <h2>⚡ 1. Redux Toolkit (RTK)</h2>
    <p className="subtitle">
      Redux Toolkit is the modern and recommended way to use Redux — simpler, faster, and less boilerplate.
    </p>

    <h3>📦 Install Redux Toolkit</h3>
    <pre className="code-block">
{`npm install @reduxjs/toolkit react-redux`}
    </pre>

    <h3>🧩 Basic Setup</h3>
    <p>Example: Counter App using Redux Toolkit</p>

    <pre className="code-block">
{`// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Step 1: Create a Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    reset: (state) => { state.value = 0; },
  },
});

// Export actions
export const { increment, decrement, reset } = counterSlice.actions;

// Step 2: Create the Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;`}
    </pre>

    <h3>🧱 Step 3: Connect Redux to React</h3>
    <pre className="code-block">
{`// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);`}
    </pre>

    <h3>🧠 Step 4: Use Redux State in Components</h3>
    <pre className="code-block">
{`// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './store';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;`}
    </pre>

    <p><b>✅ Output:</b> Counter that updates from a global Redux store — any component can access this count!</p>

    <h3>💬 Key Concepts</h3>
    <table className="summary-table">
      <thead>
        <tr><th>Concept</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Slice</td><td>Defines a piece of state and related actions</td></tr>
        <tr><td>Store</td><td>Holds the entire app state</td></tr>
        <tr><td>Dispatch</td><td>Sends actions to update state</td></tr>
        <tr><td>Selector</td><td>Reads data from the store</td></tr>
      </tbody>
    </table>

    <hr />

    {/* 🌿 Zustand Section */}
    <h2>🌿 2. Zustand (Simple State Management)</h2>
    <p className="subtitle">
      Zustand is a lightweight, minimal alternative to Redux — with <b>no boilerplate</b> and <b>easy setup.</b>
    </p>

    <h3>📦 Install Zustand</h3>
    <pre className="code-block">
{`npm install zustand`}
    </pre>

    <h3>💡 Create a Store</h3>
    <pre className="code-block">
{`// store.js
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useStore;`}
    </pre>

    <h3>⚙️ Use in React Component</h3>
    <pre className="code-block">
{`// App.js
import React from 'react';
import useStore from './store';

function App() {
  const { count, increment, decrement, reset } = useStore();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;`}
    </pre>

    <p><b>✅ Output:</b> The same counter app — but <b>simpler and faster</b> than Redux!</p>

    <h3>💬 Zustand Advantages</h3>
    <ul className="bullet-points">
      <li>🚀 Very simple syntax (no Provider, no boilerplate)</li>
      <li>⚡ Small bundle size & super fast</li>
      <li>🧱 Easy integration with any project</li>
      <li>✅ Perfect for small & medium apps</li>
    </ul>

    <hr />

    <h2>🧠 When to Use Which?</h2>
    <table className="summary-table">
      <thead>
        <tr><th>Feature</th><th>Redux Toolkit</th><th>Zustand</th></tr>
      </thead>
      <tbody>
        <tr><td>Best for</td><td>Large, complex apps</td><td>Small to medium apps</td></tr>
        <tr><td>Setup</td><td>More steps (slices, store, provider)</td><td>1 file, super easy</td></tr>
        <tr><td>Performance</td><td>Excellent</td><td>Excellent</td></tr>
        <tr><td>Ease of Use</td><td>Moderate</td><td>Very Easy</td></tr>
        <tr><td>Middleware & DevTools</td><td>Full support</td><td>Optional, lightweight</td></tr>
      </tbody>
    </table>

    <h2>💬 Real-World Analogy</h2>
    <ul className="bullet-points">
      <li><b>Redux Toolkit</b> — Like a full kitchen 🍳 (has every tool, but setup takes time)</li>
      <li><b>Zustand</b> — Like a coffee machine ☕ (simple, does one thing perfectly)</li>
    </ul>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>State management is used to control and share data across components.</li>
      <li>Redux Toolkit — best for large, structured apps.</li>
      <li>Zustand — perfect for quick, lightweight solutions.</li>
      <li>Both integrate seamlessly with React Hooks.</li>
      <li>Choose the one that fits your project scale and complexity.</li>
    </ul>
  </>
)}
{/* 🧠 React Error Handling & Debugging Tools */}
{activeSection === "react-error-handling" && (
  <>
    <h1>🧠 React Error Handling & Debugging Tools</h1>

    <p className="subtitle">
      Even the best React developers face bugs 🐞 — what matters is knowing <b>how to find and fix them efficiently</b>.  
      This section covers how to handle errors gracefully and debug React apps like a pro.
    </p>

    <h2>🔍 Common Sources of Errors</h2>
    <ul className="bullet-points">
      <li>⚙️ Syntax errors in JSX (missing brackets, typos)</li>
      <li>🚫 Accessing undefined props or state values</li>
      <li>🔁 Infinite re-renders caused by bad state updates</li>
      <li>❌ Network/API request failures</li>
      <li>⚡ Logic errors in useEffect or event handlers</li>
    </ul>

    <h2>🧩 1. Using try...catch in JavaScript</h2>
    <p>
      You can use <code>try...catch</code> to handle runtime errors inside functions.
    </p>

    <pre className="code-block">
{`function fetchData() {
  try {
    // Simulate API call
    throw new Error("Network Error!");
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
}

fetchData();`}
    </pre>

    <p>✅ Output in Console: <code>Something went wrong: Network Error!</code></p>

    <h2>💥 2. React Error Boundaries (for UI errors)</h2>
    <p className="subtitle">
      React components can crash due to rendering errors — Error Boundaries catch those errors and prevent your entire app from breaking.
    </p>

    <h3>🧱 Example: Error Boundary Component</h3>
    <pre className="code-block">
{`import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by boundary:", error);
  }

  render() {
    if (this.state.hasError) {
      return <h2>⚠️ Something went wrong!</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;`}
    </pre>

    <h3>🧩 Wrap Components Inside Error Boundary</h3>
    <pre className="code-block">
{`import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./BuggyComponent";

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}`}
    </pre>

    <p>
      ✅ If <code>BuggyComponent</code> throws an error,  
      the <b>ErrorBoundary</b> will catch it and show a fallback UI instead of crashing the whole app.
    </p>

    <h2>💬 3. Handling Async Errors (Promises / API)</h2>
    <p>When working with APIs or async functions, always use <b>try...catch</b> with <b>async/await</b>:</p>

    <pre className="code-block">
{`import React, { useEffect, useState } from "react";

function UserData() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("https://api.example.com/user");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchUser();
  }, []);

  if (error) return <p>⚠️ Error: {error}</p>;
  if (!user) return <p>Loading...</p>;
  return <h3>👤 {user.name}</h3>;
}

export default UserData;`}
    </pre>

    <p>✅ Displays an error message instead of breaking when the API fails.</p>

    <h2>🧠 4. Debugging Tools You Should Know</h2>
    <ul className="bullet-points">
      <li>🧭 <b>React Developer Tools</b> (Browser Extension) — Inspect components, props, and state in real-time.</li>
      <li>📜 <b>Console.log()</b> — Simple but powerful; log variables and state to trace bugs.</li>
      <li>🪄 <b>VS Code Debugger</b> — Set breakpoints and step through code execution.</li>
      <li>⚙️ <b>Network Tab (DevTools)</b> — Debug API requests and responses.</li>
      <li>📦 <b>React Profiler</b> — Analyze performance and re-render issues.</li>
    </ul>

    <h3>🧩 Example: Using React DevTools</h3>
    <ul className="bullet-points">
      <li>Go to your browser extensions and install <b>React Developer Tools</b>.</li>
      <li>Open DevTools → “⚛️ Components” tab.</li>
      <li>Inspect component props, state, and the rendered hierarchy.</li>
      <li>Use the “Profiler” tab to record performance.</li>
    </ul>

    <h2>⚙️ 5. Preventing Common React Errors</h2>
    <ul className="bullet-points">
      <li>✅ Always return a single parent element in JSX.</li>
      <li>✅ Don’t mutate state directly (use setter functions).</li>
      <li>✅ Avoid infinite loops in <code>useEffect</code> by adding proper dependencies.</li>
      <li>✅ Check if data exists before rendering (use optional chaining).</li>
    </ul>

    <pre className="code-block">
{`// ❌ May crash if user is null
<p>{user.name}</p>

// ✅ Safe access
<p>{user?.name}</p>`}
    </pre>

    <h2>💬 Quick Recap</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>try...catch</td><td>Catch runtime or async errors</td><td>API calls</td></tr>
        <tr><td>Error Boundary</td><td>Catch rendering errors</td><td>UI-level crashes</td></tr>
        <tr><td>DevTools</td><td>Inspect components, props, and state</td><td>React Developer Tools</td></tr>
        <tr><td>Optional Chaining</td><td>Prevent crashes from undefined data</td><td>user?.name</td></tr>
      </tbody>
    </table>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>Handle runtime issues using <b>try...catch</b> and state-based error messages.</li>
      <li>Use <b>Error Boundaries</b> to prevent full app crashes.</li>
      <li>Leverage <b>React DevTools</b> and <b>VS Code Debugger</b> for efficient debugging.</li>
      <li>Always validate data before rendering.</li>
      <li>Debugging is a skill — practice using these tools to build confidence!</li>
    </ul>
  </>
)}
{/* 🧩 React Testing (Jest & React Testing Library) */}
{activeSection === "react-testing" && (
  <>
    <h1>🧩 React Testing (Jest & React Testing Library)</h1>

    <p className="subtitle">
      Testing in React ensures that your app is <b>reliable, maintainable, and bug-free</b>.  
      Jest provides a testing framework, while React Testing Library focuses on <b>testing components like users interact with them</b>.
    </p>

    <h2>⚙️ 1. What is Testing?</h2>
    <p>
      Testing is the process of checking that your app’s code behaves as expected.  
      It helps catch bugs early and makes future changes safer.
    </p>

    <h3>📦 Common Types of Tests</h3>
    <ul className="bullet-points">
      <li><b>Unit Testing:</b> Test small parts like functions or components.</li>
      <li><b>Integration Testing:</b> Test how components work together.</li>
      <li><b>End-to-End (E2E) Testing:</b> Test the entire app flow (using tools like Cypress or Playwright).</li>
    </ul>

    <h2>🧰 2. Setting Up Jest & React Testing Library</h2>
    <p>Jest comes pre-installed with <b>Create React App</b>, and React Testing Library is easy to add:</p>

    <pre className="code-block">
{`# If not already installed
npm install --save-dev @testing-library/react @testing-library/jest-dom`}
    </pre>

    <p>
      📁 By default, tests are stored in files ending with <code>.test.js</code> or <code>.spec.js</code> inside your <code>src</code> folder.
    </p>

    <h2>🧩 3. Writing Your First Test</h2>
    <p>
      Let’s test a simple React component that displays a greeting message.
    </p>

    <h3>📘 Greeting.js</h3>
    <pre className="code-block">
{`function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;`}
    </pre>

    <h3>🧪 Greeting.test.js</h3>
    <pre className="code-block">
{`import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders greeting message", () => {
  render(<Greeting name="Sofia" />);
  const textElement = screen.getByText(/Hello, Sofia!/i);
  expect(textElement).toBeInTheDocument();
});`}
    </pre>

    <p>✅ This test checks whether “Hello, Sofia!” appears in the document.</p>

    <h2>🔍 4. Testing User Interaction</h2>
    <p>
      The <b>@testing-library/user-event</b> package allows simulating user interactions like clicks, typing, etc.
    </p>

    <pre className="code-block">
{`npm install --save-dev @testing-library/user-event`}
    </pre>

    <h3>📘 Counter.js</h3>
    <pre className="code-block">
{`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default Counter;`}
    </pre>

    <h3>🧪 Counter.test.js</h3>
    <pre className="code-block">
{`import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("increments counter when button is clicked", async () => {
  render(<Counter />);
  const button = screen.getByRole("button", { name: /increment/i });
  await userEvent.click(button);
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});`}
    </pre>

    <p>✅ This test simulates a button click and verifies that the count increases.</p>

    <h2>🧠 5. Common Jest Matchers</h2>
    <ul className="bullet-points">
      <li><code>toBeInTheDocument()</code> → Check if an element is in the DOM</li>
      <li><code>toHaveTextContent()</code> → Verify displayed text</li>
      <li><code>toBeDisabled()</code> → Check if a button or input is disabled</li>
      <li><code>toContainElement()</code> → Verify parent-child relationships</li>
      <li><code>toBeNull()</code> → Check if value is null</li>
    </ul>

    <h2>🧩 6. Snapshot Testing</h2>
    <p>
      Snapshot testing captures the rendered output of a component and compares it in future runs.
    </p>

    <pre className="code-block">
{`import { render } from "@testing-library/react";
import Greeting from "./Greeting";

test("matches snapshot", () => {
  const { asFragment } = render(<Greeting name="Sofia" />);
  expect(asFragment()).toMatchSnapshot();
});`}
    </pre>

    <p>
      ✅ Jest will create a snapshot file in the <code>__snapshots__</code> folder for comparison in future test runs.
    </p>

    <h2>🧭 7. Running Tests</h2>
    <p>Use the following command to run your tests:</p>
    <pre className="code-block">
{`npm test`}
    </pre>
    <ul className="bullet-points">
      <li>▶ Press <b>a</b> to run all tests.</li>
      <li>▶ Press <b>p</b> to filter by file name.</li>
      <li>▶ Press <b>q</b> to quit the test runner.</li>
    </ul>

    <h2>💡 8. Testing Best Practices</h2>
    <ul className="bullet-points">
      <li>✅ Write tests that focus on **user behavior**, not implementation details.</li>
      <li>✅ Keep tests **independent** — one test shouldn’t depend on another.</li>
      <li>✅ Use **descriptive test names** (e.g., “increments counter when clicked”).</li>
      <li>✅ Test edge cases — empty input, error states, etc.</li>
      <li>✅ Run tests often (use watch mode).</li>
    </ul>

    <h2>🧾 Quick Recap</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Jest</td><td>Testing framework for JS apps</td><td>npm test</td></tr>
        <tr><td>React Testing Library</td><td>Test React components via UI behavior</td><td>screen.getByText()</td></tr>
        <tr><td>userEvent</td><td>Simulate clicks, typing, etc.</td><td>userEvent.click()</td></tr>
        <tr><td>Snapshot Testing</td><td>Compare component UI over time</td><td>toMatchSnapshot()</td></tr>
      </tbody>
    </table>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>Use <b>Jest</b> for running and managing tests.</li>
      <li>Use <b>React Testing Library</b> to test like a real user.</li>
      <li>Simulate events with <b>userEvent</b>.</li>
      <li>Use <b>snapshot testing</b> for UI regression detection.</li>
      <li>Write meaningful, behavior-focused tests for each component.</li>
    </ul>
  </>
)}
{/* 🧱 React Routing Advanced (Nested Routes, Params, Protected Routes) */}
{activeSection === "react-routing-advanced" && (
  <>
    <h1>🧱 React Routing Advanced (Nested Routes, Params, Protected Routes)</h1>

    <p className="subtitle">
      Advanced React Router concepts help you build complex, dynamic, and secure navigation systems.  
      Let's explore <b>nested routes, route parameters, and protected routes</b> step by step. 🚀
    </p>

    <h2>🧭 1. Nested Routes</h2>
    <p>
      Nested routes allow you to render components inside another component’s route —  
      perfect for dashboards, profiles, or settings pages that share a layout.
    </p>

    <h3>📘 Example Structure</h3>
    <pre className="code-block">
{`App
 ┣━ /dashboard
 ┃   ┣━ /dashboard/profile
 ┃   ┗━ /dashboard/settings`}
    </pre>

    <h3>📂 Folder Setup</h3>
    <pre className="code-block">
{`src/
 ┣━ App.js
 ┣━ pages/
     ┣━ Dashboard.js
     ┣━ Profile.js
     ┗━ Settings.js`}
    </pre>

    <h3>⚙️ Code Example</h3>
    <pre className="code-block">
{`import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested Routes Render Here */}
      <Outlet />
    </div>
  );
}

function Profile() {
  return <h3>Profile Page</h3>;
}

function Settings() {
  return <h3>Settings Page</h3>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;`}
    </pre>

    <p>✅ <b>Explanation:</b></p>
    <ul className="bullet-points">
      <li><code>&lt;Outlet /&gt;</code> → Placeholder for nested routes.</li>
      <li><code>&lt;Route&gt;</code> elements inside another define child routes.</li>
      <li>Navigation uses relative paths (<code>to="profile"</code>).</li>
    </ul>

    <h2>🔢 2. URL Parameters (Dynamic Routing)</h2>
    <p>
      URL parameters allow you to create **dynamic routes** — useful for profiles, product pages, or any unique content.
    </p>

    <h3>📘 Example</h3>
    <pre className="code-block">
{`import { BrowserRouter, Routes, Route, useParams, Link } from "react-router-dom";

function User() {
  const { username } = useParams(); // Get parameter from URL
  return <h2>Welcome, {username}!</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/user/Sofia">Sofia</Link> |{" "}
        <Link to="/user/John">John</Link>
      </nav>

      <Routes>
        <Route path="/user/:username" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`}
    </pre>

    <p>✅ Visiting <code>/user/Sofia</code> → displays “Welcome, Sofia!”</p>

    <ul className="bullet-points">
      <li><code>:username</code> → defines a dynamic segment in the route.</li>
      <li><code>useParams()</code> → retrieves that value.</li>
      <li>Use params for user profiles, blog posts, or product IDs.</li>
    </ul>

    <h2>🔐 3. Protected Routes (Private Routing)</h2>
    <p>
      Protected routes restrict access to certain pages (like dashboards or settings)  
      unless the user is authenticated. 🔒
    </p>

    <h3>📘 Example</h3>
    <pre className="code-block">
{`import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const isLoggedIn = false; // Change to true to test

function ProtectedRoute({ children }) {
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function Dashboard() {
  return <h2>Welcome to Dashboard!</h2>;
}

function Login() {
  return <h2>Please log in to continue.</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`}
    </pre>

    <p>✅ <b>Explanation:</b></p>
    <ul className="bullet-points">
      <li><code>&lt;Navigate /&gt;</code> redirects unauthenticated users.</li>
      <li>Reusable <code>ProtectedRoute</code> component ensures security.</li>
      <li>You can store login state using <code>useState</code> or Context API.</li>
    </ul>

    <h2>⚙️ 4. Combining Routes Together</h2>
    <p>
      You can combine **Nested**, **Dynamic**, and **Protected Routes** to build complex apps like admin panels or social networks.
    </p>

    <h3>📘 Example Structure</h3>
    <pre className="code-block">
{`/dashboard
 ┣━ /dashboard/users
 ┣━ /dashboard/users/:id
 ┗━ /dashboard/settings`}
    </pre>

    <h2>💡 5. useNavigate & useLocation</h2>
    <p>React Router also gives helper hooks to control navigation and track location:</p>

    <pre className="code-block">
{`import { useNavigate, useLocation } from "react-router-dom";

function Example() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <p>Current path: {location.pathname}</p>
      <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
    </>
  );
}`}
    </pre>

    <ul className="bullet-points">
      <li><code>useNavigate()</code> → Redirect users programmatically.</li>
      <li><code>useLocation()</code> → Access current route details.</li>
    </ul>

    <h2>🧾 Quick Recap</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Nested Routes</td><td>Render child pages inside parent layouts</td><td>&lt;Outlet /&gt;</td></tr>
        <tr><td>URL Params</td><td>Create dynamic routes</td><td>/user/:id</td></tr>
        <tr><td>useParams()</td><td>Get route parameters</td><td>
    <code>{`const { id } = useParams();`}</code>
  </td></tr>
        <tr><td>Protected Routes</td><td>Restrict pages for logged-in users</td><td>&lt;ProtectedRoute&gt;</td></tr>
        <tr><td>useNavigate()</td><td>Redirect programmatically</td><td>navigate("/home")</td></tr>
      </tbody>
    </table>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>🧭 Use <b>Nested Routes</b> for hierarchical layouts.</li>
      <li>🔢 Use <b>URL Params</b> for dynamic, data-driven pages.</li>
      <li>🔐 Use <b>Protected Routes</b> to secure sensitive pages.</li>
      <li>⚙️ Combine hooks like <b>useParams</b>, <b>useNavigate</b>, and <b>useLocation</b> for full control.</li>
      <li>React Router 6 makes complex routing easy and declarative! 🚀</li>
    </ul>
  </>
)}
{/* 🔒 Security Best Practices in React */}
{activeSection === "react-security" && (
  <>
    <h1>🔒 Security Best Practices in React</h1>
    <p className="subtitle">
      React apps interact with APIs, user input, and third-party libraries —  
      making them a target for common web vulnerabilities like <b>XSS</b>, <b>CSRF</b>, and <b>data exposure</b>.  
      Let’s explore how to make your React apps more secure. 🛡️
    </p>

    <h2>⚠️ 1. Protect Against Cross-Site Scripting (XSS)</h2>
    <p>
      XSS happens when attackers inject malicious scripts into your app —  
      often through user inputs or unsafe HTML rendering.
    </p>

    <h3>❌ Dangerous Example</h3>
    <pre className="code-block">
{`function Comment({ text }) {
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
}

// ❗ If text = "<script>alert('Hacked!')</script>"
// The script will execute in the browser!`}
    </pre>

    <h3>✅ Safe Practice</h3>
    <ul className="bullet-points">
      <li>Never use <code>dangerouslySetInnerHTML</code> unless absolutely necessary.</li>
      <li>Sanitize any HTML content using a trusted library like <b>DOMPurify</b>.</li>
    </ul>

    <pre className="code-block">
{`import DOMPurify from "dompurify";

function SafeComment({ text }) {
  const cleanText = DOMPurify.sanitize(text);
  return <div dangerouslySetInnerHTML={{ __html: cleanText }} />;
}`}
    </pre>

    <h2>🧱 2. Avoid Storing Sensitive Data in Client-Side Storage</h2>
    <p>
      Data stored in <code>localStorage</code> or <code>sessionStorage</code> is visible to users and attackers.
      Never store <b>tokens, passwords, or API keys</b> there.
    </p>

    <ul className="bullet-points">
      <li>Use <b>HTTP-only cookies</b> for tokens — safer against XSS.</li>
      <li>If local storage is unavoidable, encrypt data before storing.</li>
    </ul>

    <pre className="code-block">
{`// ❌ Don't do this
localStorage.setItem("token", userToken);

// ✅ Use secure cookie or encrypted storage instead`}
    </pre>

    <h2>🔑 3. Secure API Calls</h2>
    <ul className="bullet-points">
      <li>Always use <b>HTTPS</b> endpoints.</li>
      <li>Do not expose API keys in frontend code.</li>
      <li>Use a backend proxy for secret keys (e.g., Stripe, Firebase).</li>
      <li>Validate and sanitize all API inputs on the server side too.</li>
    </ul>

    <h3>Example (Using Environment Variables)</h3>
    <pre className="code-block">
{`const API_URL = process.env.REACT_APP_API_URL;

fetch(\`\${API_URL}/users\`)
  .then(res => res.json())
  .then(data => console.log(data));`}
    </pre>

    <p>✅ Store API URLs or keys in a <code>.env</code> file — not hardcoded.</p>

    <h2>🧩 4. Prevent CSRF (Cross-Site Request Forgery)</h2>
    <p>
      CSRF attacks trick authenticated users into performing unwanted actions.
      You can prevent them using secure cookies and anti-CSRF tokens.
    </p>

    <ul className="bullet-points">
      <li>Use <b>SameSite</b> and <b>HttpOnly</b> cookie flags.</li>
      <li>Use CSRF tokens on sensitive server routes.</li>
      <li>Libraries like <b>csrf</b> or frameworks like <b>Next.js</b> often handle this automatically.</li>
    </ul>

    <pre className="code-block">
{`Set-Cookie: sessionId=abc123; HttpOnly; SameSite=Strict`}
    </pre>

    <h2>🔍 5. Validate and Sanitize User Input</h2>
    <p>
      Always validate data both on the <b>client</b> and <b>server</b>.
    </p>

    <ul className="bullet-points">
      <li>Use regex or form libraries (like Yup or React Hook Form).</li>
      <li>Never trust client-side validation alone.</li>
      <li>Sanitize strings before rendering or sending to APIs.</li>
    </ul>

    <pre className="code-block">
{`import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
});`}
    </pre>

    <h2>🧠 6. Keep Dependencies Up-to-Date</h2>
    <p>
      Outdated packages can contain known vulnerabilities.  
      Regularly scan and update dependencies.
    </p>

    <pre className="code-block">
{`# Check for vulnerabilities
npm audit

# Fix automatically
npm audit fix`}
    </pre>

    <ul className="bullet-points">
      <li>Use <b>npm audit</b> or <b>Snyk</b> to scan your project.</li>
      <li>Avoid unnecessary or untrusted third-party packages.</li>
    </ul>

    <h2>🧰 7. Use Helmet for React Apps</h2>
    <p>
      If using <b>Express + React</b>, the <b>helmet</b> middleware sets secure HTTP headers automatically.
    </p>

    <pre className="code-block">
{`import helmet from "helmet";
import express from "express";

const app = express();
app.use(helmet());`}
    </pre>

    <ul className="bullet-points">
      <li>Protects against clickjacking, XSS, MIME sniffing, etc.</li>
      <li>Always use it in production builds.</li>
    </ul>

    <h2>🚫 8. Disable Source Map Exposure in Production</h2>
    <p>
      Source maps can reveal your source code and variable names.
    </p>

    <ul className="bullet-points">
      <li>Disable source maps in production builds:</li>
    </ul>

    <pre className="code-block">
{`// In .env file
GENERATE_SOURCEMAP=false`}
    </pre>

    <h2>🧾 Quick Recap</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Practice</th>
          <th>Goal</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Sanitize user inputs</td><td>Prevent XSS attacks</td></tr>
        <tr><td>Use secure cookies</td><td>Prevent CSRF & token theft</td></tr>
        <tr><td>Store secrets in .env</td><td>Hide API keys</td></tr>
        <tr><td>Update dependencies</td><td>Patch vulnerabilities</td></tr>
        <tr><td>Use HTTPS</td><td>Encrypt data in transit</td></tr>
        <tr><td>Disable source maps</td><td>Hide code structure</td></tr>
      </tbody>
    </table>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>🚫 Avoid unsafe HTML and user input rendering.</li>
      <li>🔐 Store sensitive data securely (never in localStorage).</li>
      <li>⚙️ Use environment variables for keys and API URLs.</li>
      <li>🧩 Validate inputs and use secure cookies.</li>
      <li>💡 Keep your packages updated and review dependencies regularly.</li>
      <li>🧱 Security isn’t a one-time task — it’s a continuous habit! 🔄</li>
    </ul>
  </>
)}
{/* ⚙️ Build Tools & Environment Configuration (Vite, Webpack, Babel) */}
{activeSection === "react-build-tools" && (
  <>
    <h1>⚙️ Build Tools & Environment Configuration</h1>
    <p className="subtitle">
      Modern React apps use powerful tools like <b>Vite</b>, <b>Webpack</b>, and <b>Babel</b>  
      to bundle, transpile, and optimize your code for production.  
      Let’s break down what each one does and how to configure them effectively. 🚀
    </p>

    <h2>🧱 1. What Are Build Tools?</h2>
    <p>
      Build tools help transform your React code (written in modern JavaScript or JSX)
      into code that browsers can understand efficiently.
    </p>

    <ul className="bullet-points">
      <li><b>Vite</b> — Lightning-fast development tool for React, Vue, etc.</li>
      <li><b>Webpack</b> — Powerful bundler with plugin support and custom configs.</li>
      <li><b>Babel</b> — JavaScript compiler that converts modern syntax to older versions for browser compatibility.</li>
    </ul>

    <hr />

    <h2>⚡ 2. Vite — The Modern Build Tool</h2>
    <p>
      <b>Vite</b> (pronounced “veet”) is a next-generation frontend build tool
      that offers instant hot reloading, fast builds, and easy setup.
    </p>

    <h3>🪄 Setup with Vite</h3>
    <pre className="code-block">
{`# Create a new React project using Vite
npm create vite@latest my-react-app -- --template react

# Move into your project folder
cd my-react-app

# Install dependencies
npm install

# Start the development server
npm run dev`}
    </pre>

    <h3>✅ Key Features</h3>
    <ul className="bullet-points">
      <li>Super fast development with <b>ESBuild</b>.</li>
      <li>Supports JSX, TypeScript, and Hot Module Replacement (HMR).</li>
      <li>Automatically optimizes builds for production.</li>
      <li>Easy configuration through <code>vite.config.js</code>.</li>
    </ul>

    <h3>🧩 Example: vite.config.js</h3>
    <pre className="code-block">
{`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});`}
    </pre>

    <p>Vite is the **recommended tool** for most modern React projects in 2025. 🚀</p>

    <hr />

    <h2>🧰 3. Webpack — The Classic Bundler</h2>
    <p>
      <b>Webpack</b> is an older but still powerful tool that bundles all your project files
      (JavaScript, CSS, images, etc.) into optimized output files.
    </p>

    <h3>🪄 Setting Up Webpack Manually</h3>
    <pre className="code-block">
{`npm init -y
npm install react react-dom
npm install webpack webpack-cli webpack-dev-server --save-dev
npm install babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev
npm install html-webpack-plugin --save-dev`}
    </pre>

    <h3>🧱 Folder Structure</h3>
    <pre className="code-block">
{`my-react-app/
├── src/
│   ├── index.js
│   └── App.js
├── public/
│   └── index.html
├── webpack.config.js
└── package.json`}
    </pre>

    <h3>⚙️ Example: webpack.config.js</h3>
    <pre className="code-block">
{`const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};`}
    </pre>

    <h3>📦 Run the Project</h3>
    <pre className="code-block">
{`# Start dev server
npx webpack serve

# Build for production
npx webpack --mode production`}
    </pre>

    <p>
      Webpack gives full control but requires more configuration compared to Vite.
    </p>

    <hr />

    <h2>🧠 4. Babel — The JavaScript Compiler</h2>
    <p>
      <b>Babel</b> converts modern JavaScript (ES6+) and JSX into browser-compatible JavaScript.  
      React uses Babel under the hood for JSX transformation.
    </p>

    <h3>📄 Example: .babelrc</h3>
    <pre className="code-block">
{`{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}`}
    </pre>

    <h3>💡 How It Works</h3>
    <p>Example transformation using Babel:</p>
    <pre className="code-block">
{`// Input (JSX)
const element = <h1>Hello React!</h1>;

// Output (after Babel)
const element = React.createElement("h1", null, "Hello React!");`}
    </pre>

    <h3>✅ Common Babel Plugins</h3>
    <ul className="bullet-points">
      <li><b>@babel/preset-react</b> – Converts JSX to JavaScript.</li>
      <li><b>@babel/preset-env</b> – Converts modern JS (ES6+) to older JS.</li>
      <li><b>@babel/plugin-transform-runtime</b> – Reduces bundle size.</li>
    </ul>

    <hr />

    <h2>🧩 5. Environment Variables</h2>
    <p>
      Environment variables help you store configuration data securely —  
      like API URLs or feature flags.
    </p>

    <h3>🌱 Using .env in React</h3>
    <pre className="code-block">
{`# .env
VITE_API_URL=https://api.example.com`}
    </pre>

    <pre className="code-block">
{`// Usage in code
const apiUrl = import.meta.env.VITE_API_URL;`}
    </pre>

    <ul className="bullet-points">
      <li>Always prefix variables with <code>VITE_</code> in Vite.</li>
      <li>Never store API keys or secrets in .env files committed to GitHub.</li>
    </ul>

    <hr />

    <h2>📊 6. Comparing Build Tools</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Tool</th>
          <th>Purpose</th>
          <th>Best For</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Vite</td><td>Fast dev server, optimized builds</td><td>Modern React projects</td></tr>
        <tr><td>Webpack</td><td>Custom bundling & advanced configs</td><td>Complex enterprise apps</td></tr>
        <tr><td>Babel</td><td>Transpiles JSX & ES6+</td><td>All React setups</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>⚡ <b>Vite</b> — Fast, simple, and ideal for most React apps.</li>
      <li>🧱 <b>Webpack</b> — Powerful but requires more setup.</li>
      <li>🔤 <b>Babel</b> — Makes modern JS & JSX work in all browsers.</li>
      <li>🔐 Use <code>.env</code> files for configuration (never share secrets).</li>
      <li>💡 Understanding these tools helps you debug, deploy, and scale React apps efficiently.</li>
    </ul>
  </>
)}
{/* 🧱 React with Backend Integration (REST API, GraphQL, Auth) */}
{activeSection === "react-backend-integration" && (
  <>
    <h1>🧱 React with Backend Integration (REST API, GraphQL, Auth)</h1>
    <p className="subtitle">
      React alone handles the <b>frontend</b>, but most apps also need to connect to a <b>backend</b>  
      for data storage, user authentication, and dynamic updates.  
      Let’s learn how React communicates with backends using <b>REST APIs</b>, <b>GraphQL</b>, and <b>Authentication systems</b>.
    </p>

    <hr />

    <h2>🌐 1. Understanding Frontend–Backend Communication</h2>
    <p>
      The <b>frontend (React)</b> sends requests to the <b>backend server</b> using HTTP methods like:
    </p>
    <ul className="bullet-points">
      <li><b>GET</b> – Retrieve data (e.g., fetch a user list)</li>
      <li><b>POST</b> – Send new data (e.g., create a new user)</li>
      <li><b>PUT / PATCH</b> – Update existing data</li>
      <li><b>DELETE</b> – Remove data from the server</li>
    </ul>

    <p>
      The backend processes the request and responds with **JSON data**, which React displays to the user.  
      Example communication flow:
    </p>
    <pre className="code-block">
{`React (Frontend)  ➡️  API Request  ➡️  Backend Server  ➡️  Database
                      ⬅️  JSON Response`}
    </pre>

    <hr />

    <h2>🧩 2. Connecting React with a REST API</h2>
    <p>
      REST (Representational State Transfer) is the most common pattern for APIs.  
      You can fetch data in React using the <b>fetch()</b> method or <b>Axios</b>.
    </p>

    <h3>📦 Example using fetch()</h3>
    <pre className="code-block">
{`import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h2>👥 User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;`}
    </pre>

    <h3>✅ Output</h3>
    <p>A list of user names fetched from the API.</p>

    <hr />

    <h2>⚙️ 3. Using Axios for HTTP Requests</h2>
    <p>
      <b>Axios</b> is a promise-based HTTP client that simplifies API calls.
    </p>
    <pre className="code-block">
{`import axios from "axios";
import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <h2>📰 Posts</h2>
      {posts.slice(0, 5).map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;`}
    </pre>

    <hr />

    <h2>🧠 4. GraphQL Integration with React</h2>
    <p>
      <b>GraphQL</b> is an alternative to REST — instead of multiple endpoints,  
      you send queries to a single endpoint to get exactly the data you need.
    </p>

    <h3>📦 Setup with Apollo Client</h3>
    <pre className="code-block">
{`npm install @apollo/client graphql`}
    </pre>

    <h3>⚙️ Example Code</h3>
    <pre className="code-block">
{`import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});

const GET_POSTS = gql\`
  {
    posts {
      data {
        id
        title
      }
    }
  }
\`;

function Posts() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data.</p>;

  return (
    <ul>
      {data.posts.data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Posts />
    </ApolloProvider>
  );
}`}
    </pre>

    <p>✅ Output: A list of posts fetched via GraphQL query.</p>

    <hr />

    <h2>🔒 5. Authentication in React (Login, Signup, Tokens)</h2>
    <p>
      Most real-world apps need user authentication to protect pages and APIs.  
      Authentication can be handled using **JWT (JSON Web Tokens)** or **OAuth**.
    </p>

    <h3>📦 Example: Login with Fetch</h3>
    <pre className="code-block">
{`function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("https://example.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    localStorage.setItem("token", data.token); // store JWT token
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}`}
    </pre>

    <ul className="bullet-points">
      <li>🔐 Store tokens securely using <b>localStorage</b> or <b>HTTP-only cookies</b>.</li>
      <li>🚫 Use context or state to handle logged-in user data.</li>
      <li>🛡️ Protect routes using React Router’s{ `<Navigate />`} or guards.</li>
    </ul>

    <hr />

    <h2>💬 6. Real-World Integration Flow</h2>
    <ol>
      <li>Frontend (React) sends a request using fetch or Axios.</li>
      <li>Backend (Node.js, Express, or Django) processes it.</li>
      <li>Database (MongoDB, MySQL, etc.) stores or returns data.</li>
      <li>Backend responds with JSON.</li>
      <li>React displays the updated UI instantly.</li>
    </ol>

    <pre className="code-block">
{`React (Frontend) ⇄ Backend API ⇄ Database`}
    </pre>

    <hr />

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>🌐 Use <b>fetch</b> or <b>Axios</b> for REST API calls.</li>
      <li>🧠 Use <b>GraphQL</b> + Apollo Client for flexible queries.</li>
      <li>🔒 Implement <b>JWT-based authentication</b> for login systems.</li>
      <li>⚡ Use <b>Context API</b> or <b>Redux</b> to manage auth state globally.</li>
      <li>💾 Always handle errors and loading states properly.</li>
    </ul>

    <p className="highlight">
      Mastering backend integration allows you to build **complete, dynamic, and secure full-stack React applications! 🚀**
    </p>
  </>
)}
{/* 🧭 React Server Components (React 19+) */}
{activeSection === "react-server-components" && (
  <>
    <h1>🧭 React Server Components (React 19+)</h1>
    <p className="subtitle">
      React <b>Server Components (RSC)</b> let you render parts of your UI on the server —  
      reducing JavaScript sent to the client and improving app performance ⚡.  
      Introduced in <b>React 19</b>, they bring true hybrid rendering to React.
    </p>

    <hr />

    <h2>🌍 What Are Server Components?</h2>
    <p>
      Normally, React components render in the browser (client).  
      With <b>Server Components</b>, React can now render parts of your app <b>on the server</b>  
      and send the result (HTML + minimal JS) to the client.
    </p>

    <p>
      This means less JavaScript for users to download, faster load times,  
      and direct access to server resources (like databases or APIs) without exposing secrets 🔐.
    </p>

    <pre className="code-block">
{`Client Component → Runs in browser (interactive)
Server Component → Runs on server (static, fast)`}
    </pre>

    <hr />

    <h2>⚙️ Why Server Components?</h2>
    <ul className="bullet-points">
      <li>⚡ <b>Less JavaScript</b> sent to the client → faster loading.</li>
      <li>💾 <b>Direct data fetching</b> on the server (no API call needed).</li>
      <li>🧠 <b>Automatic code splitting</b> and improved performance.</li>
      <li>🔒 <b>Secure</b> — secrets stay on the server, not in browser code.</li>
      <li>🔁 <b>Seamless integration</b> with client components for interactivity.</li>
    </ul>

    <hr />

    <h2>🧩 1. Creating Server and Client Components</h2>
    <p>
      In React 19+ (with frameworks like Next.js 14 or Vite React Server Components),  
      you can define components as **Server** or **Client** components.
    </p>

    <h3>📦 Example Folder Structure</h3>
    <pre className="code-block">
{`src/
 ┣ components/
 ┃ ┣ UserList.server.jsx
 ┃ ┗ Button.client.jsx
 ┣ App.jsx
 ┗ index.js`}
    </pre>

    <h3>🧠 Example: Server Component</h3>
    <pre className="code-block">
{`// UserList.server.jsx
import db from "../db"; // can directly access server-side code

export default async function UserList() {
  const users = await db.getUsers(); // Direct DB call — no API needed
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}`}
    </pre>

    <h3>🧩 Example: Client Component</h3>
    <pre className="code-block">
{`// Button.client.jsx
"use client"; // Marks this as a client component

export default function Button({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}`}
    </pre>

    <p>
      The <code>"use client"</code> directive tells React that this component needs to run in the browser  
      (for interactivity like clicks, forms, animations, etc.).
    </p>

    <hr />

    <h2>🔗 2. Mixing Server and Client Components</h2>
    <p>
      React 19 allows you to <b>nest</b> client components inside server components.  
      The server handles heavy data work; the client adds interactivity.
    </p>

    <pre className="code-block">
{`// App.server.jsx
import UserList from "./components/UserList.server";
import Button from "./components/Button.client";

export default function App() {
  return (
    <div>
      <h1>Users</h1>
      <UserList />
      <Button onClick={() => alert("Hello!")} />
    </div>
  );
}`}
    </pre>

    <p>✅ Server renders data-heavy parts, client handles user actions.</p>

    <hr />

    <h2>🧱 3. Data Fetching in Server Components</h2>
    <p>
      You can use <b>async/await</b> directly inside Server Components to fetch data —  
      no need for <code>useEffect</code> or <code>useState</code> on the client.
    </p>

    <pre className="code-block">
{`// Products.server.jsx
export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <div>
      <h2>🛍️ Products</h2>
      <ul>
        {products.slice(0, 5).map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}`}
    </pre>

    <p>✅ The data is fetched server-side — faster and more secure.</p>

    <hr />

    <h2>🧠 4. Supported Environments</h2>
    <ul className="bullet-points">
      <li>🧭 <b>Next.js 14+</b> – full support for Server Components.</li>
      <li>⚡ <b>Vite + React 19</b> – partial support (with RSC plugin).</li>
      <li>🧩 <b>Remix</b> – adding support soon.</li>
    </ul>

    <p>
      For most projects, use <b>Next.js 14+</b> to explore RSC fully.  
      It handles server and client rendering seamlessly.
    </p>

    <hr />

    <h2>🧩 5. Limitations</h2>
    <ul className="bullet-points">
      <li>🚫 No <code>useState</code> or <code>useEffect</code> inside server components.</li>
      <li>⚙️ Must use <code>"use client"</code> for interactive components.</li>
      <li>📦 Requires modern build tools (React 19, Next.js 14+).</li>
      <li>🧩 Mixing too many RSC boundaries may increase complexity.</li>
    </ul>

    <hr />

    <h2>💬 Real-World Analogy</h2>
    <p>
      Imagine a restaurant 🍽️:
    </p>
    <ul className="bullet-points">
      <li>👨‍🍳 <b>Server Components</b> → Chef prepares the dish (data) in the kitchen.</li>
      <li>👩‍💼 <b>Client Components</b> → Waiter serves it and interacts with the customer.</li>
    </ul>
    <p>Both work together to deliver a smooth experience.</p>

    <hr />

    <h2>✅ Summary</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Client Component</th>
          <th>Server Component</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Runs On</td>
          <td>Browser</td>
          <td>Server</td>
        </tr>
        <tr>
          <td>Use Cases</td>
          <td>Interactivity, user actions</td>
          <td>Data fetching, rendering UI</td>
        </tr>
        <tr>
          <td>Can Access APIs/DB?</td>
          <td>❌ No</td>
          <td>✅ Yes</td>
        </tr>
        <tr>
          <td>Performance</td>
          <td>Depends on JS bundle size</td>
          <td>Much faster (less JS)</td>
        </tr>
      </tbody>
    </table>

    <hr />

    <h2>🚀 Key Takeaways</h2>
    <ul className="bullet-points">
      <li>🧠 Server Components run on the server — no browser JS needed.</li>
      <li>⚙️ Great for data fetching, SEO, and performance.</li>
      <li>🔁 Combine with client components for interactive UIs.</li>
      <li>⚡ Fully supported in React 19 + Next.js 14.</li>
      <li>🧩 Ideal for modern full-stack React applications.</li>
    </ul>

    <p className="highlight">
      React Server Components = the future of high-performance, full-stack React! 🌍🔥
    </p>
  </>
)}
{/* 💡 React Query / TanStack Query 🆕 */}
{activeSection === "react-query" && (
  <>
    <h1>💡 React Query / TanStack Query 🆕</h1>
    <p className="subtitle">
      <b>React Query</b> (now officially called <b>TanStack Query</b>) is a powerful library for managing
      <b> server state </b> — things like data fetched from APIs.  
      It simplifies fetching, caching, synchronizing, and updating data in your React apps 🚀.
    </p>

    <hr />

    <h2>🌍 What Problem Does It Solve?</h2>
    <p>
      In React, we usually fetch data using <code>useEffect</code> and <code>fetch()</code> or <code>axios</code>.  
      But that approach has challenges:
    </p>
    <ul className="bullet-points">
      <li>🔁 Data re-fetching on every mount</li>
      <li>❌ No caching — same data fetched multiple times</li>
      <li>🕒 Manual loading/error handling</li>
      <li>📉 Poor performance for large apps</li>
    </ul>

    <p>
      <b>React Query</b> fixes all this — it automatically handles caching, refetching, background updates,
      and synchronization between tabs ✨.
    </p>

    <hr />

    <h2>⚙️ Installation</h2>
    <pre className="code-block">
{`# Using npm
npm install @tanstack/react-query

# Using yarn
yarn add @tanstack/react-query`}
    </pre>

    <hr />

    <h2>🧩 1. Basic Setup</h2>
    <p>
      To use React Query, wrap your app in a <code>QueryClientProvider</code> —  
      it provides a central place to manage queries.
    </p>

    <pre className="code-block">
{`// main.jsx or index.jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);`}
    </pre>

    <hr />

    <h2>🧠 2. Fetching Data with useQuery</h2>
    <p>
      The <code>useQuery()</code> hook is the heart of React Query.  
      It fetches and caches data automatically 🔁.
    </p>

    <pre className="code-block">
{`import { useQuery } from '@tanstack/react-query';

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>❌ Error: {error.message}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}
    </pre>

    <ul className="bullet-points">
      <li>🧱 <b>queryKey</b>: A unique key to identify this query in the cache.</li>
      <li>⚙️ <b>queryFn</b>: The function that fetches data (can be async).</li>
      <li>💾 React Query caches the data automatically!</li>
    </ul>

    <hr />

    <h2>🔁 3. Refetching Data</h2>
    <p>
      React Query automatically refetches data:
    </p>
    <ul className="bullet-points">
      <li>🔄 When the component remounts</li>
      <li>🌐 When the user reconnects to the internet</li>
      <li>🧭 When the browser tab becomes active again</li>
    </ul>

    <pre className="code-block">
{`const { data, refetch } = useQuery({
  queryKey: ['posts'],
  queryFn: () => fetch('/api/posts').then(res => res.json()),
});

<button onClick={() => refetch()}>Refetch Posts</button>;`}
    </pre>

    <hr />

    <h2>🧱 4. Mutations (POST, PUT, DELETE)</h2>
    <p>
      To change data (e.g., create, update, or delete),  
      use <code>useMutation()</code> hook instead of <code>useQuery()</code>.
    </p>

    <pre className="code-block">
{`import { useMutation, useQueryClient } from '@tanstack/react-query';

function AddUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newUser) =>
      fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      }),

    onSuccess: () => {
      // Invalidate and refetch users list
      queryClient.invalidateQueries(['users']);
    },
  });

  return (
    <button
      onClick={() => mutation.mutate({ name: 'John Doe' })}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? 'Adding...' : 'Add User'}
    </button>
  );
}`}
    </pre>

    <ul className="bullet-points">
      <li>✅ <b>mutationFn</b>: Performs the API call (POST/PUT/DELETE).</li>
      <li>🔁 <b>onSuccess</b>: Refreshes cached data after success.</li>
    </ul>

    <hr />

    <h2>💾 5. Data Caching & Stale Time</h2>
    <p>
      React Query caches results automatically. You can control how long cached data is considered “fresh.”
    </p>

    <pre className="code-block">
{`const { data } = useQuery({
  queryKey: ['products'],
  queryFn: fetchProducts,
  staleTime: 1000 * 60 * 5, // 5 minutes
});`}
    </pre>

    <ul className="bullet-points">
      <li>🧠 <b>staleTime</b>: How long data stays “fresh.”</li>
      <li>After it becomes stale, React Query will refetch it when needed.</li>
    </ul>

    <hr />

    <h2>⚡ 6. Devtools for Debugging</h2>
    <p>
      You can use the <b>React Query Devtools</b> to visualize queries and cache states.
    </p>

    <pre className="code-block">
{`import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

<QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>`}
    </pre>

    <p>🧭 This shows all active queries, cache data, and refetch logs in real time.</p>

    <hr />

    <h2>🧩 7. Comparison: useEffect vs React Query</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>useEffect + fetch()</th>
          <th>React Query</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data Fetching</td>
          <td>Manual</td>
          <td>Automatic</td>
        </tr>
        <tr>
          <td>Caching</td>
          <td>❌ No</td>
          <td>✅ Yes</td>
        </tr>
        <tr>
          <td>Refetching</td>
          <td>Manual</td>
          <td>Auto on window focus / reconnect</td>
        </tr>
        <tr>
          <td>Error Handling</td>
          <td>Manual</td>
          <td>Built-in</td>
        </tr>
        <tr>
          <td>Performance</td>
          <td>Less Efficient</td>
          <td>Highly Optimized</td>
        </tr>
      </tbody>
    </table>

    <hr />

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>⚙️ <b>useQuery</b> for fetching and caching data</li>
      <li>🧱 <b>useMutation</b> for creating/updating/deleting data</li>
      <li>🔁 Automatic refetching and synchronization</li>
      <li>⚡ Great performance and developer experience</li>
      <li>🧭 Works seamlessly with REST or GraphQL APIs</li>
    </ul>

    <p className="highlight">
      React Query turns your async code from “messy” → “magic” ✨  
      No more manual loading states or refetch logic!
    </p>
  </>
)}
{/* 🧩 File & Image Handling in React 🆕 */}
{activeSection === "react-file-handling" && (
  <>
    <h1>🧩 File & Image Handling in React 🆕</h1>
    <p className="subtitle">
      File and image handling in React means allowing users to <b>upload, preview, and send files or images</b> from
      the browser to a server or API.  
      It’s a common feature in apps like profile editors, form submissions, and dashboards 📤📸.
    </p>

    <hr />

    <h2>🔹 1. Basic File Upload (using input type="file")</h2>
    <p>
      React uses the regular <code>&lt;input type="file"&gt;</code> element to let users select files.  
      You can read and manage these files using the <code>onChange</code> event.
    </p>

    <pre className="code-block">
{`function FileUpload() {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  return (
    <div>
      <h3>Upload a File</h3>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}`}
    </pre>

    <ul className="bullet-points">
      <li>📂 <b>e.target.files</b> → gives you the list of selected files</li>
      <li>📁 You can access file details: <code>name</code>, <code>size</code>, <code>type</code></li>
    </ul>

    <hr />

    <h2>🧱 2. Image Preview Before Upload</h2>
    <p>
      You can show the image preview before uploading using <code>URL.createObjectURL()</code>.
    </p>

    <pre className="code-block">
{`import React, { useState } from "react";

function ImagePreview() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <h3>📸 Upload and Preview Image</h3>
      <input type="file" accept="image/*" onChange={handleChange} />
      {image && (
        <div>
          <img src={image} alt="Preview" width="200" style={{ marginTop: "10px" }} />
        </div>
      )}
    </div>
  );
}`}
    </pre>

    <ul className="bullet-points">
      <li>🖼️ <code>URL.createObjectURL()</code> creates a temporary local URL for the image.</li>
      <li>✅ <code>accept="image/*"</code> ensures only image files can be selected.</li>
    </ul>

    <hr />

    <h2>⚙️ 3. Uploading File to a Server (Using Fetch or Axios)</h2>
    <p>
      To upload a file to a backend API, you use the <code>FormData</code> object — it helps send files via HTTP POST.
    </p>

    <pre className="code-block">
{`import React, { useState } from "react";

function UploadToServer() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first!");

    const formData = new FormData();
    formData.append("myFile", file);

    try {
      const res = await fetch("https://example.com/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log("Success:", data);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h3>📤 Upload File to Server</h3>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}`}
    </pre>

    <ul className="bullet-points">
      <li>🧱 <code>FormData.append()</code> adds the file under a field name (like “myFile”).</li>
      <li>🌐 <code>fetch()</code> or <code>axios.post()</code> can send it to your backend endpoint.</li>
      <li>🧠 The backend must handle <code>multipart/form-data</code> (like Express, Node, Django, etc.).</li>
    </ul>

    <hr />

    <h2>🧩 4. Handling Multiple File Uploads</h2>
    <p>
      To allow selecting and uploading multiple files, add the <code>multiple</code> attribute.
    </p>

    <pre className="code-block">
{`function MultiFileUpload() {
  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    console.log("Selected files:", files);
  };

  return (
    <div>
      <h3>📁 Upload Multiple Files</h3>
      <input type="file" multiple onChange={handleChange} />
    </div>
  );
}`}
    </pre>

    <p>📦 You can loop through files to preview or upload them one by one.</p>

    <hr />

    <h2>💡 5. File Validation (Size & Type)</h2>
    <p>
      You can validate files before uploading — for example, limit image size or type.
    </p>

    <pre className="code-block">
{`function ValidateFile() {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File too large! Max size: 2MB");
        return;
      }
      if (!file.type.startsWith("image/")) {
        alert("Only image files are allowed!");
        return;
      }
      alert("File is valid!");
    }
  };

  return (
    <div>
      <h3>✅ File Validation Example</h3>
      <input type="file" onChange={handleChange} />
    </div>
  );
}`}
    </pre>

    <ul className="bullet-points">
      <li>⚖️ Validate <b>size</b> using <code>file.size</code> (in bytes).</li>
      <li>🧠 Validate <b>type</b> using <code>file.type</code> or <code>accept</code> attribute.</li>
    </ul>

    <hr />

    <h2>📷 6. Drag & Drop File Upload (Optional)</h2>
    <p>
      You can create a modern drag-and-drop upload box using libraries like <b>react-dropzone</b>.
    </p>

    <pre className="code-block">
{`# Install
npm install react-dropzone`}
    </pre>

    <pre className="code-block">
{`import { useDropzone } from 'react-dropzone';

function DragDropUpload() {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: { 'image/*': [] },
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      <p>📦 Drag & drop files here, or click to select files</p>
      <ul>
        {acceptedFiles.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}`}
    </pre>

    <p>
      ✨ The <b>react-dropzone</b> library provides a smooth drag-and-drop user experience and handles file validation automatically.
    </p>

    <hr />

    <h2>🧠 Quick Recap</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>File Input</td>
          <td>Let users pick files</td>
          <td><code>&lt;input type="file" /&gt;</code></td>
        </tr>
        <tr>
          <td>Preview Image</td>
          <td>Show before upload</td>
          <td><code>URL.createObjectURL()</code></td>
        </tr>
        <tr>
          <td>FormData</td>
          <td>Send file to backend</td>
          <td><code>formData.append()</code></td>
        </tr>
        <tr>
          <td>Validation</td>
          <td>Check file size/type</td>
          <td><code>file.size, file.type</code></td>
        </tr>
        <tr>
          <td>Drag & Drop</td>
          <td>Modern upload style</td>
          <td><code>react-dropzone</code></td>
        </tr>
      </tbody>
    </table>

    <hr />

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>📂 Use <code>input type="file"</code> for file selection.</li>
      <li>🖼️ Use <code>URL.createObjectURL()</code> to preview images locally.</li>
      <li>⚙️ Use <code>FormData</code> for uploading files to servers.</li>
      <li>🔍 Always validate file size and type.</li>
      <li>🎨 For better UX, use drag & drop libraries like <b>react-dropzone</b>.</li>
    </ul>

    <p className="highlight">
      With these tools, you can easily create modern file and image upload features  
      — from profile uploads to document managers 📸📁.
    </p>
  </>
)}

{/* ⚡ React Animations (Framer Motion, React Spring, CSS Transitions) 🆕 */}
{activeSection === "react-animations" && (
  <>
    <h1>⚡ React Animations (Framer Motion, React Spring, CSS Transitions) 🆕</h1>
    <p className="subtitle">
      Animations make your React app feel smooth, modern, and interactive ✨.  
      React offers multiple ways to add animations — from simple <b>CSS transitions</b> to powerful libraries like  
      <b>Framer Motion</b> and <b>React Spring</b>.
    </p>

    <hr />

    <h2>🎨 1. CSS Transitions (Simple & Built-In)</h2>
    <p>
      CSS transitions are the easiest way to animate elements in React — no extra library needed!  
      You can apply animations when elements change style or appear/disappear.
    </p>

    <pre className="code-block">
{`import React, { useState } from "react";
import "./App.css";

function FadeExample() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Box</button>
      <div className={show ? "box show" : "box hide"}></div>
    </div>
  );
}

export default FadeExample;`}
    </pre>

    <h3>💅 CSS (App.css)</h3>
    <pre className="code-block">
{`.box {
  width: 100px;
  height: 100px;
  background-color: tomato;
  transition: opacity 0.5s ease-in-out;
}

.box.hide {
  opacity: 0;
}

.box.show {
  opacity: 1;
}`}
    </pre>

    <ul className="bullet-points">
      <li>✅ Easiest way to add basic animations.</li>
      <li>🎯 Best for hover effects, fading, resizing, etc.</li>
      <li>❌ Not ideal for complex or chained animations.</li>
    </ul>

    <hr />

    <h2>💫 2. Framer Motion (Modern & Powerful)</h2>
    <p>
      <b>Framer Motion</b> is one of the most popular animation libraries for React — simple, powerful, and declarative.
    </p>

    <h3>⚙️ Installation</h3>
    <pre className="code-block">
{`npm install framer-motion`}
    </pre>

    <h3>🧩 Example: Fade In Box</h3>
    <pre className="code-block">
{`import { motion } from "framer-motion";

function FadeBox() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        width: 150,
        height: 150,
        backgroundColor: "skyblue",
        margin: "20px auto"
      }}
    />
  );
}

export default FadeBox;`}
    </pre>

    <ul className="bullet-points">
      <li>⚡ <code>initial</code> — starting style</li>
      <li>🚀 <code>animate</code> — end style</li>
      <li>⏱️ <code>transition</code> — duration, delay, and easing</li>
    </ul>

    <h3>🌀 Example: Animate on Click</h3>
    <pre className="code-block">
{`import { motion } from "framer-motion";
import { useState } from "react";

function AnimatedButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.button
      onClick={() => setIsClicked(!isClicked)}
      animate={{ scale: isClicked ? 1.2 : 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      style={{ padding: "10px 20px", fontSize: "18px" }}
    >
      Click Me 🚀
    </motion.button>
  );
}`}
    </pre>

    <ul className="bullet-points">
      <li>🧠 Framer Motion uses physics-based animations (natural and smooth).</li>
      <li>🪄 You can animate any HTML or React component with the <code>motion</code> wrapper.</li>
      <li>📦 Also supports drag, scroll, layout, and exit animations!</li>
    </ul>

    <hr />

    <h2>🌈 3. React Spring (Physics-Based Animations)</h2>
    <p>
      <b>React Spring</b> uses real-world physics to create smooth, natural animations like bouncing, dragging, or fading.
    </p>

    <h3>⚙️ Installation</h3>
    <pre className="code-block">
{`npm install @react-spring/web`}
    </pre>

    <h3>🧩 Example: Fade & Move</h3>
    <pre className="code-block">
{`import { useSpring, animated } from "@react-spring/web";

function SpringBox() {
  const styles = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 170, friction: 20 },
  });

  return (
    <animated.div style={{
      ...styles,
      width: 100,
      height: 100,
      backgroundColor: "lightgreen",
      margin: "20px auto",
    }} />
  );
}

export default SpringBox;`}
    </pre>

    <ul className="bullet-points">
      <li>🌿 <code>useSpring</code> — creates smooth animated styles.</li>
      <li>💫 <code>animated.div</code> — replaces normal <code>div</code> to make it animatable.</li>
      <li>🔧 Physics settings: <code>tension</code> and <code>friction</code>.</li>
    </ul>

    <hr />

    <h2>🧩 4. Page Transitions Example (Framer Motion + React Router)</h2>
    <p>
      You can combine Framer Motion with React Router to animate page transitions 🚀.
    </p>

    <pre className="code-block">
{`import { motion } from "framer-motion";

function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to the Page!</h1>
    </motion.div>
  );
}

export default Page;`}
    </pre>

    <p>
      🔄 Add <code>&lt;AnimatePresence&gt;</code> around your routes to make them animate smoothly when changing pages.
    </p>

    <hr />

    <h2>💡 When to Use Each</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Best For</th>
          <th>Complexity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>🎨 CSS Transitions</td>
          <td>Basic fade, hover, slide effects</td>
          <td>⭐ Easy</td>
        </tr>
        <tr>
          <td>💫 Framer Motion</td>
          <td>Modern UI/UX animations, page transitions</td>
          <td>🔥 Medium</td>
        </tr>
        <tr>
          <td>🌈 React Spring</td>
          <td>Physics-based smooth motion</td>
          <td>⚙️ Medium</td>
        </tr>
      </tbody>
    </table>

    <hr />

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>🎨 CSS Transitions — perfect for simple animations.</li>
      <li>💫 Framer Motion — the most modern and powerful React animation library.</li>
      <li>🌈 React Spring — for natural, physics-based motion.</li>
      <li>⚡ Animations improve UX, engagement, and visual appeal.</li>
      <li>🧠 Combine with routing, buttons, or modals for smooth transitions.</li>
    </ul>

    <p className="highlight">
      Mastering animations turns your React projects from static to stunning ✨  
      — making every interaction feel alive and professional 🎬.
    </p>
  </>
)}
{/* 🧠 Accessibility (a11y) in React 🆕 */}
{activeSection === "react-accessibility" && (
  <>
    <h1>🧠 Accessibility (a11y) in React 🆕</h1>
    <p className="subtitle">
      Accessibility (<b>a11y</b>) ensures that everyone — including people with disabilities — can use your React app.  
      It improves usability, SEO, and user experience 🌍.
    </p>

    <hr />

    <h2>🎯 1. What is Accessibility?</h2>
    <p>
      Accessibility means designing apps for <b>all users</b>, including those who use assistive technologies  
      like <b>screen readers</b>, <b>keyboard navigation</b>, and <b>voice input</b>.
    </p>

    <ul className="bullet-points">
      <li>♿ Make sure all interactive elements are reachable via keyboard.</li>
      <li>🗣️ Provide proper labels for screen readers.</li>
      <li>🎨 Use clear color contrast and readable text.</li>
    </ul>

    <hr />

    <h2>🔑 2. Semantic HTML</h2>
    <p>
      Always use semantic HTML elements — they give meaning to your content and help screen readers understand your UI.
    </p>

    <pre className="code-block">
{`// ❌ Bad: Using divs for everything
<div onClick={handleClick}>Submit</div>

// ✅ Good: Use semantic elements
<button onClick={handleClick}>Submit</button>`}
    </pre>

    <ul className="bullet-points">
      <li>✅ Use <code>&lt;button&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, etc.</li>
      <li>✅ Screen readers automatically understand their purpose.</li>
    </ul>

    <hr />

    <h2>⌨️ 3. Keyboard Navigation</h2>
    <p>
      Users should be able to navigate your site using the <b>Tab</b> key — especially buttons, links, and forms.
    </p>

    <pre className="code-block">
{`function AccessibleButton() {
  return (
    <button onClick={() => alert("Clicked!")}>
      Click Me
    </button>
  );
}`}
    </pre>

    <ul className="bullet-points">
      <li>✅ Focusable elements: <code>button</code>, <code>a</code>, <code>input</code>, <code>select</code>.</li>
      <li>❌ Avoid removing outline styles (or replace them with custom focus indicators).</li>
    </ul>

    <h3>🎨 Example: Custom Focus Style</h3>
    <pre className="code-block">
{`button:focus {
  outline: 3px solid #4CAF50;
  outline-offset: 2px;
}`}
    </pre>

    <hr />

    <h2>🔉 4. ARIA (Accessible Rich Internet Applications)</h2>
    <p>
      Use <b>ARIA attributes</b> to add accessibility to custom components that aren’t inherently semantic.
    </p>

    <pre className="code-block">
{`// Example: Accessible toggle button
function ToggleButton({ isOn, toggle }) {
  return (
    <button
      role="switch"
      aria-checked={isOn}
      onClick={toggle}
    >
      {isOn ? "On" : "Off"}
    </button>
  );
}`}
    </pre>

    <ul className="bullet-points">
      <li><code>role</code> — defines what the element is (e.g. “switch”, “alert”).</li>
      <li><code>aria-checked</code>, <code>aria-expanded</code>, <code>aria-label</code> — describe state and purpose.</li>
    </ul>

    <p className="note">
      ⚠️ Use ARIA only when semantic HTML can’t handle the behavior.
    </p>

    <hr />

    <h2>🌈 5. Color Contrast & Visual Clarity</h2>
    <p>
      Ensure text and backgrounds have sufficient contrast for readability.
    </p>

    <ul className="bullet-points">
      <li>🧠 Contrast ratio should be at least <b>4.5:1</b> for normal text.</li>
      <li>🎨 Avoid using color alone to convey meaning (e.g., red for error).</li>
      <li>💬 Use icons or text labels along with colors.</li>
    </ul>

    <h3>Example:</h3>
    <pre className="code-block">
{`<p style={{ color: "red" }}>❌ Error: Invalid input</p>`}
    </pre>

    <hr />

    <h2>📢 6. Accessible Forms</h2>
    <p>
      Every form field must have a descriptive label so users understand what to input.
    </p>

    <pre className="code-block">
{`function LoginForm() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" />

      <label htmlFor="password">Password:</label>
      <input id="password" type="password" />

      <button type="submit">Login</button>
    </form>
  );
}`}
    </pre>

    <ul className="bullet-points">
      <li>✅ Use <code>htmlFor</code> with matching <code>id</code>.</li>
      <li>✅ Add <code>aria-describedby</code> for extra info (e.g., error messages).</li>
    </ul>

    <hr />

    <h2>🔍 7. Testing Accessibility</h2>
    <p>
      You can use tools and libraries to check accessibility issues automatically.
    </p>

    <ul className="bullet-points">
      <li>🧩 <b>eslint-plugin-jsx-a11y</b> — Linting accessibility in JSX.</li>
      <li>🌐 <b>Lighthouse</b> — Built into Chrome DevTools.</li>
      <li>🔍 <b>axe DevTools</b> — Browser extension for in-depth checks.</li>
    </ul>

    <h3>Installation Example:</h3>
    <pre className="code-block">
{`npm install eslint-plugin-jsx-a11y --save-dev`}
    </pre>

    <p className="note">
      Run audits regularly to ensure your app remains accessible as it grows.
    </p>

    <hr />

    <h2>🧭 8. Accessibility Tips for React Developers</h2>
    <ul className="bullet-points">
      <li>✅ Prefer semantic HTML over ARIA roles.</li>
      <li>🧠 Always test with keyboard navigation.</li>
      <li>📣 Use alt text for images (<code>&lt;img alt="description" /&gt;</code>).</li>
      <li>🎧 Use screen readers (VoiceOver, NVDA, JAWS) to test experience.</li>
      <li>🧩 Ensure modals and popups trap focus correctly.</li>
    </ul>

    <hr />

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>♿ Accessibility is not optional — it’s part of good design.</li>
      <li>🔑 Use semantic elements first, ARIA only when needed.</li>
      <li>⌨️ Test navigation with the keyboard and screen readers.</li>
      <li>🎨 Maintain color contrast and readable fonts.</li>
      <li>🧠 Tools like Lighthouse and axe help automate a11y testing.</li>
    </ul>

    <p className="highlight">
      Building accessible apps makes your React projects usable by everyone 💪 —  
      that’s the mark of a truly professional developer 🌍.
    </p>
  </>
)}
{/* 🌍 Internationalization (i18n) 🆕 */}
{activeSection === "react-internationalization" && (
  <>
    <h1>🌍 Internationalization (i18n) in React 🆕</h1>
    <p className="subtitle">
      <b>Internationalization (i18n)</b> means making your React app ready for multiple languages and regions 🌎.  
      Instead of hardcoding text in one language, you design your app to adapt automatically to the user’s locale.
    </p>

    <hr />

    <h2>💡 1. What is i18n?</h2>
    <p>
      The term <b>i18n</b> stands for <b>Internationalization</b> — “i” + 18 letters + “n”.  
      It’s the process of preparing your app for different languages, number formats, and date/time formats.
    </p>

    <ul className="bullet-points">
      <li>🌐 i18n = preparing your app for translation.</li>
      <li>🗣️ l10n (Localization) = translating and adapting content for a specific region.</li>
      <li>💬 Example: “Hello” → “Hola” (Spanish) → “Bonjour” (French).</li>
    </ul>

    <hr />

    <h2>🔧 2. Why Use i18n?</h2>
    <ul className="bullet-points">
      <li>🗺️ Reach a global audience easily.</li>
      <li>🌍 Build inclusive apps that adapt to users’ languages.</li>
      <li>⚙️ Simplify translation updates without touching the main code.</li>
    </ul>

    <hr />

    <h2>🧩 3. Setting Up i18n in React</h2>
    <p>We'll use a popular library: <b>react-i18next</b> (built on <b>i18next</b>).</p>

    <pre className="code-block">
{`# Install dependencies
npm install i18next react-i18next`}
    </pre>

    <p>Now, create a folder for translations:</p>

    <pre className="code-block">
{`src/
 ├── i18n.js
 ├── locales/
 │   ├── en/translation.json
 │   └── es/translation.json
 └── App.js`}
    </pre>

    <hr />

    <h2>🗃️ 4. Create Translation Files</h2>

    <h3>📁 src/locales/en/translation.json</h3>
    <pre className="code-block">
{`{
  "welcome": "Welcome to React Learning!",
  "learn": "Start Learning React"
}`}
    </pre>

    <h3>📁 src/locales/es/translation.json</h3>
    <pre className="code-block">
{`{
  "welcome": "¡Bienvenido a React Learning!",
  "learn": "Comienza a aprender React"
}`}
    </pre>

    <hr />

    <h2>⚙️ 5. Initialize i18n</h2>

    <h3>📁 src/i18n.js</h3>
    <pre className="code-block">
{`import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;`}
    </pre>

    <p>Import this file at the root of your app (usually <code>index.js</code>):</p>

    <pre className="code-block">
{`import "./i18n";`}
    </pre>

    <hr />

    <h2>🧠 6. Using Translations in Components</h2>
    <p>Use the <b>useTranslation()</b> hook to get the <b>t</b> function for text translation.</p>

    <pre className="code-block">
{`import React from "react";
import { useTranslation } from "react-i18next";

function Welcome() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("welcome")}</h2>
      <button>{t("learn")}</button>
    </div>
  );
}

export default Welcome;`}
    </pre>

    <p>✅ Output (default “en”):</p>
    <pre className="code-block">
{`Welcome to React Learning!
[ Start Learning React ]`}
    </pre>

    <hr />

    <h2>🔄 7. Switching Languages</h2>
    <p>You can change the language dynamically with <code>i18n.changeLanguage()</code>.</p>

    <pre className="code-block">
{`import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => changeLang("en")}>English</button>
      <button onClick={() => changeLang("es")}>Español</button>
    </div>
  );
}

export default LanguageSwitcher;`}
    </pre>

    <p>✅ When you click “Español”, all text changes instantly!</p>

    <pre className="code-block">
{`¡Bienvenido a React Learning!
[ Comienza a aprender React ]`}
    </pre>

    <hr />

    <h2>🗓️ 8. Formatting Numbers, Dates, and Currencies</h2>
    <p>
      You can use the <b>Intl API</b> to format data according to the user’s locale.
    </p>

    <pre className="code-block">
{`const price = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(2500);

console.log(price); // $2,500.00`}
    </pre>

    <pre className="code-block">
{`const date = new Intl.DateTimeFormat("es-ES", {
  dateStyle: "long"
}).format(new Date());

console.log(date); // 3 de noviembre de 2025`}
    </pre>

    <ul className="bullet-points">
      <li>🌎 <code>Intl.NumberFormat()</code> → for numbers and currencies.</li>
      <li>📅 <code>Intl.DateTimeFormat()</code> → for dates and times.</li>
    </ul>

    <hr />

    <h2>🧠 9. Best Practices</h2>
    <ul className="bullet-points">
      <li>✅ Avoid hardcoded strings in components.</li>
      <li>🌍 Keep all translations in JSON files.</li>
      <li>🔄 Use dynamic placeholders: <code>t("welcome_user",{` { name: "Sofia" }`})</code>.</li>
      <li>🧩 Lazy-load language files for better performance.</li>
    </ul>

    <hr />

    <h2>💬 10. Example with Variables</h2>
    <h3>translation.json</h3>
    <pre className="code-block">
{`{
  "greeting": "Hello, {{name}}!"
}`}
    </pre>

    <h3>Component</h3>
    <pre className="code-block">
{`<h2>{t("greeting", { name: "Sofia" })}</h2>`}
    </pre>

    <p>✅ Output: <b>Hello, Sofia!</b></p>

    <hr />

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>🌍 i18n = making your React app multilingual.</li>
      <li>🗃️ Use <b>react-i18next</b> for easy translation handling.</li>
      <li>🔁 Use <b>useTranslation()</b> and <b>i18n.changeLanguage()</b> for switching languages.</li>
      <li>🧠 Format numbers and dates using the <b>Intl API</b>.</li>
      <li>💬 Store all text in JSON files for easy updates.</li>
    </ul>

    <p className="highlight">
      With i18n, your React app can speak any language —  
      from “Hello” 👋 to “こんにちは” 🌸 and “Hola” 🇪🇸!
    </p>
  </>
)}
{/* 🌍 Internationalization (i18n) 🆕 */}
{activeSection === "react-internationalization" && (
  <>
    <h1>🌍 Internationalization (i18n) in React 🆕</h1>
    <p className="subtitle">
      <b>Internationalization (i18n)</b> means making your React app ready for multiple languages and regions 🌎.  
      Instead of hardcoding text in one language, you design your app to adapt automatically to the user’s locale.
    </p>

    <hr />

    <h2>💡 1. What is i18n?</h2>
    <p>
      The term <b>i18n</b> stands for <b>Internationalization</b> — “i” + 18 letters + “n”.  
      It’s the process of preparing your app for different languages, number formats, and date/time formats.
    </p>

    <ul className="bullet-points">
      <li>🌐 i18n = preparing your app for translation.</li>
      <li>🗣️ l10n (Localization) = translating and adapting content for a specific region.</li>
      <li>💬 Example: “Hello” → “Hola” (Spanish) → “Bonjour” (French).</li>
    </ul>

    <hr />

    <h2>🔧 2. Why Use i18n?</h2>
    <ul className="bullet-points">
      <li>🗺️ Reach a global audience easily.</li>
      <li>🌍 Build inclusive apps that adapt to users’ languages.</li>
      <li>⚙️ Simplify translation updates without touching the main code.</li>
    </ul>

    <hr />

    <h2>🧩 3. Setting Up i18n in React</h2>
    <p>We'll use a popular library: <b>react-i18next</b> (built on <b>i18next</b>).</p>

    <pre className="code-block">
{`# Install dependencies
npm install i18next react-i18next`}
    </pre>

    <p>Now, create a folder for translations:</p>

    <pre className="code-block">
{`src/
 ├── i18n.js
 ├── locales/
 │   ├── en/translation.json
 │   └── es/translation.json
 └── App.js`}
    </pre>

    <hr />

    <h2>🗃️ 4. Create Translation Files</h2>

    <h3>📁 src/locales/en/translation.json</h3>
    <pre className="code-block">
{`{
  "welcome": "Welcome to React Learning!",
  "learn": "Start Learning React"
}`}
    </pre>

    <h3>📁 src/locales/es/translation.json</h3>
    <pre className="code-block">
{`{
  "welcome": "¡Bienvenido a React Learning!",
  "learn": "Comienza a aprender React"
}`}
    </pre>

    <hr />

    <h2>⚙️ 5. Initialize i18n</h2>

    <h3>📁 src/i18n.js</h3>
    <pre className="code-block">
{`import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;`}
    </pre>

    <p>Import this file at the root of your app (usually <code>index.js</code>):</p>

    <pre className="code-block">
{`import "./i18n";`}
    </pre>

    <hr />

    <h2>🧠 6. Using Translations in Components</h2>
    <p>Use the <b>useTranslation()</b> hook to get the <b>t</b> function for text translation.</p>

    <pre className="code-block">
{`import React from "react";
import { useTranslation } from "react-i18next";

function Welcome() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("welcome")}</h2>
      <button>{t("learn")}</button>
    </div>
  );
}

export default Welcome;`}
    </pre>

    <p>✅ Output (default “en”):</p>
    <pre className="code-block">
{`Welcome to React Learning!
[ Start Learning React ]`}
    </pre>

    <hr />

    <h2>🔄 7. Switching Languages</h2>
    <p>You can change the language dynamically with <code>i18n.changeLanguage()</code>.</p>

    <pre className="code-block">
{`import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => changeLang("en")}>English</button>
      <button onClick={() => changeLang("es")}>Español</button>
    </div>
  );
}

export default LanguageSwitcher;`}
    </pre>

    <p>✅ When you click “Español”, all text changes instantly!</p>

    <pre className="code-block">
{`¡Bienvenido a React Learning!
[ Comienza a aprender React ]`}
    </pre>

    <hr />

    <h2>🗓️ 8. Formatting Numbers, Dates, and Currencies</h2>
    <p>
      You can use the <b>Intl API</b> to format data according to the user’s locale.
    </p>

    <pre className="code-block">
{`const price = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(2500);

console.log(price); // $2,500.00`}
    </pre>

    <pre className="code-block">
{`const date = new Intl.DateTimeFormat("es-ES", {
  dateStyle: "long"
}).format(new Date());

console.log(date); // 3 de noviembre de 2025`}
    </pre>

    <ul className="bullet-points">
      <li>🌎 <code>Intl.NumberFormat()</code> → for numbers and currencies.</li>
      <li>📅 <code>Intl.DateTimeFormat()</code> → for dates and times.</li>
    </ul>

    <hr />

    <h2>🧠 9. Best Practices</h2>
    <ul className="bullet-points">
      <li>✅ Avoid hardcoded strings in components.</li>
      <li>🌍 Keep all translations in JSON files.</li>
      <li>🔄 Use dynamic placeholders: <code>t("welcome_user", {`{ name: "Sofia" }`})</code>.</li>
      <li>🧩 Lazy-load language files for better performance.</li>
    </ul>

    <hr />

    <h2>💬 10. Example with Variables</h2>
    <h3>translation.json</h3>
    <pre className="code-block">
{`{
  "greeting": "Hello, {{name}}!"
}`}
    </pre>

    <h3>Component</h3>
    <pre className="code-block">
{`<h2>{t("greeting", { name: "Sofia" })}</h2>`}
    </pre>

    <p>✅ Output: <b>Hello, Sofia!</b></p>

    <hr />

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>🌍 i18n = making your React app multilingual.</li>
      <li>🗃️ Use <b>react-i18next</b> for easy translation handling.</li>
      <li>🔁 Use <b>useTranslation()</b> and <b>i18n.changeLanguage()</b> for switching languages.</li>
      <li>🧠 Format numbers and dates using the <b>Intl API</b>.</li>
      <li>💬 Store all text in JSON files for easy updates.</li>
    </ul>

    <p className="highlight">
      With i18n, your React app can speak any language —  
      from “Hello” 👋 to “こんにちは” 🌸 and “Hola” 🇪🇸!
    </p>
  </>
)}
{/* 🚀 Deployment (Netlify, Vercel, GitHub Pages) */}
{activeSection === "react-deployment" && (
  <>
    <h1>🚀 Deployment (Netlify, Vercel, GitHub Pages)</h1>
    <p className="subtitle">
      Once your React app is complete, it’s time to <b>deploy</b> — make it live on the internet 🌍.  
      Deployment means hosting your app so others can access it through a web address (URL).
    </p>

    <hr />

    <h2>💡 1. Build Your React App</h2>
    <p>
      Before deploying, you need to create a production build — an optimized version of your app.
    </p>

    <pre className="code-block">
{`# In your project folder
npm run build`}
    </pre>

    <p>✅ This command creates a <code>build/</code> folder with all necessary files for deployment.</p>

    <pre className="code-block">
{`my-react-app/
 ├── public/
 ├── src/
 ├── build/   ✅ (ready for deployment)
 └── package.json`}
    </pre>

    <hr />

    <h2>🌐 2. Deploying to Netlify</h2>
    <p className="subtitle">Netlify is one of the easiest ways to host React apps — fast, free, and automatic ⚡.</p>

    <h3>Steps:</h3>
    <ol className="numbered-list">
      <li>Go to <a href="https://www.netlify.com" target="_blank" rel="noreferrer">Netlify</a>.</li>
      <li>Sign up using your <b>GitHub</b> account.</li>
      <li>Click <b>“Add New Site” → “Import from Git”</b>.</li>
      <li>Choose your React project repository.</li>
      <li>Set the build command to: <code>npm run build</code>.</li>
      <li>Set the publish directory to: <code>build</code>.</li>
      <li>Click <b>Deploy</b> 🚀.</li>
    </ol>

    <p>✅ Your app will be live in seconds at a <b>Netlify domain</b> like:</p>
    <pre className="code-block">https://yourappname.netlify.app</pre>

    <p>💡 You can also connect a <b>custom domain</b> (e.g., www.myreactapp.com).</p>

    <hr />

    <h2>⚙️ 3. Deploying to Vercel</h2>
    <p className="subtitle">
      <b>Vercel</b> (created by the Next.js team) is another great option for deploying React apps.  
      It’s fast, developer-friendly, and integrates directly with GitHub, GitLab, or Bitbucket.
    </p>

    <h3>Steps:</h3>
    <ol className="numbered-list">
      <li>Go to <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>.</li>
      <li>Click <b>“New Project”</b> → Import your GitHub repository.</li>
      <li>Vercel automatically detects React and sets:</li>
    </ol>

    <pre className="code-block">
{`Build Command: npm run build
Output Directory: build`}
    </pre>

    <ol start={4} className="numbered-list">
      <li>Click <b>Deploy</b>.</li>
    </ol>

    <p>✅ Your app will be live instantly at:</p>
    <pre className="code-block">https://yourappname.vercel.app</pre>

    <p>💡 You can add environment variables, set up redirects, or connect your custom domain easily.</p>

    <hr />

    <h2>🧭 4. Deploying to GitHub Pages</h2>
    <p className="subtitle">
      If your project is small or educational, <b>GitHub Pages</b> is a free and reliable hosting option.
    </p>

    <h3>Step 1️⃣ – Install GitHub Pages Package</h3>
    <pre className="code-block">
{`npm install gh-pages --save-dev`}
    </pre>

    <h3>Step 2️⃣ – Update <code>package.json</code></h3>
    <pre className="code-block">
{`{
  "homepage": "https://yourusername.github.io/my-react-app",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}`}
    </pre>

    <h3>Step 3️⃣ – Deploy</h3>
    <pre className="code-block">
{`npm run deploy`}
    </pre>

    <p>✅ Your React app will be live at:</p>
    <pre className="code-block">
{`https://yourusername.github.io/my-react-app`}
    </pre>

    <p>💡 Tip: Every time you update your code, just run <code>npm run deploy</code> again.</p>

    <hr />

    <h2>💬 5. Comparing Platforms</h2>

    <table className="summary-table">
      <thead>
        <tr>
          <th>Platform</th>
          <th>Free Plan</th>
          <th>Custom Domain</th>
          <th>Ease of Use</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Netlify</td><td>✅</td><td>✅</td><td>Very Easy</td></tr>
        <tr><td>Vercel</td><td>✅</td><td>✅</td><td>Very Easy</td></tr>
        <tr><td>GitHub Pages</td><td>✅</td><td>Via GitHub Settings</td><td>Medium</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>🧠 6. Best Practices Before Deploying</h2>
    <ul className="bullet-points">
      <li>✅ Run <code>npm run build</code> and test your build locally.</li>
      <li>🧩 Remove console logs and unused imports.</li>
      <li>🧠 Check for 404 routes (use <b>React Router’s fallback</b>).</li>
      <li>🔒 Add <b>environment variables</b> for API keys (don’t expose them).</li>
      <li>⚡ Optimize images and bundle size using tools like <b>React Lazy Loading</b>.</li>
    </ul>

    <hr />

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>🏗️ Run <code>npm run build</code> to create the production build.</li>
      <li>🌐 Use <b>Netlify</b> or <b>Vercel</b> for modern React deployments.</li>
      <li>🆓 Use <b>GitHub Pages</b> for free static hosting.</li>
      <li>⚙️ Always test your build before going live.</li>
      <li>🚀 After deployment, share your live app link with the world!</li>
    </ul>

    <p className="highlight">
      🎉 Congratulations! You’ve taken your React app from local development to a live website.  
      Time to show your project to the world! 🌎✨
    </p>
  </>
)}
{/* 🧱 Advanced Topics (React 19 Features, Suspense, TypeScript with React) */}
{activeSection === "react-advanced-topics" && (
  <>
    <h1>🧱 Advanced Topics (React 19 Features, Suspense, TypeScript with React)</h1>
    <p className="subtitle">
      Welcome to the advanced level of React! 💪  
      In this section, we’ll explore modern features introduced in <b>React 19</b>, learn about <b>Suspense</b> for async rendering, and how to use <b>TypeScript</b> with React for safer, scalable apps.
    </p>

    <hr />

    {/* 🌟 React 19 Features */}
    <h2>🌟 1. React 19 New Features</h2>
    <p>
      React 19 introduces powerful updates that improve performance, reduce boilerplate, and simplify server-side rendering.
    </p>

    <h3>🚀 Key Features:</h3>
    <ul className="bullet-points">
      <li>🧩 <b>React Compiler</b> — automatically optimizes re-renders and improves performance without manual memoization.</li>
      <li>⚙️ <b>React Server Components</b> — better data fetching and server-side integration.</li>
      <li>🌐 <b>use</b> Hook — simplifies async data fetching directly inside components.</li>
      <li>🧱 <b>Actions</b> — a new way to handle server mutations in frameworks like Next.js.</li>
      <li>🧠 <b>Improved Suspense</b> — better handling of async rendering and fallback UIs.</li>
    </ul>

    <h3>🧩 Example: Using the <code>use</code> Hook</h3>
    <pre className="code-block">{`
async function getUserData() {
  const response = await fetch('/api/user');
  return response.json();
}

function Profile() {
  const user = use(getUserData()); // React 19 feature
  return <h2>Hello, {user.name}!</h2>;
}
`}</pre>
    <p>💡 This simplifies async data handling without needing <code>useEffect</code> or <code>useState</code> for data fetching.</p>

    <hr />

    {/* 🌀 Suspense */}
    <h2>🌀 2. Suspense for Async Rendering</h2>
    <p>
      <b>Suspense</b> allows you to show a fallback (like a loader) while waiting for async operations — for example, lazy-loaded components or data fetching.
    </p>

    <h3>📦 Example: Lazy Loading a Component</h3>
    <pre className="code-block">{`
import React, { Suspense, lazy } from 'react';

const Profile = lazy(() => import('./Profile'));

function App() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Suspense fallback={<p>Loading profile...</p>}>
        <Profile />
      </Suspense>
    </div>
  );
}

export default App;
`}</pre>

    <p>✅ Suspense helps improve performance and user experience by loading only what’s needed when it’s needed.</p>

    <h3>💡 Real Use Cases:</h3>
    <ul className="bullet-points">
      <li>🔄 Lazy loading pages or components.</li>
      <li>🧭 Code splitting with dynamic imports.</li>
      <li>🌍 Data fetching with React Server Components.</li>
    </ul>

    <hr />

    {/* 🧠 TypeScript with React */}
    <h2>🧠 3. TypeScript with React</h2>
    <p>
      <b>TypeScript</b> adds type safety and better autocompletion to React projects, reducing bugs and improving maintainability.
    </p>

    <h3>⚙️ Why Use TypeScript?</h3>
    <ul className="bullet-points">
      <li>✅ Detects errors during development, not runtime.</li>
      <li>🧠 Helps large teams maintain cleaner, more predictable code.</li>
      <li>💬 Provides better IDE suggestions and documentation.</li>
    </ul>

    <h3>🧩 Example: React Component with TypeScript</h3>
    <pre className="code-block">{`
type GreetingProps = {
  name: string;
  age?: number; // optional prop
};

function Greeting({ name, age }: GreetingProps) {
  return (
    <p>
      Hello, {name}! {age && \`You are \${age} years old.\`}
    </p>
  );
}

export default Greeting;
`}</pre>

    <h3>🛠️ Creating a TypeScript React App</h3>
    <pre className="code-block">{`
# Using Create React App
npx create-react-app my-app --template typescript

# Using Vite (faster)
npm create vite@latest my-app -- --template react-ts
`}</pre>

    <h3>📘 Common TypeScript Types in React</h3>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Use Case</th>
          <th>Type Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Props</td>
          <td><code>type Props = {'{'} name: string {'}'}</code></td>
        </tr>
        <tr>
          <td>State</td>
          <td><code>const [count, setCount] = useState&lt;number&gt;(0)</code></td>
        </tr>
        <tr>
          <td>Event</td>
          <td><code>onChange={`{(e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; ...}`}</code></td>
        </tr>
        <tr>
          <td>Ref</td>
          <td><code>useRef&lt;HTMLDivElement&gt;(null)</code></td>
        </tr>
      </tbody>
    </table>

    <hr />

    <h2>🚀 4. Combining All: Modern React Stack Example</h2>
    <pre className="code-block">{`
import React, { Suspense, use } from 'react';

async function fetchUser() {
  const res = await fetch('/api/user');
  return res.json();
}

const UserProfile = () => {
  const user = use(fetchUser());
  return <h2>Hello, {user.name}!</h2>;
};

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <UserProfile />
    </Suspense>
  );
}

export default App;
`}</pre>

    <p>
      🧠 This example shows <b>React 19’s use Hook</b>, <b>Suspense</b>, and <b>TypeScript</b>-friendly structure for modern React apps.
    </p>

    <hr />

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>🌟 React 19 introduces <b>React Compiler</b>, <b>use Hook</b>, and better <b>Server Components</b>.</li>
      <li>🌀 <b>Suspense</b> makes async rendering smooth and declarative.</li>
      <li>🧠 <b>TypeScript</b> brings type safety, better tooling, and long-term scalability.</li>
      <li>🚀 Combining them gives you the modern, high-performance React development experience.</li>
    </ul>

    <p className="highlight">
      🎉 Congratulations! You’ve mastered the core and advanced topics of React.  
      You’re now ready to build production-grade, future-proof web applications with confidence! ⚡
    </p>
  </>
)}
{/* 🧩 Mini Projects (Hands-on Practice) */}
{activeSection === "react-mini-projects" && (
  <>
    <h1>🧩 Mini Projects (Hands-on Practice)</h1>
    <p className="subtitle">
      Practice is the best way to master React! 💪  
      In this section, we’ll build <b>real-world mini projects</b> that apply the concepts you’ve learned — from components and hooks to routing and APIs.
    </p>

    <hr />

    {/* 🎯 1. Counter App */}
    <h2>🎯 1. Counter App</h2>
    <p>
      Learn how to use <b>useState</b> to manage and update values dynamically.
    </p>

    <pre className="code-block">
{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;`}
    </pre>

    <p>💡 Great for learning <b>state updates</b> and <b>event handling</b>.</p>

    <hr />

    {/* 📝 2. Todo List */}
    <h2>📝 2. Todo List</h2>
    <p>
      A classic React project — perfect for understanding <b>lists, keys, and form handling</b>.
    </p>

    <pre className="code-block">
{`import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;`}
    </pre>

    <p>✅ Learn about <b>arrays, user input, and rendering lists</b>.</p>

    <hr />

    {/* 🌤️ 3. Weather App (API Integration) */}
    <h2>🌤️ 3. Weather App (API Integration)</h2>
    <p>
      Practice using <b>fetch()</b> or <b>Axios</b> to get data from APIs.
    </p>

    <pre className="code-block">
{`import React, { useState } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const res = await fetch(
      \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=YOUR_API_KEY&units=metric\`
    );
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div>
      <h2>🌤️ Weather App</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;`}
    </pre>

    <p>🌍 Perfect for learning <b>API calls</b>, <b>conditional rendering</b>, and <b>state updates</b>.</p>

    <hr />

    {/* 🕹️ 4. Quiz App */}
    <h2>🕹️ 4. Quiz App</h2>
    <p>
      Build a simple quiz app using <b>state</b> and <b>conditional rendering</b>.
    </p>

    <pre className="code-block">
{`import React, { useState } from 'react';

const questions = [
  { q: 'What is React?', a: 'Library' },
  { q: 'What hook is used for state?', a: 'useState' },
  { q: 'What hook runs after render?', a: 'useEffect' },
];

function QuizApp() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    if (answer.trim().toLowerCase() === questions[index].a.toLowerCase()) {
      setScore(score + 1);
    }
    setAnswer('');
    setIndex(index + 1);
  };

  if (index >= questions.length)
    return <h2>✅ Quiz Completed! Your Score: {score}</h2>;

  return (
    <div>
      <h3>{questions[index].q}</h3>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default QuizApp;`}
    </pre>

    <p>🎯 Strengthen your knowledge of <b>loops, conditions, and states</b>.</p>

    <hr />

    {/* 🧭 5. Routing Example (React Router) */}
    <h2>🧭 5. Routing Example (React Router)</h2>
    <p>
      Create a simple multi-page app using <b>React Router</b>.
    </p>

    <pre className="code-block">
{`import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>🏠 Home Page</h2>;
}

function About() {
  return <h2>ℹ️ About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;`}
    </pre>

    <p>🧩 Helps understand <b>routing</b> and <b>page navigation</b> in React apps.</p>

    <hr />

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>🎯 Practice core concepts: State, Props, Hooks, and Events.</li>
      <li>🌍 Learn how to fetch and display live data from APIs.</li>
      <li>🧭 Understand routing, navigation, and component organization.</li>
      <li>💡 Strengthen your logic building and debugging skills.</li>
    </ul>

    <p className="highlight">
      🚀 These mini projects will prepare you for building full-fledged React applications.  
      Keep experimenting, refactoring, and adding new features to level up your skills! 💪
    </p>
  </>
)}

</main>
</div>

  );
};

export default ReactCourse;
