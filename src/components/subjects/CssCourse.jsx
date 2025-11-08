import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "../Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './CssCourse.css';

const CssCourse = () => {
  const [activeSection, setActiveSection] = useState('css-introduction');
  const navigate = useNavigate();

  return (
    
    <div className="css-course-container d-flex">
      {/* ======= Sidebar (Desktop) ======= */}
      <aside className="sidebar d-none d-md-block p-3">
      <h4 className="sidebar-title">CSS Tutorial</h4>
      <ul className="list-unstyled mt-3">
  <li onClick={() => navigate('/')}>🏠 Home</li>

  <li className={activeSection === 'css-introduction' ? 'active' : ''}onClick={() => setActiveSection('css-introduction')}>🧩 Introduction to CSS</li>
  <li className={activeSection === 'css-selectors' ? 'active' : ''}onClick={() => setActiveSection('css-selectors')}>🧱 Selectors</li>
  <li className={activeSection === 'css-colors-backgrounds-borders' ? 'active' : ''}onClick={() => setActiveSection('css-colors-backgrounds-borders')}>🎨 Colors, Backgrounds, and Borders</li>
  <li className={activeSection === 'css-text-font' ? 'active' : ''}onClick={() => setActiveSection('css-text-font')}>✍️ Text and Font Styling</li>
  <li className={activeSection === 'css-box-model' ? 'active' : ''}onClick={() => setActiveSection('css-box-model')}>🧭 Box Model</li>
  <li className={activeSection === 'css-display-visibility' ? 'active' : ''}onClick={() => setActiveSection('css-display-visibility')}>🧰 Display and Visibility</li>
  <li className={activeSection === 'css-positioning' ? 'active' : ''}onClick={() => setActiveSection('css-positioning')}>📐 Positioning</li>
  <li className={activeSection === 'css-float-clear' ? 'active' : ''}onClick={() => setActiveSection('css-float-clear')}> ⚙️ Float and Clear</li>
  <li className={activeSection === 'css-flexbox' ? 'active' : ''}onClick={() => setActiveSection('css-flexbox')}>🧱 Flexbox</li>
  <li className={activeSection === 'css-grid' ? 'active' : ''}onClick={() => setActiveSection('css-grid')}>🔲 Grid Layout</li>
  <li className={activeSection === 'css-units-measurements' ? 'active' : ''}onClick={() => setActiveSection('css-units-measurements')}>📋 Units and Measurements</li>
  <li className={activeSection === 'css-pseudo' ? 'active' : ''}onClick={() => setActiveSection('css-pseudo')}>🌈 Pseudo-classes & Pseudo-elements</li>
  <li className={activeSection === 'css-transitions-animations' ? 'active' : ''}onClick={() => setActiveSection('css-transitions-animations')}>🧩 Transitions and Animations</li>
  <li className={activeSection === 'css-transforms' ? 'active' : ''}onClick={() => setActiveSection('css-transforms')}>🎬 Transforms</li>
  <li className={activeSection === 'css-responsive' ? 'active' : ''}onClick={() => setActiveSection('css-responsive')}>🌍 Responsive Web Design</li>
  <li className={activeSection === 'css-variables' ? 'active' : ''}onClick={() => setActiveSection('css-variables')}>🧮 CSS Variables (Custom Properties)</li>
  <li className={activeSection === 'css-advanced' ? 'active' : ''}onClick={() => setActiveSection('css-advanced')}>🎭 CSS Advanced Topics</li>
  <li className={activeSection === 'css-modern' ? 'active' : ''}onClick={() => setActiveSection('css-modern')}>🧠 Modern CSS Features</li>
  <li className={activeSection === 'css-frameworks' ? 'active' : ''}onClick={() => setActiveSection('css-frameworks')}>🧱 CSS Frameworks</li>
  <li className={activeSection === 'css-mini-projects' ? 'active' : ''}onClick={() => setActiveSection('css-mini-projects')}>🚀 Mini Projects (Hands-on Practice)</li>
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

  <li className={activeSection === 'css-introduction' ? 'active' : ''}onClick={() => setActiveSection('css-introduction')}>🧩 Introduction to CSS</li>
  <li className={activeSection === 'css-selectors' ? 'active' : ''}onClick={() => setActiveSection('css-selectors')}>🧱 Selectors</li>
  <li className={activeSection === 'css-colors-backgrounds-borders' ? 'active' : ''}onClick={() => setActiveSection('css-colors-backgrounds-borders')}>🎨 Colors, Backgrounds, and Borders</li>
  <li className={activeSection === 'css-text-font' ? 'active' : ''}onClick={() => setActiveSection('css-text-font')}>✍️ Text and Font Styling</li>
  <li className={activeSection === 'css-box-model' ? 'active' : ''}onClick={() => setActiveSection('css-box-model')}>🧭 Box Model</li>
  <li className={activeSection === 'css-display-visibility' ? 'active' : ''}onClick={() => setActiveSection('css-display-visibility')}>🧰 Display and Visibility</li>
  <li className={activeSection === 'css-positioning' ? 'active' : ''}onClick={() => setActiveSection('css-positioning')}>📐 Positioning</li>
  <li className={activeSection === 'css-float-clear' ? 'active' : ''}onClick={() => setActiveSection('css-float-clear')}> ⚙️ Float and Clear</li>
  <li className={activeSection === 'css-flexbox' ? 'active' : ''}onClick={() => setActiveSection('css-flexbox')}>🧱 Flexbox</li>
  <li className={activeSection === 'css-grid' ? 'active' : ''}onClick={() => setActiveSection('css-grid')}>🔲 Grid Layout</li>
  <li className={activeSection === 'css-units-measurements' ? 'active' : ''}onClick={() => setActiveSection('css-units-measurements')}>📋 Units and Measurements</li>
  <li className={activeSection === 'css-pseudo' ? 'active' : ''}onClick={() => setActiveSection('css-pseudo')}>🌈 Pseudo-classes & Pseudo-elements</li>
  <li className={activeSection === 'css-transitions-animations' ? 'active' : ''}onClick={() => setActiveSection('css-transitions-animations')}>🧩 Transitions and Animations</li>
  <li className={activeSection === 'css-transforms' ? 'active' : ''}onClick={() => setActiveSection('css-transforms')}>🎬 Transforms</li>
  <li className={activeSection === 'css-responsive' ? 'active' : ''}onClick={() => setActiveSection('css-responsive')}>🌍 Responsive Web Design</li>
  <li className={activeSection === 'css-variables' ? 'active' : ''}onClick={() => setActiveSection('css-variables')}>🧮 CSS Variables (Custom Properties)</li>
  <li className={activeSection === 'css-advanced' ? 'active' : ''}onClick={() => setActiveSection('css-advanced')}>🎭 CSS Advanced Topics</li>
  <li className={activeSection === 'css-modern' ? 'active' : ''}onClick={() => setActiveSection('css-modern')}>🧠 Modern CSS Features</li>
  <li className={activeSection === 'css-frameworks' ? 'active' : ''}onClick={() => setActiveSection('css-frameworks')}>🧱 CSS Frameworks</li>
  <li className={activeSection === 'css-mini-projects' ? 'active' : ''}onClick={() => setActiveSection('css-mini-projects')}>🚀 Mini Projects (Hands-on Practice)</li>
</ul>
</div>
</div>
{/* Main Course Content */}
      <main className="course-content">
        {/* ✅ CSS-introduction */}
        {activeSection === 'css-introduction' && (
  <>
  <h1>🧩 Introduction to CSS</h1>
    <p className="subtitle">
      CSS (Cascading Style Sheets) is used to style and format HTML pages —
      controlling colors, fonts, layouts, and spacing.
    </p>

    <h2>🎨 Purpose of CSS</h2>
    <ul className="bullet-points">
      <li>Adds design and layout to webpages.</li>
      <li>Keeps content (HTML) and style (CSS) separate.</li>
      <li>Makes websites responsive and consistent.</li>
    </ul>

    <h2>⚙️ Ways to Add CSS</h2>
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
          <td>Inline CSS</td>
          <td>Inside an HTML tag</td>
          <td>
            <code>{`<h1 style="color: red;">Hello</h1>`}</code>
          </td>
        </tr>
        <tr>
          <td>Internal CSS</td>
          <td>Inside {'<style>'} tag in {'<head>'}</td>
          <td>
            <code>{`<style>p {color: blue;}</style>`}</code>
          </td>
        </tr>
        <tr>
          <td>External CSS</td>
          <td>Linked .css file</td>
          <td>
            <code>{`<link rel="stylesheet" href="style.css">`}</code>
          </td>
        </tr>
      </tbody>
    </table>

    <h2>💡 Basic Syntax</h2>
    <pre className="code-block">
{`selector {
  property: value;
}`}
    </pre>

    <h2>Example:</h2>
    <pre className="code-block">
{`h1 {
  color: green;
  text-align: center;
}`}
    </pre>

    <h2>🎯 Key Points</h2>
    <ul className="bullet-points">
      <li>✅ CSS = Style and layout for HTML</li>
      <li>✅ Syntax → selector {'{ property: value; }'}</li>
      <li>✅ Use external CSS for larger projects</li>
      <li>✅ Makes webpages attractive and organized</li>
    </ul>
  </>
)}
{activeSection === 'css-selectors' && (
  <>
    <h1>🧱 CSS Selectors</h1>
    <p className="subtitle">
      Selectors tell CSS <b>which HTML elements</b> to style. They are the link between HTML and CSS.
    </p>

    <h2>📘 Definition</h2>
    <p className="subtitle">Selectors specify the HTML elements that the CSS rules will apply to.</p>

    <h2>🧩 Types of Selectors</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Example</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Universal Selector</td>
          <td><code>* {'{ }'}</code></td>
          <td>Selects all elements</td>
        </tr>
        <tr>
          <td>Element Selector</td>
          <td><code>p {'{ }'}</code></td>
          <td>Styles all &lt;p&gt; tags</td>
        </tr>
        <tr>
          <td>Class Selector</td>
          <td><code>.title {'{ }'}</code></td>
          <td>Styles elements with <code>class="title"</code></td>
        </tr>
        <tr>
          <td>ID Selector</td>
          <td><code>#main {'{ }'}</code></td>
          <td>Styles element with <code>id="main"</code></td>
        </tr>
        <tr>
          <td>Group Selector</td>
          <td><code>h1, h2 {'{ }'}</code></td>
          <td>Styles multiple elements together</td>
        </tr>
        <tr>
          <td>Descendant Selector</td>
          <td><code>div p {'{ }'}</code></td>
          <td>Styles &lt;p&gt; inside &lt;div&gt;</td>
        </tr>
        <tr>
          <td>Attribute Selector</td>
          <td><code>input[type="text"] {'{ }'}</code></td>
          <td>Styles elements by attribute</td>
        </tr>
      </tbody>
    </table>

    <h2>💡 Example:</h2>
    <pre className="code-block">
{`p {
  color: blue;
}
#header {
  background: lightgray;
}
.button {
  padding: 10px;
}`}
    </pre>

    <h2>🎯 Key Points</h2>
    <ul className="bullet-points">
      <li>✅ Selectors choose which elements to style</li>
      <li>✅ Use <b>.</b> for class, <b>#</b> for ID</li>
      <li>✅ Combine selectors for specific targeting</li>
      <li>✅ Keep selectors simple and readable</li>
    </ul>
  </>
)}
{activeSection === 'css-colors-backgrounds-borders' && (
  <>
    <h1>🎨 Colors, Backgrounds, and Borders</h1>
    <p className="subtitle">
      CSS allows you to style elements beautifully using colors, backgrounds, and borders to enhance your webpage’s appearance.
    </p>

    <h2>🎨 1. Colors</h2>
    <p className='subtitle'>Used to set <b>text</b> and <b>element</b> colors.</p>

    <ul className="bullet-points">
      <li><code>color: red;</code> → Text color</li>
      <li><code>color: #ff0000;</code> → HEX format</li>
      <li><code>color: rgb(255, 0, 0);</code> → RGB format</li>
      <li><code>color: rgba(255, 0, 0, 0.5);</code> → RGB + transparency</li>
    </ul>

    <h2>🖼️ 2. Backgrounds</h2>
    <p className="subtitle">Used to set a background color or image behind an element.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>background-color</code></td>
          <td>Adds background color</td>
          <td><code>background-color: lightblue;</code></td>
        </tr>
        <tr>
          <td><code>background-image</code></td>
          <td>Adds background image</td>
          <td><code>background-image: url('bg.jpg');</code></td>
        </tr>
        <tr>
          <td><code>background-repeat</code></td>
          <td>Controls image repeat</td>
          <td><code>no-repeat</code>, <code>repeat-x</code></td>
        </tr>
        <tr>
          <td><code>background-size</code></td>
          <td>Adjusts image size</td>
          <td><code>cover</code>, <code>contain</code></td>
        </tr>
        <tr>
          <td><code>background-position</code></td>
          <td>Sets image position</td>
          <td><code>center</code>, <code>top right</code></td>
        </tr>
      </tbody>
    </table>

    <h2>⬛ 3. Borders</h2>
    <p>Used to create outlines or frames around elements.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>border</code></td>
          <td>Sets border style</td>
          <td><code>border: 2px solid black;</code></td>
        </tr>
        <tr>
          <td><code>border-radius</code></td>
          <td>Rounds corners</td>
          <td><code>border-radius: 10px;</code></td>
        </tr>
        <tr>
          <td><code>border-style</code></td>
          <td>Defines border type</td>
          <td><code>solid</code>, <code>dotted</code>, <code>dashed</code></td>
        </tr>
      </tbody>
    </table>

    <h2>💡 Example:</h2>
    <pre className="code-block">
{`h1 {
  color: green;
  background-color: lightyellow;
  border: 2px dashed orange;
  border-radius: 8px;
}`}
    </pre>

    <h2>🎯 Key Points</h2>
    <ul className="bullet-points">
      <li>✅ <b>color</b> → sets text color</li>
      <li>✅ <b>background-*</b> → controls background styling</li>
      <li>✅ <b>border</b> → creates outlines or frames</li>
      <li>✅ Use <b>border-radius</b> for rounded corners</li>
    </ul>
  </>
)}
{activeSection === 'css-text-font' && (
  <>
    <h1>✍️ Text and Font Styling</h1>
    <p className="subtitle">
      CSS provides properties to control text appearance — including size, color,
      alignment, spacing, and font style.
    </p>

    <h2>🧩 1. Text Properties</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>color</code></td>
          <td>Sets text color</td>
          <td><code>color: blue;</code></td>
        </tr>
        <tr>
          <td><code>text-align</code></td>
          <td>Aligns text</td>
          <td><code>text-align: center;</code></td>
        </tr>
        <tr>
          <td><code>text-decoration</code></td>
          <td>Underline / none / line-through</td>
          <td><code>text-decoration: underline;</code></td>
        </tr>
        <tr>
          <td><code>text-transform</code></td>
          <td>Change text case</td>
          <td><code>text-transform: uppercase;</code></td>
        </tr>
        <tr>
          <td><code>text-shadow</code></td>
          <td>Adds text shadow</td>
          <td><code>text-shadow: 2px 2px gray;</code></td>
        </tr>
        <tr>
          <td><code>letter-spacing</code></td>
          <td>Space between letters</td>
          <td><code>letter-spacing: 2px;</code></td>
        </tr>
        <tr>
          <td><code>line-height</code></td>
          <td>Space between lines</td>
          <td><code>line-height: 1.5;</code></td>
        </tr>
      </tbody>
    </table>

    <h2>🖋️ 2. Font Properties</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>font-family</code></td>
          <td>Sets font style</td>
          <td><code>font-family: Arial, sans-serif;</code></td>
        </tr>
        <tr>
          <td><code>font-size</code></td>
          <td>Controls text size</td>
          <td><code>font-size: 18px;</code></td>
        </tr>
        <tr>
          <td><code>font-weight</code></td>
          <td>Sets text thickness</td>
          <td><code>font-weight: bold;</code></td>
        </tr>
        <tr>
          <td><code>font-style</code></td>
          <td>Italic or normal text</td>
          <td><code>font-style: italic;</code></td>
        </tr>
        <tr>
          <td><code>font-variant</code></td>
          <td>Displays small caps</td>
          <td><code>font-variant: small-caps;</code></td>
        </tr>
      </tbody>
    </table>

    <h2>💡 Example:</h2>
    <pre className="code-block">
{`p {
  color: navy;
  font-size: 18px;
  text-align: justify;
  font-family: 'Poppins', sans-serif;
}`}
    </pre>

    <h2>🎯 Key Points</h2>
    <ul className="bullet-points">
      <li>✅ <b>text-*</b> → controls alignment, spacing, and decoration</li>
      <li>✅ <b>font-*</b> → controls typeface, size, and style</li>
      <li>✅ Use <b>Google Fonts</b> for modern typography</li>
      <li>✅ Keep text <b>readable</b> and <b>consistent</b></li>
    </ul>
  </>
)}
{activeSection === 'css-box-model' && (
  <>
    <h1>🧭 CSS Box Model</h1>
    <p className="subtitle">
      The Box Model explains how every HTML element is treated as a rectangular box with space around it — 
      made up of <b>content</b>, <b>padding</b>, <b>border</b>, and <b>margin</b>.
    </p>

    <h2>🧩 Box Model Structure</h2>
    <pre className="code-block">
{`┌──────────────────────────────┐ ← Margin (outside space)
│   ┌────────────────────────┐ │ ← Border
│   │   ┌────────────────┐   │ │ ← Padding
│   │   │   Content      │   │ │ ← Actual text/image
│   │   └────────────────┘   │ │
│   └────────────────────────┘ │
└──────────────────────────────┘`}
    </pre>

    <h2>⚙️ Box Properties</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>content</code></td>
          <td>Actual text or image</td>
          <td>—</td>
        </tr>
        <tr>
          <td><code>padding</code></td>
          <td>Space between content & border</td>
          <td><code>padding: 10px;</code></td>
        </tr>
        <tr>
          <td><code>border</code></td>
          <td>Surrounds padding</td>
          <td><code>border: 2px solid black;</code></td>
        </tr>
        <tr>
          <td><code>margin</code></td>
          <td>Space outside border</td>
          <td><code>margin: 15px;</code></td>
        </tr>
      </tbody>
    </table>

    <h2>💡 Example</h2>
    <pre className="code-block">
{`div {
  width: 200px;
  padding: 10px;
  border: 2px solid black;
  margin: 20px;
}`}
    </pre>

    <h2>📏 Total Element Width</h2>
    <p className="subtitle">
      <b>Total width = content + padding + border + margin</b>
    </p>

    <h2>🎯 Key Points</h2>
    <ul className="bullet-points">
      <li>✅ Every element = rectangular box</li>
      <li>✅ <b>Padding</b> → inside space</li>
      <li>✅ <b>Border</b> → outline around content</li>
      <li>✅ <b>Margin</b> → outside space</li>
      <li>✅ Use the Box Model to control layout precisely</li>
    </ul>
  </>
)}
{activeSection === 'css-display-visibility' && (
  <>
    <h1>🧰 Display and Visibility</h1>
    <p className="subtitle">
      The <b>display</b> and <b>visibility</b> properties control how elements appear 
      or occupy space on a webpage.
    </p>

    <h2>🧩 1. Display Property</h2>
    <p className="subtitle">Defines how an element is shown in the layout.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>block</code></td>
          <td>Starts on a new line, takes full width (<code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>)</td>
        </tr>
        <tr>
          <td><code>inline</code></td>
          <td>Stays in line, only takes needed width (<code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>)</td>
        </tr>
        <tr>
          <td><code>inline-block</code></td>
          <td>Inline + allows width/height to be set</td>
        </tr>
        <tr>
          <td><code>none</code></td>
          <td>Hides the element completely (no space taken)</td>
        </tr>
        <tr>
          <td><code>flex</code></td>
          <td>Enables flexbox layout</td>
        </tr>
        <tr>
          <td><code>grid</code></td>
          <td>Enables grid layout</td>
        </tr>
      </tbody>
    </table>

    <h2>🪄 2. Visibility Property</h2>
    <p className="subtitle">
      Controls whether an element is visible or hidden — but still affects the layout.
    </p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>visible</code></td>
          <td>Element is shown</td>
        </tr>
        <tr>
          <td><code>hidden</code></td>
          <td>Element is invisible but still takes up space</td>
        </tr>
      </tbody>
    </table>

    <h2>💡 Example</h2>
    <pre className="code-block">
{`p {
  display: inline-block;
  visibility: visible;
}`}
    </pre>

    <h2>🎯 Key Points</h2>
    <ul className="bullet-points">
      <li>✅ <b>display</b> controls how elements are laid out</li>
      <li>✅ <b>visibility</b> hides an element but keeps its space</li>
      <li>✅ <code>display: none</code> removes the element completely</li>
      <li>✅ Use <code>flex</code> or <code>grid</code> for modern responsive layouts</li>
    </ul>
  </>
)}
{activeSection === 'css-positioning' && (
  <>
    <h1>📐 CSS Positioning</h1>
    <p className="subtitle">
      The <b>position</b> property in CSS determines how elements are placed in the document
      and how they interact with other elements.
    </p>

    <h2>🧩 Position Values</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>static</code></td>
          <td>Default position. Elements appear in normal document flow.</td>
        </tr>
        <tr>
          <td><code>relative</code></td>
          <td>Positioned relative to its normal position using <code>top</code>, <code>left</code>, etc.</td>
        </tr>
        <tr>
          <td><code>absolute</code></td>
          <td>Positioned relative to the nearest positioned ancestor (removed from normal flow).</td>
        </tr>
        <tr>
          <td><code>fixed</code></td>
          <td>Stays in a fixed spot relative to the viewport, even when scrolling.</td>
        </tr>
        <tr>
          <td><code>sticky</code></td>
          <td>Scrolls normally until it reaches a defined position, then sticks.</td>
        </tr>
      </tbody>
    </table>

    <h2>🖼️ Visual Example</h2>
    <div className="position-image-container">
      <img src="/position.png" alt="CSS Positioning Examples" className="position-image" />
      <p className="image-caption">
        Illustration showing how <b>static</b>, <b>relative</b>, <b>absolute</b>, <b>fixed</b>, 
        and <b>sticky</b> elements behave in CSS layout.
      </p>
    </div>

    <h2>⚙️ Example</h2>
    <pre className="code-block">
{`div.static { position: static; }
div.relative { position: relative; top: 10px; left: 20px; }
div.absolute { position: absolute; top: 50px; left: 100px; }
div.fixed { position: fixed; top: 0; right: 0; }
div.sticky { position: sticky; top: 0; }`}
    </pre>

    <h2>🎯 Key Points</h2>
    <ul className="bullet-points">
      <li>✅ <b>static</b>: Default, follows document flow</li>
      <li>✅ <b>relative</b>: Shifts relative to itself</li>
      <li>✅ <b>absolute</b>: Positioned relative to parent</li>
      <li>✅ <b>fixed</b>: Fixed to viewport (stays on scroll)</li>
      <li>✅ <b>sticky</b>: Scrolls then sticks to top</li>
    </ul>
  </>
)}


{/* Float and Clear */}
{activeSection === "css-float-clear" && (
  <>
    <h1>⚙️ Float and Clear</h1>

    <p className="subtitle">
      The <b>float</b> property is used to align elements to the left or right, allowing text and inline elements to wrap around them. <br />
      The <b>clear</b> property controls how elements behave next to floated elements.
    </p>

    <h2>🧩 1. Float Property</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>left</td>
          <td>Element floats to the left side</td>
        </tr>
        <tr>
          <td>right</td>
          <td>Element floats to the right side</td>
        </tr>
        <tr>
          <td>none</td>
          <td>Default — no floating</td>
        </tr>
        <tr>
          <td>inherit</td>
          <td>Takes float value from parent</td>
        </tr>
      </tbody>
    </table>

    <pre className="code-block">
{`img {
  float: right;
  margin: 10px;
}`}
    </pre>

    <p className="subtitle">🧠 Commonly used for images or sidebars.</p>

    <h2>🧹 2. Clear Property</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>left</td>
          <td>No floating elements allowed on left</td>
        </tr>
        <tr>
          <td>right</td>
          <td>No floating elements allowed on right</td>
        </tr>
        <tr>
          <td>both</td>
          <td>No floating elements on either side</td>
        </tr>
        <tr>
          <td>none</td>
          <td>Default — allows floating</td>
        </tr>
      </tbody>
    </table>

    <pre className="code-block">
{`p {
  clear: both;
}`}
    </pre>

    <h2>⚠️ Float Issue</h2>
    <p className="subtitle">
      Floating elements can cause container collapse. <br />💡 Fix it by using a <b>.clearfix</b> utility class:
    </p>

    <pre className="code-block">
{`.clearfix::after {
  content: "";
  display: table;
  clear: both;
}`}
    </pre>

    <h2>🎯 Key Points</h2>
    <ul className="bullet-points">
      <li>✅ <b>float</b> aligns elements horizontally</li>
      <li>✅ <b>clear</b> prevents overlapping with floats</li>
      <li>✅ Use <b>.clearfix</b> to fix layout issues</li>
      <li>✅ Modern CSS layouts use <b>Flexbox</b> or <b>Grid</b> instead of float</li>
    </ul>
  </>
)}
{activeSection === "css-flexbox" && (
  <>
    <h1>🧱 CSS Flexbox (Flexible Box Layout)</h1>

    <p className="subtitle">
      Flexbox is a modern layout system that makes it easy to align, distribute, and space elements 
      in a container — both horizontally and vertically.
    </p>

    <h2>🧩 1. Enable Flexbox</h2>
    <pre className="code-block">
{`.container {
  display: flex;
}`}
    </pre>
    <p className="subtitle">All child elements inside become flex items.</p>

    <h2>⚙️ 2. Main Flexbox Properties</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>flex-direction</td>
          <td>Direction of items</td>
          <td>row, column</td>
        </tr>
        <tr>
          <td>justify-content</td>
          <td>Aligns items horizontally</td>
          <td>center, space-between</td>
        </tr>
        <tr>
          <td>align-items</td>
          <td>Aligns items vertically</td>
          <td>center, flex-start</td>
        </tr>
        <tr>
          <td>flex-wrap</td>
          <td>Wrap items to next line</td>
          <td>wrap, nowrap</td>
        </tr>
        <tr>
          <td>gap</td>
          <td>Space between flex items</td>
          <td>gap: 10px;</td>
        </tr>
      </tbody>
    </table>

    <h2>🧱 3. Flex Item Properties</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>flex-grow</td>
          <td>How much an item grows</td>
          <td>flex-grow: 1;</td>
        </tr>
        <tr>
          <td>flex-shrink</td>
          <td>How much it shrinks</td>
          <td>flex-shrink: 0;</td>
        </tr>
        <tr>
          <td>flex-basis</td>
          <td>Starting size</td>
          <td>flex-basis: 100px;</td>
        </tr>
        <tr>
          <td>align-self</td>
          <td>Override alignment per item</td>
          <td>align-self: flex-end;</td>
        </tr>
      </tbody>
    </table>

    <h2>💡 Example</h2>
    <pre className="code-block">
{`.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}
    </pre>

    <h2>🎯 Key Points</h2>
    <ul className="bullet-points">
      <li>✅ Use <b>display: flex</b> on parent</li>
      <li>✅ <b>justify-content</b> → horizontal alignment</li>
      <li>✅ <b>align-items</b> → vertical alignment</li>
      <li>✅ <b>flex-direction</b> → layout direction</li>
      <li>✅ Great for navbars, cards, and responsive layouts</li>
    </ul>
  </>
)}

{activeSection === "css-grid" && (
  <>
    <h1>🔲 CSS Grid Layout</h1>

    <p className="subtitle">
      CSS Grid is a two-dimensional layout system that allows you to design web pages 
      using rows and columns easily.
    </p>

    <h2>🧩 1. Enable Grid</h2>
    <pre className="code-block">
{`.container {
  display: grid;
}`}
    </pre>
    <p className="subtitle">All child elements inside become grid items.</p>

    <h2>⚙️ 2. Grid Container Properties</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>grid-template-columns</td>
          <td>Define column structure</td>
          <td>grid-template-columns: 1fr 1fr 1fr;</td>
        </tr>
        <tr>
          <td>grid-template-rows</td>
          <td>Define row structure</td>
          <td>grid-template-rows: 100px auto;</td>
        </tr>
        <tr>
          <td>gap</td>
          <td>Space between rows & columns</td>
          <td>gap: 10px;</td>
        </tr>
        <tr>
          <td>justify-items</td>
          <td>Horizontal alignment inside grid cells</td>
          <td>center</td>
        </tr>
        <tr>
          <td>align-items</td>
          <td>Vertical alignment inside grid cells</td>
          <td>center</td>
        </tr>
      </tbody>
    </table>

    <h2>🧱 3. Grid Item Properties</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>grid-column</td>
          <td>Position item across columns</td>
          <td>grid-column: 1 / 3;</td>
        </tr>
        <tr>
          <td>grid-row</td>
          <td>Position item across rows</td>
          <td>grid-row: 2 / 4;</td>
        </tr>
        <tr>
          <td>justify-self</td>
          <td>Horizontal align per item</td>
          <td>justify-self: end;</td>
        </tr>
        <tr>
          <td>align-self</td>
          <td>Vertical align per item</td>
          <td>align-self: center;</td>
        </tr>
      </tbody>
    </table>

    <h2>💡 Example</h2>
    <pre className="code-block">
{`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}`}
    </pre>

    <h2>🎯 Key Points</h2>
    <ul className="bullet-points">
      <li>✅ Grid = Rows + Columns</li>
      <li>✅ <b>fr</b> = flexible unit (fraction of space)</li>
      <li>✅ <b>gap</b> = spacing between grid cells</li>
      <li>✅ Use <b>grid-column</b> & <b>grid-row</b> to control placement</li>
      <li>✅ Perfect for page layouts, galleries, and dashboards</li>
    </ul>
  </>
)}
{activeSection === "css-units-measurements" && (
  <div className="css-topic-container">
    <h1>📋 CSS Units and Measurements</h1>

    <p className="subtitle">
      CSS uses units to define sizes — like width, height, font-size, margin, and padding.
      Units can be <strong>absolute</strong> or <strong>relative</strong>.
    </p>

    {/* 🧩 1. Absolute Units */}
    <h2>🧩 1. Absolute Units</h2>
    <p className="subtitle">Fixed sizes that don’t change with screen size.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Unit</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>px</td>
          <td>Pixels (most common)</td>
          <td><code>width: 200px;</code></td>
        </tr>
        <tr>
          <td>cm</td>
          <td>Centimeters</td>
          <td><code>margin: 2cm;</code></td>
        </tr>
        <tr>
          <td>mm</td>
          <td>Millimeters</td>
          <td><code>height: 50mm;</code></td>
        </tr>
        <tr>
          <td>in</td>
          <td>Inches</td>
          <td><code>width: 2in;</code></td>
        </tr>
        <tr>
          <td>pt</td>
          <td>Points (1/72 inch)</td>
          <td><code>font-size: 12pt;</code></td>
        </tr>
      </tbody>
    </table>

    {/* 📐 2. Relative Units */}
    <h2>📐 2. Relative Units</h2>
    <p>Sizes that adjust based on parent or viewport.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Unit</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>%</td>
          <td>Percentage of parent</td>
          <td><code>width: 80%;</code></td>
        </tr>
        <tr>
          <td>em</td>
          <td>Relative to element’s font size</td>
          <td><code>font-size: 2em;</code></td>
        </tr>
        <tr>
          <td>rem</td>
          <td>Relative to root font size</td>
          <td><code>font-size: 1.5rem;</code></td>
        </tr>
        <tr>
          <td>vw</td>
          <td>1% of viewport width</td>
          <td><code>width: 50vw;</code></td>
        </tr>
        <tr>
          <td>vh</td>
          <td>1% of viewport height</td>
          <td><code>height: 100vh;</code></td>
        </tr>
      </tbody>
    </table>

    
    <p className="subtitle">💡 Example:</p>
    <pre className="code-box" >
{`div {
  width: 50%;
  padding: 1rem;
  font-size: 16px;
}`}
</pre>
      
    

    <h2>🎯 Key Points</h2>
    <ul>
      <li>✅ Absolute units → fixed sizes</li>
      <li>✅ Relative units → responsive design</li>
      <li>✅ Use <code>em</code>, <code>rem</code>, <code>vw</code>, and <code>%</code> for flexible layouts</li>
      <li>✅ Prefer relative units for mobile-friendly websites</li>
    </ul>
  </div>
)}

{activeSection === 'css-pseudo' && (
  <>
    <h1>🌈 Pseudo-classes & Pseudo-elements</h1>
    <p className="subtitle">
      Used to style elements based on their <b>state</b> (pseudo-class) or specific parts of an element (pseudo-element).
    </p>

    <h2>🧩 1. Pseudo-classes ( : )</h2>
    <p className="subtitle">
      A pseudo-class defines a special state of an element.
    </p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Pseudo-class</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>:hover</td>
          <td>When mouse hovers</td>
          <td><code>{`button:hover { background: blue; }`}</code></td>
        </tr>
        <tr>
          <td>:active</td>
          <td>When element is clicked</td>
          <td><code>{`a:active { color: red; }`}</code></td>
        </tr>
        <tr>
          <td>:focus</td>
          <td>When element is focused</td>
          <td><code>{`input:focus { border: 2px solid green; }`}</code></td>
        </tr>
        <tr>
          <td>:nth-child(n)</td>
          <td>Selects specific child</td>
          <td><code>{`li:nth-child(2)`}</code></td>
        </tr>
        <tr>
          <td>:first-child, :last-child</td>
          <td>Selects first/last element</td>
          <td>—</td>
        </tr>
        <tr>
          <td>:checked</td>
          <td>Checkbox/radio is checked</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>

    <h2>🧱 2. Pseudo-elements ( :: )</h2>
    <p className="subtitle">
      A pseudo-element targets a specific part of an element.
    </p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Pseudo-element</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>::before</td>
          <td>Adds content before element</td>
          <td><code>{`h1::before { content: "★ "; }`}</code></td>
        </tr>
        <tr>
          <td>::after</td>
          <td>Adds content after element</td>
          <td><code>{`h1::after { content: " ✔"; }`}</code></td>
        </tr>
        <tr>
          <td>::first-letter</td>
          <td>Styles first letter</td>
          <td><code>{`p::first-letter { font-size: 24px; }`}</code></td>
        </tr>
        <tr>
          <td>::first-line</td>
          <td>Styles first line</td>
          <td><code>{`p::first-line { color: gray; }`}</code></td>
        </tr>
        <tr>
          <td>::selection</td>
          <td>Styles selected text</td>
          <td><code>{`::selection { background: yellow; }`}</code></td>
        </tr>
      </tbody>
    </table>

    <h2>🎯 Key Points</h2>
    <ul className="bullet-points">
      <li>✅ <code>:</code> → pseudo-class (state)</li>
      <li>✅ <code>::</code> → pseudo-element (part)</li>
      <li>✅ Combine with selectors for precise styling</li>
      <li>✅ Useful for hover effects, highlights, and design accents</li>
    </ul>
  </>
)}
{activeSection === "css-transitions-animations" && (
  <div className="css-topic-container">
    <h1>🧩 CSS Transitions and Animations</h1>

    <p className="subtitle">
      Used to add movement and visual effects to elements — making websites look smooth and interactive.
    </p>
    <h2>⚡ 1. Transitions</h2>
    <p className="subtitle">
      Transitions create smooth changes between two CSS states (like hover).
    </p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>transition-property</td>
          <td>Which property to animate</td>
          <td><code>color, width</code></td>
        </tr>
        <tr>
          <td>transition-duration</td>
          <td>How long it takes</td>
          <td><code>1s, 500ms</code></td>
        </tr>
        <tr>
          <td>transition-timing-function</td>
          <td>Speed pattern</td>
          <td><code>ease, linear, ease-in-out</code></td>
        </tr>
        <tr>
          <td>transition-delay</td>
          <td>When to start</td>
          <td><code>0.5s</code></td>
        </tr>
      </tbody>
    </table>

    
      <p className="subtitle">💡 Example:</p>
      <pre className="code-block">
{`button {
  background: blue;
  transition: background 0.5s ease;
}

button:hover {
  background: red;
}`}
      </pre>
    

    {/* 🎞️ 2. Animations */}
    <h2>🎞️ 2. Animations</h2>
    <p>
      Animations allow multi-step keyframe animations — more control than transitions.
    </p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>@keyframes</td>
          <td>Defines animation steps</td>
        </tr>
        <tr>
          <td>animation-name</td>
          <td>Name of animation</td>
        </tr>
        <tr>
          <td>animation-duration</td>
          <td>Duration of animation</td>
        </tr>
        <tr>
          <td>animation-iteration-count</td>
          <td>How many times to run</td>
        </tr>
        <tr>
          <td>animation-timing-function</td>
          <td>Speed pattern</td>
        </tr>
      </tbody>
    </table>

    <div className="code-box">
      <p>💡 Example:</p>
      <pre>
{`@keyframes move {
  from { left: 0; }
  to { left: 100px; }
}

div {
  position: relative;
  animation: move 2s infinite alternate;
}`}
      </pre>
    </div>

    {/* 🎯 Key Points */}
    <h2>🎯 Key Points</h2>
    <ul>
      <li>✅ <strong>Transitions</strong> → simple hover or state changes</li>
      <li>✅ <strong>Animations</strong> → complex multi-step movements</li>
      <li>✅ Use <code>@keyframes</code> for custom effects</li>
      <li>✅ Keep animations smooth and minimal for performance</li>
    </ul>
  </div>
)}
{activeSection === "css-transforms" && (
  <div className="css-topic-container">
    <h1>🎬 Transforms in CSS</h1>

    <h2>🧭 1. What is a Transform?</h2>
    <p className="subtitle">
      The <code>transform</code> property lets you visually manipulate an element’s shape, size, and position in 2D or 3D space — without affecting the document layout.
    </p>
    <p className="subtitle">
      💡 Think of it like “changing how an element looks” rather than “where it exists.”
    </p>

    {/* 🧱 2. Basic Syntax */}
    <h2>🧱 2. Basic Syntax</h2>
    <div className="code-box">
      <pre>
{`selector {
  transform: function(value);
}

/* Example */
transform: rotate(45deg) scale(1.5) translateX(100px);`}
      </pre>
    </div>

    {/* ⚙️ 3. 2D Transform Functions */}
    <h2>⚙️ 3. 2D Transform Functions</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>translate(x, y)</td>
          <td>Moves element along X and Y axes</td>
          <td><code>transform: translate(50px, 100px);</code></td>
        </tr>
        <tr>
          <td>translateX(x)</td>
          <td>Moves only horizontally</td>
          <td><code>transform: translateX(100px);</code></td>
        </tr>
        <tr>
          <td>translateY(y)</td>
          <td>Moves only vertically</td>
          <td><code>transform: translateY(-50px);</code></td>
        </tr>
        <tr>
          <td>rotate(angle)</td>
          <td>Rotates element clockwise (negative = anticlockwise)</td>
          <td><code>transform: rotate(45deg);</code></td>
        </tr>
        <tr>
          <td>scale(x, y)</td>
          <td>Increases/decreases size</td>
          <td><code>transform: scale(1.5, 2);</code></td>
        </tr>
        <tr>
          <td>scaleX(x)</td>
          <td>Scales width only</td>
          <td><code>transform: scaleX(2);</code></td>
        </tr>
        <tr>
          <td>scaleY(y)</td>
          <td>Scales height only</td>
          <td><code>transform: scaleY(0.5);</code></td>
        </tr>
        <tr>
          <td>skew(x, y)</td>
          <td>Tilts (shears) element</td>
          <td><code>transform: skew(20deg, 10deg);</code></td>
        </tr>
        <tr>
          <td>skewX(x)</td>
          <td>Skews along X-axis</td>
          <td><code>transform: skewX(30deg);</code></td>
        </tr>
        <tr>
          <td>skewY(y)</td>
          <td>Skews along Y-axis</td>
          <td><code>transform: skewY(15deg);</code></td>
        </tr>
        <tr>
          <td>matrix(a, b, c, d, e, f)</td>
          <td>Combines all transforms in one function (advanced)</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>

    {/* 🎨 4. Examples */}
    <h2>🎨 4. Examples</h2>
    <div className="code-box">
      <p>🔹 Move (Translate)</p>
      <pre>
{`div {
  transform: translate(50px, 100px);
}`}
      </pre>

      <p>🔹 Rotate</p>
      <pre>
{`div {
  transform: rotate(45deg);
}`}
      </pre>

      <p>🔹 Scale</p>
      <pre>
{`div {
  transform: scale(1.5);
}`}
      </pre>

      <p>🔹 Skew</p>
      <pre>
{`div {
  transform: skew(20deg, 10deg);
}`}
      </pre>
    </div>

    {/* 🧭 5. Transform Origin */}
    <h2>🧭 5. Transform Origin</h2>
    <p className="subtitle">
      By default, transforms happen around the center of the element.
      You can change this point using <code>transform-origin</code>.
    </p>
    <div className="code-box">
      <pre>
{`div {
  transform-origin: top left;
  transform: rotate(45deg);
}

/* Other examples */
transform-origin: 50% 50%; /* center */
transform-origin: 0 0;     /* top-left */
transform-origin: right bottom;`}
      </pre>
    </div>

    {/* 🧩 6. 3D Transforms */}
    <h2>🧩 6. 3D Transforms</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>rotateX(angle)</td>
          <td>Rotates around the X-axis</td>
        </tr>
        <tr>
          <td>rotateY(angle)</td>
          <td>Rotates around the Y-axis</td>
        </tr>
        <tr>
          <td>rotateZ(angle)</td>
          <td>Rotates around the Z-axis (same as rotate())</td>
        </tr>
        <tr>
          <td>translateZ(z)</td>
          <td>Moves element in 3D space (toward or away)</td>
        </tr>
        <tr>
          <td>scaleZ(z)</td>
          <td>Scales along the Z-axis</td>
        </tr>
        <tr>
          <td>perspective(value)</td>
          <td>Adds depth to the 3D scene</td>
        </tr>
      </tbody>
    </table>

    <div className="code-box">
      <p>💡 Example:</p>
      <pre>
{`div {
  transform: rotateY(45deg);
  transform-style: preserve-3d;
}`}
      </pre>
    </div>

    {/* ⚡ 7. Combine with Transitions */}
    <h2>⚡ 7. Combine with Transitions</h2>
    <p>
      You can mix transform and transition to create smooth effects ✨
    </p>
    <div className="code-box">
      <pre>
{`.box {
  width: 100px;
  height: 100px;
  background: coral;
  transition: transform 0.5s ease;
}

.box:hover {
  transform: scale(1.3) rotate(15deg);
}`}
      </pre>
    </div>

    {/* 🧠 8. Practical Examples */}
    <h2>🧠 8. Practical Examples</h2>
    <div className="code-box">
      <p>🔸 Rotating Button</p>
      <pre>
{`button {
  transition: transform 0.3s;
}

button:hover {
  transform: rotate(360deg);
}`}
      </pre>

      <p>🔸 Card Lift Effect</p>
      <pre>
{`.card {
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-10px) scale(1.05);
}`}
      </pre>

      <p className="subtitle">🔸 3D Flip Card</p>
      <pre>
{`.card {
  width: 200px;
  height: 200px;
  background: lightblue;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card:hover {
  transform: rotateY(180deg);
}`}
      </pre>
    </div>
  </div>
)}
{activeSection === "css-responsive" && (
  <div className="css-topic-container">
    <h1>🌍 Responsive Web Design (RWD)</h1>

    {/* 🧭 1. What is Responsive Web Design? */}
    <h2>🧭 1. What is Responsive Web Design?</h2>
    <p className="subtitle">
      Responsive Web Design means making your web pages adapt to different screen sizes and devices automatically.
    </p>
    <p>
      Your layout, images, and text resize or rearrange to fit the device — without users having to zoom or scroll horizontally.
    </p>
    <p>💡 It ensures one website works everywhere — desktop, tablet, and mobile.</p>

    {/* ⚙️ 2. Core Principles of RWD */}
    <h2>⚙️ 2. Core Principles of RWD</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Principle</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>📏 Fluid Layouts</td>
          <td>Use relative units like %, em, or rem instead of fixed px.</td>
        </tr>
        <tr>
          <td>🧩 Flexible Images</td>
          <td>Make images scale automatically with screen width.</td>
        </tr>
        <tr>
          <td>📱 Media Queries</td>
          <td>Apply different styles for different screen sizes.</td>
        </tr>
        <tr>
          <td>🧭 Mobile-First Design</td>
          <td>Design for small screens first, then enhance for larger ones.</td>
        </tr>
      </tbody>
    </table>

    {/* 🧮 3. Fluid Layouts */}
    <h2>🧮 3. Fluid Layouts</h2>
    <p className="subtitle">
      Instead of fixed widths (like <code>width: 1200px</code>), use percentages so the layout stretches or shrinks.
    </p>
    <div className="code-box">
      <pre>
{`.container {
  width: 90%;
  margin: auto;
}`}
      </pre>
    </div>
    <p>💡 The container adapts to any screen width.</p>

    {/* 🖼️ 4. Flexible Images */}
    <h2>🖼️ 4. Flexible Images</h2>
    <div className="code-box">
      <pre>
{`img {
  max-width: 100%;
  height: auto;
}`}
      </pre>
    </div>
    <p>💡 Prevents images from overflowing on small screens.</p>

    {/* 📱 5. Media Queries */}
    <h2>📱 5. Media Queries</h2>
    <p>Media queries let you apply different styles for different screen sizes.</p>
    <div className="code-box">
      <pre>
{`@media (condition) {
  /* CSS rules */
}

/* Example */
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`}
      </pre>
    </div>
    <p>💡 <b>max-width</b> → applies when the screen is smaller than that value.</p>
    <p>💡 <b>min-width</b> → applies when the screen is larger than that value.</p>

    {/* 🧱 6. Common Breakpoints */}
    <h2>🧱 6. Common Breakpoints</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Device</th>
          <th>Width Range</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>📱 Mobile</td>
          <td>0 – 600px</td>
          <td>@media (max-width: 600px)</td>
        </tr>
        <tr>
          <td>💻 Tablet</td>
          <td>601px – 992px</td>
          <td>@media (max-width: 992px)</td>
        </tr>
        <tr>
          <td>🖥️ Desktop</td>
          <td>993px – 1200px+</td>
          <td>@media (min-width: 993px)</td>
        </tr>
      </tbody>
    </table>

    <div className="code-box">
      <pre>
{`/* Mobile */
@media (max-width: 600px) {
  .container { background: pink; }
}

/* Tablet */
@media (min-width: 601px) and (max-width: 992px) {
  .container { background: lightgreen; }
}

/* Desktop */
@media (min-width: 993px) {
  .container { background: lightblue; }
}`}
      </pre>
    </div>

    {/* 🧭 7. Mobile-First Design */}
    <h2>🧭 7. Mobile-First Design</h2>
    <div className="code-box">
      <pre>
{`/* Mobile first */
.container {
  flex-direction: column;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}`}
      </pre>
    </div>
    <p>💡 Easier to maintain and loads faster on mobile devices.</p>

    {/* 🧩 8. Responsive Typography */}
    <h2>🧩 8. Responsive Typography</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Unit</th>
          <th>Based On</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>em</td>
          <td>Parent font size</td>
          <td>font-size: 1.2em;</td>
        </tr>
        <tr>
          <td>rem</td>
          <td>Root (html) font size</td>
          <td>font-size: 1.5rem;</td>
        </tr>
        <tr>
          <td>vw, vh</td>
          <td>Viewport width/height</td>
          <td>font-size: 2vw;</td>
        </tr>
      </tbody>
    </table>

    <div className="code-box">
      <pre>
{`h1 {
  font-size: 4vw;
}`}
      </pre>
    </div>

    {/* 🧰 9. Responsive Navigation Menu */}
    <h2>🧰 9. Responsive Navigation Menu</h2>
    <div className="code-box">
      <pre>
{`nav ul {
  display: flex;
  gap: 20px;
}

@media (max-width: 600px) {
  nav ul { display: none; }
  .menu-icon { display: block; }
}`}
      </pre>
    </div>

    {/* 🎨 10. Using Flexbox & Grid */}
    <h2>🎨 10. Using Flexbox & Grid for Responsiveness</h2>
    <div className="code-box">
      <pre>
{`.container {
  display: flex;
  flex-wrap: wrap;
}

.box {
  flex: 1 1 300px;
  margin: 10px;
}`}
      </pre>

      <pre>
{`.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}`}
      </pre>
    </div>

    {/* 🧠 11. Viewport Meta Tag */}
    <h2>🧠 11. Viewport Meta Tag (HTML)</h2>
    <div className="code-box">
      <pre>
{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
      </pre>
    </div>

    {/* 🧩 12. Example: Fully Responsive Layout */}
    <h2>🧩 12. Example: Fully Responsive Layout</h2>
    <div className="code-box">
      <pre>
{`<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.box {
  flex: 1 1 300px;
  height: 100px;
  background: coral;
  color: white;
  text-align: center;
  line-height: 100px;
  font-size: 1.5rem;
}

@media (max-width: 600px) {
  .box {
    flex: 1 1 100%;
  }
}`}
      </pre>
    </div>

    <p>✅ Works beautifully on desktop, tablet, and mobile.</p>
  </div>
)}
{activeSection === "css-variables" && (
  <div className="css-topic-container">
    <h1>🧮 CSS Variables (Custom Properties)</h1>

    {/* 💡 1. What are CSS Variables */}
    <h2>💡 1. What are CSS Variables?</h2>
    <p className="subtitle">
      CSS Variables (also called <strong>Custom Properties</strong>) let you store values
      like colors, fonts, and sizes in one place and reuse them throughout your CSS.
    </p>
    <p>
      ✅ Think of them like variables in programming — change one value, and it updates everywhere!
    </p>

    {/* 🧩 2. Basic Syntax */}
    <h2>🧩 2. Basic Syntax</h2>
    <div className="code-box">
      <pre>
{`:root {
  --main-color: #3498db;
  --font-size: 18px;
}

/* Use them */
button {
  background-color: var(--main-color);
  font-size: var(--font-size);
}`}
      </pre>
    </div>

    {/* 🧭 3. Why Use CSS Variables */}
    <h2>🧭 3. Why Use CSS Variables?</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Benefit</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>🎯 Consistency</td>
          <td>Keep colors, sizes, and fonts uniform across the site</td>
        </tr>
        <tr>
          <td>⚡ Easy Updates</td>
          <td>Change one variable → updates everywhere</td>
        </tr>
        <tr>
          <td>🧩 Reusability</td>
          <td>Use the same variable in multiple selectors</td>
        </tr>
        <tr>
          <td>🧠 Dynamic Styling</td>
          <td>Can be changed with JavaScript (for themes, animations, etc.)</td>
        </tr>
      </tbody>
    </table>

    {/* 🎨 4. Using :root for Global Variables */}
    <h2>🎨 4. Using :root for Global Variables</h2>
    <p>
      The <code>:root</code> selector refers to the topmost element (<code>&lt;html&gt;</code>).
      It’s the perfect place to define global variables.
    </p>
    <div className="code-box">
      <pre>
{`:root {
  --primary-color: #ff6f61;
  --secondary-color: #4caf50;
  --font-main: 'Poppins', sans-serif;
}

h1 {
  color: var(--primary-color);
  font-family: var(--font-main);
}
button {
  background: var(--secondary-color);
}`}
      </pre>
    </div>

    {/* 🧱 5. Local (Scoped) Variables */}
    <h2>🧱 5. Local (Scoped) Variables</h2>
    <p>
      Variables can also be defined inside selectors, making them available only inside that scope.
    </p>
    <div className="code-box">
      <pre>
{`.card {
  --card-bg: #fff8e1;
  background: var(--card-bg);
}`}
      </pre>
    </div>
    <p>🧠 That variable (<code>--card-bg</code>) is only available inside <code>.card</code> — not globally.</p>

    {/* ⚙️ 6. Fallback Values */}
    <h2>⚙️ 6. Fallback Values</h2>
    <div className="code-box">
      <pre>
{`div {
  color: var(--text-color, black);
}`}
      </pre>
    </div>
    <p>If <code>--text-color</code> isn’t defined, it will use <code>black</code>.</p>

    {/* 🌈 7. Practical Example */}
    <h2>🌈 7. Practical Example</h2>
    <div className="code-box">
      <pre>
{`:root {
  --primary: #007bff;
  --secondary: #6c757d;
  --radius: 8px;
  --padding: 10px 20px;
}

button {
  background: var(--primary);
  border-radius: var(--radius);
  padding: var(--padding);
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background: var(--secondary);
}`}
      </pre>
    </div>

    {/* 🧮 8. Variables + Dark Mode Example */}
    <h2>🧮 8. Variables + Dark Mode Example</h2>
    <div className="code-box">
      <pre>
{`:root {
  --bg: #ffffff;
  --text: #222222;
}

body.dark {
  --bg: #222222;
  --text: #ffffff;
}

body {
  background-color: var(--bg);
  color: var(--text);
  transition: 0.3s;
}`}
      </pre>
    </div>
    <p>💡 Toggling the class <code>dark</code> on the body changes the entire theme dynamically!</p>

    {/* ⚡ 9. Change Variables with JavaScript */}
    <h2>⚡ 9. Change Variables with JavaScript</h2>
    <div className="code-box">
      <pre>
{`document.documentElement.style.setProperty('--primary', '#ff5733');`}
      </pre>
    </div>
    <p>💡 Useful for theme switchers, sliders, or user preferences.</p>

    {/* 🧠 10. CSS Variables vs. Preprocessor Variables */}
    <h2>🧠 10. CSS Variables vs. Preprocessor Variables</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>CSS Variables</th>
          <th>SCSS/LESS Variables</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Runs in</td>
          <td>Browser</td>
          <td>Preprocessor (compiled)</td>
        </tr>
        <tr>
          <td>Can change at runtime</td>
          <td>✅ Yes</td>
          <td>❌ No</td>
        </tr>
        <tr>
          <td>Scoped</td>
          <td>✅ Yes</td>
          <td>❌ No</td>
        </tr>
        <tr>
          <td>Syntax</td>
          <td>--name / var(--name)</td>
          <td>$name</td>
        </tr>
      </tbody>
    </table>

    {/* 🧩 11. Mini Project — Theme Toggle Example */}
    <h2>🧩 11. Mini Project — Theme Toggle Example</h2>
    <div className="code-box">
      <pre>
{`<button id="toggle">Toggle Theme</button>
<h1>Hello CSS Variables!</h1>

:root {
  --bg: white;
  --text: black;
}

body {
  background: var(--bg);
  color: var(--text);
  transition: 0.5s;
}

.dark {
  --bg: black;
  --text: white;
}

document.getElementById("toggle").onclick = () =>
  document.body.classList.toggle("dark");`}
      </pre>
    </div>

    {/* ✅ Summary */}
    <h2>✅ Summary</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Define variable</td>
          <td>--name: value;</td>
          <td>--main-color: blue;</td>
        </tr>
        <tr>
          <td>Use variable</td>
          <td>var(--name)</td>
          <td>color: var(--main-color);</td>
        </tr>
        <tr>
          <td>Global variables</td>
          <td>Inside :root</td>
          <td>Applies everywhere</td>
        </tr>
        <tr>
          <td>Scoped variables</td>
          <td>Inside a selector</td>
          <td>Local to that block</td>
        </tr>
        <tr>
          <td>Fallback</td>
          <td>Second argument in var()</td>
          <td>var(--size, 20px)</td>
        </tr>
      </tbody>
    </table>
  </div>
)}
{activeSection === "css-advanced" && (
  <div className="css-topic-container">
    <h1>🎭 CSS Advanced Topics</h1>

    {/* 🧭 Overview */}
    <h2>🧭 Overview</h2>
    <p className="subtitle">
      This section covers key modern CSS concepts like gradients, filters, blend modes,
      shadows, clip-paths, pseudo-elements, and advanced techniques for clean, responsive, and interactive design.
    </p>
    <ul>
      <li>🎨 CSS Gradients</li>
      <li>🪄 Filters & Blend Modes</li>
      <li>🌫️ Shadows (Box & Text)</li>
      <li>✂️ Clipping & Masking</li>
      <li>🖼️ Object-fit & Object-position</li>
      <li>🔹 Pseudo-elements (::before, ::after)</li>
      <li>🧮 Z-index & Stacking context</li>
      <li>🧭 Scroll Behavior</li>
      <li>📏 CSS Functions (calc, clamp, etc.)</li>
      <li>💡 CSS Architecture (BEM, DRY)</li>
    </ul>

    {/* 🎨 1. Gradients */}
    <h2>🎨 1. Gradients</h2>
    <p>Gradients let you blend multiple colors smoothly — no images needed.</p>
    <div className="code-box">
      <pre>
{`/* 🔹 Linear Gradient */
background: linear-gradient(to right, #ff6a00, #ee0979);

/* 🔹 Radial Gradient */
background: radial-gradient(circle, #ff9a9e, #fad0c4);

/* 🔹 Conic Gradient */
background: conic-gradient(from 90deg, red, yellow, green, blue, red);`}
      </pre>
    </div>

    {/* 🧊 2. CSS Filters */}
    <h2>🧊 2. CSS Filters</h2>
    <p>
      Filters apply effects like blur, brightness, and contrast to elements or images.
    </p>
    <div className="code-box">
      <pre>
{`img {
  filter: grayscale(100%) blur(2px) brightness(120%);
}`}
      </pre>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th>Filter</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>blur(px)</td><td>blur(5px)</td></tr>
        <tr><td>brightness(%)</td><td>brightness(120%)</td></tr>
        <tr><td>contrast(%)</td><td>contrast(150%)</td></tr>
        <tr><td>grayscale(%)</td><td>grayscale(100%)</td></tr>
        <tr><td>invert(%)</td><td>invert(100%)</td></tr>
        <tr><td>saturate(%)</td><td>saturate(200%)</td></tr>
        <tr><td>sepia(%)</td><td>sepia(80%)</td></tr>
      </tbody>
    </table>

    {/* 🌈 3. Blend Modes */}
    <h2>🌈 3. Blend Modes</h2>
    <div className="code-box">
      <pre>
{`div {
  background: url('image.jpg');
  mix-blend-mode: multiply;
}`}
      </pre>
    </div>
    <p>🎨 Common values: multiply, overlay, screen, difference, lighten, darken.</p>

    {/* 🌫️ 4. Shadows */}
    <h2>🌫️ 4. Shadows</h2>
    <div className="code-box">
      <pre>
{`/* 🔹 Box Shadow */
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);

/* 🔹 Text Shadow */
text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);`}
      </pre>
    </div>

    {/* ✂️ 5. Clip-path & Masking */}
    <h2>✂️ 5. Clip-path & Masking</h2>
    <div className="code-box">
      <pre>
{`/* 🔹 Circle Shape */
img {
  clip-path: circle(50% at center);
}

/* 🔹 Polygon Example */
div {
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
}`}
      </pre>
    </div>

    {/* 📐 6. Object-fit & Object-position */}
    <h2>📐 6. Object-fit & Object-position</h2>
    <div className="code-box">
      <pre>
{`img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
}`}
      </pre>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>object-fit: cover;</td><td>Fills container without distortion</td></tr>
        <tr><td>object-fit: contain;</td><td>Shows full image (may leave space)</td></tr>
        <tr><td>object-position</td><td>Adjusts image focus (e.g., left 20%)</td></tr>
      </tbody>
    </table>

    {/* 🧩 7. Pseudo-elements */}
    <h2>🧩 7. Pseudo-elements</h2>
    <div className="code-box">
      <pre>
{`h1::before {
  content: "✨ ";
}
h1::after {
  content: " ✨";
}`}
      </pre>
    </div>
    <p>
      💡 Use them for decorative icons, highlights, tooltips, or custom underline effects.
    </p>

    {/* 🧮 8. Z-index & Stacking Context */}
    <h2>🧮 8. Z-index & Stacking Context</h2>
    <div className="code-box">
      <pre>
{`div {
  position: absolute;
  z-index: 10;
}`}
      </pre>
    </div>
    <p>
      💡 Higher z-index = on top (works only with positioned elements).
    </p>

    {/* 🧭 9. Smooth Scrolling */}
    <h2>🧭 9. Smooth Scrolling</h2>
    <div className="code-box">
      <pre>
{`html {
  scroll-behavior: smooth;
}`}
      </pre>
    </div>

    {/* 🧠 10. CSS Math Functions */}
    <h2>🧠 10. CSS Math Functions</h2>
    <div className="code-box">
      <pre>
{`/* calc() */
width: calc(100% - 100px);

/* clamp() */
font-size: clamp(1rem, 2vw, 2rem);`}
      </pre>
    </div>

    {/* 🧮 11. Advanced Variables + Transitions */}
    <h2>🧮 11. Advanced Use of Variables + Transitions</h2>
    <div className="code-box">
      <pre>
{`:root {
  --hue: 200;
}

button {
  background-color: hsl(var(--hue), 80%, 50%);
  transition: --hue 0.5s ease;
}

button:hover {
  --hue: 340;
}`}
      </pre>
    </div>

    {/* 🏗️ 12. CSS Architecture Tips */}
    <h2>🏗️ 12. CSS Architecture Tips</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>BEM</td><td>Clean naming convention</td><td>.card__title--highlight</td></tr>
        <tr><td>DRY Principle</td><td>Don’t Repeat Yourself</td><td>Reuse variables & classes</td></tr>
        <tr><td>Modular CSS</td><td>Break styles into components</td><td>SCSS partials</td></tr>
        <tr><td>Utility-first</td><td>Small reusable classes</td><td>.p-4, .text-center</td></tr>
      </tbody>
    </table>

    {/* 💫 13. Practical Example — Stylish Card */}
    <h2>💫 13. Practical Example — Stylish Card</h2>
    <div className="code-box">
      <pre>
{`<div class="card">
  <h2>Beautiful CSS!</h2>
  <p>Advanced styles make your UI shine ✨</p>
</div>

.card {
  width: 300px;
  padding: 20px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: white;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 15px 30px rgba(0,0,0,0.3);
}`}
      </pre>
    </div>

    {/* ✅ Summary */}
    <h2>✅ Summary Table</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Topic</th>
          <th>Use</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Gradients</td><td>Smooth color transitions</td></tr>
        <tr><td>Filters</td><td>Image effects</td></tr>
        <tr><td>Blend Modes</td><td>Mix background & content colors</td></tr>
        <tr><td>Shadows</td><td>Add depth</td></tr>
        <tr><td>Clip-path</td><td>Create shapes</td></tr>
        <tr><td>Object-fit</td><td>Control image layout</td></tr>
        <tr><td>Pseudo-elements</td><td>Add extra visuals</td></tr>
        <tr><td>Z-index</td><td>Layer control</td></tr>
        <tr><td>calc(), clamp()</td><td>Responsive math</td></tr>
        <tr><td>Smooth Scroll</td><td>Better UX</td></tr>
        <tr><td>BEM / DRY</td><td>Maintainable code</td></tr>
      </tbody>
    </table>
  </div>
)}
{activeSection === "css-modern" && (
  <>
    <h1>🧠 Modern CSS Features</h1>
    <p className="subtitle" >
      Modern CSS brings powerful tools that make styling easier, cleaner, and
      more dynamic — no need for complex hacks or JavaScript workarounds!
    </p>

    <h2>🚀 1. CSS Grid</h2>
    <p className="subtitle">
      CSS Grid is a two-dimensional layout system that helps you easily create
      responsive and complex web layouts.
    </p>
    <pre>
{`container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`}
    </pre>
    <p className="subtitle">💡 Great for: dashboards, galleries, and multi-column layouts.</p>

    <h2>📐 2. Flexbox</h2>
    <p className="subtitle">
      Flexbox provides one-dimensional layout control — aligning, spacing, and
      distributing items within a container.
    </p>
    <pre>
{`container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}
    </pre>

    <h2>🎨 3. CSS Variables (Custom Properties)</h2>
    <p className="subtitle">
      Reusable variables for colors, fonts, and spacing — dynamic and easy to
      update.
    </p>
    <pre>
{`:root {
  --main-color: #4caf50;
}
button {
  background-color: var(--main-color);
}`}
    </pre>

    <h2>🧩 4. clamp(), min(), max()</h2>
    <p className="subtitle">
      These functions allow responsive sizing that automatically adapts to
      screen width.
    </p>
    <pre>
{`font-size: clamp(1rem, 2vw, 2rem);`}
    </pre>
    <p className="subtitle">
      💡 Ensures text stays readable on all devices without extra media queries.
    </p>

    <h2>🌈 5. :is() and :where()</h2>
    <p className="subtitle">
      Simplify complex selectors by grouping them together while keeping
      specificity low.
    </p>
    <pre>
{`nav :is(a, button) {
  color: white;
  text-decoration: none;
}`}
    </pre>

    <h2>🎭 6. Subgrid</h2>
    <p className="subtitle">
      Lets nested grid items align with the parent grid — keeping layouts more
      consistent.
    </p>
    <pre>
{`article {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
section {
  display: subgrid;
  grid-template-columns: inherit;
}`}
    </pre>

    <h2>🔁 7. Container Queries</h2>
    <p className="subtitle">
      A modern alternative to media queries — adjusts styles based on the size
      of the parent container, not the viewport.
    </p>
    <pre>
{`@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}`}
    </pre>

    <h2>🎞️ 8. CSS Nesting</h2>
    <p className="subtitle">
      Write cleaner, nested CSS (like SCSS) — now natively supported in modern
      browsers.
    </p>
    <pre>
{`card {
  padding: 1rem;
  h2 {
    color: #333;
  }
}`}
    </pre>

    <h2>✨ 9. accent-color</h2>
    <p className="subtitle">
      Quickly change the highlight color of form controls like checkboxes and
      radio buttons.
    </p>
    <pre>
{`input[type="checkbox"] {
  accent-color: #ff6f61;
}`}
    </pre>

    <h2>🎬 10. @property (Animating Variables)</h2>
    <p className="subtitle">
      Allows you to animate CSS variables smoothly — perfect for theme or color
      transitions.
    </p>
    <pre>
{`@property --hue {
  syntax: '<number>';
  inherits: false;
  initial-value: 200;
}

div {
  background-color: hsl(var(--hue), 70%, 50%);
  transition: --hue 1s;
}

div:hover {
  --hue: 340;
}`}
    </pre>

    <h2>🌍 11. has() Selector</h2>
    <p className="subtitle">
      The powerful parent selector! Enables styling a parent element based on
      its children.
    </p>
    <pre>
{`article:has(img) {
  border: 2px solid #4caf50;
}`}
    </pre>

    <h2>⚡ 12. Scroll Snap</h2>
    <p className="subtitle">
      Create scrollable sections that snap neatly into place like carousels.
    </p>
    <pre>
{`.container {
  scroll-snap-type: x mandatory;
  overflow-x: auto;
}
.section {
  scroll-snap-align: center;
}`}
    </pre>

    <h2>🧠 Summary</h2>
    <ul>
      <li>✅ Grid & Flexbox for powerful layouts</li>
      <li>✅ clamp(), min(), max() for responsive values</li>
      <li>✅ :is(), :where(), :has() for smarter selectors</li>
      <li>✅ CSS Variables + @property for animations</li>
      <li>✅ Container queries for adaptive design</li>
      <li>✅ Native nesting for clean CSS</li>
    </ul>

    <p className="subtitle">
      🚀 Modern CSS empowers developers to build dynamic, responsive, and clean
      designs with less code and more flexibility.
    </p>
  </>
)}
{activeSection === "css-frameworks" && (
  <>
    <h1>🧱 CSS Frameworks</h1>
    <p className="subtitle">
      A CSS Framework is a pre-written collection of CSS rules, classes, and
      components that help you design websites faster — no need to start from
      scratch.
    </p>

    <h2>🧩 1. What is a CSS Framework?</h2>
    <p>
      CSS Frameworks act like design toolkits containing pre-styled elements —
      buttons, grids, navbars, modals, etc.  
      💡 Think of it as a ready-made foundation for your website layout.
    </p>

    <h2>⚙️ 2. Why Use a CSS Framework?</h2>
    <ul>
      <li>⚡ Build UIs faster with predefined styles</li>
      <li>📱 Automatically responsive layouts</li>
      <li>🎨 Consistent design across pages</li>
      <li>🧩 Ready-to-use components (buttons, cards, modals)</li>
      <li>🧠 Cross-browser compatibility</li>
    </ul>

    <h2>🏗️ 3. Popular CSS Frameworks</h2>
    <table>
      <thead>
        <tr>
          <th>Framework</th>
          <th>Description</th>
          <th>Best For</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>🟣 Bootstrap</td>
          <td>Most popular framework with grid & UI components</td>
          <td>Beginners → Advanced projects</td>
        </tr>
        <tr>
          <td>🔵 Tailwind CSS</td>
          <td>Utility-first with atomic classes</td>
          <td>Custom designs & prototyping</td>
        </tr>
        <tr>
          <td>🟢 Bulma</td>
          <td>Lightweight & flexbox-based</td>
          <td>Simple, modern layouts</td>
        </tr>
        <tr>
          <td>🟠 Foundation</td>
          <td>Enterprise-grade responsive framework</td>
          <td>Professional apps</td>
        </tr>
        <tr>
          <td>🟣 Materialize CSS</td>
          <td>Implements Google’s Material Design</td>
          <td>Apps with Material look</td>
        </tr>
        <tr>
          <td>⚪ Semantic UI</td>
          <td>Readable, human-friendly class names</td>
          <td>Clean, semantic markup</td>
        </tr>
      </tbody>
    </table>

    <h2>🎨 4. Bootstrap Overview</h2>
    <p>
      Bootstrap provides responsive grids, components, and utilities for fast
      UI development.
    </p>
    <pre>
{`<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`}
    </pre>

    <h3>Example:</h3>
    <pre>
{`<div class="container text-center">
  <div class="row">
    <div class="col bg-primary text-white p-3">Column 1</div>
    <div class="col bg-success text-white p-3">Column 2</div>
    <div class="col bg-danger text-white p-3">Column 3</div>
  </div>
</div>`}
    </pre>

    <h3>Common Bootstrap Classes</h3>
    <ul>
      <li><b>Colors:</b> bg-primary, text-danger</li>
      <li><b>Spacing:</b> p-3, m-2</li>
      <li><b>Flexbox:</b> d-flex, justify-content-center</li>
      <li><b>Typography:</b> fw-bold, text-center</li>
      <li><b>Buttons:</b> btn, btn-outline-dark</li>
    </ul>

    <h2>💨 5. Tailwind CSS Overview</h2>
    <p>
      Tailwind CSS is a <b>utility-first</b> framework where every design
      property is controlled via a class name — giving full customization power.
    </p>
    <pre>
{`<script src="https://cdn.tailwindcss.com"></script>`}
    </pre>

    <h3>Example:</h3>
    <pre>
{`<div class="max-w-sm mx-auto bg-blue-500 text-white p-6 rounded-xl shadow-lg text-center">
  <h2 class="text-2xl font-bold mb-2">Tailwind Card</h2>
  <p class="text-sm opacity-90">Built with utility classes!</p>
</div>`}
    </pre>

    <h3>Common Tailwind Classes</h3>
    <ul>
      <li><b>Colors:</b> bg-red-500, text-gray-700</li>
      <li><b>Spacing:</b> p-4, mt-2</li>
      <li><b>Typography:</b> text-xl, font-bold</li>
      <li><b>Layout:</b> flex, grid, justify-center</li>
      <li><b>Borders:</b> rounded-lg</li>
      <li><b>Effects:</b> shadow-lg, hover:scale-105</li>
      <li><b>Responsive:</b> md:flex, lg:text-2xl</li>
    </ul>

    <h2>🧩 6. Bootstrap vs Tailwind</h2>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Bootstrap</th>
          <th>Tailwind CSS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Style Type</td>
          <td>Pre-styled components</td>
          <td>Utility-first</td>
        </tr>
        <tr>
          <td>Customization</td>
          <td>Moderate</td>
          <td>Extremely high</td>
        </tr>
        <tr>
          <td>Speed</td>
          <td>Faster to start</td>
          <td>Faster to customize</td>
        </tr>
        <tr>
          <td>Best For</td>
          <td>Beginners / standard layouts</td>
          <td>Custom UI designers</td>
        </tr>
      </tbody>
    </table>

    <h2>🧱 7. Other Frameworks</h2>
    <h3>🔸 Bulma</h3>
    <pre>
{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
<div class="box has-background-warning">Hello Bulma!</div>`}
    </pre>

    <h3>🔸 Materialize CSS</h3>
    <pre>
{`<link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet">
<button class="btn waves-effect waves-light">Click me</button>`}
    </pre>

    <h3>🔸 Foundation</h3>
    <p>Enterprise-ready framework by Zurb with strong accessibility support.</p>

    <h2>⚡ 8. When to Use a Framework</h2>
    <ul>
      <li>⚡ Quick prototype → Bootstrap / Tailwind</li>
      <li>📱 Mobile-first UI → Bootstrap / Bulma</li>
      <li>🎨 Custom design system → Tailwind</li>
      <li>💎 Material look → Materialize</li>
      <li>🏢 Enterprise projects → Foundation</li>
    </ul>

    <h2>🧠 9. Framework + Custom CSS</h2>
    <pre>
{`.custom-btn {
  background: linear-gradient(45deg, #ff6a00, #ee0979);
  color: white;
  border: none;
}
<button class="btn custom-btn">Custom Gradient Button</button>`}
    </pre>

    <p>
      💡 Combine framework structure with your own styles for unique designs.
    </p>

    <h2>🧩 10. Mini Project — Responsive Navbar (Bootstrap)</h2>
    <pre>
{`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">MySite</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="menu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>`}
    </pre>

    <p className="note">
      ✅ Bootstrap Navbar automatically adapts to all screen sizes — no extra
      CSS required!
    </p>

    <h2>🧾 Summary</h2>
    <ul>
      <li>🎨 <b>Bootstrap</b> – Pre-styled, beginner-friendly</li>
      <li>💨 <b>Tailwind</b> – Utility-first & flexible</li>
      <li>🟢 <b>Bulma</b> – Simple & clean</li>
      <li>🔹 <b>Materialize</b> – Google-style UI</li>
      <li>🏗️ <b>Foundation</b> – Enterprise-level framework</li>
    </ul>
  </>
)}
{activeSection === "css-mini-projects" && (
  <>
    <h1>🚀 21. Mini Projects (Hands-on Practice)</h1>
    <p className="subtitle">
      Below are <span className="highlight">10 practical mini projects</span> — from beginner to advanced — covering
      pure CSS and frameworks like <strong>Bootstrap</strong> and <strong>Tailwind CSS</strong>.
    </p>

    <h2>🧩 1. Personal Portfolio Website</h2>
    <p>
      <strong>Skills Used:</strong> HTML, CSS, Flexbox, Grid, Transitions <br />
      <strong>Goal:</strong> Create your own digital resume page.
    </p>
    <ul>
      <li>Profile section with image and bio</li>
      <li>Skills with progress bars</li>
      <li>Projects gallery</li>
      <li>Contact form</li>
    </ul>
    <p>💡 Add hover animation on project cards and smooth scrolling between sections.</p>

    <h2>🎨 2. Product Landing Page</h2>
    <p>
      <strong>Skills Used:</strong> CSS Grid, Typography, Buttons, Gradients <br />
      <strong>Goal:</strong> Design a clean, responsive landing page.
    </p>
    <ul>
      <li>Header + Navigation</li>
      <li>Product showcase</li>
      <li>Pricing plans</li>
      <li>Footer with social links</li>
    </ul>
    <p>💡 Use Bootstrap’s grid system for responsiveness.</p>

    <h2>🕹️ 3. Interactive Image Gallery</h2>
    <p>
      <strong>Skills Used:</strong> Flexbox, Hover Effects, Transitions <br />
      <strong>Goal:</strong> Display images that zoom or fade on hover.
    </p>
    <p>💡 Use <code>:hover</code>, <code>transform: scale()</code>, and <code>transition</code> for smooth zooms.</p>

    <h2>💡 4. Responsive Navbar</h2>
    <p>
      <strong>Skills Used:</strong> Media Queries, Flexbox, Positioning <br />
      <strong>Goal:</strong> Build a navbar that collapses into a hamburger menu on small screens.
    </p>
    <p>💡 Try using Bootstrap’s navbar component for quick setup.</p>

    <h2>🧮 5. Calculator UI</h2>
    <p>
      <strong>Skills Used:</strong> CSS Grid, Box Shadow, Hover States <br />
      <strong>Goal:</strong> Create a calculator layout (you can later add JS logic!).
    </p>

    <h2>🧱 6. Pricing Table</h2>
    <p>
      <strong>Skills Used:</strong> Flexbox, Gradients, Hover Effects <br />
      <strong>Goal:</strong> Build 3–4 pricing cards for different plans.
    </p>
    <p>💡 Highlight the “Recommended” plan with color or shadow.</p>

    <h2>📱 7. Responsive Blog Page</h2>
    <p>
      <strong>Skills Used:</strong> CSS Grid, Media Queries, Typography <br />
      <strong>Goal:</strong> Display blog posts in a responsive grid.
    </p>
    <p>💡 Use Tailwind classes like <code>grid-cols-1 md:grid-cols-2 lg:grid-cols-3</code>.</p>

    <h2>🎬 8. Animated Login Form</h2>
    <p>
      <strong>Skills Used:</strong> CSS Animation, Transitions, Variables <br />
      <strong>Goal:</strong> Create a login form with smooth animations.
    </p>
    <p>💡 Try label float-up or glowing borders using <code>@keyframes</code>.</p>

    <h2>🌈 9. Portfolio Card Hover Effects</h2>
    <p>
      <strong>Skills Used:</strong> Transform, Transition, Pseudo-elements <br />
      <strong>Goal:</strong> Add 3D hover animations to portfolio cards.
    </p>
    <pre>
{`.card:hover {
  transform: rotateY(10deg) scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}`}
    </pre>

    <h2>🧭 10. Travel Website (Final Project)</h2>
    <p>
      <strong>Skills Used:</strong> Flexbox, Grid, Responsive Design, Frameworks, Animations <br />
      <strong>Goal:</strong> Build a multi-section responsive travel site.
    </p>
    <ul>
      <li>Hero section (banner + call to action)</li>
      <li>Destination cards</li>
      <li>Testimonials</li>
      <li>Footer with social icons</li>
    </ul>
    <p>💡 Use Bootstrap or Tailwind for faster development.</p>

    <h2>⚙️ Bonus Project Ideas</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Project</th>
          <th>Concepts</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>🎧 Music Player UI</td>
          <td>Animation, Transform, Positioning</td>
        </tr>
        <tr>
          <td>🕒 Digital Clock</td>
          <td>CSS Styling + JS Logic</td>
        </tr>
        <tr>
          <td>🗓️ To-do List UI</td>
          <td>Flexbox + CSS Variables</td>
        </tr>
        <tr>
          <td>🌙 Dark Mode Switch</td>
          <td>CSS Variables + Transitions</td>
        </tr>
        <tr>
          <td>📊 Dashboard UI</td>
          <td>Grid + Framework + Charts</td>
        </tr>
      </tbody>
    </table>

    <h2>🧠 Practice Tips</h2>
    <ul>
      <li>✅ Start small — build one section at a time.</li>
      <li>✅ Focus on layout, spacing, and colors first.</li>
      <li>✅ Make everything responsive!</li>
      <li>✅ Try recreating popular websites (e.g., YouTube, Netflix homepage).</li>
      <li>✅ Upload your projects to GitHub or CodePen.</li>
    </ul>

    <h2>🪄 Suggested Practice Order</h2>
    <ol>
      <li>Responsive Navbar</li>
      <li>Image Gallery</li>
      <li>Pricing Table</li>
      <li>Login Form</li>
      <li>Product Landing Page</li>
      <li>Portfolio Website</li>
      <li>Travel Website (Final integrated project)</li>
    </ol>
  </>
)}



    </main>
    </div>


);
};
export default CssCourse;