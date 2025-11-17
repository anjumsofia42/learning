import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JavascriptCourse.css";
import { Helmet } from 'react-helmet-async';
const JavascriptCourse = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const navigate = useNavigate();

  return (
    <div className="javascript-course-container d-flex">
      {/* ======= Sidebar (Desktop) ======= */}
      <aside className="sidebar d-none d-md-block p-3">
      <h4 className="sidebar-title">Javascript Tutorial</h4>
        <ul className="list-unstyled mt-3">
          <li onClick={() => navigate("/")}>🏠 Home</li>

          <li
            className={activeSection === "getting-started" ? "active" : ""}
            onClick={() => setActiveSection("getting-started")}
          >
            📚 Getting Started
          </li>
          <li
            className={activeSection === "setup-environment" ? "active" : ""}
            onClick={() => setActiveSection("setup-environment")}
          >
            💻 Setting up Environment
          </li>
          <li
            className={activeSection === "how-js-works" ? "active" : ""}
            onClick={() => setActiveSection("how-js-works")}
          >
            ⚙️ How JavaScript Works in Browsers
          </li>
          <li
            className={activeSection === "how-to-insert-javascript" ? "active" : ""}
            onClick={() => setActiveSection("how-to-insert-javascript")}
          >
            ✏️ How to Insert JavaScript
          </li>
          <li
            className={activeSection === "variables" ? "active" : ""}
            onClick={() => setActiveSection("variables")}
          >
            🔧 Variables and Constants
          </li>
          <li
            className={activeSection === "data-types" ? "active" : ""}
            onClick={() => setActiveSection("data-types")}
          >
            🔢 Data Types
          </li>
          <li
            className={activeSection === "operators" ? "active" : ""}
            onClick={() => setActiveSection("operators")}
          >
            ➕ Operators
          </li>
          <li
            className={activeSection === "control-flow" ? "active" : ""}
            onClick={() => setActiveSection("control-flow")}
          >
            🧭 Control Flow
          </li>
          <li
            className={activeSection === "functions" ? "active" : ""}
            onClick={() => setActiveSection("functions")}
          >
            🔍 Functions
          </li>
          <li
            className={activeSection === "arrays" ? "active" : ""}
            onClick={() => setActiveSection("arrays")}
          >
            📚 Arrays in JavaScript
          </li>
          <li
            className={activeSection === "objects" ? "active" : ""}
            onClick={() => setActiveSection("objects")}
          >
            📦 Objects in JavaScript
          </li>
          <li
            className={activeSection === "map-set" ? "active" : ""}
            onClick={() => setActiveSection("map-set")}
          >
            🧩 Map & Set
          </li>
          <li
            className={activeSection === "strings" ? "active" : ""}
            onClick={() => setActiveSection("strings")}
          >
            🔤 Strings in JavaScript
          </li>
          <li
            className={activeSection === "numbers" ? "active" : ""}
            onClick={() => setActiveSection("numbers")}
          >
            🔢 Numbers and Math
          </li>
          <li
            className={activeSection === "date-time" ? "active" : ""}
            onClick={() => setActiveSection("date-time")}
          >
            📅 Date and Time
          </li>
          <li
            className={activeSection === "dom" ? "active" : ""}
            onClick={() => setActiveSection("dom")}
          >
            🌐 DOM (Document Object Model)
          </li>
          <li
            className={activeSection === "bom" ? "active" : ""}
            onClick={() => setActiveSection("bom")}
          >
            🌐 BOM (Browser Object Model)
          </li>
          <li
            className={activeSection === "output" ? "active" : ""}
            onClick={() => setActiveSection("output")}
          >
            ⏳ JavaScript Output Methods
          </li>
          <li
            className={activeSection === "events" ? "active" : ""}
            onClick={() => setActiveSection("events")}
          >
            🎉 Events
          </li>
          <li
            className={activeSection === "es6" ? "active" : ""}
            onClick={() => setActiveSection("es6")}
          >
            ⚡ ES6+ (Modern JavaScript)
          </li>
          <li
            className={activeSection === "objects-depth" ? "active" : ""}
            onClick={() => setActiveSection("objects-depth")}
          >
            📦 Objects in Depth
          </li>
          <li
            className={activeSection === "async-js" ? "active" : ""}
            onClick={() => setActiveSection("async-js")}
          >
            ⏳ Asynchronous JavaScript
          </li>
          <li
            className={activeSection === "json" ? "active" : ""}
            onClick={() => setActiveSection("json")}
          >
            🎨 JSON
          </li>
          <li
            className={activeSection === "apis" ? "active" : ""}
            onClick={() => setActiveSection("apis")}
          >
            🌐 Fetch API & AJAX
          </li>
          <li
            className={activeSection === "cookies" ? "active" : ""}
            onClick={() => setActiveSection("cookies")}
          >
            💾 Web Storage & Cookies
          </li>
          <li
            className={activeSection === "error" ? "active" : ""}
            onClick={() => setActiveSection("error")}
          >
            🚨 Error Handling
          </li>
          <li
            className={activeSection === "advanced" ? "active" : ""}
            onClick={() => setActiveSection("advanced")}
          >
            🧪 Advanced Topics
          </li>
          <li
            className={activeSection === "interview" ? "active" : ""}
            onClick={() => setActiveSection("interview")}
          >
            🎓 JavaScript Interview Questions
          </li>
        </ul>
      </aside>
{/* ======= Sidebar Toggle (Mobile only, beside content) ======= */}
      <button
        className="btn btn-dark d-md-none position-fixed toggle-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#javascriptSidebar"
        aria-controls="javascriptSidebar"
      >
        <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
      </button>

      {/* ======= Offcanvas Sidebar (Mobile) ======= */}
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex="-1"
        id="javascriptSidebar"
        aria-labelledby="javascriptSidebarLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="javascriptSidebarLabel">
            Javascript Tutorial
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
          <li onClick={() => navigate("/")}>🏠 Home</li>

          <li
            className={activeSection === "getting-started" ? "active" : ""}
            onClick={() => setActiveSection("getting-started")}
          >
            📚 Getting Started
          </li>
          <li
            className={activeSection === "setup-environment" ? "active" : ""}
            onClick={() => setActiveSection("setup-environment")}
          >
            💻 Setting up Environment
          </li>
          <li
            className={activeSection === "how-js-works" ? "active" : ""}
            onClick={() => setActiveSection("how-js-works")}
          >
            ⚙️ How JavaScript Works in Browsers
          </li>
          <li
            className={activeSection === "how-to-insert-javascript" ? "active" : ""}
            onClick={() => setActiveSection("how-to-insert-javascript")}
          >
            ✏️ How to Insert JavaScript
          </li>
          <li
            className={activeSection === "variables" ? "active" : ""}
            onClick={() => setActiveSection("variables")}
          >
            🔧 Variables and Constants
          </li>
          <li
            className={activeSection === "data-types" ? "active" : ""}
            onClick={() => setActiveSection("data-types")}
          >
            🔢 Data Types
          </li>
          <li
            className={activeSection === "operators" ? "active" : ""}
            onClick={() => setActiveSection("operators")}
          >
            ➕ Operators
          </li>
          <li
            className={activeSection === "control-flow" ? "active" : ""}
            onClick={() => setActiveSection("control-flow")}
          >
            🧭 Control Flow
          </li>
          <li
            className={activeSection === "functions" ? "active" : ""}
            onClick={() => setActiveSection("functions")}
          >
            🔍 Functions
          </li>
          <li
            className={activeSection === "arrays" ? "active" : ""}
            onClick={() => setActiveSection("arrays")}
          >
            📚 Arrays in JavaScript
          </li>
          <li
            className={activeSection === "objects" ? "active" : ""}
            onClick={() => setActiveSection("objects")}
          >
            📦 Objects in JavaScript
          </li>
          <li
            className={activeSection === "map-set" ? "active" : ""}
            onClick={() => setActiveSection("map-set")}
          >
            🧩 Map & Set
          </li>
          <li
            className={activeSection === "strings" ? "active" : ""}
            onClick={() => setActiveSection("strings")}
          >
            🔤 Strings in JavaScript
          </li>
          <li
            className={activeSection === "numbers" ? "active" : ""}
            onClick={() => setActiveSection("numbers")}
          >
            🔢 Numbers and Math
          </li>
          <li
            className={activeSection === "date-time" ? "active" : ""}
            onClick={() => setActiveSection("date-time")}
          >
            📅 Date and Time
          </li>
          <li
            className={activeSection === "dom" ? "active" : ""}
            onClick={() => setActiveSection("dom")}
          >
            🌐 DOM (Document Object Model)
          </li>
          <li
            className={activeSection === "bom" ? "active" : ""}
            onClick={() => setActiveSection("bom")}
          >
            🌐 BOM (Browser Object Model)
          </li>
          <li
            className={activeSection === "output" ? "active" : ""}
            onClick={() => setActiveSection("output")}
          >
            ⏳ JavaScript Output Methods
          </li>
          <li
            className={activeSection === "events" ? "active" : ""}
            onClick={() => setActiveSection("events")}
          >
            🎉 Events
          </li>
          <li
            className={activeSection === "es6" ? "active" : ""}
            onClick={() => setActiveSection("es6")}
          >
            ⚡ ES6+ (Modern JavaScript)
          </li>
          <li
            className={activeSection === "objects-depth" ? "active" : ""}
            onClick={() => setActiveSection("objects-depth")}
          >
            📦 Objects in Depth
          </li>
          <li
            className={activeSection === "async-js" ? "active" : ""}
            onClick={() => setActiveSection("async-js")}
          >
            ⏳ Asynchronous JavaScript
          </li>
          <li
            className={activeSection === "json" ? "active" : ""}
            onClick={() => setActiveSection("json")}
          >
            🎨 JSON
          </li>
          <li
            className={activeSection === "apis" ? "active" : ""}
            onClick={() => setActiveSection("apis")}
          >
            🌐 Fetch API & AJAX
          </li>
          <li
            className={activeSection === "cookies" ? "active" : ""}
            onClick={() => setActiveSection("cookies")}
          >
            💾 Web Storage & Cookies
          </li>
          <li
            className={activeSection === "error" ? "active" : ""}
            onClick={() => setActiveSection("error")}
          >
            🚨 Error Handling
          </li>
          <li
            className={activeSection === "advanced" ? "active" : ""}
            onClick={() => setActiveSection("advanced")}
          >
            🧪 Advanced Topics
          </li>
          <li
            className={activeSection === "interview" ? "active" : ""}
            onClick={() => setActiveSection("interview")}
          >
            🎓 JavaScript Interview Questions
          </li>
        </ul>
        </div>
        </div>
      {/* 🧠 Main Course Content */}
      <main className="course-content flex-grow-1 p-4">
        {/* ✅ Getting Started Section */}
        {activeSection === "getting-started" && (
          <>
            <h1>Welcome to the JavaScript Course! 🌐</h1>
            <h2>💡 Introduction to JavaScript</h2>

            <ul className="bullet-points">
              <li>
                JavaScript is the <b>programming language</b> of the web.
              </li>
              <li>
                It can dynamically change and update both <b>HTML</b> and{" "}
                <b>CSS</b>.
              </li>
              <li>Defines the <b>behavior</b> of a web page.</li>
              <li>Used for client-side validation and interactivity.</li>
              <li>JavaScript is case-sensitive.</li>
            </ul>

            <h2>🚀 Why Use JavaScript?</h2>
            <p className="subtitle">
              JavaScript makes web pages interactive and dynamic.
            </p>

            <ul className="bullet-points">
              <li>🧠 Makes web pages interactive — responds to clicks & scrolls.</li>
              <li>⚡ Fast and efficient — runs directly in browsers.</li>
              <li>🌐 Cross-browser support — works on all major browsers.</li>
              <li>🧩 Works both frontend & backend (Node.js).</li>
              <li>🎨 Dynamic content — can modify HTML/CSS instantly.</li>
              <li>🚀 Huge community — supports React, Angular, Vue, etc.</li>
            </ul>

            <h2>🖥️ Example:</h2>
            <pre className="code-block">
{`<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Example</title>
  </head>
  <body>
    <h2 id="demo">Hello JavaScript!</h2>
    <script>
      document.getElementById("demo").innerHTML = "Hello, World! 👋";
    </script>
  </body>
</html>`}
            </pre>

            <h2>✨ Features of JavaScript</h2>
            <ol className="bullet-points">
              <li>⚡ Lightweight and Fast</li>
              <ul>
                <li>Runs directly in browsers without compilation.</li>
                <li>Executes quickly (interpreted line by line).</li>
              </ul>

              <li>🌐 Cross-Platform</li>
              <ul>
                <li>Works on all OS and browsers.</li>
              </ul>

              <li>🧠 Dynamic Typing</li>
              <ul>
                <li>No need to declare data types manually.</li>
              </ul>

              <li>🧩 Object-Oriented</li>
              <ul>
                <li>Supports classes, inheritance, and encapsulation.</li>
              </ul>

              <li>🔄 Interpreted Language</li>
              <ul>
                <li>Executed line-by-line — easy debugging.</li>
              </ul>

              <li>🎨 Client-Side Interactivity</li>
              <ul>
                <li>Can modify HTML & CSS dynamically.</li>
              </ul>
            </ol>
          </>
        )}
      




        {/* 📥 Setting up Environment */}
        {activeSection === "setup-environment" && (
          <>
            <h1>💻 Setting up Environment (VS Code & Browser Console)</h1>
            <p className="subtitle">
              You can run JavaScript code in different ways — for quick testing
              or full-fledged projects.
            </p>

            <h2>1️⃣ Using Browser Console (Quick & Easy)</h2>
            <ul className="bullet-points">
              <li>Open your browser (Chrome, Firefox, Edge, etc.).</li>
              <li>Press <b>F12</b> or <b>Ctrl + Shift + I</b> → open Developer Tools.</li>
              <li>Click on <b>Console</b> tab.</li>
              <li>Type your JavaScript code and press Enter.</li>
            </ul>

            <h3>🖥️ Example:</h3>
            <pre className="code-block">{`console.log("Hello, JavaScript!");`}</pre>

            <p className="subtitle">✅ Best for: Quick testing or debugging small snippets.</p>

            <h2>2️⃣ Using VS Code (Visual Studio Code)</h2>
            <ul className="bullet-points">
              <li>
                Download VS Code →{" "}
                <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                  https://code.visualstudio.com/
                </a>
              </li>
              <li>Create a new folder for your JS project.</li>
              <li>Open folder in VS Code.</li>
              <li>Create <b>index.html</b> & <b>script.js</b>.</li>
            </ul>

            <h3>📄 index.html</h3>
            <pre className="code-block">
{`<!DOCTYPE html>
<html>
<head>
  <title>My First JS Program</title>
</head>
<body>
  <h1>Hello JavaScript</h1>
  <script src="script.js"></script>
</body>
</html>`}
            </pre>

            <h3>📜 script.js</h3>
            <pre className="code-block">{`console.log("JavaScript is running!");`}</pre>

            <p className="subtitle">✅ Best for: Full JavaScript projects with reusable files.</p>

            <h2>⚙️ Bonus Tip:</h2>
            <p className="subtitle">Try these online editors:</p>
            <ul className="bullet-points">
              <li>🧩 JSFiddle</li>
              <li>🎨 CodePen</li>
              <li>⚡ PlayCode.io</li>
            </ul>
          </>
        )}

        {/* ⚙️ How JS Works */}
        {activeSection === "how-js-works" && (
          <>
            <h1>⚙️ How JavaScript Works in Browsers</h1>
            <p className="subtitle">
              JavaScript runs inside the web browser and controls how a web page behaves.
            </p>

            <h2>🌐 1. You open a web page</h2>
            <p className="subtitle">The browser loads <b>HTML</b>, <b>CSS</b>, and <b>JS</b> files.</p>

            <h2>🧩 2. Browser’s JavaScript Engine starts</h2>
            <ul className="bullet-points">
              <li>Chrome → V8</li>
              <li>Firefox → SpiderMonkey</li>
              <li>Safari → JavaScriptCore</li>
              <li>Edge → Chakra</li>
            </ul>

            <h2>🧠 3. JavaScript interacts with the DOM</h2>
            <p className="subtitle">JS can add, remove, or change HTML elements dynamically.</p>

            <h2>🔄 4. Responds to user actions</h2>
            <p className="subtitle">It listens for clicks, inputs, and updates content instantly.</p>

            <h2>✅ In Short:</h2>
            <p className="subtitle">
              The browser’s JS engine reads, executes, and interacts with the <b>DOM</b> to make
              pages dynamic and interactive.
            </p>
          </>
        )}
        {/* ✏️ How to Insert JavaScript */}
{activeSection === "how-to-insert-javascript" && (
  <>
    <h1>🧩 How to Insert JavaScript into an HTML Page</h1>
    <p className="subtitle">
      JavaScript can be added to a web page in three main ways — <b>Inline</b>,{" "}
      <b>Internal</b>, and <b>External</b>. Let’s learn each one with examples 👇
    </p>

    {/* 1️⃣ Inline JavaScript */}
    <h2>🟢 1. Inline JavaScript</h2>
    <p className="subtitle">
      You can write JavaScript directly inside an HTML tag using attributes like{" "}
      <b>onclick</b>, <b>onmouseover</b>, or other event handlers.
    </p>

    <h3>📄 Example:</h3>
    <pre className="code-block">
{`<!DOCTYPE html>
<html>
<body>
  <button onclick="alert('Hello JavaScript!')">Click Me</button>
</body>
</html>`}
    </pre>

    <h3>🟩 Explanation:</h3>
    <ul className="bullet-points">
      <li>The code <code>alert('Hello JavaScript!')</code> runs when the user clicks the button.</li>
      <li>Best for very small scripts or quick tests.</li>
      <li>⚠️ <b>Note:</b> Avoid using too much inline JavaScript — it makes your code harder to maintain.</li>
    </ul>

    {/* 2️⃣ Internal JavaScript */}
    <h2>🟡 2. Internal JavaScript</h2>
    <p className="subtitle">
      You can write JavaScript inside the same HTML file using the{" "}
      <b>&lt;script&gt;</b> tag.
    </p>

    <h3>📄 Example:</h3>
    <pre className="code-block">
{`<!DOCTYPE html>
<html>
<head>
  <title>Internal JavaScript Example</title>
</head>
<body>
  <h2>Welcome!</h2>

  <script>
    document.write("Hello from Internal JavaScript!");
  </script>
</body>
</html>`}
    </pre>

    <h3>🟨 Explanation:</h3>
    <ul className="bullet-points">
      <li>The <b>&lt;script&gt;</b> tag is used inside the HTML file.</li>
      <li>You can write multiple lines of JavaScript within it.</li>
      <li>✅ Best for: Small websites or pages with simple scripts.</li>
    </ul>

    {/* 3️⃣ External JavaScript */}
    <h2>🔵 3. External JavaScript</h2>
    <p className="subtitle">
      You can write JavaScript in a separate <b>.js</b> file and link it to your HTML file using the{" "}
      <b>&lt;script&gt;</b> tag with a <b>src</b> attribute.
    </p>

    <h3>📄 Example:</h3>
    <p><b>HTML file (index.html):</b></p>
    <pre className="code-block">
{`<!DOCTYPE html>
<html>
<head>
  <title>External JavaScript Example</title>
</head>
<body>
  <h2>External JS Demo</h2>
  <script src="script.js"></script>
</body>
</html>`}
    </pre>

    <p className="subtitle"><b>JavaScript file (script.js):</b></p>
    <pre className="code-block">
{`alert("Hello from External JavaScript!");`}
    </pre>

    <h3>🟦 Explanation:</h3>
    <ul className="bullet-points">
      <li>JavaScript code is written separately in <b>script.js</b>.</li>
      <li>Makes the code easier to reuse and maintain.</li>
      <li>✅ Best for: Large projects and clean, modular codebases.</li>
    </ul>

    {/* ✅ Summary Table */}
    <h2>✅ Summary</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Best For</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Inline</td>
          <td>JS inside HTML element</td>
          <td>Small tasks or quick actions</td>
        </tr>
        <tr>
          <td>Internal</td>
          <td>JS inside &lt;script&gt; tag</td>
          <td>Simple pages or small projects</td>
        </tr>
        <tr>
          <td>External</td>
          <td>JS in a separate .js file</td>
          <td>Large, maintainable projects</td>
        </tr>
      </tbody>
    </table>
  </>
)}
        {/* 🔧 Variables and Constants */}
        {activeSection === 'variables' && (
          <>
            <h1>🔧 Variables and Constants in JavaScript</h1>
            <p className="subtitle">
              In JavaScript, variables and constants are used to store data values like numbers, text, or objects — so you can reuse them in your program.
            </p>
            <h2>🧮 What is a Variable?</h2>
            <p className="subtitle">
              A variable is a container that holds data which can change during program execution.
            </p>
            <h3>📄 Example:</h3>
            <pre className="code-block">
{`let name = "Alice";
let age = 21;
console.log(name);
console.log(age);
`}
            </pre>
            <h2>🔒 Declaring Variables</h2>
            <h3>You can declare variables using:</h3>
            <ul className="bullet-points">
              <li>var</li>
              <li>let</li>
              <li>const</li>
            </ul>
            <h3>Let’s see the difference 👇</h3>
            <h2>🟢 var – Old Way</h2>
            <ul className="bullet-points">
              <li>Introduced in early JavaScript.</li>
              <li>Has function scope (not block scope).</li>
              <li>Can be redeclared and updated.</li>
             </ul>
             <pre className="code-block">
{`var city = "Delhi";
var city = "Mumbai"; // Redeclaration allowed
console.log(city); // Output: Mumbai`}
             </pre>
              <ul className="bullet-points">
                <li>⚠️ Not recommended in modern JavaScript because it can cause unexpected issues.</li>
              </ul>
            <h2>🟡 let – Modern Variable</h2>
            <ul className="bullet-points">
              <li>Introduced in ES6 (2015).</li>
              <li>Has block scope (limited to the block in which it's defined).</li>
              <li>Cannot be redeclared in the same scope.</li>
            </ul>
            <pre className="code-block">
{`let city = "Delhi";
city = "Mumbai"; // Update allowed
console.log(city); // Output: Mumbai`}
            </pre>
            <h2>🔵 const – Constant Variable</h2>
            <ul className="bullet-points">
              <li>Introduced in ES6 (2015).</li>
              <li>Has block scope (limited to the block in which it's defined).</li>
              <li>Cannot be redeclared or updated.</li>
            </ul>
            <pre className="code-block">
{`const city = "Delhi";
console.log(city); // Output: Delhi
city = "Mumbai"; // Error: Assignment to constant variable`}
            </pre>
            <h2>Variable Naming Rules</h2>
            <ul className="bullet-points">
              <li>Must start with a letter, underscore (_), or dollar sign ($).</li>
              <li>Cannot start with a number.</li>
              <li>Case-sensitive (age and Age are different variables).</li>
              <li>Use meaningful names (e.g., userAge instead of x).</li>
              <li>Avoid reserved keywords (e.g., let, const, function).</li>
            </ul>
            <h2>🎯 Scope of Variables</h2>
            <table className="style-table">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Scope</th>
                  <th>Redeclare</th>
                   <th>Reassign</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>var</td>
                  <td>Function scope</td>
                  <td>✅ Yes</td>
                  <td>✅ Yes</td>
                </tr>
                <tr>
                  <td>let</td>
                  <td>Block scope</td>
                  <td>❌ No</td>
                  <td>✅ Yes</td>
                </tr>
                <tr>
                  <td>const</td>
                  <td>Block scope</td>
                  <td>❌ No</td>
                  <td>❌ No</td>
                </tr>
              </tbody>
            </table>
            <h2>🔍 Summary</h2>
            <ul className="bullet-points">
              <li>Use let for variables that change.</li>
              <li>Use const for values that should stay constant.</li>
              <li>Avoid using var in modern JavaScript.</li>
            </ul>
          </>
        )}
      {/* 🔢 Data Types */}
      {activeSection === 'data-types' && (
      <>
      <h1>🔢 Data Types in JavaScript</h1>
          <p className="subtitle">
          In JavaScript, data types define the kind of value a variable can hold — such as numbers, text, or objects.
          JavaScript is dynamically typed, meaning you don’t need to declare a type — it decides automatically at runtime.
          </p>

    <h2>🧩 Types of Data in JavaScript</h2>
    <ul className="bullet-points">
      <li><strong>Primitive Data Types</strong></li>
      <li><strong>Reference (Non-Primitive) Data Types</strong></li>
    </ul>

    <h2>🧠 1. Primitive Data Types</h2>
    <p className="subtitle">Primitive types store single values and are copied by value.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Example</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>String</td><td>"Hello", 'World'</td><td>Represents text</td></tr>
        <tr><td>Number</td><td>10, 3.14</td><td>Represents numbers (integer or float)</td></tr>
        <tr><td>Boolean</td><td>true, false</td><td>Represents logical values</td></tr>
        <tr><td>Undefined</td><td>let x;</td><td>Default value of uninitialized variables</td></tr>
        <tr><td>Null</td><td>null</td><td>Represents an empty or unknown value</td></tr>
        <tr><td>Symbol</td><td>Symbol("id")</td><td>Represents unique identifiers</td></tr>
        <tr><td>BigInt</td><td>12345678901234567890n</td><td>Used for very large integers</td></tr>
      </tbody>
    </table>

    <h3>💬 Examples of Primitive Data Types</h3>
    <div className="code-block">{`
let name = "Sofia";     // String
let age = 21;           // Number
let isStudent = true;   // Boolean
let city;               // Undefined
let score = null;       // Null
let id = Symbol("id");  // Symbol
let bigNum = 12345678901234567890n; // BigInt

console.log(typeof name);      // string
console.log(typeof age);       // number
console.log(typeof isStudent); // boolean
console.log(typeof city);      // undefined
console.log(typeof score);     // object (special case in JS)
    `}</div>

    <p><strong>🧠 Note:</strong> <code>typeof null</code> returns "object" — this is a known quirk in JavaScript.</p>

    <h2>🧱 2. Reference (Non-Primitive) Data Types</h2>
    <p className="subtitle">These types can hold multiple values and are copied by reference.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Example</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Object</td><td>{`{ name: "Sofia", age: 21 }`}</td><td>Collection of key–value pairs</td></tr>
        <tr><td>Array</td><td>[10, 20, 30]</td><td>Ordered list of values</td></tr>
        <tr><td>Function</td><td>{`function greet() {}`}</td><td>Block of code that performs a task</td></tr>
      </tbody>
    </table>

    <h3>💡 Examples of Reference Data Types</h3>
    <div className="code-block">{`
// Object
let person = { name: "Sofia", age: 21 };
console.log(person.name); // Sofia

// Array
let numbers = [1, 2, 3, 4];
console.log(numbers[2]); // 3

// Function
function greet() {
  console.log("Hello!");
}
greet(); // Output: Hello!
    `}</div>

    <h2>🔍 3. typeof Operator</h2>
    <div className="code-block">{`
console.log(typeof "Hello"); // string
console.log(typeof 25);      // number
console.log(typeof true);    // boolean
console.log(typeof null);    // object
console.log(typeof []);      // object
console.log(typeof function(){}); // function
    `}</div>

    <h2>🔄 4. Type Conversion</h2>
    <p className="subtitle">JavaScript can convert data types automatically (implicit) or manually (explicit).</p>

    <h3>✳️ Implicit Conversion (Type Coercion)</h3>
    <div className="code-block">{`
console.log("5" + 2); // "52" → Number converted to string
console.log("5" - 2); // 3 → String converted to number
    `}</div>

    <h3>🧮 Explicit Conversion</h3>
    <div className="code-block">{`
let num = Number("123"); // Convert string to number
let str = String(123);   // Convert number to string
console.log(num, str);
    `}</div>

    <h2>✅ Summary</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Type</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Primitive</td><td>String, Number, Boolean, Undefined, Null, Symbol, BigInt</td><td>"Hello", 25, true</td></tr>
        <tr><td>Reference</td><td>Object, Array, Function</td><td>{`{}`}, [ ], function()</td></tr>
      </tbody>
    </table>

    <p className="subtitle"><strong>👉 In short:</strong> JavaScript has 7 primitive and 3 reference data types.
    They help you store and manage different kinds of information in your programs.</p>
  
  </>
)}
{/* ➕ Operators in JavaScript */}
{activeSection === 'operators' && (
  <>
    
      <h1>➕ Operators in JavaScript</h1>
      <p className="subtitle">
        Operators are symbols that perform operations on values or variables — such as adding numbers, comparing values, or assigning data.
      </p>

      <h3>👉 Example:</h3>
      <div className="code-block">{`
let a = 10;
let b = 5;
console.log(a + b); // Output: 15
      `}</div>

      <h2>⚙️ Types of JavaScript Operators</h2>
      <ul className="bullet-points">
        <li>Arithmetic Operators</li>
        <li>Assignment Operators</li>
        <li>Comparison Operators</li>
        <li>Logical Operators</li>
        <li>Ternary Operator</li>
      </ul>

      {/* 1. Arithmetic Operators */}
      <h2>➕ 1. Arithmetic Operators</h2>
      <p className="subtitle">Used to perform mathematical calculations.</p>
      <table className="style-table">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>+</td><td>Addition</td><td>5 + 2</td><td>7</td></tr>
          <tr><td>-</td><td>Subtraction</td><td>5 - 2</td><td>3</td></tr>
          <tr><td>*</td><td>Multiplication</td><td>5 * 2</td><td>10</td></tr>
          <tr><td>/</td><td>Division</td><td>10 / 2</td><td>5</td></tr>
          <tr><td>%</td><td>Modulus (remainder)</td><td>10 % 3</td><td>1</td></tr>
          <tr><td>**</td><td>Exponentiation (power)</td><td>2 ** 3</td><td>8</td></tr>
          <tr><td>++</td><td>Increment</td><td>a++</td><td>Increases by 1</td></tr>
          <tr><td>--</td><td>Decrement</td><td>a--</td><td>Decreases by 1</td></tr>
        </tbody>
      </table>

      <h3>Example:</h3>
      <div className="code-block">{`
let x = 5;
x++;
console.log(x); // 6
      `}</div>

      {/* 2. Assignment Operators */}
      <h2>🟡 2. Assignment Operators</h2>
      <p className="subtitle">Used to assign values to variables.</p>
      <table className="style-table">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Example</th>
            <th>Same as</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>=</td><td>x = 10</td><td>–</td><td>10</td></tr>
          <tr><td>+=</td><td>x += 5</td><td>x = x + 5</td><td>Adds 5</td></tr>
          <tr><td>-=</td><td>x -= 3</td><td>x = x - 3</td><td>Subtracts 3</td></tr>
          <tr><td>*=</td><td>x *= 2</td><td>x = x * 2</td><td>Multiplies by 2</td></tr>
          <tr><td>/=</td><td>x /= 2</td><td>x = x / 2</td><td>Divides by 2</td></tr>
          <tr><td>%=</td><td>x %= 2</td><td>x = x % 2</td><td>Remainder after divide</td></tr>
        </tbody>
      </table>

      <h3>Example:</h3>
      <div className="code-block">{`
let y = 10;
y += 5;  // same as y = y + 5
console.log(y); // Output: 15
      `}</div>

      {/* 3. Comparison Operators */}
      <h2>⚖️ 3. Comparison Operators</h2>
      <p className="subtitle">Used to compare two values and return a boolean (true or false).</p>
      <table className="style-table">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>==</td><td>Equal to (compares values only)</td><td>5 == "5"</td><td>true</td></tr>
          <tr><td>===</td><td>Strict equal (value + type)</td><td>5 === "5"</td><td>false</td></tr>
          <tr><td>!=</td><td>Not equal</td><td>5 != 4</td><td>true</td></tr>
          <tr><td>!==</td><td>Strict not equal</td><td>5 !== "5"</td><td>true</td></tr>
          <tr><td>&gt;</td><td>Greater than</td><td>6 &gt; 3</td><td>true</td></tr>
          <tr><td>&lt;</td><td>Less than</td><td>2 &lt; 5</td><td>true</td></tr>
          <tr><td>&gt;=</td><td>Greater or equal</td><td>10 &gt;= 10</td><td>true</td></tr>
          <tr><td>&lt;=</td><td>Less or equal</td><td>3 &lt;= 5</td><td>true</td></tr>
        </tbody>
      </table>

      <h3>Example:</h3>
      <div className="code-block">{`
let a = 10, b = "10";
console.log(a == b);  // true  (only value)
console.log(a === b); // false (value + type)
      `}</div>

      {/* 4. Logical Operators */}
      <h2>🔀 4. Logical Operators</h2>
      <p className="subtitle">Used to combine multiple conditions.</p>
      <table className="style-table">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>&amp;&amp;</td><td>Logical AND</td><td>(x &gt; 5 && x &lt; 15)</td><td>true if both are true</td></tr>
          <tr><td>||</td><td>Logical OR</td><td>(x &gt; 5 || x &lt; 2)</td><td>true if any is true</td></tr>
          <tr><td>!</td><td>Logical NOT</td><td>!(x &gt; 5)</td><td>Reverses result</td></tr>
        </tbody>
      </table>

      <h3>Example:</h3>
      <div className="code-block">{`
let age = 20;
console.log(age > 18 && age < 25); // true
console.log(age < 18 || age > 25); // false
console.log(!(age < 18)); // true
      `}</div>

      {/* 5. Ternary Operator */}
      <h2>❓ 5. Ternary Operator</h2>
      <p className="subtitle">A shortcut for if-else — checks a condition in a single line.</p>

      <div className="code-block">{`
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // Output: Adult
      `}</div>

      {/* Extra: String Concatenation */}
      <h2>🧮 Extra: String Concatenation Using +</h2>
      <div className="code-block">{`
let firstName = "Sofia";
let lastName = "Roy";
console.log(firstName + " " + lastName); // Sofia Roy
      `}</div>

      {/* Summary */}
      <h2>✅ Summary</h2>
      <table className="style-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Example</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Arithmetic</td><td>+, -, *, /, %, ++, --</td><td>Math operations</td></tr>
          <tr><td>Assignment</td><td>=, +=, -=, *=</td><td>Assign values</td></tr>
          <tr><td>Comparison</td><td>==, ===, !=, &gt;, &lt;</td><td>Compare values</td></tr>
          <tr><td>Logical</td><td>&amp;&amp;, ||, !</td><td>Combine conditions</td></tr>
          <tr><td>Ternary</td><td>condition ? true : false</td><td>Short if-else</td></tr>
        </tbody>
      </table>

      <p className="subtitle"><strong>👉 In short:</strong> Operators are the building blocks of logic and calculation in JavaScript — they let you perform math, compare values, and make decisions in your programs.</p>
    
  </>
)}
{/* 🧭 Control Flow in JavaScript */}
{activeSection === 'control-flow' && (
  <>
    
      <h1>🧭 Control Flow in JavaScript</h1>
      <p className="subtitle">
        Control flow decides how the program runs step-by-step — which code should execute and which should skip — based on conditions or loops.
        Simply put, it controls the order in which your JavaScript code runs.
      </p>

      {/* 1. Conditional Statements */}
      <h2>⚡ 1. Conditional Statements (Decision Making)</h2>
      <p className="subtitle">These are used to execute code only when a condition is true.</p>

      <h3>🔹 if Statement</h3>
      <p className="subtitle">Runs a block of code only if the condition is true.</p>

      <div className="code-block">{`
if (condition) {
  // code to run if true
}
      `}</div>

      <h4>Example:</h4>
      <div className="code-block">{`
let age = 18;
if (age >= 18) {
  console.log("You can vote!");
}
      `}</div>

      <p className="subtitle"><strong>Output:</strong></p>
      <pre className="subtitle">You can vote!</pre>

      <h3>🔹 if...else Statement</h3>
      <p className="subtitle">Used when there are two possible outcomes.</p>

      <div className="code-block">{`
let age = 16;
if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You are too young to vote.");
}
      `}</div>

      <p className="subtitle"><strong>Output:</strong></p>
      <pre className="subtitle">You are too young to vote.</pre>

      <h3>🔹 if...else if...else Statement</h3>
      <p className="subtitle">Used for multiple conditions.</p>

      <div className="code-block">{`
let marks = 75;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
      `}</div>

      <p className="subtitle"><strong>Output:</strong></p>
      <pre className="subtitle">Grade: B</pre>

      <h3>🔹 switch Statement</h3>
      <p className="subtitle">
        Used when you need to compare the same variable with many possible values.
        It’s cleaner than using many <code>if...else if</code> blocks.
      </p>

      <div className="code-block">{`
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
      `}</div>

      <p className="subtitle"><strong>Output:</strong></p>
      <pre className="subtitle">Wednesday</pre>

      <p className="subtitle"><strong>🧠 Note:</strong> Always use <code>break;</code> to stop checking further cases.</p>

      {/* 2. Loops */}
      <h2>🔁 2. Loops (Repeating Tasks)</h2>
      <p className="subtitle">
        Loops let you run a block of code multiple times — useful for repeating tasks like printing numbers or iterating through arrays.
      </p>

      <h3>🔸 for Loop</h3>
      <p className="subtitle">Runs code a fixed number of times.</p>

      <div className="code-block">{`
for (initialization; condition; increment) {
  // code to execute
}
      `}</div>

      <h4>Example:</h4>
      <div className="code-block">{`
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
      `}</div>

      <p className="subtitle"><strong>Output:</strong></p>
      <pre>1{'\n'}2{'\n'}3{'\n'}4{'\n'}5</pre>

      <h3>🔸 while Loop</h3>
      <p className="subtitle">Runs the code while a condition is true.</p>

      <div className="code-block">{`
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
      `}</div>

      <p className="subtitle"><strong>Output:</strong></p>
      <pre className="subtitle">1 2 3 4 5</pre>

      <h3>🔸 do...while Loop</h3>
      <p className="subtitle">Runs the code at least once, even if the condition is false.</p>

      <div className="code-block">{`
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 3);
      `}</div>

      <p className="subtitle"><strong>Output:</strong></p>
      <pre className="subtitle">1{'\n'}2{'\n'}3</pre>

      <h3>🔸 for...of Loop</h3>
      <p className="subtitle">Used to iterate over arrays or strings.</p>

      <div className="code-block">{`
let fruits = ["Apple", "Mango", "Banana"];
for (let fruit of fruits) {
  console.log(fruit);
}
      `}</div>

      <p className="subtitle"><strong>Output:</strong></p>
      <pre className="subtitle">Apple{'\n'}Mango{'\n'}Banana</pre>

      <h3>🔸 for...in Loop</h3>
      <p className="subtitle">Used to loop through object properties.</p>

      <div className="code-block">{`
let person = { name: "Sofia", age: 21, city: "Delhi" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}
      `}</div>

      <p className="subtitle"><strong>Output:</strong></p>
      <pre className="subtitle">
name: Sofia{'\n'}
age: 21{'\n'}
city: Delhi
      </pre>

      {/* 3. Jump Statements */}
      <h2>🚦 3. Jump Statements</h2>

      <h3>🔹 break Statement</h3>
      <p className="subtitle">Used to exit from a loop or switch early.</p>

      <div className="code-block">{`
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
      `}</div>

      <p className="subtitle"><strong>Output:</strong></p>
      <pre className="subtitle">1{'\n'}2</pre>

      <h3>🔹 continue Statement</h3>
      <p className="subtitle">Used to skip the current iteration and continue to the next.</p>

      <div className="code-block">{`
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
      `}</div>

      <p className="subtitle"><strong>Output:</strong></p>
      <pre className="subtitle">1{'\n'}2{'\n'}4{'\n'}5</pre>

      {/* Summary */}
      <h2>✅ Summary</h2>
      <table className="style-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Statements</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Conditional</td><td>if, else if, else, switch</td><td>Decision-making</td></tr>
          <tr><td>Looping</td><td>for, while, do...while, for...of, for...in</td><td>Repeat code</td></tr>
          <tr><td>Jump</td><td>break, continue</td><td>Control loop execution</td></tr>
        </tbody>
      </table>
      <p className="subtitle"><strong>👉 In short:</strong> Control flow helps JavaScript decide what to run and how many times — making programs smarter and more dynamic.</p>
    
  </>
)}

{/* Functions */}
{activeSection === 'functions' && (
  <>
    
      <h1>🔧 Functions in JavaScript</h1>
      <p className="subtitle">A function is a block of code designed to perform a specific task.
      You can reuse it whenever you need, instead of writing the same code again and again.</p>
      <h2>💡 Why Use Functions?</h2>
      <ul className="bullet-points">
        <li>To avoid repeating code</li>
        <li>To make programs organized and readable</li>
        <li>To make code reusable and modular</li>
      </ul>
      <h2>🧱 1. Function Declaration</h2>
      <p className="subtitle">You can declare a function using the function keyword.</p>
      <h3>Syntax:</h3>
      <div className="code-block">{`
      function functionName() {
  // code to execute
}
      `}</div>
      <h3>Example:</h3>
      <div className="code-block">{`
function greet() {
  console.log("Hello, World!");
}
      `}</div>
      <h3>Output:</h3>
      <div className="code-block">{`
Hello, World!
      `}</div>
      <h3>Output:</h3>
      <div className="code-block">{`
Hello, World!
      `}</div>
      <h2>⚡ 2. Function with Parameters</h2>
      <p className="subtitle">Functions can take input values called parameters.</p>
      <div className="code-block">{`function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Sofia");
greet("Alexa");
      `}</div>
      <h3>Output:</h3>
      <div className="code-block">{`
Hello, Sofia!
Hello, Alexa!
      `}</div>
      <h2>🔄 3. Function with Return Value</h2>
      <p className="subtitle">Functions can return a value using the return statement.</p>
      <div className="code-block">{`
function add(a, b) {
  return a + b;
}
  
let sum = add(5, 10);
console.log("Sum:", sum);
      `}</div>
      
      <h3>Output:</h3>
      <div className="code-block">{`
Sum: 15
  `}</div>
      <h2>🧩 4. Function Expressions</h2>
      <p className="subtitle">You can also create functions using function expressions.</p>
      <div className="code-block">{`
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5));`}</div>
      <h3>Output:</h3>
      <div className="code-block">{`
20
  `}</div>
      <h2>🚀 5. Arrow Functions (ES6)</h2>
      <p className="subtitle">A shorter way to write functions.</p>
      <h2>Syntax:</h2>
      <div className="code-block">{`
const functionName = (parameters) => {
  // code
};
`}</div>
      <h3>Example:</h3>
      <div className="code-block">{`
const greet = (name) => console.log("Hello, " + name + "!");
greet("Sofia");

      `}</div>
      <h3>Output:</h3>
      <div className="code-block">{`
Hello, Sofia!`}</div>

      <h2>🧮 6. Default Parameters</h2>
      <p className="subtitle">You can set default values for function parameters.</p>
      <div className="code-block">{`function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet();        // uses default value
greet("Sofia"); // uses given value
      `}</div>
      <h3>Output:</h3>
      <div className="code-block">{`
Hello, Guest!
Hello, Sofia!
      `}</div>
      <h2>🔁 7. Function Calling Another Function</h2>
      <p className="subtitle"> Functions can call other functions — useful for breaking big tasks into smaller ones.</p>
      <h3>Example:</h3>
      <div className="code-block">{`
function add(a, b) {
  return a + b;
}

function displayResult() {
  let result = add(3, 4);
  console.log("Result:", result);
}

displayResult();
      `}</div>
      <h3>Output:</h3>
      <div className="code-block">{`
Result: 7
      `}</div>
      <h2>🧠 8. Function Scope</h2>
      <p className="subtitle">Variables declared inside a function are local and cannot be used outside it.</p>
      <h3>Example:</h3>
      <div className="code-block">{`
function showMessage() {
  let message = "Hello!";
  console.log(message); // works
}

showMessage();
// console.log(message); ❌ Error: message is not defined
      `}</div>
      <h2>🔄 9.Hoisting in Functions </h2>
      <p className="subtitle">Hoisting means JavaScript moves function declarations to the top of the scope before execution.</p>
      <h3>✅ Works with function declarations:</h3>
      <div className="code-block">{`
greet(); // Works fine!

function greet() {
  console.log("Hello!");
}

      `}</div>
      <h3>❌ Doesn’t work with function expressions or arrow functions:</h3>
      <div className="code-block">{`
greet(); // ❌ Error: greet is not defined

const greet = function() {
  console.log("Hello!");
};

      `}</div>
<h2>In short:</h2>
<ul className="bullet-points">
  <li>Function Declarations → Hoisted ✅</li>
  <li>Function Expressions / Arrow Functions → Not Hoisted ❌</li>
</ul>
      <h2>✅ Summary Table</h2>
      <table className="style-table">
        <thead>
          <tr>
            <th>Function Type</th>
            <th>Example</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Function Declaration</td>
            <td>function greet() {}</td>
            <td>Basic function definition</td>
          </tr>
          <tr>
            <td>Function with Parameters</td>
            <td>function add(a,b){}</td>
            <td>Accepts inputs</td>
          </tr>
          <tr>
            <td>Return Function</td>
            <td>return a+b;</td>
            <td>Returns output</td>
          </tr>
          <tr>
            <td>Function Expression</td>
            <td>let x = function(){}</td>
            <td>Stored in variable</td>
          </tr>
          <tr>
            <td>Arrow Function</td>
            <td>const x = () {`=>`} {}</td>
            <td>Shorter syntax for functions</td>
          </tr>
          <tr>
            <td>Default Parameter</td>
            <td>function f(x=10){}</td>
            <td>Default value</td>
          </tr>
          <tr>
            <td>Hoisting</td>
            <td>greet(); function greet(){}</td>
            <td>Works only for declarations</td>
          </tr>

        </tbody>
      </table>
      <h3>👉 In short:</h3>
      <p className="subtitle">Functions are reusable blocks of code that perform a specific task.</p>
      
      </>
)}
{/*Arrays in Javascript */}
{activeSection === 'arrays' && (
  <>
    <h1>🌟 What is an Array?</h1>
    <p className="subtitle">An Array is a collection of values stored in a single variable.
👉 You can think of an array as a list or a box with compartments, where each compartment holds one value.</p>
<h2>Example:</h2>
<div className="code-block">{`let fruits = ["apple", "banana", "mango"];`}
  </div>
  <h2>Here:</h2>
  <ul className="bullet-points">
    <li>fruits is an array.</li>
    <li>It stores 3 elements — "apple", "banana", and "mango".</li>
    <li>Each element has a position (index).</li>
  </ul>
  <h2>🧮 Array Index (Position)</h2>
  <p className="subtitle">Every item in an array has a number called an index.
👉 The index starts from 0 (not 1).</p>
<h3>Example:</h3>
<div className="code-block">{`let fruits = ["apple", "banana", "mango"];`}
  </div>
  <table className="style-table">
    <thead>
          <tr>
            <th>Index</th>
            <th>Value</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>apple</td>
          </tr>
          <tr>
            <td>1</td>
            <td>banana</td>
          </tr>
          <tr>
            <td>2</td>
            <td>mango</td>
          </tr>
        </tbody>
  </table>
<h2>You can access each value like this:</h2>
<div className="code-block">{`
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // mango
`}</div>
<h1>✍️ Creating Arrays</h1>
<h3>There are two common ways:</h3>
<ul >
  <li>✅ 1. Using square brackets []</li>
  <div className="code-block">{`let colors = ["red", "green", "blue"];`}</div>
  <li>✅ 2. Using the new Array() method</li>
  <div className="code-block">{`let colors = new Array("red", "green", "blue");`}</div>
  </ul>
  <h2>🧩 Array can store different data types</h2>
  <p className="subtitle">An array can hold values of different types, including numbers, strings, and even other arrays!</p>
  <div className="code-block">{`let details = ["John", 25, true, 5.6];`}</div>
  <h2>🪄 Accessing and Changing Values</h2>
  <h3>You can get or change array elements using their index.</h3>
  <div className="code-block">{`let fruits = ["apple", "banana", "mango"];

// Access
console.log(fruits[1]); // "banana"

// Change
fruits[1] = "orange";
console.log(fruits); // ["apple", "orange", "mango"]`}
  </div>
  <h2>🧠 Important Array Properties and Methods</h2>
  <h3>Here are some common and easy methods you’ll use often 👇</h3>
  <table className="style-table">
    <thead>
      <th>Method</th>
      <th>Description</th>
      <th>Example</th>
    </thead>
    <tbody>
      <tr>
        <td>.length</td>
        <td>Gives number of items</td>
        <td>fruits.length; // 3</td>
      </tr>
       <tr>
      <td>.push()</td>
      <td>Adds item at end</td>
      <td><code>fruits.push("grape")</code></td>
    </tr>
    <tr>
      <td>.pop()</td>
      <td>Removes last item</td>
      <td><code>fruits.pop()</code></td>
    </tr>
    <tr>
      <td>.unshift()</td>
      <td>Adds item at start</td>
      <td><code>fruits.unshift("kiwi")</code></td>
    </tr>
    <tr>
      <td>.shift()</td>
      <td>Removes first item</td>
      <td><code>fruits.shift()</code></td>
    </tr>
    <tr>
      <td>.indexOf()</td>
      <td>Finds position of value</td>
      <td><code>fruits.indexOf("mango")</code></td>
    </tr>
    <tr>
      <td>.includes()</td>
      <td>Checks if value exists</td>
      <td><code>fruits.includes("apple")</code></td>
    </tr>
    </tbody>
</table>
<h3>💡 Example</h3>
  <div class="code-block">{`
let fruits = ["apple", "banana", "mango"];

console.log(fruits.length); // 3
fruits.push("grape"); // add at end
console.log(fruits); // ["apple", "banana", "mango", "grape"]`}
  </div>

  <h3>🔁 Looping Through Arrays</h3>
  <p className="subtitle">You can use a loop to go through all items in an array.</p>

  <p className="subtitle"><strong>Example using for loop:</strong></p>
  <div class="code-block">{`
let fruits = ["apple", "banana", "mango"];

for (let i = 0; i &lt; fruits.length; i++) {
  console.log(fruits[i]);
} `}</div>

// Output:
// apple
// banana
// mango
  

  <p className="subtitle"><strong>Example using for...of loop (simpler):</strong></p>
  <div class="code-block">{`let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
} `}`
  </div>

  <h3>💡 Real-life Example</h3>
  <div class="code-block">
let friends = ["Rahul", "Amit", "Sara"];
console.log(friends[0]); // Rahul
friends.push("Neha"); // add new friend
console.log(friends); // ["Rahul", "Amit", "Sara", "Neha"]
  </div>

  <h3>🧾 Summary</h3>
  <table class="style-table">
    <thead>
      <tr>
        <th>Concept</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Store multiple values</td>
        <td>Use an array to group data</td>
        <td><code>let arr = [1, 2, 3]</code></td>
      </tr>
      <tr>
        <td>Access by index</td>
        <td>Indexes start from 0</td>
        <td><code>arr[0] → 1</code></td>
      </tr>
      <tr>
        <td>Add / Remove items</td>
        <td>Modify array easily</td>
        <td><code>push(), pop(), shift(), unshift()</code></td>
      </tr>
      <tr>
        <td>Find length</td>
        <td>Returns number of items</td>
        <td><code>arr.length</code></td>
      </tr>
      <tr>
        <td>Check value</td>
        <td>Find or check existence</td>
        <td><code>indexOf(), includes()</code></td>
      </tr>
    </tbody>
  </table>
</>
)}
{/* ⚙️ Objects in Javascript */}
        {activeSection === "objects" && (
          <>
          <h2>🧱 Objects in JavaScript</h2>
  <p class="subtitle">
    An object is a collection of data stored as key–value pairs. Think of an
    object like a real-life entity — for example, a person has properties such
    as name, age, and city.
  </p>

  <h3>🧍 Example</h3>
  <div class="code-block">{`
let person = {
  name: "John",
  age: 25,
  city: "Delhi"
};

console.log(person);`}
  </div>

  <p className="subtitle">
    Here, <strong>name</strong>, <strong>age</strong>, and <strong>city</strong> are
    keys (properties), while <strong>"John"</strong>, <strong>25</strong>, and
    <strong>"Delhi"</strong> are their values.
  </p>

  <h3>🪄 Accessing Object Values</h3>
  <p className="subtitle">There are two main ways to access values in an object:</p>

  <p className="subtitle"><strong>✅ 1. Dot Notation</strong></p>
  <div class="code-block">{`
console.log(person.name);  // John
console.log(person.age);   // 25`}
  </div>

  <p className="subtitle"><strong>✅ 2. Bracket Notation</strong></p>
  <div class="code-block">{`
console.log(person["city"]); // Delhi`}
  </div>

  <p className="subtitle">
    💡 Use dot notation when the property name is known, and bracket notation
    when it's stored in a variable or contains spaces.
  </p>

  <h3>✍️ Adding New Properties</h3>
  <div class="code-block">{`
person.country = "India";
console.log(person);

// Output:
// {
//   name: "John",
//   age: 25,
//   city: "Delhi",
//   country: "India"
// } `}
  </div>

  <h3>✏️ Changing Property Values</h3>
  <div class="code-block">{`
person.age = 30;
console.log(person.age); // 30`}
  </div>

  <h3>❌ Deleting a Property</h3>
  <div class="code-block">{`
delete person.city;
console.log(person);
  `}</div>

  <h3>🧠 Real-Life Object Example</h3>
  <div class="code-block">{`
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "blue"
};

console.log(car.brand); // Toyota
car.color = "red"; // change color
car.price = 2000000; // add new property
console.log(car);`}
  </div>

  <h3>🔁 Looping Through an Object</h3>
  <p className="subtitle">
    You can use a <code>for...in</code> loop to go through all keys in an
    object.
  </p>
  <div class="code-block">{`
let student = {
  name: "Amit",
  age: 20,
  grade: "A"
};

for (let key in student) {
  console.log(key + " : " + student[key]);
}

// Output:
// name : Amit
// age : 20
// grade : A`}
  </div>

  <h3>🧩 Objects Inside Arrays</h3>
  <div class="code-block">{`
let users = [
  { name: "Amit", age: 20 },
  { name: "Sara", age: 22 },
  { name: "John", age: 25 }
];

console.log(users[1].name); // Sara`}
  </div>

  <h3>💡 Object Methods (Functions inside Objects)</h3>
  <div class="code-block">{`
let person = {
  name: "John",
  age: 25,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); // Hello, my name is John`}
  </div>

  <p className="subtitle">
    Here, <code>this</code> refers to the current object.
  </p>

  <h3>🧾 Summary</h3>
  <table class="style-table">
    <thead>
      <tr>
        <th>Concept</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Store data in key–value pairs</td>
        <td>Objects hold data using keys and values</td>
        <td><code>let obj = {' name: "Amit" '}</code></td>
      </tr>
      <tr>
        <td>Access properties</td>
        <td>Use dot or bracket notation</td>
        <td><code>obj.name / obj["name"]</code></td>
      </tr>
      <tr>
        <td>Modify data</td>
        <td>Add, update, or delete properties</td>
        <td><code>obj.age = 30</code></td>
      </tr>
      <tr>
        <td>Loop through keys</td>
        <td>Use <code>for...in</code> loop</td>
        <td><code>for (let k in obj)</code></td>
      </tr>
      <tr>
        <td>Methods</td>
        <td>Functions inside objects</td>
        <td><code>obj.greet()</code></td>
      </tr>
    </tbody>
  </table>
      </>
        )}
        {/* 🧩 Map, Set, WeakMap & WeakSet in JavaScript */}
{activeSection === "map-set" && (
  <>
    <h1>🧩 Map, Set, WeakMap & WeakSet in JavaScript</h1>
    <p className="subtitle">
      JavaScript provides these special collection types to store data efficiently — they are more
      flexible than normal objects and arrays.  
      Let’s understand each one clearly 👇
    </p>

    <h2>🗺️ 1. Map</h2>
    <p className="subtitle">
      A <b>Map</b> is a collection of <b>key-value pairs</b> — like an object, but with better
      performance and flexibility.
    </p>

    <h3>✅ Features:</h3>
    <ul className="bullet-points">
      <li>Any data type can be used as a key (object, number, string, etc.)</li>
      <li>Maintains the insertion order</li>
      <li>Provides easy access to <b>.size</b> for total entries</li>
    </ul>

    <div className="code-block">{`
// Create a Map
let myMap = new Map();

// Add values
myMap.set("name", "Sofia");
myMap.set("age", 21);
myMap.set(true, "Yes");

// Access values
console.log(myMap.get("name"));  // Sofia
console.log(myMap.size);         // 3

// Check key exists
console.log(myMap.has("age"));   // true

// Delete a key
myMap.delete(true);

// Loop through Map
myMap.forEach((value, key) => {
  console.log(key, "=", value);
});
    `}</div>

    <p className="subtitle">
      ✅ <b>Use Map</b> when you need a key-value pair structure where keys can be of any data type.
    </p>
    <h2>🧩 Object vs Map in JavaScript</h2>

<p className="subtitle">
  Both <b>Object</b> and <b>Map</b> store key–value pairs, but they work differently in several important ways.
</p>

<h3>💡 Key Differences:</h3>

<table className="style-table">
  <thead>
    <tr>
      <th>Feature</th>
      <th>🧱 Object</th>
      <th>🗺️ Map</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Type of Keys</td>
      <td>Only <b>strings</b> or <b>symbols</b></td>
      <td>Any type (objects, numbers, strings, etc.)</td>
    </tr>
    <tr>
      <td>Order of Keys</td>
      <td>Not guaranteed</td>
      <td>Maintains <b>insertion order</b></td>
    </tr>
    <tr>
      <td>Default Keys</td>
      <td>Has built-in keys from <code>Object.prototype</code></td>
      <td>No default keys — only what you add</td>
    </tr>
    <tr>
      <td>Size</td>
      <td>Use <code>Object.keys(obj).length</code></td>
      <td>Has built-in <code>.size</code> property</td>
    </tr>
    <tr>
      <td>Iteration</td>
      <td><code>for...in</code> or <code>Object.entries()</code></td>
      <td><code>for...of</code> or <code>map.forEach()</code></td>
    </tr>
    <tr>
      <td>Performance</td>
      <td>Slower for frequent key changes</td>
      <td>Optimized for additions/deletions</td>
    </tr>
    <tr>
      <td>Serialization</td>
      <td>Can be easily converted to JSON</td>
      <td>Not directly JSON-serializable</td>
    </tr>
    <tr>
      <td>Best For</td>
      <td>Structured data (like user info)</td>
      <td>Dynamic key–value pairs</td>
    </tr>
  </tbody>
</table>

<h3>🧠 Example:</h3>

<div className="code-block">{`
//// ✅ Using an Object
let obj = { name: "Sofia", age: 22 };
console.log(obj["name"]); // Sofia


//// ✅ Using a Map
let map = new Map();
map.set("name", "Sofia");
map.set("age", 22);
map.set({ role: "dev" }, "Engineer");

console.log(map.get("name")); // Sofia
console.log(map.size);        // 3
`}</div>

<h3>⚡ Summary:</h3>
<ul className="bullet-points">
  <li>Use <b>Object</b> for structured data like configurations or user details.</li>
  <li>Use <b>Map</b> for flexible key–value storage with any key type.</li>
  <li><b>Map</b> is faster and cleaner for large or dynamic datasets.</li>
</ul>

    <h1>🧩 2. Set</h1>
    <p className="subtitle">
      A <b>Set</b> is a collection of <b>unique values</b> — duplicates are not allowed.
    </p>

    <h3>✅ Features:</h3>
    <ul className="bullet-points">
      <li>Stores only unique elements</li>
      <li>Maintains insertion order</li>
      <li>Can store any type of value</li>
    </ul>

    <div className="code-block">{`
let mySet = new Set();

// Add values
mySet.add(10);
mySet.add(20);
mySet.add(10); // Duplicate ignored

console.log(mySet);        // {10, 20}
console.log(mySet.size);   // 2

// Check if value exists
console.log(mySet.has(20)); // true

// Remove a value
mySet.delete(10);

// Loop through Set
mySet.forEach(value => console.log(value));
    `}</div>

    <p className="subtitle">
      ✅ <b>Use Set</b> when you need to store unique values, such as unique IDs or item lists.
    </p>

      <h1>💡 What is a WeakMap?</h1>

<p className="subtitle">
  A <b>WeakMap</b> is almost like a normal <b>Map</b>, but with a few special rules:
</p>

<ul className="bullet-points">
  <li>It stores <b>key–value pairs</b>.</li>
  <li>The <b>keys must be objects</b> (not strings, numbers, etc).</li>
  <li>
    Those object keys are <b>“weakly held”</b> — meaning, if the object is no longer used anywhere in your program, it’s automatically removed from the WeakMap (saving memory).
  </li>
</ul>

<h3>🧠 Example:</h3>

<div className="code-block">{`
let weakMap = new WeakMap();

let person = { name: "Sofia" };
weakMap.set(person, "Developer");

console.log(weakMap.get(person)); // "Developer"

// Now remove the only reference to 'person'
person = null; // object is gone!

// The entry is automatically removed from weakMap
`}</div>

<p className="subtitle">
  After <code>person = null</code>, the WeakMap entry disappears automatically — 
  because the object <code>{'{ name: "Sofia" }'}</code> is no longer used anywhere.
</p>

<h3>✅ Key Points (Easy to Remember):</h3>
<ul className="bullet-points">
  <li><b>Keys must be objects</b>, not strings or numbers.</li>
  <li>If the object is deleted, its entry in the WeakMap also disappears.</li>
  <li><b>No size</b>, <b>no iteration</b> (you can’t loop over a WeakMap).</li>
  <li>Used mostly for <b>private data</b> or <b>memory-efficient caching</b>.</li>
</ul>

<h3>🧩 Simple Real-Life Example:</h3>

<div className="code-block">{`
let user = { name: "Alex" };
let secrets = new WeakMap();

secrets.set(user, "Likes pizza");

console.log(secrets.get(user)); // "Likes pizza"

user = null; // user is gone
// WeakMap forgets automatically → no memory leak!
`}</div>


    <h2>♻️ 4. WeakSet</h2>
    <p className="subtitle">
      A <b>WeakSet</b> is like a Set, but it only stores <b>objects</b> and weakly references them.
    </p>

    <div className="code-block">{`
let weakSet = new WeakSet();

let obj1 = { name: "Sofia" };
let obj2 = { name: "Alexa" };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true

obj1 = null; // obj1 removed -> automatically cleared from WeakSet
    `}</div>

    <h3>✅ Key Points:</h3>
    <ul className="bullet-points">
      <li>Stores only objects</li>
      <li>Not iterable</li>
      <li>Automatically clears unused objects to save memory</li>
    </ul>

    <p className="subtitle">
      ✅ <b>Use WeakSet</b> to track objects without preventing garbage collection.
    </p>

    <h2>🧾 Summary Table</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Map</th>
          <th>Set</th>
          <th>WeakMap</th>
          <th>WeakSet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Stores key-value pairs</td>
          <td>✅ Yes</td>
          <td>❌ No</td>
          <td>✅ Yes</td>
          <td>❌ No</td>
        </tr>
        <tr>
          <td>Stores unique values</td>
          <td>❌ No</td>
          <td>✅ Yes</td>
          <td>❌ No</td>
          <td>✅ Yes</td>
        </tr>
        <tr>
          <td>Keys must be objects</td>
          <td>❌ No</td>
          <td>❌ No</td>
          <td>✅ Yes</td>
          <td>✅ Yes</td>
        </tr>
        <tr>
          <td>Automatically clears unused data</td>
          <td>❌ No</td>
          <td>❌ No</td>
          <td>✅ Yes</td>
          <td>✅ Yes</td>
        </tr>
        <tr>
          <td>Iterable</td>
          <td>✅ Yes</td>
          <td>✅ Yes</td>
          <td>❌ No</td>
          <td>❌ No</td>
        </tr>
        <tr>
          <td>Use case</td>
          <td>Key-value data</td>
          <td>Unique values</td>
          <td>Object-based cache</td>
          <td>Track object references</td>
        </tr>
      </tbody>
    </table>

    <h2>✅ In Short:</h2>
    <ul className="bullet-points">
      <li>🗺️ <b>Map</b> → Key-value pairs (any key type)</li>
      <li>🧩 <b>Set</b> → Unique values only</li>
      <li>🧠 <b>WeakMap</b> → Key-value with object keys only, auto-cleared</li>
      <li>♻️ <b>WeakSet</b> → Object-only collection, auto-cleared</li>
    </ul>

    <p className="subtitle">
      💡 <b>Tip:</b> Use <b>Map</b> and <b>Set</b> for regular data handling,  
      and <b>WeakMap</b> / <b>WeakSet</b> for memory-efficient object tracking.
    </p>
  </>
)}

        {/* ⚙️ Strings in JavaScript */}
        {activeSection === "strings" && (
          <>
          
  
  <h1>🌳 Strings in JavaScript</h1>
  <p className="subtitle">
    A string is a sequence of characters (letters, numbers, or symbols) enclosed
    in quotes. Strings are used to store and manipulate text in JavaScript.
  </p>

  <h3>💬 What is a String?</h3>
  <div className="code-block">
    {`let name = "John";
let message = 'Hello World';
let greeting = \`Welcome!\`;`}
  </div>

  <p className="subtitle">All three above are valid strings.</p>

  <h3>🧩 Different Ways to Write Strings</h3>
  <ul>
    <li>Double quotes <code>" "</code></li>
    <li>Single quotes <code>' '</code></li>
    <li>Backticks <code>\` \`</code> (Template literals)</li>
  </ul>

  <div className="code-block">
    {`let city = "Delhi";
let country = 'India';
let sentence = \`I live in \${city}, \${country}\`;
console.log(sentence); // I live in Delhi, India`}
  </div>

  <p className="subtitle">
    💡 Backticks allow variables inside strings using <code>${"{ }"}</code> —
    this is called <strong>string interpolation</strong>.
  </p>

  <h3>🪄 Accessing Characters</h3>
  <p className="subtitle">Strings behave like arrays of characters, where each character has an index.</p>
  <div className="code-block">
    {`let word = "Hello";

console.log(word[0]); // H
console.log(word[1]); // e
console.log(word[4]); // o`}
  </div>
  <p className="subtitle">Index always starts from <strong>0</strong>.</p>

  <h3>🧮 String Length</h3>
  <div className="code-block">
    {`let fruit = "Mango";
console.log(fruit.length); // 5`}
  </div>

  <h3>✂️ Common String Methods</h3>
  <table className="style-table">
    <thead>
      <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>.toUpperCase()</code></td>
        <td>Converts to uppercase</td>
        <td><code>"hello".toUpperCase() → "HELLO"</code></td>
      </tr>
      <tr>
        <td><code>.toLowerCase()</code></td>
        <td>Converts to lowercase</td>
        <td><code>"HELLO".toLowerCase() → "hello"</code></td>
      </tr>
      <tr>
        <td><code>.charAt(index)</code></td>
        <td>Returns character at position</td>
        <td><code>"Apple".charAt(2) → "p"</code></td>
      </tr>
      <tr>
        <td><code>.indexOf("text")</code></td>
        <td>Finds position of text</td>
        <td><code>"banana".indexOf("a") → 1</code></td>
      </tr>
      <tr>
        <td><code>.slice(start, end)</code></td>
        <td>Extracts part of a string</td>
        <td><code>"Hello".slice(0, 3) → "Hel"</code></td>
      </tr>
      <tr>
        <td><code>.replace(old, new)</code></td>
        <td>Replaces text</td>
        <td><code>"I love cats".replace("cats", "dogs") → "I love dogs"</code></td>
      </tr>
      <tr>
        <td><code>.trim()</code></td>
        <td>Removes spaces from both ends</td>
        <td><code>" hi ".trim() → "hi"</code></td>
      </tr>
      <tr>
        <td><code>.includes("text")</code></td>
        <td>Checks if text exists</td>
        <td><code>"apple".includes("app") → true</code></td>
      </tr>
      <tr>
        <td><code>.concat()</code></td>
        <td>Joins strings</td>
        <td><code>"Hello".concat(" World") → "Hello World"</code></td>
      </tr>
    </tbody>
  </table>

  <h3>🧵 Joining Strings</h3>
  <p className="subtitle">Strings can be joined using the <code>+</code> operator or template literals.</p>

  <p className="subtitle"><strong>✅ Using +</strong></p>
  <div className="code-block">
    {`let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // John Doe`}
  </div>

  <p className="subtitle"><strong>✅ Using Template Literals (Modern Way)</strong></p>
  <div className="code-block">
    {`let fullName = \`\${firstName} \${lastName}\`;
console.log(fullName); // John Doe`}
  </div>

  <h3>🔁 Looping Through a String</h3>
  <p className="subtitle">You can use a loop to go through each character in a string.</p>
  <div className="code-block">
    {`let word = "Hi";
for (let char of word) {
  console.log(char);
}

// Output:
// H
// i`}
  </div>

  <h3>🧠 Real-Life Example</h3>
  <div className="code-block">
    {`let userName = "  Sofia  ";
console.log(userName.trim()); // removes spaces → "Sofia"

let message = \`Hello \${userName.trim()}, welcome to JavaScript!\`;
console.log(message);

// Output:
// Hello Sofia, welcome to JavaScript!`}
  </div>

  <h3>🧾 Summary</h3>
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
        <td>String Definition</td>
        <td>Stores text inside quotes</td>
        <td><code>let text = "Hello"</code></td>
      </tr>
      <tr>
        <td>Length Property</td>
        <td>Counts number of characters</td>
        <td><code>text.length</code></td>
      </tr>
      <tr>
        <td>Common Methods</td>
        <td>Manipulate and format strings</td>
        <td><code>slice(), replace(), trim()</code></td>
      </tr>
      <tr>
        <td>Interpolation</td>
        <td>Embed variables using backticks</td>
        <td><code>{'`Hello ${name}`'}</code></td>
      </tr>
      <tr>
        <td>Immutability</td>
        <td>Strings cannot be changed directly</td>
        <td><code>text[0] = "A" ❌</code></td>
      </tr>
    </tbody>
  </table>
</>
)}
{/* Numbers and Math in JavaScript */}
{activeSection === "numbers" && (
  <>
  
  <h1>🧮 Numbers and Math in JavaScript</h1>

  <h3>🔢 What are Numbers?</h3>
  <p className="subtitle">
    In JavaScript, all numbers (whether integer or decimal) belong to the same type → <strong>number</strong>.
  </p>

  <div className="code-block">{`
let x = 10;       // integer
let y = 3.14;     // decimal (floating-point)
let z = -5;       // negative number
  `}</div>

  <p className="subtitle">Even large or small numbers are also of type <code>number</code>.</p>

  <h3>🧠 Check the Type</h3>
  <div className="code-block">{`
let a = 25;
console.log(typeof a);  // "number"
  `}</div>

  <h3>➕ Basic Arithmetic Operations</h3>
  <table className="style-table">
    <thead>
      <tr>
        <th>Operator</th>
        <th>Meaning</th>
        <th>Example</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>+</td><td>Addition</td><td>5 + 2</td><td>7</td></tr>
      <tr><td>-</td><td>Subtraction</td><td>5 - 2</td><td>3</td></tr>
      <tr><td>*</td><td>Multiplication</td><td>5 * 2</td><td>10</td></tr>
      <tr><td>/</td><td>Division</td><td>5 / 2</td><td>2.5</td></tr>
      <tr><td>%</td><td>Modulus (Remainder)</td><td>5 % 2</td><td>1</td></tr>
      <tr><td>**</td><td>Exponent (Power)</td><td>2 ** 3</td><td>8</td></tr>
    </tbody>
  </table>

  <div className="code-block">{`
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a % b);  // 1
  `}</div>

  <h3>🧩 Increment and Decrement</h3>
  <table className="style-table">
    <thead>
      <tr>
        <th>Symbol</th>
        <th>Meaning</th>
        <th>Example</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>++</td><td>Increase by 1</td><td>x++</td><td>x = x + 1</td></tr>
      <tr><td>--</td><td>Decrease by 1</td><td>x--</td><td>x = x - 1</td></tr>
    </tbody>
  </table>

  <div className="code-block">{`
let x = 5;
x++;
console.log(x); // 6
x--;
console.log(x); // 5
  `}</div>

  <h3>⚙️ Math Object</h3>
  <p className="subtitle">
    JavaScript has a built-in <code>Math</code> object that provides many useful mathematical functions and constants.
  </p>

  <h3>📘 Common Math Methods</h3>
  <table className="style-table">
    <thead>
      <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Example</th>
        <th>Output</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Math.round(x)</td><td>Rounds to nearest integer</td><td>Math.round(4.6)</td><td>5</td></tr>
      <tr><td>Math.floor(x)</td><td>Rounds down</td><td>Math.floor(4.9)</td><td>4</td></tr>
      <tr><td>Math.ceil(x)</td><td>Rounds up</td><td>Math.ceil(4.1)</td><td>5</td></tr>
      <tr><td>Math.pow(a, b)</td><td>Power (aⁿ)</td><td>Math.pow(2, 3)</td><td>8</td></tr>
      <tr><td>Math.sqrt(x)</td><td>Square root</td><td>Math.sqrt(25)</td><td>5</td></tr>
      <tr><td>Math.abs(x)</td><td>Absolute value</td><td>Math.abs(-7)</td><td>7</td></tr>
      <tr><td>Math.max(...)</td><td>Largest number</td><td>Math.max(3, 9, 5)</td><td>9</td></tr>
      <tr><td>Math.min(...)</td><td>Smallest number</td><td>Math.min(3, 9, 5)</td><td>3</td></tr>
      <tr><td>Math.random()</td><td>Random number (0–1)</td><td>Math.random()</td><td>0.27 (example)</td></tr>
    </tbody>
  </table>

  <h3>🎲 Generate Random Numbers</h3>
  <div className="code-block">{`
console.log(Math.random()); // random between 0–1

let num = Math.floor(Math.random() * 10) + 1;
console.log(num); // random between 1–10
  `}</div>

  <h3>🧮 Converting Strings to Numbers</h3>
  <p className="subtitle">Sometimes numbers are stored as text (string). You can convert them using these methods:</p>

  <table className="style-table">
    <thead>
      <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Example</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Number()</td><td>Converts string to number</td><td>Number("10")</td><td>10</td></tr>
      <tr><td>parseInt()</td><td>Converts to integer</td><td>parseInt("10.5")</td><td>10</td></tr>
      <tr><td>parseFloat()</td><td>Converts to decimal</td><td>parseFloat("10.5")</td><td>10.5</td></tr>
    </tbody>
  </table>

  <div className="code-block">{`
let str = "42";
let num = Number(str);
console.log(num + 8); // 50
  `}</div>

  <h3>🚫 NaN (Not a Number)</h3>
  <div className="code-block">{`
let result = "Hello" * 5;
console.log(result); // NaN
  `}</div>

  <h3>🧾 Summary</h3>
  <ul>
    <li>✅ JavaScript has only one number type (for integers and decimals).</li>
    <li>✅ Use arithmetic operators like +, -, *, /, %, **.</li>
    <li>✅ Use the Math object for advanced math functions.</li>
    <li>✅ Use Math.random() for random numbers.</li>
    <li>✅ Convert strings to numbers using Number(), parseInt(), or parseFloat().</li>
    <li>✅ NaN means Not a Number.</li>
  </ul>
</>
)}
{/* 📅 Date and Time Section */}
{activeSection === "date-time" && (
  <>
    <h2>⏰ Date Object in JavaScript</h2>

    <h3>📖 What is the Date Object?</h3>
    <p className="subtitle">
      JavaScript has a built-in <code>Date</code> object that lets you work with dates and times — 
      like today’s date, current time, year, month, etc.
    </p>

    <div className="code-block">{`
let now = new Date();
console.log(now);
    `}</div>

    <p className="subtitle">👉 This gives the current date and time.</p>

    <div className="code-block">{`
2025-11-01T10:30:00.000Z
    `}</div>

    <h3>📅 Creating Date Objects</h3>
    <p className="subtitle">You can create dates in different ways 👇</p>

    <div className="code-block">{`
// ✅ 1. Current date and time
let now = new Date();

// ✅ 2. Specific date
let birthday = new Date("2000-05-15");

// ✅ 3. Year, month, day, hour, minute
let date = new Date(2025, 10, 1, 10, 30);
console.log(date); // Nov 1, 2025 10:30 AM
    `}</div>

    <h3>🧩 Getting Date and Time Values</h3>
    <table className="style-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example Output</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>getFullYear()</td><td>Gets the year</td><td>2025</td></tr>
        <tr><td>getMonth()</td><td>Gets month (0–11)</td><td>10 → November</td></tr>
        <tr><td>getDate()</td><td>Gets day of month</td><td>1</td></tr>
        <tr><td>getDay()</td><td>Gets day of week (0–6)</td><td>6 → Saturday</td></tr>
      </tbody>
    </table>

    <div className="code-block">{`
let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
    `}</div>

    <h3>🧾 Summary</h3>
    <ul>
      <li>✅ Use <code>new Date()</code> to get current date and time.</li>
      <li>✅ Extract parts using <code>getFullYear()</code>, <code>getMonth()</code>, etc.</li>
      <li>✅ Modify with <code>setFullYear()</code>, <code>setDate()</code>.</li>
      <li>✅ Format using <code>toDateString()</code>, <code>toLocaleTimeString()</code>.</li>
    </ul>
  </>
)}
{/* ⚙️ DOM in JavaScript */}
{activeSection === "dom" && (
<>

  <h1>🌐 DOM (Document Object Model)</h1>

  <h2>🧠 What is the DOM?</h2>
  <p className="subtitle">
    DOM stands for <b>Document Object Model</b>.
  </p>
  <p className="subtitle">
    When a web page loads, the browser converts the HTML code into a tree-like structure called the DOM.
    JavaScript can then access, change, or add things in that structure.
  </p>
  <p className="subtitle">👉 In simple words: <b>The DOM connects JavaScript with HTML.</b></p>

  <h3>🏗️ Think of the DOM like this:</h3>
  <p className="subtitle">HTML page → becomes a tree of elements.</p>

  <div className="code-block">{`
<html>
  <body>
    <h1>Hello</h1>
    <p>Welcome to JavaScript!</p>
  </body>
</html>
  `}</div>

  <p className="subtitle">DOM Tree Structure:</p>
  <div className="code-block">{`
Document
 └── html
      └── body
           ├── h1
           └── p
  `}</div>

  <p className="subtitle">JavaScript can go inside this tree and:</p>
  <ul>
    <li>Read content</li>
    <li>Change text, color, or styles</li>
    <li>Add or remove HTML elements</li>
  </ul>

  <h3>⚙️ Accessing HTML Elements with JavaScript</h3>
  <p className="subtitle">You can get (select) HTML elements using these methods 👇</p>
 
  <table className="style-table"  >
    <thead>
      <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>document.getElementById("id")</td><td>Selects element by ID</td><td>document.getElementById("title")</td></tr>
      <tr><td>document.getElementsByClassName("class")</td><td>Selects elements by class</td><td>document.getElementsByClassName("text")</td></tr>
      <tr><td>document.getElementsByTagName("tag")</td><td>Selects elements by tag</td><td>document.getElementsByTagName("p")</td></tr>
      <tr><td>document.querySelector("selector")</td><td>Selects first match</td><td>document.querySelector(".text")</td></tr>
      <tr><td>document.querySelectorAll("selector")</td><td>Selects all matches</td><td>document.querySelectorAll("p")</td></tr>
    </tbody>
  </table>

  <h3>🧩 Example</h3>
  <p className="subtitle">HTML:</p>
  <div className="code-block">{`
<h1 id="title">Hello World</h1>
<p class="text">Welcome to JS DOM!</p>
  `}</div>

  <p className="subtitle">JavaScript:</p>
  <div className="code-block">{`
let heading = document.getElementById("title");
let paragraph = document.querySelector(".text");

console.log(heading.textContent); // Hello World
console.log(paragraph.textContent); // Welcome to JS DOM!
  `}</div>

  <h3>✏️ Changing Content</h3>
  <p className="subtitle">You can change text or HTML inside an element.</p>

  <div className="code-block">{`
document.getElementById("title").textContent = "Hi JavaScript!";
document.querySelector(".text").innerHTML = "Learning <b>DOM</b>!";
  `}</div>

  <ul>
    <li><code>textContent</code> → changes only text</li>
    <li><code>innerHTML</code> → can add HTML tags also</li>
  </ul>

  <h3>🎨 Changing Style (CSS)</h3>
  <p className="subtitle">You can change styles using the <code>.style</code> property.</p>

  <div className="code-block">{`
let heading = document.getElementById("title");
heading.style.color = "blue";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "30px";
  `}</div>

  <h3>➕ Adding and Removing Elements</h3>

  <p className="subtitle">✅ Add new element:</p>
  <div className="code-block">{`
let newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph!";
document.body.appendChild(newPara);
  `}</div>

  <p className="subtitle">❌ Remove an element:</p>
  <div className="code-block">{`
let removeItem = document.getElementById("title");
removeItem.remove();
  `}</div>

  <h3>🎯 Handling Events</h3>
  <p className="subtitle">You can make web pages interactive using events (like clicks, mouse moves, key presses, etc.)</p>

  <table className="style-table">
    <thead>
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>onclick</td><td>When clicked</td></tr>
      <tr><td>onmouseover</td><td>When mouse moves over</td></tr>
      <tr><td>onkeydown</td><td>When key is pressed</td></tr>
    </tbody>
  </table>

  <h3>🧩 Example</h3>
  <p className="subtitle">HTML:</p>
  <div className="code-block">{`
<button id="btn">Click Me</button>
<p id="msg"></p>
  `}</div>

  <p className="subtitle">JavaScript:</p>
  <div className="code-block">{`
let button = document.getElementById("btn");
let message = document.getElementById("msg");

button.onclick = function() {
  message.textContent = "Button was clicked!";
};
  `}</div>

  <h3>🧠 Real-life Example</h3>
  <p className="subtitle">HTML:</p>
  <div className="code-block">{`
<h2 id="heading">Welcome!</h2>
<button id="changeBtn">Change Text</button>
  `}</div>

  <p className="subtitle">JavaScript:</p>
  <div className="code-block">{`
let btn = document.getElementById("changeBtn");
let head = document.getElementById("heading");

btn.addEventListener("click", function() {
  head.textContent = "Text Changed Successfully!";
  head.style.color = "green";
});
  `}</div>

  <p className="subtitle">✅ When the button is clicked → the text changes and color turns green.</p>

  <h3>🧾 Summary</h3>
  <ul>
    <li>✅ DOM = structure of the web page (HTML as an object).</li>
    <li>✅ JavaScript can read, change, add, or delete HTML elements.</li>
    <li>✅ Use <code>getElementById()</code>, <code>querySelector()</code>, etc. to select elements.</li>
    <li>✅ Modify content using <code>.textContent</code>, <code>.innerHTML</code>.</li>
    <li>✅ Change CSS using <code>.style</code>.</li>
    <li>✅ Handle user actions using events like <code>onclick</code> or <code>addEventListener()</code>.</li>
  </ul>


</>
)}
{/* 🌐 BOM (Browser Object Model) */}
{activeSection === "bom" && (
  <>
    <h2>🌐 BOM (Browser Object Model)</h2>

    <p className="subtitle">
      The <strong>Browser Object Model (BOM)</strong> allows JavaScript to interact with the
      <strong> browser itself</strong>, not just the web page (like the DOM does).
    </p>

    <p className="subtitle">
      👉 In simple words: <br />
      <strong>DOM</strong> = controls <em>webpage content</em> <br />
      <strong>BOM</strong> = controls <em>browser features</em>
    </p>

    <h3>🧭 1. What is BOM?</h3>
    <p className="subtitle">
      The BOM provides access to browser-level objects such as:
      <ul>
        <li>Window</li>
        <li>Document</li>
        <li>History</li>
        <li>Navigator</li>
        <li>Location</li>
        <li>Screen</li>
      </ul>
      You can use these objects to perform actions like opening new windows, navigating pages,
      or getting browser and device information.
    </p>

    <h3>🪟 2. The <code>window</code> Object</h3>
    <p className="subtitle">
      The <strong>window</strong> object is the top-level object in the browser.
      Everything — DOM, alert, console, setTimeout, etc. — is part of it.
    </p>
    <div className="code-block">{`
console.log(window);

// You can use its properties directly:
alert("Hello!");        // same as window.alert()
setTimeout(() => {}, 1000); // same as window.setTimeout()
    `}</div>

    <h3>💬 3. window.alert(), window.confirm(), window.prompt()</h3>
    <p className="subtitle">Used to show simple dialogs and collect user input.</p>
    <div className="code-block">{`
alert("Welcome to my site!");          // Shows message box
confirm("Are you sure?");              // OK / Cancel dialog
prompt("Enter your name:");            // Input box
    `}</div>

    <h3>🕒 4. setTimeout() & setInterval()</h3>
    <p className="subtitle">
      These methods are part of the <strong>BOM</strong> — they control delayed or repeating code execution.
    </p>
    <div className="code-block">{`
setTimeout(() => console.log("Hello after 2s"), 2000);

setInterval(() => console.log("Repeats every 1s"), 1000);
    `}</div>

    <h3>📍 5. window.location</h3>
    <p className="subtitle">
      The <strong>location</strong> object gives information about the current URL and can redirect pages.
    </p>
    <div className="code-block">{`
console.log(location.href);         // Shows current URL
location.reload();                  // Reloads the page
location.replace("https://example.com"); // Redirects to another site
    `}</div>

    <h3>⏪ 6. window.history</h3>
    <p className="subtitle">Allows navigation through the browser history.</p>
    <div className="code-block">{`
history.back();     // Go to previous page
history.forward();  // Go to next page
    `}</div>

    <h3>🧭 7. window.navigator</h3>
    <p className="subtitle">
      Provides information about the browser, operating system, and user settings.
    </p>
    <div className="code-block">{`
console.log(navigator.userAgent);  // Browser info
console.log(navigator.language);   // Browser language
    `}</div>

    <h3>💻 8. window.screen</h3>
    <p className="subtitle">Gives information about the user’s screen size and resolution.</p>
    <div className="code-block">{`
console.log(screen.width);   // Screen width
console.log(screen.height);  // Screen height
    `}</div>

    <h3>✅ 9. Summary Table</h3>
    <table className="style-table">
      <thead>
        <tr>
          <th>BOM Object</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>window</td><td>Main browser object</td><td>window.alert("Hi")</td></tr>
        <tr><td>location</td><td>Get/change URL</td><td>location.href</td></tr>
        <tr><td>history</td><td>Navigate history</td><td>history.back()</td></tr>
        <tr><td>navigator</td><td>Browser info</td><td>navigator.userAgent</td></tr>
        <tr><td>screen</td><td>Screen details</td><td>screen.width</td></tr>
      </tbody>
    </table>

    <h3>💡 In Short:</h3>
    <ul>
      <li><strong>BOM</strong> lets JavaScript control the browser itself.</li>
      <li>Use it to open windows, navigate URLs, or get system info.</li>
      <li>It complements the <strong>DOM</strong> — which controls webpage content.</li>
    </ul>

    <h3>🚀 Example Mini Practice:</h3>
    <div className="code-block">{`
// 🔹 Show your browser and screen info
console.log("Browser:", navigator.userAgent);
console.log("Language:", navigator.language);
console.log("Screen Size:", screen.width + "x" + screen.height);
    `}</div>
  </>
)}

{/* ⚙️ Output methods in JavaScript */}
{activeSection === "output" && (
  <>
<h1>💬 JavaScript Output Methods</h1>
<h2>🧠 What Does “Output” Mean?</h2>
  <p className="subtitle">
    Output means showing the result of your JavaScript code to the user — either on the webpage,
    in the console, or in an alert box.
  </p>
  <p className="subtitle">JavaScript provides 4 main output methods 👇</p>

  <h3>1️⃣ console.log()</h3>
  <p className="subtitle">
    💻 Used to print messages or results to the browser console (for testing and debugging).
  </p>

  <div className="code-block">{`
console.log("Hello World!");
let a = 5;
let b = 10;
console.log("Sum is:", a + b);
  `}</div>

  <p className="subtitle">
    👉 Output appears in the console (press <code>F12</code> → Console tab in your browser).<br />
    ✅ Best for developers to check or debug code.
  </p>

  <h3>2️⃣ document.write()</h3>
  <p className="subtitle">🧾 Used to write content directly to the webpage.</p>

  <div className="code-block">{`
document.write("Hello, this text is written by JavaScript!");
  `}</div>

  <p className="subtitle">
    It shows directly on the web page (not in console).<br />
    ⚠️ Be careful — if you use <code>document.write()</code> after the page loads, it replaces the entire content.
  </p>

  <div className="code-block">{`
document.write("<h1>Welcome to JavaScript!</h1>");
  `}</div>

  <p className="subtitle">✅ Best for quick testing, not for modern production code.</p>

  <h3>3️⃣ alert()</h3>
  <p className="subtitle">🔔 Displays a popup box with a message.</p>

  <div className="code-block">{`
alert("Hello! Welcome to JavaScript!");
  `}</div>

  <p className="subtitle">
    When this line runs, a small alert box appears with an OK button.<br />
    ✅ Best for simple notifications or debugging.
  </p>

  <h3>4️⃣ innerHTML (output to HTML elements)</h3>
  <p className="subtitle">📄 Used to display output inside an HTML element (like &lt;p&gt;, &lt;div&gt;, etc.)</p>

  <div className="code-block">{`
<p id="demo"></p>

<script>
  document.getElementById("demo").innerHTML = "Hello, this text is from JavaScript!";
</script>
  `}</div>

  <p className="subtitle">✅ This is the most common way to display results on the webpage dynamically.</p>

  <h3>🧩 Example: Combine All Methods</h3>

  <div className="code-block">{`
<!DOCTYPE html>
<html>
<body>

<h2 id="output"></h2>

<script>
  // 1. Console
  console.log("This goes to console");

  // 2. Document
  document.write("This is written using document.write()<br>");

  // 3. Alert
  alert("This is an alert box!");

  // 4. innerHTML
  document.getElementById("output").innerHTML = "Displayed using innerHTML!";
</script>

</body>
</html>
  `}</div>

  <h3>🧾 Summary</h3>

  <table className="style-table">
    <thead>
      <tr>
        <th>Method</th>
        <th>Where It Shows</th>
        <th>Used For</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>console.log()</td>
        <td>Browser console</td>
        <td>Debugging / testing</td>
      </tr>
      <tr>
        <td>document.write()</td>
        <td>Webpage</td>
        <td>Quick text output</td>
      </tr>
      <tr>
        <td>alert()</td>
        <td>Popup box</td>
        <td>Notifications / warnings</td>
      </tr>
      <tr>
        <td>.innerHTML</td>
        <td>Inside HTML element</td>
        <td>Display dynamic content</td>
      </tr>
    </tbody>
  </table>

  <p className="subtitle">💡 Tip:</p>
  <ul>
    <li>✅ Use <code>console.log()</code> while learning and debugging.</li>
    <li>✅ Use <code>.innerHTML</code> to show data dynamically on web pages.</li>
    <li>🚫 Avoid using <code>document.write()</code> in real projects.</li>
    <li>⚠️ Use <code>alert()</code> only for simple messages (not user-friendly for big apps).</li>
  </ul>
</>
)}
{/* Events in JavaScript */}
{activeSection === "events" && (
  <>
  <h1>🕹️  Events in JavaScript</h1>
  <h2>💡 What is an Event?</h2>
  <p className="subtitle">
    An event is something that happens on a webpage — like a click, key press, mouse move, or page load.
    JavaScript can listen for these events and respond to them.
  </p>

  <p className="subtitle">For example:</p>
  <ul>
    <li>When a button is clicked, show a message.</li>
    <li>When a mouse moves, change color.</li>
    <li>When a form is submitted, show confirmation.</li>
  </ul>

  <p className="subtitle">
    So — <b>events = user actions</b> and <b>JavaScript = how the page reacts 🎯</b>
  </p>

  <h3>⚙️ Common Event Examples</h3>
  <table className="style-table">
    <thead>
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>onclick</td><td>When element is clicked</td></tr>
      <tr><td>onmouseover</td><td>When mouse moves over element</td></tr>
      <tr><td>onmouseout</td><td>When mouse moves out</td></tr>
      <tr><td>onkeydown</td><td>When a key is pressed</td></tr>
      <tr><td>onkeyup</td><td>When a key is released</td></tr>
      <tr><td>onchange</td><td>When input value changes</td></tr>
      <tr><td>onsubmit</td><td>When form is submitted</td></tr>
      <tr><td>onload</td><td>When page finishes loading</td></tr>
    </tbody>
  </table>

  <h3>🧩 Example 1: Click Event</h3>
  <div className="code-block">{`
<button onclick="showMessage()">Click Me</button>

<script>
  function showMessage() {
    alert("Button was clicked!");
  }
</script>
  `}</div>
  <p className="subtitle">🟢 When the button is clicked → it runs the function <code>showMessage()</code> and shows an alert box.</p>

  <h3>🧩 Example 2: Mouse Over Event</h3>
  <div className="code-block">{`
<h2 onmouseover="changeColor(this)">Hover over me!</h2>

<script>
  function changeColor(element) {
    element.style.color = "red";
  }
</script>
  `}</div>
  <p className="subtitle">🟢 When you move the mouse over the text → it turns red.</p>

  <h3>🧩 Example 3: Using addEventListener() (modern method)</h3>
  <p className="subtitle">Instead of writing events in HTML, you can add them using JavaScript. 👉 This is the clean and modern way.</p>

  <div className="code-block">{`
<button id="btn">Click Me</button>
<p id="msg"></p>

<script>
  let btn = document.getElementById("btn");
  let msg = document.getElementById("msg");

  btn.addEventListener("click", function() {
    msg.textContent = "You clicked the button!";
  });
</script>
  `}</div>
  <p className="subtitle">🟢 When you click → text appears below.</p>

  <h3>🧩 Example 4: Keyboard Event</h3>
  <div className="code-block">{`
<input type="text" id="name" placeholder="Type your name">

<script>
  let input = document.getElementById("name");

  input.addEventListener("keyup", function() {
    console.log("You typed:", input.value);
  });
</script>
  `}</div>
  <p className="subtitle">🟢 When you type something → it logs your text to the console.</p>

  <h3>🧩 Example 5: Change Background Color on Click</h3>
  <div className="code-block">{`
<button id="colorBtn">Change Background</button>

<script>
  let btn = document.getElementById("colorBtn");

  btn.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
  });
</script>
  `}</div>
  <p className="subtitle">🟢 When you click → background color changes!</p>

  <h3>🧠 Types of Events (Quick Summary)</h3>
  <table className="style-table">
    <thead>
      <tr>
        <th>Category</th>
        <th>Example Events</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Mouse Events</td><td>click, dblclick, mouseover, mouseout</td></tr>
      <tr><td>Keyboard Events</td><td>keydown, keyup, keypress</td></tr>
      <tr><td>Form Events</td><td>submit, change, focus, blur</td></tr>
      <tr><td>Window Events</td><td>load, resize, scroll</td></tr>
    </tbody>
  </table>

  <h3>💬 Example 6: Form Submit Event</h3>
  <div className="code-block">{`
<form id="myForm">
  <input type="text" id="user" placeholder="Enter name">
  <button type="submit">Submit</button>
</form>
<p id="output"></p>

<script>
  let form = document.getElementById("myForm");
  let output = document.getElementById("output");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stops page reload
    let name = document.getElementById("user").value;
    output.textContent = \`Hello, \${name}!\`;
  });
</script>
  `}</div>
  <p className="subtitle">🟢 When you type a name and click Submit → it shows “Hello, name!” without refreshing the page.</p>

  <h3>🧾 Summary</h3>
  <ul>
    <li>✅ Events = actions on the page (click, key press, etc.)</li>
    <li>✅ You can handle events in 2 ways:</li>
    <ul>
      <li>Inline → <code>onclick="functionName()"</code></li>
      <li>Modern way → <code>addEventListener("event", function)</code></li>
    </ul>
    <li>✅ Common events: click, mouseover, keyup, submit, load.</li>
    <li>✅ Use <code>e.preventDefault()</code> to stop form reload.</li>
  </ul>

  </>
)}
{/* ES6+ (Modern JavaScript)*/}
{activeSection === "es6" && (
  <>
  <h1>🔄 ES6+ (Modern JavaScript)</h1>
  <h2>🧠 What is ES6?</h2>
  <p className="subtitle">
    ES6 (ECMAScript 2015) and later versions (ES7, ES8, etc.) are modern updates to JavaScript. 
    They make JavaScript easier to write, faster to read, and more powerful.
  </p>

  <p className="subtitle">These features are used in almost every modern JavaScript project like React, Node.js, and web apps.</p>

  <h3>🌟 Important ES6+ Features</h3>

  <h4>1️⃣ let and const (Better way to declare variables)</h4>
  <p className="subtitle">
    Before ES6, we used <code>var</code>. Now we use <code>let</code> and <code>const</code>.
  </p>

  <div className="code-block">{`
let name = "Sofia";   // value can change
const pi = 3.14;      // value cannot change

let age = 20;
age = 21; // ✅ OK

const country = "India";
// country = "USA"; ❌ Error: cannot change const value
  `}</div>

  <h4>2️⃣ Arrow Functions (Short way to write functions)</h4>
  <p className="subtitle">Arrow functions are shorter and cleaner versions of normal functions.</p>

  <div className="code-block">{`
function add(a, b) {
  return a + b;
}

// ES6 version
const add = (a, b) => a + b;

const greet = name => console.log("Hello, " + name);
greet("Sofia");
  `}</div>

  <h4>3️⃣ Template Literals (Backticks ``)</h4>
  <p className="subtitle">
    Template literals use backticks (<code>`</code>) and <code>${'{variable}'}</code> for inserting values into strings.
  </p>

  <div className="code-block">{`
let name = "Sofia";
let age = 20;

console.log(\`My name is \${name} and I am \${age} years old.\`);
  `}</div>

  <h4>4️⃣ Default Parameters</h4>
  <p className="subtitle">Functions can have default parameter values.</p>

  <div className="code-block">{`
function greet(name = "Guest") {
  console.log(\`Hello, \${name}!\`);
}

greet();        // Hello, Guest!
greet("Sofia"); // Hello, Sofia!
  `}</div>

  <h4>5️⃣ Destructuring (Quickly unpack values)</h4>
  <p className="subtitle">Extract values from arrays or objects easily.</p>

  <div className="code-block">{`
// Array destructuring
let colors = ["red", "green", "blue"];
let [first, second] = colors;
console.log(first);  // red
console.log(second); // green

// Object destructuring
let person = { name: "Sofia", age: 20 };
let { name, age } = person;
console.log(name); // Sofia
console.log(age);  // 20
  `}</div>

  <h4>6️⃣ Spread (...) and Rest (...) Operators</h4>
  <p className="subtitle">
    Spread expands arrays/objects, while Rest collects remaining values.
  </p>

  <div className="code-block">{`
// Spread
let nums = [1, 2, 3];
let newNums = [...nums, 4, 5];
console.log(newNums); // [1, 2, 3, 4, 5]

// Rest
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n);
}
console.log(sum(1, 2, 3, 4)); // 10
  `}</div>

  <h4>7️⃣ Classes (For Object-Oriented Programming)</h4>
  <p className="subtitle">Classes make it easier to create and manage objects.</p>

  <div className="code-block">{`
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Hello, I am \${this.name}\`);
  }
}

let p1 = new Person("Sofia", 20);
p1.greet(); // Hello, I am Sofia
  `}</div>

  <h4>8️⃣ Import / Export (Modules)</h4>
  <p className="subtitle">Modules help split code into multiple reusable files.</p>

  <div className="code-block">{`
// math.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from './math.js';
console.log(add(2, 3)); // 5
  `}</div>

  <h4>9️⃣ Promises (Handle asynchronous code)</h4>
  <p className="subtitle">Promises help manage async operations without callback hell.</p>

  <div className="code-block">{`
let dataLoaded = true;

let promise = new Promise((resolve, reject) => {
  if (dataLoaded) resolve("Data loaded!");
  else reject("Error loading data!");
});

promise
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
  `}</div>

  <h4>🔟 Async / Await (Simpler way to handle Promises)</h4>
  <p className="subtitle">Async/await makes asynchronous code look synchronous.</p>

  <div className="code-block">{`
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let data = await response.json();
  console.log(data);
}

fetchData();
  `}</div>

  <h3>🧾 Summary Table</h3>
  <table className="style-table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>let & const</td><td>Block-scoped variables</td><td>let x=5; const y=10;</td></tr>
      <tr><td>Arrow Functions</td><td>Shorter functions</td><td>() {`=>`} {`{}`}</td></tr>
      <tr><td>Template Literals</td><td>String with backticks</td><td>Hello ${'{name}'}</td></tr>
      <tr><td>Default Params</td><td>Set default values</td><td>function(x=1)</td></tr>
      <tr><td>Destructuring</td><td>Extract values</td><td>let {`{a,b}`} = obj;</td></tr>
      <tr><td>Spread / Rest</td><td>Expand or collect</td><td>[...arr] / (...args)</td></tr>
      <tr><td>Classes</td><td>Object structure</td><td>class Person {`{}`}</td></tr>
      <tr><td>Modules</td><td>Reusable code files</td><td>import, export</td></tr>
      <tr><td>Promises</td><td>Handle async tasks</td><td>.then().catch()</td></tr>
      <tr><td>Async/Await</td><td>Clean async syntax</td><td>await fetch()</td></tr>
    </tbody>
  </table>

  <h3>💡 Tip:</h3>
  <ul>
    <li>✅ Modern browsers and frameworks (React, Vue, Node.js) all use ES6+.</li>
    <li>✅ Use <code>let</code> and <code>const</code> instead of <code>var</code>.</li>
    <li>✅ Use arrow functions and template literals for cleaner code.</li>
    <li>✅ Understand Promises and async/await for working with APIs.</li>
  </ul>
</>
)}
{/*Objects in Depth*/}
{activeSection === "objects-depth" && (
  <>
  <h1>⚙️ Objects in Depth</h1>
  <h2>🧠 What is an Object?</h2>
  <p className="subtitle">
    In JavaScript, an object is a collection of related data and functions — stored as key–value pairs.
  </p>
  <p className="subtitle">
    Think of an object like a real-world thing — for example, a car 🚗<br/>
    It has:
  </p>
  <ul>
    <li>Properties (data): color, model, speed</li>
    <li>Methods (actions): start(), stop(), drive()</li>
  </ul>

  <div className="code-block">{`
let car = {
  brand: "Toyota",
  color: "Blue",
  speed: 120,
  start: function() {
    console.log("Car started");
  }
};
  `}</div>

  <h3>🧩 Object Syntax</h3>
  <div className="code-block">{`
let objectName = {
  key1: value1,
  key2: value2,
  key3: value3
};

// Example
let person = {
  name: "Sofia",
  age: 20,
  city: "Delhi"
};
  `}</div>

  <h3>🎯 Accessing Object Properties</h3>
  <p className="subtitle">There are two ways to access object properties:</p>
  <ol>
    <li>Dot notation</li>
  </ol>
  <div className="code-block">{`
console.log(person.name); // Sofia
  `}</div>

  <ol start="2">
    <li>Bracket notation</li>
  </ol>
  <div className="code-block">{`
console.log(person["age"]); // 20
  `}</div>

  <p>
    Use dot notation normally, but bracket notation when the property name has spaces or special characters.
  </p>

  <div className="code-block">{`
let student = { "first name": "Sofia" };
console.log(student["first name"]); // Sofia
  `}</div>

  <h3>🧠 Adding and Removing Properties</h3>
  <div className="code-block">{`
// Add new property
person.country = "India";

// Update property
person.age = 21;

// Delete property
delete person.city;
  `}</div>

  <h3>⚙️ Object Methods (Functions inside objects)</h3>
  <div className="code-block">{`
let person = {
  name: "Sofia",
  age: 20,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); // Hello, my name is Sofia
  `}</div>
  <p className="subtitle">✅ The <code>this</code> keyword refers to the current object.</p>

  <h3>🧩 Nested Objects</h3>
  <div className="code-block">{`
let student = {
  name: "Sofia",
  marks: {
    math: 90,
    english: 85,
  }
};

console.log(student.marks.math); // 90
  `}</div>

  <h3>🔁 Looping Through an Object</h3>
  <div className="code-block">{`
let person = { name: "Sofia", age: 20, city: "Delhi" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Output:
// name: Sofia
// age: 20
// city: Delhi
  `}</div>

  <h3>🧱 Object Inside an Array</h3>
  <div className="code-block">{`
let users = [
  { name: "Sofia", age: 20 },
  { name: "Riya", age: 22 },
  { name: "Amit", age: 19 }
];

console.log(users[1].name); // Riya

for (let user of users) {
  console.log(user.name + " - " + user.age);
}
  `}</div>

  <h3>⚡ Useful Object Methods</h3>
  <table className="style-table">
    <thead>
      <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Object.keys(obj)</td><td>Returns all keys</td><td>Object.keys(person)</td></tr>
      <tr><td>Object.values(obj)</td><td>Returns all values</td><td>Object.values(person)</td></tr>
      <tr><td>Object.entries(obj)</td><td>Returns key–value pairs</td><td>Object.entries(person)</td></tr>
      <tr><td>Object.assign(target, source)</td><td>Copy properties</td><td>Object.assign({}, person)</td></tr>
    </tbody>
  </table>

  <div className="code-block">{`
let person = { name: "Sofia", age: 20 };
console.log(Object.keys(person));   // ['name', 'age']
console.log(Object.values(person)); // ['Sofia', 20]
  `}</div>

  <h3>🧬 Copying Objects (Shallow Copy)</h3>
  <div className="code-block">{`
let person = { name: "Sofia", age: 20 };

// Method 1: Spread operator
let copy1 = { ...person };

// Method 2: Object.assign
let copy2 = Object.assign({}, person);

copy1.name = "Riya";
console.log(person.name); // Sofia (original not changed)
  `}</div>

  <p className="subtitle">✅ These create a new copy of the object (not just a reference).</p>

  <h3>🧠 Object Destructuring (Quick extract)</h3>
  <div className="code-block">{`
let person = { name: "Sofia", age: 20, city: "Delhi" };

let { name, city } = person;
console.log(name); // Sofia
console.log(city); // Delhi
  `}</div>

  <h3>🧩 Object Methods Using Arrow Functions</h3>
  <div className="code-block">{`
let calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b
};

console.log(calculator.add(5, 3)); // 8
  `}</div>

  <h3>🧾 Summary</h3>
  <table className="style-table">
    <thead>
      <tr>
        <th>Concept</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Object</td><td>Collection of key–value pairs</td><td>{`{name:"Sofia"}`}</td></tr>
      <tr><td>Access</td><td>Dot or bracket notation</td><td>obj.name / obj["name"]</td></tr>
      <tr><td>Add/Delete</td><td>Add or remove properties</td><td>obj.newKey=val; delete obj.key</td></tr>
      <tr><td>Method</td><td>Function inside object</td><td>obj.sayHi = function(){}</td></tr>
      <tr><td>Loop</td><td>for...in loop</td><td>for(let key in obj)</td></tr>
      <tr><td>Nested</td><td>Object inside object</td><td>obj.details.name</td></tr>
      <tr><td>Array of Objects</td><td>Many objects together</td><td>[{}, {}, {}]</td></tr>
      <tr><td>Built-in Methods</td><td>Tools for working with objects</td><td>Object.keys(), Object.values()</td></tr>
    </tbody>
  </table>

  <h3>💡 Tip:</h3>
  <p className="subtitle">
    Objects are used everywhere in JavaScript — in arrays, APIs, DOM elements, and even functions!<br/>
    Understanding them deeply makes your coding life much easier 🧠💪
  </p>
</>
)}
{/* ⏳ Asynchronous JavaScript */}
{activeSection === "async-js" && (
  <>
    <h1>⏳ Asynchronous JavaScript (Simple Explanation)</h1>

    <p className="subtitle">
      JavaScript single-thread normally runs <strong>one line at a time</strong> — this is called
      <strong> synchronous execution</strong>.
      But some tasks like fetching data from the internet or waiting for a timer take time ⏱️(like API calls or timers).
      <br />
      <strong>Asynchronous JavaScript</strong> allows such tasks to run in the background
      so your program doesn’t freeze while waiting.
    </p>

    <h3>🕒 1. setTimeout()</h3>
    <p className="subtitle">
      Runs a function <strong>once after a delay</strong> (in milliseconds).
      It lets your code keep running while waiting.
    </p>
    <div className="code-block">{`
console.log("Start");

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

console.log("End");

// Output:
// Start
// End
// Hello after 2 seconds
    `}</div>

    <h3>🔁 2. setInterval()</h3>
    <p className="subtitle">
      Repeats a function again and again after a specific time interval.
    </p>
    <div className="code-block">{`
let count = 0;

let timer = setInterval(() => {
  console.log("Repeating every 1 second");
  count++;
  if (count === 3) clearInterval(timer); // stops after 3 repeats
}, 1000);
    `}</div>

    <h3>🔄 3. Callback Functions</h3>
    <p className="subtitle">
      A <strong>callback</strong> is a function that you pass into another function, and it runs later.
    </p>
    <div className="code-block">{`
function greet(name, callback) {
  console.log("Hi, " + name);
  callback(); // runs after greet finishes
}

function sayBye() {
  console.log("Bye!");
}

greet("Sofia", sayBye);

// Output:
// Hi, Sofia
// Bye!
    `}</div>

    <h3>⚠️ 4. Callback Hell</h3>
    <p className="subtitle">
      When callbacks are <strong>nested inside each other</strong>, the code becomes confusing and messy.
    </p>
    <div className="code-block">{`
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

// Output:
// Step 1
// Step 2
// Step 3
    `}</div>
    <p className="subtitle">😵 This messy nesting is called <strong>callback hell</strong>.</p>

    <h3>🌈 5. Promises</h3>
    <p className="subtitle">
      A <strong>Promise</strong> means “I’ll give you the result later”.
      It handles success (<code>resolve</code>) or failure (<code>reject</code>).
    </p>
    <div className="code-block">{`
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("✅ Task completed!");
  else reject("❌ Task failed!");
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Output: ✅ Task completed!
    `}</div>

    <h3>⚡ 6. Async / Await (Easy Way)</h3>
    <p className="subtitle">
      The <strong>modern way</strong> to write asynchronous code — it looks simple like normal code.
      <br />
      <code>await</code> waits for the result, but it doesn’t block other parts of your program.
    </p>
    <div className="code-block">{`
function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data received!"), 2000);
  });
}

async function showData() {
  console.log("Fetching data...");
  let data = await getData(); // waits until promise is done
  console.log(data);
}

showData();

// Output:
// Fetching data...
// Data received!
    `}</div>

    <h3>🌀 7. Event Loop (Behind the Scenes)</h3>
    <p className="subtitle">
      The <strong>Event Loop</strong> makes sure JavaScript knows when to run async tasks.
      <br />
      Promises (microtasks) always run <strong>before</strong> timers (macrotasks).
    </p>
    <div className="code-block">{`
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout
    `}</div>

    <h3>🧱 Summary Table</h3>
    <table className="style-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>setTimeout()</td><td>Runs once after delay</td><td>setTimeout(() =&gt; &#123;&#125;, 1000)</td></tr>
        <tr><td>setInterval()</td><td>Repeats after intervals</td><td>setInterval(() =&gt; &#123;&#125;, 1000)</td></tr>
        <tr><td>Callback</td><td>Runs after another function</td><td>greet("Sofia", sayBye)</td></tr>
        <tr><td>Callback Hell</td><td>Too many nested callbacks</td><td>setTimeout inside setTimeout</td></tr>
        <tr><td>Promise</td><td>Handles async result</td><td>.then().catch()</td></tr>
        <tr><td>async / await</td><td>Cleaner async handling</td><td>await getData()</td></tr>
        <tr><td>Event Loop</td><td>Decides task order</td><td>Promise runs before Timeout</td></tr>
      </tbody>
    </table>

    <h3>💬 In Simple Words</h3>
    <ul>
      <li>JavaScript runs one thing at a time (single-threaded).</li>
      <li>Async code helps your app keep running while waiting for something.</li>
      <li><code>setTimeout</code>, <code>fetch</code>, and <code>Promises</code> are async examples.</li>
      <li>Use <code>Promises</code> or <code>async/await</code> to make your code clean and readable.</li>
    </ul>

    <h3>💡 Tip: Handle Errors Properly</h3>
    <p className="subtitle">
      Use <code>try...catch</code> inside <code>async</code> functions to catch errors safely:
    </p>
    <div className="code-block">{`
async function getData() {
  try {
    let response = await fetch("https://fakeurl.com");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}
    `}</div>
  </>
)}


{/* 🌍 20. JSON (JavaScript Object Notation) */}
{activeSection === "json" && (
  <>
  <h1>🌍 JSON (JavaScript Object Notation)</h1>
  <p className="subtitle">
      JSON stands for <b>JavaScript Object Notation</b> — a lightweight format used to store and
      exchange data between a server and a web page.
    </p>

    <h2>🧠 What is JSON?</h2>
    <p className="subtitle">
      Think of JSON as a universal data language — easy for humans to read 📖 and simple for computers
      to understand 💻.
    </p>

    <h2>📦 Example of JSON</h2>
    <div className="code-block">{`{
  "name": "Sofia",
  "age": 20,
  "city": "Delhi"
}`}</div>
    <p className="subtitle">
      ✅ It looks like a JavaScript object, but it’s actually <b>text</b> (a data format, not code).
    </p>

    <h2>🧩 Where is JSON Used?</h2>
    <ul className="bullet-points">
      <li>🌐 When your website gets data from an API</li>
      <li>💾 To save user data in local storage or databases</li>
      <li>🔄 To send and receive data between frontend and backend</li>
      <li>📱 Used in almost all web, mobile, and cloud apps</li>
    </ul>

    <h2>⚙️ JSON vs JavaScript Object</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>JSON</th>
          <th>JavaScript Object</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Data type</td><td>Text (string format)</td><td>Actual object in memory</td></tr>
        <tr><td>Keys</td><td>Must be in double quotes</td><td>Can be without quotes</td></tr>
        <tr><td>Functions</td><td>❌ Not allowed</td><td>✅ Allowed</td></tr>
        <tr><td>Comments</td><td>❌ Not allowed</td><td>✅ Allowed</td></tr>
      </tbody>
    </table>

    <h3>✅ JavaScript Object</h3>
    <div className="code-block">{`let person = { name: "Sofia", age: 20 };`}</div>

    <h3>✅ JSON (as text)</h3>
    <div className="code-block">{`{
  "name": "Sofia",
  "age": 20
}`}</div>

    <h2>🔁 Converting Between JSON and JavaScript</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>JSON.stringify()</td><td>Converts JavaScript object → JSON string</td></tr>
        <tr><td>JSON.parse()</td><td>Converts JSON string → JavaScript object</td></tr>
      </tbody>
    </table>

    <h3>🧩 Example 1: JSON.stringify()</h3>
    <div className="code-block">{`
let student = { name: "Sofia", age: 20, city: "Delhi" };
let jsonText = JSON.stringify(student);
console.log(jsonText);

// Output:
// {"name":"Sofia","age":20,"city":"Delhi"}
`}</div>

    <h3>🧩 Example 2: JSON.parse()</h3>
    <div className="code-block">{`
let jsonText = '{"name":"Sofia","age":20,"city":"Delhi"}';
let student = JSON.parse(jsonText);
console.log(student.name); // Sofia
`}</div>

    <h3>🧩 Example 3: Sending and Receiving JSON</h3>
    <div className="code-block">{`
let jsonData = '{"title":"JavaScript Basics","views":500}';
let blog = JSON.parse(jsonData);

console.log(blog.title); // JavaScript Basics
console.log(blog.views); // 500

let post = { title: "My Blog", content: "Learning JS" };
let jsonToSend = JSON.stringify(post);
console.log(jsonToSend);
`}</div>

    <h2>🧠 Nested JSON Example</h2>
    <div className="code-block">{`{
  "name": "Sofia",
  "age": 20,
  "skills": ["HTML", "CSS", "JavaScript"],
  "address": { "city": "Delhi", "pincode": 110001 }
}`}</div>

    <p className="subtitle">Accessing it in JavaScript:</p>
    <div className="code-block">{`
let person = {
  name: "Sofia",
  age: 20,
  skills: ["HTML", "CSS", "JavaScript"],
  address: { city: "Delhi", pincode: 110001 }
};

console.log(person.skills[1]); // CSS
console.log(person.address.city); // Delhi
`}</div>

    <h2>🧾 JSON Rules (Very Important)</h2>
    <ul className="bullet-points">
      <li>✅ Data must be in key-value pairs</li>
      <li>✅ Keys must be in double quotes</li>
      <li>✅ String values also in double quotes</li>
      <li>✅ No functions or comments allowed</li>
      <li>✅ Data types allowed: string, number, boolean, array, object, null</li>
    </ul>

    <div className="code-block">{`{
  "name": "Sofia",
  "isStudent": true,
  "marks": [85, 90, 78],
  "address": { "city": "Delhi", "pincode": 110001 },
  "grade": null
}`}</div>

    <h2>⚡ Mini Practical Example</h2>
    <div className="code-block">{`// Step 1: JavaScript object
let user = { name: "Sofia", course: "JavaScript", score: 95 };

// Step 2: Convert to JSON
let jsonData = JSON.stringify(user);
console.log(jsonData);

// Step 3: Convert back to object
let newUser = JSON.parse(jsonData);
console.log(newUser.course);

// Output:
// {"name":"Sofia","course":"JavaScript","score":95}
// JavaScript
`}</div>

    <h2>💡 Tip:</h2>
    <p className="summary">
      When sending data to a server → use <code>JSON.stringify()</code><br />
      When receiving data from a server → use <code>JSON.parse()</code><br />
      Always make sure JSON text is valid (check using{" "}
      <a href="https://jsonlint.com" target="_blank" rel="noreferrer">
        jsonlint.com
      </a>
      )
    </p>

    <h2>🧾 Summary</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>JSON</td><td>Data format (text)</td><td>{"{\"name\":\"Sofia\"}"}</td></tr>
        <tr><td>Convert to JSON</td><td>JSON.stringify(obj)</td><td>JSON.stringify({`{a:1}`})</td></tr>
        <tr><td>Convert to Object</td><td>JSON.parse(json)</td><td>{`JSON.parse('{"a":1}')`}</td></tr>
        <tr><td>Used for</td><td>Sending/Receiving data</td><td>APIs, databases</td></tr>
        <tr><td>Syntax rules</td><td>Keys/strings in quotes</td><td>"key": "value"</td></tr>
      </tbody>
    </table>

    <h2>🌟 In Simple Words:</h2>
    <ul className="bullet-points">
      <li>✅ JSON is like a box to pack data for sending or storing.</li>
      <li>✅ You can stringify (pack) and parse (unpack) data easily.</li>
      <li>✅ Used everywhere — in APIs, databases, and apps.</li>
    </ul>
  </>
)}

  {/*  Fetch API & AJAX */}
{activeSection === "apis" && (
  <>
    <h1>🔄 Fetch API & AJAX</h1>
    <p className="subtitle">
      Fetch API lets JavaScript send or receive data from a server — without reloading the page.
      This is what makes modern websites dynamic and fast 🚀
    </p>

    <h2>🧠 What are Fetch API and AJAX?</h2>
    <p className="subtitle">
      When your website needs data (like weather info, news, or user profiles), 
      it must <b>request</b> data from a server.  
      This process is called <b>AJAX</b> — Asynchronous JavaScript and XML.
    </p>
    <ul className="bullet-points">
      <li>➡ Send and receive data from a server</li>
      <li>➡ Without reloading the entire page</li>
    </ul>

    <h2>⚙️ Fetch API (Modern Way)</h2>
    <p className="subtitle">
      <code>fetch()</code> is the modern, built-in way to make AJAX requests in JavaScript.  
      It replaces older methods like <b>XMLHttpRequest</b>.
    </p>

    <h3>🧩 Syntax</h3>
    <div className="code-block">{`
fetch("url")
  .then(response => response.json()) // convert response to JSON
  .then(data => {
    console.log(data); // use the data
  })
  .catch(error => {
    console.log("Error:", error);
  });
    `}</div>

    <h2>🧠 Step-by-Step</h2>
    <ul className="bullet-points">
      <li><code>fetch("url")</code> → sends a request to the server</li>
      <li><code>.then(response {`=>`} response.json())</code> → converts response to JSON</li>
      <li><code>.then(data =&gt; &#123;...&#125;)</code> → handles received data</li>
      <li><code>.catch(error =&gt; &#123;...&#125;)</code> → catches any errors</li>
    </ul>

    <h2>🌍 Example 1: Fetch Public API Data</h2>
    <div className="code-block">{`
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log("Users:", data);
  })
  .catch(error => {
    console.log("Error:", error);
  });
    `}</div>

    <p className="summary">
      ✅ Connects to a fake API, downloads user data, and logs it in the console.
    </p>

    <h2>💡 Example 2: Display Data on Webpage</h2>
    <div className="code-block">{`
<!DOCTYPE html>
<html>
  <body>
    <h2>Users List</h2>
    <ul id="userList"></ul>

    <script>
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
          let list = document.getElementById("userList");
          users.forEach(user => {
            let li = document.createElement("li");
            li.textContent = \`\${user.name} - \${user.email}\`;
            list.appendChild(li);
          });
        })
        .catch(error => console.log("Error:", error));
    </script>
  </body>
</html>
    `}</div>

    <p className="summary">✅ Shows fetched data on the page — no reload needed!</p>

    <h2>📤 Example 3: Sending Data (POST Request)</h2>
    <div className="code-block">{`
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "Hello",
    body: "Learning Fetch API",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log("Posted:", data))
  .catch(error => console.log("Error:", error));
    `}</div>

    <p className="summary">
      ✅ Sends (uploads) data to the server — used for submitting forms or saving data.
    </p>

    <h2>🔁 Example 4: Using async/await (Cleaner Way)</h2>
    <div className="code-block">{`
async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getUsers();
    `}</div>

    <p className="summary">
      ✅ Same result as <code>.then()</code> but much cleaner and readable.
    </p>

    <h2>🧩 Common HTTP Methods</h2>
    <ul className="bullet-points">
      <li><b>GET</b> → Retrieve data from a server</li>
      <li><b>POST</b> → Send new data</li>
      <li><b>PUT</b> → Update existing data</li>
      <li><b>DELETE</b> → Remove data</li>
    </ul>

    <h2>💡 Example API URL</h2>
    <p className="subtitle">
      Try this fake API for practice:  
      <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">
        🔗 https://jsonplaceholder.typicode.com/
      </a>
    </p>

    <div className="code-block">{`
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data));
    `}</div>

    <div className="code-block">{`
{
  userId: 1,
  id: 1,
  title: "sunt aut facere repellat provident...",
  body: "quia et suscipit..."
}
    `}</div>

    <h2>🧠 Why Use Fetch API?</h2>
    <ul className="bullet-points">
      <li>✅ To get or send data between frontend & backend</li>
      <li>✅ To update webpage without reloading</li>
      <li>✅ To connect with APIs (weather, news, etc.)</li>
      <li>✅ To make interactive, smart web apps</li>
    </ul>

    <h2>⚡ Summary</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>AJAX</td><td>Send/receive data without page reload</td><td>-</td></tr>
        <tr><td>Fetch API</td><td>Modern built-in AJAX method</td><td>fetch(url)</td></tr>
        <tr><td>GET</td><td>Get data from server</td><td>fetch(url)</td></tr>
        <tr><td>POST</td><td>Send data to server</td><td>{`fetch(url, { method:'POST' })`}</td></tr>
        <tr><td>JSON</td><td>Data format for communication</td><td>{`{ "name": "Sofia" }`}</td></tr>
        <tr><td>async/await</td><td>Cleaner Promise handling</td><td>await fetch()</td></tr>
      </tbody>
    </table>

    <h2>✅ In Simple Words</h2>
    <p className="summary">
      <b>AJAX</b> → talks to the server without reloading the page <br />
      <b>Fetch</b> → modern way to do AJAX <br />
      <b>JSON</b> → language for exchanging data <br />
      <b>async/await</b> → makes fetch code cleaner and readable
    </p>
  </>
)}
{/* 💾 Web Storage & Cookies */}
{activeSection === "cookies" && (
<>
  <h1>💾 Web Storage & Cookies</h1>
    <p className="subtitle">
      The <strong>Web Storage API</strong> and <strong>Cookies</strong> help you store data in the
      browser — so you can remember user information, settings, or session details.
    </p>
    <p className="subtitle">Let’s understand them one by one 👇</p>

    <h3>🌐 1. What is Web Storage?</h3>
    <p className="subtitle">
      <strong>Web Storage</strong> allows websites to store data locally in the user’s browser.
      It’s faster, more secure, and can hold more data than cookies.
    </p>
    <p className="subtitle">There are two main types:</p>
    <ul>
      <li>🗂️ <strong>localStorage</strong> — stores data permanently</li>
      <li>⏳ <strong>sessionStorage</strong> — stores data temporarily (until the tab is closed)</li>
    </ul>

    <h3>📦 2. localStorage</h3>
    <p className="subtitle">
      <strong>localStorage</strong> stores data with no expiration date — it stays even after closing
      or refreshing the browser.
    </p>
    <div className="code-block">{`
// Syntax
localStorage.setItem("key", "value");   // Save data
localStorage.getItem("key");            // Get data
localStorage.removeItem("key");         // Remove one item
localStorage.clear();                   // Remove all data

// Example
localStorage.setItem("username", "Sofia");
console.log(localStorage.getItem("username")); // Sofia
    `}</div>
    <p className="subtitle">✅ Data stays saved even after the browser is closed.</p>

    <h3>🕒 3. sessionStorage</h3>
    <p className="subtitle">
      <strong>sessionStorage</strong> works like localStorage, but data is lost when the tab or
      browser is closed. It’s good for storing temporary session data.
    </p>
    <div className="code-block">{`
// Example
sessionStorage.setItem("theme", "dark");
console.log(sessionStorage.getItem("theme")); // dark
    `}</div>
    <p className="subtitle">✅ Once you close the tab, data disappears automatically.</p>

    <h3>🍪 4. Cookies</h3>
    <p className="subtitle">
      <strong>Cookies</strong> are small pieces of data stored in the browser. They are often used for:
    </p>
    <ul>
      <li>Login sessions</li>
      <li>User tracking</li>
      <li>Remembering preferences</li>
    </ul>
    <div className="code-block">{`
// Syntax
document.cookie = "username=Sofia; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/";

// Reading cookies
console.log(document.cookie);
    `}</div>
    <p className="subtitle">✅ Cookies are automatically sent to the server with every HTTP request.</p>

    <h3>⚖️ 5. Differences Between localStorage, sessionStorage & Cookies</h3>
    <table className="style-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>localStorage</th>
          <th>sessionStorage</th>
          <th>Cookies</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Storage limit</td>
          <td>~5–10 MB</td>
          <td>~5 MB</td>
          <td>~4 KB</td>
        </tr>
        <tr>
          <td>Expiration</td>
          <td>Never (until deleted)</td>
          <td>Ends when tab closes</td>
          <td>Set manually</td>
        </tr>
        <tr>
          <td>Accessible from</td>
          <td>JavaScript only</td>
          <td>JavaScript only</td>
          <td>JavaScript + Server</td>
        </tr>
        <tr>
          <td>Sent to server</td>
          <td>❌ No</td>
          <td>❌ No</td>
          <td>✅ Yes</td>
        </tr>
        <tr>
          <td>Use case</td>
          <td>Save user settings</td>
          <td>Temporary session data</td>
          <td>Login/session tracking</td>
        </tr>
      </tbody>
    </table>

    <h3>✅ In Short:</h3>
    <ul>
      <li>🗂️ <strong>localStorage</strong> → Saves data permanently in the browser.</li>
      <li>⏳ <strong>sessionStorage</strong> → Saves data temporarily (until tab closes).</li>
      <li>🍪 <strong>Cookies</strong> → Small data sent to the server with every request.</li>
    </ul>

    <h3>💡 Example Summary:</h3>
    <div className="code-block">{`
// localStorage
localStorage.setItem("user", "Sofia");

// sessionStorage
sessionStorage.setItem("theme", "light");

// Cookies
document.cookie = "username=Sofia; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/";
    `}</div>

    <h3>📘 Tip:</h3>
    <p className="subtitle">
      Use <strong>localStorage</strong> or <strong>sessionStorage</strong> for front-end data,
      and <strong>cookies</strong> for server communication or login sessions.
    </p>
  </>
)}

{/* 🧰 Error Handling in JavaScript */}
{activeSection === "error" && (
  <>
  <h1>🧰 Error Handling in JavaScript</h1>
    <p className="subtitle">
      Sometimes, errors happen while running a program — for example, dividing by zero, accessing
      an undefined variable, or invalid user input.  
      Error handling helps detect, manage, and respond to such errors without crashing the program.
    </p>

    <h2>⚠️ 1. What is an Error?</h2>
    <p className="subtitle">An error is something that stops the normal flow of a program.</p>
    <p className="subtitle">Examples of common errors:</p>
    <div className="code-block">{`
console.log(x); // ❌ ReferenceError: x is not defined
    `}</div>

    <h2>🧱 2. try...catch Statement</h2>
    <p className="subtitle">
      The <b>try...catch</b> block is used to handle errors safely without stopping the program.
    </p>
    <h3>Syntax:</h3>
    <div className="code-block">{`
try {
  // Code that might cause an error
} catch (error) {
  // Code to handle the error
}
    `}</div>

    <h3>Example:</h3>
    <div className="code-block">{`
try {
  let result = x + 5; // x is not defined
} catch (error) {
  console.log("An error occurred:", error.message);
}
    `}</div>

    <p className="subtitle"><b>Output:</b></p>
    <div className="code-block">{`
An error occurred: x is not defined
    `}</div>

    <p className="subtitle">
      🟢 The code inside <b>catch</b> runs only if an error occurs in the <b>try</b> block.
    </p>

    <h2>🔁 3. try...catch...finally</h2>
    <p className="subtitle">
      The <b>finally</b> block runs always — whether there is an error or not.
      Useful for cleanup tasks like closing files or clearing memory.
    </p>
    <div className="code-block">{`
try {
  let num = 10 / 0;
  console.log(num);
} catch (error) {
  console.log("Error found:", error.message);
} finally {
  console.log("This will always run.");
}
    `}</div>

    <p className="subtitle"><b>Output:</b></p>
    <div className="code-block">{`
Infinity
This will always run.
    `}</div>

    <h2>🚨 4. throw Statement</h2>
    <p className="subtitle">
      You can create your own custom errors using <b>throw</b>.
    </p>
    <div className="code-block">{`
function divide(a, b) {
  if (b === 0) {
    throw "Cannot divide by zero!";
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Error:", error);
}
    `}</div>

    <p className="subtitle"><b>Output:</b></p>
    <div className="code-block">{`
Error: Cannot divide by zero!
    `}</div>

    <h2>🧠 5. Common Error Types</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Error Type</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ReferenceError</td>
          <td>Variable not defined</td>
          <td><code>console.log(x);</code></td>
        </tr>
        <tr>
          <td>TypeError</td>
          <td>Wrong data type used</td>
          <td><code>null.toUpperCase();</code></td>
        </tr>
        <tr>
          <td>SyntaxError</td>
          <td>Code syntax mistake</td>
          <td><code>console.log("Hi"</code></td>
        </tr>
        <tr>
          <td>RangeError</td>
          <td>Value out of range</td>
          <td><code>(10).toPrecision(500);</code></td>
        </tr>
      </tbody>
    </table>

    <h2>🪄 6. Example: Handling Multiple Errors</h2>
    <div className="code-block">{`
try {
  let num = 5;
  num.toUpperCase(); // ❌ TypeError
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Type Error:", error.message);
  } else {
    console.log("Other Error:", error.message);
  }
}
    `}</div>

    <p className="subtitle"><b>Output:</b></p>
    <div className="code-block">{`
Type Error: num.toUpperCase is not a function
    `}</div>

    <h2>✅ Summary</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>try</b></td>
          <td>Block of code to test for errors</td>
        </tr>
        <tr>
          <td><b>catch</b></td>
          <td>Handles the error</td>
        </tr>
        <tr>
          <td><b>finally</b></td>
          <td>Always executes (used for cleanup)</td>
        </tr>
        <tr>
          <td><b>throw</b></td>
          <td>Manually create an error</td>
        </tr>
        <tr>
          <td><b>Error Types</b></td>
          <td>ReferenceError, TypeError, SyntaxError, RangeError</td>
        </tr>
      </tbody>
    </table>

    <h2>👉 In Short:</h2>
    <p className="subtitle">
      Error handling lets your JavaScript program detect problems and respond gracefully —  
      preventing crashes and keeping your app safe and user-friendly. 💪
    </p>
  </>
)}
{/* 🧩 Advanced Topics in JavaScript */}
{activeSection === "advanced" && (
  <>
    <h1>🧩 Advanced JavaScript Concepts</h1>
    <p className="subtitle">
      These are important core topics that help you understand how JavaScript works behind the scenes.
      Let’s learn them in a simple and clear way 👇
    </p>

    <h2>🌀 1. Closures</h2>
    <p className="subtitle">
      A <strong>closure</strong> is created when a function remembers variables from its outer
      function even after that outer function has finished running.
    </p>

    <div className="code-block">{`
function outer() {
  let count = 0;
  
  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
    `}</div>

    <p className="subtitle">
      ✅ Here, <b>inner()</b> still has access to <b>count</b> (from <b>outer()</b>),
      even though <b>outer()</b> has finished executing.
    </p>
    <p className="subtitle"><strong>👉 Closure = Function + its lexical (parent) scope</strong></p>

    <h3>Uses of Closures:</h3>
    <ul className="bullet-points">
      <li>🔒 Data hiding (private variables)</li>
      <li>🏗️ Creating function factories</li>
      <li>⚡ Remembering state in async code</li>
    </ul>

    <h2>⚙️ 2. Execution Context</h2>
    <p className="subtitle">
      The <strong>Execution Context</strong> is the environment where JavaScript code runs.
      It contains variables, functions, and the <b>this</b> reference.
    </p>

    <p className="subtitle">There are two main types:</p>
    <ul className="bullet-points">
      <li>🌍 <strong>Global Execution Context (GEC)</strong> – created when the JS program starts.</li>
      <li>🧩 <strong>Function Execution Context (FEC)</strong> – created every time a function is called.</li>
    </ul>

    <p className="subtitle">Each context has:</p>
    <ul className="bullet-points">
      <li>📦 Variable Environment (variables)</li>
      <li>🔗 Scope Chain</li>
      <li>🪞 this keyword</li>
    </ul>

    <h3>📚 How It Works:</h3>
    <p className="subtitle">When you run a JS file:</p>
    <ul className="bullet-points">
      <li><strong>Creation Phase</strong> – Memory is allocated for variables and functions, variables are set to undefined.</li>
      <li><strong>Execution Phase</strong> – Code runs line by line, variables get assigned values.</li>
    </ul>

    <div className="code-block">{`
console.log(a);
var a = 10;
    `}</div>

    <p className="subtitle">Steps:</p>
    <ol>
      <li>In creation phase → <b>a</b> is created and set to undefined.</li>
      <li>In execution phase → <b>a</b> becomes 10.</li>
    </ol>

    <div className="code-block">{`
Output:
undefined
    `}</div>

    <h2>🚀 3. Hoisting (In-Depth)</h2>
    <p className="subtitle">
      <strong>Hoisting</strong> means moving variable and function declarations to the top of their scope before execution.
    </p>

    <h3>Variable Hoisting:</h3>
    <div className="code-block">{`
console.log(a); // undefined
var a = 5;
    `}</div>

    <p className="subtitle">✅ <b>var</b> is hoisted but not initialized.</p>

    <h3>For let and const:</h3>
    <div className="code-block">{`
console.log(b); // ❌ Error: Cannot access before initialization
let b = 10;
    `}</div>
    <p className="subtitle">
      <strong>let</strong> and <strong>const</strong> are also hoisted but kept in a
      <b> Temporal Dead Zone (TDZ)</b> until the line where they are declared.
    </p>

    <h3>Function Hoisting:</h3>
    <div className="code-block">{`
sayHello(); // Works
function sayHello() {
  console.log("Hello!");
}
    `}</div>

    <p className="subtitle">✅ Function declarations are hoisted with their definitions.</p>

    <h3>❌ Function expressions are not hoisted:</h3>
    <div className="code-block">{`
greet(); // Error
var greet = function() {
  console.log("Hi!");
};
    `}</div>

    <h2>🧬 4. Prototypes & Inheritance</h2>
    <p className="subtitle">
      JavaScript uses <strong>prototype-based inheritance</strong>, not class-based like Java or C++.
      Every object in JS has a hidden property called <b>[[Prototype]]</b> (accessible via <b>__proto__</b>).
    </p>

    <div className="code-block">{`
const person = {
  greet() {
    console.log("Hello!");
  }
};

const student = Object.create(person);
student.study = function() {
  console.log("Studying...");
};

student.greet(); // Inherited from person
student.study(); // Own method
    `}</div>

    <p className="subtitle">✅ <b>student</b> inherits <b>greet()</b> from <b>person</b> using prototype chaining.</p>

    <h2>🏗️ 5. Constructor Functions & Prototype</h2>
    <p className="subtitle">
      You can create multiple objects using a <strong>constructor function</strong>.
    </p>

    <div className="code-block">{`
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello, " + this.name);
};

const p1 = new Person("Sofia");
p1.sayHello(); // Hello, Sofia
    `}</div>

    <p className="subtitle">✅ The <b>sayHello()</b> method is shared by all objects created using <b>Person</b>.</p>

    <h2>🧠 Summary Table</h2>
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
          <td>Closure</td>
          <td>Function remembers variables from parent scope</td>
          <td><code>return inner;</code></td>
        </tr>
        <tr>
          <td>Execution Context</td>
          <td>Environment where code runs</td>
          <td><code>Global & Function contexts</code></td>
        </tr>
        <tr>
          <td>Hoisting</td>
          <td>Declarations moved to the top</td>
          <td><code>var a;</code> before use</td>
        </tr>
        <tr>
          <td>Prototype</td>
          <td>Objects inherit from other objects</td>
          <td><code>Object.create()</code></td>
        </tr>
        <tr>
          <td>Constructor Function</td>
          <td>Used to create objects</td>
          <td><code>new Person()</code></td>
        </tr>
      </tbody>
    </table>

    <h2>✅ In Short:</h2>
    <ul className="bullet-points">
      <li>🌀 <strong>Closures</strong> help remember variables.</li>
      <li>⚙️ <strong>Execution Context</strong> defines how code runs.</li>
      <li>🚀 <strong>Hoisting</strong> moves declarations up.</li>
      <li>🧬 <strong>Prototypes</strong> enable object inheritance.</li>
      <li>🏗️ <strong>Constructor Functions</strong> help create reusable objects.</li>
    </ul>

    <p className="subtitle">
      🧩 These advanced concepts explain how JavaScript actually works internally —
      mastering them makes you a stronger and smarter JS developer 💡
    </p>
  </>
)}

{/* 🎓 JavaScript Interview Questions and Answers (Beginner to Intermediate) */}
{activeSection === "interview" && (
  <>
    <h1>🎓 JavaScript Interview Questions and Answers (Beginner to Intermediate)</h1>
    <p className="subtitle">
      Here are some of the most common and important interview questions on JavaScript — written in a simple and clear way to help you understand and remember easily.
    </p>

    <h2>🧩 1. What is JavaScript?</h2>
    <p className="subtitle">JavaScript is a scripting language used to make web pages interactive and dynamic. It can change HTML and CSS, respond to user actions, and communicate with servers.</p>

    <h2>🔤 2. What are the different data types in JavaScript?</h2>
    <p className="subtitle">There are two main types:</p>
    <ul className="bullet-points">
      <li><strong>Primitive types:</strong> String, Number, Boolean, Null, Undefined, Symbol, BigInt</li>
      <li><strong>Reference types:</strong> Object, Array, Function</li>
    </ul>

    <h2>📦 3. Difference between var, let, and const</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Keyword</th>
          <th>Scope</th>
          <th>Reassign</th>
          <th>Hoisted</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>var</td><td>Function scope</td><td>✅ Yes</td><td>✅ Yes</td></tr>
        <tr><td>let</td><td>Block scope</td><td>✅ Yes</td><td>❌ No</td></tr>
        <tr><td>const</td><td>Block scope</td><td>❌ No</td><td>❌ No</td></tr>
      </tbody>
    </table>
    <div className="code-block">{`
let name = "Sofia";
const age = 22;
var country = "India";
`}</div>

    <h2>⚙️ 4. Difference between == and ===</h2>
    <p className="subtitle"><strong>==</strong> checks value only (type conversion).<br />
    <strong>===</strong> checks both value and type (strict equality).</p>
    <div className="code-block">{`
5 == "5";   // true
5 === "5";  // false
`}</div>

    <h2>💡 5. What is a function in JavaScript?</h2>
    <p className="subtitle">A function is a block of reusable code used to perform a specific task.</p>
    <div className="code-block">{`
function greet() {
  console.log("Hello!");
}
greet();
`}</div>

    <h2>🔁 6. What is a callback function?</h2>
    <p className="subtitle">A callback is a function passed as an argument to another function.</p>
    <div className="code-block">{`
function display(result) {
  console.log(result);
}

function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

add(3, 4, display); // Output: 7
`}</div>

    <h2>🕐 7. Synchronous vs Asynchronous Code</h2>
    <ul>
      <li><strong>Synchronous:</strong> Runs line by line (waits for each task to finish).</li>
      <li><strong>Asynchronous:</strong> Does not wait — executes tasks in background (like setTimeout, fetch).</li>
    </ul>

    <h2>⏳ 8. What are Promises?</h2>
    <p className="subtitle">A Promise represents a value that will be available in the future (success or failure).</p>
    <div className="code-block">{`
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Done!");
  else reject("Error!");
});

promise
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
`}</div>

    <h2>🧠 9. What is a closure?</h2>
    <p className="subtitle">A closure is a function that remembers variables from its outer scope even after that scope has ended.</p>
    <div className="code-block">{`
function outer() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  }
}

let counter = outer();
counter(); // 1
counter(); // 2
`}</div>

    <h2>📚 10. What is hoisting?</h2>
    <p className="subtitle">Hoisting means JavaScript moves declarations to the top before running the code.</p>
    <div className="code-block">{`
console.log(a); // undefined
var a = 10;
`}</div>

    <h2>🧩 11. Difference between null and undefined</h2>
    <table className="style-table">
      <thead>
        <tr><th>Term</th><th>Meaning</th></tr>
      </thead>
      <tbody>
        <tr><td>undefined</td><td>Variable declared but not assigned a value</td></tr>
        <tr><td>null</td><td>Assigned value meaning “nothing” or “empty”</td></tr>
      </tbody>
    </table>
    <div className="code-block">{`
let x;
console.log(x); // undefined
x = null;
console.log(x); // null
`}</div>

    <h2>💬 12. What is the use of this keyword?</h2>
    <div className="code-block">{`
let person = {
  name: "Sofia",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // Hello, Sofia
`}</div>

    <h2>🌍 13. What is JSON?</h2>
    <p>JSON (JavaScript Object Notation) is a data format used to exchange data between server and browser.</p>
    <div className="code-block">{`
let user = { name: "Sofia", age: 22 };
let jsonData = JSON.stringify(user);  // Object → JSON
let obj = JSON.parse(jsonData);       // JSON → Object
`}</div>

    <h2>🔄 14. What is the Fetch API?</h2>
    <p className="subtitle">The Fetch API is used to get data from servers using HTTP requests.</p>
    <div className="code-block">{`
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
`}</div>

    <h2>⚡ 15. What are arrow functions?</h2>
    <p>Arrow functions provide a shorter syntax for writing functions.</p>
    <div className="code-block">{`
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
`}</div>

    <h2>🧩 16. Difference between for...of and for...in</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Loop</th>
          <th>Works On</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>for...of</td><td>Values of arrays</td><td>{`for (let item of arr)`}</td></tr>
        <tr><td>for...in</td><td>Keys/properties of objects</td><td>{`for (let key in obj)`}</td></tr>
      </tbody>
    </table>

    <h2>⚙️ 17. What are Template Literals?</h2>
    <p className="subtitle">They allow embedding variables easily using backticks (`).</p>
    <div className="code-block">{`
let name = "Sofia";
console.log(\`Hello, \${name}!\`);
`}</div>

    <h2>🧮 18. What is typeof operator?</h2>
    <p className="subtitle">Used to find the data type of a variable.</p>
    <div className="code-block">{`
let x = 10;
console.log(typeof x); // number
`}</div>

    <h2>🧱 19. What are classes in JavaScript?</h2>
    <p className="subtitle">Classes are templates for creating objects (introduced in ES6).</p>
    <div className="code-block">{`
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hello " + this.name);
  }
}

let p1 = new Person("Sofia");
p1.greet();
`}</div>

    <h2>🧰 20. Difference between localStorage and sessionStorage</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Storage</th>
          <th>Lifespan</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>localStorage</td><td>Permanent (until manually deleted)</td><td>Saves data even after browser close</td></tr>
        <tr><td>sessionStorage</td><td>Temporary</td><td>Clears when tab is closed</td></tr>
      </tbody>
    </table>
  </>
)}




    </main>
    </div>
    
  );
};

export default JavascriptCourse;
