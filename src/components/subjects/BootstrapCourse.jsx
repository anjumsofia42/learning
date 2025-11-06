import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "../Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './BootstrapCourse.css';

const BootstrapCourse = () => {
  const [activeSection, setActiveSection] = useState('bootstrap-introduction');
  const navigate = useNavigate();

  return (
    <div className="bootstrap-course-container d-flex">
{/* ======= Sidebar (Desktop) ======= */}
      <aside className="sidebar d-none d-md-block p-3">
        <h4 className="sidebar-title">CSS Tutorial</h4>
        <ul className="list-unstyled mt-3">
          <li onClick={() => navigate('/')}>🏠 Home</li>
          <li className={activeSection === 'bootstrap-introduction' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-introduction')}>🧩 Introduction to Bootstrap</li>
          <li className={activeSection === 'bootstrap-grid-system' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-grid-system')}>📐 Bootstrap Grid System</li>
          <li className={activeSection === 'bootstrap-typography' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-typography')}>🎨 Bootstrap Typography</li>
          <li className={activeSection === 'bootstrap-colors-backgrounds' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-colors-backgrounds')}>🧱 Bootstrap Colors & Backgrounds</li>
          <li className={activeSection === 'bootstrap-utilities' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-utilities')}>🧭 Bootstrap Utilities</li>
          <li className={activeSection === 'bootstrap-buttons' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-buttons')}>🧩 Bootstrap Buttons</li>
          <li className={activeSection === 'bootstrap-tables' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-tables')}>📋 Bootstrap Tables</li>
          <li className={activeSection === 'bootstrap-images-figures' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-images-figures')}>🖼️ Bootstrap Images & Figures</li>
          <li className={activeSection === 'bootstrap-forms' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-forms')}>🧰 Bootstrap Forms</li>
          <li className={activeSection === 'bootstrap-cards' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-cards')}>⚙️ Bootstrap Cards</li>
          <li className={activeSection === 'bootstrap-navbar' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-navbar')}>🧭 Bootstrap Navbar</li>
          <li className={activeSection === 'bootstrap-layout-components' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-layout-components')}>📂 Bootstrap Layout Components</li>
          <li className={activeSection === 'bootstrap-alerts-badges' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-alerts-badges')}>🧩 Bootstrap Alerts & Badges</li>
          <li className={activeSection === 'bootstrap-modals' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-modals')}>🧱 Bootstrap Modals</li>
          <li className={activeSection === 'bootstrap-dropdowns' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-dropdowns')}>🧭 Bootstrap Dropdowns</li>
          <li className={activeSection === 'bootstrap-collapse-accordion' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-collapse-accordion')}>⚡ Bootstrap Collapse & Accordion</li>
          <li className={activeSection === 'bootstrap-carousel' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-carousel')}>🧮 Bootstrap Carousel</li>
          <li className={activeSection === 'bootstrap-toasts-spinners-progress' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-toasts-spinners-progress')}>💬 Bootstrap Toasts, Spinners & Progress Bars</li>
          <li className={activeSection === 'bootstrap-icons' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-icons')}>🧠 Bootstrap Icons</li>
          <li className={activeSection === 'bootstrap-responsive' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-responsive')}>📱 Responsive Design & Breakpoints</li>
          <li className={activeSection === 'bootstrap-mini-projects' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-mini-projects')}>🚀 Mini Projects (Practice)</li>
        </ul>
      </aside>
      {/* ======= Sidebar Toggle (Mobile only, beside content) ======= */}
      <button
        className="btn btn-dark d-md-none position-fixed toggle-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#cssSidebar"
        aria-controls="cssSidebar"
      >
        <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
      </button>

      {/* ======= Offcanvas Sidebar (Mobile) ======= */}
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex="-1"
        id="cssSidebar"
        aria-labelledby="cssSidebarLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="cssSidebarLabel">
             CSS Tutorial
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
          <li className={activeSection === 'bootstrap-introduction' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-introduction')}>🧩 Introduction to Bootstrap</li>
          <li className={activeSection === 'bootstrap-grid-system' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-grid-system')}>📐 Bootstrap Grid System</li>
          <li className={activeSection === 'bootstrap-typography' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-typography')}>🎨 Bootstrap Typography</li>
          <li className={activeSection === 'bootstrap-colors-backgrounds' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-colors-backgrounds')}>🧱 Bootstrap Colors & Backgrounds</li>
          <li className={activeSection === 'bootstrap-utilities' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-utilities')}>🧭 Bootstrap Utilities</li>
          <li className={activeSection === 'bootstrap-buttons' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-buttons')}>🧩 Bootstrap Buttons</li>
          <li className={activeSection === 'bootstrap-tables' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-tables')}>📋 Bootstrap Tables</li>
          <li className={activeSection === 'bootstrap-images-figures' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-images-figures')}>🖼️ Bootstrap Images & Figures</li>
          <li className={activeSection === 'bootstrap-forms' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-forms')}>🧰 Bootstrap Forms</li>
          <li className={activeSection === 'bootstrap-cards' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-cards')}>⚙️ Bootstrap Cards</li>
          <li className={activeSection === 'bootstrap-navbar' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-navbar')}>🧭 Bootstrap Navbar</li>
          <li className={activeSection === 'bootstrap-layout-components' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-layout-components')}>📂 Bootstrap Layout Components</li>
          <li className={activeSection === 'bootstrap-alerts-badges' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-alerts-badges')}>🧩 Bootstrap Alerts & Badges</li>
          <li className={activeSection === 'bootstrap-modals' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-modals')}>🧱 Bootstrap Modals</li>
          <li className={activeSection === 'bootstrap-dropdowns' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-dropdowns')}>🧭 Bootstrap Dropdowns</li>
          <li className={activeSection === 'bootstrap-collapse-accordion' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-collapse-accordion')}>⚡ Bootstrap Collapse & Accordion</li>
          <li className={activeSection === 'bootstrap-carousel' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-carousel')}>🧮 Bootstrap Carousel</li>
          <li className={activeSection === 'bootstrap-toasts-spinners-progress' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-toasts-spinners-progress')}>💬 Bootstrap Toasts, Spinners & Progress Bars</li>
          <li className={activeSection === 'bootstrap-icons' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-icons')}>🧠 Bootstrap Icons</li>
          <li className={activeSection === 'bootstrap-responsive' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-responsive')}>📱 Responsive Design & Breakpoints</li>
          <li className={activeSection === 'bootstrap-mini-projects' ? 'active' : ''} onClick={() => setActiveSection('bootstrap-mini-projects')}>🚀 Mini Projects (Practice)</li>
        </ul>
        </div>
        </div>

      {/* Main Course Content */}
      <main className="course-content flex-grow-1 p-4">
        {/* ✅ CSS-introduction */}
        {activeSection === 'bootstrap-introduction' && (
  <>
    <h1>🧩 Introduction to Bootstrap</h1>

    <p className="subtitle">
      <strong>Bootstrap</strong> is a popular front-end framework that includes:
    </p>

    <ul className="bullet-points">
      <li>🎨 CSS for styling</li>
      <li>⚙️ JavaScript (JS) for interactive components</li>
      <li>📐 Responsive grid system for layouts</li>
    </ul>

    <p className="subtitle">
      💡 Created by <strong>Twitter engineers</strong> and now maintained by the open-source community.
    </p>

    <p>
      It helps you build websites faster by providing ready-to-use components like:
    </p>

    <ul className="bullet-points">
      <li>✅ Buttons</li>
      <li>✅ Navbars</li>
      <li>✅ Cards</li>
      <li>✅ Modals</li>
      <li>✅ Forms</li>
      <li>✅ Carousels</li>
    </ul>

    <h2>⚙️ Why Use Bootstrap?</h2>
    <table className="info-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>📱 Responsive Design</td>
          <td>Automatically adjusts to different screen sizes</td>
        </tr>
        <tr>
          <td>⏱️ Faster Development</td>
          <td>Pre-styled components save a lot of time</td>
        </tr>
        <tr>
          <td>🧩 Reusable Components</td>
          <td>Buttons, modals, alerts, etc. are ready to use</td>
        </tr>
        <tr>
          <td>🎨 Customizable</td>
          <td>Easily override styles or use Sass variables</td>
        </tr>
        <tr>
          <td>🌐 Cross-Browser Compatible</td>
          <td>Works smoothly across all major browsers</td>
        </tr>
      </tbody>
    </table>

    <h2>🧱 Bootstrap Structure</h2>
    <ul className="bullet-points">
      <li>Bootstrap CSS → Handles styling and layout</li>
      <li>Bootstrap JS (with Popper.js) → Handles dropdowns, modals, and tooltips</li>
      <li>Bootstrap Grid System → 12-column responsive layout</li>
    </ul>

    <h2>💡 Versions of Bootstrap</h2>
    <table className="info-table">
      <thead>
        <tr>
          <th>Version</th>
          <th>Features</th>
          <th>CDN Link Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bootstrap 3</td>
          <td>Older, float-based (Outdated)</td>
          <td>❌</td>
        </tr>
        <tr>
          <td>Bootstrap 4</td>
          <td>Flexbox layout, still widely used</td>
          <td>⚙️</td>
        </tr>
        <tr>
          <td>Bootstrap 5 (Current)</td>
          <td>No jQuery, uses modern JS — <strong>Recommended ✅</strong></td>
          <td>✔️</td>
        </tr>
      </tbody>
    </table>

    <h2>🪶 1️⃣ How to Add Bootstrap to Your Project</h2>
    <p>You can add Bootstrap in two ways:</p>

    <h3>📦 Option 1: Using CDN (Fastest Way)</h3>
    <p>Add this in your HTML <code>{`<head>`}</code> section:</p>

    <pre className="code-block">
{`<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>`}
    </pre>

    <p>Add Bootstrap JS (for dropdowns, modals, etc.) before the closing <code>{`</body>`}</code> tag:</p>
    <pre className="code-block">
{`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`}
    </pre>

    <ul className="bullet-points">
      <li>✅ Advantage: Quick setup, no installation needed.</li>
      <li>❌ Disadvantage: Requires internet (CDN hosted).</li>
    </ul>

    <h3>⚙️ Option 2: Using Local Files (Offline Use)</h3>
    <ol className="bullet-points">
      <li>Go to <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">getbootstrap.com</a></li>
      <li>Download the Bootstrap ZIP file.</li>
      <li>Extract and link these in your project:</li>
    </ol>

    <pre className="code-block">
{`<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
<script src="bootstrap/js/bootstrap.bundle.min.js"></script>`}
    </pre>

    <h2>🎨 Example — Your First Bootstrap Page</h2>
    <pre className="code-block">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Demo</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
</head>
<body>

  <div class="container text-center mt-5">
    <h1 class="text-primary">Hello, Bootstrap!</h1>
    <p class="lead">This is your first Bootstrap page 🎉</p>
    <button class="btn btn-success">Click Me</button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}
    </pre>

    <h2>✅ Explanation</h2>
    <ul className="bullet-points">
      <li><code>.container</code> → Centers and adds padding around content</li>
      <li><code>.text-center</code> → Centers text</li>
      <li><code>.mt-5</code> → Adds top margin</li>
      <li><code>.text-primary</code> → Sets Bootstrap’s primary color</li>
      <li><code>.btn btn-success</code> → Adds a green button</li>
    </ul>

    <h2>📐 Bootstrap Folder Structure (When Downloaded)</h2>
    <pre className="code-block">
{`project/
│
├── index.html
├── css/
│   └── bootstrap.min.css
├── js/
│   └── bootstrap.bundle.min.js
└── img/
    └── (your images)`}
    </pre>

    <h2>🎨 Bootstrap Color System</h2>
    <table className="info-table">
      <thead>
        <tr>
          <th>Class</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>.text-primary</td><td>Blue</td></tr>
        <tr><td>.text-secondary</td><td>Gray</td></tr>
        <tr><td>.text-success</td><td>Green</td></tr>
        <tr><td>.text-danger</td><td>Red</td></tr>
        <tr><td>.text-warning</td><td>Yellow</td></tr>
        <tr><td>.text-info</td><td>Light Blue</td></tr>
        <tr><td>.text-dark</td><td>Black</td></tr>
        <tr><td>.text-light</td><td>White text</td></tr>
      </tbody>
    </table>

    <h2>🧱 Background Examples</h2>
    <pre className="code-block">
{`<div class="bg-primary text-white p-3">Primary Box</div>
<div class="bg-danger text-white p-3">Danger Box</div>`}
    </pre>
  </>
)}
    {activeSection === 'bootstrap-grid-system' && (
  <>
    <h1>📐 Bootstrap Grid System</h1>

    <p className="subtitle">
      The <strong>Bootstrap Grid System</strong> is a 12-column layout that helps you arrange
      content into rows and columns. It automatically adapts to screen size — mobile, tablet,
      or desktop.
    </p>

    <h2>🌟 What is the Bootstrap Grid System?</h2>
    <p>
      Think of it like dividing your page into 12 equal parts horizontally. You can combine them
      in different ways (like <code>6+6</code>, <code>4+4+4</code>, <code>3+9</code>) to create
      responsive layouts.
    </p>

    <h2>🧱 Basic Structure</h2>
    <pre className="code-block">
{`<div class="container">
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col">Column 3</div>
  </div>
</div>`}
    </pre>

    <h2>✅ Explanation</h2>
    <ul className="bullet-points">
      <li><code>.container</code> → Wraps everything and gives spacing.</li>
      <li><code>.row</code> → Creates a horizontal group (row).</li>
      <li><code>.col</code> → Creates a flexible column inside that row.</li>
    </ul>

    <h2>🧩 1. Containers</h2>
    <p>Containers are wrappers for your content. Bootstrap has three types:</p>
    <table className="info-table">
      <thead>
        <tr>
          <th>Class</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>.container</td>
          <td>Fixed-width layout (changes with screen size)</td>
        </tr>
        <tr>
          <td>.container-fluid</td>
          <td>Full width on all screens</td>
        </tr>
        <tr>
          <td>.container-md</td>
          <td>Full width until medium breakpoint</td>
        </tr>
      </tbody>
    </table>

    <pre className="code-block">
{`<div class="container-fluid bg-light p-3">Full width container</div>
<div class="container bg-secondary text-white p-3">Fixed width container</div>`}
    </pre>

    <h2>📏 2. Rows and Columns</h2>
    <pre className="code-block">
{`<div class="container">
  <div class="row">
    <div class="col-4 bg-primary text-white p-3">4 cols</div>
    <div class="col-8 bg-success text-white p-3">8 cols</div>
  </div>
</div>`}
    </pre>
    <p className="subtitle">✅ 4 + 8 = 12 → full row</p>

    <h2>🪄 3. Responsive Breakpoints</h2>
    <table className="info-table">
      <thead>
        <tr>
          <th>Breakpoint</th>
          <th>Class Prefix</th>
          <th>Screen Width</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Extra small</td><td>col-</td><td>&lt;576px</td></tr>
        <tr><td>Small</td><td>col-sm-</td><td>≥576px</td></tr>
        <tr><td>Medium</td><td>col-md-</td><td>≥768px</td></tr>
        <tr><td>Large</td><td>col-lg-</td><td>≥992px</td></tr>
        <tr><td>Extra large</td><td>col-xl-</td><td>≥1200px</td></tr>
        <tr><td>XXL</td><td>col-xxl-</td><td>≥1400px</td></tr>
      </tbody>
    </table>

    <h2>📱 Example: Responsive Columns</h2>
    <pre className="code-block">
{`<div class="container">
  <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-3 bg-primary text-white p-3">Column 1</div>
    <div class="col-sm-6 col-md-4 col-lg-3 bg-success text-white p-3">Column 2</div>
    <div class="col-sm-6 col-md-4 col-lg-3 bg-warning text-dark p-3">Column 3</div>
    <div class="col-sm-6 col-md-4 col-lg-3 bg-danger text-white p-3">Column 4</div>
  </div>
</div>`}
    </pre>

    <h2>🎯 4. Auto Layout Columns</h2>
    <pre className="code-block">
{`<div class="row">
  <div class="col bg-info p-3">1</div>
  <div class="col bg-warning p-3">2</div>
  <div class="col bg-danger p-3">3</div>
</div>`}
    </pre>

    <h2>🧮 5. Fixed & Mixed Widths</h2>
    <pre className="code-block">
{`<div class="row">
  <div class="col-6 bg-primary text-white p-3">Half Width</div>
  <div class="col bg-success text-white p-3">Auto Width</div>
</div>`}
    </pre>

    <h2>⚖️ 6. Column Alignment (Flexbox Built-in)</h2>
    <table className="info-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Class</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Horizontal</td><td>justify-content-center</td><td>Align columns center horizontally</td></tr>
        <tr><td>Vertical</td><td>align-items-center</td><td>Align columns center vertically</td></tr>
      </tbody>
    </table>

    <pre className="code-block">
{`<div class="row justify-content-center align-items-center" style="height: 200px;">
  <div class="col-4 bg-warning p-3">Centered Column</div>
</div>`}
    </pre>

    <h2>🧭 7. Nesting Columns</h2>
    <pre className="code-block">
{`<div class="row">
  <div class="col-8 bg-light">
    <div class="row">
      <div class="col-6 bg-info p-2">Nested 1</div>
      <div class="col-6 bg-danger p-2">Nested 2</div>
    </div>
  </div>
  <div class="col-4 bg-secondary text-white p-3">Side Bar</div>
</div>`}
    </pre>

    <h2>🌈 8. Gutters (Spacing Between Columns)</h2>
    <pre className="code-block">
{`<div class="row g-3">
  <div class="col bg-primary p-3 text-white">Box 1</div>
  <div class="col bg-success p-3 text-white">Box 2</div>
</div>`}
    </pre>

    <h2>🧠 9. Offsetting Columns</h2>
    <pre className="code-block">
{`<div class="row">
  <div class="col-4 offset-2 bg-warning text-dark p-3">
    Offset Column
  </div>
</div>`}
    </pre>

    <h2>🎨 10. Practice Example</h2>
    <pre className="code-block">
{`<div class="container">
  <div class="row text-center">
    <div class="col-md-3 bg-primary text-white p-3">Column 1</div>
    <div class="col-md-3 bg-success text-white p-3">Column 2</div>
    <div class="col-md-3 bg-warning p-3">Column 3</div>
    <div class="col-md-3 bg-danger text-white p-3">Column 4</div>
  </div>
</div>`}
    </pre>

    <h2>🧾 Summary Table</h2>
    <table className="info-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>.container</td><td>Wrapper for grid</td></tr>
        <tr><td>.row</td><td>Horizontal group of columns</td></tr>
        <tr><td>.col</td><td>Defines a column</td></tr>
        <tr><td>.col-sm-*, .col-md-*</td><td>Responsive sizing</td></tr>
        <tr><td>.offset-*</td><td>Adds blank space before a column</td></tr>
        <tr><td>.g-*</td><td>Controls gutter spacing</td></tr>
        <tr><td>justify-content-* / align-items-*</td><td>Controls alignment</td></tr>
      </tbody>
    </table>
  </>
)}
{activeSection === "bootstrap-typography" && (
  <div className="content-section">
    <h1>🎨 Bootstrap Typography</h1>

    <h2>🧩 What is Typography?</h2>
    <p className="subtitle">
      Typography in Bootstrap deals with:
      <ul>
        <li>Headings</li>
        <li>Paragraphs</li>
        <li>Font sizes & weights</li>
        <li>Text alignment</li>
        <li>Colors and decorations</li>
      </ul>
      Bootstrap gives you predefined utility classes to style all text elements quickly — no need to write custom CSS!
    </p>

    <h2>🅰️ 1. Headings</h2>
    <p>
      Bootstrap automatically styles headings (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>).
    </p>
    <pre>
      <code>
{`<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>`}
      </code>
    </pre>
    <p>💡 Each level decreases in size automatically.</p>

    <h3>🔹 Display Headings (Bigger, Bolder)</h3>
    <pre>
      <code>
{`<h1 class="display-1">Display 1</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-6">Display 6</h1>`}
      </code>
    </pre>
    <p>✅ Great for banners or landing page titles.</p>

    <h3>🧠 Small Secondary Text</h3>
    <pre>
      <code>
{`<h3>Bootstrap Heading <small class="text-muted">Secondary text</small></h3>`}
      </code>
    </pre>
    <p>🩶 Output: “Bootstrap Heading” with smaller, lighter subtitle.</p>

    <h2>📝 2. Paragraphs</h2>
    <pre>
      <code>
{`<p>This is a normal paragraph.</p>
<p class="lead">This is a lead paragraph — stands out for intro text.</p>`}
      </code>
    </pre>
    <p>
      💡 <code>.lead</code> makes the paragraph slightly larger and lighter — perfect for summaries.
    </p>

    <h2>🎚️ 3. Font Weight & Style</h2>
    <table>
      <thead>
        <tr><th>Class</th><th>Effect</th></tr>
      </thead>
      <tbody>
        <tr><td>.fw-bold</td><td>Bold text</td></tr>
        <tr><td>.fw-semibold</td><td>Semi-bold text</td></tr>
        <tr><td>.fw-normal</td><td>Normal text</td></tr>
        <tr><td>.fw-light</td><td>Light text</td></tr>
        <tr><td>.fst-italic</td><td>Italic text</td></tr>
        <tr><td>.fst-normal</td><td>Remove italic style</td></tr>
      </tbody>
    </table>
    <pre>
      <code>
{`<p class="fw-bold">Bold text</p>
<p class="fst-italic">Italic text</p>`}
      </code>
    </pre>

    <h2>🧭 4. Text Alignment</h2>
    <table>
      <thead>
        <tr><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>.text-start</td><td>Left aligned (default)</td></tr>
        <tr><td>.text-center</td><td>Center aligned</td></tr>
        <tr><td>.text-end</td><td>Right aligned</td></tr>
      </tbody>
    </table>
    <pre>
      <code>
{`<p class="text-center">This text is centered</p>`}
      </code>
    </pre>
    <p>💡 Responsive alignment example:</p>
    <pre>
      <code>
{`<p class="text-md-end">Right aligned on md+ screens</p>`}
      </code>
    </pre>

    <h2>🧍 5. Text Transform (Uppercase / Lowercase / Capitalize)</h2>
    <table>
      <thead>
        <tr><th>Class</th><th>Effect</th></tr>
      </thead>
      <tbody>
        <tr><td>.text-lowercase</td><td>Converts text to lowercase</td></tr>
        <tr><td>.text-uppercase</td><td>Converts text to uppercase</td></tr>
        <tr><td>.text-capitalize</td><td>Capitalizes first letter of each word</td></tr>
      </tbody>
    </table>
    <pre>
      <code>
{`<p class="text-uppercase">bootstrap typography</p>`}
      </code>
    </pre>
    <p>✅ Output: BOOTSTRAP TYPOGRAPHY</p>

    <h2>🌈 6. Text Colors</h2>
    <table>
      <thead>
        <tr><th>Class</th><th>Color</th></tr>
      </thead>
      <tbody>
        <tr><td>.text-primary</td><td>Blue</td></tr>
        <tr><td>.text-secondary</td><td>Gray</td></tr>
        <tr><td>.text-success</td><td>Green</td></tr>
        <tr><td>.text-danger</td><td>Red</td></tr>
        <tr><td>.text-warning</td><td>Yellow</td></tr>
        <tr><td>.text-info</td><td>Light Blue</td></tr>
        <tr><td>.text-light</td><td>White</td></tr>
        <tr><td>.text-dark</td><td>Black</td></tr>
        <tr><td>.text-muted</td><td>Faded Gray</td></tr>
      </tbody>
    </table>
    <pre>
      <code>
{`<p class="text-success">This is success text</p>
<p class="text-danger">This is danger text</p>
<p class="text-muted">This is muted text</p>`}
      </code>
    </pre>

    <h2>🎨 7. Background + Text Combo</h2>
    <pre>
      <code>
{`<p class="bg-dark text-white p-2">White text on dark background</p>
<p class="bg-warning text-dark p-2">Dark text on yellow background</p>`}
      </code>
    </pre>
    <p>💡 Always add <code>p-2</code> or <code>p-3</code> (padding) to make backgrounds visible clearly.</p>

    <h2>🔠 8. Text Decoration & Links</h2>
    <table>
      <thead>
        <tr><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>.text-decoration-none</td><td>Removes underline</td></tr>
        <tr><td>.text-decoration-underline</td><td>Adds underline</td></tr>
        <tr><td>.text-decoration-line-through</td><td>Adds strikethrough</td></tr>
      </tbody>
    </table>
    <pre>
      <code>
{`<a href="#" class="text-decoration-none text-primary">No underline link</a>
<p class="text-decoration-line-through">Strikethrough text</p>`}
      </code>
    </pre>

    <h2>📱 9. Responsive Font Sizes</h2>
    <p>
      Bootstrap 5 enables responsive font sizing by default (RFS system). This means text scales slightly with screen size.
    </p>
    <pre>
      <code>
{`<h1 class="fs-1">Font size 1</h1>
<h1 class="fs-2">Font size 2</h1>
<h1 class="fs-3">Font size 3</h1>
<h1 class="fs-4">Font size 4</h1>
<h1 class="fs-5">Font size 5</h1>
<h1 class="fs-6">Font size 6</h1>`}
      </code>
    </pre>
    <p>🧠 <code>.fs-1</code> is largest, <code>.fs-6</code> is smallest.</p>

    <h2>🧩 10. Blockquote (Quotations)</h2>
    <pre>
      <code>
{`<blockquote class="blockquote">
  <p>"Learning Bootstrap makes web design easier."</p>
  <footer class="blockquote-footer">Sofia, <cite>Web Learner</cite></footer>
</blockquote>`}
      </code>
    </pre>

    <h2>🧮 11. Lists</h2>
    <pre>
      <code>
{`<ul class="list-unstyled">
  <li>HTML</li>
  <li>CSS</li>
  <li>Bootstrap</li>
</ul>

<ul class="list-inline">
  <li class="list-inline-item">Home</li>
  <li class="list-inline-item">About</li>
  <li class="list-inline-item">Contact</li>
</ul>`}
      </code>
    </pre>

    <h2>🧾 Summary Table</h2>
    <table>
      <thead>
        <tr><th>Feature</th><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Headings</td><td>.h1–.h6 / .display-*</td><td>Text size classes</td></tr>
        <tr><td>Font weight</td><td>.fw-bold, .fw-light</td><td>Text thickness</td></tr>
        <tr><td>Alignment</td><td>.text-start, .text-center, .text-end</td><td>Text position</td></tr>
        <tr><td>Transformation</td><td>.text-uppercase, .text-lowercase</td><td>Letter casing</td></tr>
        <tr><td>Color</td><td>.text-primary, .text-danger, etc.</td><td>Text color</td></tr>
        <tr><td>Decoration</td><td>.text-decoration-none, .underline</td><td>Underline/strike</td></tr>
        <tr><td>Font size</td><td>.fs-1–.fs-6</td><td>Scalable text size</td></tr>
        <tr><td>Lists</td><td>.list-unstyled, .list-inline</td><td>Clean or inline lists</td></tr>
      </tbody>
    </table>
  </div>
)}
{activeSection === "bootstrap-colors-backgrounds" && (
  <div className="course-content">
    <h1>🧱 Bootstrap Colors & Backgrounds</h1>
    <p className="subtitle">
      Bootstrap provides utility classes for text color, background color, and gradient effects — all based on its theme color system.
      🌈 You can instantly apply them to any element without writing custom CSS.
    </p>

    <h2>🎨 1. Bootstrap Theme Colors</h2>
    <p>Bootstrap includes 8 main theme colors used throughout buttons, alerts, and badges.</p>

    <table className="info-table">
      <thead>
        <tr>
          <th>Color Name</th>
          <th>Class</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>🟦 Primary</td><td>text-primary / bg-primary</td><td>Main accent color</td></tr>
        <tr><td>⚪ Secondary</td><td>text-secondary / bg-secondary</td><td>Neutral gray tone</td></tr>
        <tr><td>🟩 Success</td><td>text-success / bg-success</td><td>Positive actions</td></tr>
        <tr><td>🟥 Danger</td><td>text-danger / bg-danger</td><td>Errors / delete</td></tr>
        <tr><td>🟨 Warning</td><td>text-warning / bg-warning</td><td>Alerts or caution</td></tr>
        <tr><td>🟦 Info</td><td>text-info / bg-info</td><td>Informational color</td></tr>
        <tr><td>⚫ Dark</td><td>text-dark / bg-dark</td><td>Bold, high contrast</td></tr>
        <tr><td>⚪ Light</td><td>text-light / bg-light</td><td>Soft light tone</td></tr>
      </tbody>
    </table>

    <h2>✍️ 2. Text Colors</h2>
    <p>Apply text colors easily using <code>text-*</code> class.</p>

    <div className="example-box">
      <p className="text-primary">This is a primary text.</p>
      <p className="text-success">This is a success text.</p>
      <p className="text-danger">This is a danger text.</p>
      <p className="text-warning">This is a warning text.</p>
      <p className="text-info">This is an info text.</p>
      <p className="text-dark">This is a dark text.</p>
      <p className="text-muted">This is a muted (gray) text.</p>
      <p className="text-white bg-dark p-2 rounded">White text on dark background.</p>
    </div>

    <p className="tip">💡 Use <code>.text-muted</code> for subtle, less prominent text.</p>

    <h2>🧱 3. Background Colors</h2>
    <p>Change background color using <code>bg-*</code> classes.</p>

    <div className="example-box">
      <div className="p-3 mb-2 bg-primary text-white rounded">Primary background</div>
      <div className="p-3 mb-2 bg-success text-white rounded">Success background</div>
      <div className="p-3 mb-2 bg-danger text-white rounded">Danger background</div>
      <div className="p-3 mb-2 bg-warning text-dark rounded">Warning background</div>
      <div className="p-3 mb-2 bg-info text-dark rounded">Info background</div>
      <div className="p-3 mb-2 bg-dark text-white rounded">Dark background</div>
      <div className="p-3 mb-2 bg-light text-dark rounded">Light background</div>
    </div>

    <p className="tip">🧠 Always pair text color properly for good contrast.</p>

    <h2>🌈 4. Background Gradient</h2>
    <p>Use <code>.bg-gradient</code> for subtle shine effects.</p>

    <div className="example-box">
      <div className="p-3 mb-2 bg-primary bg-gradient text-white rounded">
        Gradient Primary Background
      </div>
      <div className="p-3 mb-2 bg-success bg-gradient text-white rounded">
        Gradient Success Background
      </div>
    </div>

    <p className="tip">💡 Adds a smooth top-to-bottom fade for a glossy look.</p>

    <h2>🧭 5. Opacity Utilities</h2>
    <p>Adjust background transparency with <code>.bg-opacity-*</code>.</p>

    <div className="example-box">
      <div className="bg-primary bg-opacity-25 p-3 rounded">25% opacity</div>
      <div className="bg-primary bg-opacity-50 p-3 rounded">50% opacity</div>
      <div className="bg-primary bg-opacity-75 p-3 rounded">75% opacity</div>
      <div className="bg-primary bg-opacity-100 p-3 rounded">100% opacity</div>
    </div>

    <h2>🧠 6. Combined Example</h2>
    <div className="example-box container mt-3 p-3 border rounded">
      <h4 className="text-primary">Bootstrap Color Showcase</h4>
      <p className="text-success">✅ Operation completed successfully.</p>
      <p className="text-danger">❌ Error: Something went wrong!</p>
      <p className="text-warning bg-dark p-2 rounded">⚠️ Warning message with dark background</p>
      <p className="text-info bg-light p-2 rounded">ℹ️ Informational message</p>
    </div>

    <h2>🧩 7. Customizing Colors (Optional)</h2>
    <p>If you use Sass, you can redefine theme colors:</p>

    <pre className="code-snippet">
{`$theme-colors: (
  "primary": #6f42c1,
  "success": #198754,
  "info": #0dcaf0
);`}
    </pre>

    <p className="tip">💡 In most projects, default Bootstrap colors are perfect!</p>

    <h2>💡 8. Background Helpers</h2>
    <table className="info-table">
      <thead>
        <tr>
          <th>Class</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>bg-transparent</td><td>No background color</td></tr>
        <tr><td>bg-body</td><td>Matches page body</td></tr>
        <tr><td>bg-black / bg-white</td><td>Solid color helpers</td></tr>
        <tr><td>bg-body-secondary</td><td>Layered card background</td></tr>
      </tbody>
    </table>

    <div className="example-box mt-3">
      <div className="p-3 bg-transparent border rounded">Transparent box</div>
    </div>

    <h2>🎨 9. Gradient Color Combo Example</h2>
    <div className="container mt-4 text-center">
      <div className="p-4 mb-3 bg-success bg-gradient text-white rounded">
        Green Gradient Success Box
      </div>
      <div className="p-4 mb-3 bg-info bg-gradient text-dark rounded">
        Cool Blue Gradient Info Box
      </div>
      <div className="p-4 mb-3 bg-danger bg-gradient text-white rounded">
        Red Gradient Danger Box
      </div>
    </div>

    <h2>✅ Summary</h2>
    <table className="info-table">
      <thead>
        <tr>
          <th>Purpose</th>
          <th>Class Example</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Text Color</td><td>text-primary</td><td>Changes text color</td></tr>
        <tr><td>Background Color</td><td>bg-warning</td><td>Changes background</td></tr>
        <tr><td>Gradient</td><td>bg-primary bg-gradient</td><td>Adds gradient effect</td></tr>
        <tr><td>Opacity</td><td>bg-opacity-50</td><td>Controls transparency</td></tr>
        <tr><td>Transparent</td><td>bg-transparent</td><td>No background color</td></tr>
      </tbody>
    </table>
  </div>
)}
{activeSection === "bootstrap-utilities" && (
  <div className="content-section">
    <h1>🧭 Bootstrap Utilities</h1>

    <h2>🌟 What Are Utilities?</h2>
    <p className="subtitle">
      Utilities are predefined CSS classes in Bootstrap that you can use to:
      <ul>
        <li>Adjust spacing (margin, padding)</li>
        <li>Change colors</li>
        <li>Control display and flexbox</li>
        <li>Manage borders, shadows, sizes, alignment</li>
      </ul>
      And much more — all without writing CSS manually.
    </p>
    <p>💡 They help make your website responsive and consistent using class-based customization.</p>

    <h2>🧩 1. Spacing Utilities</h2>
    <p>Control margin (<code>m</code>) and padding (<code>p</code>) easily.</p>
    <p><b>Syntax:</b> {`{property}{sides}-{breakpoint}-{size}`}</p>

    <h3>Properties:</h3>
    <ul>
      <li><code>m</code> → margin</li>
      <li><code>p</code> → padding</li>
    </ul>

    <h3>Sides:</h3>
    <ul>
      <li><code>t</code> → top</li>
      <li><code>b</code> → bottom</li>
      <li><code>s</code> → start (left in LTR)</li>
      <li><code>e</code> → end (right in LTR)</li>
      <li><code>x</code> → left and right</li>
      <li><code>y</code> → top and bottom</li>
      <li><code>Blank</code> → all sides</li>
    </ul>

    <h3>Sizes:</h3>
    <table>
      <thead>
        <tr><th>Size</th><th>Approx. Space</th></tr>
      </thead>
      <tbody>
        <tr><td>0</td><td>0px</td></tr>
        <tr><td>1</td><td>0.25rem</td></tr>
        <tr><td>2</td><td>0.5rem</td></tr>
        <tr><td>3</td><td>1rem</td></tr>
        <tr><td>4</td><td>1.5rem</td></tr>
        <tr><td>5</td><td>3rem</td></tr>
        <tr><td>auto</td><td>Automatic margin</td></tr>
      </tbody>
    </table>

    <pre>
      <code>
{`<div class="m-3 p-3 bg-light border">Margin & Padding</div>
<div class="mt-4 mb-2 bg-warning p-2">Top & Bottom Space</div>
<div class="mx-auto w-50 bg-info p-2">Centered Box</div>`}
      </code>
    </pre>
    <p>💡 <code>.mx-auto</code> centers block elements horizontally.</p>

    <h2>⚙️ 2. Display Utilities</h2>
    <table>
      <thead>
        <tr><th>Class</th><th>Effect</th></tr>
      </thead>
      <tbody>
        <tr><td>.d-block</td><td>Display as block</td></tr>
        <tr><td>.d-inline</td><td>Display as inline</td></tr>
        <tr><td>.d-inline-block</td><td>Inline + block</td></tr>
        <tr><td>.d-none</td><td>Hide element</td></tr>
        <tr><td>.d-flex</td><td>Enable flexbox</td></tr>
        <tr><td>.d-grid</td><td>Enable CSS Grid</td></tr>
      </tbody>
    </table>
    <pre>
      <code>
{`<span class="d-block bg-light">Block Element</span>
<span class="d-inline bg-warning">Inline Element</span>
<div class="d-none d-md-block bg-info">Visible on md+ screens</div>`}
      </code>
    </pre>
    <p>💡 Combine <code>.d-none</code> and <code>.d-md-block</code> for responsive visibility.</p>

    <h2>🧱 3. Borders</h2>
    <table>
      <thead>
        <tr><th>Class</th><th>Effect</th></tr>
      </thead>
      <tbody>
        <tr><td>.border</td><td>Add border to all sides</td></tr>
        <tr><td>.border-top, .border-bottom, .border-start, .border-end</td><td>Specific sides</td></tr>
        <tr><td>.border-0</td><td>Remove all borders</td></tr>
        <tr><td>.border-2, .border-4, .border-5</td><td>Border thickness</td></tr>
        <tr><td>.border-primary, .border-success</td><td>Border color</td></tr>
      </tbody>
    </table>
    <pre>
      <code>
{`<div class="border border-3 border-primary p-3">Primary Border</div>
<div class="border-top border-danger border-2 p-3">Top Border Only</div>`}
      </code>
    </pre>

    <h2>🧭 4. Text Alignment & Transformation</h2>
    <table>
      <thead>
        <tr><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>.text-start</td><td>Left align</td></tr>
        <tr><td>.text-center</td><td>Center align</td></tr>
        <tr><td>.text-end</td><td>Right align</td></tr>
        <tr><td>.text-uppercase</td><td>UPPERCASE</td></tr>
        <tr><td>.text-lowercase</td><td>lowercase</td></tr>
        <tr><td>.text-capitalize</td><td>Capitalize first letter</td></tr>
      </tbody>
    </table>
    <pre>
      <code>
{`<p class="text-center text-uppercase text-primary">Centered Uppercase Text</p>`}
      </code>
    </pre>

    <h2>🧍 5. Sizing Utilities</h2>
    <table>
      <thead>
        <tr><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>.w-25</td><td>25% width</td></tr>
        <tr><td>.w-50</td><td>50% width</td></tr>
        <tr><td>.w-75</td><td>75% width</td></tr>
        <tr><td>.w-100</td><td>100% width</td></tr>
        <tr><td>.h-25, .h-50, .h-100</td><td>Height controls</td></tr>
      </tbody>
    </table>
    <pre>
      <code>
{`<div class="bg-success w-50 p-3 text-white">Half width</div>
<div class="bg-info w-100 p-3 text-white">Full width</div>`}
      </code>
    </pre>

    <h2>🎯 6. Position Utilities</h2>
    <table>
      <thead>
        <tr><th>Class</th><th>Effect</th></tr>
      </thead>
      <tbody>
        <tr><td>.position-static</td><td>Default</td></tr>
        <tr><td>.position-relative</td><td>Relative</td></tr>
        <tr><td>.position-absolute</td><td>Absolute</td></tr>
        <tr><td>.position-fixed</td><td>Fixed</td></tr>
        <tr><td>.position-sticky</td><td>Sticky</td></tr>
      </tbody>
    </table>
    <pre>
      <code>
{`<div class="position-relative bg-light p-4">
  <div class="position-absolute top-0 end-0 bg-danger text-white p-2">
    Positioned Box
  </div>
</div>`}
      </code>
    </pre>
    <p>💡 Add helper classes like <code>.top-0</code>, <code>.bottom-50</code>, <code>.start-100</code> for fine-tuned placement.</p>

    <h2>🌈 7. Shadows</h2>
    <table>
      <thead>
        <tr><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>.shadow-none</td><td>No shadow</td></tr>
        <tr><td>.shadow-sm</td><td>Small shadow</td></tr>
        <tr><td>.shadow</td><td>Regular shadow</td></tr>
        <tr><td>.shadow-lg</td><td>Large shadow</td></tr>
      </tbody>
    </table>
    <pre>
      <code>
{`<div class="shadow-lg p-4 bg-white rounded">Box with Shadow</div>`}
      </code>
    </pre>

    <h2>🧩 8. Rounded Corners</h2>
    <table>
      <thead>
        <tr><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>.rounded</td><td>Normal rounded corners</td></tr>
        <tr><td>.rounded-circle</td><td>Perfect circle</td></tr>
        <tr><td>.rounded-pill</td><td>Pill shape</td></tr>
        <tr><td>.rounded-0</td><td>No rounding</td></tr>
      </tbody>
    </table>
    <pre>
      <code>
{`<img src="..." class="rounded-circle" alt="Profile" width="100">
<div class="bg-info rounded-pill p-2 text-white">Pill Box</div>`}
      </code>
    </pre>

    <h2>🎚️ 9. Opacity Utilities</h2>
    <table>
      <thead>
        <tr><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>.opacity-0</td><td>0% visible</td></tr>
        <tr><td>.opacity-25</td><td>25% visible</td></tr>
        <tr><td>.opacity-50</td><td>50% visible</td></tr>
        <tr><td>.opacity-75</td><td>75% visible</td></tr>
        <tr><td>.opacity-100</td><td>Fully visible</td></tr>
      </tbody>
    </table>
    <pre>
      <code>
{`<div class="bg-dark text-white opacity-50 p-3">Half Transparent Box</div>`}
      </code>
    </pre>

    <h2>🧮 10. Flexbox Utilities</h2>
    <table>
      <thead>
        <tr><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>.d-flex</td><td>Enable flexbox</td></tr>
        <tr><td>.justify-content-center</td><td>Center horizontally</td></tr>
        <tr><td>.align-items-center</td><td>Center vertically</td></tr>
        <tr><td>.flex-column</td><td>Stack vertically</td></tr>
        <tr><td>.flex-row</td><td>Stack horizontally</td></tr>
      </tbody>
    </table>
    <pre>
      <code>
{`<div class="d-flex justify-content-center align-items-center bg-light" style="height:100px;">
  <button class="btn btn-primary">Centered Button</button>
</div>`}
      </code>
    </pre>

    <h2>🧠 11. Overflow & Visibility</h2>
    <table>
      <thead>
        <tr><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>.overflow-auto</td><td>Scroll when needed</td></tr>
        <tr><td>.overflow-hidden</td><td>Hide overflow</td></tr>
        <tr><td>.visible</td><td>Make visible</td></tr>
        <tr><td>.invisible</td><td>Hide element but keep space</td></tr>
      </tbody>
    </table>
    <pre>
      <code>
{`<div class="overflow-auto" style="height:100px;">
  <p>Scrollable content inside...</p>
</div>`}
      </code>
    </pre>

    <h2>🧱 12. Z-Index Utilities</h2>
    <table>
      <thead>
        <tr><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>.z-0</td><td>Lowest level</td></tr>
        <tr><td>.z-1 to .z-5</td><td>Higher levels</td></tr>
        <tr><td>.z-auto</td><td>Default behavior</td></tr>
      </tbody>
    </table>
    <pre>
      <code>
{`<div class="position-relative">
  <div class="position-absolute z-1 bg-info p-2">Behind</div>
  <div class="position-absolute z-3 bg-danger p-2">Above</div>
</div>`}
      </code>
    </pre>

    <h2>✅ Summary Table</h2>
    <table>
      <thead>
        <tr><th>Category</th><th>Example</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Spacing</td><td>.m-3, .p-2</td><td>Margin & padding</td></tr>
        <tr><td>Display</td><td>.d-none, .d-flex</td><td>Control element display</td></tr>
        <tr><td>Borders</td><td>.border-primary</td><td>Colored border</td></tr>
        <tr><td>Text</td><td>.text-center, .text-uppercase</td><td>Align or transform text</td></tr>
        <tr><td>Sizing</td><td>.w-50, .h-100</td><td>Width/height utilities</td></tr>
        <tr><td>Position</td><td>.position-absolute top-0 end-0</td><td>Element placement</td></tr>
        <tr><td>Shadow</td><td>.shadow-lg</td><td>Add depth</td></tr>
        <tr><td>Rounded</td><td>.rounded-circle</td><td>Corner radius</td></tr>
        <tr><td>Opacity</td><td>.opacity-50</td><td>Transparency</td></tr>
        <tr><td>Flexbox</td><td>.justify-content-center</td><td>Layout control</td></tr>
      </tbody>
    </table>
  </div>
)}
{activeSection === "bootstrap-buttons" && (
  <div className="course-content">
    <h1>🧩 Bootstrap Buttons</h1>
    <p className="subtitle">
      Bootstrap provides ready-to-use button classes that you can apply to
      {" <button> "}, {" <a> "}, or {" <input> "} elements.
    </p>

    <h2>🎨 1. Basic Button Classes</h2>
    <p>
      The base class is: <br />
      <code>&lt;button class="btn btn-primary"&gt;Primary Button&lt;/button&gt;</code>
    </p>
    <p>
      The <code>btn</code> class styles the button, and <code>btn-primary</code> defines its color theme.
    </p>

    <div className="example-box">
      <button className="btn btn-primary m-1">Primary</button>
      <button className="btn btn-success m-1">Success</button>
      <button className="btn btn-danger m-1">Danger</button>
      <button className="btn btn-warning m-1">Warning</button>
      <button className="btn btn-info m-1">Info</button>
      <button className="btn btn-dark m-1">Dark</button>
      <button className="btn btn-link m-1">Link</button>
    </div>

    <h2>💡 2. Button Tags</h2>
    <p>You can use buttons on multiple HTML elements:</p>
    <div className="example-box">
      <a className="btn btn-primary m-1" href="#">Link Button</a>
      <button className="btn btn-success m-1" type="button">Button Tag</button>
      <input className="btn btn-danger m-1" type="submit" value="Submit Button" />
    </div>

    <h2>🎛️ 3. Outline Buttons</h2>
    <div className="example-box">
      <button className="btn btn-outline-primary m-1">Primary</button>
      <button className="btn btn-outline-success m-1">Success</button>
      <button className="btn btn-outline-danger m-1">Danger</button>
    </div>

    <h2>📏 4. Button Sizes</h2>
    <div className="example-box">
      <button className="btn btn-primary btn-lg m-1">Large Button</button>
      <button className="btn btn-secondary btn-sm m-1">Small Button</button>
    </div>

    <h2>🧭 5. Block-Level Buttons</h2>
    <button className="btn btn-success d-block w-100 mb-3">Full Width Button</button>

    <h2>🧍 6. Disabled Buttons</h2>
    <div className="example-box">
      <button className="btn btn-primary m-1" disabled>Disabled</button>
      <a className="btn btn-secondary disabled m-1" tabindex="-1" aria-disabled="true">Disabled Link</a>
    </div>

    <h2>✨ 7. Active State</h2>
    <button className="btn btn-primary active m-1">Active Button</button>

    <h2>🌈 8. Button Groups</h2>
    <div className="btn-group m-2" role="group">
      <button className="btn btn-primary">Left</button>
      <button className="btn btn-primary">Middle</button>
      <button className="btn btn-primary">Right</button>
    </div>

    <h2>🧠 9. Button Toolbar</h2>
    <div className="btn-toolbar m-2">
      <div className="btn-group me-2">
        <button className="btn btn-secondary">1</button>
        <button className="btn btn-secondary">2</button>
      </div>
      <div className="btn-group">
        <button className="btn btn-primary">A</button>
        <button className="btn btn-primary">B</button>
      </div>
    </div>

    <h2>🎨 10. Buttons with Icons</h2>
    <div className="example-box">
      <button className="btn btn-success m-1">
        <i className="bi bi-check-circle"></i> Submit
      </button>
      <button className="btn btn-danger m-1">
        <i className="bi bi-trash"></i> Delete
      </button>
    </div>

    <h2>⚙️ 11. Toggle Buttons</h2>
    <button
      type="button"
      className="btn btn-primary m-2"
      data-bs-toggle="button"
      aria-pressed="false"
    >
      Toggle Button
    </button>

    <h2>🎛️ 12. Button Colors with Gradients</h2>
    <button className="btn btn-success bg-gradient m-2">Gradient Button</button>

    <h2>🧾 13. Example: Button Showcase</h2>
    <div className="container text-center mt-4">
      <h3 className="text-primary mb-3">Bootstrap Buttons</h3>

      <div className="example-box">
        <button className="btn btn-primary m-1">Primary</button>
        <button className="btn btn-secondary m-1">Secondary</button>
        <button className="btn btn-success m-1">Success</button>
        <button className="btn btn-danger m-1">Danger</button>
        <button className="btn btn-warning m-1">Warning</button>
        <button className="btn btn-info m-1">Info</button>
        <button className="btn btn-dark m-1">Dark</button>
        <button className="btn btn-light m-1">Light</button>
      </div>

      <hr />

      <div className="example-box">
        <button className="btn btn-outline-primary m-1">Outline Primary</button>
        <button className="btn btn-outline-danger m-1">Outline Danger</button>
      </div>

      <hr />

      <div className="example-box">
        <button className="btn btn-success btn-lg m-1">Large</button>
        <button className="btn btn-warning btn-sm m-1">Small</button>
      </div>
    </div>

    <h2>✅ Summary</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Example</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Basic Button</td>
          <td><code>.btn btn-primary</code></td>
          <td>Standard button</td>
        </tr>
        <tr>
          <td>Outline</td>
          <td><code>.btn-outline-success</code></td>
          <td>Border-only style</td>
        </tr>
        <tr>
          <td>Size</td>
          <td><code>.btn-lg, .btn-sm</code></td>
          <td>Change size</td>
        </tr>
        <tr>
          <td>Disabled</td>
          <td><code>disabled</code></td>
          <td>Disable click</td>
        </tr>
        <tr>
          <td>Full Width</td>
          <td><code>.d-block w-100</code></td>
          <td>Full width</td>
        </tr>
        <tr>
          <td>Group</td>
          <td><code>.btn-group</code></td>
          <td>Combine multiple</td>
        </tr>
        <tr>
          <td>Toggle</td>
          <td><code>data-bs-toggle="button"</code></td>
          <td>Switchable button</td>
        </tr>
        <tr>
          <td>Gradient</td>
          <td><code>.bg-gradient</code></td>
          <td>Add gradient</td>
        </tr>
      </tbody>
    </table>
  </div>
)}
{activeSection === "bootstrap-tables" && (
  <div className="course-content">
    <h1>📋 Bootstrap Tables</h1>
    <p className="subtitle">
      Bootstrap makes HTML tables beautiful, responsive, and feature-rich using built-in classes —
      without needing any custom CSS!
    </p>

    <h2>🧩 1. Basic Table</h2>
    <p>Start with the <code>.table</code> class:</p>

    <div className="example-box">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Alice</td>
            <td>alice@example.com</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Bob</td>
            <td>bob@example.com</td>
            <td>London</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="tip">✅ This gives a clean, styled table with proper spacing and borders.</p>

    <h2>🎨 2. Table Variants (Color Themes)</h2>
    <p>Use contextual classes for colorful table rows:</p>

    <table className="info-table">
      <thead>
        <tr>
          <th>Class</th>
          <th>Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>.table-primary</td><td>Blue shade</td></tr>
        <tr><td>.table-success</td><td>Green shade</td></tr>
        <tr><td>.table-danger</td><td>Red shade</td></tr>
        <tr><td>.table-warning</td><td>Yellow shade</td></tr>
        <tr><td>.table-info</td><td>Cyan shade</td></tr>
        <tr><td>.table-light</td><td>Light gray</td></tr>
        <tr><td>.table-dark</td><td>Dark gray</td></tr>
      </tbody>
    </table>

    <div className="example-box">
      <table className="table">
        <tbody>
          <tr className="table-primary"><td>Primary Row</td></tr>
          <tr className="table-success"><td>Success Row</td></tr>
          <tr className="table-danger"><td>Danger Row</td></tr>
          <tr className="table-warning"><td>Warning Row</td></tr>
          <tr className="table-info"><td>Info Row</td></tr>
        </tbody>
      </table>
    </div>

    <p className="tip">💡 You can apply these classes to either <code>&lt;tr&gt;</code> or <code>&lt;td&gt;</code>.</p>

    <h2>🌈 3. Striped Rows</h2>
    <div className="example-box">
      <table className="table table-striped">
        <thead>
          <tr><th>#</th><th>Name</th><th>City</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Alice</td><td>New York</td></tr>
          <tr><td>2</td><td>Bob</td><td>London</td></tr>
          <tr><td>3</td><td>Charlie</td><td>Paris</td></tr>
        </tbody>
      </table>
    </div>
    <p className="tip">🧠 Great for readability when displaying many rows.</p>

    <h2>💡 4. Bordered & Borderless Tables</h2>
    <pre className="code-snippet">
{`<table class="table table-bordered">...</table>
<table class="table table-borderless">...</table>`}
    </pre>

    <h2>⚙️ 5. Hoverable Rows</h2>
    <div className="example-box">
      <table className="table table-hover">
        <thead>
          <tr><th>#</th><th>Name</th><th>City</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Alice</td><td>New York</td></tr>
          <tr><td>2</td><td>Bob</td><td>London</td></tr>
          <tr><td>3</td><td>Charlie</td><td>Paris</td></tr>
        </tbody>
      </table>
    </div>
    <p className="tip">🎯 Perfect for user-interactive tables like dashboards.</p>

    <h2>🌍 6. Responsive Tables</h2>
    <div className="example-box">
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr><th>#</th><th>Name</th><th>City</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Alice</td><td>New York</td></tr>
            <tr><td>2</td><td>Bob</td><td>London</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p className="tip">💡 Adds horizontal scroll on small devices.</p>

    <h2>🧱 7. Dark Tables</h2>
    <div className="example-box">
      <table className="table table-dark table-striped">
        <thead>
          <tr><th>#</th><th>Name</th><th>Email</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Alice</td><td>alice@example.com</td></tr>
          <tr><td>2</td><td>Bob</td><td>bob@example.com</td></tr>
        </tbody>
      </table>
    </div>
    <p className="tip">💡 Combine with <code>.table-hover</code> for sleek dark UIs.</p>

    <h2>🧠 8. Small & Compact Tables</h2>
    <pre className="code-snippet">
{`<table class="table table-sm table-bordered">...</table>`}
    </pre>
    <p className="tip">👀 Great for data-dense layouts (like reports).</p>

    <h2>🧩 9. Table Head Options</h2>
    <div className="example-box">
      <table className="table">
        <thead className="table-dark">
          <tr><th>#</th><th>Name</th><th>Marks</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Alice</td><td>95</td></tr>
          <tr><td>2</td><td>Bob</td><td>88</td></tr>
        </tbody>
      </table>
    </div>

    <h2>📏 10. Alignments & Styling</h2>
    <p>Use Bootstrap utilities inside tables for alignment and styling.</p>
    <table className="info-table">
      <thead>
        <tr><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>text-start, text-center, text-end</td><td>Text alignment</td></tr>
        <tr><td>align-top, align-middle, align-bottom</td><td>Vertical alignment</td></tr>
        <tr><td>fw-bold, text-muted</td><td>Font weight / muted text</td></tr>
      </tbody>
    </table>

    <h2>🧾 11. Full Example: Student Table</h2>
    <div className="example-box container mt-3">
      <h3 className="text-primary text-center mb-3">Student Details</h3>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Course</th>
              <th>Marks</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-success">
              <td>1</td>
              <td>Alice</td>
              <td>HTML</td>
              <td>95</td>
              <td>Passed</td>
            </tr>
            <tr className="table-warning">
              <td>2</td>
              <td>Bob</td>
              <td>CSS</td>
              <td>60</td>
              <td>Average</td>
            </tr>
            <tr className="table-danger">
              <td>3</td>
              <td>Charlie</td>
              <td>JavaScript</td>
              <td>35</td>
              <td>Failed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h2>✅ Summary Table</h2>
    <table className="info-table">
      <thead>
        <tr><th>Feature</th><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Basic Table</td><td>.table</td><td>Base styling</td></tr>
        <tr><td>Striped</td><td>.table-striped</td><td>Alternating rows</td></tr>
        <tr><td>Bordered</td><td>.table-bordered</td><td>Adds cell borders</td></tr>
        <tr><td>Borderless</td><td>.table-borderless</td><td>Removes borders</td></tr>
        <tr><td>Hover</td><td>.table-hover</td><td>Highlights rows on hover</td></tr>
        <tr><td>Compact</td><td>.table-sm</td><td>Reduced padding</td></tr>
        <tr><td>Dark Theme</td><td>.table-dark</td><td>Dark mode</td></tr>
        <tr><td>Responsive</td><td>.table-responsive</td><td>Horizontal scroll</td></tr>
        <tr><td>Contextual Color</td><td>.table-success, etc.</td><td>Row highlighting</td></tr>
      </tbody>
    </table>
  </div>
)}
{activeSection === "bootstrap-images-figures" && (
  <>
    <h1>🖼️ Bootstrap Images & Figures</h1>
    <p className="subtitle">
      Bootstrap provides utility classes to easily style, resize, and align images — making them responsive, rounded, and beautifully displayed with captions or borders.
    </p>

    <h2>🧩 1. Basic Responsive Image</h2>
    <p>
      The class <code>.img-fluid</code> makes images scale automatically with the parent container width while keeping their aspect ratio.
    </p>
    <pre>
      {`<img src="https://via.placeholder.com/500x300" class="img-fluid" alt="Responsive Image">`}
    </pre>
    <p>✅ The image width adjusts (max-width: 100%) and keeps its aspect ratio. Perfect for all screen sizes 📱💻</p>

    <h2>🟦 2. Image Shapes (Rounded Corners)</h2>
    <p>Bootstrap lets you easily round image corners using these classes:</p>
    <table>
      <thead>
        <tr><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>.rounded</td><td>Small rounded corners</td></tr>
        <tr><td>.rounded-circle</td><td>Makes the image a perfect circle</td></tr>
        <tr><td>.rounded-0</td><td>Removes all rounding</td></tr>
        <tr><td>.rounded-pill</td><td>Oval/pill-shaped corners</td></tr>
      </tbody>
    </table>
    <pre>
      {`<img src="https://via.placeholder.com/150" class="rounded" alt="Rounded">
<img src="https://via.placeholder.com/150" class="rounded-circle" alt="Circle">
<img src="https://via.placeholder.com/150" class="rounded-pill" alt="Pill">`}
    </pre>

    <h2>🧱 3. Image Thumbnails</h2>
    <p>Add borders and padding with <code>.img-thumbnail</code>.</p>
    <pre>{`<img src="https://via.placeholder.com/200" class="img-thumbnail" alt="Thumbnail">`}</pre>
    <p>✅ Adds a border, rounded corners, and padding — great for galleries or portfolios.</p>

    <h2>🧭 4. Aligning Images</h2>
    <p>Use text alignment utilities or float classes:</p>
    <pre>
      {`<p class="text-start"><img src="..." class="img-thumbnail"></p>
<p class="text-center"><img src="..." class="img-thumbnail"></p>
<p class="text-end"><img src="..." class="img-thumbnail"></p>

<img src="..." class="float-start me-3" alt="Left Float">
<p>Text wraps around this image beautifully!</p>`}
    </pre>

    <h2>🌈 5. Responsive Image Gallery Example</h2>
    <pre>
      {`<div class="container mt-4">
  <div class="row">
    <div class="col-md-4 col-sm-6 mb-3">
      <img src="https://via.placeholder.com/300x200" class="img-fluid rounded" alt="Gallery 1">
    </div>
    <div class="col-md-4 col-sm-6 mb-3">
      <img src="https://via.placeholder.com/300x200" class="img-fluid rounded" alt="Gallery 2">
    </div>
    <div class="col-md-4 col-sm-6 mb-3">
      <img src="https://via.placeholder.com/300x200" class="img-fluid rounded" alt="Gallery 3">
    </div>
  </div>
</div>`}
    </pre>
    <p>✅ Automatically adapts across devices using the Bootstrap grid.</p>

    <h2>🖼️ 6. Figures with Captions</h2>
    <pre>
      {`<figure class="figure text-center">
  <img src="https://via.placeholder.com/300x200" class="figure-img img-fluid rounded" alt="Sample Figure">
  <figcaption class="figure-caption text-center">A caption describing the above image.</figcaption>
</figure>`}
    </pre>

    <h2>⚙️ 7. Combining Image Utilities</h2>
    <pre>
      {`<img src="https://via.placeholder.com/250"
  class="img-fluid img-thumbnail rounded-circle shadow-lg mx-auto d-block"
  alt="Stylish Image">`}
    </pre>
    <p>✅ Combines responsiveness, circular shape, border, shadow, and centering.</p>

    <h2>🌍 8. Example: Profile Card with Image</h2>
    <pre>
      {`<div class="card text-center" style="width: 18rem;">
  <img src="https://via.placeholder.com/150" class="card-img-top rounded-circle p-3" alt="Profile">
  <div class="card-body">
    <h5 class="card-title">Alice Johnson</h5>
    <p class="card-text text-muted">Frontend Developer</p>
    <button class="btn btn-primary">Contact</button>
  </div>
</div>`}
    </pre>

    <h2>💻 9. Full Example: Image Showcase</h2>
    <pre>
      {`<div class="container text-center mt-5">
  <h3 class="mb-4 text-primary">Bootstrap Image Showcase</h3>
  
  <img src="https://via.placeholder.com/150" class="img-fluid rounded m-2" alt="Rounded">
  <img src="https://via.placeholder.com/150" class="img-thumbnail m-2" alt="Thumbnail">
  <img src="https://via.placeholder.com/150" class="rounded-circle m-2" alt="Circle">

  <figure class="figure mt-4">
    <img src="https://via.placeholder.com/300x200" class="figure-img img-fluid rounded" alt="Figure Example">
    <figcaption class="figure-caption text-center">This is a figure caption example.</figcaption>
  </figure>
</div>`}
    </pre>

    <h2>✅ Summary</h2>
    <table>
      <thead>
        <tr><th>Feature</th><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Responsive Image</td><td>.img-fluid</td><td>Adjusts to parent width</td></tr>
        <tr><td>Rounded Corners</td><td>.rounded, .rounded-circle</td><td>Add curved edges</td></tr>
        <tr><td>Thumbnails</td><td>.img-thumbnail</td><td>Border + padding around image</td></tr>
        <tr><td>Alignment</td><td>.float-start, .text-center</td><td>Aligns image</td></tr>
        <tr><td>Figures</td><td>.figure, .figure-caption</td><td>Adds image + caption combo</td></tr>
        <tr><td>Centering</td><td>.mx-auto d-block</td><td>Centers image horizontally</td></tr>
      </tbody>
    </table>
  </>
)}
{activeSection === "bootstrap-forms" && (
  <>
    <h1>🧰 Bootstrap Forms</h1>
    <p className="subtitle">
      Bootstrap makes form creation simple by providing ready-made classes for inputs, labels, checkboxes, radios, selects, validation states, and multiple layout options like inline, horizontal, and floating labels.
    </p>

    <h2>🧱 1. Basic Form Structure</h2>
    <p>
      Bootstrap uses <code>.form-control</code> to style inputs and <code>.form-label</code> for labels.
    </p>
    <pre>
      {`<div class="container mt-4">
  <form>
    <div class="mb-3">
      <label for="name" class="form-label">Full Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter your name">
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" placeholder="name@example.com">
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>`}
    </pre>

    <ul>
      <li><code>.form-label</code> → for form labels</li>
      <li><code>.form-control</code> → for text inputs</li>
      <li><code>.mb-3</code> → margin-bottom spacing</li>
      <li><code>.btn</code> & <code>.btn-primary</code> → styled submit button</li>
    </ul>

    <h2>🧭 2. Form Layouts</h2>
    <h3>🧱 (a) Vertical Form (Default)</h3>
    <p>Inputs are stacked on top of each other by default.</p>

    <h3>📏 (b) Inline Form</h3>
    <p>Use <code>.row</code> and <code>.col</code> classes to place form elements side-by-side.</p>
    <pre>
      {`<form class="row g-3">
  <div class="col-md-6">
    <input type="text" class="form-control" placeholder="First name">
  </div>
  <div class="col-md-6">
    <input type="text" class="form-control" placeholder="Last name">
  </div>
  <div class="col-12">
    <button class="btn btn-success">Submit</button>
  </div>
</form>`}
    </pre>
    <p>🧩 <code>g-3</code> adds gutter spacing between columns.</p>

    <h3>⚙️ (c) Horizontal Form</h3>
    <p>Labels and inputs in the same line using <code>.row</code>.</p>
    <pre>
      {`<form>
  <div class="row mb-3">
    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail">
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>`}
    </pre>

    <h2>✍️ 3. Input Types</h2>
    <p>Bootstrap styles all types of inputs easily:</p>
    <pre>
      {`<input type="text" class="form-control" placeholder="Text input">
<input type="email" class="form-control mt-2" placeholder="Email">
<input type="password" class="form-control mt-2" placeholder="Password">
<input type="number" class="form-control mt-2" placeholder="Age">
<input type="file" class="form-control mt-2">`}
    </pre>

    <h2>🎨 4. Select Menus and Textareas</h2>
    <pre>
      {`<select class="form-select mb-3">
  <option selected>Choose an option</option>
  <option value="1">Option One</option>
  <option value="2">Option Two</option>
</select>

<textarea class="form-control" rows="3" placeholder="Enter your message"></textarea>`}
    </pre>

    <p><code>.form-select</code> is used for dropdowns, and <code>.form-control</code> for text areas.</p>

    <h2>🔘 5. Checkboxes & Radio Buttons</h2>
    <h3>✅ Checkbox</h3>
    <pre>
      {`<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Accept Terms & Conditions
  </label>
</div>`}
    </pre>

    <h3>🔘 Radio Buttons</h3>
    <pre>
      {`<div class="form-check">
  <input class="form-check-input" type="radio" name="gender" id="male">
  <label class="form-check-label" for="male">Male</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="gender" id="female">
  <label class="form-check-label" for="female">Female</label>
</div>`}
    </pre>

    <h2>✨ 6. Form Validation States</h2>
    <p>Bootstrap supports validation feedback using <code>.is-valid</code> and <code>.is-invalid</code>.</p>
    <pre>
      {`<input type="text" class="form-control is-valid" placeholder="Looks good!">
<input type="text" class="form-control is-invalid mt-2" placeholder="Error field">
<div class="invalid-feedback">
  Please enter a valid name.
</div>`}
    </pre>

    <h2>🌊 7. Floating Labels</h2>
    <p>Modern form style with labels that float inside the input field.</p>
    <pre>
      {`<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>

<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>`}
    </pre>

    <h2>💡 8. Disabled and Readonly Inputs</h2>
    <pre>
      {`<input type="text" class="form-control" placeholder="Disabled input" disabled>
<input type="text" class="form-control mt-2" placeholder="Readonly input" readonly>`}
    </pre>

    <h2>🎨 9. Input Group (Add Icons or Text)</h2>
    <p>Combine inputs with icons or text using <code>.input-group</code>.</p>
    <pre>
      {`<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search">
  <button class="btn btn-outline-secondary" type="button">Go</button>
</div>`}
    </pre>

    <h2>🧾 10. Complete Example</h2>
    <pre>
      {`<div class="container mt-5">
  <h3 class="mb-4 text-center text-primary">Contact Form</h3>
  <form>
    <div class="mb-3">
      <label class="form-label">Name</label>
      <input type="text" class="form-control" placeholder="Enter your name">
    </div>

    <div class="mb-3">
      <label class="form-label">Email</label>
      <input type="email" class="form-control" placeholder="Enter your email">
    </div>

    <div class="mb-3">
      <label class="form-label">Message</label>
      <textarea class="form-control" rows="4" placeholder="Type your message"></textarea>
    </div>

    <div class="form-check mb-3">
      <input type="checkbox" class="form-check-input" id="agree">
      <label class="form-check-label" for="agree">I agree to the terms</label>
    </div>

    <button type="submit" class="btn btn-success w-100">Send Message</button>
  </form>
</div>`}
    </pre>

    <h2>🧠 Summary</h2>
    <table>
      <thead>
        <tr><th>Component</th><th>Class</th></tr>
      </thead>
      <tbody>
        <tr><td>Input fields</td><td>.form-control</td></tr>
        <tr><td>Labels</td><td>.form-label</td></tr>
        <tr><td>Checkboxes / Radios</td><td>.form-check</td></tr>
        <tr><td>Select dropdown</td><td>.form-select</td></tr>
        <tr><td>Validation</td><td>.is-valid / .is-invalid</td></tr>
        <tr><td>Floating labels</td><td>.form-floating</td></tr>
        <tr><td>Input group</td><td>.input-group / .input-group-text</td></tr>
      </tbody>
    </table>
  </>
)}
{/* ⚙️ Bootstrap Cards */}
{activeSection === "bootstrap-cards" && (
  <div className="topic-section">
    <h1>⚙️ Bootstrap Cards</h1>
    <p className="subtitle">
      A <strong>Bootstrap Card</strong> is a flexible container for content that can include titles,
      text, images, buttons, and links. Cards are modern replacements for older panels and wells.
    </p>

    {/* 1. Basic Card Structure */}
    <h2>🧱 1. Basic Card Structure</h2>
    <p>
      A simple Bootstrap card with a title, text, and button:
    </p>
    <div className="example">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">This is a simple card with example text inside it.</p>
          <a href="#" className="btn btn-primary">Go Somewhere</a>
        </div>
      </div>
    </div>

    {/* 2. Card with Image */}
    <h2>🖼️ 2. Card with Image</h2>
    <div className="example">
      <div className="card" style={{ width: "18rem" }}>
        <img src="https://via.placeholder.com/286x180" className="card-img-top" alt="Sample" />
        <div className="card-body">
          <h5 className="card-title">Nature</h5>
          <p className="card-text">Explore the beauty of nature with this amazing view.</p>
          <a href="#" className="btn btn-success">Read More</a>
        </div>
      </div>
    </div>

    {/* 3. Header and Footer */}
    <h2>🧭 3. Card with Header and Footer</h2>
    <div className="example">
      <div className="card text-center" style={{ width: "20rem" }}>
        <div className="card-header bg-primary text-white">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special Offer</h5>
          <p className="card-text">Get 50% off on your first order!</p>
          <a href="#" className="btn btn-warning">Claim Now</a>
        </div>
        <div className="card-footer text-muted">Offer valid till Sunday</div>
      </div>
    </div>

    {/* 4. Background Colors */}
    <h2>🎨 4. Card with Background Colors</h2>
    <div className="example">
      <div className="card text-white bg-success mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">Success</div>
        <div className="card-body">
          <h5 className="card-title">Well Done!</h5>
          <p className="card-text">You successfully used Bootstrap’s color utilities.</p>
        </div>
      </div>
    </div>

    {/* 5. Card with List Group */}
    <h2>🧩 5. Card with List Group</h2>
    <div className="example">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">Features</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Responsive Design</li>
          <li className="list-group-item">Easy Customization</li>
          <li className="list-group-item">Modern Layout</li>
        </ul>
      </div>
    </div>

    {/* 6. Image Overlay */}
    <h2>🖼️ 6. Card with Image Overlay</h2>
    <div className="example">
      <div className="card text-bg-dark">
        <img src="https://via.placeholder.com/400x200" className="card-img" alt="Overlay" />
        <div className="card-img-overlay">
          <h5 className="card-title">Mountain View</h5>
          <p className="card-text">Experience the calm of the mountains.</p>
        </div>
      </div>
    </div>

    {/* 7. Card Group */}
    <h2>🧱 7. Card Groups</h2>
    <p>Display multiple cards side-by-side with equal height and spacing.</p>
    <div className="example">
      <div className="card-group">
        <div className="card">
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Card 1</h5>
            <p className="card-text">Some text inside card 1.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Card 2</h5>
            <p className="card-text">Some text inside card 2.</p>
          </div>
        </div>
      </div>
    </div>

    {/* 8. Grid Layout */}
    <h2>🧱 8. Card Layout with Grid System</h2>
    <div className="example">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/250" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">This card uses Bootstrap grid layout.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/250" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">Grid system helps control spacing and layout.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Summary */}
    <h2>🧠 Summary</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Basic card</td><td>.card</td></tr>
        <tr><td>Content container</td><td>.card-body</td></tr>
        <tr><td>Header/Footer</td><td>.card-header, .card-footer</td></tr>
        <tr><td>Images</td><td>.card-img-top, .card-img-bottom, .card-img-overlay</td></tr>
        <tr><td>List inside card</td><td>.list-group, .list-group-flush</td></tr>
        <tr><td>Grouping cards</td><td>.card-group, .card-deck</td></tr>
        <tr><td>Colored cards</td><td>.bg-*, .text-*</td></tr>
      </tbody>
    </table>
  </div>
)}
{/* 🧭 Bootstrap Navbar */}
{activeSection === "bootstrap-navbar" && (
  <div className="topic-section">
    <h1>🧭 Bootstrap Navbar</h1>
    <p className="subtitle">
      A <strong>Navbar</strong> (Navigation Bar) is a header element used to display logos, links, search bars, and buttons.
      It’s fully <strong>responsive</strong> — automatically collapsing into a hamburger menu 📱 on smaller screens.
    </p>

    {/* 1. Basic Navbar */}
    <h2>🧱 1. Basic Navbar Structure</h2>
    <p>Here’s the simplest example of a Bootstrap navbar:</p>
    <div className="example">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MySite</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    {/* 2. Dark Navbar */}
    <h2>🌈 2. Dark Navbar</h2>
    <p>Use <code>.navbar-dark</code> and <code>.bg-dark</code> for dark themes.</p>
    <div className="example">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">DarkNav</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarDark">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    {/* 3. Navbar with Dropdown */}
    <h2>🧭 3. Navbar with Dropdown Menu</h2>
    <div className="example">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MySite</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDropdown">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Web Design</a></li>
                  <li><a className="dropdown-item" href="#">App Development</a></li>
                  <li><a className="dropdown-item" href="#">SEO</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    {/* 4. Navbar with Search */}
    <h2>🔍 4. Navbar with Search Box</h2>
    <div className="example">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">SearchBar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSearch">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
            </ul>

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>

    {/* 5. Fixed and Sticky */}
    <h2>🧱 5. Fixed & Sticky Navbar</h2>
    <div className="example">
      <p>📌 Fixed Top Navbar</p>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <a className="navbar-brand ms-3" href="#">Fixed Top</a>
      </nav>
      <br /><br /><br /><br />
      <p>📎 Sticky Navbar</p>
      <nav className="navbar navbar-light bg-warning sticky-top">
        <a className="navbar-brand ms-3" href="#">Sticky Navbar</a>
      </nav>
    </div>

    {/* 6. Centered Links */}
    <h2>💠 6. Centered Navbar Links</h2>
    <div className="example">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
        </ul>
      </nav>
    </div>

    {/* 7. Gradient Navbar */}
    <h2>🎨 7. Gradient or Custom Color Navbar</h2>
    <div className="example">
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "linear-gradient(90deg, #007bff, #6610f2)" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">GradientNav</a>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">About</a></li>
          </ul>
        </div>
      </nav>
    </div>

    {/* Summary Table */}
    <h2>🧠 Summary</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Class / Property</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Basic Navbar</td><td>.navbar</td></tr>
        <tr><td>Expand size</td><td>.navbar-expand-lg, .navbar-expand-md</td></tr>
        <tr><td>Light/Dark theme</td><td>.navbar-light, .navbar-dark</td></tr>
        <tr><td>Background color</td><td>.bg-*</td></tr>
        <tr><td>Brand logo/text</td><td>.navbar-brand</td></tr>
        <tr><td>Navigation links</td><td>.nav-item, .nav-link</td></tr>
        <tr><td>Dropdowns</td><td>.dropdown, .dropdown-menu, .dropdown-item</td></tr>
        <tr><td>Search bar</td><td>.form-control, .btn, .d-flex</td></tr>
        <tr><td>Fixed/Sticky</td><td>.fixed-top, .sticky-top</td></tr>
        <tr><td>Alignment</td><td>.ms-auto, .me-auto, .justify-content-center</td></tr>
      </tbody>
    </table>
  </div>
)}
{activeSection === "bootstrap-layout-components" && (
  <div className="topic-section">
    <h1>📂 Bootstrap Layout Components</h1>
    <p className="subtitle">
      Bootstrap provides powerful layout tools that help developers create
      responsive and consistent page structures using containers, grids, and
      breakpoints.
    </p>

    <h2>🧱 1. Containers</h2>
    <p>
      Containers are the most basic layout element — they hold and center your
      content.
    </p>

    <ul>
      <li><strong>.container</strong> – Fixed width per screen size</li>
      <li><strong>.container-fluid</strong> – 100% width across screens</li>
      <li><strong>.container-{'{breakpoint}'}</strong> – Becomes fixed after a breakpoint</li>
    </ul>

    <div className="code-box">
      <pre>{`
<div class="container bg-light p-3">
  <h3>Fixed Container</h3>
  <p>This container width changes at each breakpoint.</p>
</div>

<div class="container-fluid bg-info text-white p-3">
  <h3>Fluid Container</h3>
  <p>This takes up the full width of the viewport.</p>
</div>

<div class="container-md bg-warning p-3">
  <h3>Container-md</h3>
  <p>Fluid until the viewport is medium or larger.</p>
</div>
      `}</pre>
    </div>

    <h2>📐 2. Bootstrap Grid System</h2>
    <p>
      The grid system divides the page into <strong>12 equal columns</strong> and
      allows responsive layouts using <code>.row</code> and <code>.col</code>.
    </p>

    <div className="code-box">
      <pre>{`
<div class="container">
  <div class="row">
    <div class="col bg-primary text-white p-3">Column 1</div>
    <div class="col bg-success text-white p-3">Column 2</div>
    <div class="col bg-danger text-white p-3">Column 3</div>
  </div>
</div>
      `}</pre>
    </div>

    <h2>🧭 3. Responsive Grid Example</h2>
    <div className="code-box">
      <pre>{`
<div class="container text-center">
  <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-4 bg-info p-3">Column 1</div>
    <div class="col-sm-12 col-md-6 col-lg-4 bg-warning p-3">Column 2</div>
    <div class="col-sm-12 col-md-12 col-lg-4 bg-success p-3">Column 3</div>
  </div>
</div>
      `}</pre>
    </div>

    <h2>🧱 4. Alignment & Spacing Utilities</h2>
    <p>
      Bootstrap offers margin (<code>m-*</code>) and padding (<code>p-*</code>)
      utilities along with alignment helpers.
    </p>

    <div className="table-box">
      <table>
        <thead>
          <tr><th>Class</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td>.m-3</td><td>Margin 1rem</td></tr>
          <tr><td>.mt-5</td><td>Margin top</td></tr>
          <tr><td>.p-2</td><td>Padding 0.5rem</td></tr>
          <tr><td>.px-4</td><td>Padding left/right</td></tr>
        </tbody>
      </table>
    </div>

    <div className="code-box">
      <pre>{`<p class="text-center text-primary">Centered text</p>`}</pre>
    </div>

    <h2>🎨 5. Flexbox Layout</h2>
    <p>
      Bootstrap 5 uses Flexbox for spacing and alignment — use{" "}
      <code>.d-flex</code> and justify/align utilities.
    </p>

    <div className="code-box">
      <pre>{`
<div class="d-flex justify-content-between align-items-center bg-light p-3">
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</div>
      `}</pre>
    </div>

    <h2>🧭 6. Responsive Breakpoints</h2>
    <p>Bootstrap uses these breakpoints for adaptive layouts:</p>

    <div className="table-box">
      <table>
        <thead>
          <tr><th>Breakpoint</th><th>Prefix</th><th>Min Width</th></tr>
        </thead>
        <tbody>
          <tr><td>Extra small</td><td>none</td><td>&lt;576px</td></tr>
          <tr><td>Small</td><td>sm</td><td>≥576px</td></tr>
          <tr><td>Medium</td><td>md</td><td>≥768px</td></tr>
          <tr><td>Large</td><td>lg</td><td>≥992px</td></tr>
          <tr><td>Extra large</td><td>xl</td><td>≥1200px</td></tr>
          <tr><td>XXL</td><td>xxl</td><td>≥1400px</td></tr>
        </tbody>
      </table>
    </div>

    <div className="code-box">
      <pre>{`<div class="d-none d-md-block">Visible on md and larger screens</div>`}</pre>
    </div>

    <h2>🧱 7. Responsive Containers with Rows & Columns</h2>
    <div className="code-box">
      <pre>{`
<div class="container mt-4">
  <div class="row">
    <div class="col-md-3 bg-primary text-white p-3">Sidebar</div>
    <div class="col-md-9 bg-light p-3">
      <h4>Main Content</h4>
      <p>This section takes up 9/12 columns on medium screens.</p>
    </div>
  </div>
</div>
      `}</pre>
    </div>

    <h2>📏 8. Horizontal & Vertical Centering</h2>
    <div className="code-box">
      <pre>{`
<div class="d-flex justify-content-center">
  <button class="btn btn-primary">Centered Button</button>
</div>

<div class="d-flex align-items-center" style="height: 200px;">
  <p class="m-auto">Vertically centered text</p>
</div>
      `}</pre>
    </div>

    <h2>🧠 Summary</h2>
    <div className="table-box">
      <table>
        <thead>
          <tr><th>Concept</th><th>Class / Example</th></tr>
        </thead>
        <tbody>
          <tr><td>Container</td><td>.container, .container-fluid, .container-md</td></tr>
          <tr><td>Grid Rows</td><td>.row</td></tr>
          <tr><td>Columns</td><td>.col, .col-4, .col-md-6</td></tr>
          <tr><td>Spacing</td><td>.m-*, .p-*, .mt-*, .py-*</td></tr>
          <tr><td>Alignment</td><td>.text-center, .justify-content-*</td></tr>
          <tr><td>Breakpoints</td><td>sm, md, lg, xl, xxl</td></tr>
          <tr><td>Display Utilities</td><td>.d-flex, .d-none, .d-block</td></tr>
        </tbody>
      </table>
    </div>
  </div>
)}
{activeSection === "bootstrap-alerts-badges" && (
  <div className="topic-section">
    <h1>🧩 Bootstrap Alerts & Badges</h1>

    <h2>⚠️ 1. Bootstrap Alerts</h2>
    <p className="subtitle">
      Bootstrap alerts are used to provide feedback messages to users — like
      success messages, warnings, or errors.
    </p>

    <h3>✨ Basic Syntax:</h3>
    <div className="code-box">
      <pre>{`<div class="alert alert-success" role="alert">
  This is a success alert!
</div>`}</pre>
    </div>

    <p>
      🧩 The <code>alert</code> class creates the base style, and{" "}
      <code>alert-success</code> (or other variants) defines the type.
    </p>

    <h3>🎨 Alert Variants (Colors)</h3>
    <div className="table-box">
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Class</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>✅ Success</td><td>.alert-success</td><td>Operation successful</td></tr>
          <tr><td>⚠️ Warning</td><td>.alert-warning</td><td>Warning message</td></tr>
          <tr><td>❌ Danger</td><td>.alert-danger</td><td>Error or failure</td></tr>
          <tr><td>ℹ️ Info</td><td>.alert-info</td><td>Informational message</td></tr>
          <tr><td>🔵 Primary</td><td>.alert-primary</td><td>Highlighted info</td></tr>
          <tr><td>⚪ Secondary</td><td>.alert-secondary</td><td>Neutral message</td></tr>
          <tr><td>⚫ Dark</td><td>.alert-dark</td><td>Dark-themed alert</td></tr>
          <tr><td>⚪ Light</td><td>.alert-light</td><td>Light background alert</td></tr>
        </tbody>
      </table>
    </div>

    <h3>Example:</h3>
    <div className="code-box">
      <pre>{`<div class="alert alert-danger" role="alert">
  Something went wrong! Please try again.
</div>`}</pre>
    </div>

    <h2>🧰 2. Dismissible Alerts (with Close Button)</h2>
    <div className="code-box">
      <pre>{`<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Warning!</strong> Check your input fields.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`}</pre>
    </div>

    <ul>
      <li><code>.alert-dismissible</code> → Makes alert closable</li>
      <li><code>.fade</code> and <code>.show</code> → Add fade animation</li>
      <li><code>.btn-close</code> → Bootstrap’s close (×) button</li>
    </ul>

    <h2>🧩 3. Alerts with Links</h2>
    <div className="code-box">
      <pre>{`<div class="alert alert-info" role="alert">
  New update available! <a href="#" class="alert-link">Click here to install.</a>
</div>`}</pre>
    </div>

    <p>
      💡 <code>.alert-link</code> makes links look consistent with the alert’s theme.
    </p>

    <h2>🧠 4. Custom Content Inside Alerts</h2>
    <div className="code-box">
      <pre>{`<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>You successfully read this message.</p>
  <hr>
  <p class="mb-0">Keep going with the next step.</p>
</div>`}</pre>
    </div>

    <h2>🎯 5. Bootstrap Badges</h2>
    <p className="subtitle">
      Badges are small count or label indicators, often used with buttons or
      headings.
    </p>

    <h3>✨ Basic Badge</h3>
    <div className="code-box">
      <pre>{`<h3>Messages <span class="badge bg-secondary">4</span></h3>`}</pre>
    </div>

    <h3>🎨 6. Badge Colors</h3>
    <div className="table-box">
      <table>
        <thead>
          <tr><th>Type</th><th>Class</th></tr>
        </thead>
        <tbody>
          <tr><td>Primary</td><td>.bg-primary</td></tr>
          <tr><td>Secondary</td><td>.bg-secondary</td></tr>
          <tr><td>Success</td><td>.bg-success</td></tr>
          <tr><td>Danger</td><td>.bg-danger</td></tr>
          <tr><td>Warning</td><td>.bg-warning</td></tr>
          <tr><td>Info</td><td>.bg-info</td></tr>
          <tr><td>Light</td><td>.bg-light</td></tr>
          <tr><td>Dark</td><td>.bg-dark</td></tr>
        </tbody>
      </table>
    </div>

    <h3>Example:</h3>
    <div className="code-box">
      <pre>{`<span class="badge bg-danger">New</span>
<span class="badge bg-success">Verified</span>`}</pre>
    </div>

    <h2>🧩 7. Badges on Buttons</h2>
    <div className="code-box">
      <pre>{`<button type="button" class="btn btn-primary">
  Notifications <span class="badge bg-light text-dark">9</span>
</button>`}</pre>
    </div>

    <p>🧠 Use <code>.text-dark</code> when badge background is light.</p>

    <h2>🧱 8. Rounded (Pill) Badges</h2>
    <div className="code-box">
      <pre>{`<span class="badge rounded-pill bg-info text-dark">Info</span>
<span class="badge rounded-pill bg-success">Active</span>`}</pre>
    </div>

    <p>💊 <code>.rounded-pill</code> → adds full rounded edges.</p>

    <h2>💬 9. Badges in Navigation or Headings</h2>
    <div className="code-box">
      <pre>{`<h4>Profile <span class="badge bg-primary">Pro</span></h4>

<a class="nav-link" href="#">
  Inbox <span class="badge bg-danger rounded-pill">5</span>
</a>`}</pre>
    </div>

    <h2>🧠 Summary</h2>
    <div className="table-box">
      <table>
        <thead>
          <tr><th>Component</th><th>Class</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td>Alert</td><td>.alert</td><td>Creates alert box</td></tr>
          <tr><td>Alert Type</td><td>.alert-success, .alert-danger</td><td>Defines color/style</td></tr>
          <tr><td>Dismissible</td><td>.alert-dismissible + .btn-close</td><td>Closeable alert</td></tr>
          <tr><td>Badge</td><td>.badge</td><td>Small indicator label</td></tr>
          <tr><td>Badge Color</td><td>.bg-primary, .bg-success</td><td>Badge color scheme</td></tr>
          <tr><td>Rounded Badge</td><td>.rounded-pill</td><td>Makes badge pill-shaped</td></tr>
        </tbody>
      </table>
    </div>
  </div>
)}
{activeSection === "bootstrap-modals" && (
  <div className="topic-section">
    <h1>🧱 Bootstrap Modals</h1>

    <h2>🎬 1. What is a Modal?</h2>
    <p className="subtitle">
      A <b>modal</b> is a dialog box that appears on top of the current page,
      dimming the background to focus the user’s attention.
    </p>

    <ul>
      <li>✅ Confirmations (e.g., Delete item?)</li>
      <li>🔐 Login / Register forms</li>
      <li>💬 Displaying extra information</li>
      <li>⚠️ Alerts or success messages</li>
    </ul>

    <h2>🧰 2. Basic Structure of a Modal</h2>
    <p className="subtitle">
      Here’s the basic syntax of a Bootstrap modal:
    </p>

    <div className="code-box">
      <pre>{`<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch Demo Modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        This is the main content of the modal.
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save Changes</button>
      </div>

    </div>
  </div>
</div>`}</pre>
    </div>

    <h3>🧩 Explanation</h3>
    <div className="table-box">
      <table>
        <thead>
          <tr>
            <th>Section</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>.modal</td><td>Main modal container</td></tr>
          <tr><td>.fade</td><td>Adds smooth fade-in/out animation</td></tr>
          <tr><td>.modal-dialog</td><td>Wrapper that centers the modal</td></tr>
          <tr><td>.modal-content</td><td>Contains modal header, body, and footer</td></tr>
          <tr><td>.modal-header</td><td>Title and close button</td></tr>
          <tr><td>.modal-body</td><td>Main content area</td></tr>
          <tr><td>.modal-footer</td><td>Action buttons (Save, Close, etc.)</td></tr>
          <tr><td>data-bs-toggle="modal"</td><td>Triggers modal open</td></tr>
          <tr><td>data-bs-target="#id"</td><td>Links button to modal ID</td></tr>
        </tbody>
      </table>
    </div>

    <h2>🎨 3. Modal Sizes</h2>
    <p className="subtitle">
      You can adjust modal size using modifier classes on <code>.modal-dialog</code>.
    </p>

    <div className="table-box">
      <table>
        <thead>
          <tr><th>Size</th><th>Class</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td>Small</td><td>.modal-sm</td><td>Compact modal</td></tr>
          <tr><td>Default</td><td>(none)</td><td>Standard modal</td></tr>
          <tr><td>Large</td><td>.modal-lg</td><td>Bigger modal</td></tr>
          <tr><td>Extra Large</td><td>.modal-xl</td><td>Full-width modal</td></tr>
        </tbody>
      </table>
    </div>

    <div className="code-box">
      <pre>{`<div class="modal-dialog modal-lg">
  <div class="modal-content">...</div>
</div>`}</pre>
    </div>

    <h2>🧭 4. Vertically Centered Modal</h2>
    <div className="code-box">
      <pre>{`<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-body">
      Vertically centered content
    </div>
  </div>
</div>`}</pre>
    </div>

    <h2>🧱 5. Scrollable Modal (Large Content)</h2>
    <p className="subtitle">
      If your content is long, make the modal scrollable using:
    </p>

    <div className="code-box">
      <pre>{`<div class="modal-dialog modal-dialog-scrollable">
  <div class="modal-content">
    <div class="modal-body">
      <p>Lots of content...</p>
    </div>
  </div>
</div>`}</pre>
    </div>

    <h2>🧰 6. Static Backdrop Modal</h2>
    <p className="subtitle">
      Prevent closing when clicking outside the modal:
    </p>

    <div className="code-box">
      <pre>{`<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Static Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        You can’t close this modal by clicking outside.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Okay</button>
      </div>
    </div>
  </div>
</div>`}</pre>
    </div>

    <h2>🧩 7. Modal with Form Example</h2>
    <div className="code-box">
      <pre>{`<!-- Button to open form modal -->
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#formModal">
  Open Login Form
</button>

<!-- Modal -->
<div class="modal fade" id="formModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter password">
          </div>
        </form>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" class="btn btn-primary">Login</button>
      </div>

    </div>
  </div>
</div>`}</pre>
    </div>

    <h2>🧠 8. Controlling Modals via JavaScript</h2>
    <div className="code-box">
      <pre>{`// Show Modal
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
myModal.show();

// Hide Modal
myModal.hide();`}</pre>
    </div>

    <h2>🎯 9. Events in Modals</h2>
    <div className="table-box">
      <table>
        <thead>
          <tr><th>Event</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td>show.bs.modal</td><td>Before modal shows</td></tr>
          <tr><td>shown.bs.modal</td><td>After modal is visible</td></tr>
          <tr><td>hide.bs.modal</td><td>Before modal hides</td></tr>
          <tr><td>hidden.bs.modal</td><td>After modal is closed</td></tr>
        </tbody>
      </table>
    </div>

    <div className="code-box">
      <pre>{`document.getElementById('exampleModal').addEventListener('shown.bs.modal', function () {
  console.log('Modal is fully shown');
});`}</pre>
    </div>

    <h2>🧩 10. Modal Variations</h2>
    <h3>🪟 Fullscreen Modal</h3>
    <div className="code-box">
      <pre>{`<div class="modal-dialog modal-fullscreen">
  <div class="modal-content">...</div>
</div>`}</pre>
    </div>

    <h3>🔁 Modal Stacking (Multiple Modals)</h3>
    <p>
      You can open another modal from one modal — Bootstrap handles z-index automatically.
    </p>

    <h2>🧠 Summary</h2>
    <div className="table-box">
      <table>
        <thead>
          <tr><th>Feature</th><th>Class / Attribute</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td>Modal Base</td><td>.modal, .modal-dialog, .modal-content</td><td>Main structure</td></tr>
          <tr><td>Animation</td><td>.fade</td><td>Smooth transition</td></tr>
          <tr><td>Size</td><td>.modal-sm, .modal-lg, .modal-xl</td><td>Controls width</td></tr>
          <tr><td>Center</td><td>.modal-dialog-centered</td><td>Vertically centers</td></tr>
          <tr><td>Scroll</td><td>.modal-dialog-scrollable</td><td>Adds scroll inside body</td></tr>
          <tr><td>Static Backdrop</td><td>data-bs-backdrop="static"</td><td>Prevents outside click close</td></tr>
          <tr><td>JS Control</td><td>bootstrap.Modal()</td><td>Programmatically show/hide</td></tr>
        </tbody>
      </table>
    </div>
  </div>
)}
{activeSection === "bootstrap-dropdowns" && (
  <div className="content-section">
    <h1>🧭 Bootstrap Dropdowns</h1>

    <h2>🎯 1. What is a Dropdown?</h2>
    <p className="subtitle">
      A <strong>dropdown</strong> is a toggleable menu that appears when you click (or hover) a button or link.
      It’s used for navigation menus, filters, or profile/account options.  
      Bootstrap dropdowns are powered by <code>Popper.js</code>, which positions them automatically.
    </p>

    <h2>🧩 2. Basic Dropdown Example</h2>
    <pre className="code-block">
{`<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
    Dropdown Menu
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>`}
    </pre>

    <ul>
      <li><code>.dropdown</code> → Wrapper for the dropdown</li>
      <li><code>.dropdown-toggle</code> → Adds caret (▼) and enables toggle</li>
      <li><code>data-bs-toggle="dropdown"</code> → Handles open/close</li>
      <li><code>.dropdown-menu</code> → The menu container</li>
      <li><code>.dropdown-item</code> → Each clickable option</li>
    </ul>

    <h2>🎨 3. Dropdown Variants (Colors & Styles)</h2>
    <pre className="code-block">
{`<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
    Primary Menu
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Option 1</a></li>
    <li><a class="dropdown-item" href="#">Option 2</a></li>
  </ul>
</div>`}
    </pre>
    <p className="note">
      Use <code>.btn-success</code>, <code>.btn-warning</code>, <code>.btn-danger</code> etc. for different color styles.
    </p>

    <h2>🧭 4. Dropdown Directions</h2>
    <table className="styled-table">
      <thead>
        <tr><th>Direction</th><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>⬇️ Default</td><td>(none)</td><td>Opens below</td></tr>
        <tr><td>⬆️ Dropup</td><td>.dropup</td><td>Opens upward</td></tr>
        <tr><td>⬅️ Dropstart</td><td>.dropstart</td><td>Opens left</td></tr>
        <tr><td>➡️ Dropend</td><td>.dropend</td><td>Opens right</td></tr>
      </tbody>
    </table>
    <pre className="code-block">
{`<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
    Dropup
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
  </ul>
</div>`}
    </pre>

    <h2>🧩 5. Dropdown Divider & Header</h2>
    <pre className="code-block">
{`<div class="dropdown">
  <button class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown">
    Grouped Menu
  </button>
  <ul class="dropdown-menu">
    <li><h6 class="dropdown-header">Actions</h6></li>
    <li><a class="dropdown-item" href="#">Edit</a></li>
    <li><a class="dropdown-item" href="#">Delete</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><h6 class="dropdown-header">More</h6></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
  </ul>
</div>`}
    </pre>

    <ul>
      <li><code>.dropdown-header</code> → Section title</li>
      <li><code>.dropdown-divider</code> → Line between groups</li>
    </ul>

    <h2>🧭 6. Dropdown with Active & Disabled Items</h2>
    <pre className="code-block">
{`<div class="dropdown">
  <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown">
    Status Menu
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item active" href="#">Active</a></li>
    <li><a class="dropdown-item" href="#">Normal</a></li>
    <li><a class="dropdown-item disabled" href="#">Disabled</a></li>
  </ul>
</div>`}
    </pre>

    <p className="note">
      Use <code>.active</code> to highlight and <code>.disabled</code> to gray out options.
    </p>

    <h2>🎨 7. Dropdown Menu Alignment</h2>
    <table className="styled-table">
      <thead>
        <tr><th>Alignment</th><th>Class</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Right</td><td>.dropdown-menu-end</td><td>Aligns right</td></tr>
        <tr><td>Left</td><td>.dropdown-menu-start</td><td>Default alignment</td></tr>
      </tbody>
    </table>
    <pre className="code-block">
{`<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
    Right-aligned
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Option A</a></li>
  </ul>
</div>`}
    </pre>

    <h2>📏 8. Split Button Dropdown</h2>
    <pre className="code-block">
{`<div class="btn-group">
  <button type="button" class="btn btn-success">Save</button>
  <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"></button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Save as Draft</a></li>
    <li><a class="dropdown-item" href="#">Save & Publish</a></li>
  </ul>
</div>`}
    </pre>
    <p className="note">
      <code>.dropdown-toggle-split</code> adds a smaller caret-only button.
    </p>

    <h2>🧠 9. Dropdown in Navbar Example</h2>
    <pre className="code-block">
{`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MySite</a>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Web Design</a></li>
          <li><a class="dropdown-item" href="#">SEO</a></li>
          <li><a class="dropdown-item" href="#">Hosting</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>`}
    </pre>

    <h2>⚙️ 10. Dropdowns with Forms or Custom Content</h2>
    <pre className="code-block">
{`<div class="dropdown">
  <button class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown">
    Login
  </button>
  <div class="dropdown-menu p-4">
    <form>
      <div class="mb-3">
        <label for="emailDropdown" class="form-label">Email</label>
        <input type="email" class="form-control" id="emailDropdown">
      </div>
      <button type="submit" class="btn btn-primary w-100">Sign in</button>
    </form>
  </div>
</div>`}
    </pre>
    <p className="note">
      Add <code>.p-4</code> for neat padding inside dropdowns.
    </p>

    <h2>🧾 Summary</h2>
    <table className="styled-table">
      <thead>
        <tr><th>Feature</th><th>Class / Attribute</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Base Wrapper</td><td>.dropdown</td><td>Container for dropdown</td></tr>
        <tr><td>Toggle Button</td><td>.dropdown-toggle + data-bs-toggle="dropdown"</td><td>Triggers menu</td></tr>
        <tr><td>Menu</td><td>.dropdown-menu</td><td>Holds menu items</td></tr>
        <tr><td>Item</td><td>.dropdown-item</td><td>Clickable option</td></tr>
        <tr><td>Divider</td><td>.dropdown-divider</td><td>Line separator</td></tr>
        <tr><td>Header</td><td>.dropdown-header</td><td>Group heading</td></tr>
        <tr><td>Active/Disabled</td><td>.active / .disabled</td><td>Item states</td></tr>
        <tr><td>Alignment</td><td>.dropdown-menu-end</td><td>Right-align</td></tr>
        <tr><td>Split Button</td><td>.dropdown-toggle-split</td><td>Separate caret</td></tr>
        <tr><td>Direction</td><td>.dropup / .dropstart / .dropend</td><td>Menu direction</td></tr>
      </tbody>
    </table>
  </div>
)}
{activeSection === "bootstrap-collapse-accordion" && (
  <div className="content-section">
    <h1>⚡ Bootstrap Collapse & Accordion</h1>

    <h2>🧩 1. What is Collapse?</h2>
    <p className="subtitle">
      The <strong>Collapse</strong> feature in Bootstrap allows you to toggle the visibility of content.  
      It hides content by default and displays it when triggered by a button or link.
    </p>

    <h2>🎯 2. Basic Collapse Example</h2>
    <pre className="code-block">
{`<p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#demoCollapse">
    Toggle Content
  </button>
</p>

<div class="collapse" id="demoCollapse">
  <div class="card card-body">
    This content can be shown or hidden using the button above.
  </div>
</div>`}
    </pre>

    <h3>🧠 Explanation:</h3>
    <ul>
      <li><code>data-bs-toggle="collapse"</code> → Enables collapse behavior</li>
      <li><code>data-bs-target="#demoCollapse"</code> → Connects trigger to content</li>
      <li><code>.collapse</code> → Marks collapsible section</li>
      <li><code>.show</code> → Automatically added when visible</li>
    </ul>

    <h2>⚙️ 3. Collapse with a Link</h2>
    <pre className="code-block">
{`<a class="btn btn-success" data-bs-toggle="collapse" href="#linkCollapse">
  Show / Hide
</a>

<div class="collapse" id="linkCollapse">
  <div class="card card-body">
    This collapse is triggered by a link.
  </div>
</div>`}
    </pre>

    <h2>🧭 4. Multiple Collapse Targets</h2>
    <pre className="code-block">
{`<p>
  <a class="btn btn-info" data-bs-toggle="collapse" href="#multi1" role="button">Toggle Box 1</a>
  <button class="btn btn-warning" data-bs-toggle="collapse" data-bs-target="#multi2">Toggle Box 2</button>
</p>

<div class="row">
  <div class="col">
    <div class="collapse" id="multi1">
      <div class="card card-body bg-light">Box 1 content</div>
    </div>
  </div>
  <div class="col">
    <div class="collapse" id="multi2">
      <div class="card card-body bg-light">Box 2 content</div>
    </div>
  </div>
</div>`}
    </pre>

    <h2>🎨 5. Collapse Shown by Default</h2>
    <pre className="code-block">
{`<div class="collapse show" id="openByDefault">
  <div class="card card-body">
    This section is visible when the page loads.
  </div>
</div>`}
    </pre>

    <h2>🧱 6. Accordion — Grouped Collapses</h2>
    <p className="subtitle">
      An <strong>Accordion</strong> is a set of collapsible sections where only one remains open at a time.
      It’s great for FAQs, product info, or menu sections.
    </p>
    <pre className="code-block">
{`<div class="accordion" id="accordionExample">

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        This is the first item's content. It is visible by default.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        This is the second item's content.
      </div>
    </div>
  </div>

</div>`}
    </pre>

    <h3>🧠 How it works:</h3>
    <table className="styled-table">
      <thead>
        <tr><th>Element</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td><code>.accordion</code></td><td>Wrapper for all accordion items</td></tr>
        <tr><td><code>.accordion-item</code></td><td>Container for each collapsible item</td></tr>
        <tr><td><code>.accordion-header</code></td><td>Header containing the button</td></tr>
        <tr><td><code>.accordion-button</code></td><td>Clickable button that toggles the content</td></tr>
        <tr><td><code>.accordion-collapse</code></td><td>The collapsible body</td></tr>
        <tr><td><code>data-bs-parent</code></td><td>Keeps only one open at a time</td></tr>
      </tbody>
    </table>

    <h2>🎨 7. Accordion Variants (Colors)</h2>
    <pre className="code-block">
{`<div class="accordion" id="colorAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#colorOne">
        Blue Accordion
      </button>
    </h2>
    <div id="colorOne" class="accordion-collapse collapse show" data-bs-parent="#colorAccordion">
      <div class="accordion-body bg-light">
        Custom color using Bootstrap utilities.
      </div>
    </div>
  </div>
</div>`}
    </pre>

    <h2>🧭 8. Always Open Accordion</h2>
    <pre className="code-block">
{`<div class="accordion" id="openAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#item1">
        Item 1
      </button>
    </h2>
    <div id="item1" class="accordion-collapse collapse show">
      <div class="accordion-body">Item 1 content</div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#item2">
        Item 2
      </button>
    </h2>
    <div id="item2" class="accordion-collapse collapse">
      <div class="accordion-body">Item 2 content</div>
    </div>
  </div>
</div>`}
    </pre>

    <p className="note">
      Removing <code>data-bs-parent</code> allows multiple sections to stay open together.
    </p>

    <h2>⚙️ 9. Collapse with Icons</h2>
    <pre className="code-block">
{`<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIcon">
  <i class="bi bi-chevron-down me-2"></i> Click to Expand
</button>`}
    </pre>
    <p className="note">
      Use Bootstrap Icons (<code>bi bi-...</code>) for arrows, plus/minus, and other visuals.
    </p>

    <h2>🧠 10. JavaScript Methods for Collapse</h2>
    <pre className="code-block">
{`var collapseElement = document.getElementById('demoCollapse');
var collapse = new bootstrap.Collapse(collapseElement);

// Show
collapse.show();

// Hide
collapse.hide();

// Toggle
collapse.toggle();`}
    </pre>

    <h2>🧾 Summary</h2>
    <table className="styled-table">
      <thead>
        <tr><th>Component</th><th>Class / Attribute</th><th>Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td>Collapse Base</td><td>.collapse</td><td>Collapsible container</td></tr>
        <tr><td>Show State</td><td>.show</td><td>Displays content</td></tr>
        <tr><td>Toggle Trigger</td><td>data-bs-toggle="collapse"</td><td>Activates collapse</td></tr>
        <tr><td>Target</td><td>data-bs-target / href="#id"</td><td>Links button to section</td></tr>
        <tr><td>Accordion Wrapper</td><td>.accordion</td><td>Groups collapses together</td></tr>
        <tr><td>Accordion Item</td><td>.accordion-item</td><td>Each panel container</td></tr>
        <tr><td>Accordion Button</td><td>.accordion-button</td><td>Header toggle</td></tr>
        <tr><td>Parent Attribute</td><td>data-bs-parent</td><td>Keeps one open at a time</td></tr>
      </tbody>
    </table>
  </div>
)}

{activeSection === "bootstrap-carousel" && (
  <div className="content-section">
    <h1>🧮 Bootstrap Carousel</h1>

    <h2>🎯 1. What is a Carousel?</h2>
    <p className="subtitle">
      A <strong>Carousel</strong> is a slideshow component that rotates content (like images or cards)
      automatically or via controls.  
      It includes slides, navigation controls, indicators, and optional captions.
    </p>

    <h2>🧩 2. Basic Carousel Example</h2>
    <pre className="code-block">
{`<div id="demoCarousel" class="carousel slide" data-bs-ride="carousel">

  <!-- Indicators / Dots -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demoCarousel" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demoCarousel" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demoCarousel" data-bs-slide-to="2"></button>
  </div>

  <!-- Carousel Images -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/id/1015/1200/400" class="d-block w-100" alt="Slide 1">
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/1016/1200/400" class="d-block w-100" alt="Slide 2">
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/1018/1200/400" class="d-block w-100" alt="Slide 3">
    </div>
  </div>

  <!-- Controls -->
  <button class="carousel-control-prev" type="button" data-bs-target="#demoCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#demoCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>

</div>`}
    </pre>

    <h3>🧠 How It Works</h3>
    <table className="styled-table">
      <thead>
        <tr><th>Element</th><th>Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>.carousel</code></td><td>Base class for carousel</td></tr>
        <tr><td><code>.slide</code></td><td>Enables sliding animation</td></tr>
        <tr><td><code>.carousel-inner</code></td><td>Wrapper for all slides</td></tr>
        <tr><td><code>.carousel-item</code></td><td>Each slide (image or content)</td></tr>
        <tr><td><code>.active</code></td><td>First visible slide</td></tr>
        <tr><td><code>.carousel-indicators</code></td><td>Navigation dots</td></tr>
        <tr><td><code>.carousel-control-prev / next</code></td><td>Left/right navigation</td></tr>
        <tr><td><code>data-bs-ride="carousel"</code></td><td>Auto slide activation</td></tr>
      </tbody>
    </table>

    <h2>🕹️ 3. Carousel with Captions</h2>
    <pre className="code-block">
{`<div id="carouselCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/id/1020/1200/400" class="d-block w-100" alt="Slide 1">
      <div class="carousel-caption d-none d-md-block">
        <h5>First Slide</h5>
        <p>Beautiful landscape and smooth transitions.</p>
      </div>
    </div>
  </div>
</div>`}
    </pre>

    <p className="note">
      Use <code>d-none d-md-block</code> to hide captions on smaller screens for better visibility.
    </p>

    <h2>⚙️ 4. Automatic Slide Interval</h2>
    <pre className="code-block">
{`<div class="carousel-item" data-bs-interval="2000">
  <img src="https://picsum.photos/id/1031/1200/400" class="d-block w-100" alt="Fast Slide">
</div>`}
    </pre>

    <p className="note">
      <code>data-bs-interval="2000"</code> changes slide duration to 2 seconds (default is 5s).
    </p>

    <h2>🧭 5. Disable Automatic Cycling</h2>
    <pre className="code-block">
{`<div id="manualCarousel" class="carousel slide" data-bs-ride="false">
  <!-- Slides go here -->
</div>`}
    </pre>

    <h2>🎨 6. Fade Transition Effect</h2>
    <pre className="code-block">
{`<div id="fadeCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
  ...
</div>`}
    </pre>

    <p className="note">
      The <code>.carousel-fade</code> class gives a soft fading transition instead of sliding.
    </p>

    <h2>🧱 7. Carousel with Custom Height</h2>
    <pre className="code-block">
{`.carousel-item img {
  height: 500px;
  object-fit: cover;
}`}
    </pre>

    <h2>🧩 8. Carousel with Content (Not Images)</h2>
    <pre className="code-block">
{`<div id="contentCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner text-center">
    <div class="carousel-item active">
      <h3>Slide 1</h3>
      <p>This carousel shows text instead of images!</p>
    </div>
    <div class="carousel-item">
      <h3>Slide 2</h3>
      <p>Bootstrap makes it easy to customize!</p>
    </div>
  </div>
</div>`}
    </pre>

    <h2>⚡ 9. JavaScript Methods (Optional)</h2>
    <pre className="code-block">
{`var myCarousel = document.querySelector('#demoCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  ride: 'carousel'
});

// Controls
carousel.next();  // Go to next
carousel.prev();  // Go to previous
carousel.pause(); // Pause sliding
carousel.cycle(); // Resume sliding`}
    </pre>

    <h2>🎨 10. Styling Tips</h2>
    <ul>
      <li>Use <code>.carousel-dark</code> for dark captions on light backgrounds.</li>
      <li>Add <code>.rounded</code> or <code>.shadow-lg</code> for elegant image borders.</li>
      <li>Combine <code>.carousel-fade</code> with gradient overlays for modern designs.</li>
    </ul>

    <pre className="code-block">
{`.carousel-item::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);
}`}
    </pre>

    <h2>🧾 Quick Summary</h2>
    <table className="styled-table">
      <thead>
        <tr><th>Feature</th><th>Class / Attribute</th><th>Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td>Base</td><td>.carousel</td><td>Carousel container</td></tr>
        <tr><td>Slide</td><td>.carousel-item</td><td>Each image or content</td></tr>
        <tr><td>Active</td><td>.active</td><td>Current visible item</td></tr>
        <tr><td>Transition</td><td>.carousel-fade</td><td>Fade animation effect</td></tr>
        <tr><td>Auto Slide</td><td>data-bs-ride</td><td>Enables automatic cycling</td></tr>
        <tr><td>Interval</td><td>data-bs-interval</td><td>Set timing between slides</td></tr>
      </tbody>
    </table>
  </div>
)}
{activeSection === "bootstrap-toasts-spinners-progress" && (
  <div className="content-section">
    <h1>💬 Bootstrap Toasts, Spinners & Progress Bars</h1>

    <h2>🥐 1. Bootstrap Toasts — “Popup Notifications”</h2>
    <p className="subtitle">
      Toasts are lightweight notifications that appear briefly to give feedback — like
      <strong> “Message sent!”</strong> or <strong>“Download complete!”</strong>
    </p>

    <h3>✅ Basic Toast Example</h3>
    <pre className="code-block">
{`<div class="toast show">
  <div class="toast-header">
    <strong class="me-auto">Bootstrap</strong>
    <small>Just now</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
  </div>
  <div class="toast-body">
    Hello! This is a simple toast notification.
  </div>
</div>`}
    </pre>

    <h3>🧠 Explanation:</h3>
    <ul>
      <li><code>.toast</code> → Base toast element</li>
      <li><code>.toast-header</code> → Title area with optional close button</li>
      <li><code>.toast-body</code> → Main message</li>
      <li><code>.show</code> → Makes it visible</li>
      <li><code>data-bs-dismiss="toast"</code> → Closes the toast</li>
    </ul>

    <h3>🎨 Toast Position (Top Right, Bottom Left, etc.)</h3>
    <pre className="code-block">
{`<div class="toast-container position-fixed top-0 end-0 p-3">
  <div class="toast show">
    <div class="toast-header">
      <strong class="me-auto">Success</strong>
      <small>2 sec ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body bg-success text-white">
      Your file has been uploaded successfully!
    </div>
  </div>
</div>`}
    </pre>

    <p className="note">
      Use Bootstrap’s position utilities (<code>top-0</code>, <code>bottom-0</code>,
      <code>start-0</code>, <code>end-0</code>) for placement.
    </p>

    <h3>⚙️ Show Toast via JavaScript</h3>
    <pre className="code-block">
{`const toastEl = document.querySelector('.toast');
const toast = new bootstrap.Toast(toastEl);
toast.show(); // show the toast`}
    </pre>

    <h2>🌀 2. Bootstrap Spinners — “Loading Indicators”</h2>
    <p className="subtitle">
      Spinners indicate that something is loading or processing — like fetching data or waiting for a response.
    </p>

    <h3>✅ Basic Spinner (Border)</h3>
    <pre className="code-block">
{`<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`}
    </pre>

    <h3>🌈 Different Colors</h3>
    <pre className="code-block">
{`<div class="spinner-border text-success"></div>
<div class="spinner-border text-danger"></div>
<div class="spinner-border text-warning"></div>`}
    </pre>

    <h3>🔁 Growing Spinner</h3>
    <pre className="code-block">
{`<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`}
    </pre>

    <p className="note">
      <code>spinner-grow</code> gives a pulsing effect, while <code>spinner-border</code> spins in a loop.
    </p>

    <h3>📏 Spinner Sizes</h3>
    <pre className="code-block">
{`<div class="spinner-border spinner-border-sm text-secondary"></div>
<div class="spinner-grow spinner-grow-sm text-secondary"></div>`}
    </pre>

    <p className="note">
      Add <code>-sm</code> for smaller spinners or customize with CSS (<code>width</code>, <code>height</code>).
    </p>

    <h3>🧱 Spinner Inside Button</h3>
    <pre className="code-block">
{`<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm"></span>
  Loading...
</button>`}
    </pre>

    <p className="note">Use <code>disabled</code> to prevent multiple clicks during loading.</p>

    <h2>📊 3. Bootstrap Progress Bars — “Progress Indicators”</h2>
    <p className="subtitle">
      Progress bars show the completion status of a task such as uploading files or completing forms.
    </p>

    <h3>✅ Basic Progress Bar</h3>
    <pre className="code-block">
{`<div class="progress">
  <div class="progress-bar" style="width: 50%;">50%</div>
</div>`}
    </pre>

    <h3>🌈 Colored Progress Bars</h3>
    <pre className="code-block">
{`<div class="progress">
  <div class="progress-bar bg-success" style="width: 75%">75%</div>
</div>

<div class="progress">
  <div class="progress-bar bg-danger" style="width: 40%">40%</div>
</div>`}
    </pre>

    <h3>⚙️ Striped & Animated Bars</h3>
    <pre className="code-block">
{`<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" style="width: 60%">60%</div>
</div>

<div class="progress mt-2">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 80%">80%</div>
</div>`}
    </pre>

    <ul>
      <li><code>progress-bar-striped</code> → Adds stripe pattern</li>
      <li><code>progress-bar-animated</code> → Moves stripes to show activity</li>
    </ul>

    <h3>🧭 Multiple Bars in One Line</h3>
    <pre className="code-block">
{`<div class="progress">
  <div class="progress-bar bg-success" style="width: 35%"></div>
  <div class="progress-bar bg-warning" style="width: 25%"></div>
  <div class="progress-bar bg-danger" style="width: 15%"></div>
</div>`}
    </pre>

    <h3>🧮 With Labels Inside</h3>
    <pre className="code-block">
{`<div class="progress">
  <div class="progress-bar bg-primary" style="width: 70%">70% Complete</div>
</div>`}
    </pre>

    <h2>🧠 Summary Table</h2>
    <table className="styled-table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Class / Attribute</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Toast</td><td>.toast</td><td>Defines toast container</td></tr>
        <tr><td>Toast Header / Body</td><td>.toast-header, .toast-body</td><td>Toast content structure</td></tr>
        <tr><td>Close Toast</td><td>data-bs-dismiss="toast"</td><td>Dismiss toast element</td></tr>
        <tr><td>Spinners</td><td>.spinner-border / .spinner-grow</td><td>Loading indicators</td></tr>
        <tr><td>Progress Bar</td><td>.progress / .progress-bar</td><td>Progress bar structure</td></tr>
        <tr><td>Animation</td><td>.progress-bar-striped / .progress-bar-animated</td><td>Animated visuals</td></tr>
        <tr><td>Color</td><td>.bg-*</td><td>Color utility (success, info, warning, etc.)</td></tr>
      </tbody>
    </table>

    <h2>🧪 Mini Practice Projects</h2>
    <ul>
      <li>🧩 Toast Notification — Show toast on successful form submit</li>
      <li>🔄 Loading Spinner — Show spinner during fake API delay</li>
      <li>📊 Progress Tracker — File upload UI with progress bar</li>
      <li>⚙️ Button with Spinner — Show spinner on “Submit” button</li>
      <li>🎬 Auto Dismiss Toast — Hide toast after 3 seconds</li>
    </ul>

    <h3>⚡ Bonus: Auto-Hiding Toast (JS)</h3>
    <pre className="code-block">
{`const toastLive = document.getElementById('autoToast');
const toast = new bootstrap.Toast(toastLive, { delay: 3000 });
toast.show();`}
    </pre>

    <p className="note">
      <code>delay: 3000</code> → Automatically hides the toast after 3 seconds.
    </p>

    <h3>🧾 Real-World Use Cases</h3>
    <ul>
      <li>✅ <strong>Toast</strong> — Show success/error messages</li>
      <li>✅ <strong>Spinner</strong> — Display loading state</li>
      <li>✅ <strong>Progress Bar</strong> — Track uploads/downloads or form steps</li>
    </ul>
  </div>
)}
{activeSection === "bootstrap-icons" && (
  <div className="content-section">
    <h1>🧠 Bootstrap Icons</h1>

    <h2>🎯 1. What Are Bootstrap Icons?</h2>
    <p className="subtitle">
      Bootstrap Icons are a free, open-source icon set (2,000+ icons) designed
      to work perfectly with Bootstrap components — like buttons, navbars,
      modals, and forms. You can use them just like text, because they’re inline
      SVGs.
    </p>

    <h2>🧩 2. Getting Started</h2>
    <h3>✅ Option 1: Use CDN (Recommended)</h3>
    <p>Add this link inside your HTML <code>&lt;head&gt;</code> tag:</p>
    <pre>
      <code>{`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
/>`}</code>
    </pre>

    <p>Now you can use any icon with the <code>&lt;i&gt;</code> tag:</p>
    <pre>
      <code>{`<i class="bi bi-alarm"></i>
<i class="bi bi-heart-fill text-danger"></i>
<i class="bi bi-github text-dark"></i>`}</code>
    </pre>

    <ul>
      <li><b>bi</b> → Bootstrap Icon base class</li>
      <li><b>bi-alarm</b> → specific icon name</li>
      <li>
        You can use text utilities like <code>text-danger</code> or{" "}
        <code>text-primary</code> to color icons.
      </li>
    </ul>

    <h2>🎨 3. Icon Size & Color</h2>
    <pre>
      <code>{`<i class="bi bi-star text-warning fs-1"></i>
<i class="bi bi-star text-warning fs-2"></i>
<i class="bi bi-star text-warning fs-3"></i>`}</code>
    </pre>

    <p>Or use custom CSS:</p>
    <pre>
      <code>{`.bi {
  font-size: 40px;
  color: purple;
}`}</code>
    </pre>

    <h2>⚙️ 4. Icons Inside Buttons</h2>
    <pre>
      <code>{`<button class="btn btn-primary">
  <i class="bi bi-download me-2"></i> Download
</button>

<button class="btn btn-success">
  <i class="bi bi-check-circle me-1"></i> Save
</button>`}</code>
    </pre>
    <p><b>me-2</b> adds right margin spacing (from Bootstrap utilities).</p>

    <h2>🧭 5. Icons in Navigation</h2>
    <pre>
      <code>{`<nav class="nav justify-content-center">
  <a class="nav-link active" href="#"><i class="bi bi-house-door"></i> Home</a>
  <a class="nav-link" href="#"><i class="bi bi-person"></i> Profile</a>
  <a class="nav-link" href="#"><i class="bi bi-gear"></i> Settings</a>
</nav>`}</code>
    </pre>

    <h2>🧱 6. Standalone Icon Buttons</h2>
    <pre>
      <code>{`<button class="btn btn-outline-danger">
  <i class="bi bi-trash"></i>
</button>

<button class="btn btn-outline-secondary">
  <i class="bi bi-search"></i>
</button>`}</code>
    </pre>

    <h2>🌈 7. Animated or Interactive Icons (CSS)</h2>
    <pre>
      <code>{`<i class="bi bi-arrow-repeat fs-2 text-primary spin"></i>

<style>
.spin {
  animation: spin 2s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>`}</code>
    </pre>

    <h2>🧩 8. Popular Icon Categories</h2>
    <table className="styled-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Example Icons</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>🏠 Interface</td>
          <td>bi-house, bi-gear, bi-person, bi-bell</td>
        </tr>
        <tr>
          <td>❤️ Social</td>
          <td>bi-facebook, bi-twitter, bi-instagram, bi-github</td>
        </tr>
        <tr>
          <td>💾 Files</td>
          <td>bi-upload, bi-download, bi-file-text, bi-folder</td>
        </tr>
        <tr>
          <td>🛒 E-Commerce</td>
          <td>bi-cart, bi-bag, bi-currency-dollar, bi-credit-card</td>
        </tr>
        <tr>
          <td>✉️ Messaging</td>
          <td>bi-chat, bi-envelope, bi-emoji-smile</td>
        </tr>
        <tr>
          <td>🔐 Security</td>
          <td>bi-lock, bi-shield-check, bi-eye-slash</td>
        </tr>
      </tbody>
    </table>

    <h2>💡 9. Icon with Tooltips</h2>
    <pre>
      <code>{`<button class="btn btn-light" data-bs-toggle="tooltip" title="Edit">
  <i class="bi bi-pencil-square"></i>
</button>`}</code>
    </pre>

    <h2>🧠 10. Using Inline SVGs (Advanced)</h2>
    <p>
      You can copy raw SVG code from the Bootstrap Icons website and paste it
      directly. Inline SVGs can be styled or animated with CSS since they’re DOM
      elements.
    </p>

    <h2>📦 11. Using Icons in Other Components</h2>
    <table className="styled-table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alerts</td>
          <td>
            <code>{`<div class="alert alert-warning"><i class="bi bi-exclamation-triangle"></i> Warning!</div>`}</code>
          </td>
        </tr>
        <tr>
          <td>Toasts</td>
          <td>
            <code>{`<i class="bi bi-check-circle text-success me-2"></i> Toast Message`}</code>
          </td>
        </tr>
        <tr>
          <td>Cards</td>
          <td>
            <code>{`<i class="bi bi-star-fill text-warning"></i> 5.0 Rating`}</code>
          </td>
        </tr>
        <tr>
          <td>Accordion</td>
          <td>
            <code>{`<i class="bi bi-chevron-down"></i>`}</code>
          </td>
        </tr>
      </tbody>
    </table>

    <h2>⚙️ 12. Customizing Icons Globally</h2>
    <pre>
      <code>{`.bi {
  color: #0d6efd;
  vertical-align: middle;
  transition: 0.3s;
}
.bi:hover {
  color: #6610f2;
  transform: scale(1.1);
}`}</code>
    </pre>

    <h2>🧾 Summary</h2>
    <table className="styled-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Usage</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Include via CDN</td>
          <td>
            <code>{`<link href="...bootstrap-icons.css">`}</code>
          </td>
          <td>Adds icon support</td>
        </tr>
        <tr>
          <td>Use icon</td>
          <td>
            <code>{`<i class="bi bi-alarm"></i>`}</code>
          </td>
          <td>Basic syntax</td>
        </tr>
        <tr>
          <td>Change color</td>
          <td>text-primary, text-danger, etc.</td>
          <td>
            <code>{`<i class="bi bi-heart text-danger"></i>`}</code>
          </td>
        </tr>
        <tr>
          <td>Change size</td>
          <td>fs-1, fs-2, etc.</td>
          <td>
            <code>{`<i class="bi bi-star fs-3"></i>`}</code>
          </td>
        </tr>
        <tr>
          <td>Combine with components</td>
          <td>Buttons, Navbar, Alerts</td>
          <td>
            <code>{`<i class="bi bi-download me-2"></i>`}</code>
          </td>
        </tr>
        <tr>
          <td>Animate icons</td>
          <td>CSS keyframes</td>
          <td>Rotating, pulsing</td>
        </tr>
      </tbody>
    </table>
  </div>
)}
{activeSection === "bootstrap-responsive" && (
  <div className="content-section">
    <h1>📱 Bootstrap Responsive Design & Breakpoints</h1>

    <h2>🎯 1. What Is Responsive Design?</h2>
    <p className="subtitle">
      Responsive Design means your webpage automatically adjusts its layout, size, and elements to look perfect on all devices — from desktops to smartphones.
    </p>
    <ul>
      <li>🖥️ Desktops</li>
      <li>💻 Laptops</li>
      <li>📱 Tablets</li>
      <li>📱 Smartphones</li>
    </ul>
    <p>Bootstrap achieves this with:</p>
    <ul>
      <li>✅ A flexible grid system</li>
      <li>✅ Built-in CSS media queries</li>
      <li>✅ Utility classes for visibility and layout</li>
    </ul>

    <h2>📏 2. Bootstrap Breakpoints</h2>
    <p>Bootstrap uses 5 main breakpoints (screen width ranges) that you can target with special class prefixes.</p>
    <table className="styled-table">
      <thead>
        <tr>
          <th>Breakpoint</th>
          <th>Class Prefix</th>
          <th>Screen Width</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Extra Small</td><td>(none)</td><td>&lt; 576px</td></tr>
        <tr><td>Small</td><td>sm</td><td>≥ 576px</td></tr>
        <tr><td>Medium</td><td>md</td><td>≥ 768px</td></tr>
        <tr><td>Large</td><td>lg</td><td>≥ 992px</td></tr>
        <tr><td>Extra Large</td><td>xl</td><td>≥ 1200px</td></tr>
        <tr><td>XXL</td><td>xxl</td><td>≥ 1400px</td></tr>
      </tbody>
    </table>
    <p><b>🧠 Example:</b> <code>col-md-6</code> → The element will take 6 columns starting from medium screens (≥768px) and above.</p>

    <h2>💡 3. Responsive Grid Example</h2>
    <pre>
      <code>{`<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4 bg-primary text-white p-3">Column 1</div>
    <div class="col-12 col-md-6 col-lg-4 bg-success text-white p-3">Column 2</div>
    <div class="col-12 col-md-12 col-lg-4 bg-warning text-white p-3">Column 3</div>
  </div>
</div>`}</code>
    </pre>
    <ul>
      <li>📱 On mobile: each column = full width</li>
      <li>💻 On tablet: 2 columns per row</li>
      <li>🖥️ On desktop: 3 columns per row</li>
    </ul>

    <h2>🧭 4. Responsive Utilities</h2>
    <table className="styled-table">
      <thead>
        <tr><th>Class</th><th>Effect</th></tr>
      </thead>
      <tbody>
        <tr><td>d-none</td><td>Hide on all screens</td></tr>
        <tr><td>d-sm-block</td><td>Show on small (≥576px) and up</td></tr>
        <tr><td>d-md-none</td><td>Hide on medium (≥768px) and up</td></tr>
        <tr><td>d-lg-block</td><td>Show on large screens and up</td></tr>
      </tbody>
    </table>
    <pre>
      <code>{`<p class="d-none d-md-block">Visible only on medium+ screens</p>
<p class="d-md-none">Visible only on small screens</p>`}</code>
    </pre>

    <h2>🧱 5. Responsive Text Alignment</h2>
    <pre>
      <code>{`<p class="text-start text-md-center text-lg-end">
  This text changes alignment based on screen size!
</p>`}</code>
    </pre>
    <ul>
      <li>📱 Small → Left</li>
      <li>💻 Medium → Center</li>
      <li>🖥️ Large → Right</li>
    </ul>

    <h2>📸 6. Responsive Images</h2>
    <pre>
      <code>{`<img src="banner.jpg" class="img-fluid" alt="Responsive image">`}</code>
    </pre>
    <p>✔️ Adds <code>max-width: 100%</code> and <code>height: auto</code>.</p>

    <h2>⚙️ 7. Responsive Containers</h2>
    <table className="styled-table">
      <thead>
        <tr><th>Class</th><th>Behavior</th></tr>
      </thead>
      <tbody>
        <tr><td>.container</td><td>Fixed width per breakpoint</td></tr>
        <tr><td>.container-fluid</td><td>100% width always</td></tr>
        <tr><td>.container-&#123;breakpoint&#125;</td><td>Full width until that breakpoint</td></tr>
      </tbody>
    </table>
    <pre>
      <code>{`<div class="container-md">
  This container is 100% wide until md breakpoint.
</div>`}</code>
    </pre>

    <h2>🎨 8. Responsive Margin & Padding</h2>
    <pre>
      <code>{`<div class="p-2 p-md-4 p-lg-5 bg-light">
  Responsive padding: small on mobile, large on desktop.
</div>`}</code>
    </pre>
    <p><b>🧠 Syntax:</b> p = padding, m = margin, -&#123;side&#125;, -&#123;breakpoint&#125;, -&#123;value&#125; (0–5 scale)</p>

    <h2>🧮 9. Responsive Flexbox Utilities</h2>
    <pre>
      <code>{`<div class="d-flex flex-column flex-md-row justify-content-between">
  <div class="p-2 bg-primary text-white">Item 1</div>
  <div class="p-2 bg-success text-white">Item 2</div>
  <div class="p-2 bg-warning text-white">Item 3</div>
</div>`}</code>
    </pre>
    <ul>
      <li>📱 Mobile → Vertical layout</li>
      <li>💻 Tablet/Desktop → Horizontal layout</li>
    </ul>

    <h2>🧩 10. Responsive Navbar Example</h2>
    <pre>
      <code>{`<nav class="navbar navbar-expand-md navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">MySite</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>`}</code>
    </pre>
    <p>💡 <code>navbar-expand-md</code> → Expands from medium screens upward; below that, it collapses into a hamburger menu.</p>

    <h2>🧠 11. Responsive Tables</h2>
    <pre>
      <code>{`<div class="table-responsive">
  <table class="table table-bordered">
    <thead><tr><th>#</th><th>Name</th><th>Email</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>Alex</td><td>alex@mail.com</td></tr>
    </tbody>
  </table>
</div>`}</code>
    </pre>
    <p>📱 Adds a horizontal scrollbar on small devices to prevent layout breaking.</p>

    <h2>💡 12. Best Practices for Responsive Design</h2>
    <ul>
      <li>✅ Always use mobile-first classes (<code>col-12</code>, <code>col-md-6</code>, etc.)</li>
      <li>✅ Test your layout at all breakpoints</li>
      <li>✅ Use <code>.container-fluid</code> for full-width sections</li>
      <li>✅ Combine with flexbox for dynamic layouts</li>
      <li>✅ Use <code>.img-fluid</code> and responsive typography (<code>fs-*</code> classes)</li>
    </ul>

    <h2>📋 Summary</h2>
    <table className="styled-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Breakpoints</td><td>Screen width ranges</td><td>sm, md, lg, xl, xxl</td></tr>
        <tr><td>Grid Layout</td><td>Adapts columns to device</td><td>col-12 col-md-6 col-lg-4</td></tr>
        <tr><td>Visibility</td><td>Show/hide on breakpoints</td><td>d-none d-md-block</td></tr>
        <tr><td>Text Alignment</td><td>Changes per screen</td><td>text-center text-lg-end</td></tr>
        <tr><td>Responsive Navbar</td><td>Collapses on mobile</td><td>navbar-expand-md</td></tr>
        <tr><td>Images</td><td>Auto-fit screen</td><td>.img-fluid</td></tr>
      </tbody>
    </table>
  </div>
)}
{/* 🚀 Bootstrap Projects Collection */}
{activeSection === "bootstrap-mini-projects" && (
  <>
    <h1>🚀 Bootstrap Projects Collection</h1>

    <h2>🧩 1. Personal Portfolio Website</h2>
    <p className="subtitle">
      <strong>Concepts Used:</strong> Grid system, Navbar, Cards, Buttons, Forms, Icons, Responsive design
    </p>
    <ul>
      <li>Responsive navbar with your name/logo</li>
      <li>“About Me” section</li>
      <li>Project cards</li>
      <li>Contact form</li>
      <li>Social media icons in footer</li>
    </ul>

    <pre className="code-snippet">{`<header class="bg-dark text-white text-center py-5">
  <h1>Hi, I'm Sofia 👋</h1>
  <p>Front-End Developer | Designer | Learner</p>
</header>

<nav class="navbar navbar-expand-md navbar-dark bg-primary">
  <div class="container">
    <a class="navbar-brand" href="#">Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
        <li class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>
        <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>`}</pre>

    <h2>🧭 2. Responsive Travel Landing Page</h2>
    <p className="subtitle">
      <strong>Concepts Used:</strong> Navbar, Carousel, Grid system, Cards, Buttons, Background utilities
    </p>
    <ul>
      <li>Hero section with background image</li>
      <li>Travel packages in cards</li>
      <li>Call-to-action buttons</li>
      <li>Fully responsive layout</li>
    </ul>

    <pre className="code-snippet">{`<div class="container-fluid p-0">
  <div id="hero" class="bg-primary text-white text-center p-5">
    <h1>Explore the World 🌍</h1>
    <p>Find amazing destinations and adventures</p>
    <button class="btn btn-light">Get Started</button>
  </div>
</div>`}</pre>

    <h2>🛍️ 3. E-Commerce Product Page</h2>
    <p className="subtitle">
      <strong>Concepts Used:</strong> Cards, Buttons, Grid system, Modals, Carousel
    </p>
    <ul>
      <li>Product list in a responsive grid</li>
      <li>Modal for quick product view</li>
      <li>“Add to Cart” buttons</li>
    </ul>

    <pre className="code-snippet">{`<div class="container my-5">
  <h2 class="text-center mb-4">Shop Now</h2>
  <div class="row g-3">
    <div class="col-12 col-md-4">
      <div class="card">
        <img src="https://via.placeholder.com/300" class="card-img-top" alt="product">
        <div class="card-body text-center">
          <h5 class="card-title">Smart Watch</h5>
          <p>$99.00</p>
          <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#productModal">View</button>
        </div>
      </div>
    </div>
  </div>
</div>`}</pre>

    <h2>💬 4. Feedback Form Page</h2>
    <p className="subtitle">
      <strong>Concepts Used:</strong> Forms, Input groups, Buttons, Alerts, Grid system
    </p>
    <ul>
      <li>Contact form</li>
      <li>Responsive layout</li>
      <li>Confirmation alert</li>
    </ul>

    <pre className="code-snippet">{`<form class="row g-3">
  <div class="col-md-6">
    <input type="text" class="form-control" placeholder="Name" required>
  </div>
  <div class="col-md-6">
    <input type="email" class="form-control" placeholder="Email" required>
  </div>
  <div class="col-12">
    <textarea class="form-control" rows="4" placeholder="Message"></textarea>
  </div>
  <div class="col-12 text-center">
    <button class="btn btn-primary">Submit</button>
  </div>
</form>`}</pre>

    <h2>🧮 5. Dashboard (Admin Panel)</h2>
    <p className="subtitle">
      <strong>Concepts Used:</strong> Grid layout, Cards, Icons, Navbar, Sidebar, Progress bars
    </p>
    <ul>
      <li>Responsive sidebar navigation</li>
      <li>Stats cards</li>
      <li>Progress bars for analytics</li>
    </ul>

    <pre className="code-snippet">{`<div class="container-fluid">
  <div class="row">
    <aside class="col-md-3 bg-dark text-white p-3">
      <h4>Admin Panel</h4>
      <ul class="nav flex-column">
        <li class="nav-item"><a href="#" class="nav-link text-white">Dashboard</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-white">Users</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-white">Settings</a></li>
      </ul>
    </aside>

    <main class="col-md-9 p-4">
      <h3>Welcome, Admin</h3>
      <div class="row g-3">
        <div class="col-md-4">
          <div class="card text-center">
            <div class="card-body">
              <h5>Users</h5>
              <p class="fs-3 text-primary">1200</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>`}</pre>

    <h2>🍽️ 6. Restaurant Website</h2>
    <p className="subtitle">
      <strong>Concepts Used:</strong> Navbar, Carousel, Cards, Forms, Modals, Footer
    </p>
    <p>Features: Hero carousel, menu cards, booking form, and offer modal.</p>

    <h2>🎯 7. Bootstrap Blog Page</h2>
    <p className="subtitle">
      <strong>Concepts Used:</strong> Grid system, Cards, Typography, Pagination
    </p>
    <p>Features: Blog grid layout, sidebar for categories, and pagination.</p>

    <h2>🧾 Summary of Projects</h2>
    <table className="styled-table">
      <thead>
        <tr>
          <th>Project</th>
          <th>Level</th>
          <th>Core Concepts</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Portfolio Website</td><td>🟢 Beginner</td><td>Navbar, Cards, Forms</td></tr>
        <tr><td>Travel Landing Page</td><td>🟢 Beginner</td><td>Grid, Buttons, Carousel</td></tr>
        <tr><td>E-Commerce Page</td><td>🟡 Intermediate</td><td>Cards, Modals</td></tr>
        <tr><td>Feedback Form</td><td>🟢 Beginner</td><td>Forms, Alerts</td></tr>
        <tr><td>Admin Dashboard</td><td>🟠 Intermediate</td><td>Grid, Sidebar, Cards</td></tr>
        <tr><td>Restaurant Site</td><td>🔵 Advanced</td><td>Carousel, Modals, Forms</td></tr>
        <tr><td>Blog Page</td><td>🟡 Intermediate</td><td>Typography, Pagination</td></tr>
      </tbody>
    </table>

    <h2>🎓 Tips for Project Building</h2>
    <ul>
      <li>✅ Always use <code>.container</code> or <code>.container-fluid</code></li>
      <li>✅ Use the grid system for layout (<code>.row</code>, <code>.col-md-6</code>)</li>
      <li>✅ Keep mobile-first design</li>
      <li>✅ Use icons & utilities for polish</li>
      <li>✅ Add modals, carousels, and cards for interactivity</li>
    </ul>
  </>
)}


        </main>
    </div>
  );
};

export default BootstrapCourse;
