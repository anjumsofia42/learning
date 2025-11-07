import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./HtmlCourse.css";

const HtmlCourse = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const navigate = useNavigate();

  return (
    <div className="html-course-container d-flex">
      {/* ======= Sidebar (Desktop) ======= */}
      <aside className="sidebar d-none d-md-block p-3">
        <h4 className="sidebar-title">HTML Tutorial</h4>
        <ul className="list-unstyled mt-3">
          <li onClick={() => navigate("/")}>🏠 Home</li>
          <li
            className={activeSection === "getting-started" ? "active" : ""}
            onClick={() => setActiveSection("getting-started")}
          >
            📚 Getting Started
          </li>
          <li onClick={() => setActiveSection("html-elements")}>📄 HTML Elements</li>
          <li onClick={() => setActiveSection("html-attributes")}>🔧 HTML Attributes</li>
          <li onClick={() => setActiveSection("html-style")}>🎨 HTML Style</li>
          <li onClick={() => setActiveSection("html-formatting")}>📝 HTML Formatting</li>
          <li onClick={() => setActiveSection("html-quotations")}>💬 HTML Quotations</li>
          <li onClick={() => setActiveSection("html-comments")}>💬 HTML Comments</li>
          <li onClick={() => setActiveSection("html-colors")}>🎨 HTML Colors</li>
          <li onClick={() => setActiveSection("html-favicon")}>🔧 HTML Favicon</li>
          <li onClick={() => setActiveSection("html-table")}>📄 HTML Table</li>
          <li onClick={() => setActiveSection("html-headings")}>🔧 HTML Headings</li>
          <li onClick={() => setActiveSection("html-paragraphs")}>📄 HTML Paragraphs</li>
          <li onClick={() => setActiveSection("html-lists")}>📄 HTML Lists</li>
          <li onClick={() => setActiveSection("html-block-inline-elements")}>📄 Block & Inline</li>
          <li onClick={() => setActiveSection("html-forms")}>🧱 Forms</li>
          <li onClick={() => setActiveSection("html-semantic")}>🧩 Semantic HTML</li>
          <li onClick={() => setActiveSection("html-multimedia")}>🎨 Multimedia</li>
          <li onClick={() => setActiveSection("html-iframes")}>🧭 Iframes & Embedding</li>
          <li onClick={() => setActiveSection("html-div-span")}>🧱 Div and Span</li>
          <li onClick={() => setActiveSection("html-meta-seo")}>⚙️ Meta Tags & SEO</li>
          <li onClick={() => setActiveSection("html-entities-symbols")}>🧰 Entities & Symbols</li>
          <li onClick={() => setActiveSection("html-layouts")}>🗂️ Layouts</li>
          <li onClick={() => setActiveSection("html-mini-projects")}>🚀 Mini Projects</li>
        </ul>
      </aside>

      {/* ======= Sidebar Toggle (Mobile only, beside content) ======= */}
      <button
        className="btn btn-dark d-md-none position-fixed toggle-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#htmlSidebar"
        aria-controls="htmlSidebar"
      >
        <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
      </button>

      {/* ======= Offcanvas Sidebar (Mobile) ======= */}
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex="-1"
        id="htmlSidebar"
        aria-labelledby="htmlSidebarLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="htmlSidebarLabel">
            HTML Tutorial
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li onClick={() => navigate("/")}>🏠 Home</li>
            <li onClick={() => setActiveSection("getting-started")}>📚 Getting Started</li>
            <li onClick={() => setActiveSection("html-elements")}>📄 HTML Elements</li>
            <li onClick={() => setActiveSection("html-attributes")}>🔧 HTML Attributes</li>
            <li onClick={() => setActiveSection("html-style")}>🎨 HTML Style</li>
            <li onClick={() => setActiveSection("html-formatting")}>📝 HTML Formatting</li>
            <li onClick={() => setActiveSection("html-quotations")}>💬 HTML Quotations</li>
            <li onClick={() => setActiveSection("html-comments")}>💬 HTML Comments</li>
            <li onClick={() => setActiveSection("html-colors")}>🎨 HTML Colors</li>
            <li onClick={() => setActiveSection("html-favicon")}>🔧 HTML Favicon</li>
            <li onClick={() => setActiveSection("html-table")}>📄 HTML Table</li>
            <li onClick={() => setActiveSection("html-headings")}>🔧 HTML Headings</li>
            <li onClick={() => setActiveSection("html-paragraphs")}>📄 HTML Paragraphs</li>
            <li onClick={() => setActiveSection("html-lists")}>📄 HTML Lists</li>
            <li onClick={() => setActiveSection("html-block-inline-elements")}>📄 Block & Inline</li>
            <li onClick={() => setActiveSection("html-forms")}>🧱 Forms</li>
            <li onClick={() => setActiveSection("html-semantic")}>🧩 Semantic HTML</li>
            <li onClick={() => setActiveSection("html-multimedia")}>🎨 Multimedia</li>
            <li onClick={() => setActiveSection("html-iframes")}>🧭 Iframes & Embedding</li>
            <li onClick={() => setActiveSection("html-div-span")}>🧱 Div and Span</li>
            <li onClick={() => setActiveSection("html-meta-seo")}>⚙️ Meta Tags & SEO</li>
            <li onClick={() => setActiveSection("html-entities-symbols")}>🧰 Entities & Symbols</li>
            <li onClick={() => setActiveSection("html-layouts")}>🗂️ Layouts</li>
            <li onClick={() => setActiveSection("html-mini-projects")}>🚀 Mini Projects</li>
          </ul>
        </div>
      </div>

        {/* ======= Course Content ======= */}
        <main className="course-content flex-grow-1 p-4">
      
        {/* ✅ Getting Started */}
        {activeSection === 'getting-started' && (
          <>
            <h1>Welcome to the HTML Course! 🌐</h1>
            <p className="subtitle">Learn HTML from basics to advanced — with examples, visuals, and practice.</p>
            <h2>What is HTML and why is it used?</h2>
            <ul className="bullet-points">
              <li>HTML stands for <b>HyperText Markup Language</b>.</li>
              <li>It is the standard language for creating web pages.</li>
              <li>No HTML tags are case sensitive.</li>
              <li>It describes the structure of a web page.</li>
              <li>HTML elements tell the browser how to display content.</li>
            </ul>
            <h2>Example:</h2>
            <pre className="code-block">
{`<!DOCTYPE html>
<html>
  <head>
    <title>HTML Page</title>
  </head>
  <body>
    <h1>My First HTML Page</h1>
    <p>Hello, world!</p>
  </body>
</html>`}
            </pre>
          </>
        )}

        {/* ✅ HTML Elements */}
        {activeSection === 'html-elements' && (
          <>
            <h1>HTML Elements 🧱</h1>
            <h2>What is an HTML Element?</h2>
            <ul className="bullet-points">
              <li>An HTML element is everything from the start tag to the end tag.</li>
              <li>It defines the structure and content of your webpage.</li>
              <li>Elements can contain text, links, lists, or other elements.</li>
            </ul>

            <h2>Syntax:</h2>
            <pre className="code-block">
{`<tagname>Content goes here...</tagname>`}
            </pre>

            <h2>Example:</h2>
            <pre className="code-block">
{`<h1>This is a heading</h1>
<p>This is a paragraph.</p>
<a href="https://www.example.com">Visit Example</a>`}
            </pre>

            <h2>Explanation:</h2>
            <ul className="bullet-points">
              <li><code>&lt;h1&gt;</code> defines a heading.</li>
              <li><code>&lt;p&gt;</code> defines a paragraph.</li>
              <li><code>&lt;a&gt;</code> defines a hyperlink.</li>
            </ul>
          </>
        )}

        {/* ✅ HTML Attributes */}
        {activeSection === 'html-attributes' && (
          <>
            <h1>HTML Attributes 🧩</h1>
            <h2>What are HTML Attributes?</h2>
            <ul className="bullet-points">
              <li>Attributes provide extra information about HTML elements.</li>
              <li>They are always written in the opening tag.</li>
              <li>Attributes are in the form <b>name="value"</b>.</li>
            </ul>

            <h2>Syntax:</h2>
            <pre className="code-block">
{`<tagname attribute="value">Content</tagname>`}
            </pre>

            <h2>Example:</h2>
            <pre className="code-block">
{`<a href="https://www.example.com" target="_blank">Visit Example</a>`}
            </pre>

            <h2>⚙️ Commonly Used HTML Attributes</h2>
            <ol className="bullet-points">
              <li><b> href</b> — Used with &lt;a&gt; tag to specify link destination.</li>
              <pre className="code-block">{`<a href="https://www.google.com">Go to Google</a>`}</pre>

              <li><b> src</b> — Specifies source file for images, audio, video, iframe.</li>
              <pre className="code-block">{`<img src="image.png" alt="Example Image">`}</pre>

              <li><b> alt</b> — Provides alternative text for images (improves accessibility).</li>
              <pre className="code-block">{`<img src="logo.png" alt="Company Logo">`}</pre>

              <li><b> style</b> — Adds inline CSS styling directly to an element.</li>
              <pre className="code-block">{`<p style="color: blue; font-size: 18px;">Styled paragraph</p>`}</pre>

              <li><b> title</b> — Displays a tooltip when hovered.</li>
              <pre className="code-block">{`<p title="This is a tooltip">Hover over me!</p>`}</pre>

              <li><b> id</b> — Gives a unique identifier to an element.</li>
              <pre className="code-block">{`<h1 id="main-heading">Welcome to HTML Course</h1>`}</pre>

              <li><b> class</b> — Groups elements for styling or JS.</li>
              <pre className="code-block">{`<p class="intro-text">This is the first paragraph.</p>`}</pre>

              <li><b> name</b> — Used in forms to identify form data.</li>
              <pre className="code-block">{`<input type="text" name="username">`}</pre>

              <li><b> value</b> — Sets the initial value for inputs.</li>
              <pre className="code-block">{`<input type="text" value="John Doe">`}</pre>

              <li><b> placeholder</b> — Shows hint text inside input fields.</li>
              <pre className="code-block">{`<input type="email" placeholder="Enter your email">`}</pre>

              <li><b> disabled</b> — Disables input field interaction.</li>
              <pre className="code-block">{`<input type="text" disabled value="Read-only">`}</pre>

              <li><b> readonly</b> — Makes field uneditable but still sends data.</li>
              <pre className="code-block">{`<input type="text" value="Static value" readonly>`}</pre>

              <li><b> required</b> — Makes input mandatory before form submission.</li>
              <pre className="code-block">{`<input type="text" required>`}</pre>

              <li><b> lang</b> — Specifies content language.</li>
              <pre className="code-block">{`<p lang="en">Hello!</p>
<p lang="es">¡Hola!</p>`}</pre>

              <li><b> data-* (Custom Attributes)</b> — Used to store custom data for JS.</li>
              <pre className="code-block">{`<div data-course="html" data-level="beginner">HTML Basics</div>`}</pre>
            </ol>
          </>
        )}

        {/* ✅ 🎨 HTML Style */}
        {activeSection === 'html-style' && (
          <>
            <h1>🎨 HTML Style — Complete Explanation</h1>
            <h2>🧩 What is the “style” Attribute?</h2>
            <ul className="bullet-points">
              <li>The <b>style</b> attribute in HTML adds CSS directly to an element.</li>
              <li>It lets you change how an element looks — color, font, background, borders, and more.</li>
            </ul>

            <h2>🏷️ Basic Syntax</h2>
            <pre className="code-block">{`<tagname style="property: value;">`}</pre>

            <h2>✅ Example:</h2>
            <pre className="code-block">{`<p style="color: blue;">This is a blue paragraph.</p>`}</pre>

            <ul className="bullet-points">
              <li><b>p</b> → HTML tag (paragraph)</li>
              <li><b>style</b> → Attribute name</li>
              <li><b>color: blue;</b> → CSS rule (property and value)</li>
            </ul>

            <h2>🧠 What You Can Change with “style”</h2>
            <table className="style-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Description</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>color</td><td>Text color</td><td><code>style="color: red;"</code></td></tr>
                <tr><td>font-size</td><td>Text size</td><td><code>style="font-size: 20px;"</code></td></tr>
                <tr><td>background-color</td><td>Background color</td><td><code>style="background-color: yellow;"</code></td></tr>
                <tr><td>text-align</td><td>Text alignment</td><td><code>style="text-align: center;"</code></td></tr>
                <tr><td>font-family</td><td>Font type</td><td><code>style="font-family: Arial;"</code></td></tr>
                <tr><td>border</td><td>Border around an element</td><td><code>style="border: 2px solid black;"</code></td></tr>
                <tr><td>padding</td><td>Space inside an element</td><td><code>style="padding: 10px;"</code></td></tr>
                <tr><td>margin</td><td>Space outside an element</td><td><code>style="margin: 20px;"</code></td></tr>
              </tbody>
            </table>
          </>
        )}
        {/* ✅ HTML Quotations */}
        {activeSection === 'html-quotations' && (
          <>
            <h1>💬 HTML Quotations — Quoting Text in HTML</h1>
            <h2>What Are Quotations in HTML?</h2>
            <ul className="bullet-points">
              <li>Quotation tags are used to show quoted or cited text — like when you’re quoting someone, a book, or an article.</li>
              <li>They also help browsers and search engines understand the meaning of the text (like citations or abbreviations).</li>
            </ul>

            <h2>🏷️ Common HTML Quotation Tags</h2>
            <table className="style-table">
              <thead>
                <tr><th>Tag</th><th>Description</th><th>Example</th></tr>
              </thead>
              <tbody>
                <tr><td>&lt;q&gt;</td><td>Short inline quotation (adds “ ” automatically)</td><td><q>Short quote</q></td></tr>
                <tr><td>&lt;blockquote&gt;</td><td>Long block quotation (indented block)</td><td><blockquote>Long quote text</blockquote></td></tr>
                <tr><td>&lt;abbr&gt;</td><td>Abbreviation or acronym</td><td><abbr title="HyperText Markup Language">HTML</abbr></td></tr>
                <tr><td>&lt;address&gt;</td><td>Contact information</td><td><address>123 Main St, City</address></td></tr>
                <tr><td>&lt;cite&gt;</td><td>Title of a work (book, website, etc.)</td><td><cite>The Great Gatsby</cite></td></tr>
                <tr><td>&lt;bdo&gt;</td><td>Bi-Directional Override (text direction)</td><td><bdo dir="rtl">Hello</bdo></td></tr>
              </tbody>
            </table>

            <h2>✅ Example:</h2>
            <pre className="code-block">
{`<p>He said, <q>Hard work pays off!</q></p>

<blockquote>
  "The purpose of our lives is to be happy." — Dalai Lama
</blockquote>

<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>

<address>
  Contact us at: 123 Street, City.
</address>

<p><cite>Harry Potter</cite> by J.K. Rowling</p>

<p><bdo dir="rtl">This text is reversed.</bdo></p>`}
            </pre>
          </>
        )}
         {/* ✅ HTML Comments */}
        {activeSection === 'html-comments' && (
          <>
            <h1>🧩 HTML Comments</h1>
            <h2>💡 What is a Comment in HTML?</h2>
            <ul className="bullet-points">
              <li>A comment in HTML is text that is <b>not displayed</b> on the web page.</li>
              <li>Comments are used to add notes or reminders for yourself or other developers.</li>
              <li>They can also explain code or temporarily hide sections of it.</li>
            </ul>

            <h2>🏷️ Syntax:</h2>
            <pre className="code-block">
{`<!-- This is a comment -->`}
            </pre>

            <h2>✅ Example:</h2>
            <pre className="code-block">
{`<p>This is a visible paragraph.</p>

<!-- This paragraph is commented out and won't be shown -->
<!-- <p>This will not appear on the web page.</p> -->

<p>Comments are helpful for developers!</p>`}
            </pre>

            <h2>🧠 Notes:</h2>
            <ul className="bullet-points">
              <li>Comments are ignored by browsers.</li>
              <li>They are very useful in large projects for documentation.</li>
              <li>Shortcut: Press <b>Ctrl + /</b> in most code editors to toggle comments quickly.</li>
            </ul>
          </>
        )}

          {/* ✅ HTML Colors */}
          {activeSection === 'html-colors' && (
            <>
            <h1>🌈 HTML Colors — Complete Explanation (Simple Words)</h1>

        <h2>💡 What Are Colors in HTML?</h2>
        <p className='subtitle'>
          In HTML, colors are used to make web pages look more beautiful and
          organized. You can apply colors to:
        </p>
        <ul className="bullet-points">
          <li>Text (<code>color</code>)</li>
          <li>Backgrounds (<code>background-color</code>)</li>
          <li>Borders (<code>border-color</code>)</li>
        </ul>

        <h2>🎨 Ways to Define Colors</h2>
        <p className='subtitle'>You can define colors in three main ways:</p>
        <ul className="bullet-points">
          <li>
            <strong>By Name</strong> — Example: <code>“red”</code>,{" "}
            <code>“blue”</code>, <code>“green”</code>
          </li>
          <li>
            <strong>By HEX Code</strong> — Example: <code>#ff0000</code>
          </li>
          <li>
            <strong>By RGB / RGBA Values</strong> — Example:{" "}
            <code>rgb(255, 0, 0)</code> or <code>rgba(255, 0, 0, 0.5)</code>
          </li>
        </ul>

        <h2>🏷️ Basic Color Properties</h2>
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
              <td>
                <code>&lt;p style="color: red;"&gt;This is red text&lt;/p&gt;</code>
              </td>
            </tr>
            <tr>
              <td><code>background-color</code></td>
              <td>Sets background color</td>
              <td>
                <code>
                  &lt;div style="background-color: yellow;"&gt;Yellow Box&lt;/div&gt;
                </code>
              </td>
            </tr>
            <tr>
              <td><code>border</code></td>
              <td>Can include border color</td>
              <td>
                <code>
                  &lt;p style="border: 2px solid blue;"&gt;Bordered text&lt;/p&gt;
                </code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>💻 Example:</h2>
        <pre className="code-block">
{`<h2 style="color: green;">This is green text</h2>
<p style="background-color: lightblue;">This has a light blue background.</p>
<div style="border: 3px solid red;">This has a red border.</div>`}
        </pre>5
            </>
          )}

          {/* ✅ HTML Favicon */}
        {activeSection === 'html-favicon' && (
          <>
            <h1>🌐 HTML Favicon</h1>
            <h2>💡 What is a Favicon?</h2>
            <ul className="bullet-points">
              <li>A favicon is a small icon shown in the browser tab next to the website name.</li>
              <li>It helps users easily recognize your website.</li>
            </ul>

            <h2>🏷️ How to Add a Favicon</h2>
            <p className='subtitle'>Add this code inside the <code>&lt;head&gt;</code> section of your HTML page 👇</p>
            <pre className="code-block">
{`<link rel="icon" type="image/x-icon" href="favicon.ico">`}
            </pre>

            <h2>✅ Explanation:</h2>
            <ul className="bullet-points">
              <li><b>rel="icon"</b> → tells the browser this link is for a favicon.</li>
              <li><b>type="image/x-icon"</b> → specifies the icon file type.</li>
              <li><b>href</b> → the file name or path of your icon (like <code>favicon.ico</code> or <code>favicon.png</code>).</li>
            </ul>

            <h2>📘 Example:</h2>
            <pre className="code-block">
{`<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
    <link rel="icon" type="image/png" href="myicon.png">
  </head>
  <body>
    <h1>Welcome to My Website!</h1>
  </body>
</html>`}
            </pre>
          </>
        )}

        
        {/* ✅ HTML Table */}
        {activeSection === 'html-table' && (
          <>
            <h1>🧩 HTML Table (Simple Explanation)</h1>
            <h2>💡 What is a Table?</h2>
            <ul className="bullet-points">
              <li>A table in HTML is used to display data in rows and columns — just like in Excel.</li>
              <li>Tables help organize and compare related data.</li>
            </ul>

            <h2>🏷️ Basic Table Tags</h2>
            <table className="style-table">
              <thead>
                <tr><th>Tag</th><th>Meaning</th></tr>
              </thead>
              <tbody>
                <tr><td>&lt;table&gt;</td><td>Creates a table</td></tr>
                <tr><td>&lt;tr&gt;</td><td>Defines a table row</td></tr>
                <tr><td>&lt;th&gt;</td><td>Defines a table header (bold text)</td></tr>
                <tr><td>&lt;td&gt;</td><td>Defines a table data cell (normal text)</td></tr>
              </tbody>
            </table>

            <h2>🖥️ Example:</h2>
            <pre className="code-block">
{`<!DOCTYPE html>
<html>
<head>
  <title>HTML Table Example</title>
</head>
<body>
  <h2>Student Details</h2>

  <table border="1">
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Grade</th>
    </tr>
    <tr>
      <td>John</td>
      <td>15</td>
      <td>A</td>
    </tr>
    <tr>
      <td>Emma</td>
      <td>16</td>
      <td>B</td>
    </tr>
  </table>
</body>
</html>`}
            </pre>

            <h2>✅ Output:</h2>
            <table className="style-table" border="1">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John</td>
                  <td>15</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Emma</td>
                  <td>16</td>
                  <td>B</td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        {/* ✅ HTML Headings */}
        {activeSection === 'html-headings' && (
          <>
            <h1>HTML Headings 📢</h1>
            <ul className="bullet-points">
              <li>HTML headings give titles or subtitles to web page content.</li>
              <li>They help structure your document and improve SEO.</li>
            </ul>

            <h2>🏷️ Heading Tags</h2>
            <ul className="bullet-points">
              <li>&lt;h1&gt; Main heading (most important)</li>
              <li>&lt;h2&gt; Subheading</li>
              <li>&lt;h3&gt; Section heading</li>
              <li>&lt;h4&gt; Subsection</li>
              <li>&lt;h5&gt; Small heading</li>
              <li>&lt;h6&gt; Tiny heading</li>
            </ul>
          </>
        )}

        {/* ✅ HTML Paragraphs */}
        {activeSection === 'html-paragraphs' && (
          <>
            <h1>HTML Paragraphs 📄</h1>
            <ul className="bullet-points">
              <li>Paragraphs are blocks of text enclosed within &lt;p&gt; tags.</li>
              <li>They automatically add space above and below for readability.</li>
            </ul>
          </>
        )}
        
        {/* ✅ HTML Formatting */}
        {activeSection === 'html-formatting' && (
          <>
            <h1>📝 HTML Formatting — Text Styling Tags</h1>
            <h2>💡 What is HTML Formatting?</h2>
            <ul className="bullet-points">
              <li>Formatting tags are used to make text look special or different.</li>
              <li>They help you emphasize, highlight, or structure your content visually.</li>
            </ul>

            <h2>✅ Common HTML Formatting Tags</h2>
            <table className="style-table">
              <thead>
                <tr><th>Tag</th><th>Meaning / Use</th><th>Example</th></tr>
              </thead>
              <tbody>
                <tr><td>&lt;b&gt;</td><td>Bold text (for importance)</td><td><b>This is bold</b></td></tr>
                <tr><td>&lt;strong&gt;</td><td>Strong importance (semantic bold)</td><td><strong>Important text</strong></td></tr>
                <tr><td>&lt;i&gt;</td><td>Italic text (for emphasis)</td><td><i>This is italic</i></td></tr>
                <tr><td>&lt;em&gt;</td><td>Emphasized text (semantic italic)</td><td><em>Emphasized text</em></td></tr>
                <tr><td>&lt;u&gt;</td><td>Underlined text</td><td><u>Underlined text</u></td></tr>
                <tr><td>&lt;mark&gt;</td><td>Highlighted text</td><td><mark>Highlighted text</mark></td></tr>
                <tr><td>&lt;small&gt;</td><td>Smaller text</td><td><small>This is small text</small></td></tr>
                <tr><td>&lt;del&gt;</td><td>Deleted (crossed out) text</td><td><del>Deleted text</del></td></tr>
                <tr><td>&lt;ins&gt;</td><td>Inserted text (underlined)</td><td><ins>Inserted text</ins></td></tr>
                <tr><td>&lt;sub&gt;</td><td>Subscript text</td><td>H<sub>2</sub>O</td></tr>
                <tr><td>&lt;sup&gt;</td><td>Superscript text</td><td>2<sup>3</sup> = 8</td></tr>
              </tbody>
            </table>

            <h2>✅ Example:</h2>
            <pre className="code-block">
{`<p>This is <b>bold</b>, <i>italic</i>, and <u>underlined</u> text.</p>
<p>Water formula is H<sub>2</sub>O and 2<sup>3</sup> = 8.</p>
<p>This is <mark>highlighted</mark> and <del>deleted</del> text.</p>`}
            </pre>
          </>
        )}
        {/* ✅ HTML Lists */}
{activeSection === 'html-lists' && (
  <>
    <h1>📋 HTML Lists</h1>
    <h2>💡 What is a List?</h2>
    <p className='subtitle'>
      A list in HTML is used to display items one after another — like points,
      steps, or menus.
    </p>

    <ul className="bullet-points">
      <li><b>Ordered List</b> — numbers (1, 2, 3…)</li>
      <li><b>Unordered List</b> — bullets (•)</li>
      <li><b>Description List</b> — terms and their descriptions</li>
    </ul>

    <h2>🔢 1️⃣ Ordered List (&lt;ol&gt;)</h2>
    <p className='subtitle'>Used when the order matters (like steps or rankings).</p>
    <pre className="code-block">
{`<h3>Steps to Make Tea</h3>
<ol>
  <li>Boil water</li>
  <li>Add tea leaves</li>
  <li>Pour into cup</li>
  <li>Add sugar and milk</li>
</ol>`}
    </pre>

    <h3>✅ Output:</h3>
    <ol>
      <li>Boil water</li>
      <li>Add tea leaves</li>
      <li>Pour into cup</li>
      <li>Add sugar and milk</li>
    </ol>

    <h2>🔘 2️⃣ Unordered List (&lt;ul&gt;)</h2>
    <p className='subtitle'>Used when the order doesn’t matter (like features or items).</p>
    <pre className="code-block">
{`<h3>Shopping List</h3>
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Bread</li>
</ul>`}
    </pre>

    <h3>✅ Output:</h3>
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Bread</li>
    </ul>

    <h2>📝 3️⃣ Description List (&lt;dl&gt;)</h2>
    <p className='subtitle'>Used for terms and definitions (like a dictionary).</p>
    <pre className="code-block">
{`<h3>HTML Tags</h3>
<dl>
  <dt>&lt;p&gt;</dt>
  <dd>Defines a paragraph.</dd>

  <dt>&lt;a&gt;</dt>
  <dd>Defines a hyperlink.</dd>
</dl>`}
    </pre>

    <h3>✅ Output:</h3>
    <dl>
      <dt>&lt;p&gt;</dt>
      <dd>Defines a paragraph.</dd>
      <dt>&lt;a&gt;</dt>
      <dd>Defines a hyperlink.</dd>
    </dl>

    <h2>🧩 Nested List (List Inside a List)</h2>
    <p className='subtitle'>You can put a list inside another list.</p>
    <pre className="code-block">
{`<h3>Fruits</h3>
<ul>
  <li>Apple
    <ul>
      <li>Red Apple</li>
      <li>Green Apple</li>
    </ul>
  </li>
  <li>Banana</li>
</ul>`}
    </pre>

    <h3>✅ Output:</h3>
    <ul>
      <li>Apple
        <ul>
          <li>Red Apple</li>
          <li>Green Apple</li>
        </ul>
      </li>
      <li>Banana</li>
    </ul>

    <h2>✅ In Short:</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>List Type</th>
          <th>Tag</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Ordered</td><td>&lt;ol&gt;</td><td>Numbers (1, 2, 3…)</td></tr>
        <tr><td>Unordered</td><td>&lt;ul&gt;</td><td>Bullets (•)</td></tr>
        <tr><td>Description</td><td>&lt;dl&gt;</td><td>Terms and meanings</td></tr>
      </tbody>
    </table>
  </>
)}
        {/* ✅ HTML Block & Inline Elements */}

        {activeSection === 'html-block-inline-elements' && (
          <>
            <h2>🧩 1️⃣ Block-level Elements</h2>
        <p className='subtitle'><strong>📖 Definition:</strong></p>
        <p className='subtitle'>
          A block-level element always starts on a new line and takes up the full width
          available (from left to right).
        </p>

        <h3>🧱 Common Block Elements:</h3>
        <ul className="bullet-points">
          <li>&lt;div&gt;</li>
          <li>&lt;p&gt;</li>
          <li>&lt;h1&gt; – &lt;h6&gt;</li>
          <li>&lt;ul&gt;, &lt;ol&gt;</li>
          <li>&lt;table&gt;</li>
          <li>&lt;section&gt;, &lt;header&gt;, &lt;footer&gt;</li>
        </ul>

        <h3>🖥️ Example:</h3>
        <pre className="code-block">
{`<p>This is a paragraph.</p>
<div>This is a div block.</div>
<h2>This is a heading.</h2>`}
        </pre>

        <p className='subtitle'>✅ <strong>Output:</strong> Each element appears on a new line.</p>

        <h2>🧩 2️⃣ Inline Elements</h2>
        <p className='subtitle'><strong>📖 Definition:</strong></p>
        <p className='subtitle'>
          An inline element does not start on a new line — it only takes as much width
          as needed for its content.
        </p>

        <h3>💫 Common Inline Elements:</h3>
        <ul className="bullet-points">
          <li>&lt;span&gt;</li>
          <li>&lt;a&gt;</li>
          <li>&lt;strong&gt;</li>
          <li>&lt;em&gt;</li>
          <li>&lt;img&gt;</li>
          <li>&lt;b&gt;, &lt;i&gt;</li>
        </ul>

        <h3>🖥️ Example:</h3>
        <pre className="code-block">
{`<p>This is <strong>bold</strong> and <em>italic</em> text.</p>`}
        </pre>
        <p className='subtitle'>✅ <strong>Output:</strong> This is bold and italic text. (All appear on the same line.)</p>

        <h2>🧩 3️⃣ Block vs Inline Example Together</h2>
        <pre className="code-block">
{`<div style="background-color: lightblue;">Block Element (div)</div>
<span style="background-color: yellow;">Inline Element (span)</span>
<span style="background-color: pink;">Another Inline</span>`}
        </pre>

        <p className='subtitle'>✅ <strong>Output:</strong></p>
        <ul className="bullet-points">
          <li>The blue <code>&lt;div&gt;</code> appears on its own line.</li>
          <li>The yellow and pink <code>&lt;span&gt;</code> elements appear side by side.</li>
        </ul>

        <h2>✅ Quick Summary</h2>
        <table className="style-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Starts New Line</th>
              <th>Takes Full Width</th>
              <th>Example Tags</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Block</td>
              <td>✅ Yes</td>
              <td>✅ Yes</td>
              <td>&lt;div&gt;, &lt;p&gt;, &lt;h1&gt;</td>
            </tr>
            <tr>
              <td>Inline</td>
              <td>❌ No</td>
              <td>❌ Only content width</td>
              <td>&lt;span&gt;, &lt;a&gt;, &lt;strong&gt;</td>
            </tr>
          </tbody>
        </table>

        <h2>🏁 In Short:</h2>
        <ul className="bullet-points">
          <li><strong>Block elements</strong> = Big boxes (start on new lines)</li>
          <li><strong>Inline elements</strong> = Small boxes (fit inside lines)</li>
          <li>You can mix both to structure your page neatly.</li>
        </ul>
          </>
        )}
        {/* ✅ HTML Forms */}

{activeSection === 'html-forms' && (
  <>
    <h1>🧾 HTML Forms</h1>

    <h2>🧠 What is a Form in HTML?</h2>
    <p className="subtitle">
      An <strong>HTML form</strong> is used to collect user input.
      Common examples include login forms, sign-up forms, feedback forms, and search boxes.
    </p>

    <p className="subtitle">
      Forms are created using the <code>&lt;form&gt;</code> tag.
    </p>

    <h3>🧩 Basic Structure of a Form</h3>
    <pre className="code-block">
{`<form action="submit_form.php" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">

  <label for="password">Password:</label>
  <input type="password" id="password" name="password">

  <input type="submit" value="Submit">
</form>`}
    </pre>

    <p className="subtitle">
      ✅ <strong>Output:</strong> A simple form with username and password input fields and a submit button.
    </p>

    <h2>🧱 Common Input Types</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Input Type</th>
          <th>Example</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>text</td>
          <td><code>&lt;input type="text"&gt;</code></td>
          <td>Single-line text input</td>
        </tr>
        <tr>
          <td>password</td>
          <td><code>&lt;input type="password"&gt;</code></td>
          <td>Hides typed characters</td>
        </tr>
        <tr>
          <td>email</td>
          <td><code>&lt;input type="email"&gt;</code></td>
          <td>For email input</td>
        </tr>
        <tr>
          <td>number</td>
          <td><code>&lt;input type="number"&gt;</code></td>
          <td>For numeric input</td>
        </tr>
        <tr>
          <td>date</td>
          <td><code>&lt;input type="date"&gt;</code></td>
          <td>Date picker</td>
        </tr>
        <tr>
          <td>radio</td>
          <td><code>&lt;input type="radio"&gt;</code></td>
          <td>Select one option</td>
        </tr>
        <tr>
          <td>checkbox</td>
          <td><code>&lt;input type="checkbox"&gt;</code></td>
          <td>Select multiple options</td>
        </tr>
        <tr>
          <td>file</td>
          <td><code>&lt;input type="file"&gt;</code></td>
          <td>Upload a file</td>
        </tr>
        <tr>
          <td>submit</td>
          <td><code>&lt;input type="submit"&gt;</code></td>
          <td>Submits the form</td>
        </tr>
        <tr>
          <td>reset</td>
          <td><code>&lt;input type="reset"&gt;</code></td>
          <td>Clears all fields</td>
        </tr>
      </tbody>
    </table>

    <h2>💡 Tips for Beginners</h2>
    <ul className="bullet-points">
      <li>✅ Always use <code>&lt;label&gt;</code> for better accessibility.</li>
      <li>🔒 Add the <code>required</code> attribute to make a field mandatory.</li>
      <li>💬 Use <code>placeholder="Enter your name"</code> to show hint text.</li>
      <li>🧩 Use <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> to group related inputs.</li>
    </ul>

    <h2>🏁 In Short:</h2>
    <ul className="bullet-points">
      <li><strong>Forms</strong> collect user data and send it to the server.</li>
      <li>Use different <strong>input types</strong> for specific kinds of data.</li>
      <li>Combine <strong>labels</strong>, <strong>placeholders</strong>, and <strong>validation</strong> for user-friendly forms.</li>
    </ul>
  </>
)}{/* ✅ Semantic HTML – Explained Simply */}
{activeSection === "html-semantic" && (
  <>
  <h1>🧠 Semantic HTML – Explained Simply</h1>

    <h2>🌍 What is Semantic HTML?</h2>
    <p className="subtitle">
      Semantic HTML means using HTML tags that clearly describe their meaning —
      both to the browser and to developers.
    </p>

    <p className="subtitle">
      In simple words: <strong>Semantic elements tell what kind of content they hold.</strong>
    </p>

    <h3>🧩 Example:</h3>
    <pre className="code-block">
{`<header> means it’s the top section or heading of a page.
<article> means it’s a self-contained piece of content (like a blog post).`}
    </pre>

    <h3>❌ Non-Semantic vs ✅ Semantic</h3>
    <table className="style-table">
      <thead>
        <tr>
          <th>❌ Non-Semantic Elements</th>
          <th>✅ Semantic Elements</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>&lt;div&gt; and &lt;span&gt;</td>
          <td>&lt;header&gt;, &lt;footer&gt;, &lt;article&gt;, &lt;section&gt;, &lt;nav&gt;</td>
        </tr>
        <tr>
          <td>They don’t tell what the content means</td>
          <td>They describe the purpose of the content</td>
        </tr>
      </tbody>
    </table>

    <h3>🖥️ Example:</h3>
    <pre className="code-block">
{`<!-- ❌ Non-semantic -->
<div id="header">Welcome to My Website</div>

<!-- ✅ Semantic -->
<header>Welcome to My Website</header>`}
    </pre>

    <h2>🧩 Why Semantic HTML is Important</h2>
    <ul className="bullet-points">
      <li>✅ <strong>Improves Readability</strong> — Easier for developers to understand.</li>
      <li>✅ <strong>Better SEO</strong> — Search engines understand your content structure.</li>
      <li>✅ <strong>Accessibility</strong> — Screen readers can interpret your page correctly.</li>
      <li>✅ <strong>Easier Maintenance</strong> — Meaningful structure makes updating simple.</li>
    </ul>

    <h2>🧱 Common Semantic HTML Elements</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Tag</th>
          <th>Meaning / Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>&lt;header&gt;</td>
          <td>Top section of a page or article</td>
        </tr>
        <tr>
          <td>&lt;nav&gt;</td>
          <td>Navigation links (menus)</td>
        </tr>
        <tr>
          <td>&lt;main&gt;</td>
          <td>Main content of the page</td>
        </tr>
        <tr>
          <td>&lt;section&gt;</td>
          <td>Thematic grouping of content</td>
        </tr>
        <tr>
          <td>&lt;article&gt;</td>
          <td>Independent, self-contained content</td>
        </tr>
        <tr>
          <td>&lt;aside&gt;</td>
          <td>Side content like ads or sidebars</td>
        </tr>
        <tr>
          <td>&lt;footer&gt;</td>
          <td>Bottom section with copyright or links</td>
        </tr>
        <tr>
          <td>&lt;figure&gt;</td>
          <td>Container for images, diagrams, etc.</td>
        </tr>
        <tr>
          <td>&lt;figcaption&gt;</td>
          <td>Caption for a figure</td>
        </tr>
        <tr>
          <td>&lt;mark&gt;</td>
          <td>Highlights text</td>
        </tr>
        <tr>
          <td>&lt;time&gt;</td>
          <td>Represents a date or time value</td>
        </tr>
      </tbody>
    </table>

    <h2>🏁 Summary</h2>
    <ul className="bullet-points">
      <li>✅ <strong>Semantic HTML = meaningful tags</strong></li>
      <li>✅ Helps SEO, readability, and accessibility</li>
      <li>✅ Makes your web page well structured and professional</li>
    </ul>
  </>
)}
{/* ✅ HTML Multimedia – Images, Audio & Video */}
{activeSection === "html-multimedia" && (
  <>
    <h1>🎥 HTML Multimedia – Images, Audio & Video</h1>

    <h2>🌍 What is Multimedia?</h2>
    <p className="subtitle">
      Multimedia means any content that uses more than one medium — for example:
    </p>
    <ul className="bullet-points">
      <li>📸 Images</li>
      <li>🔊 Audio</li>
      <li>🎬 Video</li>
    </ul>
    <p className="subtitle">
      HTML provides special tags to add and control multimedia elements directly in web pages.
    </p>

    {/* 🖼️ Images */}
    <h2>🖼️ 1️⃣ Images in HTML</h2>
    <p className="subtitle">
      Images make a webpage more attractive and informative.  
      The image tag is <code>&lt;img&gt;</code> — it’s self-closing and doesn’t need a closing tag.
    </p>

    <h3>🧱 Syntax:</h3>
    <pre className="code-block">
{`<img src="image.jpg" alt="Description of the image" width="300" height="200">`}
    </pre>

    <h3>🔍 Explanation:</h3>
    <table className="style-table">
      <thead>
        <tr>
          <th>Attribute</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>src</td>
          <td>Path (URL or filename) of the image</td>
        </tr>
        <tr>
          <td>alt</td>
          <td>Alternative text shown if the image can’t load</td>
        </tr>
        <tr>
          <td>width / height</td>
          <td>Defines image size (in pixels or %)</td>
        </tr>
      </tbody>
    </table>

    <h3>🧩 Example:</h3>
    <pre className="code-block">
{`<img src="nature.jpg" alt="Beautiful Nature" width="400">`}
    </pre>
    <p className="subtitle">✅ Tip: Always use <code>alt</code> text — it helps screen readers and improves SEO.</p>

    {/* 🔊 Audio */}
    <h2>🔊 2️⃣ Audio in HTML</h2>
    <p className="subtitle">
      HTML5 introduced the <code>&lt;audio&gt;</code> tag to play sound or music.
    </p>

    <h3>🧱 Syntax:</h3>
    <pre className="code-block">
{`<audio controls>
  <source src="sound.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`}
    </pre>

    <h3>🔍 Explanation:</h3>
    <table className="style-table">
      <thead>
        <tr>
          <th>Attribute</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>controls</td>
          <td>Displays play/pause buttons</td>
        </tr>
        <tr>
          <td>&lt;source&gt;</td>
          <td>Defines the file and format</td>
        </tr>
        <tr>
          <td>type</td>
          <td>Specifies audio file type (audio/mpeg, audio/ogg, etc.)</td>
        </tr>
      </tbody>
    </table>

    <h3>🧩 Example:</h3>
    <pre className="code-block">
{`<h3>Play Background Music 🎵</h3>
<audio controls>
  <source src="music.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>`}
    </pre>
    <p className="subtitle">✅ Tip: You can use multiple <code>&lt;source&gt;</code> tags to support different file types.</p>

    {/* 🎬 Video */}
    <h2>🎬 3️⃣ Video in HTML</h2>
    <p className="subtitle">
      You can embed videos directly using the <code>&lt;video&gt;</code> tag.
    </p>

    <h3>🧱 Syntax:</h3>
    <pre className="code-block">
{`<video width="400" controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`}
    </pre>

    <h3>🔍 Explanation:</h3>
    <table className="style-table">
      <thead>
        <tr>
          <th>Attribute</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>controls</td>
          <td>Adds play/pause/volume buttons</td>
        </tr>
        <tr>
          <td>autoplay</td>
          <td>Starts playing automatically</td>
        </tr>
        <tr>
          <td>loop</td>
          <td>Repeats the video</td>
        </tr>
        <tr>
          <td>muted</td>
          <td>Starts video with no sound</td>
        </tr>
        <tr>
          <td>poster</td>
          <td>Image shown before the video starts</td>
        </tr>
        <tr>
          <td>width</td>
          <td>Video width in pixels</td>
        </tr>
      </tbody>
    </table>

    <h3>🧩 Example:</h3>
    <pre className="code-block">
{`<h3>My Travel Vlog 🎥</h3>
<video width="500" controls poster="thumbnail.jpg">
  <source src="travel.mp4" type="video/mp4">
  <source src="travel.webm" type="video/webm">
  Your browser does not support HTML video.
</video>`}
    </pre>
    <p className="subtitle">
      ✅ Tip: Always provide multiple formats (<code>.mp4</code>, <code>.webm</code>) for better browser compatibility.
    </p>

    {/* 🌐 Embed YouTube */}
    <h2>🌐 4️⃣ Embed YouTube Video</h2>
    <p className="subtitle">
      You can embed a YouTube video using the <code>&lt;iframe&gt;</code> tag.
    </p>

    <h3>🧩 Example:</h3>
    <pre className="code-block">
{`<h3>Learn HTML Basics (YouTube)</h3>
<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/UB1O30fR-EE" 
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>`}
    </pre>
    <p className="subtitle">✅ Tip: Use <code>allowfullscreen</code> so users can watch in full screen.</p>

    {/* 🧠 File Types */}
    <h2>🧠 5️⃣ Common Multimedia File Types</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>File Extension</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Image</td>
          <td>.jpg, .png, .gif, .svg, .webp</td>
          <td>&lt;img&gt;</td>
        </tr>
        <tr>
          <td>Audio</td>
          <td>.mp3, .wav, .ogg</td>
          <td>&lt;audio&gt;</td>
        </tr>
        <tr>
          <td>Video</td>
          <td>.mp4, .webm, .ogg</td>
          <td>&lt;video&gt;</td>
        </tr>
      </tbody>
    </table>

    {/* 🧱 Complete Example */}
    <h2>🧱 6️⃣ Complete Multimedia Example</h2>
    <pre className="code-block">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Multimedia Example</title>
</head>
<body>

  <h1>HTML Multimedia</h1>

  <h2>1️⃣ Image Example</h2>
  <img src="flowers.jpg" alt="Colorful Flowers" width="400">

  <h2>2️⃣ Audio Example</h2>
  <audio controls>
    <source src="song.mp3" type="audio/mpeg">
    Your browser does not support the audio tag.
  </audio>

  <h2>3️⃣ Video Example</h2>
  <video width="500" controls poster="video-thumbnail.jpg">
    <source src="sample.mp4" type="video/mp4">
    <source src="sample.webm" type="video/webm">
    Your browser does not support the video tag.
  </video>

  <h2>4️⃣ Embedded YouTube Video</h2>
  <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/UB1O30fR-EE"
    title="HTML Tutorial"
    frameborder="0"
    allowfullscreen>
  </iframe>

</body>
</html>`}
    </pre>

    {/* Summary */}
    <h2>🧩 Summary</h2>
    <ul className="bullet-points">
      <li>✅ <code>&lt;img&gt;</code> – for images</li>
      <li>✅ <code>&lt;audio&gt;</code> – for sound/music</li>
      <li>✅ <code>&lt;video&gt;</code> – for videos</li>
      <li>✅ <code>&lt;iframe&gt;</code> – for embedding external videos (like YouTube)</li>
    </ul>

    <p className="subtitle">
      🎯 <strong>HTML5 makes it easy to include multimedia directly in your webpage without plugins!</strong>
    </p>
  </>
)}
{/* 🧭 Iframes and Embedding (HTML5) */}
{activeSection === "html-iframes" && (
  <>
    <h2>🧭 Iframes and Embedding (HTML5)</h2>

    <h3>📘 Definition</h3>
    <p className="subtitle">
      An <code>&lt;iframe&gt;</code> (Inline Frame) is used to embed another webpage or external content
      (like videos, maps, or documents) inside your webpage.
    </p>

    <h3>🧱 Basic Syntax</h3>
    <pre className="code-block">
{`<iframe src="URL" width="600" height="400"></iframe>`}
    </pre>

    <h3>⚙️ Important Attributes</h3>
    <table className="style-table">
      <thead>
        <tr>
          <th>Attribute</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>src</td>
          <td>URL of the content to embed</td>
        </tr>
        <tr>
          <td>width, height</td>
          <td>Defines iframe size</td>
        </tr>
        <tr>
          <td>title</td>
          <td>Accessibility description</td>
        </tr>
        <tr>
          <td>allowfullscreen</td>
          <td>Enables full-screen mode</td>
        </tr>
        <tr>
          <td>loading="lazy"</td>
          <td>Loads iframe only when visible (improves performance)</td>
        </tr>
        <tr>
          <td>sandbox</td>
          <td>Adds security restrictions to embedded content</td>
        </tr>
        <tr>
          <td>allow</td>
          <td>Specifies permissions (e.g., autoplay, camera)</td>
        </tr>
      </tbody>
    </table>

    <h3>🌍 Common Uses</h3>
    <ul className="bullet-points">
      <li>🎬 Embedding YouTube videos</li>
      <li>🗺️ Displaying Google Maps</li>
      <li>📄 Showing PDFs or external webpages</li>
    </ul>

    <h3>🔒 Security Tip</h3>
    <p className="subtitle">
      Use <code>sandbox</code> for untrusted or external content for better security.
    </p>
    <pre className="code-block">
{`<iframe src="page.html" sandbox></iframe>`}
    </pre>

    <h3>🧩 Example 1 — Embed a YouTube Video</h3>
    <pre className="code-block">
{`<iframe width="560" height="315"
  src="https://www.youtube.com/embed/UB1O30fR-EE"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>`}
    </pre>

    <h3>🧩 Example 2 — Embed Google Maps</h3>
    <pre className="code-block">
{`<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509436!2d144.95373531531696!3d-37.81627974202132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778cdd44a9f9c0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1600851096608!5m2!1sen!2sau"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>`}
    </pre>

    <h3>🧩 Example 3 — Embed a PDF Document</h3>
    <pre className="code-block">
{`<iframe src="resume.pdf" width="600" height="400" title="My Resume"></iframe>`}
    </pre>

    <h3>🎯 Key Points</h3>
    <ul className="bullet-points">
      <li>✅ <code>&lt;iframe&gt;</code> embeds external content</li>
      <li>✅ Use <code>allowfullscreen</code> for videos</li>
      <li>✅ Use <code>loading="lazy"</code> to improve performance</li>
      <li>✅ Use <code>sandbox</code> to enhance security</li>
    </ul>

    <h3>🧱 Complete Example</h3>
    <pre className="code-block">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iframes and Embedding Example</title>
</head>
<body>

  <h1>🧭 Iframes and Embedding</h1>

  <h2>1️⃣ YouTube Video</h2>
  <iframe width="560" height="315"
    src="https://www.youtube.com/embed/UB1O30fR-EE"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>

  <h2>2️⃣ Google Map</h2>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509436!2d144.95373531531696!3d-37.81627974202132"
    width="600"
    height="450"
    style="border:0;"
    allowfullscreen=""
    loading="lazy">
  </iframe>

  <h2>3️⃣ PDF Document</h2>
  <iframe src="document.pdf" width="600" height="400" title="Sample PDF"></iframe>

</body>
</html>`}
    </pre>

    <h2>🧩 Summary</h2>
    <ul className="bullet-points">
      <li>✅ <code>&lt;iframe&gt;</code> = embed external pages or media</li>
      <li>✅ Use <code>allowfullscreen</code> for videos</li>
      <li>✅ <code>loading="lazy"</code> = faster loading</li>
      <li>✅ <code>sandbox</code> = adds security restrictions</li>
    </ul>

    <p className="subtitle">
      🎯 <strong>Iframes make embedding external content seamless and powerful in HTML5!</strong>
    </p>
  </>
)}
{/* 🧱 Div and Span */}
{activeSection === "html-div-span" && (
  <>
    <h1>🧱 Div and Span</h1>

    <h2>📘 Definition</h2>
    <p className="subtitle">
      Both <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> are
      <strong> non-semantic elements</strong> used to group or style parts of a webpage.
    </p>

    {/* 🧩 Div */}
    <h2>🧩 Div</h2>
    <p className="subtitle">
      <code>&lt;div&gt;</code> is a <strong>block-level</strong> element.
      It is used to group large sections or layout areas.
      It always starts on a new line and takes the full width of its container.
    </p>

    <h3>🧱 Example:</h3>
    <pre className="code-block">
{`<div class="container">
  Content here
</div>`}
    </pre>

    <h3>✅ Commonly used for:</h3>
    <ul className="bullet-points">
      <li>📄 Page layout</li>
      <li>🧩 Grouping multiple elements</li>
      <li>🎨 Applying CSS to sections</li>
    </ul>

    {/* 🔹 Span */}
    <h2>🔹 Span</h2>
    <p className="subtitle">
      <code>&lt;span&gt;</code> is an <strong>inline</strong> element.
      It is used to style or group small portions of text within a line without breaking it.
    </p>

    <h3>🧱 Example:</h3>
    <pre className="code-block">
{`<p>This is <span class="highlight">important</span> text.</p>`}
    </pre>

    <h3>✅ Commonly used for:</h3>
    <ul className="bullet-points">
      <li>✨ Styling part of a sentence</li>
      <li>📝 Inline formatting (like color or font)</li>
    </ul>

    {/* ⚖️ Difference Table */}
    <h2>⚖️ Difference</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>&lt;div&gt;</th>
          <th>&lt;span&gt;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Type</td>
          <td>Block-level</td>
          <td>Inline</td>
        </tr>
        <tr>
          <td>Use</td>
          <td>For large sections or containers</td>
          <td>For small text parts inside a line</td>
        </tr>
        <tr>
          <td>Starts new line?</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
      </tbody>
    </table>

    {/* 🎯 Key Points */}
    <h2>🎯 Key Points</h2>
    <ul className="bullet-points">
      <li>✅ <code>&lt;div&gt;</code> → divides a page into large blocks</li>
      <li>✅ <code>&lt;span&gt;</code> → styles inline text portions</li>
      <li>✅ Both are <strong>non-semantic</strong> — use them mainly for layout or CSS styling</li>
    </ul>

    <p className="subtitle">
      🎯 <strong>Remember:</strong> Use semantic tags like <code>&lt;section&gt;</code> or <code>&lt;article&gt;</code> when the content has meaning — use <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> for styling or structure only.
    </p>
  </>
)}

{/* 🧭 Meta Tags & SEO Basics */}
{activeSection === "html-meta-seo" && (
  <>
    <h2>🧭 Meta Tags & SEO Basics</h2>

    <h3>📘 Definition</h3>
    <p className="subtitle">
      <strong>Meta tags</strong> provide information about a webpage
      (<em>metadata</em>) to browsers and search engines.  
      They are placed inside the <code>&lt;head&gt;</code> section and help with
      <strong> SEO (Search Engine Optimization)</strong>.
    </p>

    {/* 🧱 Common Meta Tags */}
    <h2>🧱 Common Meta Tags</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Tag</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>&lt;meta charset="UTF-8"&gt;</code></td>
          <td>Defines character encoding (supports all languages)</td>
        </tr>
        <tr>
          <td><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></td>
          <td>Makes website responsive on all devices</td>
        </tr>
        <tr>
          <td><code>&lt;meta name="description" content="Short page summary"&gt;</code></td>
          <td>Improves SEO ranking and search visibility</td>
        </tr>
        <tr>
          <td><code>&lt;meta name="keywords" content="HTML, CSS, Web Development"&gt;</code></td>
          <td>(Optional) Keywords for SEO</td>
        </tr>
        <tr>
          <td><code>&lt;meta name="author" content="Your Name"&gt;</code></td>
          <td>Shows the page author</td>
        </tr>
        <tr>
          <td><code>&lt;title&gt;Page Title&lt;/title&gt;</code></td>
          <td>Appears in browser tab and search results</td>
        </tr>
      </tbody>
    </table>

    {/* 💡 Example */}
    <h3>💡 Example:</h3>
    <pre className="code-block">
{`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn HTML meta tags and SEO basics.">
  <meta name="author" content="Sofia">
  <title>Meta Tags & SEO</title>
</head>`}
    </pre>

    {/* 🎯 SEO Basics */}
    <h2>🎯 SEO Basics</h2>
    <ul className="bullet-points">
      <li>✅ Use relevant <strong>titles</strong> and <strong>descriptions</strong></li>
      <li>✅ Include proper <strong>headings</strong> (<code>H1–H6</code>)</li>
      <li>✅ Use <code>alt</code> attributes for images</li>
      <li>✅ Make your site mobile-friendly (<code>viewport</code> tag)</li>
      <li>✅ Write meaningful content — search engines value clarity</li>
    </ul>

    {/* 🔍 Key Points */}
    <h2>🔍 Key Points</h2>
    <ul className="bullet-points">
      <li>📍 Meta tags live in the <code>&lt;head&gt;</code> section</li>
      <li>🕵️ They don’t display on the page but affect SEO</li>
      <li>🌐 Help browsers and search engines understand your content</li>
    </ul>

    <p className="subtitle">
      💡 <strong>Pro Tip:</strong> Keep your title under 60 characters and your
      description under 160 characters for the best search result appearance.
    </p>
  </>
)}
{/* 🧰 HTML Entities and Symbols */}
{activeSection === "html-entities-symbols" && (
  <>
    <h1>🧰 HTML Entities and Symbols</h1>
    <h2>📘 Definition</h2>
    <p className="subtitle">
      HTML Entities are special codes used to display reserved characters, symbols, or emojis that can’t be typed directly in HTML.
    </p>
    <h2>🧱 Why Use Entities?</h2>
    <ul className="bullet-points">
      <li>➡️ To display characters like <code>&lt;</code>, <code>&gt;</code>, or <code>&amp;</code> safely.</li>
      <li>💎 To show special symbols like €, ©, ®, →, etc.</li>
      <li>🌐 To ensure proper rendering across browsers.</li>
    </ul>
  <h2>💡 Common Entities</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Entity Code</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>&lt;</td><td>&amp;lt;</td><td>Less than</td></tr>
        <tr><td>&gt;</td><td>&amp;gt;</td><td>Greater than</td></tr>
        <tr><td>&amp;</td><td>&amp;amp;</td><td>Ampersand</td></tr>
        <tr><td>"</td><td>&amp;quot;</td><td>Double quote</td></tr>
        <tr><td>'</td><td>&amp;apos;</td><td>Single quote</td></tr>
        <tr><td>©</td><td>&amp;copy;</td><td>Copyright</td></tr>
        <tr><td>®</td><td>&amp;reg;</td><td>Registered trademark</td></tr>
        <tr><td>₹</td><td>&amp;#8377;</td><td>Indian Rupee symbol</td></tr>
        <tr><td>→</td><td>&amp;rarr;</td><td>Right arrow</td></tr>
        <tr><td>♥</td><td>&amp;hearts;</td><td>Heart symbol</td></tr>
      </tbody>
    </table>
  <h2>🧩 Example</h2>
    <pre className="code-block">
{`<p>5 &lt; 10 &amp; 10 &gt; 5</p>
<p>&copy; 2025 My Website</p>`}
    </pre>
  <h2>🎯 Key Points</h2>
    <ul className="bullet-points">
      <li>✅ Use entities to show special characters safely.</li>
      <li>✅ Begin with <code>&amp;</code> and end with <code>;</code>.</li>
      <li>✅ Useful for symbols, currency, and reserved characters.</li>
    </ul>
  </>
)}
{/* 🗂️ HTML Layouts */}
{activeSection === "html-layouts" && (
  <>
    <h1>🗂️ HTML Layouts</h1>
    <h2>📘 Definition</h2>
    <p className="subtitle">
      An <strong>HTML layout</strong> defines how different sections like header, content, sidebar, and footer are arranged on a webpage.
    </p>
    <h2>🧱 Common Layout Elements</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Element</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>&lt;header&gt;</td><td>Top section (logo, navigation)</td></tr>
        <tr><td>&lt;nav&gt;</td><td>Menu or navigation links</td></tr>
        <tr><td>&lt;main&gt;</td><td>Main content area</td></tr>
        <tr><td>&lt;section&gt;</td><td>Thematic content group</td></tr>
        <tr><td>&lt;article&gt;</td><td>Independent content block</td></tr>
        <tr><td>&lt;aside&gt;</td><td>Sidebar or related info</td></tr>
        <tr><td>&lt;footer&gt;</td><td>Bottom section (contact, copyright)</td></tr>
      </tbody>
    </table>

    {/* 🧩 Layout Techniques */}
    <h2>🧩 Layout Techniques</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>HTML + CSS</td><td>Basic layout using block elements</td></tr>
        <tr><td>Flexbox</td><td>Aligns and arranges items in rows or columns easily</td></tr>
        <tr><td>Grid</td><td>Creates complex, two-dimensional layouts</td></tr>
        <tr><td>Float / Position</td><td>Older methods (less used today)</td></tr>
      </tbody>
    </table>
    <h2>💡 Simple Example</h2>
    <pre className="code-block">
{`<header>Header</header>
<nav>Navigation</nav>
<main>Main Content</main>
<aside>Sidebar</aside>
<footer>Footer</footer>`}
    </pre>
    <h2>🎯 Key Points</h2>
    <ul className="bullet-points">
      <li>✅ Use <strong>semantic elements</strong> for page structure.</li>
      <li>✅ Prefer <strong>Flexbox</strong> or <strong>Grid</strong> for modern responsive layouts.</li>
      <li>✅ Keep layouts <strong>responsive</strong> using CSS media queries.</li>
    </ul>
  </>
)}
{/* 🚀 Mini Projects (Practice) */}
{activeSection === "html-mini-projects" && (
  <>
    <h2>🚀 Mini Project Ideas (HTML + CSS + Basic JS)</h2>

    <h3>🧱 Beginner Level</h3>
    <ul className="bullet-points">
      <li>👤 <strong>Personal Portfolio Page</strong> — Add your photo, skills, and contact links.</li>
      <li>📄 <strong>Simple Resume Website</strong> — Display education, experience, and achievements.</li>
      <li>🍽️ <strong>Restaurant Menu Page</strong> — Use lists, images, and prices.</li>
      <li>✈️ <strong>Travel Blog Template</strong> — Create posts with images and captions.</li>
      <li>🎉 <strong>Event Invitation Page</strong> — Include event details, map, and RSVP form.</li>
      <li>🖼️ <strong>Photo Gallery</strong> — Grid layout with hover effects.</li>
      <li>📝 <strong>Feedback Form</strong> — Use different form input types.</li>
      <li>🛒 <strong>Landing Page for a Product</strong> — Highlight features and a “Buy Now” button.</li>
      <li>🔢 <strong>Simple Calculator UI</strong> — HTML buttons and display screen.</li>
      <li>🎵 <strong>Music Player Page (UI only)</strong> — Play/pause icons and album design.</li>
    </ul>

    <h3>⚙️ Intermediate Level</h3>
    <ul className="bullet-points">
      <li>🔐 <strong>Login & Signup Page</strong> — With form validation.</li>
      <li>🖼️ <strong>Portfolio with Modal Popups</strong> — Show project details in popups.</li>
      <li>✅ <strong>To-Do List App (with JS)</strong> — Add/remove tasks dynamically.</li>
      <li>☁️ <strong>Weather Info Page (with API)</strong> — Display real-time data.</li>
      <li>❓ <strong>Quiz App</strong> — Multiple-choice quiz with score display.</li>
      <li>📰 <strong>Responsive News Website Layout</strong> — Use Flexbox or Grid.</li>
      <li>⏱️ <strong>Digital Clock / Timer</strong> — Update time using JavaScript.</li>
      <li>▶️ <strong>YouTube Video Embed Page</strong> — Using <code>&lt;iframe&gt;</code> and styling.</li>
      <li>💳 <strong>Pricing Table Design</strong> — Show different plans with hover effects.</li>
      <li>🌗 <strong>Portfolio with Dark/Light Mode Toggle</strong> — Switch themes using JS.</li>
    </ul>

    <h3>🧠 Advanced (HTML + CSS + JS)</h3>
    <ul className="bullet-points">
      <li>🛍️ <strong>E-Commerce Product Page</strong> — Image gallery, cart buttons, and description.</li>
      <li>✍️ <strong>Blog Website Template</strong> — With sidebar, posts, and comments section.</li>
      <li>🧾 <strong>Interactive Resume Builder</strong> — Fill form → generate styled resume.</li>
      <li>📊 <strong>Responsive Dashboard Layout</strong> — Cards, charts, and side navigation.</li>
      <li>🧠 <strong>Quiz or Flashcard Learning App</strong> — Store data using LocalStorage.</li>
      <li>📋 <strong>Online Survey Form</strong> — Collect and preview user responses.</li>
      <li>✨ <strong>Portfolio with Animation</strong> — Use transitions or scroll effects.</li>
    </ul>

    <h3>🎯 Key Tips</h3>
    <ul className="bullet-points">
      <li>✅ Start small and build step by step.</li>
      <li>✅ Focus on layout, structure, and accessible forms.</li>
      <li>✅ Use semantic tags for SEO and readability.</li>
      <li>✅ Make all projects responsive (mobile-first + media queries).</li>
    </ul>
  </>
)}


      </main>
    </div>
    
    
  );
};

export default HtmlCourse;
