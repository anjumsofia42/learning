import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "../Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './JavaCourse.css';

const JavaCourse = () => {
  const [activeSection, setActiveSection] = useState('java-introduction');
  const navigate = useNavigate();

  return (
    <div className="java-course-container d-flex">
      {/* ======= Sidebar (Desktop) ======= */}
      <aside className="sidebar d-none d-md-block p-3">
        <h4 className="sidebar-title">Java Tutorial</h4>
        <ul className="list-unstyled mt-3">
          <li onClick={() => navigate('/')}>🏠 Home</li>

          <li className={activeSection === 'java-introduction' ? 'active' : ''} onClick={() => setActiveSection('java-introduction')}>🧩 Introduction to Java</li>
          <li className={activeSection === 'java-setup' ? 'active' : ''} onClick={() => setActiveSection('java-setup')}>🧱 Setting Up the Java Development Environment (JDK, JRE, JVM)</li>
          <li className={activeSection === 'java-syntax' ? 'active' : ''} onClick={() => setActiveSection('java-syntax')}>⚙️ Basic Java Syntax</li>
          <li className={activeSection === 'java-operators' ? 'active' : ''} onClick={() => setActiveSection('java-operators')}>🧮 Java Operators and Expressions</li>
          <li className={activeSection === 'java-control' ? 'active' : ''} onClick={() => setActiveSection('java-control')}>🧭 Java Control Statements</li>
          <li className={activeSection === 'java-arrays' ? 'active' : ''} onClick={() => setActiveSection('java-arrays')}>🧮 Arrays in Java</li>
          <li className={activeSection === 'java-strings' ? 'active' : ''} onClick={() => setActiveSection('java-strings')}>💬 Strings in Java</li>
          <li className={activeSection === 'java-methods' ? 'active' : ''} onClick={() => setActiveSection('java-methods')}>🧱 Methods (Functions)</li>
          <li className={activeSection === 'java-oop' ? 'active' : ''} onClick={() => setActiveSection('java-oop')}>☕ Object-Oriented Programming (OOP)</li>
          <li className={activeSection === 'java-keywords' ? 'active' : ''} onClick={() => setActiveSection('java-keywords')}>🔄 Static, This, and Super Keywords</li>
          <li className={activeSection === 'java-packages' ? 'active' : ''} onClick={() => setActiveSection('java-packages')}>🧮 Packages</li>
          <li className={activeSection === 'java-wrapper' ? 'active' : ''} onClick={() => setActiveSection('java-wrapper')}>🧰 Wrapper Classes & Autoboxing</li>
          <li className={activeSection === 'java-exception' ? 'active' : ''} onClick={() => setActiveSection('java-exception')}>📦 Exception Handling</li>
          <li className={activeSection === 'java-file-handling' ? 'active' : ''} onClick={() => setActiveSection('java-file-handling')}>🧩 File Handling (I/O)</li>
          <li className={activeSection === 'java-collections' ? 'active' : ''} onClick={() => setActiveSection('java-collections')}>🔄 Collections Framework</li>
          <li className={activeSection === 'java-generics' ? 'active' : ''} onClick={() => setActiveSection('java-generics')}>🧠 Generics in Java</li>
          <li className={activeSection === 'java-multithreading' ? 'active' : ''} onClick={() => setActiveSection('java-multithreading')}>⚙️ Multithreading in Java</li>
          <li className={activeSection === 'java-enum' ? 'active' : ''} onClick={() => setActiveSection('java-enum')}>🧮 Enum, Var args & Static Import</li>
          <li className={activeSection === 'java-inner' ? 'active' : ''} onClick={() => setActiveSection('java-inner')}>🧠 Inner Classes</li>
          <li className={activeSection === 'java-8-features' ? 'active' : ''} onClick={() => setActiveSection('java-8-features')}>🧱 Java 8 Features (Modern Java)</li>
          <li className={activeSection === 'java-jdbc' ? 'active' : ''} onClick={() => setActiveSection('java-jdbc')}>🧰 JDBC (Java Database Connectivity)</li>
          <li className={activeSection === 'java-memory' ? 'active' : ''} onClick={() => setActiveSection('java-memory')}>🧠 Memory Management & Garbage Collection</li>
          <li className={activeSection === 'java-mini-projects' ? 'active' : ''} onClick={() => setActiveSection('java-mini-projects')}>🚀 Mini Projects / Practice</li>
        </ul>
      </aside>
        {/* ======= Sidebar Toggle (Mobile only, beside content) ======= */}
      <button
        className="btn btn-dark d-md-none position-fixed toggle-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#javaSidebar"
        aria-controls="javaSidebar"
      >
        <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
      </button>

      {/* ======= Offcanvas Sidebar (Mobile) ======= */}
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex="-1"
        id="javaSidebar"
        aria-labelledby="javaSidebarLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="javaSidebarLabel">
            JAVA Tutorial
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

          <li className={activeSection === 'java-introduction' ? 'active' : ''} onClick={() => setActiveSection('java-introduction')}>🧩 Introduction to Java</li>
          <li className={activeSection === 'java-setup' ? 'active' : ''} onClick={() => setActiveSection('java-setup')}>🧱 Setting Up the Java Development Environment (JDK, JRE, JVM)</li>
          <li className={activeSection === 'java-syntax' ? 'active' : ''} onClick={() => setActiveSection('java-syntax')}>⚙️ Basic Java Syntax</li>
          <li className={activeSection === 'java-operators' ? 'active' : ''} onClick={() => setActiveSection('java-operators')}>🧮 Java Operators and Expressions</li>
          <li className={activeSection === 'java-control' ? 'active' : ''} onClick={() => setActiveSection('java-control')}>🧭 Java Control Statements</li>
          <li className={activeSection === 'java-arrays' ? 'active' : ''} onClick={() => setActiveSection('java-arrays')}>🧮 Arrays in Java</li>
          <li className={activeSection === 'java-strings' ? 'active' : ''} onClick={() => setActiveSection('java-strings')}>💬 Strings in Java</li>
          <li className={activeSection === 'java-methods' ? 'active' : ''} onClick={() => setActiveSection('java-methods')}>🧱 Methods (Functions)</li>
          <li className={activeSection === 'java-oop' ? 'active' : ''} onClick={() => setActiveSection('java-oop')}>☕ Object-Oriented Programming (OOP)</li>
          <li className={activeSection === 'java-keywords' ? 'active' : ''} onClick={() => setActiveSection('java-keywords')}>🔄 Static, This, and Super Keywords</li>
          <li className={activeSection === 'java-packages' ? 'active' : ''} onClick={() => setActiveSection('java-packages')}>🧮 Packages</li>
          <li className={activeSection === 'java-wrapper' ? 'active' : ''} onClick={() => setActiveSection('java-wrapper')}>🧰 Wrapper Classes & Autoboxing</li>
          <li className={activeSection === 'java-exception' ? 'active' : ''} onClick={() => setActiveSection('java-exception')}>📦 Exception Handling</li>
          <li className={activeSection === 'java-file-handling' ? 'active' : ''} onClick={() => setActiveSection('java-file-handling')}>🧩 File Handling (I/O)</li>
          <li className={activeSection === 'java-collections' ? 'active' : ''} onClick={() => setActiveSection('java-collections')}>🔄 Collections Framework</li>
          <li className={activeSection === 'java-generics' ? 'active' : ''} onClick={() => setActiveSection('java-generics')}>🧠 Generics in Java</li>
          <li className={activeSection === 'java-multithreading' ? 'active' : ''} onClick={() => setActiveSection('java-multithreading')}>⚙️ Multithreading in Java</li>
          <li className={activeSection === 'java-enum' ? 'active' : ''} onClick={() => setActiveSection('java-enum')}>🧮 Enum, Var args & Static Import</li>
          <li className={activeSection === 'java-inner' ? 'active' : ''} onClick={() => setActiveSection('java-inner')}>🧠 Inner Classes</li>
          <li className={activeSection === 'java-8-features' ? 'active' : ''} onClick={() => setActiveSection('java-8-features')}>🧱 Java 8 Features (Modern Java)</li>
          <li className={activeSection === 'java-jdbc' ? 'active' : ''} onClick={() => setActiveSection('java-jdbc')}>🧰 JDBC (Java Database Connectivity)</li>
          <li className={activeSection === 'java-memory' ? 'active' : ''} onClick={() => setActiveSection('java-memory')}>🧠 Memory Management & Garbage Collection</li>
          <li className={activeSection === 'java-mini-projects' ? 'active' : ''} onClick={() => setActiveSection('java-mini-projects')}>🚀 Mini Projects / Practice</li>
        </ul>
        </div>
        </div>
        {/* Main Course Content */}
        <main className="course-content flex-grow-1 p-4">
        {/* 🧩 Introduction to Java */}
{activeSection === "java-introduction" && (
  <>
    <h1>🧩 Introduction to Java</h1>
    <p className="subtitle">
      Welcome to the world of <b>Java Programming! ☕</b>  
      Java is one of the most powerful, popular, and widely used programming languages.  
      In this section, you’ll learn what Java is, its features, and why it’s so important in modern software development.
    </p>

    <hr />

    {/* 📘 What is Java */}
    <h2>📘 What is Java?</h2>
    <p>
      <b>Java</b> is a <b>high-level, object-oriented, platform-independent</b> programming language developed by <b>James Gosling</b> at Sun Microsystems in <b>1995</b>.
      It is used to build applications ranging from web and mobile apps to desktop software and enterprise systems.
    </p>

    <h3>💬 Example:</h3>
    <pre className="code-block">
{`class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`}
    </pre>
    <p>💡 This is the most basic Java program — it prints “Hello, World!” to the screen.</p>

    <hr />

    {/* ⚙️ Key Features of Java */}
    <h2>⚙️ Key Features of Java</h2>
    <ul className="bullet-points">
      <li>☕ <b>Simple:</b> Easy to learn and write, similar to C++ but with fewer complexities.</li>
      <li>💻 <b>Object-Oriented:</b> Everything in Java revolves around objects and classes.</li>
      <li>🌍 <b>Platform Independent:</b> “Write once, run anywhere” — Java code runs on all platforms using the JVM.</li>
      <li>🔒 <b>Secure:</b> Java provides built-in security features like bytecode verification and no pointer manipulation.</li>
      <li>⚡ <b>High Performance:</b> Just-In-Time (JIT) compiler improves execution speed.</li>
      <li>🔁 <b>Multithreaded:</b> Supports multiple threads for parallel processing.</li>
      <li>🧱 <b>Robust:</b> Handles errors effectively and has strong memory management.</li>
      <li>☁️ <b>Distributed:</b> Java is ideal for network-based (web) applications.</li>
    </ul>

    <hr />

    {/* 🧠 How Java Works */}
    <h2>🧠 How Java Works</h2>
    <p>Java programs are compiled into <b>bytecode</b>, which is executed by the <b>Java Virtual Machine (JVM)</b>.  
    This makes Java both fast and platform-independent.</p>

    <h3>⚙️ Java Execution Process:</h3>
    <ol>
      <li>✍️ Write the code → <code>HelloWorld.java</code></li>
      <li>🧩 Compile → <code>javac HelloWorld.java</code> → generates <code>HelloWorld.class</code> (bytecode)</li>
      <li>🚀 Run → <code>java HelloWorld</code> → JVM executes bytecode on your OS</li>
    </ol>

    <pre className="code-block">
{`Java Source Code (.java)
        ↓
Java Compiler (javac)
        ↓
Bytecode (.class)
        ↓
JVM (Java Virtual Machine)
        ↓
Machine Code (runs on OS)
`}
    </pre>

    <p>💡 This process makes Java programs portable across different operating systems like Windows, Mac, and Linux.</p>

    <hr />

    {/* 🧱 Java Editions */}
    <h2>🧱 Java Editions</h2>
    <ul className="bullet-points">
      <li>📗 <b>Java SE (Standard Edition):</b> Core Java for general-purpose applications.</li>
      <li>🌐 <b>Java EE (Enterprise Edition):</b> For web and enterprise-level applications.</li>
      <li>📱 <b>Java ME (Micro Edition):</b> For mobile and embedded systems.</li>
      <li>☁️ <b>JavaFX:</b> For building rich internet and desktop GUI applications.</li>
    </ul>

    <hr />

    {/* 💬 Why Learn Java */}
    <h2>💬 Why Learn Java?</h2>
    <ul className="bullet-points">
      <li>💼 Highly demanded in jobs and interviews.</li>
      <li>🌍 Used in Android, Banking, Cloud, and Web applications.</li>
      <li>🧠 Strengthens logic and programming fundamentals.</li>
      <li>📚 Huge community support and rich documentation.</li>
    </ul>

    <p className="highlight">
      🚀 Java is everywhere — powering websites, mobile apps, and large enterprise systems.  
      Learning Java builds a strong foundation for your programming career! 💪
    </p>

    <hr />

    {/* ✅ Summary */}
    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>☕ Java is an object-oriented, platform-independent programming language.</li>
      <li>⚙️ It follows the principle of “Write Once, Run Anywhere.”</li>
      <li>💡 Compiles code to bytecode executed by the JVM.</li>
      <li>🌍 Used in various domains: web, mobile, enterprise, and cloud.</li>
    </ul>

    <p className="highlight">
      🎯 Next: Let’s set up your Java environment and write your first real program! 🧱
    </p>
  </>
)}
{/* 🧱 Setting Up the Java Development Environment (JDK, JRE, JVM) */}
{activeSection === "java-setup" && (
  <>
    <h1>🧱 Setting Up the Java Development Environment (JDK, JRE, JVM)</h1>
    <p className="subtitle">
      Before writing Java programs, you need to set up your system properly.  
      Let’s understand what <b>JDK</b>, <b>JRE</b>, and <b>JVM</b> are, and then install them step-by-step. ⚙️
    </p>

    <hr />

    {/* ☕ Java Components Overview */}
    <h2>☕ Understanding Java Components</h2>
    <p>
      Java is built on three main components that work together to run programs efficiently:
    </p>

    <table className="summary-table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Full Form</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>JVM</b></td>
          <td>Java Virtual Machine</td>
          <td>Executes Java bytecode (the heart of Java's portability)</td>
        </tr>
        <tr>
          <td><b>JRE</b></td>
          <td>Java Runtime Environment</td>
          <td>Provides libraries and JVM to run Java programs</td>
        </tr>
        <tr>
          <td><b>JDK</b></td>
          <td>Java Development Kit</td>
          <td>Contains JRE + tools (like compiler) to write and run Java programs</td>
        </tr>
      </tbody>
    </table>

    <h3>💡 In Simple Terms:</h3>
    <p>
      <b>JDK = JRE + Development Tools</b>  
      <br />
      <b>JRE = JVM + Libraries</b>
    </p>

    <hr />

    {/* ⚙️ Step-by-Step Installation */}
    <h2>⚙️ Step 1: Download and Install JDK</h2>
    <ol>
      <li>🔗 Go to the official website: <a href="https://www.oracle.com/java/technologies/downloads/" target="_blank">Oracle Java Downloads</a></li>
      <li>⬇️ Choose the latest version (e.g., Java 21 or Java 17 LTS).</li>
      <li>💻 Select your OS (Windows / macOS / Linux) and download the installer.</li>
      <li>🚀 Run the installer and follow on-screen instructions.</li>
    </ol>

    <p>💡 For development, always install the <b>JDK</b> (not just the JRE).</p>

    <hr />

    <h2>⚙️ Step 2: Set Environment Variables (Windows)</h2>
    <ol>
      <li>Open the Start menu and search for <b>Environment Variables</b>.</li>
      <li>Click <b>Edit the system environment variables → Environment Variables.</b></li>
      <li>Under <b>System Variables</b>, click <b>New</b>:
        <ul>
          <li><b>Variable Name:</b> JAVA_HOME</li>
          <li><b>Variable Value:</b> Path to your JDK folder (e.g., <code>C:\Program Files\Java\jdk-21</code>)</li>
        </ul>
      </li>
      <li>Then edit the <b>Path</b> variable → click <b>New</b> → add <code>%JAVA_HOME%\bin</code></li>
      <li>Click <b>OK</b> to save changes.</li>
    </ol>

    <h3>✅ Verify Installation:</h3>
    <pre className="code-block">
{`java -version
javac -version`}
    </pre>

    <p>🎉 If you see version details (like <code>java version "21.0.1"</code>), Java is successfully installed!</p>

    <hr />

    {/* 💻 Setting Up a Code Editor */}
    <h2>💻 Step 3: Setting Up a Code Editor / IDE</h2>
    <p>Choose one of these popular editors to write and run Java programs:</p>
    <ul className="bullet-points">
      <li>🧱 <b>VS Code:</b> Lightweight and easy to use (requires Java Extension Pack).</li>
      <li>🏗️ <b>IntelliJ IDEA:</b> Most powerful and beginner-friendly IDE for Java.</li>
      <li>🔧 <b>Eclipse:</b> Classic Java IDE with lots of features.</li>
      <li>📘 <b>BlueJ / NetBeans:</b> Great for students and beginners.</li>
    </ul>

    <hr />

    {/* 🧩 Your First Java Program */}
    <h2>🧩 Step 4: Write Your First Java Program</h2>
    <pre className="code-block">
{`class FirstProgram {
  public static void main(String[] args) {
    System.out.println("Java setup successful!");
  }
}`}
    </pre>

    <h3>🛠️ How to Run:</h3>
    <ol>
      <li>Save the file as <code>FirstProgram.java</code></li>
      <li>Open a terminal or command prompt in that folder</li>
      <li>Run these commands:</li>
    </ol>

    <pre className="code-block">
{`javac FirstProgram.java   // Compiles the code
java FirstProgram          // Runs the code`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Java setup successful!`}
    </pre>

    <p className="highlight">
      🎉 Congratulations! Your Java environment is ready, and you just wrote your first program! 🚀  
      Next, we’ll explore <b>Java syntax and structure</b> to understand how Java code works.
    </p>
  </>
)}
{/* ⚙️ Basic Java Syntax */}
{activeSection === "java-syntax" && (
  <>
    <h1>⚙️ Basic Java Syntax</h1>
    <p className="subtitle">
      Now that your Java environment is ready, let’s understand the <b>basic syntax</b> —  
      the structure and rules every Java program follows. 💡  
      Think of it like learning the grammar of the Java language!
    </p>

    <hr />

    {/* 🧱 Structure of a Java Program */}
    <h2>🧱 Structure of a Java Program</h2>
    <pre className="code-block">
{`class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, Java!");
  }
}`}
    </pre>

    <p>✅ <b>Output:</b></p>
    <pre className="code-block">Hello, Java!</pre>

    <h3>💬 Let’s break it down:</h3>
    <ul className="bullet-points">
      <li>📦 <b>class HelloWorld</b> — Every Java program must have a class. The filename must match the class name.</li>
      <li>⚙️ <b>public static void main(String[] args)</b> — The entry point of every Java program.  
        The program starts running from here.
      </li>
      <li>🖨️ <b>System.out.println()</b> — Used to print output to the console.</li>
      <li>🔣 <b>;</b> — Every Java statement ends with a semicolon.</li>
    </ul>

    <hr />

    {/* 🔤 Java Syntax Rules */}
    <h2>🔤 Java Syntax Rules</h2>
    <ul className="bullet-points">
      <li>☕ Java is <b>case-sensitive</b> — <code>Hello</code> and <code>hello</code> are different.</li>
      <li>📦 The <b>class name</b> must match the filename.</li>
      <li>🔣 Every statement must end with a <b>semicolon (;)</b>.</li>
      <li>🧱 Code blocks are enclosed in <b>{`{ }`}</b> braces.</li>
      <li>💬 Comments can be added using <b>//</b> or <b>/* ... */</b>.</li>
    </ul>

    <hr />

    {/* 💬 Comments in Java */}
    <h2>💬 Comments in Java</h2>
    <p>Comments help make your code readable. They are ignored by the compiler.</p>
    <pre className="code-block">
{`// This is a single-line comment

/*
 This is a
 multi-line comment
*/

public class CommentsDemo {
  public static void main(String[] args) {
    System.out.println("Comments Example");
  }
}`}
    </pre>

    <hr />

    {/* 🧩 Identifiers and Keywords */}
    <h2>🧩 Identifiers and Keywords</h2>
    <h3>📘 Identifiers:</h3>
    <p>Names given to classes, variables, methods, etc.</p>
    <ul className="bullet-points">
      <li>Must start with a letter, $, or _</li>
      <li>Cannot start with a number</li>
      <li>Can contain letters, digits, _, $</li>
      <li>Are case-sensitive</li>
    </ul>

    <h3>🚫 Invalid Example:</h3>
    <pre className="code-block">
{`int 123name; // ❌ Invalid (cannot start with a number)`}
    </pre>

    <h3>✅ Valid Example:</h3>
    <pre className="code-block">
{`int studentName;  // ✅ Valid
int _age;          // ✅ Valid
int $salary;       // ✅ Valid`}
    </pre>

    <h3>🧠 Keywords:</h3>
    <p>Java has reserved words you cannot use as identifiers.</p>
    <pre className="code-block">
{`class, public, static, void, int, if, else, while, for, return, new, try, catch, import`}
    </pre>

    <hr />

    {/* 📦 Variables and Data Types */}
    <h2>📦 Variables and Data Types</h2>
    <p>
      Variables are used to store data.  
      Every variable must have a <b>type</b> and a <b>name</b>.
    </p>

    <h3>Example 👇</h3>
    <pre className="code-block">
{`int age = 20;
double price = 99.99;
char grade = 'A';
String name = "Sofia";
boolean isStudent = true;`}
    </pre>

    <h3>🧩 Common Data Types:</h3>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Example</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>int</td><td>10</td><td>Stores integers</td></tr>
        <tr><td>double</td><td>10.5</td><td>Stores decimal numbers</td></tr>
        <tr><td>char</td><td>'A'</td><td>Stores single characters</td></tr>
        <tr><td>String</td><td>"Hello"</td><td>Stores a sequence of characters</td></tr>
        <tr><td>boolean</td><td>true / false</td><td>Stores logical values</td></tr>
      </tbody>
    </table>

    <hr />

    {/* 🧠 Printing in Java */}
    <h2>🧠 Printing Output in Java</h2>
    <p>You can display output using <code>System.out.println()</code> or <code>System.out.print()</code>.</p>
    <pre className="code-block">
{`System.out.print("Hello ");  
System.out.println("Java!");`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Hello Java!`}
    </pre>

    <ul className="bullet-points">
      <li><b>print()</b> → stays on the same line.</li>
      <li><b>println()</b> → moves to a new line after printing.</li>
    </ul>

    <hr />

    {/* 🧩 Escape Sequences */}
    <h2>🧩 Escape Sequences</h2>
    <p>Used to format strings inside <code>System.out.println()</code>.</p>
    <pre className="code-block">
{`System.out.println("Hello\\nJava"); // New line
System.out.println("Hello\\tWorld"); // Tab space
System.out.println("He said \\"Hi!\\""); // Double quotes`}
    </pre>

    <h3>✅ Output:</h3>
    <pre className="code-block">
{`Hello
Java
Hello    World
He said "Hi!"`}
    </pre>

    <hr />

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>Java programs are written inside <b>classes</b>.</li>
      <li>The main method <b>public static void main()</b> is the entry point.</li>
      <li>Each statement ends with a semicolon <b>;</b>.</li>
      <li>Java is <b>case-sensitive</b>.</li>
      <li>Use <b>System.out.println()</b> to print output.</li>
      <li>Use <b>//</b> or <b>/* */</b> for comments.</li>
      <li>Variables must have a <b>type</b> and <b>name</b>.</li>
    </ul>

    <p className="highlight">
      🎉 Great job! You’ve mastered the basic syntax of Java.  
      Next, we’ll explore <b>Operators and Expressions</b> in Java to perform calculations and logic. ⚡
    </p>
  </>
)}
{/* 🧮 Java Operators and Expressions */}
{activeSection === "java-operators" && (
  <>
    <h1>🧮 Java Operators and Expressions</h1>
    <p className="subtitle">
      Operators are symbols that perform operations on variables and values.  
      Expressions combine variables, values, and operators to produce a result.  
      Let's understand all types of operators in Java step by step. ⚡
    </p>

    <hr />

    {/* ➕ 1. Arithmetic Operators */}
    <h2>➕ 1. Arithmetic Operators</h2>
    <p>Used for basic mathematical calculations.</p>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>+</td><td>Addition</td><td>10 + 5</td><td>15</td></tr>
        <tr><td>-</td><td>Subtraction</td><td>10 - 5</td><td>5</td></tr>
        <tr><td>*</td><td>Multiplication</td><td>10 * 5</td><td>50</td></tr>
        <tr><td>/</td><td>Division</td><td>10 / 5</td><td>2</td></tr>
        <tr><td>%</td><td>Modulus (Remainder)</td><td>10 % 3</td><td>1</td></tr>
      </tbody>
    </table>

    <pre className="code-block">
{`int a = 10, b = 3;
System.out.println(a + b); // 13
System.out.println(a - b); // 7
System.out.println(a * b); // 30
System.out.println(a / b); // 3
System.out.println(a % b); // 1`}
    </pre>

    <hr />

    {/* ⚙️ 2. Assignment Operators */}
    <h2>⚙️ 2. Assignment Operators</h2>
    <p>Used to assign values to variables.</p>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Operator</th><th>Description</th><th>Example</th><th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>=</td><td>Assign value</td><td>x = 10</td><td>10</td></tr>
        <tr><td>+=</td><td>Add and assign</td><td>x += 5</td><td>x = x + 5</td></tr>
        <tr><td>-=</td><td>Subtract and assign</td><td>x -= 5</td><td>x = x - 5</td></tr>
        <tr><td>*=</td><td>Multiply and assign</td><td>x *= 5</td><td>x = x * 5</td></tr>
        <tr><td>/=</td><td>Divide and assign</td><td>x /= 5</td><td>x = x / 5</td></tr>
      </tbody>
    </table>

    <pre className="code-block">
{`int x = 10;
x += 5; // 15
x -= 3; // 12
x *= 2; // 24
x /= 4; // 6`}
    </pre>

    <hr />

    {/* 🔄 3. Relational Operators */}
    <h2>🔄 3. Relational Operators</h2>
    <p>Used to compare two values. Returns <b>true</b> or <b>false</b>.</p>
    <table className="summary-table">
      <thead>
        <tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr>
      </thead>
      <tbody>
        <tr><td>==</td><td>Equal to</td><td>10 == 5</td><td>false</td></tr>
        <tr><td>!=</td><td>Not equal to</td><td>10 != 5</td><td>true</td></tr>
        <tr><td>&gt;</td><td>Greater than</td><td>10 &gt; 5</td><td>true</td></tr>
        <tr><td>&lt;</td><td>Less than</td><td>10 &lt; 5</td><td>false</td></tr>
        <tr><td>&gt;=</td><td>Greater or equal</td><td>10 &gt;= 5</td><td>true</td></tr>
        <tr><td>&lt;=</td><td>Less or equal</td><td>10 &lt;= 5</td><td>false</td></tr>
      </tbody>
    </table>

    <pre className="code-block">
{`int a = 10, b = 5;
System.out.println(a > b);  // true
System.out.println(a == b); // false
System.out.println(a != b); // true`}
    </pre>

    <hr />

    {/* 🧠 4. Logical Operators */}
    <h2>🧠 4. Logical Operators</h2>
    <p>Used to combine multiple conditions.</p>
    <table className="summary-table">
      <thead>
        <tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr>
      </thead>
      <tbody>
        <tr><td>&&</td><td>Logical AND</td><td>(a {`>`} 5 && b {`<`} 10)</td><td>true if both true</td></tr>
        <tr><td>||</td><td>Logical OR</td><td>(a {`>`} 5 || b {`>`} 10)</td><td>true if any true</td></tr>
        <tr><td>!</td><td>Logical NOT</td><td>!(a {`>`} 5)</td><td>Reverses result</td></tr>
      </tbody>
    </table>

    <pre className="code-block">
{`int a = 8, b = 4;
System.out.println(a > 5 && b < 10); // true
System.out.println(a < 5 || b < 10); // true
System.out.println(!(a == 8));       // false`}
    </pre>

    <hr />

    {/* 🔢 5. Increment and Decrement */}
    <h2>🔢 5. Increment and Decrement Operators</h2>
    <p>Used to increase or decrease a variable by 1.</p>
    <table className="summary-table">
      <thead>
        <tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr>
      </thead>
      <tbody>
        <tr><td>++</td><td>Increment by 1</td><td>x++</td><td>x = x + 1</td></tr>
        <tr><td>--</td><td>Decrement by 1</td><td>x--</td><td>x = x - 1</td></tr>
      </tbody>
    </table>

    <pre className="code-block">
{`int x = 5;
System.out.println(x++); // 5 (then x becomes 6)
System.out.println(++x); // 7 (x becomes 7 first, then prints)
System.out.println(x--); // 7 (then x becomes 6)
System.out.println(--x); // 5`}
    </pre>

    <hr />

    {/* ⚡ 6. Conditional (Ternary) Operator */}
    <h2>⚡ 6. Conditional (Ternary) Operator</h2>
    <p>Shortcut for <code>if-else</code> statements.</p>
    <pre className="code-block">
{`int age = 18;
String result = (age >= 18) ? "Eligible" : "Not Eligible";
System.out.println(result); // Eligible`}
    </pre>

    <p>🧩 Syntax: <code>condition ? value_if_true : value_if_false</code></p>

    <hr />

    {/* 🧮 7. Expressions */}
    <h2>🧮 7. Expressions in Java</h2>
    <p>An expression is a combination of variables, values, and operators that produces a result.</p>
    <pre className="code-block">
{`int a = 5, b = 10;
int sum = a + b * 2; // Expression
System.out.println(sum); // 25`}
    </pre>

    <p>👉 Follows <b>operator precedence</b> — multiplication happens before addition.</p>

    <hr />

    {/* ⚙️ Operator Precedence */}
    <h2>⚙️ Operator Precedence (Order of Execution)</h2>
    <p>When multiple operators are used, Java decides which one to execute first.</p>
    <pre className="code-block">
{`int result = 10 + 5 * 2;
System.out.println(result); // 20 (Multiplication happens first)`}
    </pre>

    <p>🧠 Precedence order (high to low):</p>
    <ul className="bullet-points">
      <li>1️⃣ Parentheses <code>()</code></li>
      <li>2️⃣ Multiplication / Division / Modulus</li>
      <li>3️⃣ Addition / Subtraction</li>
      <li>4️⃣ Relational Operators</li>
      <li>5️⃣ Logical Operators</li>
      <li>6️⃣ Assignment Operators</li>
    </ul>

    <hr />

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>Arithmetic → +, -, *, /, %</li>
      <li>Assignment → =, +=, -=, etc.</li>
      <li>Relational → ==, !=, &lt;, &gt;, {`<=, >=`}</li>
      <li>Logical → &&, ||, !</li>
      <li>Increment/Decrement → ++, --</li>
      <li>Ternary → condition ? true : false</li>
      <li>Follow operator precedence for correct results.</li>
    </ul>

    <p className="highlight">
      🎉 Excellent! You now understand how to perform calculations and logic in Java.  
      Next, we’ll explore <b>Java Control Statements (if, switch, loops)</b> to control the flow of your program. 🧭
    </p>
  </>
)}

{/* 🧭 Java Control Statements */}
{activeSection === "java-control" && (
  <>
    <h1>🧭 Java Control Statements</h1>
    <p className="subtitle">
      Control statements in Java help you decide the flow of execution in a program.  
      They allow your code to make **decisions**, **repeat actions**, or **skip** certain parts based on conditions.
    </p>

    <hr />

    {/* 🔹 1. Types of Control Statements */}
    <h2>🔹 1. Types of Control Statements in Java</h2>
    <ul className="bullet-points">
      <li>🧩 **Decision-Making Statements** → <code>if</code>, <code>if-else</code>, <code>else-if</code>, <code>switch</code></li>
      <li>🔁 **Looping Statements** → <code>for</code>, <code>while</code>, <code>do-while</code></li>
      <li>⏭️ **Jump Statements** → <code>break</code>, <code>continue</code>, <code>return</code></li>
    </ul>

    <hr />

    {/* ⚙️ 2. Decision-Making Statements */}
    <h2>⚙️ 2. Decision-Making Statements</h2>
    <p>Used to perform different actions based on conditions.</p>

    {/* ✅ if Statement */}
    <h3>✅ if Statement</h3>
    <p>Executes code only if the condition is true.</p>
    <pre className="code-block">
{`int age = 20;
if (age >= 18) {
  System.out.println("You are eligible to vote!");
}`}
    </pre>

    {/* 🔄 if-else Statement */}
    <h3>🔄 if-else Statement</h3>
    <p>Runs one block if true, otherwise runs another.</p>
    <pre className="code-block">
{`int number = 5;
if (number % 2 == 0) {
  System.out.println("Even number");
} else {
  System.out.println("Odd number");
}`}
    </pre>

    {/* 🔁 else-if Ladder */}
    <h3>🔁 else-if Ladder</h3>
    <p>Checks multiple conditions in sequence.</p>
    <pre className="code-block">
{`int marks = 85;
if (marks >= 90) {
  System.out.println("Grade A");
} else if (marks >= 75) {
  System.out.println("Grade B");
} else if (marks >= 50) {
  System.out.println("Grade C");
} else {
  System.out.println("Fail");
}`}
    </pre>

    {/* 🔀 switch Statement */}
    <h3>🔀 switch Statement</h3>
    <p>Used to execute one block of code from multiple choices.</p>
    <pre className="code-block">
{`int day = 3;
switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Tuesday");
    break;
  case 3:
    System.out.println("Wednesday");
    break;
  default:
    System.out.println("Invalid day");
}`}
    </pre>

    <p>💡 Always use <code>break</code> to stop execution from falling through to the next case.</p>

    <hr />

    {/* 🔁 3. Looping Statements */}
    <h2>🔁 3. Looping Statements</h2>
    <p>Used when you want to repeat a block of code multiple times.</p>

    {/* 🔄 for Loop */}
    <h3>🔄 for Loop</h3>
    <pre className="code-block">
{`for (int i = 1; i <= 5; i++) {
  System.out.println("Count: " + i);
}`}
    </pre>
    <p>🧠 Output: 1 2 3 4 5</p>

    {/* 🔂 while Loop */}
    <h3>🔂 while Loop</h3>
    <pre className="code-block">
{`int i = 1;
while (i <= 5) {
  System.out.println(i);
  i++;
}`}
    </pre>

    {/* 🔁 do-while Loop */}
    <h3>🔁 do-while Loop</h3>
    <p>Executes the loop body at least once, even if the condition is false.</p>
    <pre className="code-block">
{`int i = 1;
do {
  System.out.println(i);
  i++;
} while (i <= 5);`}
    </pre>

    <p>💡 The <b>do-while</b> loop checks the condition **after** executing the loop body.</p>

    <hr />

    {/* ⏭️ 4. Jump Statements */}
    <h2>⏭️ 4. Jump Statements</h2>

    {/* 🧱 break */}
    <h3>🧱 break Statement</h3>
    <p>Used to exit from a loop or switch statement immediately.</p>
    <pre className="code-block">
{`for (int i = 1; i <= 5; i++) {
  if (i == 3) break;
  System.out.println(i);
}
// Output: 1 2`}
    </pre>

    {/* 🔁 continue */}
    <h3>🔁 continue Statement</h3>
    <p>Skips the current iteration and moves to the next one.</p>
    <pre className="code-block">
{`for (int i = 1; i <= 5; i++) {
  if (i == 3) continue;
  System.out.println(i);
}
// Output: 1 2 4 5`}
    </pre>

    {/* 🔚 return */}
    <h3>🔚 return Statement</h3>
    <p>Used to exit from a method and optionally return a value.</p>
    <pre className="code-block">
{`public static int add(int a, int b) {
  return a + b;
}`}
    </pre>

    <hr />

    {/* 🧩 Nested Control Statements */}
    <h2>🧩 5. Nested Control Statements</h2>
    <p>Control statements can be placed inside one another (like an <b>if</b> inside a <b>for</b> loop).</p>
    <pre className="code-block">
{`for (int i = 1; i <= 3; i++) {
  if (i == 2) {
    System.out.println("Skipped number 2");
    continue;
  }
  System.out.println("Number: " + i);
}`}
    </pre>

    <p>Output:</p>
    <pre className="code-block">
{`Number: 1
Skipped number 2
Number: 3`}
    </pre>

    <hr />

    {/* ✅ Summary */}
    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>🧩 Decision-Making → <code>if</code>, <code>if-else</code>, <code>switch</code></li>
      <li>🔁 Looping → <code>for</code>, <code>while</code>, <code>do-while</code></li>
      <li>⏭️ Jump → <code>break</code>, <code>continue</code>, <code>return</code></li>
      <li>🧠 Combine them to create powerful logic and control program flow.</li>
    </ul>

    <p className="highlight">
      🎉 Great work! You now understand how to control the flow of your Java program.  
      Next, we’ll explore <b>Arrays in Java</b> — a key concept for handling collections of data efficiently. 🧮
    </p>
  </>
)}
{/* 🧮 Arrays in Java */}
{activeSection === "java-arrays" && (
  <>
    <h1>🧮 Arrays in Java</h1>
    <p className="subtitle">
      An <b>array</b> in Java is a collection of elements of the same type, stored in a **contiguous memory** location.  
      It helps you store and manage multiple values using a **single variable name** instead of declaring many individual ones.
    </p>

    <hr />

    {/* 🔹 1. What is an Array? */}
    <h2>🔹 1. What is an Array?</h2>
    <p>
      Arrays are used to store multiple values of the **same data type**.  
      Each element in an array is accessed using its **index** (starting from 0).
    </p>

    <h3>💡 Example:</h3>
    <pre className="code-block">
{`int[] numbers = {10, 20, 30, 40, 50};

System.out.println(numbers[0]); // Output: 10
System.out.println(numbers[4]); // Output: 50`}
    </pre>

    <p>🧠 Indexing starts from <code>0</code>, so the first element is at position 0 and the last at <code>length - 1</code>.</p>

    <hr />

    {/* ⚙️ 2. Declaring and Initializing Arrays */}
    <h2>⚙️ 2. Declaring and Initializing Arrays</h2>
    <ul className="bullet-points">
      <li>✅ **Declaration:** <code>int[] arr;</code></li>
      <li>✅ **Allocation:** <code>arr = new int[5];</code></li>
      <li>✅ **Initialization:** <code>arr[0] = 10;</code>, <code>arr[1] = 20;</code></li>
    </ul>

    <h3>Example 👇</h3>
    <pre className="code-block">
{`int[] marks = new int[3];
marks[0] = 85;
marks[1] = 90;
marks[2] = 95;

System.out.println("First mark: " + marks[0]);`}
    </pre>

    <p>💡 You can also declare and initialize together:  
      <code>{`int[] marks = {85, 90, 95};`}</code>
    </p>

    <hr />

    {/* 🧩 3. Accessing Array Elements */}
    <h2>🧩 3. Accessing Array Elements</h2>
    <p>You can access each element using a <b>loop</b>.</p>

    <h3>Using a for loop 👇</h3>
    <pre className="code-block">
{`int[] arr = {10, 20, 30, 40};

for (int i = 0; i < arr.length; i++) {
  System.out.println("Element at index " + i + ": " + arr[i]);
}`}
    </pre>

    <h3>Using an enhanced for loop 👇</h3>
    <pre className="code-block">
{`int[] arr = {10, 20, 30, 40};

for (int num : arr) {
  System.out.println(num);
}`}
    </pre>

    <p>🧠 The enhanced <b>for-each</b> loop makes code simpler and avoids index handling.</p>

    <hr />

    {/* 🔄 4. Updating and Modifying Arrays */}
    <h2>🔄 4. Updating and Modifying Arrays</h2>
    <pre className="code-block">
{`int[] numbers = {5, 10, 15, 20};
numbers[2] = 99; // Change value at index 2

System.out.println(numbers[2]); // Output: 99`}
    </pre>

    <p>⚙️ Arrays are mutable — you can change values, but the **size is fixed** after creation.</p>

    <hr />

    {/* 🧠 5. Finding Largest or Smallest Element */}
    <h2>🧠 5. Finding Largest or Smallest Element</h2>
    <pre className="code-block">
{`int[] arr = {10, 25, 7, 88, 45};
int max = arr[0];

for (int i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

System.out.println("Largest element: " + max);`}
    </pre>

    <p>✅ You can use a similar logic to find the smallest element by changing the comparison.</p>

    <hr />

    {/* 🧩 6. Sum and Average of Array Elements */}
    <h2>🧩 6. Sum and Average of Array Elements</h2>
    <pre className="code-block">
{`int[] numbers = {10, 20, 30, 40, 50};
int sum = 0;

for (int num : numbers) {
  sum += num;
}

double average = (double) sum / numbers.length;

System.out.println("Sum: " + sum);
System.out.println("Average: " + average);`}
    </pre>

    <hr />

    {/* 🧱 7. Multi-Dimensional Arrays */}
    <h2>🧱 7. Multi-Dimensional Arrays</h2>
    <p>
      Java allows arrays with more than one dimension — often used to represent **matrices or tables**.
    </p>

    <h3>Example 👇</h3>
    <pre className="code-block">
{`int[][] matrix = {
  {1, 2, 3},
  {4, 5, 6},
  {7, 8, 9}
};

for (int i = 0; i < 3; i++) {
  for (int j = 0; j < 3; j++) {
    System.out.print(matrix[i][j] + " ");
  }
  System.out.println();
}`}
    </pre>

    <p>🧠 Output:</p>
    <pre className="code-block">
{`1 2 3
4 5 6
7 8 9`}
    </pre>

    <hr />

    {/* ⚙️ 8. Arrays Utility Methods */}
    <h2>⚙️ 8. Arrays Utility Methods</h2>
    <p>Java provides useful methods in the <code>java.util.Arrays</code> class.</p>

    <pre className="code-block">
{`import java.util.Arrays;

int[] arr = {5, 3, 8, 1, 9};

// Sorting
Arrays.sort(arr);
System.out.println(Arrays.toString(arr)); // [1, 3, 5, 8, 9]

// Searching
int index = Arrays.binarySearch(arr, 5);
System.out.println("Found at index: " + index);`}
    </pre>

    <hr />

    {/* ✅ Summary */}
    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>🧩 Arrays store multiple values of the same data type.</li>
      <li>📍 Indexing starts from 0.</li>
      <li>⚙️ Arrays are fixed in size once created.</li>
      <li>🔁 Use loops to access or modify elements.</li>
      <li>🧱 Multi-dimensional arrays can represent matrices or grids.</li>
      <li>⚡ Use <code>Arrays</code> class for sorting, searching, and printing.</li>
    </ul>

    <p className="highlight">
      🎉 Great job! You’ve mastered Arrays in Java.  
      Next, let’s explore **Strings in Java** — where we learn how to handle and manipulate text efficiently. ✨
    </p>
  </>
)}
{/* 💬 Strings in Java */}
{activeSection === "java-strings" && (
  <>
    <h1>💬 Strings in Java</h1>
    <p className="subtitle">
      A <b>String</b> in Java is a sequence of characters enclosed in double quotes (<code>" "</code>).  
      It’s one of the most commonly used classes in Java for handling and manipulating text.
    </p>

    <hr />

    {/* 🔹 1. What is a String? */}
    <h2>🔹 1. What is a String?</h2>
    <p>
      A <b>String</b> is an object in Java that represents a sequence of characters.  
      It is **immutable**, meaning once created, it cannot be changed.
    </p>

    <h3>💡 Example:</h3>
    <pre className="code-block">
{`String name = "Sofia";
System.out.println("Hello, " + name + "!");`}
    </pre>

    <p>Output: <code>Hello, Sofia!</code></p>

    <hr />

    {/* ⚙️ 2. Ways to Create Strings */}
    <h2>⚙️ 2. Ways to Create Strings</h2>
    <ul className="bullet-points">
      <li>✅ Using string literals → <code>String s1 = "Hello";</code></li>
      <li>✅ Using the <code>new</code> keyword → <code>String s2 = new String("Hello");</code></li>
    </ul>

    <pre className="code-block">
{`String s1 = "Hello";
String s2 = new String("Hello");

System.out.println(s1);
System.out.println(s2);`}
    </pre>

    <p>💡 Both look similar, but <b>string literals</b> are stored in the <b>String Pool</b> for memory efficiency.</p>

    <hr />

    {/* 🧩 3. String Immutability */}
    <h2>🧩 3. String Immutability</h2>
    <p>
      Once a String is created, it cannot be modified.  
      Any change creates a new String object in memory.
    </p>

    <pre className="code-block">
{`String str = "Java";
str.concat(" Programming");

System.out.println(str); // Output: Java`}
    </pre>

    <p>🧠 The original string <code>"Java"</code> remains unchanged because Strings are immutable.</p>

    <hr />

    {/* 🔄 4. String Methods */}
    <h2>🔄 4. Common String Methods</h2>
    <p>Java provides many useful methods to manipulate strings.</p>

    <pre className="code-block">
{`String text = "Hello World";

System.out.println(text.length());        // 11
System.out.println(text.toUpperCase());   // HELLO WORLD
System.out.println(text.toLowerCase());   // hello world
System.out.println(text.charAt(0));       // H
System.out.println(text.substring(0, 5)); // Hello
System.out.println(text.contains("World")); // true
System.out.println(text.indexOf('o'));    // 4
System.out.println(text.replace("World", "Java")); // Hello Java`}
    </pre>

    <ul className="bullet-points">
      <li>📏 <code>length()</code> → returns number of characters</li>
      <li>🔠 <code>toUpperCase()</code> / <code>toLowerCase()</code></li>
      <li>✂️ <code>substring()</code> → extracts part of a string</li>
      <li>🔍 <code>contains()</code> → checks if text exists</li>
      <li>♻️ <code>replace()</code> → replaces text</li>
    </ul>

    <hr />

    {/* ⚖️ 5. String Comparison */}
    <h2>⚖️ 5. String Comparison</h2>
    <p>There are two main ways to compare strings:</p>

    <pre className="code-block">
{`String a = "Hello";
String b = "Hello";
String c = new String("Hello");

System.out.println(a == b);      // true (same reference in string pool)
System.out.println(a == c);      // false (different object)
System.out.println(a.equals(c)); // true (same content)`}
    </pre>

    <ul className="bullet-points">
      <li>⚙️ <code>==</code> → compares memory location (reference)</li>
      <li>✅ <code>equals()</code> → compares actual content (value)</li>
    </ul>

    <p>💡 Always use <code>equals()</code> for content comparison.</p>

    <hr />

    {/* 🔁 6. String Concatenation */}
    <h2>🔁 6. String Concatenation</h2>
    <p>Strings can be combined using the <code>+</code> operator or the <code>concat()</code> method.</p>

    <pre className="code-block">
{`String first = "Java";
String second = "Programming";

String result1 = first + " " + second;
String result2 = first.concat(" ").concat(second);

System.out.println(result1);
System.out.println(result2);`}
    </pre>

    <p>Output:</p>
    <pre className="code-block">
{`Java Programming
Java Programming`}
    </pre>

    <hr />

    {/* 🧠 7. StringBuilder and StringBuffer */}
    <h2>🧠 7. StringBuilder and StringBuffer</h2>
    <p>
      Since Strings are immutable, frequent modifications create new objects.  
      To avoid this, use <b>StringBuilder</b> or <b>StringBuffer</b> for mutable strings.
    </p>

    <pre className="code-block">
{`StringBuilder sb = new StringBuilder("Hello");
sb.append(" Java");
System.out.println(sb); // Output: Hello Java`}
    </pre>

    <ul className="bullet-points">
      <li>⚡ <b>StringBuilder</b> → Faster, not thread-safe</li>
      <li>🧩 <b>StringBuffer</b> → Slower, thread-safe</li>
    </ul>

    <hr />

    {/* 🧱 8. Converting Between String and Other Types */}
    <h2>🧱 8. Converting Between String and Other Types</h2>

    <h3>🔹 String → int</h3>
    <pre className="code-block">
{`String str = "123";
int num = Integer.parseInt(str);
System.out.println(num + 10); // Output: 133`}
    </pre>

    <h3>🔹 int → String</h3>
    <pre className="code-block">
{`int num = 123;
String str = String.valueOf(num);
System.out.println(str + "45"); // Output: 12345`}
    </pre>

    <hr />

    {/* ✅ Summary */}
    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>💬 Strings are immutable sequences of characters.</li>
      <li>⚙️ Use <code>equals()</code> for content comparison.</li>
      <li>🔄 Common methods: <code>length()</code>, <code>substring()</code>, <code>replace()</code>.</li>
      <li>🧩 Use <b>StringBuilder</b> for fast modifications.</li>
      <li>🔁 Strings can be converted to and from other data types.</li>
    </ul>

    <p className="highlight">
      🎉 Excellent work! You’ve mastered Strings in Java.  
      Next, let’s move to **☕ Object-Oriented Programming (OOP) Concepts in Java** —  
      the foundation of writing real-world Java applications.
    </p>
  </>
)}
{/* 🧱 Methods (Functions) */}
{activeSection === "java-methods" && (
  <>
    <h1>🧱 Methods (Functions) in Java</h1>
    <p className="subtitle">
      A <b>method</b> in Java is a block of code that performs a specific task and runs only when it’s called.  
      Methods make your code **reusable**, **organized**, and **easier to understand**.
    </p>

    <hr />

    {/* 🧩 1. What is a Method? */}
    <h2>🧩 1. What is a Method?</h2>
    <p>
      A method is a group of statements that perform an operation.  
      It helps to avoid code duplication by allowing you to reuse logic multiple times.
    </p>

    <pre className="code-block">
{`public class Example {
  // Method definition
  static void greet() {
    System.out.println("Hello, welcome to Java!");
  }

  public static void main(String[] args) {
    greet(); // method call
  }
}`}
    </pre>

    <p>✅ Output: <code>Hello, welcome to Java!</code></p>

    <p>💡 You define a method once, and call it anywhere in your program.</p>

    <hr />

    {/* ⚙️ 2. Syntax of a Method */}
    <h2>⚙️ 2. Syntax of a Method</h2>
    <pre className="code-block">
{`modifier returnType methodName(parameter list) {
    // method body
    // code to execute
}`}
    </pre>

    <ul className="bullet-points">
      <li>🔹 <b>modifier</b> — defines access type (like <code>public</code>, <code>private</code>)</li>
      <li>🔹 <b>returnType</b> — type of value returned (<code>void</code> if nothing is returned)</li>
      <li>🔹 <b>methodName</b> — name of the method</li>
      <li>🔹 <b>parameters</b> — optional inputs for the method</li>
    </ul>

    <hr />

    {/* 🧮 3. Types of Methods */}
    <h2>🧮 3. Types of Methods</h2>
    <ul className="bullet-points">
      <li>⚡ <b>Predefined methods</b> — already available in Java (e.g., <code>Math.max()</code>, <code>System.out.println()</code>)</li>
      <li>🧩 <b>User-defined methods</b> — created by the programmer</li>
    </ul>

    <pre className="code-block">
{`public class MethodsExample {
  // user-defined method
  static void display() {
    System.out.println("This is a user-defined method.");
  }

  public static void main(String[] args) {
    display(); // calling user-defined method
    System.out.println(Math.max(5, 10)); // predefined method
  }
}`}
    </pre>

    <hr />

    {/* 🔢 4. Methods with Parameters */}
    <h2>🔢 4. Methods with Parameters</h2>
    <p>
      You can pass values to methods called **parameters** (or **arguments**) for flexibility.
    </p>

    <pre className="code-block">
{`public class Calculator {
  static void add(int a, int b) {
    System.out.println("Sum: " + (a + b));
  }

  public static void main(String[] args) {
    add(5, 10);
    add(20, 30);
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Sum: 15
Sum: 50`}
    </pre>

    <hr />

    {/* 🔁 5. Methods with Return Type */}
    <h2>🔁 5. Methods with Return Type</h2>
    <p>
      A method can return a value using the <code>return</code> keyword.
    </p>

    <pre className="code-block">
{`public class Square {
  static int findSquare(int num) {
    return num * num;
  }

  public static void main(String[] args) {
    int result = findSquare(5);
    System.out.println("Square: " + result);
  }
}`}
    </pre>

    <p>✅ Output: <code>Square: 25</code></p>

    <hr />

    {/* 🧱 6. Method Overloading */}
    <h2>🧱 6. Method Overloading</h2>
    <p>
      Java allows multiple methods with the same name but different **parameter lists** (type or number of arguments).  
      This is called <b>Method Overloading</b>.
    </p>

    <pre className="code-block">
{`public class OverloadExample {
  static int add(int a, int b) {
    return a + b;
  }

  static double add(double a, double b) {
    return a + b;
  }

  public static void main(String[] args) {
    System.out.println(add(10, 20));     // int version
    System.out.println(add(5.5, 2.5));   // double version
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`30
8.0`}
    </pre>

    <p>💡 Overloading improves code readability and flexibility.</p>

    <hr />

    {/* 🔒 7. Static vs Non-static Methods */}
    <h2>🔒 7. Static vs Non-static Methods</h2>
    <ul className="bullet-points">
      <li>⚙️ <b>Static methods</b> belong to the class and can be called without creating an object.</li>
      <li>🧱 <b>Non-static methods</b> require an object to be called.</li>
    </ul>

    <pre className="code-block">
{`public class Example {
  static void greet() {
    System.out.println("Hello from static method!");
  }

  void welcome() {
    System.out.println("Hello from non-static method!");
  }

  public static void main(String[] args) {
    greet(); // static call
    Example obj = new Example();
    obj.welcome(); // non-static call
  }
}`}
    </pre>

    <hr />

    {/* 📘 8. Recursion */}
    <h2>📘 8. Recursion (Method calling itself)</h2>
    <p>
      A method can call itself — this is known as <b>recursion</b>.  
      Commonly used for problems like factorial, Fibonacci, etc.
    </p>

    <pre className="code-block">
{`public class RecursionExample {
  static int factorial(int n) {
    if (n == 1) return 1;
    else return n * factorial(n - 1);
  }

  public static void main(String[] args) {
    System.out.println("Factorial: " + factorial(5));
  }
}`}
    </pre>

    <p>✅ Output: <code>Factorial: 120</code></p>

    <hr />

    {/* ✅ Summary */}
    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>🧱 Methods are reusable blocks of code that perform tasks.</li>
      <li>⚙️ Use <code>return</code> to send values back to the caller.</li>
      <li>🧮 Method Overloading allows multiple methods with the same name.</li>
      <li>🔁 Recursion is when a method calls itself.</li>
      <li>⚡ Static methods belong to the class; non-static need an object.</li>
    </ul>

    <p className="highlight">
      🎉 Awesome! You now understand how methods work in Java.  
      Next, let’s dive into **☕ Object-Oriented Programming (OOP) Concepts in Java** —  
      where you’ll learn about **classes, objects, inheritance, and more!**
    </p>
  </>
)}
{/* ☕ Object-Oriented Programming (OOP) */}
{activeSection === "java-oop" && (
  <>
    <h1>☕ Object-Oriented Programming (OOP) in Java</h1>
    <p className="subtitle">
      Java is an <b>Object-Oriented Programming Language</b> — it organizes code into <b>classes</b> and <b>objects</b>.  
      OOP helps you build reusable, modular, and maintainable programs.
    </p>

    <hr />

    {/* 🧩 1. What is OOP? */}
    <h2>🧩 1. What is OOP?</h2>
    <p>
      OOP (Object-Oriented Programming) is a programming paradigm based on the concept of <b>objects</b>.  
      Each object represents a real-world entity — like a car, student, or bank account — with <b>data</b> and <b>behavior</b>.
    </p>

    <h3>💡 Example:</h3>
    <pre className="code-block">
{`class Car {
  // data (attributes)
  String color = "Red";
  int speed = 120;

  // behavior (method)
  void drive() {
    System.out.println("The car is driving at " + speed + " km/h");
  }
}

public class Main {
  public static void main(String[] args) {
    Car myCar = new Car();  // create an object
    System.out.println(myCar.color);
    myCar.drive();
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Red
The car is driving at 120 km/h`}
    </pre>

    <p>🧠 Here, <code>Car</code> is a class and <code>myCar</code> is an object.</p>

    <hr />

    {/* 🧱 2. Main OOP Principles */}
    <h2>🧱 2. The 4 Pillars of OOP</h2>
    <p>OOP in Java is based on four key principles:</p>

    <ul className="bullet-points">
      <li>🏗️ <b>Encapsulation</b> — bundling data and methods together.</li>
      <li>🧬 <b>Inheritance</b> — reusing code by inheriting from other classes.</li>
      <li>🎭 <b>Polymorphism</b> — one interface, many implementations.</li>
      <li>🕵️ <b>Abstraction</b> — hiding complex details and showing only the essential features.</li>
    </ul>

    <hr />

    {/* 🏗️ 3. Encapsulation */}
    <h2>🏗️ 3. Encapsulation</h2>
    <p>
      Encapsulation means keeping data (variables) safe inside a class and accessing them only through methods (getters/setters).
    </p>

    <pre className="code-block">
{`class Student {
  private String name; // private data

  // setter
  public void setName(String n) {
    name = n;
  }

  // getter
  public String getName() {
    return name;
  }
}

public class Main {
  public static void main(String[] args) {
    Student s = new Student();
    s.setName("Sofia");
    System.out.println(s.getName());
  }
}`}
    </pre>

    <p>✅ Output: <code>Sofia</code></p>

    <p>💡 This protects the data and provides controlled access.</p>

    <hr />

    {/* 🧬 4. Inheritance */}
    <h2>🧬 4. Inheritance</h2>
    <p>
      Inheritance allows one class to acquire the properties and methods of another class using the <code>extends</code> keyword.
    </p>

    <pre className="code-block">
{`class Animal {
  void eat() {
    System.out.println("Eating...");
  }
}

class Dog extends Animal {
  void bark() {
    System.out.println("Barking...");
  }
}

public class Main {
  public static void main(String[] args) {
    Dog d = new Dog();
    d.eat();  // inherited method
    d.bark(); // child method
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Eating...
Barking...`}
    </pre>

    <p>💡 Inheritance promotes code reuse and reduces redundancy.</p>

    <hr />

    {/* 🎭 5. Polymorphism */}
    <h2>🎭 5. Polymorphism</h2>
    <p>
      Polymorphism means "many forms". It allows a single action to behave differently based on the object.
    </p>

    <pre className="code-block">
{`class Animal {
  void sound() {
    System.out.println("Some sound...");
  }
}

class Dog extends Animal {
  void sound() {
    System.out.println("Bark");
  }
}

class Cat extends Animal {
  void sound() {
    System.out.println("Meow");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal a;
    a = new Dog();
    a.sound(); // Bark

    a = new Cat();
    a.sound(); // Meow
  }
}`}
    </pre>

    <p>💡 Method overriding enables polymorphism.</p>

    <hr />

    {/* 🕵️ 6. Abstraction */}
    <h2>🕵️ 6. Abstraction</h2>
    <p>
      Abstraction hides the implementation details and only shows the functionality to the user.
      It’s done using <code>abstract</code> classes or <code>interfaces</code>.
    </p>

    <pre className="code-block">
{`abstract class Shape {
  abstract void draw();
}

class Circle extends Shape {
  void draw() {
    System.out.println("Drawing Circle");
  }
}

public class Main {
  public static void main(String[] args) {
    Shape s = new Circle();
    s.draw();
  }
}`}
    </pre>

    <p>✅ Output: <code>Drawing Circle</code></p>

    <p>💡 Abstract classes cannot be instantiated directly — only through subclasses.</p>

    <hr />

    {/* 🧱 7. Class vs Object */}
    <h2>🧱 7. Class vs Object</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Class</th>
          <th>Object</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Blueprint or template</td>
          <td>Instance of a class</td>
        </tr>
        <tr>
          <td>Defines properties and methods</td>
          <td>Uses properties and methods</td>
        </tr>
        <tr>
          <td>Created once</td>
          <td>Many objects can be created</td>
        </tr>
      </tbody>
    </table>

    <hr />

    {/* ✅ Summary */}
    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>🏗️ OOP organizes code using <b>classes</b> and <b>objects</b>.</li>
      <li>🧩 The 4 pillars of OOP are <b>Encapsulation</b>, <b>Inheritance</b>, <b>Polymorphism</b>, and <b>Abstraction</b>.</li>
      <li>⚙️ OOP makes code <b>modular</b>, <b>reusable</b>, and <b>secure</b>.</li>
      <li>🧱 Every Java program revolves around <b>objects</b> interacting with each other.</li>
    </ul>

    <p className="highlight">
      🎉 Great work! You’ve learned the fundamentals of OOP in Java.  
      Next, we’ll explore **💾 Classes and Objects in Depth**,  
      where you’ll create and interact with real Java objects hands-on.
    </p>
  </>
)}
{/* 🔄 Static, This, and Super Keywords */}
{activeSection === "java-keywords" && (
  <>
    <h1>🔄 Static, This, and Super Keywords</h1>
    <p className="subtitle">
      Java provides special keywords like <b>static</b>, <b>this</b>, and <b>super</b> to manage class-level data, 
      object references, and inheritance more efficiently.
    </p>

    <hr />

    {/* ⚙️ 1. The static Keyword */}
    <h2>⚙️ 1. The <code>static</code> Keyword</h2>
    <p>
      The <code>static</code> keyword means that the member belongs to the <b>class</b>, not to any specific object.  
      It can be accessed without creating an object.
    </p>

    <h3>💡 Used for:</h3>
    <ul className="bullet-points">
      <li>Declaring static variables (shared by all objects)</li>
      <li>Creating static methods (can be called without an object)</li>
      <li>Creating static blocks (executed once when class loads)</li>
    </ul>

    <pre className="code-block">
{`class Student {
  static String college = "ABC University";  // static variable
  String name;

  Student(String n) {
    name = n;
  }

  void show() {
    System.out.println(name + " - " + college);
  }

  static void changeCollege(String newCollege) {
    college = newCollege;
  }
}

public class Main {
  public static void main(String[] args) {
    Student.changeCollege("XYZ Institute"); // static method call
    Student s1 = new Student("Sofia");
    Student s2 = new Student("Ryan");

    s1.show();
    s2.show();
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Sofia - XYZ Institute
Ryan - XYZ Institute`}
    </pre>

    <p>💡 The <code>college</code> variable is shared by all objects — not copied per instance.</p>

    <hr />

    {/* 🔁 2. The this Keyword */}
    <h2>🔁 2. The <code>this</code> Keyword</h2>
    <p>
      The <code>this</code> keyword refers to the <b>current object</b> — the instance on which the method is called.
    </p>

    <h3>💡 Used for:</h3>
    <ul className="bullet-points">
      <li>Referring to current class variables and methods</li>
      <li>Resolving naming conflicts between instance and local variables</li>
      <li>Passing the current object as an argument</li>
      <li>Calling another constructor in the same class</li>
    </ul>

    <pre className="code-block">
{`class Student {
  String name;
  int age;

  Student(String name, int age) {
    this.name = name; // 'this' refers to the current object
    this.age = age;
  }

  void display() {
    System.out.println("Name: " + this.name + ", Age: " + this.age);
  }
}

public class Main {
  public static void main(String[] args) {
    Student s1 = new Student("Sofia", 22);
    s1.display();
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Name: Sofia, Age: 22`}
    </pre>

    <p>💡 Without <code>this</code>, Java wouldn’t know which <code>name</code> you mean (local or instance).</p>

    <hr />

    {/* 🧱 this() constructor chaining */}
    <h3>🧱 Constructor Chaining with this()</h3>
    <pre className="code-block">
{`class Student {
  String name;
  int age;
  String course;

  Student() {
    this("Unknown", 0); // calling another constructor
  }

  Student(String name, int age) {
    this.name = name;
    this.age = age;
  }

  void show() {
    System.out.println(name + " - " + age);
  }
}

public class Main {
  public static void main(String[] args) {
    Student s = new Student();
    s.show();
  }
}`}
    </pre>

    <p>✅ Output: <code>Unknown - 0</code></p>

    <p>💡 <code>this()</code> must be the <b>first line</b> inside a constructor.</p>

    <hr />

    {/* 🧭 3. The super Keyword */}
    <h2>🧭 3. The <code>super</code> Keyword</h2>
    <p>
      The <code>super</code> keyword refers to the <b>parent (super) class</b>.  
      It’s used to access variables, methods, or constructors of the parent class.
    </p>

    <h3>💡 Used for:</h3>
    <ul className="bullet-points">
      <li>Accessing parent class variables and methods</li>
      <li>Calling parent class constructors</li>
    </ul>

    <pre className="code-block">
{`class Animal {
  String type = "Animal";

  void makeSound() {
    System.out.println("Some generic sound...");
  }
}

class Dog extends Animal {
  String type = "Dog";

  void showType() {
    System.out.println("Parent type: " + super.type); // parent variable
    System.out.println("Child type: " + type);
  }

  void makeSound() {
    super.makeSound(); // call parent method
    System.out.println("Bark!");
  }
}

public class Main {
  public static void main(String[] args) {
    Dog d = new Dog();
    d.showType();
    d.makeSound();
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Parent type: Animal
Child type: Dog
Some generic sound...
Bark!`}
    </pre>

    <hr />

    {/* 🧩 super() constructor chaining */}
    <h3>🧩 Using super() to Call Parent Constructor</h3>
    <pre className="code-block">
{`class Animal {
  Animal() {
    System.out.println("Animal constructor called");
  }
}

class Dog extends Animal {
  Dog() {
    super(); // call parent constructor
    System.out.println("Dog constructor called");
  }
}

public class Main {
  public static void main(String[] args) {
    Dog d = new Dog();
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Animal constructor called
Dog constructor called`}
    </pre>

    <p>💡 <code>super()</code> must be the <b>first statement</b> in the child class constructor.</p>

    <hr />

    {/* 🧠 Summary */}
    <h2>🧠 Summary</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Keyword</th>
          <th>Meaning</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>static</b></td>
          <td>Belongs to the class, not object</td>
          <td>Used for shared variables or utility methods</td>
        </tr>
        <tr>
          <td><b>this</b></td>
          <td>Refers to current class instance</td>
          <td>Used to access current object variables or constructors</td>
        </tr>
        <tr>
          <td><b>super</b></td>
          <td>Refers to parent class</td>
          <td>Used to call parent variables, methods, or constructors</td>
        </tr>
      </tbody>
    </table>

    <p className="highlight">
      🎯 These three keywords help you manage memory, inheritance, and constructor logic effectively in Java OOP.
    </p>

    <p className="highlight">
      🚀 Next Up: <b>Inheritance & Polymorphism (in-depth)</b> — how Java connects parent-child classes and overrides behavior dynamically!
    </p>
  </>
)}
{/* 🧮 Packages in Java */}
{activeSection === "java-packages" && (
  <>
    <h1>🧮 Packages in Java</h1>
    <p className="subtitle">
      A <b>Package</b> in Java is a way to group related classes, interfaces, and sub-packages together.  
      It helps organize your code, avoid naming conflicts, and provide access control.
    </p>

    <hr />

    {/* 📦 1. What is a Package? */}
    <h2>📦 1. What is a Package?</h2>
    <p>
      Think of a <b>package</b> as a folder in your computer that stores related files.  
      In Java, a package acts the same way — grouping related classes and interfaces together.
    </p>

    <h3>💡 Example:</h3>
    <pre className="code-block">
{`// File: mypackage/Hello.java
package mypackage; // defines the package

public class Hello {
  public void display() {
    System.out.println("Hello from mypackage!");
  }
}`}
    </pre>

    <p>To use this class in another file:</p>

    <pre className="code-block">
{`// File: Main.java
import mypackage.Hello; // import the class from package

public class Main {
  public static void main(String[] args) {
    Hello h = new Hello();
    h.display();
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Hello from mypackage!`}
    </pre>

    <hr />

    {/* 🧭 2. Types of Packages */}
    <h2>🧭 2. Types of Packages</h2>

    <ul className="bullet-points">
      <li>📦 <b>Built-in Packages</b> — predefined Java packages (like <code>java.util</code>, <code>java.io</code>)</li>
      <li>🧩 <b>User-defined Packages</b> — created by developers for organizing project files</li>
    </ul>

    <h3>💡 Common Built-in Packages:</h3>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Package</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>java.lang</code></td>
          <td>Contains core classes like String, Math, Object, System</td>
        </tr>
        <tr>
          <td><code>java.util</code></td>
          <td>Contains collections framework, Date, Scanner, etc.</td>
        </tr>
        <tr>
          <td><code>java.io</code></td>
          <td>Provides classes for file and input/output operations</td>
        </tr>
        <tr>
          <td><code>java.net</code></td>
          <td>Networking-related classes (sockets, URLs)</td>
        </tr>
        <tr>
          <td><code>java.sql</code></td>
          <td>Classes for database connectivity (JDBC)</td>
        </tr>
      </tbody>
    </table>

    <hr />

    {/* ⚙️ 3. Importing Packages */}
    <h2>⚙️ 3. Importing Packages</h2>
    <p>
      To use a class from a package, use the <b>import</b> keyword.
    </p>

    <h3>Syntax:</h3>
    <pre className="code-block">
{`import packageName.className;      // import one specific class
import packageName.*;               // import all classes from package`}
    </pre>

    <h3>💡 Example:</h3>
    <pre className="code-block">
{`import java.util.Scanner;

public class InputExample {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter your name: ");
    String name = sc.nextLine();
    System.out.println("Hello, " + name + "!");
  }
}`}
    </pre>

    <p>✅ Output (if user types “Sofia”):</p>
    <pre className="code-block">
{`Enter your name: Sofia
Hello, Sofia!`}
    </pre>

    <hr />

    {/* 🧩 4. Access Modifiers and Packages */}
    <h2>🧩 4. Access Modifiers and Packages</h2>
    <p>
      Packages work closely with <b>access modifiers</b> to control visibility across files and folders.
    </p>

    <table className="summary-table">
      <thead>
        <tr>
          <th>Modifier</th>
          <th>Same Class</th>
          <th>Same Package</th>
          <th>Subclass (Different Package)</th>
          <th>Different Package</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>public</b></td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <td><b>protected</b></td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
          <td>❌</td>
        </tr>
        <tr>
          <td><b>default (no modifier)</b></td>
          <td>✅</td>
          <td>✅</td>
          <td>❌</td>
          <td>❌</td>
        </tr>
        <tr>
          <td><b>private</b></td>
          <td>✅</td>
          <td>❌</td>
          <td>❌</td>
          <td>❌</td>
        </tr>
      </tbody>
    </table>

    <p>💡 Only <code>public</code> classes and members can be accessed outside their package.</p>

    <hr />

    {/* ⚡ 5. Static Import */}
    <h2>⚡ 5. Static Import</h2>
    <p>
      Static import lets you access <b>static members</b> directly without using the class name.
    </p>

    <pre className="code-block">
{`import static java.lang.Math.*;  // import all static members of Math class

public class StaticImportExample {
  public static void main(String[] args) {
    System.out.println(sqrt(16));   // instead of Math.sqrt(16)
    System.out.println(pow(2, 3));  // instead of Math.pow(2,3)
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`4.0
8.0`}
    </pre>

    <hr />

    {/* 🧠 Summary */}
    <h2>🧠 Summary</h2>
    <ul className="bullet-points">
      <li>📦 Packages organize classes and prevent naming conflicts.</li>
      <li>💡 Two types: Built-in (java.util, java.io) and User-defined.</li>
      <li>⚙️ Use <code>import</code> to include external package classes.</li>
      <li>🔒 Access modifiers control visibility between packages.</li>
      <li>⚡ <code>static import</code> allows direct use of static members.</li>
    </ul>

    <p className="highlight">
      🎯 Packages make Java code modular, reusable, and easier to maintain — essential for professional-level development.
    </p>

    <p className="highlight">
      🚀 Next Up: <b>Exception Handling</b> — learn how Java gracefully handles runtime errors using try, catch, throw, and finally!
    </p>
  </>
)}
{/* 🧰 Wrapper Classes & Autoboxing */}
{activeSection === "java-wrapper" && (
  <>
    <h1>🧰 Wrapper Classes & Autoboxing</h1>
    <p className="subtitle">
      In Java, <b>Wrapper Classes</b> are used to convert primitive data types (like int, char, double) 
      into objects.  
      This is useful when working with frameworks like <b>Collections</b> or <b>Generics</b> that require objects instead of primitives.
    </p>

    <hr />

    {/* 🧱 1. Primitive Data Types vs Wrapper Classes */}
    <h2>🧱 1. Primitive Data Types vs Wrapper Classes</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Primitive Type</th>
          <th>Wrapper Class</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><code>byte</code></td><td><code>Byte</code></td></tr>
        <tr><td><code>short</code></td><td><code>Short</code></td></tr>
        <tr><td><code>int</code></td><td><code>Integer</code></td></tr>
        <tr><td><code>long</code></td><td><code>Long</code></td></tr>
        <tr><td><code>float</code></td><td><code>Float</code></td></tr>
        <tr><td><code>double</code></td><td><code>Double</code></td></tr>
        <tr><td><code>char</code></td><td><code>Character</code></td></tr>
        <tr><td><code>boolean</code></td><td><code>Boolean</code></td></tr>
      </tbody>
    </table>

    <p>
      Wrapper classes are part of the <code>java.lang</code> package, so you don’t need to import them manually.
    </p>

    <hr />

    {/* 🔹 2. Why Do We Need Wrapper Classes? */}
    <h2>🔹 2. Why Do We Need Wrapper Classes?</h2>
    <ul className="bullet-points">
      <li>✅ To use primitives in collections (like <code>ArrayList&lt;Integer&gt;</code>)</li>
      <li>📦 To convert data between primitives and objects</li>
      <li>💡 Useful in frameworks (Hibernate, Spring) that work with objects</li>
      <li>🧠 Provides utility methods like parsing strings to numbers (<code>Integer.parseInt()</code>)</li>
    </ul>

    <hr />

    {/* 🧩 3. Example: Using Wrapper Classes */}
    <h2>🧩 3. Example: Using Wrapper Classes</h2>
    <pre className="code-block">
{`public class WrapperExample {
  public static void main(String[] args) {
    int a = 10;               // primitive type
    Integer obj = Integer.valueOf(a);  // converting to object manually (Boxing)

    System.out.println("Primitive value: " + a);
    System.out.println("Wrapper object: " + obj);
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Primitive value: 10
Wrapper object: 10`}
    </pre>

    <hr />

    {/* 🔁 4. Autoboxing & Unboxing */}
    <h2>🔁 4. Autoboxing & Unboxing</h2>

    <h3>📦 Autoboxing:</h3>
    <p>
      The automatic conversion of a <b>primitive type to its wrapper class</b> object.
    </p>
    <pre className="code-block">
{`int num = 25;
Integer obj = num; // Autoboxing (int -> Integer)

System.out.println(obj); // Output: 25`}
    </pre>

    <h3>📤 Unboxing:</h3>
    <p>
      The reverse process — automatically converting a <b>wrapper class object to a primitive type</b>.
    </p>
    <pre className="code-block">
{`Integer val = 100;
int n = val; // Unboxing (Integer -> int)

System.out.println(n); // Output: 100`}
    </pre>

    <hr />

    {/* ⚙️ 5. Example: Autoboxing and Unboxing in Collections */}
    <h2>⚙️ 5. Example: Autoboxing and Unboxing in Collections</h2>
    <pre className="code-block">
{`import java.util.*;

public class AutoBoxingExample {
  public static void main(String[] args) {
    ArrayList<Integer> list = new ArrayList<>();

    // Autoboxing: int -> Integer
    list.add(10);
    list.add(20);
    list.add(30);

    // Unboxing: Integer -> int
    for (int num : list) {
      System.out.println(num);
    }
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`10
20
30`}
    </pre>

    <p>💡 Java automatically handles conversions — no need for <code>Integer.valueOf()</code> or <code>intValue()</code>.</p>

    <hr />

    {/* 🧠 6. Common Wrapper Class Methods */}
    <h2>🧠 6. Common Wrapper Class Methods</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>parseInt(String)</code></td>
          <td>Converts a String to an int</td>
          <td><code>Integer.parseInt("123") → 123</code></td>
        </tr>
        <tr>
          <td><code>valueOf()</code></td>
          <td>Converts primitive or String to wrapper object</td>
          <td><code>Integer.valueOf(10)</code></td>
        </tr>
        <tr>
          <td><code>toString()</code></td>
          <td>Converts a value to a String</td>
          <td><code>Integer.toString(100) → "100"</code></td>
        </tr>
        <tr>
          <td><code>Double.parseDouble("4.5")</code></td>
          <td>Converts String to double</td>
          <td><code>4.5</code></td>
        </tr>
      </tbody>
    </table>

    <hr />

    {/* 🧩 7. Wrapper Classes and Null Values */}
    <h2>🧩 7. Wrapper Classes and Null Values</h2>
    <p>
      Unlike primitives, wrapper class objects can store <code>null</code>.  
      This is useful in databases or APIs where data might be missing.
    </p>

    <pre className="code-block">
{`Integer age = null;
if (age == null) {
  System.out.println("Age not available");
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Age not available`}
    </pre>

    <hr />

    {/* 🧠 Summary */}
    <h2>🧠 Summary</h2>
    <ul className="bullet-points">
      <li>🧱 Wrapper classes convert primitives to objects.</li>
      <li>🔁 Autoboxing = primitive → object; Unboxing = object → primitive.</li>
      <li>⚙️ Wrapper classes are required in Collections and Generics.</li>
      <li>💡 Common methods: <code>parseInt()</code>, <code>valueOf()</code>, <code>toString()</code>.</li>
      <li>🧩 Wrapper objects can store <code>null</code>, unlike primitives.</li>
    </ul>

    <p className="highlight">
      🎯 Mastering Wrapper Classes helps you handle data conversion, collections, and frameworks more effectively!
    </p>

    <p className="highlight">
      🚀 Next Up: <b>Exception Handling in Java</b> — learn how to handle errors gracefully using try, catch, throw, and finally!
    </p>
  </>
)}
{/* 🚨 Exception Handling in Java */}
{activeSection === "java-exception" && (
  <>
    <h1>🚨 Exception Handling in Java</h1>
    <p className="subtitle">
      Exception Handling in Java allows you to handle runtime errors gracefully without stopping the entire program.
      It provides a way to maintain the normal flow of execution even when an error occurs.
    </p>

    <hr />

    {/* ⚙️ 1. What is an Exception? */}
    <h2>⚙️ 1. What is an Exception?</h2>
    <p>
      An <b>Exception</b> is an event that disrupts the normal flow of the program.
      It usually occurs during runtime (for example, dividing by zero or accessing an invalid array index).
    </p>

    <pre className="code-block">
{`int a = 10;
int b = 0;
System.out.println(a / b); // ❌ Throws ArithmeticException`}
    </pre>

    <p>💥 Output:</p>
    <pre className="code-block">
{`Exception in thread "main" java.lang.ArithmeticException: / by zero`}
    </pre>

    <hr />

    {/* 🧩 2. Types of Exceptions */}
    <h2>🧩 2. Types of Exceptions</h2>
    <ul className="bullet-points">
      <li><b>Checked Exceptions</b> → Detected at compile time (e.g., IOException, SQLException)</li>
      <li><b>Unchecked Exceptions</b> → Detected at runtime (e.g., ArithmeticException, NullPointerException)</li>
      <li><b>Errors</b> → Serious problems that can’t be handled (e.g., OutOfMemoryError)</li>
    </ul>

    <hr />

    {/* 🧱 3. Exception Hierarchy */}
    <h2>🧱 3. Exception Hierarchy</h2>
    <pre className="code-block">
{`Object
 └── Throwable
      ├── Exception (recoverable)
      │    ├── IOException
      │    ├── SQLException
      │    └── RuntimeException
      │         ├── ArithmeticException
      │         ├── NullPointerException
      │         └── ArrayIndexOutOfBoundsException
      └── Error (unrecoverable)
           ├── OutOfMemoryError
           └── StackOverflowError`}
    </pre>

    <hr />

    {/* 🧠 4. Why Use Exception Handling? */}
    <h2>🧠 4. Why Use Exception Handling?</h2>
    <ul className="bullet-points">
      <li>🚫 Prevents program termination on unexpected errors</li>
      <li>🔧 Makes debugging easier</li>
      <li>🧭 Separates normal logic from error-handling logic</li>
      <li>💡 Maintains normal program flow</li>
    </ul>

    <hr />

    {/* 🔹 5. Exception Handling Keywords */}
    <h2>🔹 5. Exception Handling Keywords</h2>
    <ul className="bullet-points">
      <li><b>try</b> — contains the code that might throw an exception</li>
      <li><b>catch</b> — handles the exception</li>
      <li><b>finally</b> — executes code regardless of exception (cleanup)</li>
      <li><b>throw</b> — used to throw an exception manually</li>
      <li><b>throws</b> — declares exceptions that a method might throw</li>
    </ul>

    <hr />

    {/* 🧩 6. Basic try-catch Example */}
    <h2>🧩 6. Basic try-catch Example</h2>
    <pre className="code-block">
{`public class TryCatchExample {
  public static void main(String[] args) {
    try {
      int a = 10 / 0;
    } catch (ArithmeticException e) {
      System.out.println("Cannot divide by zero!");
    }
    System.out.println("Program continues...");
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Cannot divide by zero!
Program continues...`}
    </pre>

    <hr />

    {/* 🔄 7. Multiple Catch Blocks */}
    <h2>🔄 7. Multiple Catch Blocks</h2>
    <pre className="code-block">
{`public class MultiCatch {
  public static void main(String[] args) {
    try {
      int[] arr = new int[3];
      arr[5] = 10; // ArrayIndexOutOfBoundsException
    } catch (ArithmeticException e) {
      System.out.println("Arithmetic error!");
    } catch (ArrayIndexOutOfBoundsException e) {
      System.out.println("Array index error!");
    } catch (Exception e) {
      System.out.println("General exception!");
    }
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Array index error!`}
    </pre>

    <hr />

    {/* ⚙️ 8. finally Block */}
    <h2>⚙️ 8. finally Block</h2>
    <p>
      The <code>finally</code> block executes whether an exception occurs or not — usually used to close files or database connections.
    </p>
    <pre className="code-block">
{`try {
  int a = 10 / 0;
} catch (Exception e) {
  System.out.println("Exception handled!");
} finally {
  System.out.println("Finally block always executes!");
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Exception handled!
Finally block always executes!`}
    </pre>

    <hr />

    {/* 💥 9. throw Keyword */}
    <h2>💥 9. throw Keyword</h2>
    <p>
      The <code>throw</code> keyword is used to <b>manually throw an exception</b>.
    </p>
    <pre className="code-block">
{`public class ThrowExample {
  static void checkAge(int age) {
    if (age < 18)
      throw new ArithmeticException("Not eligible to vote");
    else
      System.out.println("Eligible to vote");
  }

  public static void main(String[] args) {
    checkAge(16);
  }
}`}
    </pre>

    <p>💥 Output:</p>
    <pre className="code-block">
{`Exception in thread "main" java.lang.ArithmeticException: Not eligible to vote`}
    </pre>

    <hr />

    {/* ⚙️ 10. throws Keyword */}
    <h2>⚙️ 10. throws Keyword</h2>
    <p>
      The <code>throws</code> keyword is used in method declaration to indicate which exceptions might be thrown by that method.
    </p>
    <pre className="code-block">
{`import java.io.*;

public class ThrowsExample {
  static void readFile() throws IOException {
    FileReader file = new FileReader("test.txt");
    file.read();
    file.close();
  }

  public static void main(String[] args) {
    try {
      readFile();
    } catch (IOException e) {
      System.out.println("File not found!");
    }
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`File not found!`}
    </pre>

    <hr />

    {/* 🧱 11. Custom Exceptions */}
    <h2>🧱 11. Custom Exceptions</h2>
    <p>
      You can create your own exceptions by extending the <code>Exception</code> class.
    </p>
    <pre className="code-block">
{`class InvalidAgeException extends Exception {
  public InvalidAgeException(String message) {
    super(message);
  }
}

public class CustomExceptionDemo {
  static void checkAge(int age) throws InvalidAgeException {
    if (age < 18)
      throw new InvalidAgeException("Age must be 18 or above");
    else
      System.out.println("Access granted");
  }

  public static void main(String[] args) {
    try {
      checkAge(16);
    } catch (InvalidAgeException e) {
      System.out.println("Exception: " + e.getMessage());
    }
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Exception: Age must be 18 or above`}
    </pre>

    <hr />

    {/* 🧠 12. Summary */}
    <h2>🧠 12. Summary</h2>
    <ul className="bullet-points">
      <li>⚙️ Exceptions handle runtime errors gracefully.</li>
      <li>🧩 Checked → compile-time | Unchecked → runtime.</li>
      <li>🔹 Keywords: try, catch, finally, throw, throws.</li>
      <li>🧱 Custom exceptions extend the <code>Exception</code> class.</li>
      <li>🚀 Always use <code>finally</code> for cleanup operations.</li>
    </ul>

    <p className="highlight">
      🎯 Proper Exception Handling makes your code robust, readable, and secure.
    </p>

    <p className="highlight">
      🚀 Next Up: <b>File Handling in Java (File, FileReader, FileWriter, BufferedReader, etc.)</b>
    </p>
  </>
)}
{/* 🧩 File Handling (I/O) */}
{activeSection === "java-file-handling" && (
  <>
    <h1>🧩 File Handling (I/O) in Java</h1>
    <p className="subtitle">
      File Handling in Java allows programs to read and write data to files — one of the most common tasks in any application.
      Java provides powerful <b>I/O (Input/Output)</b> classes in the <code>java.io</code> and <code>java.nio</code> packages.
    </p>

    <hr />

    {/* ⚙️ 1. What is File Handling? */}
    <h2>⚙️ 1. What is File Handling?</h2>
    <p>
      File Handling means performing operations such as <b>creating, reading, writing, and deleting files</b> from a Java program.
      These operations are handled using <b>File I/O streams</b>.
    </p>

    <ul className="bullet-points">
      <li>📥 <b>Input Stream</b> → Used to read data from a file.</li>
      <li>📤 <b>Output Stream</b> → Used to write data to a file.</li>
    </ul>

    <hr />

    {/* 📘 2. The File Class */}
    <h2>📘 2. The File Class</h2>
    <p>
      The <code>java.io.File</code> class is used to create, delete, and check information about a file or directory.
    </p>

    <h3>🧩 Example: Creating a File</h3>
    <pre className="code-block">
{`import java.io.File;
import java.io.IOException;

public class CreateFileExample {
  public static void main(String[] args) {
    try {
      File file = new File("example.txt");
      if (file.createNewFile()) {
        System.out.println("File created: " + file.getName());
      } else {
        System.out.println("File already exists.");
      }
    } catch (IOException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`File created: example.txt`}
    </pre>

    <hr />

    {/* 🧠 3. Writing to a File */}
    <h2>🧠 3. Writing to a File</h2>
    <p>
      You can write data into a file using <code>FileWriter</code> or <code>BufferedWriter</code>.
    </p>

    <pre className="code-block">
{`import java.io.FileWriter;
import java.io.IOException;

public class WriteFileExample {
  public static void main(String[] args) {
    try {
      FileWriter writer = new FileWriter("example.txt");
      writer.write("Hello, Java File Handling!\\nThis is a file write example.");
      writer.close();
      System.out.println("Successfully wrote to the file.");
    } catch (IOException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Successfully wrote to the file.`}
    </pre>

    <hr />

    {/* 📖 4. Reading from a File */}
    <h2>📖 4. Reading from a File</h2>
    <p>
      You can read file content using <code>FileReader</code> or <code>BufferedReader</code>.
    </p>

    <pre className="code-block">
{`import java.io.FileReader;
import java.io.BufferedReader;
import java.io.IOException;

public class ReadFileExample {
  public static void main(String[] args) {
    try {
      BufferedReader reader = new BufferedReader(new FileReader("example.txt"));
      String line;
      while ((line = reader.readLine()) != null) {
        System.out.println(line);
      }
      reader.close();
    } catch (IOException e) {
      System.out.println("An error occurred while reading.");
      e.printStackTrace();
    }
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Hello, Java File Handling!
This is a file write example.`}
    </pre>

    <hr />

    {/* ⚡ 5. File Information */}
    <h2>⚡ 5. File Information</h2>
    <p>
      You can get details about a file like its name, path, size, or permissions using <code>File</code> methods.
    </p>

    <pre className="code-block">
{`import java.io.File;

public class FileInfoExample {
  public static void main(String[] args) {
    File file = new File("example.txt");
    if (file.exists()) {
      System.out.println("File name: " + file.getName());
      System.out.println("Absolute path: " + file.getAbsolutePath());
      System.out.println("Writable: " + file.canWrite());
      System.out.println("Readable: " + file.canRead());
      System.out.println("File size (bytes): " + file.length());
    } else {
      System.out.println("File does not exist.");
    }
  }
}`}
    </pre>

    <hr />

    {/* 🧱 6. Deleting a File */}
    <h2>🧱 6. Deleting a File</h2>
    <pre className="code-block">
{`import java.io.File;

public class DeleteFileExample {
  public static void main(String[] args) {
    File file = new File("example.txt");
    if (file.delete()) {
      System.out.println("Deleted file: " + file.getName());
    } else {
      System.out.println("Failed to delete the file.");
    }
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Deleted file: example.txt`}
    </pre>

    <hr />

    {/* 🔄 7. Byte Streams vs Character Streams */}
    <h2>🔄 7. Byte Streams vs Character Streams</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Class Example</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Byte Stream</td><td><code>FileInputStream, FileOutputStream</code></td><td>For binary data (images, audio, etc.)</td></tr>
        <tr><td>Character Stream</td><td><code>FileReader, FileWriter</code></td><td>For text files</td></tr>
      </tbody>
    </table>

    <hr />

    {/* 📦 8. Example: Copying File Content */}
    <h2>📦 8. Example: Copying File Content</h2>
    <pre className="code-block">
{`import java.io.*;

public class CopyFileExample {
  public static void main(String[] args) {
    try {
      FileReader fr = new FileReader("source.txt");
      FileWriter fw = new FileWriter("destination.txt");

      int ch;
      while ((ch = fr.read()) != -1) {
        fw.write(ch);
      }

      fr.close();
      fw.close();
      System.out.println("File copied successfully!");
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}`}
    </pre>

    <hr />

    {/* 🧠 9. Summary */}
    <h2>🧠 9. Summary</h2>
    <ul className="bullet-points">
      <li>📄 Use <b>File</b> class for creating, deleting, and checking file properties.</li>
      <li>✍️ Use <b>FileWriter</b> or <b>BufferedWriter</b> to write data.</li>
      <li>📖 Use <b>FileReader</b> or <b>BufferedReader</b> to read data.</li>
      <li>🧱 Always close files after use to prevent memory leaks.</li>
      <li>⚡ Use byte streams for binary files and character streams for text files.</li>
    </ul>

    <p className="highlight">
      🎯 Mastering File I/O helps you interact with external data sources, logs, and configurations efficiently.
    </p>

    <p className="highlight">
      🚀 Next Up: <b>Collections Framework (List, Set, Map)</b> — manage groups of objects easily!
    </p>
  </>
)}
{/* 🔄 Collections Framework */}
{activeSection === "java-collections" && (
  <>
    <h1>🔄 Collections Framework</h1>
    <p className="subtitle">
      The <b>Collections Framework</b> in Java provides ready-to-use data structures (like dynamic arrays, lists, sets, and maps) 
      to store, manipulate, and organize objects efficiently.  
      It is part of the <code>java.util</code> package.
    </p>

    <hr />

    {/* 🧱 1. What is a Collection? */}
    <h2>🧱 1. What is a Collection?</h2>
    <p>
      A <b>Collection</b> is an object that can hold multiple elements together — just like a container that stores a group of objects.
    </p>

    <ul className="bullet-points">
      <li>📦 Collections replace arrays with more flexible, dynamic data structures.</li>
      <li>🔁 They support easy searching, sorting, insertion, and deletion.</li>
      <li>🧠 All collection classes are available in the <code>java.util</code> package.</li>
    </ul>

    <hr />

    {/* ⚙️ 2. Hierarchy of Collections Framework */}
    <h2>⚙️ 2. Hierarchy of Collections Framework</h2>
    <p>The main interfaces in the Java Collections Framework are:</p>

    <ul className="bullet-points">
      <li><b>Collection</b> — Root interface.</li>
      <li><b>List</b> — Ordered collection (allows duplicates).</li>
      <li><b>Set</b> — Unordered collection (no duplicates).</li>
      <li><b>Queue</b> — Follows FIFO (First-In-First-Out) order.</li>
      <li><b>Map</b> — Stores key-value pairs (keys are unique).</li>
    </ul>

    <p>🧩 Diagram Overview:</p>
    <pre className="code-block">
{`Collection
 ├── List
 │    ├── ArrayList
 │    ├── LinkedList
 │    └── Vector (Stack)
 ├── Set
 │    ├── HashSet
 │    ├── LinkedHashSet
 │    └── TreeSet
 └── Queue
      ├── PriorityQueue
      └── ArrayDeque

Map
 ├── HashMap
 ├── LinkedHashMap
 └── TreeMap`}
    </pre>

    <hr />

    {/* 🧩 3. List Interface */}
    <h2>🧩 3. List Interface</h2>
    <p>
      <b>List</b> is an ordered collection that allows duplicate elements.  
      Common implementations: <code>ArrayList</code> and <code>LinkedList</code>.
    </p>

    <h3>📘 Example: ArrayList</h3>
    <pre className="code-block">
{`import java.util.ArrayList;

public class ListExample {
  public static void main(String[] args) {
    ArrayList<String> fruits = new ArrayList<>();

    fruits.add("Apple");
    fruits.add("Banana");
    fruits.add("Mango");

    System.out.println(fruits);
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`[Apple, Banana, Mango]`}
    </pre>

    <p>💡 Use <b>LinkedList</b> when frequent insertions/deletions are needed.</p>

    <hr />

    {/* 🔁 4. Set Interface */}
    <h2>🔁 4. Set Interface</h2>
    <p>
      <b>Set</b> is a collection that does not allow duplicate elements.
      Common implementations: <code>HashSet</code>, <code>LinkedHashSet</code>, <code>TreeSet</code>.
    </p>

    <h3>📘 Example: HashSet</h3>
    <pre className="code-block">
{`import java.util.HashSet;

public class SetExample {
  public static void main(String[] args) {
    HashSet<Integer> numbers = new HashSet<>();

    numbers.add(10);
    numbers.add(20);
    numbers.add(30);
    numbers.add(20); // Duplicate ignored

    System.out.println(numbers);
  }
}`}
    </pre>

    <p>✅ Output (unordered):</p>
    <pre className="code-block">
{`[20, 10, 30]`}
    </pre>

    <ul className="bullet-points">
      <li>🔹 <b>HashSet</b> — No order maintained.</li>
      <li>🔹 <b>LinkedHashSet</b> — Maintains insertion order.</li>
      <li>🔹 <b>TreeSet</b> — Stores elements in sorted order.</li>
    </ul>

    <hr />

    {/* ⚡ 5. Map Interface */}
    <h2>⚡ 5. Map Interface</h2>
    <p>
      <b>Map</b> stores data in <b>key-value pairs</b>. Each key must be unique, but values can repeat.
      Common implementations: <code>HashMap</code>, <code>LinkedHashMap</code>, <code>TreeMap</code>.
    </p>

    <h3>📘 Example: HashMap</h3>
    <pre className="code-block">
{`import java.util.HashMap;

public class MapExample {
  public static void main(String[] args) {
    HashMap<Integer, String> students = new HashMap<>();

    students.put(1, "Sofia");
    students.put(2, "John");
    students.put(3, "Emma");

    System.out.println(students);

    System.out.println("Student with ID 2: " + students.get(2));
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`{1=Sofia, 2=John, 3=Emma}
Student with ID 2: John`}
    </pre>

    <hr />

    {/* 🧱 6. Iterating Collections */}
    <h2>🧱 6. Iterating Collections</h2>
    <p>You can iterate through collections using loops or iterators.</p>

    <h3>Example: Enhanced For Loop</h3>
    <pre className="code-block">
{`for (String fruit : fruits) {
  System.out.println(fruit);
}`}
    </pre>

    <h3>Example: Using Iterator</h3>
    <pre className="code-block">
{`import java.util.*;

public class IteratorExample {
  public static void main(String[] args) {
    ArrayList<String> list = new ArrayList<>();
    list.add("A");
    list.add("B");
    list.add("C");

    Iterator<String> it = list.iterator();
    while (it.hasNext()) {
      System.out.println(it.next());
    }
  }
}`}
    </pre>

    <hr />

    {/* 🧠 7. Useful Utility Methods */}
    <h2>🧠 7. Useful Utility Methods</h2>
    <p>The <code>Collections</code> class provides static utility methods:</p>

    <pre className="code-block">
{`import java.util.*;

public class CollectionsMethods {
  public static void main(String[] args) {
    ArrayList<Integer> list = new ArrayList<>();
    list.add(3);
    list.add(1);
    list.add(2);

    Collections.sort(list); // Sort ascending
    System.out.println("Sorted: " + list);

    Collections.reverse(list);
    System.out.println("Reversed: " + list);

    System.out.println("Max: " + Collections.max(list));
    System.out.println("Min: " + Collections.min(list));
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Sorted: [1, 2, 3]
Reversed: [3, 2, 1]
Max: 3
Min: 1`}
    </pre>

    <hr />

    {/* 🧩 8. Differences Between List, Set, and Map */}
    <h2>🧩 8. Differences Between List, Set, and Map</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>List</th>
          <th>Set</th>
          <th>Map</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Duplicates</td><td>Allowed</td><td>Not Allowed</td><td>Keys Not Allowed</td></tr>
        <tr><td>Order</td><td>Maintained</td><td>Depends on Implementation</td><td>Depends on Implementation</td></tr>
        <tr><td>Access</td><td>By Index</td><td>By Value</td><td>By Key</td></tr>
      </tbody>
    </table>

    <hr />

    {/* ✅ 9. Summary */}
    <h2>✅ 9. Summary</h2>
    <ul className="bullet-points">
      <li>📦 The Collections Framework provides dynamic data structures.</li>
      <li>📋 <b>List</b> — Ordered, allows duplicates.</li>
      <li>🔁 <b>Set</b> — Unordered, no duplicates.</li>
      <li>⚡ <b>Map</b> — Key-value pairs.</li>
      <li>🧠 Use <code>Collections</code> utility class for sorting, searching, and more.</li>
    </ul>

    <p className="highlight">
      🚀 Mastering Collections is essential for building efficient, real-world Java applications.
    </p>

    <p className="highlight">
      💡 Next Up: <b>Generics in Java</b> — write type-safe and reusable code!
    </p>
  </>
)}
{/* 🧠 Generics in Java */}
{activeSection === "java-generics" && (
  <>
    <h1>🧠 Generics in Java</h1>
    <p className="subtitle">
      <b>Generics</b> allow you to write <b>type-safe</b> and <b>reusable</b> code in Java.  
      They let classes, interfaces, and methods operate on <b>objects of specific types</b> while ensuring <b>compile-time type checking</b>.
    </p>

    <hr />

    {/* 🧱 1. What are Generics? */}
    <h2>🧱 1. What are Generics?</h2>
    <p>
      Generics mean **parameterized types** — instead of using `Object` and casting manually,  
      you specify a **type parameter** (like <code>&lt;T&gt;</code>) that the compiler enforces.
    </p>

    <h3>💡 Example (Without Generics)</h3>
    <pre className="code-block">
{`import java.util.*;

public class NonGenericExample {
  public static void main(String[] args) {
    ArrayList list = new ArrayList(); // No type safety
    list.add("Hello");
    list.add(100); // Mixed types

    for (Object obj : list) {
      String s = (String) obj; // ❌ Runtime error possible
      System.out.println(s);
    }
  }
}`}
    </pre>

    <p>⚠️ Problem: You must manually cast each element, and errors happen at runtime.</p>

    <h3>✅ Example (With Generics)</h3>
    <pre className="code-block">
{`import java.util.*;

public class GenericExample {
  public static void main(String[] args) {
    ArrayList<String> list = new ArrayList<>(); // Type-safe
    list.add("Hello");
    // list.add(100); // ❌ Compile-time error

    for (String s : list) {
      System.out.println(s.toUpperCase());
    }
  }
}`}
    </pre>

    <p>✅ Type safety and no need for casting.</p>

    <hr />

    {/* 🔢 2. Generic Class */}
    <h2>🔢 2. Generic Class</h2>
    <p>
      You can define your own **generic classes** using a <code>&lt;T&gt;</code> placeholder.  
      <code>T</code> stands for “Type”, but you can use any name.
    </p>

    <h3>📘 Example:</h3>
    <pre className="code-block">
{`class Box<T> {
  private T value;

  public void set(T value) {
    this.value = value;
  }

  public T get() {
    return value;
  }
}

public class GenericClassExample {
  public static void main(String[] args) {
    Box<Integer> intBox = new Box<>();
    intBox.set(123);
    System.out.println("Integer: " + intBox.get());

    Box<String> strBox = new Box<>();
    strBox.set("Hello Generics!");
    System.out.println("String: " + strBox.get());
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Integer: 123
String: Hello Generics!`}
    </pre>

    <p>💡 You can use any data type without rewriting the class!</p>

    <hr />

    {/* ⚙️ 3. Generic Methods */}
    <h2>⚙️ 3. Generic Methods</h2>
    <p>
      Methods can also be generic, using a type parameter <code>&lt;T&gt;</code> before the return type.
    </p>

    <h3>📘 Example:</h3>
    <pre className="code-block">
{`public class GenericMethodExample {

  // Generic method
  public static <T> void displayArray(T[] array) {
    for (T element : array) {
      System.out.println(element);
    }
  }

  public static void main(String[] args) {
    Integer[] intArray = {1, 2, 3};
    String[] strArray = {"A", "B", "C"};

    displayArray(intArray);
    displayArray(strArray);
  }
}`}
    </pre>

    <p>✅ Works for any data type!</p>

    <hr />

    {/* 🧩 4. Bounded Type Parameters */}
    <h2>🧩 4. Bounded Type Parameters</h2>
    <p>
      You can restrict generic types using the <b>extends</b> keyword (for classes or interfaces).
      <br />
      Example: <code>&lt;T extends Number&gt;</code> means <b>T must be a subclass of Number</b>.
    </p>

    <h3>📘 Example:</h3>
    <pre className="code-block">
{`class Calculator<T extends Number> {
  private T num1, num2;

  public Calculator(T num1, T num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  public double add() {
    return num1.doubleValue() + num2.doubleValue();
  }
}

public class BoundedExample {
  public static void main(String[] args) {
    Calculator<Integer> calc1 = new Calculator<>(10, 20);
    System.out.println("Sum: " + calc1.add());

    Calculator<Double> calc2 = new Calculator<>(5.5, 2.5);
    System.out.println("Sum: " + calc2.add());
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Sum: 30.0
Sum: 8.0`}
    </pre>

    <p>⚠️ <code>Calculator&lt;String&gt;</code> would cause a compile-time error.</p>

    <hr />

    {/* 🔄 5. Wildcards (?) */}
    <h2>🔄 5. Wildcards (?)</h2>
    <p>
      Wildcards are used when you don’t know the exact type parameter.  
      There are three main types:
    </p>

    <ul className="bullet-points">
      <li>🔹 <b>Unbounded:</b> <code>?</code> → any type</li>
      <li>🔹 <b>Upper bounded:</b> <code>? extends Type</code> → subtype of Type</li>
      <li>🔹 <b>Lower bounded:</b> <code>? super Type</code> → supertype of Type</li>
    </ul>

    <h3>📘 Example:</h3>
    <pre className="code-block">
{`import java.util.*;

public class WildcardExample {
  public static void printList(List<?> list) {
    for (Object obj : list) {
      System.out.println(obj);
    }
  }

  public static void main(String[] args) {
    List<Integer> intList = Arrays.asList(1, 2, 3);
    List<String> strList = Arrays.asList("A", "B", "C");

    printList(intList);
    printList(strList);
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`1
2
3
A
B
C`}
    </pre>

    <hr />

    {/* 📋 6. Advantages of Generics */}
    <h2>📋 6. Advantages of Generics</h2>
    <ul className="bullet-points">
      <li>✅ Compile-time type checking.</li>
      <li>🧠 No need for explicit type casting.</li>
      <li>🔁 Code reusability — same code works for any data type.</li>
      <li>⚙️ Improved performance (avoids runtime `ClassCastException`).</li>
    </ul>

    <hr />

    {/* 🧱 7. Limitations of Generics */}
    <h2>🧱 7. Limitations of Generics</h2>
    <ul className="bullet-points">
      <li>🚫 Cannot create instances of type parameter (e.g., <code>new T()</code> not allowed).</li>
      <li>🚫 Cannot use primitive types directly (use wrapper classes instead).</li>
      <li>🚫 Type information is erased at runtime (type erasure).</li>
    </ul>

    <hr />

    {/* ✅ 8. Summary */}
    <h2>✅ 8. Summary</h2>
    <ul className="bullet-points">
      <li>📦 Generics enable type-safe and reusable code.</li>
      <li>🔢 Use <code>&lt;T&gt;</code> to define generic classes or methods.</li>
      <li>🧩 Use <code>extends</code> to restrict types (bounded types).</li>
      <li>🔄 Wildcards (<code>?</code>) provide flexibility for unknown types.</li>
    </ul>

    <p className="highlight">
      💡 Mastering Generics helps you work with Collections and modern Java APIs effectively.
    </p>

    <p className="highlight">
      🚀 Next Up: <b>Multithreading in Java</b> — run multiple tasks simultaneously for high performance!
    </p>
  </>
)}
{/* 🧠 Generics in Java */}
{activeSection === "java-generics" && (
  <>
    <h1>🧠 Generics in Java</h1>
    <p className="subtitle">
      <b>Generics</b> allow you to write <b>type-safe</b> and <b>reusable</b> code in Java.  
      They let classes, interfaces, and methods operate on <b>objects of specific types</b> while ensuring <b>compile-time type checking</b>.
    </p>

    <hr />

    {/* 🧱 1. What are Generics? */}
    <h2>🧱 1. What are Generics?</h2>
    <p>
      Generics mean **parameterized types** — instead of using `Object` and casting manually,  
      you specify a **type parameter** (like <code>&lt;T&gt;</code>) that the compiler enforces.
    </p>

    <h3>💡 Example (Without Generics)</h3>
    <pre className="code-block">
{`import java.util.*;

public class NonGenericExample {
  public static void main(String[] args) {
    ArrayList list = new ArrayList(); // No type safety
    list.add("Hello");
    list.add(100); // Mixed types

    for (Object obj : list) {
      String s = (String) obj; // ❌ Runtime error possible
      System.out.println(s);
    }
  }
}`}
    </pre>

    <p>⚠️ Problem: You must manually cast each element, and errors happen at runtime.</p>

    <h3>✅ Example (With Generics)</h3>
    <pre className="code-block">
{`import java.util.*;

public class GenericExample {
  public static void main(String[] args) {
    ArrayList<String> list = new ArrayList<>(); // Type-safe
    list.add("Hello");
    // list.add(100); // ❌ Compile-time error

    for (String s : list) {
      System.out.println(s.toUpperCase());
    }
  }
}`}
    </pre>

    <p>✅ Type safety and no need for casting.</p>

    <hr />

    {/* 🔢 2. Generic Class */}
    <h2>🔢 2. Generic Class</h2>
    <p>
      You can define your own **generic classes** using a <code>&lt;T&gt;</code> placeholder.  
      <code>T</code> stands for “Type”, but you can use any name.
    </p>

    <h3>📘 Example:</h3>
    <pre className="code-block">
{`class Box<T> {
  private T value;

  public void set(T value) {
    this.value = value;
  }

  public T get() {
    return value;
  }
}

public class GenericClassExample {
  public static void main(String[] args) {
    Box<Integer> intBox = new Box<>();
    intBox.set(123);
    System.out.println("Integer: " + intBox.get());

    Box<String> strBox = new Box<>();
    strBox.set("Hello Generics!");
    System.out.println("String: " + strBox.get());
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Integer: 123
String: Hello Generics!`}
    </pre>

    <p>💡 You can use any data type without rewriting the class!</p>

    <hr />

    {/* ⚙️ 3. Generic Methods */}
    <h2>⚙️ 3. Generic Methods</h2>
    <p>
      Methods can also be generic, using a type parameter <code>&lt;T&gt;</code> before the return type.
    </p>

    <h3>📘 Example:</h3>
    <pre className="code-block">
{`public class GenericMethodExample {

  // Generic method
  public static <T> void displayArray(T[] array) {
    for (T element : array) {
      System.out.println(element);
    }
  }

  public static void main(String[] args) {
    Integer[] intArray = {1, 2, 3};
    String[] strArray = {"A", "B", "C"};

    displayArray(intArray);
    displayArray(strArray);
  }
}`}
    </pre>

    <p>✅ Works for any data type!</p>

    <hr />

    {/* 🧩 4. Bounded Type Parameters */}
    <h2>🧩 4. Bounded Type Parameters</h2>
    <p>
      You can restrict generic types using the <b>extends</b> keyword (for classes or interfaces).
      <br />
      Example: <code>&lt;T extends Number&gt;</code> means <b>T must be a subclass of Number</b>.
    </p>

    <h3>📘 Example:</h3>
    <pre className="code-block">
{`class Calculator<T extends Number> {
  private T num1, num2;

  public Calculator(T num1, T num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  public double add() {
    return num1.doubleValue() + num2.doubleValue();
  }
}

public class BoundedExample {
  public static void main(String[] args) {
    Calculator<Integer> calc1 = new Calculator<>(10, 20);
    System.out.println("Sum: " + calc1.add());

    Calculator<Double> calc2 = new Calculator<>(5.5, 2.5);
    System.out.println("Sum: " + calc2.add());
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`Sum: 30.0
Sum: 8.0`}
    </pre>

    <p>⚠️ <code>Calculator&lt;String&gt;</code> would cause a compile-time error.</p>

    <hr />

    {/* 🔄 5. Wildcards (?) */}
    <h2>🔄 5. Wildcards (?)</h2>
    <p>
      Wildcards are used when you don’t know the exact type parameter.  
      There are three main types:
    </p>

    <ul className="bullet-points">
      <li>🔹 <b>Unbounded:</b> <code>?</code> → any type</li>
      <li>🔹 <b>Upper bounded:</b> <code>? extends Type</code> → subtype of Type</li>
      <li>🔹 <b>Lower bounded:</b> <code>? super Type</code> → supertype of Type</li>
    </ul>

    <h3>📘 Example:</h3>
    <pre className="code-block">
{`import java.util.*;

public class WildcardExample {
  public static void printList(List<?> list) {
    for (Object obj : list) {
      System.out.println(obj);
    }
  }

  public static void main(String[] args) {
    List<Integer> intList = Arrays.asList(1, 2, 3);
    List<String> strList = Arrays.asList("A", "B", "C");

    printList(intList);
    printList(strList);
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`1
2
3
A
B
C`}
    </pre>

    <hr />

    {/* 📋 6. Advantages of Generics */}
    <h2>📋 6. Advantages of Generics</h2>
    <ul className="bullet-points">
      <li>✅ Compile-time type checking.</li>
      <li>🧠 No need for explicit type casting.</li>
      <li>🔁 Code reusability — same code works for any data type.</li>
      <li>⚙️ Improved performance (avoids runtime `ClassCastException`).</li>
    </ul>

    <hr />

    {/* 🧱 7. Limitations of Generics */}
    <h2>🧱 7. Limitations of Generics</h2>
    <ul className="bullet-points">
      <li>🚫 Cannot create instances of type parameter (e.g., <code>new T()</code> not allowed).</li>
      <li>🚫 Cannot use primitive types directly (use wrapper classes instead).</li>
      <li>🚫 Type information is erased at runtime (type erasure).</li>
    </ul>

    <hr />

    {/* ✅ 8. Summary */}
    <h2>✅ 8. Summary</h2>
    <ul className="bullet-points">
      <li>📦 Generics enable type-safe and reusable code.</li>
      <li>🔢 Use <code>&lt;T&gt;</code> to define generic classes or methods.</li>
      <li>🧩 Use <code>extends</code> to restrict types (bounded types).</li>
      <li>🔄 Wildcards (<code>?</code>) provide flexibility for unknown types.</li>
    </ul>

    <p className="highlight">
      💡 Mastering Generics helps you work with Collections and modern Java APIs effectively.
    </p>

    <p className="highlight">
      🚀 Next Up: <b>Multithreading in Java</b> — run multiple tasks simultaneously for high performance!
    </p>
  </>
)}
{/* ⚙️ Multithreading in Java */}
{activeSection === "java-multithreading" && (
  <>
    <h1>⚙️ Multithreading in Java</h1>
    <p className="subtitle">
      <b>Multithreading</b> in Java allows multiple parts of a program (threads) to run simultaneously — improving performance and responsiveness.  
      It’s essential for modern apps like games, servers, and background tasks.
    </p>

    <hr />

    {/* 🧱 1. What is a Thread? */}
    <h2>🧱 1. What is a Thread?</h2>
    <p>
      A <b>thread</b> is the smallest unit of a program that can run independently.  
      Java supports **multithreading**, meaning multiple threads can run concurrently.
    </p>

    <p>💡 The Java Virtual Machine (JVM) manages and schedules all threads.</p>

    <h3>🧩 Example of a Single Thread:</h3>
    <pre className="code-block">
{`public class SingleThreadExample {
  public static void main(String[] args) {
    System.out.println("Task 1");
    System.out.println("Task 2");
  }
}`}
    </pre>

    <p>⚙️ Here, the code runs sequentially — one line after another.</p>

    <hr />

    {/* 🔁 2. Creating Threads */}
    <h2>🔁 2. Creating Threads</h2>
    <p>There are two main ways to create a thread in Java:</p>
    <ol className="number-list">
      <li>By extending the <b>Thread</b> class</li>
      <li>By implementing the <b>Runnable</b> interface</li>
    </ol>

    <h3>✅ Method 1: Extending Thread Class</h3>
    <pre className="code-block">
{`class MyThread extends Thread {
  public void run() {
    for (int i = 1; i <= 5; i++) {
      System.out.println("Thread running: " + i);
    }
  }
}

public class ThreadExample {
  public static void main(String[] args) {
    MyThread t1 = new MyThread();
    t1.start(); // start() calls run() in a separate thread
  }
}`}
    </pre>

    <p>⚡ <code>start()</code> creates a new thread and executes <code>run()</code> asynchronously.</p>

    <h3>✅ Method 2: Implementing Runnable Interface</h3>
    <pre className="code-block">
{`class MyRunnable implements Runnable {
  public void run() {
    for (int i = 1; i <= 5; i++) {
      System.out.println("Runnable running: " + i);
    }
  }
}

public class RunnableExample {
  public static void main(String[] args) {
    Thread t = new Thread(new MyRunnable());
    t.start();
  }
}`}
    </pre>

    <p>💡 Using <b>Runnable</b> is preferred in real-world applications since it allows extending other classes.</p>

    <hr />

    {/* 🧩 3. Thread Lifecycle */}
    <h2>🧩 3. Thread Lifecycle</h2>
    <p>A thread in Java goes through the following stages:</p>

    <ul className="bullet-points">
      <li>🍼 <b>New:</b> Thread object created but not started.</li>
      <li>▶️ <b>Runnable:</b> Ready to run or running.</li>
      <li>⏸️ <b>Blocked / Waiting:</b> Waiting for resources or another thread.</li>
      <li>⏹️ <b>Terminated:</b> Thread has completed execution.</li>
    </ul>

    <h3>📘 Example Diagram:</h3>
    <p>(Imagine a flow: <b>New ➜ Runnable ➜ Running ➜ Waiting ➜ Terminated</b>)</p>

    <hr />

    {/* 🔄 4. Thread Methods */}
    <h2>🔄 4. Thread Methods</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><code>start()</code></td><td>Starts a new thread and calls <code>run()</code></td></tr>
        <tr><td><code>run()</code></td><td>Contains the code executed by the thread</td></tr>
        <tr><td><code>sleep(ms)</code></td><td>Pauses the thread for a specific time</td></tr>
        <tr><td><code>join()</code></td><td>Waits for another thread to complete</td></tr>
        <tr><td><code>isAlive()</code></td><td>Checks if thread is still running</td></tr>
        <tr><td><code>setPriority()</code></td><td>Sets thread priority (1 to 10)</td></tr>
      </tbody>
    </table>

    <h3>💡 Example:</h3>
    <pre className="code-block">
{`class Demo extends Thread {
  public void run() {
    for (int i = 1; i <= 3; i++) {
      System.out.println(Thread.currentThread().getName() + " - " + i);
    }
  }
}

public class ThreadMethods {
  public static void main(String[] args) throws InterruptedException {
    Demo t1 = new Demo();
    Demo t2 = new Demo();
    t1.start();
    t1.join(); // Wait until t1 finishes
    t2.start();
  }
}`}
    </pre>

    <hr />

    {/* 🔒 5. Synchronization */}
    <h2>🔒 5. Synchronization</h2>
    <p>
      When multiple threads access shared data, it can lead to <b>inconsistency</b>.  
      <b>Synchronization</b> ensures only one thread accesses the shared resource at a time.
    </p>

    <h3>📘 Example:</h3>
    <pre className="code-block">
{`class Table {
  synchronized void printTable(int n) {
    for (int i = 1; i <= 5; i++) {
      System.out.println(n * i);
      try { Thread.sleep(500); } catch (Exception e) { }
    }
  }
}

class MyThread1 extends Thread {
  Table t;
  MyThread1(Table t) { this.t = t; }
  public void run() { t.printTable(5); }
}

class MyThread2 extends Thread {
  Table t;
  MyThread2(Table t) { this.t = t; }
  public void run() { t.printTable(10); }
}

public class SyncExample {
  public static void main(String[] args) {
    Table obj = new Table();
    new MyThread1(obj).start();
    new MyThread2(obj).start();
  }
}`}
    </pre>

    <p>✅ The <code>synchronized</code> keyword prevents both threads from accessing <code>printTable()</code> simultaneously.</p>

    <hr />

    {/* 🧠 6. Thread Communication */}
    <h2>🧠 6. Thread Communication (wait, notify, notifyAll)</h2>
    <p>
      Java provides methods like <code>wait()</code>, <code>notify()</code>, and <code>notifyAll()</code> for threads to communicate.
      <br />
      These methods are used inside synchronized blocks.
    </p>

    <h3>💡 Example Concept:</h3>
    <ul className="bullet-points">
      <li>🔹 <code>wait()</code> — causes a thread to wait until another thread calls <code>notify()</code>.</li>
      <li>🔹 <code>notify()</code> — wakes up one waiting thread.</li>
      <li>🔹 <code>notifyAll()</code> — wakes up all waiting threads.</li>
    </ul>

    <hr />

    {/* 🚀 7. Advantages of Multithreading */}
    <h2>🚀 7. Advantages of Multithreading</h2>
    <ul className="bullet-points">
      <li>⚡ Better performance and CPU utilization.</li>
      <li>🧩 Non-blocking, responsive applications.</li>
      <li>🔁 Efficient resource sharing.</li>
      <li>🧠 Simplifies background and parallel tasks.</li>
    </ul>

    <hr />

    {/* ⚠️ 8. Challenges */}
    <h2>⚠️ 8. Challenges of Multithreading</h2>
    <ul className="bullet-points">
      <li>🚨 Data inconsistency (if not synchronized properly).</li>
      <li>🌀 Deadlocks when threads wait forever for resources.</li>
      <li>🧩 Complex debugging and testing.</li>
    </ul>

    <hr />

    {/* ✅ 9. Summary */}
    <h2>✅ 9. Summary</h2>
    <ul className="bullet-points">
      <li>🧱 Threads allow concurrent execution in Java.</li>
      <li>🔁 Create threads via <b>Thread</b> or <b>Runnable</b>.</li>
      <li>🔒 Use <b>synchronized</b> to prevent data conflicts.</li>
      <li>🧠 Use <b>wait()</b> and <b>notify()</b> for coordination.</li>
    </ul>

    <p className="highlight">
      💡 Multithreading makes Java ideal for high-performance apps like servers, simulations, and GUIs.
    </p>

    <p className="highlight">
      🚀 Next Up: <b>Java Streams & Lambda Expressions</b> — write cleaner, faster, and more functional Java code!
    </p>
  </>
)}
{/* 🧮 Enum, Var args & Static Import */}
{activeSection === "java-enum" && (
  <>
    <h1>🧮 Enum, Var args & Static Import</h1>
    <p className="subtitle">
      These three concepts — <b>Enum</b>, <b>Varargs</b>, and <b>Static Import</b> — help make your Java programs more flexible, readable, and maintainable.  
      Let’s understand each with simple explanations and examples.
    </p>

    <hr />

    {/* 🧩 1. Enum (Enumerations) */}
    <h2>🧩 1. Enum (Enumerations)</h2>
    <p>
      An <b>enum</b> in Java is a special data type that represents a group of constants (fixed values).  
      It improves code readability and avoids using magic numbers or strings.
    </p>

    <h3>💡 Example:</h3>
    <pre className="code-block">
{`enum Day {
  SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
}

public class EnumExample {
  public static void main(String[] args) {
    Day today = Day.FRIDAY;

    switch (today) {
      case FRIDAY:
        System.out.println("Weekend is coming!");
        break;
      case SATURDAY:
      case SUNDAY:
        System.out.println("It's weekend!");
        break;
      default:
        System.out.println("It's a weekday.");
    }
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">{`Weekend is coming!`}</pre>

    <ul className="bullet-points">
      <li>🔹 Enums are <b>type-safe constants</b>.</li>
      <li>🔹 You can use them in <b>switch</b> statements.</li>
      <li>🔹 Enums can have <b>fields, constructors, and methods</b>.</li>
    </ul>

    <h3>⚙️ Enum with Methods Example:</h3>
    <pre className="code-block">
{`enum Level {
  LOW(1), MEDIUM(2), HIGH(3);

  private int code;

  Level(int code) {
    this.code = code;
  }

  public int getCode() {
    return code;
  }
}

public class EnumMethods {
  public static void main(String[] args) {
    for (Level l : Level.values()) {
      System.out.println(l + " -> " + l.getCode());
    }
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">{`LOW -> 1
MEDIUM -> 2
HIGH -> 3`}</pre>

    <p className="highlight">💡 Enums can hold values and even define behavior — making them more powerful than simple constants.</p>

    <hr />

    {/* 🔁 2. Varargs (Variable Arguments) */}
    <h2>🔁 2. Varargs (Variable Arguments)</h2>
    <p>
      Varargs (Variable Arguments) allow you to pass a <b>variable number of arguments</b> to a method instead of defining multiple overloaded versions.
    </p>

    <h3>🧩 Syntax:</h3>
    <pre className="code-block">{`returnType methodName(type... variableName)`}</pre>

    <p>💡 You can think of it as automatically creating an array of that type.</p>

    <h3>✅ Example:</h3>
    <pre className="code-block">
{`public class VarArgsExample {
  static void printNumbers(int... numbers) {
    System.out.println("Count: " + numbers.length);
    for (int n : numbers) {
      System.out.print(n + " ");
    }
    System.out.println();
  }

  public static void main(String[] args) {
    printNumbers(10);
    printNumbers(1, 2, 3, 4, 5);
    printNumbers(); // No arguments
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">{`Count: 1
10
Count: 5
1 2 3 4 5
Count: 0`}</pre>

    <ul className="bullet-points">
      <li>🔹 Only one varargs parameter is allowed in a method.</li>
      <li>🔹 It must be the <b>last parameter</b> in the method signature.</li>
    </ul>

    <h3>💡 Mixed Example:</h3>
    <pre className="code-block">
{`static void showDetails(String name, int... marks) {
  System.out.println("Student: " + name);
  System.out.println("Marks count: " + marks.length);
}

showDetails("Sofia", 90, 85, 88);`}
    </pre>

    <hr />

    {/* ⚙️ 3. Static Import */}
    <h2>⚙️ 3. Static Import</h2>
    <p>
      Normally, you access static members (like <code>Math.sqrt()</code>) using their class name.  
      But with <b>static import</b>, you can use them directly without prefixing the class name.
    </p>

    <h3>🧩 Syntax:</h3>
    <pre className="code-block">{`import static packageName.ClassName.staticMember;`}</pre>

    <h3>✅ Example:</h3>
    <pre className="code-block">
{`import static java.lang.Math.*;

public class StaticImportExample {
  public static void main(String[] args) {
    System.out.println(sqrt(16));   // instead of Math.sqrt(16)
    System.out.println(pow(2, 5));  // instead of Math.pow(2, 5)
    System.out.println(max(10, 25));
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">{`4.0
32.0
25`}</pre>

    <ul className="bullet-points">
      <li>🔹 Static import improves code readability.</li>
      <li>⚠️ Avoid overusing it — may cause naming conflicts if many static imports exist.</li>
    </ul>

    <hr />

    {/* ✅ Summary */}
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
        <tr>
          <td><b>Enum</b></td>
          <td>Used to define constant sets of values</td>
          <td><code>enum Day {`{ MONDAY, TUESDAY }`}</code></td>
        </tr>
        <tr>
          <td><b>Varargs</b></td>
          <td>Pass variable number of arguments</td>
          <td><code>void show(int... nums)</code></td>
        </tr>
        <tr>
          <td><b>Static Import</b></td>
          <td>Use static members without class name</td>
          <td><code>import static java.lang.Math.*;</code></td>
        </tr>
      </tbody>
    </table>

    <p className="highlight">
      💡 These features make your Java code cleaner, smarter, and easier to maintain.  
      <b>Enum</b> gives structure, <b>Varargs</b> adds flexibility, and <b>Static Import</b> adds simplicity!
    </p>

    <p className="highlight">
      🚀 Next Up: <b>🧩 Java Streams & Lambda Expressions</b> — write modern, expressive, and functional-style Java code!
    </p>
  </>
)}
{/* 🧠 Inner Classes */}
{activeSection === "java-inner" && (
  <>
    <h1>🧠 Inner Classes in Java</h1>
    <p className="subtitle">
      An <b>inner class</b> is a class defined inside another class.  
      It helps group classes that logically belong together and can access outer class members easily.
    </p>

    <hr />

    <h2>💡 Why Use Inner Classes?</h2>
    <ul className="bullet-points">
      <li>🔹 To logically group related classes together.</li>
      <li>🔹 To increase encapsulation (hide implementation details).</li>
      <li>🔹 To access private members of the outer class directly.</li>
    </ul>

    <hr />

    <h2>🧩 Types of Inner Classes</h2>
    <ul className="bullet-points">
      <li>1️⃣ <b>Non-static (Member) Inner Class</b></li>
      <li>2️⃣ <b>Static Nested Class</b></li>
      <li>3️⃣ <b>Local Inner Class</b></li>
      <li>4️⃣ <b>Anonymous Inner Class</b></li>
    </ul>

    <hr />

    {/* 1️⃣ Member Inner Class */}
    <h2>1️⃣ Member Inner Class</h2>
    <p>
      A normal inner class defined within another class but <b>outside any method</b>.  
      It can access all members of the outer class — even private ones.
    </p>

    <h3>✅ Example:</h3>
    <pre className="code-block">
{`class Outer {
  private String message = "Hello from Outer class!";

  class Inner {
    void display() {
      System.out.println(message); // Accessing private member
    }
  }
}

public class MemberInnerDemo {
  public static void main(String[] args) {
    Outer outer = new Outer();
    Outer.Inner inner = outer.new Inner();
    inner.display();
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">{`Hello from Outer class!`}</pre>

    <p className="highlight">💡 Inner class object must be created using outer class instance.</p>

    <hr />

    {/* 2️⃣ Static Nested Class */}
    <h2>2️⃣ Static Nested Class</h2>
    <p>
      A <b>static nested class</b> is declared with the <code>static</code> keyword.  
      It <b>cannot access</b> non-static members of the outer class directly.
    </p>

    <h3>✅ Example:</h3>
    <pre className="code-block">
{`class Outer {
  static int x = 10;

  static class Nested {
    void show() {
      System.out.println("Static value: " + x);
    }
  }
}

public class StaticNestedDemo {
  public static void main(String[] args) {
    Outer.Nested obj = new Outer.Nested();
    obj.show();
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">{`Static value: 10`}</pre>

    <p className="highlight">💡 You can create a static nested class object without an outer class instance.</p>

    <hr />

    {/* 3️⃣ Local Inner Class */}
    <h2>3️⃣ Local Inner Class</h2>
    <p>
      A <b>local inner class</b> is defined inside a method or block.  
      It can access the local variables of the method (if they are <code>final</code> or effectively final).
    </p>

    <h3>✅ Example:</h3>
    <pre className="code-block">
{`class Outer {
  void display() {
    final int num = 100;

    class LocalInner {
      void print() {
        System.out.println("Local Inner: " + num);
      }
    }

    LocalInner inner = new LocalInner();
    inner.print();
  }
}

public class LocalInnerDemo {
  public static void main(String[] args) {
    new Outer().display();
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">{`Local Inner: 100`}</pre>

    <p className="highlight">💡 Local inner classes are hidden from the outside world — great for short-lived helper logic.</p>

    <hr />

    {/* 4️⃣ Anonymous Inner Class */}
    <h2>4️⃣ Anonymous Inner Class</h2>
    <p>
      An <b>anonymous inner class</b> has <b>no name</b>.  
      It’s created when you need to override methods of an interface or class — usually for one-time use.
    </p>

    <h3>✅ Example with Interface:</h3>
    <pre className="code-block">
{`interface Greeting {
  void sayHello();
}

public class AnonymousInnerDemo {
  public static void main(String[] args) {
    Greeting g = new Greeting() {
      public void sayHello() {
        System.out.println("Hello from Anonymous Inner Class!");
      }
    };

    g.sayHello();
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">{`Hello from Anonymous Inner Class!`}</pre>

    <p className="highlight">💡 Commonly used in event handling and GUI frameworks (like Swing or Android).</p>

    <hr />

    {/* ✅ Summary */}
    <h2>✅ Summary</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
          <th>Access to Outer Members</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Member Inner Class</b></td>
          <td>Defined inside another class</td>
          <td>✅ Yes</td>
          <td><code>Outer.Inner inner = outer.new Inner();</code></td>
        </tr>
        <tr>
          <td><b>Static Nested Class</b></td>
          <td>Declared static; doesn’t need outer object</td>
          <td>❌ No (only static)</td>
          <td><code>Outer.Nested n = new Outer.Nested();</code></td>
        </tr>
        <tr>
          <td><b>Local Inner Class</b></td>
          <td>Defined inside a method</td>
          <td>✅ Yes (final variables)</td>
          <td><code>Inside method</code></td>
        </tr>
        <tr>
          <td><b>Anonymous Inner Class</b></td>
          <td>No name; used for one-time override</td>
          <td>✅ Yes</td>
          <td><code>new Interface() {`{ ... }`}</code></td>
        </tr>
      </tbody>
    </table>

    <p className="highlight">
      🧠 Inner classes make Java code modular, secure, and better organized — especially useful in frameworks like Swing, AWT, and Android.
    </p>

    <p className="highlight">
      🚀 Next Up: <b>🧩 Java Streams & Lambda Expressions</b> — modern features that simplify iteration and data processing!
    </p>
  </>
)}
{/* 🧱 Java 8 Features (Modern Java) */}
{activeSection === "java-8-features" && (
  <>
    <h1>🧱 Java 8 Features (Modern Java)</h1>
    <p className="subtitle">
      Java 8 introduced a major revolution in Java programming — adding <b>functional programming</b>, <b>Streams</b>, <b>Lambda Expressions</b>, and more.
      These features make Java more powerful, concise, and expressive. ⚡
    </p>

    <hr />

    <h2>🌟 Major Java 8 Features</h2>
    <ul className="bullet-points">
      <li>1️⃣ <b>Lambda Expressions</b></li>
      <li>2️⃣ <b>Functional Interfaces</b></li>
      <li>3️⃣ <b>Streams API</b></li>
      <li>4️⃣ <b>Default & Static Methods in Interfaces</b></li>
      <li>5️⃣ <b>Optional Class</b></li>
      <li>6️⃣ <b>Date and Time API (java.time)</b></li>
      <li>7️⃣ <b>Method References</b></li>
    </ul>

    <hr />

    {/* 1️⃣ Lambda Expressions */}
    <h2>1️⃣ Lambda Expressions</h2>
    <p>
      A <b>Lambda Expression</b> is a short way to write anonymous functions.  
      It’s mainly used to simplify code when using functional interfaces.
    </p>

    <h3>✅ Syntax:</h3>
    <pre className="code-block">{`(parameters) -> expression`}</pre>

    <h3>✅ Example:</h3>
    <pre className="code-block">
{`// Before Java 8
new Thread(new Runnable() {
  public void run() {
    System.out.println("Hello from Thread!");
  }
}).start();

// With Lambda
new Thread(() -> System.out.println("Hello from Lambda Thread!")).start();`}
    </pre>

    <p>💡 Lambdas make your code concise and readable — perfect for event handling, sorting, and filtering data.</p>

    <hr />

    {/* 2️⃣ Functional Interfaces */}
    <h2>2️⃣ Functional Interfaces</h2>
    <p>
      A <b>Functional Interface</b> is an interface with only one abstract method.  
      It’s the base for Lambda Expressions.
    </p>

    <h3>✅ Example:</h3>
    <pre className="code-block">
{`@FunctionalInterface
interface Greeting {
  void sayHello(String name);
}

public class LambdaDemo {
  public static void main(String[] args) {
    Greeting g = (name) -> System.out.println("Hello, " + name);
    g.sayHello("Sofia");
  }
}`}
    </pre>

    <p>💡 Java provides built-in functional interfaces in the <code>java.util.function</code> package like:</p>
    <ul className="bullet-points">
      <li><code>Predicate&lt;T&gt;</code> → returns boolean</li>
      <li><code>Function&lt;T,R&gt;</code> → transforms input</li>
      <li><code>Consumer&lt;T&gt;</code> → performs an action</li>
      <li><code>Supplier&lt;T&gt;</code> → provides values</li>
    </ul>

    <hr />

    {/* 3️⃣ Streams API */}
    <h2>3️⃣ Streams API</h2>
    <p>
      The <b>Streams API</b> is used to process collections of data in a functional style —  
      making code more concise and expressive.
    </p>

    <h3>✅ Example:</h3>
    <pre className="code-block">
{`import java.util.*;
import java.util.stream.*;

public class StreamDemo {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

    // Filter even numbers and double them
    List<Integer> result = numbers.stream()
      .filter(n -> n % 2 == 0)
      .map(n -> n * 2)
      .collect(Collectors.toList());

    System.out.println(result);
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">{`[4, 8, 12]`}</pre>

    <p className="highlight">
      💡 Streams make it easy to perform operations like filtering, mapping, reducing, and sorting.
    </p>

    <hr />

    {/* 4️⃣ Default & Static Methods */}
    <h2>4️⃣ Default & Static Methods in Interfaces</h2>
    <p>
      Java 8 allows <b>default</b> and <b>static</b> methods in interfaces — enabling backward compatibility.
    </p>

    <h3>✅ Example:</h3>
    <pre className="code-block">
{`interface Vehicle {
  default void start() {
    System.out.println("Vehicle started!");
  }

  static void service() {
    System.out.println("Vehicle serviced!");
  }
}

public class Car implements Vehicle {
  public static void main(String[] args) {
    Car c = new Car();
    c.start();          // Default method
    Vehicle.service();  // Static method
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">{`Vehicle started!
Vehicle serviced!`}</pre>

    <hr />

    {/* 5️⃣ Optional Class */}
    <h2>5️⃣ Optional Class</h2>
    <p>
      The <b>Optional</b> class helps avoid <code>NullPointerException</code> by handling nullable values safely.
    </p>

    <h3>✅ Example:</h3>
    <pre className="code-block">
{`import java.util.Optional;

public class OptionalDemo {
  public static void main(String[] args) {
    Optional<String> name = Optional.ofNullable("Sofia");

    name.ifPresent(n -> System.out.println("Hello, " + n));
  }
}`}
    </pre>

    <p className="highlight">💡 Use Optional instead of null checks — it promotes cleaner, safer code.</p>

    <hr />

    {/* 6️⃣ Date and Time API */}
    <h2>6️⃣ Date and Time API (java.time)</h2>
    <p>
      Java 8 introduced a modern date and time API that replaces <code>java.util.Date</code>.
    </p>

    <h3>✅ Example:</h3>
    <pre className="code-block">
{`import java.time.*;

public class DateDemo {
  public static void main(String[] args) {
    LocalDate today = LocalDate.now();
    LocalTime time = LocalTime.now();
    LocalDateTime dateTime = LocalDateTime.now();

    System.out.println("Date: " + today);
    System.out.println("Time: " + time);
    System.out.println("DateTime: " + dateTime);
  }
}`}
    </pre>

    <hr />

    {/* 7️⃣ Method References */}
    <h2>7️⃣ Method References</h2>
    <p>
      Method references provide a shorthand for calling existing methods with <code>::</code>.
    </p>

    <h3>✅ Example:</h3>
    <pre className="code-block">
{`import java.util.*;

public class MethodRefDemo {
  public static void main(String[] args) {
    List<String> names = Arrays.asList("Sofia", "Alex", "John");
    names.forEach(System.out::println); // Method reference
  }
}`}
    </pre>

    <hr />

    {/* ✅ Summary */}
    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>⚡ <b>Lambdas</b> simplify anonymous function creation.</li>
      <li>🧠 <b>Functional Interfaces</b> are the foundation of functional programming.</li>
      <li>🌊 <b>Streams</b> make data processing declarative.</li>
      <li>🔗 <b>Optional</b> prevents null pointer errors.</li>
      <li>📅 <b>java.time</b> gives a modern date/time API.</li>
      <li>🧩 <b>Default & Static</b> methods improve interface flexibility.</li>
    </ul>

    <p className="highlight">
      🚀 Java 8 transformed Java into a modern, functional, and more powerful language — setting the stage for Java 9, 11, and beyond.
    </p>

    <p className="highlight">
      🔜 Next Up: <b>Streams & Lambda Expressions Deep Dive</b> — learn how to combine these features to write clean, efficient code!
    </p>
  </>
)}
{/* 🧰 JDBC (Java Database Connectivity) */}
{activeSection === "java-jdbc" && (
  <>
    <h1>🧰 JDBC (Java Database Connectivity)</h1>
    <p className="subtitle">
      JDBC (Java Database Connectivity) is an API in Java that allows applications to interact with databases.  
      It helps you <b>connect</b>, <b>execute queries</b>, and <b>retrieve data</b> from a database. 💾
    </p>

    <hr />

    <h2>🔗 What is JDBC?</h2>
    <p>
      JDBC is a set of Java classes and interfaces that allow Java applications to communicate with databases.  
      It acts as a **bridge between Java code and database systems** like MySQL, Oracle, or PostgreSQL.
    </p>

    <h3>⚙️ Common JDBC Tasks:</h3>
    <ul className="bullet-points">
      <li>Connect to a database</li>
      <li>Execute SQL queries (SELECT, INSERT, UPDATE, DELETE)</li>
      <li>Retrieve and process results</li>
      <li>Handle exceptions and close connections</li>
    </ul>

    <hr />

    <h2>🧩 JDBC Architecture</h2>
    <p>
      JDBC follows a layered architecture consisting of key components:
    </p>

    <ul className="bullet-points">
      <li>1️⃣ <b>DriverManager</b> – Manages a list of database drivers.</li>
      <li>2️⃣ <b>Connection</b> – Represents a connection session with the database.</li>
      <li>3️⃣ <b>Statement / PreparedStatement</b> – Executes SQL queries.</li>
      <li>4️⃣ <b>ResultSet</b> – Holds the results retrieved from the database.</li>
    </ul>

    <p className="highlight">
      💡 Think of JDBC like a phone call — your Java code “calls” the database, sends queries, and gets responses back.
    </p>

    <hr />

    <h2>⚙️ Steps to Use JDBC</h2>
    <p>Here are the 5 main steps to connect and interact with a database:</p>

    <table className="summary-table">
      <thead>
        <tr>
          <th>Step</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1️⃣</td><td>Import JDBC packages</td></tr>
        <tr><td>2️⃣</td><td>Load the JDBC Driver</td></tr>
        <tr><td>3️⃣</td><td>Establish a Connection</td></tr>
        <tr><td>4️⃣</td><td>Create and Execute SQL Statements</td></tr>
        <tr><td>5️⃣</td><td>Close the Connection</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>🧱 Example: Connecting Java with MySQL Database</h2>
    <p>Let's connect Java to a MySQL database and fetch data.</p>

    <pre className="code-block">
{`import java.sql.*;

public class JDBCExample {
  public static void main(String[] args) {
    String url = "jdbc:mysql://localhost:3306/school";
    String user = "root";
    String password = "yourpassword";

    try {
      // 1️⃣ Load the MySQL JDBC Driver
      Class.forName("com.mysql.cj.jdbc.Driver");

      // 2️⃣ Establish Connection
      Connection con = DriverManager.getConnection(url, user, password);
      System.out.println("✅ Connected to the Database!");

      // 3️⃣ Create Statement
      Statement stmt = con.createStatement();

      // 4️⃣ Execute Query
      ResultSet rs = stmt.executeQuery("SELECT * FROM students");

      // 5️⃣ Process Results
      while (rs.next()) {
        System.out.println(rs.getInt("id") + " - " + rs.getString("name"));
      }

      // 6️⃣ Close Connection
      con.close();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">
{`1 - Sofia
2 - John
3 - Alex`}
    </pre>

    <p className="highlight">
      💡 Make sure you have MySQL running and the <code>mysql-connector-j.jar</code> file added to your classpath.
    </p>

    <hr />

    <h2>🧩 Using PreparedStatement (to Prevent SQL Injection)</h2>
    <p>
      <b>PreparedStatement</b> is a safer, faster, and cleaner way to execute SQL queries, especially when working with user inputs.
    </p>

    <pre className="code-block">
{`import java.sql.*;

public class InsertStudent {
  public static void main(String[] args) {
    String url = "jdbc:mysql://localhost:3306/school";
    String user = "root";
    String password = "yourpassword";

    try (Connection con = DriverManager.getConnection(url, user, password)) {
      String query = "INSERT INTO students (name, age) VALUES (?, ?)";
      PreparedStatement pstmt = con.prepareStatement(query);

      pstmt.setString(1, "Ava");
      pstmt.setInt(2, 21);

      int rows = pstmt.executeUpdate();
      System.out.println(rows + " record inserted successfully!");
    } catch (SQLException e) {
      e.printStackTrace();
    }
  }
}`}
    </pre>

    <p>✅ Output:</p>
    <pre className="code-block">{`1 record inserted successfully!`}</pre>

    <p className="highlight">
      ⚡ <b>PreparedStatement</b> prevents SQL injection and improves performance for repeated queries.
    </p>

    <hr />

    <h2>📊 ResultSet — Reading Data</h2>
    <p>
      <code>ResultSet</code> is used to read data returned from a SELECT query.
    </p>

    <pre className="code-block">
{`ResultSet rs = stmt.executeQuery("SELECT * FROM students");

while (rs.next()) {
  int id = rs.getInt("id");
  String name = rs.getString("name");
  int age = rs.getInt("age");
  System.out.println(id + " | " + name + " | " + age);
}`}
    </pre>

    <hr />

    <h2>🧠 Closing Resources</h2>
    <p>Always close JDBC resources after use to avoid memory leaks:</p>
    <pre className="code-block">
{`rs.close();
stmt.close();
con.close();`}
    </pre>

    <hr />

    <h2>🧩 Common JDBC Classes & Interfaces</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>DriverManager</td><td>Manages database drivers and connections.</td></tr>
        <tr><td>Connection</td><td>Represents a session with the database.</td></tr>
        <tr><td>Statement</td><td>Executes simple SQL queries.</td></tr>
        <tr><td>PreparedStatement</td><td>Executes parameterized queries safely.</td></tr>
        <tr><td>ResultSet</td><td>Stores query results for reading.</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>🔗 JDBC connects Java to databases.</li>
      <li>⚙️ Use <code>DriverManager</code> to establish connections.</li>
      <li>💾 <code>Statement</code> or <code>PreparedStatement</code> runs SQL queries.</li>
      <li>📊 <code>ResultSet</code> retrieves query results.</li>
      <li>✅ Always close your connections!</li>
    </ul>

    <p className="highlight">
      🎯 JDBC is the foundation of all database-driven Java applications — from small apps to enterprise systems using frameworks like Hibernate or Spring Boot.
    </p>

    <p className="highlight">
      🔜 Next Up: <b>Hibernate ORM (Object Relational Mapping)</b> — learn how to map Java classes to database tables easily!
    </p>
  </>
)}
{/* 🧠 Memory Management & Garbage Collection */}
{activeSection === "java-memory" && (
  <>
    <h1>🧠 Memory Management & Garbage Collection</h1>
    <p className="subtitle">
      Java automatically manages memory using the <b>JVM (Java Virtual Machine)</b>.  
      It allocates memory to objects and reclaims unused memory through the process of <b>Garbage Collection (GC)</b>. ♻️
    </p>

    <hr />

    <h2>⚙️ What is Memory Management?</h2>
    <p>
      Memory management in Java means controlling how the program allocates, uses, and frees up memory.  
      The JVM handles this automatically, so developers don’t have to manually free memory (unlike in C/C++).
    </p>

    <p className="highlight">
      💡 Think of the JVM as a “smart housekeeper” — it gives memory to new objects and cleans up unused ones.
    </p>

    <hr />

    <h2>📦 Memory Areas in JVM</h2>
    <p>Java divides memory into several areas to efficiently manage objects and methods:</p>

    <table className="summary-table">
      <thead>
        <tr>
          <th>Memory Area</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>1️⃣ Method Area (MetaSpace)</b></td>
          <td>Stores class structure, method code, static variables, and metadata.</td>
        </tr>
        <tr>
          <td><b>2️⃣ Heap Area</b></td>
          <td>Stores all <b>objects</b> and <b>arrays</b>. This is where garbage collection happens.</td>
        </tr>
        <tr>
          <td><b>3️⃣ Stack Area</b></td>
          <td>Stores method calls, local variables, and references. Each thread has its own stack.</td>
        </tr>
        <tr>
          <td><b>4️⃣ PC Register</b></td>
          <td>Holds the address of the currently executing JVM instruction.</td>
        </tr>
        <tr>
          <td><b>5️⃣ Native Method Stack</b></td>
          <td>Stores native (non-Java) method information, often written in C/C++.</td>
        </tr>
      </tbody>
    </table>

    <p className="highlight">
      🧩 <b>Heap</b> and <b>Stack</b> are the most important areas to understand for developers.
    </p>

    <hr />

    <h2>📊 Heap Memory Structure</h2>
    <p>The heap is divided into three regions to make garbage collection efficient:</p>

    <ul className="bullet-points">
      <li><b>Young Generation</b> – New objects are created here. If they survive multiple GC cycles, they move to the old generation.</li>
      <li><b>Old Generation (Tenured)</b> – Holds long-lived objects.</li>
      <li><b>Permanent Generation / Metaspace</b> – Stores class metadata (method definitions, static variables).</li>
    </ul>

    <p className="highlight">
      💡 Most garbage collections occur in the <b>Young Generation</b>, because temporary objects die quickly.
    </p>

    <hr />

    <h2>♻️ What is Garbage Collection?</h2>
    <p>
      Garbage Collection (GC) is an automatic process that removes objects from memory when they are no longer reachable or needed.  
      It helps prevent <b>memory leaks</b> and ensures efficient memory usage.
    </p>

    <h3>🚨 When is an Object Eligible for Garbage Collection?</h3>
    <p>An object becomes eligible when there are <b>no more references</b> pointing to it.</p>

    <pre className="code-block">
{`class Demo {
  public static void main(String[] args) {
    String s1 = new String("Hello");
    s1 = null; // 'Hello' object is now eligible for GC
  }
}`}
    </pre>

    <p className="highlight">
      🧩 Once <code>s1</code> is set to <code>null</code>, no reference exists to the string object — so GC can reclaim it.
    </p>

    <hr />

    <h2>⚙️ How Garbage Collection Works</h2>
    <ol className="numbered-list">
      <li>The JVM periodically checks for unreachable objects.</li>
      <li>It marks them for deletion.</li>
      <li>The memory occupied by these objects is reclaimed and reused.</li>
    </ol>

    <p>
      You can **request** garbage collection manually using:
    </p>

    <pre className="code-block">
{`System.gc(); // Requests JVM to run garbage collection
Runtime.getRuntime().gc();`}
    </pre>

    <p className="highlight">
      ⚠️ <b>Note:</b> This only suggests the JVM to run GC — it doesn’t guarantee immediate collection.
    </p>

    <hr />

    <h2>🧠 finalize() Method (Deprecated)</h2>
    <p>
      Before Java 9, you could override the <code>finalize()</code> method to perform cleanup before an object is destroyed.
      However, this approach is now deprecated due to unpredictability.
    </p>

    <pre className="code-block">
{`protected void finalize() {
  System.out.println("Object is being garbage collected");
}`}
    </pre>

    <p className="highlight">
      ⚠️ Modern Java applications use <b>try-with-resources</b> or <b>finally blocks</b> instead of finalize().
    </p>

    <hr />

    <h2>🧩 Example of Garbage Collection</h2>
    <pre className="code-block">
{`class Student {
  int id;
  Student(int id) { this.id = id; }
  protected void finalize() { 
    System.out.println("GC removed object with id: " + id);
  }

  public static void main(String[] args) {
    Student s1 = new Student(101);
    Student s2 = new Student(102);

    s1 = null;
    s2 = null;

    System.gc();
  }
}`}
    </pre>

    <p>✅ Output (may vary):</p>
    <pre className="code-block">
{`GC removed object with id: 101
GC removed object with id: 102`}
    </pre>

    <hr />

    <h2>📊 Types of Garbage Collectors in JVM</h2>
    <p>JVM provides different GC algorithms optimized for different purposes:</p>

    <ul className="bullet-points">
      <li>🧩 <b>Serial GC</b> – Simple and single-threaded; good for small applications.</li>
      <li>⚙️ <b>Parallel GC</b> – Uses multiple threads for faster collection.</li>
      <li>🌿 <b>CMS (Concurrent Mark Sweep)</b> – Reduces pause time; partially concurrent.</li>
      <li>🚀 <b>G1 (Garbage First) GC</b> – Default in modern JVMs; balances speed and efficiency.</li>
    </ul>

    <p className="highlight">
      💡 You can choose a GC algorithm with JVM flags, for example:<br/>
      <code>-XX:+UseG1GC</code>
    </p>

    <hr />

    <h2>✅ Best Practices for Efficient Memory Management</h2>
    <ul className="bullet-points">
      <li>♻️ Release references to unused objects (set to <code>null</code>).</li>
      <li>🧱 Use <b>local variables</b> instead of global ones when possible.</li>
      <li>🧠 Avoid creating unnecessary objects inside loops.</li>
      <li>🔄 Use <b>StringBuilder</b> instead of concatenating strings repeatedly.</li>
      <li>💾 Close resources (like files or DB connections) in <b>finally</b> or <b>try-with-resources</b>.</li>
    </ul>

    <hr />

    <h2>🧩 Summary</h2>
    <ul className="bullet-points">
      <li>🧠 JVM manages memory automatically through Garbage Collection.</li>
      <li>📦 Memory areas include Stack, Heap, and Method Area.</li>
      <li>♻️ Objects with no references are collected automatically.</li>
      <li>⚙️ You can suggest GC using <code>System.gc()</code>.</li>
      <li>🚀 G1GC is the default collector in modern Java versions.</li>
    </ul>

    <p className="highlight">
      🎯 Memory management is one of Java’s biggest strengths — it prevents memory leaks and keeps apps stable without manual cleanup.
    </p>

    <p className="highlight">
      🔜 Next Up: <b>JDBC (Java Database Connectivity)</b> — learn how Java connects to databases seamlessly!
    </p>
  </>
)}
{/* 🚀 Mini Projects / Practice */}
{activeSection === "java-mini-projects" && (
  <>
    <h1>🚀 Mini Projects / Practice</h1>
    <p className="subtitle">
      Now it’s time to turn your Java knowledge into real-world experience! 💪  
      These <b>mini projects</b> will help you apply key concepts like OOP, File I/O, Collections, Exception Handling, and JDBC in practical ways.
    </p>

    <hr />

    <h2>🧱 1. Simple Calculator</h2>
    <p>
      Build a console-based calculator that performs basic arithmetic operations — addition, subtraction, multiplication, and division.
    </p>
    <pre className="code-block">
{`import java.util.Scanner;

public class Calculator {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("Enter first number: ");
    double num1 = sc.nextDouble();

    System.out.print("Enter operator (+, -, *, /): ");
    char op = sc.next().charAt(0);

    System.out.print("Enter second number: ");
    double num2 = sc.nextDouble();

    double result = 0;

    switch (op) {
      case '+': result = num1 + num2; break;
      case '-': result = num1 - num2; break;
      case '*': result = num1 * num2; break;
      case '/': result = num2 != 0 ? num1 / num2 : Double.NaN; break;
      default: System.out.println("Invalid operator");
    }

    System.out.println("Result: " + result);
    sc.close();
  }
}`}
    </pre>
    <p>✅ Concepts Used: Control statements, Switch, Scanner, Operators</p>

    <hr />

    <h2>📅 2. Student Management System</h2>
    <p>
      Create a system to manage student data — add, view, search, and delete students.
    </p>
    <ul className="bullet-points">
      <li>Use <b>ArrayList</b> or <b>HashMap</b> to store student data.</li>
      <li>Practice OOP by creating a <code>Student</code> class.</li>
      <li>Optional: Save data to a text file using <b>File I/O</b>.</li>
    </ul>
    <p>✅ Concepts Used: Classes, Collections, File Handling, OOP</p>

    <hr />

    <h2>💰 3. Bank Account System</h2>
    <p>
      Simulate simple bank operations like deposit, withdraw, and check balance.
    </p>
    <pre className="code-block">
{`class BankAccount {
  private double balance;

  public BankAccount(double balance) {
    this.balance = balance;
  }

  void deposit(double amount) {
    balance += amount;
    System.out.println("Deposited: " + amount);
  }

  void withdraw(double amount) {
    if (amount <= balance) {
      balance -= amount;
      System.out.println("Withdrawn: " + amount);
    } else {
      System.out.println("Insufficient balance!");
    }
  }

  void display() {
    System.out.println("Current Balance: " + balance);
  }

  public static void main(String[] args) {
    BankAccount acc = new BankAccount(1000);
    acc.deposit(500);
    acc.withdraw(300);
    acc.display();
  }
}`}
    </pre>
    <p>✅ Concepts Used: Classes, Encapsulation, Methods</p>

    <hr />

    <h2>📄 4. File Reader / Writer App</h2>
    <p>
      Create a small application that reads from and writes to a text file.
    </p>
    <pre className="code-block">
{`import java.io.*;

public class FileDemo {
  public static void main(String[] args) {
    try {
      FileWriter fw = new FileWriter("notes.txt");
      fw.write("Learning Java is fun!");
      fw.close();
      System.out.println("File written successfully.");

      FileReader fr = new FileReader("notes.txt");
      int i;
      while ((i = fr.read()) != -1) {
        System.out.print((char) i);
      }
      fr.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}`}
    </pre>
    <p>✅ Concepts Used: File Handling, Exception Handling</p>

    <hr />

    <h2>🎲 5. Number Guessing Game</h2>
    <p>
      A fun little game where the computer picks a random number and the player has to guess it!
    </p>
    <pre className="code-block">
{`import java.util.*;

public class GuessGame {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int target = new Random().nextInt(100) + 1;
    int guess = 0, attempts = 0;

    System.out.println("Guess a number between 1 and 100!");

    while (guess != target) {
      System.out.print("Enter guess: ");
      guess = sc.nextInt();
      attempts++;

      if (guess > target) System.out.println("Too high!");
      else if (guess < target) System.out.println("Too low!");
      else System.out.println("🎉 Correct! You guessed it in " + attempts + " tries.");
    }
    sc.close();
  }
}`}
    </pre>
    <p>✅ Concepts Used: Loops, Conditionals, Random class</p>

    <hr />

    <h2>💡 6. Library Management System (Intermediate)</h2>
    <p>
      Manage books — add, remove, search, and view details.  
      Store data using <b>ArrayList</b> or <b>HashMap</b>.
    </p>
    <ul className="bullet-points">
      <li>Create classes for <code>Book</code> and <code>Library</code>.</li>
      <li>Allow users to interact through console inputs.</li>
      <li>Save or load books to a file (optional).</li>
    </ul>
    <p>✅ Concepts Used: OOP, Collections, File Handling</p>

    <hr />

    <h2>🧠 7. Quiz Application</h2>
    <p>
      Build a console-based quiz that asks multiple-choice questions and displays a score at the end.
    </p>
    <ul className="bullet-points">
      <li>Store questions in an <b>ArrayList</b> or <b>HashMap</b>.</li>
      <li>Use loops and conditionals to manage quiz flow.</li>
    </ul>
    <p>✅ Concepts Used: Loops, Collections, Conditionals</p>

    <hr />

    <h2>🧰 8. Employee Management System (Advanced)</h2>
    <p>
      Connect your app to a database (like MySQL) using <b>JDBC</b>.  
      Perform CRUD operations — Create, Read, Update, Delete employees.
    </p>
    <ul className="bullet-points">
      <li>Database table: <code>employee(id, name, salary, dept)</code></li>
      <li>Use JDBC statements for data handling.</li>
      <li>Implement exception handling for SQL errors.</li>
    </ul>
    <p>✅ Concepts Used: JDBC, Exception Handling, OOP</p>

    <hr />

    <h2>🧩 9. Chat Simulation (Multithreading)</h2>
    <p>
      Create a console-based chat simulator using threads to mimic two users chatting at the same time.
    </p>
    <p>✅ Concepts Used: Threads, Synchronization</p>

    <hr />

    <h2>🏁 10. Final Challenge: Mini E-Commerce Console App</h2>
    <p>
      Combine everything you’ve learned into one big project:
    </p>
    <ul className="bullet-points">
      <li>📦 Product listing & inventory (using Collections)</li>
      <li>🛒 Cart management</li>
      <li>💾 Data persistence using File I/O or JDBC</li>
      <li>💳 Simple checkout system</li>
    </ul>
    <p>✅ Concepts Used: OOP, Collections, File Handling, JDBC</p>

    <hr />

    <h2>🎯 Summary</h2>
    <ul className="bullet-points">
      <li>🚀 Hands-on practice helps you master Java faster.</li>
      <li>🧱 Start small (like Calculator or Guess Game).</li>
      <li>📊 Move to intermediate projects with OOP and File Handling.</li>
      <li>⚙️ Finish with JDBC or Thread-based projects for real-world skills.</li>
    </ul>

    <p className="highlight">
      💪 The more you practice building, the more confident you’ll become!  
      Keep experimenting, refactoring, and having fun with Java! ☕
    </p>
  </>
)}

        
      </main>
    </div>
  );
};

export default JavaCourse;
