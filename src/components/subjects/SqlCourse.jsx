import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "../Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './SqlCourse.css';
import { Helmet } from 'react-helmet-async';
const SqlCourse = () => {
  const [activeSection, setActiveSection] = useState('sql-introduction');
  const navigate = useNavigate();

  return (
    <div className="sql-course-container d-flex">
      {/* ======= Sidebar (Desktop) ======= */}
      <aside className="sidebar d-none d-md-block p-3">
        <h4 className="sidebar-title">SQL Tutorial</h4>
        <ul className="list-unstyled mt-3">
          <li onClick={() => navigate('/')}>🏠 Home</li>

          <li className={activeSection === 'sql-introduction' ? 'active' : ''} onClick={() => setActiveSection('sql-introduction')}>🧩 Introduction to Databases & SQL</li>
          <li className={activeSection === 'database-basics' ? 'active' : ''} onClick={() => setActiveSection('database-basics')}>🧱 Database Basics</li>
          <li className={activeSection === 'sql-command-types' ? 'active' : ''} onClick={() => setActiveSection('sql-command-types')}>🧮 Types of SQL Commands (DDL, DML, DCL, TCL, DQL)</li>
          <li className={activeSection === 'sql-data-types' ? 'active' : ''} onClick={() => setActiveSection('sql-data-types')}>⚙️ SQL Data Types</li>
          <li className={activeSection === 'sql-crud-operations' ? 'active' : ''} onClick={() => setActiveSection('sql-crud-operations')}>🧭 Basic SQL Commands (CRUD Operations)</li>
          <li className={activeSection === 'sql-constraints' ? 'active' : ''} onClick={() => setActiveSection('sql-constraints')}>🧩 SQL Constraints</li>
          <li className={activeSection === 'sql-operators' ? 'active' : ''} onClick={() => setActiveSection('sql-operators')}>🧮 SQL Operators</li>
          <li className={activeSection === 'sql-clauses' ? 'active' : ''} onClick={() => setActiveSection('sql-clauses')}>⚙️ SQL Clauses</li>
          <li className={activeSection === 'sql-functions' ? 'active' : ''} onClick={() => setActiveSection('sql-functions')}>🧮 SQL Functions</li>
          <li className={activeSection === 'sql-joins' ? 'active' : ''} onClick={() => setActiveSection('sql-joins')}>🧩 SQL Joins</li>
          <li className={activeSection === 'sql-subqueries' ? 'active' : ''} onClick={() => setActiveSection('sql-subqueries')}>🧭 SQL Subqueries</li>
          <li className={activeSection === 'sql-views' ? 'active' : ''} onClick={() => setActiveSection('sql-views')}>⚡ SQL Views</li>
          <li className={activeSection === 'sql-indexes' ? 'active' : ''} onClick={() => setActiveSection('sql-indexes')}>🧱 SQL Indexes</li>
          <li className={activeSection === 'sql-keys' ? 'active' : ''} onClick={() => setActiveSection('sql-keys')}>🧠 SQL Keys</li>
          <li className={activeSection === 'sql-normalization' ? 'active' : ''} onClick={() => setActiveSection('sql-normalization')}>🧮 SQL Normalization</li>
          <li className={activeSection === 'sql-where-clause' ? 'active' : ''} onClick={() => setActiveSection('sql-where-clause')}>🧩 Filtering Data (WHERE Clause)</li>
          <li className={activeSection === 'sql-sorting' ? 'active' : ''} onClick={() => setActiveSection('sql-sorting')}>🧱 Sorting Data</li>
          <li className={activeSection === 'sql-grouping' ? 'active' : ''} onClick={() => setActiveSection('sql-grouping')}>🧭 Grouping Data</li>
          <li className={activeSection === 'sql-filtering-groups' ? 'active' : ''} onClick={() => setActiveSection('sql-filtering-groups')}>🧮 Filtering Groups</li>
          <li className={activeSection === 'sql-aliases' ? 'active' : ''} onClick={() => setActiveSection('sql-aliases')}>🧱 SQL Aliases</li>
          <li className={activeSection === 'sql-set-operations' ? 'active' : ''} onClick={() => setActiveSection('sql-set-operations')}>⚙️ Set Operations</li>
          <li className={activeSection === 'sql-transactions' ? 'active' : ''} onClick={() => setActiveSection('sql-transactions')}>🧩 Transactions</li>
          <li className={activeSection === 'sql-security' ? 'active' : ''} onClick={() => setActiveSection('sql-security')}>🧰 Security and Permissions</li>
          <li className={activeSection === 'database-design' ? 'active' : ''} onClick={() => setActiveSection('database-design')}>🧠 Database Design Concepts</li>
          <li className={activeSection === 'sql-mini-projects' ? 'active' : ''} onClick={() => setActiveSection('sql-mini-projects')}>🚀 Mini Projects (Hands-on Practice)</li>
        </ul>
      </aside>
{/* ======= Sidebar Toggle (Mobile only, beside content) ======= */}
      <button
        className="btn btn-dark d-md-none position-fixed toggle-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sqlSidebar"
        aria-controls="sqlSidebar"
      >
        <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
      </button>

      {/* ======= Offcanvas Sidebar (Mobile) ======= */}
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex="-1"
        id="sqlSidebar"
        aria-labelledby="sqlSidebarLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="sqlSidebarLabel">
            SQL Tutorial
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

          <li className={activeSection === 'sql-introduction' ? 'active' : ''} onClick={() => setActiveSection('sql-introduction')}>🧩 Introduction to Databases & SQL</li>
          <li className={activeSection === 'database-basics' ? 'active' : ''} onClick={() => setActiveSection('database-basics')}>🧱 Database Basics</li>
          <li className={activeSection === 'sql-command-types' ? 'active' : ''} onClick={() => setActiveSection('sql-command-types')}>🧮 Types of SQL Commands (DDL, DML, DCL, TCL, DQL)</li>
          <li className={activeSection === 'sql-data-types' ? 'active' : ''} onClick={() => setActiveSection('sql-data-types')}>⚙️ SQL Data Types</li>
          <li className={activeSection === 'sql-crud-operations' ? 'active' : ''} onClick={() => setActiveSection('sql-crud-operations')}>🧭 Basic SQL Commands (CRUD Operations)</li>
          <li className={activeSection === 'sql-constraints' ? 'active' : ''} onClick={() => setActiveSection('sql-constraints')}>🧩 SQL Constraints</li>
          <li className={activeSection === 'sql-operators' ? 'active' : ''} onClick={() => setActiveSection('sql-operators')}>🧮 SQL Operators</li>
          <li className={activeSection === 'sql-clauses' ? 'active' : ''} onClick={() => setActiveSection('sql-clauses')}>⚙️ SQL Clauses</li>
          <li className={activeSection === 'sql-functions' ? 'active' : ''} onClick={() => setActiveSection('sql-functions')}>🧮 SQL Functions</li>
          <li className={activeSection === 'sql-joins' ? 'active' : ''} onClick={() => setActiveSection('sql-joins')}>🧩 SQL Joins</li>
          <li className={activeSection === 'sql-subqueries' ? 'active' : ''} onClick={() => setActiveSection('sql-subqueries')}>🧭 SQL Subqueries</li>
          <li className={activeSection === 'sql-views' ? 'active' : ''} onClick={() => setActiveSection('sql-views')}>⚡ SQL Views</li>
          <li className={activeSection === 'sql-indexes' ? 'active' : ''} onClick={() => setActiveSection('sql-indexes')}>🧱 SQL Indexes</li>
          <li className={activeSection === 'sql-keys' ? 'active' : ''} onClick={() => setActiveSection('sql-keys')}>🧠 SQL Keys</li>
          <li className={activeSection === 'sql-normalization' ? 'active' : ''} onClick={() => setActiveSection('sql-normalization')}>🧮 SQL Normalization</li>
          <li className={activeSection === 'sql-where-clause' ? 'active' : ''} onClick={() => setActiveSection('sql-where-clause')}>🧩 Filtering Data (WHERE Clause)</li>
          <li className={activeSection === 'sql-sorting' ? 'active' : ''} onClick={() => setActiveSection('sql-sorting')}>🧱 Sorting Data</li>
          <li className={activeSection === 'sql-grouping' ? 'active' : ''} onClick={() => setActiveSection('sql-grouping')}>🧭 Grouping Data</li>
          <li className={activeSection === 'sql-filtering-groups' ? 'active' : ''} onClick={() => setActiveSection('sql-filtering-groups')}>🧮 Filtering Groups</li>
          <li className={activeSection === 'sql-aliases' ? 'active' : ''} onClick={() => setActiveSection('sql-aliases')}>🧱 SQL Aliases</li>
          <li className={activeSection === 'sql-set-operations' ? 'active' : ''} onClick={() => setActiveSection('sql-set-operations')}>⚙️ Set Operations</li>
          <li className={activeSection === 'sql-transactions' ? 'active' : ''} onClick={() => setActiveSection('sql-transactions')}>🧩 Transactions</li>
          <li className={activeSection === 'sql-security' ? 'active' : ''} onClick={() => setActiveSection('sql-security')}>🧰 Security and Permissions</li>
          <li className={activeSection === 'database-design' ? 'active' : ''} onClick={() => setActiveSection('database-design')}>🧠 Database Design Concepts</li>
          <li className={activeSection === 'sql-mini-projects' ? 'active' : ''} onClick={() => setActiveSection('sql-mini-projects')}>🚀 Mini Projects (Hands-on Practice)</li>
        </ul>
        </div>
        </div>
      {/* Main Content */}
      <main className="course-content flex-grow-1 p-4">
        {/* 🧩 Introduction to Databases & SQL */}
{activeSection === 'sql-introduction' && (
  <>
    <h1>🧩 Introduction to Databases & SQL</h1>
    <p className="subtitle">
      Learn what databases are, why they’re important, and how SQL helps manage them efficiently.
    </p>

    <h2>📘 What is a Database?</h2>
    <p>
      A <b>database</b> is an organized collection of data that can be easily accessed, managed, and updated.
    </p>
    <p className="subtitle">
      Think of a database like a digital filing cabinet that stores information such as:
    </p>
    <ul className="bullet-points">
      <li>Student details in a school</li>
      <li>Customer records in a company</li>
      <li>Products in an online store</li>
    </ul>

    <h2>🗂️ Why Do We Need Databases?</h2>
    <p>Without a database:</p>
    <ul className="bullet-points">
      <li>Data would be stored in multiple files or spreadsheets.</li>
      <li>Searching, updating, or deleting data becomes slow and confusing.</li>
    </ul>

    <p>With a database:</p>
    <ul className="bullet-points">
      <li>✅ Store large amounts of data efficiently.</li>
      <li>✅ Easily search, filter, and modify data.</li>
      <li>✅ Keep data consistent and reduce errors.</li>
    </ul>

    <h2>💾 What is SQL?</h2>
    <p>
      <b>SQL</b> stands for <b>Structured Query Language</b>. It’s a programming language used to communicate with databases.
    </p>
    <p className="subtitle">👉 You use SQL to:</p>
    <ul className="bullet-points">
      <li>Create tables and databases</li>
      <li>Insert, read, update, and delete data</li>
      <li>Control access and manage users</li>
    </ul>

    <h2>⚙️ What is a DBMS?</h2>
    <p>
      <b>DBMS</b> (Database Management System) is software used to manage databases.
    </p>
    <p className="subtitle">Popular DBMS tools include:</p>
    <ul className="bullet-points">
      <li>🧱 MySQL</li>
      <li>🗄️ PostgreSQL</li>
      <li>🧩 SQLite</li>
      <li>☕ Oracle Database</li>
      <li>🧠 Microsoft SQL Server</li>
    </ul>
</>
)}
{/* 🧱 Database Basics */}
{activeSection === 'database-basics' && (
  <>
    <h1>🧱 Database Basics</h1>
    <p className="subtitle">
      Understand the foundational concepts of databases — data, tables, records, schemas, keys, and relationships.
    </p>

    <h2>📘 What Is Data?</h2>
    <p>
      <b>Data</b> means raw facts or information.
    </p>
    <p className="subtitle">Example:</p>
    <ul className="bullet-points">
      <li>“John”, “25”, “Mumbai” are pieces of data.</li>
    </ul>
    <p>
      When we organize this data in a meaningful way (like a student record), it becomes <b>useful information</b>.
    </p>

    <h2>🧩 What Is a Table?</h2>
    <p>
      A <b>table</b> is the basic building block of a database. It stores data in rows and columns — just like an Excel sheet.
    </p>

    <p className="subtitle">Example Table: Students</p>
    <table className="style-table">
      <thead>
        <tr>
          <th>student_id</th>
          <th>name</th>
          <th>age</th>
          <th>city</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John</td>
          <td>22</td>
          <td>Mumbai</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sara</td>
          <td>20</td>
          <td>Delhi</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Rohan</td>
          <td>23</td>
          <td>Pune</td>
        </tr>
      </tbody>
    </table>
    <ul className="bullet-points">
      <li>Each <b>row</b> → one record (student)</li>
      <li>Each <b>column</b> → one field (name, age, etc.)</li>
    </ul>

    <h2>🔢 What Is a Record and a Field?</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Term</th>
          <th>Meaning</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Field (Column)</td>
          <td>Attribute of data</td>
          <td>name, age, city</td>
        </tr>
        <tr>
          <td>Record (Row)</td>
          <td>Complete set of data</td>
          <td>John, 22, Mumbai</td>
        </tr>
      </tbody>
    </table>

    <h2>🧱 What Is a Schema?</h2>
    <p>
      A <b>schema</b> defines the structure of the database — how tables are related and what fields they contain.
    </p>
    <h4>In simple words —</h4>
    <p>A schema in SQL is like a folder inside a database.
     It helps you organize tables and other database objects neatly.</p>
    <p className="subtitle">Example Schema (for a School Database):</p>
    <ul className="bullet-points">
      <li>Students → student_id, name, age, class</li>
      <li>Teachers → teacher_id, name, subject</li>
      <li>Courses → course_id, course_name, teacher_id</li>
    </ul>

    <h2>🧭 What Are Keys?</h2>
    <p>
      <b>Keys</b> uniquely identify records and connect tables together.
    </p>
    <table className="style-table">
      <thead>
        <tr>
          <th>Type of Key</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Primary Key</td>
          <td>Uniquely identifies each record</td>
          <td>student_id</td>
        </tr>
        <tr>
          <td>Foreign Key</td>
          <td>Links two tables</td>
          <td>course_id in Students table (refers to Courses table)</td>
        </tr>
        <tr>
          <td>Composite Key</td>
          <td>Combination of two or more columns to make a unique key</td>
          <td>(student_id, course_id)</td>
        </tr>
      </tbody>
    </table>

    <h2>🔗 Relationships Between Tables</h2>
    <p>There are three main types of relationships in databases:</p>
    <table className="style-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>One-to-One</td>
          <td>One record in a table is linked to only one in another</td>
          <td>A student → one ID card</td>
        </tr>
        <tr>
          <td>One-to-Many</td>
          <td>One record links to many records in another</td>
          <td>One teacher → many students</td>
        </tr>
        <tr>
          <td>Many-to-Many</td>
          <td>Many records relate to many others</td>
          <td>Students ↔ Courses</td>
        </tr>
      </tbody>
    </table>

    <h2>⚙️ Types of Databases</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Relational Database (RDBMS)</td>
          <td>Stores data in tables with relationships</td>
          <td>MySQL, PostgreSQL</td>
        </tr>
        <tr>
          <td>Non-Relational Database (NoSQL)</td>
          <td>Stores unstructured or semi-structured data</td>
          <td>MongoDB, Firebase</td>
        </tr>
        <tr>
          <td>Distributed Database</td>
          <td>Data stored on multiple servers</td>
          <td>Google Spanner</td>
        </tr>
        <tr>
          <td>Cloud Database</td>
          <td>Database hosted online</td>
          <td>AWS RDS, Azure SQL</td>
        </tr>
      </tbody>
    </table>

    <h2>💾 Example: Relational Database</h2>
    <p>Let’s say you have two tables 👇</p>

    <p className="subtitle">1️⃣ Students Table</p>
    <table className="style-table">
      <thead>
        <tr>
          <th>student_id</th>
          <th>name</th>
          <th>city</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John</td>
          <td>Delhi</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sara</td>
          <td>Mumbai</td>
        </tr>
      </tbody>
    </table>

    <p className="subtitle">2️⃣ Courses Table</p>
    <table className="style-table">
      <thead>
        <tr>
          <th>course_id</th>
          <th>course_name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>101</td>
          <td>SQL Basics</td>
        </tr>
        <tr>
          <td>102</td>
          <td>HTML Design</td>
        </tr>
      </tbody>
    </table>

    <p className="subtitle">3️⃣ Enrollments Table</p>
    <table className="style-table">
      <thead>
        <tr>
          <th>student_id</th>
          <th>course_id</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>101</td>
        </tr>
        <tr>
          <td>1</td>
          <td>102</td>
        </tr>
        <tr>
          <td>2</td>
          <td>101</td>
        </tr>
      </tbody>
    </table>

    <p>This shows how relationships connect data between tables using keys.</p>

    <h2>🧠 Summary</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Table</td>
          <td>Stores data in rows and columns</td>
        </tr>
        <tr>
          <td>Field</td>
          <td>Column (attribute)</td>
        </tr>
        <tr>
          <td>Record</td>
          <td>Row (entry)</td>
        </tr>
        <tr>
          <td>Schema</td>
          <td>Structure of database</td>
        </tr>
        <tr>
          <td>Keys</td>
          <td>Identify and connect records</td>
        </tr>
        <tr>
          <td>Relationships</td>
          <td>Define how tables link together</td>
        </tr>
      </tbody>
    </table>
  </>
)}
{/* 🧮 Types of SQL Commands */}
{activeSection === 'sql-command-types' && (
  <>
    <h1>🧮 Types of SQL Commands</h1>
    <p className="subtitle">
      SQL commands are divided into five main categories, based on the type of work they perform in a database.
    </p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Full Form</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>🧱 DDL</td>
          <td>Data Definition Language</td>
          <td>Defines and manages database structure</td>
        </tr>
        <tr>
          <td>✏️ DML</td>
          <td>Data Manipulation Language</td>
          <td>Handles data inside tables</td>
        </tr>
        <tr>
          <td>🔍 DQL</td>
          <td>Data Query Language</td>
          <td>Retrieves data from tables</td>
        </tr>
        <tr>
          <td>🔒 DCL</td>
          <td>Data Control Language</td>
          <td>Manages user permissions</td>
        </tr>
        <tr>
          <td>🔁 TCL</td>
          <td>Transaction Control Language</td>
          <td>Manages transactions and data integrity</td>
        </tr>
      </tbody>
    </table>

    <h2>🧱 1️⃣ DDL (Data Definition Language)</h2>
    <p>Used to define or change the structure of the database — like creating or deleting tables.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CREATE</td>
          <td>Creates a new table or database</td>
          <td><code>CREATE TABLE students (id INT, name VARCHAR(50));</code></td>
        </tr>
        <tr>
          <td>ALTER</td>
          <td>Changes an existing table (add/remove/modify columns)</td>
          <td><code>ALTER TABLE students ADD age INT;</code></td>
        </tr>
        <tr>
          <td>DROP</td>
          <td>Deletes an entire table or database</td>
          <td><code>DROP TABLE students;</code></td>
        </tr>
        <tr>
          <td>TRUNCATE</td>
          <td>Removes all data from a table but keeps the structure</td>
          <td><code>TRUNCATE TABLE students;</code></td>
        </tr>
        <tr>
          <td>RENAME</td>
          <td>Changes the name of a table</td>
          <td><code>RENAME TABLE students TO learners;</code></td>
        </tr>
      </tbody>
    </table>

    <p className="subtitle">🧠 Remember:</p>
    <ul className="bullet-points">
      <li>DDL commands are auto-committed, meaning changes can’t be undone once executed.</li>
    </ul>

    <h2>✏️ 2️⃣ DML (Data Manipulation Language)</h2>
<p>Used to manipulate (change) data stored in tables.</p>

<table className="style-table">
  <thead>
    <tr>
      <th>Command</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>INSERT</td>
      <td>Adds new records into a table</td>
      <td><code>INSERT INTO students VALUES (1, 'John', 22);</code></td>
    </tr>
    <tr>
      <td>UPDATE</td>
      <td>Modifies existing records</td>
      <td><code>UPDATE students SET age = 23 WHERE id = 1;</code></td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>Removes records from a table</td>
      <td><code>DELETE FROM students WHERE id = 1;</code></td>
    </tr>
    <tr>
      <td>MERGE</td>
      <td>Combines insert, update, and delete operations in one statement</td>
      <td>
        <code>
          MERGE INTO students AS s<br />
          USING new_data AS n<br />
          ON s.id = n.id<br />
          WHEN MATCHED THEN UPDATE SET s.age = n.age<br />
          WHEN NOT MATCHED THEN INSERT (id, name, age) VALUES (n.id, n.name, n.age);
        </code>
      </td>
    </tr>
  </tbody>
</table>

<p className="subtitle">🧠 Note:</p>
<ul className="bullet-points">
  <li>DML changes can be rolled back (undone) using TCL commands.</li>
</ul>


    <h2>🔍 3️⃣ DQL (Data Query Language)</h2>
    <p>Used to fetch (retrieve) data from the database.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SELECT</td>
          <td>Retrieves data from one or more tables</td>
          <td><code>SELECT * FROM students;</code></td>
        </tr>
      </tbody>
    </table>

    <p className="subtitle">Example with conditions:</p>
    <pre className="code-block">
{`SELECT name, age 
FROM students 
WHERE city = 'Delhi';`}
    </pre>

    <ul className="bullet-points">
      <li>🧠 The SELECT statement is the most used SQL command in real-world projects.</li>
    </ul>

    <h2>🔒 4️⃣ DCL (Data Control Language)</h2>
    <p>Used to control access and permissions in the database.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>GRANT</td>
          <td>Gives user access rights</td>
          <td><code>GRANT SELECT ON students TO user1;</code></td>
        </tr>
        <tr>
          <td>REVOKE</td>
          <td>Removes user access rights</td>
          <td><code>REVOKE SELECT ON students FROM user1;</code></td>
        </tr>
      </tbody>
    </table>

    <ul className="bullet-points">
      <li>🧠 Used by Database Administrators (DBAs) to maintain security and privacy.</li>
    </ul>

    <h2>🔁 5️⃣ TCL (Transaction Control Language)</h2>
    <p>Used to manage transactions — a group of SQL operations that run as one unit.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>COMMIT</td>
          <td>Saves changes permanently</td>
          <td><code>COMMIT;</code></td>
        </tr>
        <tr>
          <td>ROLLBACK</td>
          <td>Undoes uncommitted changes</td>
          <td><code>ROLLBACK;</code></td>
        </tr>
        <tr>
          <td>SAVEPOINT</td>
          <td>Creates a temporary checkpoint in a transaction</td>
          <td><code>SAVEPOINT save1;</code></td>
        </tr>
      </tbody>
    </table>

    <p className="subtitle">Example:</p>
    <pre className="code-block">
{`BEGIN;
UPDATE account SET balance = balance - 500 WHERE id = 1;
UPDATE account SET balance = balance + 500 WHERE id = 2;
COMMIT;`}
    </pre>

    <ul className="bullet-points">
      <li>If any step fails → use <b>ROLLBACK;</b> to undo all changes.</li>
    </ul>

    <h2>🧠 Summary Table</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>DDL</td>
          <td>Defines database structure</td>
          <td>CREATE, ALTER, DROP, TRUNCATE, RENAME</td>
        </tr>
        <tr>
          <td>DML</td>
          <td>Handle data</td>
          <td>INSERT, UPDATE, DELETE, MERGE</td>
        </tr>
        <tr>
          <td>DQL</td>
          <td>Retrieves data</td>
          <td>SELECT</td>
        </tr>
        <tr>
          <td>DCL</td>
          <td>Controls user access</td>
          <td>GRANT, REVOKE</td>
        </tr>
        <tr>
          <td>TCL</td>
          <td>Manages transactions</td>
          <td>COMMIT, ROLLBACK, SAVEPOINT</td>
        </tr>
      </tbody>
    </table>
  </>
)}
{/* 🧩 SQL Data Types */}
{activeSection === 'sql-data-types' && (
  <>
    <h1>🧩 SQL Data Types</h1>
    <p className="subtitle">
      When creating a table, every column must have a data type. A data type defines the kind of data that can be stored in a column — like numbers, text, or dates.
    </p>

    <h2>🧱 Why Are Data Types Important?</h2>
    <ul className="bullet-points">
      <li>✅ They help the database store data efficiently</li>
      <li>✅ They prevent invalid data (e.g., letters in a numeric column)</li>
      <li>✅ They define memory usage</li>
      <li>✅ They improve data accuracy and performance</li>
    </ul>

    <h2>🧮 Main Categories of SQL Data Types</h2>
    <p>SQL data types are generally grouped into five main categories 👇</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>🔢 Numeric Types</td>
          <td>Store numbers (integers, decimals, etc.)</td>
        </tr>
        <tr>
          <td>🧾 Character/String Types</td>
          <td>Store text and characters</td>
        </tr>
        <tr>
          <td>📅 Date & Time Types</td>
          <td>Store date, time, and timestamps</td>
        </tr>
        <tr>
          <td>💾 Binary Types</td>
          <td>Store files, images, or raw data</td>
        </tr>
        <tr>
          <td>🧩 Other / Special Types</td>
          <td>Boolean, JSON, XML, etc.</td>
        </tr>
      </tbody>
    </table>

    <h2>🔢 1️⃣ Numeric Data Types</h2>
    <p>Used to store numbers — either whole numbers or decimal values.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Data Type</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INT / INTEGER</td>
          <td>Whole numbers</td>
          <td>100, -50</td>
        </tr>
        <tr>
          <td>SMALLINT</td>
          <td>Smaller range of integers</td>
          <td>120, -25</td>
        </tr>
        <tr>
          <td>BIGINT</td>
          <td>Large integer values</td>
          <td>999999999</td>
        </tr>
        <tr>
          <td>DECIMAL(p, s)</td>
          <td>Exact number with decimals (p = total digits, s = digits after decimal)</td>
          <td>DECIMAL(5,2) → 123.45</td>
        </tr>
        <tr>
          <td>NUMERIC(p, s)</td>
          <td>Same as DECIMAL (used for accuracy)</td>
          <td>45.60</td>
        </tr>
        <tr>
          <td>FLOAT</td>
          <td>Approximate decimal value (less precision)</td>
          <td>3.14159</td>
        </tr>
        <tr>
          <td>REAL / DOUBLE</td>
          <td>Floating-point number</td>
          <td>1.234567</td>
        </tr>
      </tbody>
    </table>

    <p className="subtitle">🧠 Tip:</p>
    <ul className="bullet-points">
      <li>Use <b>DECIMAL</b> or <b>NUMERIC</b> when precision matters (like money).</li>
    </ul>

    <h2>🧾 2️⃣ Character / String Data Types</h2>
    <p>Used to store text, characters, and words.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Data Type</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CHAR(n)</td>
          <td>Fixed-length string (always takes same space)</td>
          <td>'SQL' (CHAR(5) → "SQL ")</td>
        </tr>
        <tr>
          <td>VARCHAR(n)</td>
          <td>Variable-length string (saves space)</td>
          <td>'Database', 'India'</td>
        </tr>
        <tr>
          <td>TEXT</td>
          <td>Long text or paragraphs</td>
          <td>'This is a detailed note about SQL.'</td>
        </tr>
      </tbody>
    </table>

    <p className="subtitle">🧠 Tip:</p>
    <ul className="bullet-points">
      <li>Use <b>VARCHAR</b> for normal text; use <b>TEXT</b> for long descriptions.</li>
    </ul>

    <h2>📅 3️⃣ Date and Time Data Types</h2>
    <p>Used to store dates, times, and timestamps.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Data Type</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>DATE</td>
          <td>Stores only date</td>
          <td>'2025-11-03'</td>
        </tr>
        <tr>
          <td>TIME</td>
          <td>Stores only time</td>
          <td>'14:30:00'</td>
        </tr>
        <tr>
          <td>DATETIME</td>
          <td>Stores date and time</td>
          <td>'2025-11-03 14:30:00'</td>
        </tr>
        <tr>
          <td>TIMESTAMP</td>
          <td>Date and time (auto-updated)</td>
          <td>'2025-11-03 08:45:00'</td>
        </tr>
        <tr>
          <td>YEAR</td>
          <td>Stores year</td>
          <td>2025</td>
        </tr>
      </tbody>
    </table>

    <ul className="bullet-points">
      <li>🧠 <b>TIMESTAMP</b> is often used to record when a row was created or updated automatically.</li>
    </ul>

    <h2>💾 4️⃣ Binary Data Types</h2>
    <p>Used to store raw binary data such as images, videos, or files.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Data Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BINARY(n)</td>
          <td>Fixed-length binary data</td>
        </tr>
        <tr>
          <td>VARBINARY(n)</td>
          <td>Variable-length binary data</td>
        </tr>
        <tr>
          <td>BLOB (Binary Large Object)</td>
          <td>Used for large binary files (like photos or PDFs)</td>
        </tr>
      </tbody>
    </table>

    <ul className="bullet-points">
      <li>🧠 Binary data is not human-readable; it’s stored as 0s and 1s.</li>
    </ul>

    <h2>🧩 5️⃣ Other / Special Data Types</h2>

    <table className="style-table">
      <thead>
        <tr>
          <th>Data Type</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BOOLEAN</td>
          <td>Stores TRUE or FALSE</td>
          <td>TRUE</td>
        </tr>
        <tr>
          <td>JSON</td>
          <td>Stores structured JSON data</td>
          <td>{`'{"name":"John","age":22}'`}</td>
        </tr>
        <tr>
          <td>XML</td>
          <td>Stores XML data</td>
          <td>{`'<student><name>John</name></student>'`}</td>
        </tr>
        <tr>
          <td>ENUM</td>
          <td>Stores predefined list of values</td>
          <td>{`ENUM('Male','Female','Other')`}</td>
        </tr>
      </tbody>
    </table>

    <h2>💡 Example Table with Data Types</h2>
    <pre className="code-block">
{`CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    city VARCHAR(30),
    admission_date DATE,
    fees DECIMAL(8,2),
    active BOOLEAN
);`}
    </pre>

    <ul className="bullet-points">
      <li>✅ student_id → Number</li>
      <li>✅ name, city → Text</li>
      <li>✅ admission_date → Date</li>
      <li>✅ fees → Decimal number</li>
      <li>✅ active → True/False status</li>
    </ul>

    <h2>🧠 Summary Table</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Common Types</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Numeric</td>
          <td>INT, DECIMAL, FLOAT</td>
          <td>100, 45.67</td>
        </tr>
        <tr>
          <td>String</td>
          <td>CHAR, VARCHAR, TEXT</td>
          <td>'SQL', 'Database'</td>
        </tr>
        <tr>
          <td>Date/Time</td>
          <td>DATE, TIME, DATETIME</td>
          <td>'2025-11-03'</td>
        </tr>
        <tr>
          <td>Binary</td>
          <td>BLOB, VARBINARY</td>
          <td>Image, File</td>
        </tr>
        <tr>
          <td>Special</td>
          <td>BOOLEAN, JSON, ENUM</td>
          <td>TRUE, {"{key:value}"}</td>
        </tr>
      </tbody>
    </table>
  </>
)}
{/* 🧭 Basic SQL Commands (CRUD Operations) */}
{activeSection === 'sql-crud-operations' && (
  <>
    <h1>🧭 Basic SQL Commands (CRUD Operations)</h1>
    <p className="subtitle">
      CRUD stands for the four basic operations you can perform on a database table:
    </p>
    <ul className="bullet-points">
      <li>👉 <b>C</b> – Create</li>
      <li>👉 <b>R</b> – Read</li>
      <li>👉 <b>U</b> – Update</li>
      <li>👉 <b>D</b> – Delete</li>
    </ul>
    <p>These operations are the foundation of working with databases using SQL.</p>

    <h2>🧱 Sample Table: Students</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>student_id</th>
          <th>name</th>
          <th>age</th>
          <th>city</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>John</td><td>22</td><td>Mumbai</td></tr>
        <tr><td>2</td><td>Sara</td><td>20</td><td>Delhi</td></tr>
        <tr><td>3</td><td>Rohan</td><td>23</td><td>Pune</td></tr>
      </tbody>
    </table>

    <h2>🧰 1️⃣ CREATE – Adding Data (INSERT)</h2>
    <p>The <b>INSERT</b> command is used to add new records (rows) to a table.</p>

    <h3>🧾 Syntax:</h3>
    <pre className="code-block">
{`INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);`}
    </pre>

    <h3>✅ Example:</h3>
    <pre className="code-block">
{`INSERT INTO Students (student_id, name, age, city)
VALUES (4, 'Priya', 21, 'Chennai');`}
    </pre>

    <p className="subtitle">🧠 Tip:</p>
    <ul className="bullet-points">
      <li>Always mention column names — it’s good practice.</li>
      <li>You can insert multiple rows at once:</li>
    </ul>

    <pre className="code-block">
{`INSERT INTO Students (student_id, name, age, city)
VALUES (5, 'Amit', 22, 'Kolkata'),
       (6, 'Nina', 20, 'Delhi');`}
    </pre>

    <h2>🔍 2️⃣ READ – Retrieving Data (SELECT)</h2>
    <p>The <b>SELECT</b> command is used to fetch data from one or more tables.</p>

    <h3>🧾 Syntax:</h3>
    <pre className="code-block">
{`SELECT column1, column2 FROM table_name;`}
    </pre>

    <h3>✅ Example 1: Fetch all data</h3>
    <pre className="code-block">{`SELECT * FROM Students;`}</pre>

    <h3>✅ Example 2: Fetch specific columns</h3>
    <pre className="code-block">{`SELECT name, city FROM Students;`}</pre>

    <h3>✅ Example 3: Use conditions</h3>
    <pre className="code-block">{`SELECT * FROM Students WHERE city = 'Delhi';`}</pre>

    <p className="subtitle">🧠 Tips:</p>
    <ul className="bullet-points">
      <li>Use <b>*</b> to select all columns.</li>
      <li>Use <b>WHERE</b> for filtering data.</li>
    </ul>

    <h2>✏️ 3️⃣ UPDATE – Modifying Data (UPDATE)</h2>
    <p>The <b>UPDATE</b> command is used to change existing data in a table.</p>

    <h3>🧾 Syntax:</h3>
    <pre className="code-block">
{`UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;`}
    </pre>

    <h3>✅ Example:</h3>
    <pre className="code-block">
{`UPDATE Students
SET age = 24, city = 'Bangalore'
WHERE student_id = 3;`}
    </pre>

    <p className="subtitle">🧠 Important:</p>
    <ul className="bullet-points">
      <li>Always include a <b>WHERE</b> condition — otherwise, all rows in the table will be updated!</li>
    </ul>

    <h2>❌ 4️⃣ DELETE – Removing Data (DELETE)</h2>
    <p>The <b>DELETE</b> command removes one or more rows from a table.</p>

    <h3>🧾 Syntax:</h3>
    <pre className="code-block">{`DELETE FROM table_name WHERE condition;`}</pre>

    <h3>✅ Example:</h3>
    <pre className="code-block">{`DELETE FROM Students WHERE student_id = 2;`}</pre>

    <p className="subtitle">🧠 Caution:</p>
    <ul className="bullet-points">
      <li>If you forget the WHERE clause:</li>
    </ul>

    <pre className="code-block">{`DELETE FROM Students;`}</pre>

    <ul className="bullet-points">
      <li>👉 It will delete all rows from the table (data gone, structure stays).</li>
    </ul>

    <h2>⚙️ 5️⃣ TRUNCATE vs DELETE (Quick Note)</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
          <th>Can Rollback?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>DELETE</td>
          <td>Removes data row by row</td>
          <td>✅ Yes</td>
        </tr>
        <tr>
          <td>TRUNCATE</td>
          <td>Removes all data quickly (no WHERE)</td>
          <td>❌ No</td>
        </tr>
      </tbody>
    </table>

    <h2>💡 Real-Life Analogy</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Action</th>
          <th>CRUD Operation</th>
          <th>SQL Command</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Add a new student</td><td>Create</td><td>INSERT</td></tr>
        <tr><td>View student list</td><td>Read</td><td>SELECT</td></tr>
        <tr><td>Edit student’s city</td><td>Update</td><td>UPDATE</td></tr>
        <tr><td>Remove a student</td><td>Delete</td><td>DELETE</td></tr>
      </tbody>
    </table>

    <h2>🧠 Summary</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Operation</th>
          <th>SQL Command</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>C – Create</td><td>INSERT</td><td>Add new data</td></tr>
        <tr><td>R – Read</td><td>SELECT</td><td>View or search data</td></tr>
        <tr><td>U – Update</td><td>UPDATE</td><td>Modify existing data</td></tr>
        <tr><td>D – Delete</td><td>DELETE</td><td>Remove data</td></tr>
      </tbody>
    </table>

    <p className="subtitle">
      ✅ In short: CRUD operations let you <b>create, read, update, and delete</b> data from your tables — the four pillars of database management.
    </p>
  </>
)}
{/* 🧩 SQL Constraints */}
{activeSection === 'sql-constraints' && (
  <>
    <h1>🧩 SQL Constraints</h1>
    <p className="subtitle">
      Constraints are rules applied to columns in a table to ensure that the data stored is accurate, valid, and consistent.
    </p>
    <p>
      They help maintain <b>data integrity</b> — meaning your data always stays correct and logical.
    </p>

    <h2>🧱 Why Use Constraints?</h2>
    <ul className="bullet-points">
      <li>✅ Prevent invalid or duplicate data</li>
      <li>✅ Maintain relationships between tables</li>
      <li>✅ Protect critical data from accidental changes</li>
      <li>✅ Improve data accuracy and reliability</li>
    </ul>

    <h2>🧩 Types of SQL Constraints</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Constraint</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>NOT NULL</td><td>Ensures a column cannot have a NULL (empty) value</td></tr>
        <tr><td>UNIQUE</td><td>Ensures all values in a column are different</td></tr>
        <tr><td>PRIMARY KEY</td><td>Uniquely identifies each record in a table</td></tr>
        <tr><td>FOREIGN KEY</td><td>Links two tables together</td></tr>
        <tr><td>CHECK</td><td>Ensures data meets a specific condition</td></tr>
        <tr><td>DEFAULT</td><td>Assigns a default value if none is provided</td></tr>
      </tbody>
    </table>

    <h2>🔹 1️⃣ NOT NULL Constraint</h2>
    <p>Ensures that a column must always have a value. It prevents inserting NULL (empty) values.</p>
    <pre className="code-block">
{`CREATE TABLE Students (
    student_id INT,
    name VARCHAR(50) NOT NULL,
    city VARCHAR(30)
);`}
    </pre>
    <p>Here, <b>name</b> cannot be left blank:</p>
    <pre className="code-block">
{`INSERT INTO Students (student_id, city)
VALUES (1, 'Delhi');   -- ❌ Error: name cannot be NULL`}
    </pre>

    <h2>🔹 2️⃣ UNIQUE Constraint</h2>
    <p>Ensures that no two rows have the same value in a particular column.</p>
    <pre className="code-block">
{`CREATE TABLE Students (
    student_id INT UNIQUE,
    name VARCHAR(50),
    email VARCHAR(100) UNIQUE
);`}
    </pre>
    <p>Both <b>student_id</b> and <b>email</b> must be unique — duplicates are not allowed.</p>

    <h2>🔹 3️⃣ PRIMARY KEY Constraint</h2>
    <p>
      A <b>PRIMARY KEY</b> uniquely identifies each record in a table.
      It is a combination of <b>NOT NULL</b> and <b>UNIQUE</b>.
      Each table can have only one primary key.
    </p>
    <pre className="code-block">
{`CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(30)
);`}
    </pre>
    <p>Now every student must have a unique <b>student_id</b> — it cannot be empty or repeated.</p>

    <h2>🔹 4️⃣ FOREIGN KEY Constraint</h2>
    <p>
      A <b>FOREIGN KEY</b> connects one table to another, ensuring <b>referential integrity</b>.
      It means the value in one table must exist in another.
    </p>
    <pre className="code-block">
{`CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50)
);

CREATE TABLE Enrollments (
    enroll_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);`}
    </pre>
    <p className="subtitle">🧠 Explanation:</p>
    <ul className="bullet-points">
      <li><b>course_id</b> in Enrollments table must exist in the Courses table.</li>
      <li>Prevents adding an enrollment for a non-existent course.</li>
    </ul>

    <h2>🔹 5️⃣ CHECK Constraint</h2>
    <p>Ensures that data meets a specific condition before being inserted or updated.</p>
    <pre className="code-block">
{`CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT CHECK (age >= 18)
);`}
    </pre>
    <p>Now only students aged 18 or above can be added.</p>
    <pre className="code-block">
{`INSERT INTO Students VALUES (1, 'Riya', 15);  -- ❌ Error: age must be >= 18`}
    </pre>

    <h2>🔹 6️⃣ DEFAULT Constraint</h2>
    <p>Assigns a default value to a column when no value is provided.</p>
    <pre className="code-block">
{`CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(30) DEFAULT 'Unknown'
);`}
    </pre>
    <p>If city is not provided:</p>
    <pre className="code-block">
{`INSERT INTO Students (student_id, name) VALUES (1, 'John');`}
    </pre>
    <p>The city will automatically become 'Unknown'.</p>

    <h2>🧩 Multiple Constraints Example</h2>
    <pre className="code-block">
{`CREATE TABLE Employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT CHECK (age >= 18),
    email VARCHAR(100) UNIQUE,
    department VARCHAR(30) DEFAULT 'HR'
);`}
    </pre>
    <ul className="bullet-points">
      <li>✅ emp_id → unique and not null</li>
      <li>✅ name → must have a value</li>
      <li>✅ age → must be ≥ 18</li>
      <li>✅ email → no duplicates</li>
      <li>✅ department → if not given, defaults to 'HR'</li>
    </ul>

    <h2>🧠 Summary Table</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Constraint</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>NOT NULL</td><td>Value cannot be NULL</td><td>name VARCHAR(50) NOT NULL</td></tr>
        <tr><td>UNIQUE</td><td>Prevents duplicate values</td><td>email UNIQUE</td></tr>
        <tr><td>PRIMARY KEY</td><td>Unique + Not Null</td><td>student_id PRIMARY KEY</td></tr>
        <tr><td>FOREIGN KEY</td><td>Links tables</td><td>FOREIGN KEY(course_id)</td></tr>
        <tr><td>CHECK</td><td>Adds condition</td><td>CHECK(age {`>`}= 18)</td></tr>
        <tr><td>DEFAULT</td><td>Adds default value</td><td>DEFAULT 'Unknown'</td></tr>
      </tbody>
    </table>

    <h2>💡 Real-Life Analogy</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Constraint</th>
          <th>Real-Life Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>NOT NULL</td><td>Student name cannot be empty</td></tr>
        <tr><td>UNIQUE</td><td>Each email must be unique</td></tr>
        <tr><td>PRIMARY KEY</td><td>Each student has a unique ID card</td></tr>
        <tr><td>FOREIGN KEY</td><td>Student must enroll in an existing course</td></tr>
        <tr><td>CHECK</td><td>Age must be above a limit</td></tr>
        <tr><td>DEFAULT</td><td>If city not mentioned → “Unknown”</td></tr>
      </tbody>
    </table>
  </>
)}
{/* 🧮 SQL Operators */}
{activeSection === "sql-operators" && (
  <>
    <h1>🧮 SQL Operators</h1>
    <p className="subtitle">
      SQL Operators are symbols or keywords used to perform operations on data in SQL queries — such as comparing values, filtering results, or performing calculations.
    </p>
    <p>They make SQL queries more powerful and flexible.</p>

    <h2>🧱 Main Types of SQL Operators</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>🔢 Arithmetic Operators</td><td>Perform mathematical calculations</td></tr>
        <tr><td>⚖️ Comparison Operators</td><td>Compare two values</td></tr>
        <tr><td>🧠 Logical Operators</td><td>Combine multiple conditions</td></tr>
        <tr><td>🎯 Range Operators</td><td>Check data within a range (BETWEEN)</td></tr>
        <tr><td>🔍 Pattern Operators</td><td>Match text patterns (LIKE)</td></tr>
        <tr><td>🧩 Set Operators</td><td>Combine results from multiple queries (UNION, etc.)</td></tr>
        <tr><td>📋 Membership Operators</td><td>Check if value exists in a list (IN, NOT IN)</td></tr>
        <tr><td>🚫 Null Operators</td><td>Check for NULL values (IS NULL, IS NOT NULL)</td></tr>
      </tbody>
    </table>

    <h2>🔢 1️⃣ Arithmetic Operators</h2>
    <p>Used to perform math calculations in SQL queries.</p>
    <table className="style-table">
      <thead>
        <tr><th>Operator</th><th>Description</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td>+</td><td>Addition</td><td>SELECT 10 + 5; → 15</td></tr>
        <tr><td>-</td><td>Subtraction</td><td>SELECT 10 - 5; → 5</td></tr>
        <tr><td>*</td><td>Multiplication</td><td>SELECT 10 * 5; → 50</td></tr>
        <tr><td>/</td><td>Division</td><td>SELECT 10 / 2; → 5</td></tr>
        <tr><td>%</td><td>Modulus (remainder)</td><td>SELECT 10 % 3; → 1</td></tr>
      </tbody>
    </table>
    <pre className="code-block">
{`SELECT name, salary, salary + 500 AS BonusSalary FROM Employees;`}
    </pre>
    <p>🧠 Adds ₹500 bonus to every employee’s salary (temporarily for display).</p>

    <h2>⚖️ 2️⃣ Comparison Operators</h2>
    <p>Used to compare values — often in WHERE conditions.</p>
    <table className="style-table">
      <thead>
        <tr><th>Operator</th><th>Description</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td>=</td><td>Equal to</td><td>WHERE city = 'Delhi'</td></tr>
        <tr><td>!= or &lt;&gt;</td><td>Not equal to</td><td>WHERE city &lt;&gt; 'Delhi'</td></tr>
        <tr><td>&gt;</td><td>Greater than</td><td>WHERE age &gt; 25</td></tr>
        <tr><td>&lt;</td><td>Less than</td><td>WHERE age &lt; 30</td></tr>
        <tr><td>&gt;=</td><td>Greater than or equal to</td><td>WHERE marks &gt;= 60</td></tr>
        <tr><td>&lt;=</td><td>Less than or equal to</td><td>WHERE marks &lt;= 80</td></tr>
      </tbody>
    </table>
    <pre className="code-block">
{`SELECT * FROM Students WHERE age > 20;`}
    </pre>

    <h2>🧠 3️⃣ Logical Operators</h2>
    <p>Used to combine multiple conditions in queries.</p>
    <table className="style-table">
      <thead>
        <tr><th>Operator</th><th>Description</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td>AND</td><td>Returns TRUE if both conditions are true</td><td>WHERE city='Delhi' AND age&gt;18</td></tr>
        <tr><td>OR</td><td>Returns TRUE if any condition is true</td><td>WHERE city='Delhi' OR city='Mumbai'</td></tr>
        <tr><td>NOT</td><td>Reverses the condition</td><td>WHERE NOT city='Delhi'</td></tr>
      </tbody>
    </table>
    <pre className="code-block">
{`SELECT * FROM Students 
WHERE (city='Delhi' OR city='Pune') AND age > 18;`}
    </pre>

    <h2>🎯 4️⃣ BETWEEN Operator</h2>
    <p>Used to filter results within a range (inclusive of start and end).</p>
    <pre className="code-block">
{`SELECT * FROM Students WHERE age BETWEEN 18 AND 22;`}
    </pre>
    <p>🧠 Fetches all students aged 18 to 22.</p>

    <h2>📋 5️⃣ IN & NOT IN Operators</h2>
    <p>Used to check if a value matches any value in a list.</p>
    <pre className="code-block">
{`SELECT * FROM Students WHERE city IN ('Delhi', 'Mumbai', 'Pune');
SELECT * FROM Students WHERE city NOT IN ('Delhi', 'Chennai');`}
    </pre>

    <h2>🔍 6️⃣ LIKE & NOT LIKE Operators</h2>
    <p>Used for pattern matching in text columns.</p>
    <table className="style-table">
      <thead>
        <tr><th>Wildcard</th><th>Meaning</th></tr>
      </thead>
      <tbody>
        <tr><td>%</td><td>Represents any number of characters</td></tr>
        <tr><td>_</td><td>Represents a single character</td></tr>
      </tbody>
    </table>
    <pre className="code-block">
{`-- Names starting with 'A'
SELECT * FROM Students WHERE name LIKE 'A%';

-- Names ending with 'n'
SELECT * FROM Students WHERE name LIKE '%n';

-- Names containing 'oh'
SELECT * FROM Students WHERE name LIKE '%oh%';

-- Names with 4 letters starting with 'R'
SELECT * FROM Students WHERE name LIKE 'R___';`}
    </pre>

    <h2>🚫 7️⃣ IS NULL & IS NOT NULL Operators</h2>
    <p>Used to check for missing (NULL) values.</p>
    <pre className="code-block">
{`SELECT * FROM Students WHERE city IS NULL;
SELECT * FROM Students WHERE city IS NOT NULL;`}
    </pre>
    <p>🧠 NULL means no value at all (not even 0 or empty string).</p>

    <h2>🧩 8️⃣ Set Operators</h2>
    <p>Used to combine results from multiple SELECT statements.</p>
    <table className="style-table">
      <thead>
        <tr><th>Operator</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>UNION</td><td>Combines results and removes duplicates</td></tr>
        <tr><td>UNION ALL</td><td>Combines results including duplicates</td></tr>
        <tr><td>INTERSECT</td><td>Returns only common records</td></tr>
        <tr><td>EXCEPT / MINUS</td><td>Returns records from first query not in second</td></tr>
      </tbody>
    </table>
    <pre className="code-block">
{`SELECT name FROM Students_2024
UNION
SELECT name FROM Students_2025;`}
    </pre>

    <h2>🧮 Mini Practice Examples</h2>
    <pre className="code-block">
{`-- 1. Show all students aged between 20 and 25
SELECT * FROM Students WHERE age BETWEEN 20 AND 25;

-- 2. Show students from Delhi or Mumbai
SELECT * FROM Students WHERE city IN ('Delhi', 'Mumbai');

-- 3. Find names starting with ‘S’
SELECT * FROM Students WHERE name LIKE 'S%';

-- 4. Increase salary by 10%
SELECT name, salary * 1.10 AS NewSalary FROM Employees;`}
    </pre>

    <h2>🧠 Summary Table</h2>
    <table className="style-table">
      <thead>
        <tr><th>Type</th><th>Common Operators</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td>Arithmetic</td><td>+, -, *, /, %</td><td>salary + 500</td></tr>
        <tr><td>Comparison</td><td>=, !=, &gt;, &lt;, &gt;=, &lt;=</td><td>age &gt;= 18</td></tr>
        <tr><td>Logical</td><td>AND, OR, NOT</td><td>age &gt; 18 AND city='Delhi'</td></tr>
        <tr><td>Range</td><td>BETWEEN ... AND ...</td><td>age BETWEEN 20 AND 25</td></tr>
        <tr><td>Membership</td><td>IN, NOT IN</td><td>city IN ('Delhi','Mumbai')</td></tr>
        <tr><td>Pattern</td><td>LIKE, NOT LIKE</td><td>name LIKE 'A%'</td></tr>
        <tr><td>Null Check</td><td>IS NULL, IS NOT NULL</td><td>city IS NOT NULL</td></tr>
        <tr><td>Set</td><td>UNION, INTERSECT, EXCEPT</td><td>Combine SELECT results</td></tr>
      </tbody>
    </table>
  </>
)}
{/* ⚙️ SQL Clauses */}
{activeSection === "sql-clauses" && (
  <>
    <h1>⚙️ SQL Clauses</h1>
    <p className="subtitle">
      SQL Clauses are keywords that define specific parts of an SQL query.  
      They control which data to retrieve, how to filter, how to sort, how to group, and how much data to show.
    </p>
    <p>Every clause has a purpose — and most queries are built by combining them.</p>

    <h2>🧩 Common SQL Clauses</h2>
    <table className="style-table">
      <thead>
        <tr><th>Clause</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>WHERE</td><td>Filters rows based on condition</td></tr>
        <tr><td>ORDER BY</td><td>Sorts result in ascending or descending order</td></tr>
        <tr><td>GROUP BY</td><td>Groups rows that have the same values</td></tr>
        <tr><td>HAVING</td><td>Filters grouped data</td></tr>
        <tr><td>LIMIT / TOP / FETCH</td><td>Restricts number of rows returned</td></tr>
      </tbody>
    </table>

    <h2>🔍 1️⃣ WHERE Clause</h2>
    <p>Used to filter records before performing any operations.</p>
    <p>🧠 Syntax:</p>
    <pre className="code-block">
{`SELECT column1, column2 
FROM table_name
WHERE condition;`}
    </pre>
    <p>🧩 Example:</p>
    <pre className="code-block">
{`SELECT * FROM Students
WHERE city = 'Delhi';`}
    </pre>
    <p>✅ Fetches only students from Delhi.</p>

    <p>Example with operators:</p>
    <pre className="code-block">
{`SELECT * FROM Students
WHERE age >= 18 AND marks > 70;`}
    </pre>
    <p>✅ Gets students aged 18 or older with marks above 70.</p>

    <h2>⚖️ 2️⃣ ORDER BY Clause</h2>
    <p>Used to sort results in ascending (ASC) or descending (DESC) order.</p>
    <p>🧠 Syntax:</p>
    <pre className="code-block">
{`SELECT column1, column2
FROM table_name
ORDER BY column1 [ASC|DESC];`}
    </pre>

    <p>🧩 Example:</p>
    <pre className="code-block">
{`SELECT name, marks
FROM Students
ORDER BY marks DESC;`}
    </pre>
    <p>✅ Sorts students by highest marks first.</p>

    <p>You can also sort by multiple columns:</p>
    <pre className="code-block">
{`SELECT name, city, marks
FROM Students
ORDER BY city ASC, marks DESC;`}
    </pre>
    <p>✅ Sorts first by city name, then by marks (highest first) within each city.</p>

    <h2>🧮 3️⃣ GROUP BY Clause</h2>
    <p>Used to group rows that have the same values — often used with aggregate functions like COUNT(), SUM(), AVG(), MIN(), MAX().</p>
    <p>🧠 Syntax:</p>
    <pre className="code-block">
{`SELECT column, aggregate_function(column)
FROM table_name
GROUP BY column;`}
    </pre>

    <p>🧩 Example:</p>
    <pre className="code-block">
{`SELECT city, COUNT(*) AS StudentCount
FROM Students
GROUP BY city;`}
    </pre>
    <p>✅ Groups students by city and counts how many students are in each city.</p>

    <p>Another Example:</p>
    <pre className="code-block">
{`SELECT department, AVG(salary) AS AvgSalary
FROM Employees
GROUP BY department;`}
    </pre>
    <p>✅ Shows average salary of employees per department.</p>

    <h2>🔍 4️⃣ HAVING Clause</h2>
    <p>Used to filter grouped results — similar to WHERE, but applied after grouping.</p>
    <p>🧠 Syntax:</p>
    <pre className="code-block">
{`SELECT column, aggregate_function(column)
FROM table_name
GROUP BY column
HAVING condition;`}
    </pre>

    <p>🧩 Example:</p>
    <pre className="code-block">
{`SELECT city, COUNT(*) AS TotalStudents
FROM Students
GROUP BY city
HAVING COUNT(*) > 10;`}
    </pre>
    <p>✅ Shows only cities having more than 10 students.</p>

    <p>🧠 Note:</p>
    <ul className="bullet-points">
      <li>WHERE filters before grouping.</li>
      <li>HAVING filters after grouping.</li>
    </ul>

    <h2>📉 5️⃣ LIMIT / TOP / FETCH Clauses</h2>
    <p>Used to limit the number of rows returned by a query.</p>

    <p>In MySQL / PostgreSQL:</p>
    <pre className="code-block">
{`SELECT * FROM Students
LIMIT 5;`}
    </pre>
    <p>✅ Returns only first 5 rows.</p>

    <p>In SQL Server:</p>
    <pre className="code-block">
{`SELECT TOP 5 * FROM Students;`}
    </pre>

    <p>In Oracle:</p>
    <pre className="code-block">
{`SELECT * FROM Students
FETCH FIRST 5 ROWS ONLY;`}
    </pre>

    <h2>🧠 6️⃣ Full Query Example (Combining Clauses)</h2>
    <pre className="code-block">
{`SELECT city, COUNT(*) AS TotalStudents
FROM Students
WHERE marks > 70
GROUP BY city
HAVING COUNT(*) > 5
ORDER BY TotalStudents DESC
LIMIT 3;`}
    </pre>

    <h3>🔎 Step-by-step explanation:</h3>
    <ul className="bullet-points">
      <li>WHERE marks {`>`} 70 → Filters students scoring above 70.</li>
      <li>GROUP BY city → Groups remaining students by city.</li>
      <li>HAVING COUNT(*) {`>`} 5 → Keeps only cities with more than 5 students.</li>
      <li>ORDER BY TotalStudents DESC → Sorts by number of students (highest first).</li>
      <li>LIMIT 3 → Shows only top 3 cities.</li>
    </ul>

    <h2>🧩 Summary Table</h2>
    <table className="style-table">
      <thead>
        <tr><th>Clause</th><th>Purpose</th><th>Used With</th></tr>
      </thead>
      <tbody>
        <tr><td>WHERE</td><td>Filters rows based on condition</td><td>Any column</td></tr>
        <tr><td>ORDER BY</td><td>Sorts result set</td><td>Any column</td></tr>
        <tr><td>GROUP BY</td><td>Groups rows by column value</td><td>Aggregate functions</td></tr>
        <tr><td>HAVING</td><td>Filters groups after grouping</td><td>GROUP BY</td></tr>
        <tr><td>LIMIT / TOP</td><td>Restricts number of rows</td><td>Any query</td></tr>
      </tbody>
    </table>

    <h2>🧮 Practice Examples</h2>
    <pre className="code-block">
{`-- 1️⃣ Get students with marks above 80
SELECT * FROM Students WHERE marks > 80;

-- 2️⃣ Sort employees by salary (highest first)
SELECT name, salary FROM Employees ORDER BY salary DESC;

-- 3️⃣ Find number of students in each city
SELECT city, COUNT(*) FROM Students GROUP BY city;

-- 4️⃣ Show cities having more than 10 students
SELECT city, COUNT(*) FROM Students GROUP BY city HAVING COUNT(*) > 10;

-- 5️⃣ Show top 5 employees with highest salaries
SELECT name, salary FROM Employees ORDER BY salary DESC LIMIT 5;`}
    </pre>

    <h2>🧠 Quick Recap</h2>
    <ul className="bullet-points">
      <li>WHERE → Filters rows</li>
      <li>GROUP BY → Groups rows</li>
      <li>HAVING → Filters groups</li>
      <li>ORDER BY → Sorts results</li>
      <li>LIMIT → Restricts rows shown</li>
    </ul>
  </>
)}
{activeSection === "sql-functions" && (
  <>
    <h1>🧮 SQL Functions</h1>
    <p className="subtitle">
      SQL Functions are predefined methods in SQL used to perform operations on data. 
      They return a single value after processing input values.
    </p>

    <h2>⭐ Types of SQL Functions</h2>
    <ul>
      <li>🔤 <strong>String Functions</strong> – Work on text values (e.g., <code>UPPER()</code>, <code>LENGTH()</code>)</li>
      <li>🔢 <strong>Numeric Functions</strong> – Work on numeric data (e.g., <code>ABS()</code>, <code>ROUND()</code>)</li>
      <li>🗓️ <strong>Date Functions</strong> – Work with date/time values (e.g., <code>NOW()</code>, <code>DATEDIFF()</code>)</li>
      <li>🔄 <strong>Conversion Functions</strong> – Convert data types (e.g., <code>CAST()</code>, <code>CONVERT()</code>)</li>
      <li>🧮 <strong>Aggregate Functions</strong> – Work on multiple rows (e.g., <code>SUM()</code>, <code>COUNT()</code>)</li>
    </ul>

    {/* ⭐ 1. STRING FUNCTIONS */}
    <h2>⭐ 1️⃣ String Functions</h2>

    <h3>🔹 1) UPPER() – Convert text to uppercase</h3>
    <pre className="code-block">{`SELECT UPPER('hello world');`}</pre>

    <h3>🔹 2) LOWER() – Convert text to lowercase</h3>
    <pre className="code-block">{`SELECT LOWER('SQL FUNCTIONS');`}</pre>

    <h3>🔹 3) LENGTH() – Get number of characters</h3>
    <pre className="code-block">{`SELECT LENGTH('Database');`}</pre>

    <h3>🔹 4) SUBSTRING() – Extract part of a string</h3>
    <pre className="code-block">{`SELECT SUBSTRING('SQL TUTORIAL', 1, 3);`}</pre>

    <h3>🔹 5) CONCAT() – Join strings</h3>
    <pre className="code-block">{`SELECT CONCAT('Hello ', 'Students');`}</pre>

    {/* ⭐ 2. NUMERIC FUNCTIONS */}
    <h2>⭐ 2️⃣ Numeric Functions</h2>

    <h3>🔹 1) ABS() – Absolute value</h3>
    <pre className="code-block">{`SELECT ABS(-50);`}</pre>

    <h3>🔹 2) ROUND() – Round a number</h3>
    <pre className="code-block">{`SELECT ROUND(12.567, 2);`}</pre>

    <h3>🔹 3) CEIL() – Next highest integer</h3>
    <pre className="code-block">{`SELECT CEIL(4.2);`}</pre>

    <h3>🔹 4) FLOOR() – Next lowest integer</h3>
    <pre className="code-block">{`SELECT FLOOR(4.9);`}</pre>

    {/* ⭐ 3. DATE FUNCTIONS */}
    <h2>⭐ 3️⃣ Date Functions</h2>

    <h3>🔹 1) NOW() – Current date and time</h3>
    <pre className="code-block">{`SELECT NOW();`}</pre>

    <h3>🔹 2) CURDATE() – Only current date</h3>
    <pre className="code-block">{`SELECT CURDATE();`}</pre>

    <h3>🔹 3) DATEDIFF() – Days between two dates</h3>
    <pre className="code-block">{`SELECT DATEDIFF('2025-12-01', '2025-11-01');`}</pre>

    <h3>🔹 4) DATE_ADD() – Add days/months/years</h3>
    <pre className="code-block">{`SELECT DATE_ADD('2025-11-20', INTERVAL 10 DAY);`}</pre>

    {/* ⭐ 4. CONVERSION FUNCTIONS */}
    <h2>⭐ 4️⃣ Conversion Functions</h2>

    <h3>🔹 1) CAST() – Convert datatype</h3>
    <pre className="code-block">{`SELECT CAST('25' AS UNSIGNED);`}</pre>

    <h3>🔹 2) CONVERT() – Convert to date</h3>
    <pre className="code-block">{`SELECT CONVERT('2025-11-20', DATE);`}</pre>

    {/* ⭐ 5. AGGREGATE FUNCTIONS */}
    <h2>⭐ 5️⃣ Aggregate Functions (Multiple Rows)</h2>

    <p>Assume a table <strong>students</strong>:</p>
    <table className="style-table">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>marks</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>A</td><td>80</td></tr>
        <tr><td>2</td><td>B</td><td>90</td></tr>
        <tr><td>3</td><td>C</td><td>70</td></tr>
      </tbody>
    </table>

    <h3>🔹 1) COUNT() – Count rows</h3>
    <pre className="code-block">{`SELECT COUNT(*) AS total_students FROM students;`}</pre>

    <h3>🔹 2) SUM() – Add values</h3>
    <pre className="code-block">{`SELECT SUM(marks) AS total_marks FROM students;`}</pre>

    <h3>🔹 3) AVG() – Average</h3>
    <pre className="code-block">{`SELECT AVG(marks) AS average_marks FROM students;`}</pre>

    <h3>🔹 4) MAX() – Highest value</h3>
    <pre className="code-block">{`SELECT MAX(marks) AS highest_mark FROM students;`}</pre>

    <h3>🔹 5) MIN() – Lowest value</h3>
    <pre className="code-block">{`SELECT MIN(marks) AS lowest_mark FROM students;`}</pre>

    <h2>🧠 Summary Table</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Example Functions</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>String</td>
          <td>UPPER(), LOWER(), CONCAT(), LENGTH()</td>
          <td>Text operations</td>
        </tr>
        <tr>
          <td>Numeric</td>
          <td>ABS(), ROUND(), CEIL(), FLOOR()</td>
          <td>Number calculations</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>NOW(), CURDATE(), DATEDIFF()</td>
          <td>Work with dates</td>
        </tr>
        <tr>
          <td>Conversion</td>
          <td>CAST(), CONVERT()</td>
          <td>Change data types</td>
        </tr>
        <tr>
          <td>Aggregate</td>
          <td>SUM(), COUNT(), AVG()</td>
          <td>Work on multiple rows</td>
        </tr>
      </tbody>
    </table>
  </>
)}

{activeSection === "sql-joins" && (
  <>
    <h1>🧩 SQL Joins</h1>
    <p className="subtitle">
      SQL JOIN is used to combine rows from two or more tables based on a related column between them 
      (usually a primary key and foreign key). Think of it like connecting data from multiple tables 
      to get complete information.
    </p>

    <h2>🧱 Example Setup</h2>
    <p className='subtitle'>Let’s take two example tables 👇</p>

    <h3>🎓 Students Table</h3>
    <pre className="code-block" >
{`student_id | name  | dept_id
1           | Aisha | 101
2           | Rahul | 102
3           | Neha  | 103
4           | Aman  | 101`}
    </pre>

    <h3>🏢 Departments Table</h3>
    <pre className="code-block">
{`dept_id | dept_name
101     | Computer Science
102     | Mechanical
104     | Civil`}
    </pre>

    <h2>🧩 Types of SQL Joins</h2>
    <ul className='bullet-points'>
      <li>🔹 <strong>INNER JOIN</strong> – Only matching rows in both tables</li>
      <li>🔹 <strong>LEFT JOIN</strong> – All rows from left + matching right</li>
      <li>🔹 <strong>RIGHT JOIN</strong> – All rows from right + matching left</li>
      <li>🔹 <strong>FULL JOIN</strong> – All records from both sides</li>
      <li>🔹 <strong>CROSS JOIN</strong> – All combinations of both tables</li>
      <li>🔹 <strong>SELF JOIN</strong> – A table joined to itself</li>
    </ul>

    <h2>1️⃣ INNER JOIN</h2>
    <pre className="code-block">
{`SELECT Students.name, Departments.dept_name
FROM Students
INNER JOIN Departments
ON Students.dept_id = Departments.dept_id;`}
    </pre>
    <p className="subtitle">
      ✅ Returns only students whose department exists in both tables.
    </p>

    <h2>2️⃣ LEFT JOIN (LEFT OUTER JOIN)</h2>
    <pre className="code-block">
{`SELECT Students.name, Departments.dept_name
FROM Students
LEFT JOIN Departments
ON Students.dept_id = Departments.dept_id;`}
    </pre>
    <p className="subtitle">
      ✅ Shows all students even if no department match — unmatched rows show <code>NULL</code>.
    </p>

    <h2>3️⃣ RIGHT JOIN (RIGHT OUTER JOIN)</h2>
    <pre className="code-block">
{`SELECT Students.name, Departments.dept_name
FROM Students
RIGHT JOIN Departments
ON Students.dept_id = Departments.dept_id;`}
    </pre>
    <p className="subtitle">
      ✅ Shows all departments, even if no students belong to them.
    </p>

    <h2>4️⃣ FULL JOIN (FULL OUTER JOIN)</h2>
    <pre className="code-block">
{`SELECT Students.name, Departments.dept_name
FROM Students
FULL JOIN Departments
ON Students.dept_id = Departments.dept_id;`}
    </pre>
    <p className="subtitle">
      ✅ Combines results of LEFT and RIGHT JOIN — includes unmatched rows from both sides.
    </p>

    <h2>5️⃣ CROSS JOIN</h2>
    <pre className="code-block">
{`SELECT Students.name, Departments.dept_name
FROM Students
CROSS JOIN Departments;`}
    </pre>
    <p className="subtitle">
      ✅ Produces all possible combinations (Cartesian product) of rows from both tables.
    </p>

    <h2>6️⃣ SELF JOIN</h2>
    <pre className="code-block">
{`SELECT A.name AS Student, B.name AS Buddy
FROM Students A, Students B
WHERE A.dept_id = B.dept_id AND A.name <> B.name;`}
    </pre>
    <p className="subtitle">
      ✅ Compares rows within the same table — finds students in the same department.
    </p>

    <h2>🧠 Summary Table</h2>
    <table className='style-table'>
      <thead>
        <tr>
          <th>Join Type</th>
          <th>Description</th>
          <th>Includes Unmatched Rows?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INNER JOIN</td>
          <td>Returns only matching rows</td>
          <td>❌ No</td>
        </tr>
        <tr>
          <td>LEFT JOIN</td>
          <td>All rows from left + matching right</td>
          <td>✅ Left only</td>
        </tr>
        <tr>
          <td>RIGHT JOIN</td>
          <td>All rows from right + matching left</td>
          <td>✅ Right only</td>
        </tr>
        <tr>
          <td>FULL JOIN</td>
          <td>All rows from both tables</td>
          <td>✅ Both</td>
        </tr>
        <tr>
          <td>CROSS JOIN</td>
          <td>All combinations of both tables</td>
          <td>✅ All combinations</td>
        </tr>
        <tr>
          <td>SELF JOIN</td>
          <td>Table joined with itself</td>
          <td>Depends</td>
        </tr>
      </tbody>
    </table>

    <h2>🧮 Practice Queries</h2>
    <pre className="code-block">
{`-- 1️⃣ Get student names and their department names
SELECT s.name, d.dept_name
FROM Students s
INNER JOIN Departments d
ON s.dept_id = d.dept_id;

-- 2️⃣ Show all students, even if department not found
SELECT s.name, d.dept_name
FROM Students s
LEFT JOIN Departments d
ON s.dept_id = d.dept_id;

-- 3️⃣ Show all departments, even if no students
SELECT s.name, d.dept_name
FROM Students s
RIGHT JOIN Departments d
ON s.dept_id = d.dept_id;

-- 4️⃣ Show all students and departments (matched or not)
SELECT s.name, d.dept_name
FROM Students s
FULL JOIN Departments d
ON s.dept_id = d.dept_id;

-- 5️⃣ Find students in the same department
SELECT A.name AS Student, B.name AS Classmate
FROM Students A, Students B
WHERE A.dept_id = B.dept_id AND A.name <> B.name;`}
    </pre>

    <p className="subtitle">
      💡 <strong>Key Notes:</strong><br />
      ✅ Joins connect related data across tables.<br />
      ✅ Use aliases (A, B, s, d) for clarity.<br />
      ✅ INNER JOIN → most common type.<br />
      ✅ FULL JOIN not supported in all SQL versions (can use UNION).<br />
      ✅ Always join using primary key–foreign key relationships.
    </p>
  </>
)}
{activeSection === "sql-subqueries" && (
  <>
    <h1>🧭 SQL Subqueries (Nested Queries)</h1>
    <p className="subtitle">
      A <strong>Subquery</strong> (also called a <em>Nested Query</em> or <em>Inner Query</em>)
      is a query inside another SQL query. The inner query runs first, and its result is used
      by the outer query to produce the final output.
    </p>

    <p>🧠 Think of it like this:</p>
    <p className="subtitle">
      “Find students whose marks are greater than the average marks of all students.”<br />
      The average marks must be calculated first — that’s your subquery.
    </p>

    <h2>🧩 Basic Syntax</h2>
    <pre className="code-block">
{`SELECT column_name
FROM table_name
WHERE column_name operator (SELECT column_name FROM another_table WHERE condition);`}
    </pre>

    <h3>Example:</h3>
    <pre className="code-block">
{`SELECT name, marks
FROM Students
WHERE marks > (SELECT AVG(marks) FROM Students);`}
    </pre>
    <p className="subtitle">✅ Finds students who scored above the average marks.</p>

    <h2>🧱 1️⃣ Types of Subqueries</h2>
    <table className='style-table'>
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>🔹 Single-row Subquery</td><td>Returns only one value</td></tr>
        <tr><td>🔹 Multiple-row Subquery</td><td>Returns multiple values</td></tr>
        <tr><td>🔹 Multiple-column Subquery</td><td>Returns multiple columns</td></tr>
        <tr><td>🔹 Correlated Subquery</td><td>Refers to columns of the outer query</td></tr>
        <tr><td>🔹 Nested Subquery</td><td>A subquery inside another subquery</td></tr>
      </tbody>
    </table>

    <h2>🧩 2️⃣ Single-row Subquery</h2>
    <pre className="code-block">
{`SELECT name, marks
FROM Students
WHERE marks = (SELECT MAX(marks) FROM Students);`}
    </pre>
    <p className="note">✅ Shows the student(s) who got the highest marks.</p>

    <h2>🧮 3️⃣ Multiple-row Subquery</h2>
    <p className='subtitle'>Used when the subquery returns multiple values — use operators like <code>IN</code>, <code>ANY</code>, or <code>ALL</code>.</p>

    <pre className="code-block">
{`-- Using IN
SELECT name
FROM Students
WHERE dept_id IN (SELECT dept_id FROM Departments WHERE dept_name='Computer Science');`}
    </pre>
    <p className="subtitle">✅ Finds students in the “Computer Science” department.</p>

    <pre className="code-block">
{`-- Using ANY
SELECT name, salary
FROM Employees
WHERE salary > ANY (SELECT salary FROM Employees WHERE dept_id = 102);`}
    </pre>
    <p className="subtitle">✅ Employees earning more than at least one person in department 102.</p>

    <pre className="code-block">
{`-- Using ALL
SELECT name, salary
FROM Employees
WHERE salary > ALL (SELECT salary FROM Employees WHERE dept_id = 102);`}
    </pre>
    <p className="subtitle">✅ Employees earning more than everyone in department 102.</p>

    <h2>🧩 4️⃣ Multiple-column Subquery</h2>
    <pre className="code-block">
{`SELECT name, dept_id, marks
FROM Students
WHERE (dept_id, marks) IN (
  SELECT dept_id, MAX(marks)
  FROM Students
  GROUP BY dept_id
);`}
    </pre>
    <p className="subtitle">✅ Finds the top-scoring student in each department.</p>

    <h2>🔁 5️⃣ Correlated Subquery</h2>
    <pre className="code-block">
{`SELECT name, marks
FROM Students s1
WHERE marks > (
  SELECT AVG(marks)
  FROM Students s2
  WHERE s1.dept_id = s2.dept_id
);`}
    </pre>
    <p className="subtitle">✅ Finds students who scored above the average marks in their department.</p>

    <h2>🧩 6️⃣ Nested Subquery</h2>
    <pre className="code-block">
{`SELECT name
FROM Students
WHERE dept_id = (
  SELECT dept_id
  FROM Departments
  WHERE dept_name = (
    SELECT dept_name
    FROM Departments
    WHERE dept_id = 101
  )
);`}
    </pre>
    <p className="subtitle">✅ Example of a 2-level nested subquery.</p>

    <h2>⚙️ 7️⃣ Using Subqueries in Different Clauses</h2>
    <table className='style-table'>
      <thead>
        <tr>
          <th>Clause</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>WHERE</td><td>WHERE marks {`>`} (SELECT AVG(marks) FROM Students)</td></tr>
        <tr><td>FROM</td><td>FROM (SELECT * FROM Employees WHERE salary {`>`} 50000) AS HighSalary</td></tr>
        <tr><td>SELECT</td><td>SELECT name, (SELECT dept_name FROM Departments WHERE dept_id = Students.dept_id)</td></tr>
      </tbody>
    </table>

    <h3>Example in SELECT:</h3>
    <pre className="code-block">
{`SELECT name,
  (SELECT dept_name FROM Departments d WHERE d.dept_id = s.dept_id) AS Department
FROM Students s;`}
    </pre>

    <h3>Example in FROM:</h3>
    <pre className="code-block">
{`SELECT dept_id, AVG(marks) AS AvgMarks
FROM (SELECT * FROM Students WHERE marks > 50) AS PassedStudents
GROUP BY dept_id;`}
    </pre>
    <p className="subtitle">✅ Uses a subquery as a temporary (derived) table.</p>

    <h2>🧮 Practice Queries</h2>
    <pre className="code-block">
{`-- 1️⃣ Students who scored above class average
SELECT name, marks
FROM Students
WHERE marks > (SELECT AVG(marks) FROM Students);

-- 2️⃣ Employees earning more than dept average
SELECT name, salary, dept_id
FROM Employees e
WHERE salary > (
  SELECT AVG(salary)
  FROM Employees
  WHERE dept_id = e.dept_id
);

-- 3️⃣ Departments having at least one student
SELECT dept_name
FROM Departments
WHERE dept_id IN (SELECT dept_id FROM Students);

-- 4️⃣ Top scorers of each department
SELECT name, dept_id, marks
FROM Students
WHERE (dept_id, marks) IN (
  SELECT dept_id, MAX(marks)
  FROM Students
  GROUP BY dept_id
);`}
    </pre>

    <p className="subtitle">
      💡 <strong>Key Notes:</strong><br />
      ✅ Subquery runs first; outer query uses its result.<br />
      ✅ Single-row → use =, &lt;, &gt;.<br />
      ✅ Multi-row → use IN, ANY, ALL.<br />
      ✅ Correlated subqueries → run per row (slower).<br />
      ✅ Can be used in SELECT, FROM, WHERE.<br />
      ✅ Great when joins are too complex.
    </p>

    <h2>🧩 Summary Table</h2>
    <table className='style-table'>
      <thead>
        <tr>
          <th>Type</th>
          <th>Returns</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Single-row</td>
          <td>One value</td>
          <td>= (SELECT MAX(salary) FROM Employees)</td>
        </tr>
        <tr>
          <td>Multiple-row</td>
          <td>Multiple values</td>
          <td>IN (SELECT dept_id FROM Departments)</td>
        </tr>
        <tr>
          <td>Multiple-column</td>
          <td>Multiple columns</td>
          <td>(dept_id, marks) IN (SELECT dept_id, MAX(marks) ...)</td>
        </tr>
        <tr>
          <td>Correlated</td>
          <td>Depends on outer query</td>
          <td>WHERE salary &gt; (SELECT AVG(salary) FROM Employees e2 WHERE e1.dept_id = e2.dept_id)</td>
        </tr>
        <tr>
          <td>Nested</td>
          <td>Query inside another subquery</td>
          <td>SELECT ... (SELECT ... (SELECT ...))</td>
        </tr>
      </tbody>
    </table>
  </>
)}
{activeSection === "sql-views" && (
  <>
    <h1>⚡ SQL Views</h1>
    <p className="subtitle">
      ⭐ A <strong>VIEW</strong> is a <strong>virtual table</strong> in SQL.  
      It does <strong>not store data physically</strong>, but shows data from one or multiple tables 
      based on a <strong>SELECT query</strong>.  
      Think of a View as a <strong>saved SQL query</strong> that behaves like a table.
    </p>

    <h2>💡 Why Use a View?</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Reason</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>✔ Security</td><td>Hide sensitive columns like salary, password</td></tr>
        <tr><td>✔ Simplifies queries</td><td>Save complex SELECT queries and reuse them</td></tr>
        <tr><td>✔ Logical separation</td><td>Create clean and readable data outputs</td></tr>
        <tr><td>✔ Data consistency</td><td>Always shows up-to-date data from original tables</td></tr>
      </tbody>
    </table>

    <h2>📌 Key Points About Views</h2>
    <ul className="bullet-points">
      <li>✔ Views do not store data, only the query.</li>
      <li>✔ When selecting from a view, data comes from the base table.</li>
      <li>✔ If the base table changes → View output changes too.</li>
      <li>✔ Some views are updatable, some are read-only.</li>
    </ul>

    <h2>🛠 How to CREATE a View</h2>
    <pre className="code-block">
{`CREATE VIEW student_view AS
SELECT name, marks
FROM students
WHERE marks > 70;`}
    </pre>
    <p className="subtitle">✔ Creates a view that shows students with marks above 70.</p>

    <h2>📌 How to SELECT from a View</h2>
    <pre className="code-block">{`SELECT * FROM student_view;`}</pre>

    <h2>🛠 How to UPDATE a View</h2>
    <pre className="code-block">
{`CREATE OR REPLACE VIEW student_view AS
SELECT name, marks, city
FROM students
WHERE marks > 60;`}
    </pre>

    <h2>🗑 How to DELETE (Drop) a View</h2>
    <pre className="code-block">{`DROP VIEW student_view;`}</pre>

    <h2>⭐ Example to Understand Easily</h2>
    <p className="subtitle">
      You have a table of students with salary details:
    </p>

    <pre className="code-block">
{`id | name | marks | salary
1  | A    | 80    | 20000
2  | B    | 70    | 15000
3  | C    | 90    | 30000`}
    </pre>

    <p className="subtitle">
      You want to hide <strong>salary</strong> from normal users.
    </p>

    <pre className="code-block">
{`CREATE VIEW student_public AS
SELECT name, marks
FROM students;`}
    </pre>

    <p className="subtitle">Now users can run:</p>

    <pre className="code-block">{`SELECT * FROM student_public;`}</pre>

    <p className="subtitle">🔒 Salary is hidden — view protects sensitive data.</p>

    <h2>🧠 Final Simple Definition</h2>
    <p className="subtitle">
      👉 <strong>A VIEW is a virtual table created from a SELECT query.</strong><br />
      It simplifies complex queries and increases security by hiding specific data.
    </p>

    <h2>🧠 Summary Table</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>CREATE VIEW view_name AS SELECT ...;</td><td>Create a new view</td></tr>
        <tr><td>CREATE OR REPLACE VIEW view_name AS SELECT ...;</td><td>Update an existing view</td></tr>
        <tr><td>DROP VIEW view_name;</td><td>Delete a view</td></tr>
        <tr><td>SELECT * FROM view_name;</td><td>Fetch data from a view</td></tr>
      </tbody>
    </table>

    <h2>⚡ Quick Recap</h2>
    <ul>
      <li>✔ View = Virtual table</li>
      <li>✔ No physical storage</li>
      <li>✔ Used for security and simplification</li>
      <li>✔ Always up-to-date with base table changes</li>
      <li>🚫 Cannot update if view contains JOIN, GROUP BY, or DISTINCT</li>
    </ul>
  </>
)}

{activeSection === "sql-indexes" && (
  <>
    <h1>🧱 SQL Indexes</h1>
    <p className="subtitle">
      An <strong>Index</strong> in SQL is a special data structure that helps the database 
      find and access data quickly — like an index in a book helps you find a topic 
      without reading every page.
    </p>

    <ul>
      <li>👉 Without an index — the database scans every row (full table scan).</li>
      <li>👉 With an index — the database jumps directly to the required data.</li>
    </ul>

    <h2>🧩 Real-Life Example</h2>
    <p>
      Imagine a book 📖 with 1,000 pages.  
      Without an index: you flip through every page to find “SQL Joins.”  
      With an index: you look up “SQL Joins → Page 245” — and go directly there.  
      ✅ That’s exactly what a database index does.
    </p>

    <h2>⚙️ 1️⃣ Creating an Index</h2>
    <pre className="code-block">
{`CREATE INDEX index_name
ON table_name (column_name);

-- Example:
CREATE INDEX idx_student_name
ON Students(name);`}
    </pre>
    <p className="subtitle">
      ✅ Creates an index named <strong>idx_student_name</strong> on the <strong>name</strong> column.  
      ✅ Queries like <code>WHERE name = 'Alex'</code> execute faster.
    </p>

    <h2>⚙️ 2️⃣ Creating a Unique Index</h2>
    <p className="subtitle">A <strong>Unique Index</strong> ensures no duplicate values exist in a column.</p>
    <pre className="code-block">
{`CREATE UNIQUE INDEX index_name
ON table_name (column_name);

-- Example:
CREATE UNIQUE INDEX idx_unique_email
ON Employees(email);`}
    </pre>
    <p className="subtitle">✅ Prevents duplicate email addresses in the Employees table.</p>

    <h2>⚙️ 3️⃣ Creating a Composite (Multi-Column) Index</h2>
    <p className="subtitle">Used when you frequently search using multiple columns together.</p>
    <pre className="code-block">
{`CREATE INDEX index_name
ON table_name (column1, column2);

-- Example:
CREATE INDEX idx_name_dept
ON Students(name, dept_id);`}
    </pre>
    <p className="subtitle">✅ Useful for queries like:  
    <code>SELECT * FROM Students WHERE name='Alex' AND dept_id=101;</code></p>

    <h2>⚙️ 4️⃣ Deleting (Dropping) an Index</h2>
    <pre className="code-block">
{`DROP INDEX index_name;

-- Example:
DROP INDEX idx_student_name;`}
    </pre>
    <p className="note">✅ Removes the index — data remains unchanged.</p>

    <h2>🧮 5️⃣ Viewing Existing Indexes</h2>
    <pre className="code-block">{`SHOW INDEX FROM Students;`}</pre>
    <p className="subtitle">✅ Displays all indexes for the Students table (MySQL).</p>

    <h2>⚙️ 6️⃣ How Indexes Work</h2>
    <p className='subtitle'>
      Indexes are often implemented using <strong>B-trees (balanced trees)</strong>.  
      Data is stored in a sorted structure (like a phone book).  
      Searching becomes <strong>logarithmic (fast)</strong>, not linear.  
      The database jumps directly to the record instead of scanning each row.
    </p>

    <h2>📊 7️⃣ When to Use Indexes</h2>
    <table className='style-table'>
      <thead>
        <tr>
          <th>✅ Use Indexes When</th>
          <th>🚫 Avoid Indexes When</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Column is frequently used in WHERE, JOIN, or ORDER BY</td>
          <td>Table is small — overhead isn’t worth it</td>
        </tr>
        <tr>
          <td>Table has thousands or millions of rows</td>
          <td>Columns are frequently updated</td>
        </tr>
        <tr>
          <td>You want to speed up data retrieval</td>
          <td>There are already too many indexes</td>
        </tr>
      </tbody>
    </table>

    <h2>⚡ 8️⃣ Types of Indexes</h2>
    <table className='style-table'>
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Primary Index</td><td>Automatically created when a Primary Key is defined</td></tr>
        <tr><td>Unique Index</td><td>Ensures no duplicate values</td></tr>
        <tr><td>Composite Index</td><td>Based on multiple columns</td></tr>
        <tr><td>Clustered Index</td><td>Physically rearranges table data according to index</td></tr>
        <tr><td>Non-Clustered Index</td><td>Stores a pointer to the actual data</td></tr>
        <tr><td>Full-text Index</td><td>Used for searching large text fields</td></tr>
        <tr><td>Descending Index</td><td>Sorts data in descending order for faster lookups</td></tr>
      </tbody>
    </table>

    <h2>🧱 Clustered vs Non-Clustered Index</h2>
    <table className='style-table'>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Clustered Index</th>
          <th>Non-Clustered Index</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Data Storage</td><td>Data arranged based on index</td><td>Stores pointers to actual data</td></tr>
        <tr><td>Number per Table</td><td>Only one</td><td>Can be many</td></tr>
        <tr><td>Example</td><td>Primary Key</td><td>Any other column</td></tr>
        <tr><td>Speed</td><td>Faster for range queries</td><td>Slower than clustered</td></tr>
      </tbody>
    </table>

    <h2>🧮 9️⃣ Examples of Usage</h2>
    <pre className="code-block">
{`-- Example 1: Single-column index
CREATE INDEX idx_marks ON Students(marks);

-- Example 2: Unique index
CREATE UNIQUE INDEX idx_email_unique ON Employees(email);

-- Example 3: Composite index
CREATE INDEX idx_dept_marks ON Students(dept_id, marks);

-- Example 4: Drop an index
DROP INDEX idx_dept_marks;`}
    </pre>

    <h2>💡 10️⃣ Advantages of Indexes</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>⚡ Faster Query Execution</td><td>Searches and retrievals are quicker</td></tr>
        <tr><td>🔍 Efficient Sorting</td><td>Helps with ORDER BY and GROUP BY</td></tr>
        <tr><td>🔗 Better JOIN Performance</td><td>Speeds up table joins</td></tr>
        <tr><td>📈 Optimized Filtering</td><td>WHERE conditions run faster</td></tr>
      </tbody>
    </table>

    <h2>⚠️ Limitations of Indexes</h2>
    <table className='style-table'>
      <thead>
        <tr>
          <th>Limitation</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>🚫 Slower Writes</td><td>INSERT, UPDATE, DELETE take longer (index must update too)</td></tr>
        <tr><td>🚫 More Disk Space</td><td>Indexes consume additional storage</td></tr>
        <tr><td>🚫 Maintenance Overhead</td><td>Too many indexes reduce performance</td></tr>
        <tr><td>🚫 Not always useful</td><td>For small tables or rarely searched columns</td></tr>
      </tbody>
    </table>

    <h2>🧠 Quick Summary</h2>
    <table>
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Index</td><td>Speeds up data retrieval</td></tr>
        <tr><td>Unique Index</td><td>Prevents duplicate values</td></tr>
        <tr><td>Composite Index</td><td>Combines multiple columns</td></tr>
        <tr><td>Clustered Index</td><td>Physically arranges data</td></tr>
        <tr><td>Non-Clustered Index</td><td>Stores pointers to data</td></tr>
        <tr><td>Use For</td><td>Frequently searched or joined columns</td></tr>
      </tbody>
    </table>

    <h2>🧩 Practice Queries</h2>
    <pre className="code-block">
{`-- 1️⃣ Create an index on 'name'
CREATE INDEX idx_name ON Students(name);

-- 2️⃣ Create a unique index on 'email'
CREATE UNIQUE INDEX idx_email_unique ON Employees(email);

-- 3️⃣ Create a composite index
CREATE INDEX idx_dept_marks ON Students(dept_id, marks);

-- 4️⃣ Drop an index
DROP INDEX idx_email_unique;

-- 5️⃣ Show all indexes
SHOW INDEX FROM Students;`}
    </pre>

    <p className="subtitle">
      ✅ In short: Indexes make reading data fast but writing slower.  
      Use them wisely — only on columns that are searched often!
    </p>
  </>
)}
{activeSection === "sql-keys" && (
  <>
    <h1>🧠 SQL Keys</h1>
    <p className="subtitle">
      A <strong>Key</strong> in SQL is a column or a set of columns that helps identify each record
      uniquely or establish relationships between tables.
    </p>

    <ul className='bullet-points'>
      <li>👉 Keys maintain data integrity (no duplicates or wrong relationships).</li>
      <li>👉 They connect tables and enforce rules in relational databases.</li>
    </ul>

    <h2>🧩 Why Are Keys Important?</h2>
    <ul className='bullet-points'>
      <li>✅ Prevent duplicate data</li>
      <li>✅ Maintain relationships between tables</li>
      <li>✅ Ensure each record can be uniquely identified</li>
      <li>✅ Improve database performance through indexing</li>
    </ul>

    <h2>⚙️ Types of Keys in SQL</h2>
    <table className='style-table'>
      <thead>
        <tr>
          <th>Key Type</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>🔑 Primary Key</td><td>Uniquely identifies each record in a table</td></tr>
        <tr><td>🧩 Foreign Key</td><td>Creates a relationship between two tables</td></tr>
        <tr><td>🧱 Unique Key</td><td>Ensures all values in a column are unique</td></tr>
        <tr><td>⚙️ Composite Key</td><td>Combination of two or more columns used as a key</td></tr>
        <tr><td>🧮 Candidate Key</td><td>Columns that can be chosen as the primary key</td></tr>
        <tr><td>🧠 Super Key</td><td>A set of columns that can uniquely identify a record</td></tr>
        <tr><td>🧰 Alternate Key</td><td>Candidate keys not chosen as the primary key</td></tr>
      </tbody>
    </table>

    <h2>🔑 1️⃣ Primary Key</h2>
    <p className="subtitle">A <strong>Primary Key</strong> uniquely identifies each record in a table.</p>
    <ul className='bullet-points'>
      <li>Cannot contain NULL values</li>
      <li>Must be unique</li>
      <li>Each table can have only one Primary Key</li>
    </ul>
    <pre className="code-block">
{`CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  name VARCHAR(50),
  marks INT
);`}
    </pre>
    <p className="subtitle">✅ Here, <strong>student_id</strong> is the Primary Key — no two students can have the same ID.</p>

    <h2>🧩 2️⃣ Foreign Key</h2>
    <p className="subtitle">A <strong>Foreign Key</strong> links two tables. It references a Primary Key in another table.</p>
    <pre className="code-block">
{`CREATE TABLE Departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(50)
);

CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  name VARCHAR(50),
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
);`}
    </pre>
    <p className="subtitle">
      ✅ The <strong>dept_id</strong> in Students refers to <strong>dept_id</strong> in Departments.  
      ✅ A student must belong to an existing department.
    </p>

    <h2>⚙️ 3️⃣ Unique Key</h2>
    <p className="subtitle">
      A <strong>Unique Key</strong> ensures that all values in a column are different, just like a Primary Key,
      but it <strong>can have one NULL value</strong>.
    </p>
    <pre className="code-block">
{`CREATE TABLE Employees (
  emp_id INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE
);`}
    </pre>
    <p className="subtitle">✅ <strong>email</strong> must be unique but can have one NULL.</p>

    <h2>🧱 4️⃣ Composite Key</h2>
    <p className="subtitle">
      A <strong>Composite Key</strong> is made up of two or more columns that together uniquely identify a record.
    </p>
    <pre className="code-block">
{`CREATE TABLE ExamResults (
  student_id INT,
  subject_id INT,
  marks INT,
  PRIMARY KEY (student_id, subject_id)
);`}
    </pre>
    <p className="subtitle">✅ Combination of student_id and subject_id uniquely identifies each record.</p>

    <h2>🧮 5️⃣ Candidate Key</h2>
    <p className="subtitle">
      A <strong>Candidate Key</strong> is a column (or set of columns) that can uniquely identify a record.  
      Out of all candidate keys, one is chosen as the Primary Key; others are Alternate Keys.
    </p>
    <pre className="code-block">
{`CREATE TABLE Employees (
  emp_id INT,
  email VARCHAR(100),
  phone VARCHAR(20),
  PRIMARY KEY (emp_id)
);`}
    </pre>
    <p className="subtitle">
      ✅ emp_id, email, and phone can all uniquely identify an employee —  
      they are candidate keys, but only one (emp_id) is chosen as the Primary Key.
    </p>

    <h2>🧠 6️⃣ Super Key</h2>
    <p className="subtitle">
      A <strong>Super Key</strong> is any combination of columns that can uniquely identify a record.  
      Every Candidate Key is a Super Key, but not every Super Key is a Candidate Key.
    </p>
    <p className="subtitle">✅ Minimal (smallest) Super Keys are Candidate Keys.</p>

    <h2>🧰 7️⃣ Alternate Key</h2>
    <p className="subtitle">
      When a table has multiple candidate keys, the one not chosen as the primary key is called an <strong>Alternate Key</strong>.
    </p>
    <pre className="code-block">
{`CREATE TABLE Employees (
  emp_id INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE
);`}
    </pre>
    <p className="subtitle">
      ✅ emp_id → Primary Key  
      ✅ email → Alternate Key
    </p>

    <h2>🧩 Relationships Between Keys</h2>
    <table className='style-table'>
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Primary Key</td><td>Uniquely identifies a record</td><td>student_id in Students</td></tr>
        <tr><td>Foreign Key</td><td>Refers to a primary key in another table</td><td>dept_id in Students referencing Departments</td></tr>
        <tr><td>Composite Key</td><td>Two or more columns used as key</td><td>(student_id, subject_id)</td></tr>
        <tr><td>Unique Key</td><td>Ensures all values are unique</td><td>email in Employees</td></tr>
        <tr><td>Candidate Key</td><td>Possible primary key choices</td><td>emp_id, email</td></tr>
        <tr><td>Alternate Key</td><td>Candidate key not used as primary</td><td>email</td></tr>
        <tr><td>Super Key</td><td>Any combination that uniquely identifies</td><td>(emp_id, email)</td></tr>
      </tbody>
    </table>

    <h2>💡 Key Rules Summary</h2>
    <table className='style-table'>
      <thead>
        <tr>
          <th>Rule</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Primary Key</td><td>Only one per table, cannot be NULL</td></tr>
        <tr><td>Foreign Key</td><td>Can have duplicates and NULLs</td></tr>
        <tr><td>Unique Key</td><td>Ensures uniqueness, allows one NULL</td></tr>
        <tr><td>Composite Key</td><td>Combines two or more columns</td></tr>
        <tr><td>Candidate Key</td><td>Possible primary key options</td></tr>
        <tr><td>Alternate Key</td><td>Non-selected candidate key</td></tr>
        <tr><td>Super Key</td><td>Any unique identifying combination</td></tr>
      </tbody>
    </table>

    <h2>🧮 Practice Queries</h2>
    <pre className="code-block">
{`-- 1️⃣ Create tables with primary and foreign keys
CREATE TABLE Departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(50)
);

CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  name VARCHAR(50),
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
);

-- 2️⃣ Create a unique key
CREATE TABLE Employees (
  emp_id INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE
);

-- 3️⃣ Create a composite key
CREATE TABLE ExamResults (
  student_id INT,
  subject_id INT,
  marks INT,
  PRIMARY KEY (student_id, subject_id)
);`}
    </pre>

    <h2>🧠 Quick Recap</h2>
    <ul className='bullet-points'>
      <li>✅ Primary Key → Uniquely identifies each row</li>
      <li>✅ Foreign Key → Connects tables</li>
      <li>✅ Unique Key → Ensures uniqueness (allows NULL)</li>
      <li>✅ Composite Key → Combines multiple columns</li>
      <li>✅ Candidate Key → All possible unique identifiers</li>
      <li>✅ Alternate Key → Unused candidate key</li>
      <li>✅ Super Key → Any combination that uniquely identifies a row</li>
    </ul>

    <p className="subtitle">
      ✅ In short: Keys are the backbone of relational databases — ensuring data accuracy, uniqueness, and relationships.
    </p>
  </>
)}
{activeSection === "sql-normalization" && (
  <>
    <h1>🧮 SQL Normalization</h1>
    <p className="subtitle">
      <strong>Normalization</strong> is the process of organizing data in a database to reduce redundancy
      (duplicate data) and improve data integrity.
    </p>

    <p>
      👉 It divides large tables into smaller related tables and links them using keys (like primary and foreign keys).
    </p>

    <h2>🧠 Why Normalization?</h2>
    <ul>
      <li>❌ Without normalization → data duplication, inconsistency, and anomalies</li>
      <li>✅ With normalization → no redundancy, consistent updates, and efficient storage</li>
    </ul>

    <h2>⚙️ Example Problem</h2>
    <pre>
{`StudentID | Name | Dept | DeptHead
1 | Alex | CS | Dr. John
2 | Sara | IT | Dr. Smith
3 | John | CS | Dr. John`}
    </pre>
    <p className="subtitle">
      ⚠️ DeptHead is repeated multiple times. If the CS head changes, many rows must be updated → leads to inconsistency.
    </p>
    <p className="subtitle">✅ Solution → Apply Normalization</p>

    <h2>🧩 Normal Forms Overview</h2>
    <table className='style-table'>
      <thead>
        <tr>
          <th>Normal Form</th>
          <th>Goal</th>
          <th>Key Idea</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1NF</td><td>Eliminate repeating groups</td><td>Each column has atomic values</td></tr>
        <tr><td>2NF</td><td>Eliminate partial dependency</td><td>Every non-key depends on the whole key</td></tr>
        <tr><td>3NF</td><td>Eliminate transitive dependency</td><td>No column depends on another non-key</td></tr>
        <tr><td>BCNF</td><td>Stronger 3NF</td><td>Every determinant is a candidate key</td></tr>
        <tr><td>4NF / 5NF</td><td>Advanced</td><td>Remove multi-valued and join dependencies</td></tr>
      </tbody>
    </table>

    <h2>🧱 1️⃣ First Normal Form (1NF)</h2>
    <p><strong>Rule:</strong> Each cell should have a single value only; no repeating groups.</p>
    <pre className='block-code'>
{`Not in 1NF:
StudentID | Name | Subjects
1 | Alex | Math, English
2 | Sara | Science`}
    </pre>
    <p>Convert to 1NF 👇</p>
    <pre>
{`StudentID | Name | Subject
1 | Alex | Math
1 | Alex | English
2 | Sara | Science`}
    </pre>
    <p className="note">✅ Each cell has a single value — table is now in 1NF.</p>

    <h2>⚙️ 2️⃣ Second Normal Form (2NF)</h2>
    <p><strong>Rule:</strong> Must be in 1NF, and all non-key attributes depend on the full primary key.</p>
    <p>👉 Applies to tables with <strong>composite keys</strong>.</p>
    <pre>
{`Not in 2NF:
StudentID | Subject | StudentName | Dept
1 | Math | Alex | CS
1 | English | Alex | CS`}
    </pre>
    <p>Convert to 2NF 👇</p>
    <pre>
{`Students
StudentID | StudentName | Dept
1 | Alex | CS

Subjects
StudentID | Subject
1 | Math
1 | English`}
    </pre>
    <p className="note">✅ Now every non-key depends on the full key — in 2NF.</p>

    <h2>🧩 3️⃣ Third Normal Form (3NF)</h2>
    <p><strong>Rule:</strong> Must be in 2NF, and no non-key depends on another non-key column.</p>
    <pre>
{`Not in 3NF:
StudentID | Name | DeptID | DeptName
1 | Alex | 101 | Computer Science
2 | Sara | 102 | Electronics`}
    </pre>
    <p>Convert to 3NF 👇</p>
    <pre>
{`Students
StudentID | Name | DeptID
1 | Alex | 101
2 | Sara | 102

Departments
DeptID | DeptName
101 | Computer Science
102 | Electronics`}
    </pre>
    <p className="note">✅ DeptName now depends only on DeptID — table is in 3NF.</p>

    <h2>🧠 4️⃣ Boyce-Codd Normal Form (BCNF)</h2>
    <p><strong>Rule:</strong> Must be in 3NF, and every determinant must be a candidate key.</p>
    <pre>
{`Not in BCNF:
StudentID | Course | Instructor
1 | DBMS | Dr. John
2 | DBMS | Dr. John
3 | AI | Dr. Smith`}
    </pre>
    <p>Convert to BCNF 👇</p>
    <pre>
{`Courses
Course | Instructor
DBMS | Dr. John
AI | Dr. Smith

StudentCourses
StudentID | Course
1 | DBMS
2 | DBMS
3 | AI`}
    </pre>
    <p className="note">✅ Each dependency has a candidate key — in BCNF.</p>

    <h2>🧩 Higher Normal Forms (Optional)</h2>
    <table>
      <thead>
        <tr>
          <th>Normal Form</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>4NF</td><td>Removes multi-valued dependencies</td></tr>
        <tr><td>5NF</td><td>Removes join dependencies</td></tr>
        <tr><td>6NF</td><td>Rarely used — ensures minimal redundancy</td></tr>
      </tbody>
    </table>

    <h2>⚙️ Benefits of Normalization</h2>
    <table>
      <thead>
        <tr><th>Benefit</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>✅ Eliminates redundancy</td><td>No duplicate data</td></tr>
        <tr><td>✅ Ensures data integrity</td><td>Data stays consistent</td></tr>
        <tr><td>✅ Easier updates</td><td>Update one place only</td></tr>
        <tr><td>✅ Improves efficiency</td><td>Optimized storage</td></tr>
        <tr><td>✅ Simplifies relationships</td><td>Clear table connections</td></tr>
      </tbody>
    </table>

    <h2>⚠️ Drawbacks of Over-Normalization</h2>
    <table>
      <thead>
        <tr><th>Drawback</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>❌ Too many tables</td><td>Queries become complex</td></tr>
        <tr><td>❌ Slower joins</td><td>Multiple joins needed</td></tr>
        <tr><td>❌ Overhead for small DBs</td><td>Simple design might be better</td></tr>
      </tbody>
    </table>

    <h2>🧮 Practice Example</h2>
    <pre>
{`Unnormalized:
StudentID | Name | Course1 | Course2
1 | Alex | DBMS | SQL
2 | Sara | Java | HTML

Normalized:
Students
StudentID | Name
1 | Alex
2 | Sara

Courses
CourseID | CourseName
101 | DBMS
102 | SQL
103 | Java
104 | HTML

StudentCourses
StudentID | CourseID
1 | 101
1 | 102
2 | 103
2 | 104`}
    </pre>
    <p className="note">✅ Now the database is in 3NF — clean and efficient.</p>

    <h2>🧠 Summary Table</h2>
    <table>
      <thead>
        <tr>
          <th>Normal Form</th>
          <th>Requirement</th>
          <th>Removes</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1NF</td><td>Each cell has one value</td><td>Repeating groups</td></tr>
        <tr><td>2NF</td><td>Non-key depends on full key</td><td>Partial dependency</td></tr>
        <tr><td>3NF</td><td>No non-key depends on another non-key</td><td>Transitive dependency</td></tr>
        <tr><td>BCNF</td><td>Left side is candidate key</td><td>Remaining anomalies</td></tr>
        <tr><td>4NF/5NF</td><td>Advanced normalization</td><td>Multi-valued & join dependencies</td></tr>
      </tbody>
    </table>

    <p className="note">
      ✅ In short: <strong>Normalization = Clean, efficient, and reliable database design.</strong><br />
      Use 1NF → 2NF → 3NF → BCNF for most practical databases.
    </p>
  </>
)}
{activeSection === "sql-where-clause" && (
  <div className="content-section">
    <h1>🧩 Filtering Data (WHERE Clause)</h1>

    <h2>📘 What is the WHERE Clause?</h2>
    <p className="subtitle">
      The WHERE clause in SQL is used to filter records from a table based on a
      given condition. It allows you to retrieve only the rows that match
      specific criteria.
    </p>
    <p>👉 Think of it like asking: “Show me only those records that meet these conditions.”</p>

    <h2>🧩 Syntax</h2>
    <pre>{`SELECT column1, column2, ...
FROM table_name
WHERE condition;`}</pre>

    <h2>📊 Example Table: Employees</h2>
    <table>
      <thead>
        <tr>
          <th>emp_id</th><th>name</th><th>department</th><th>salary</th><th>city</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>John</td><td>HR</td><td>40000</td><td>Delhi</td></tr>
        <tr><td>2</td><td>Sara</td><td>IT</td><td>55000</td><td>Mumbai</td></tr>
        <tr><td>3</td><td>Alex</td><td>IT</td><td>60000</td><td>Pune</td></tr>
        <tr><td>4</td><td>Riya</td><td>Sales</td><td>45000</td><td>Delhi</td></tr>
        <tr><td>5</td><td>Mohit</td><td>HR</td><td>50000</td><td>Chennai</td></tr>
      </tbody>
    </table>

    <h2>🎯 Example 1: Filter by One Condition</h2>
    <pre>{`SELECT * FROM Employees
WHERE department = 'IT';`}</pre>

    <p>🧠 This query returns only employees whose department is ‘IT’.</p>

    <h2>⚙️ Example 2: Use a Comparison Operator</h2>
    <pre>{`SELECT name, salary
FROM Employees
WHERE salary > 50000;`}</pre>

    <p>🧠 The &gt; operator filters rows where salary is greater than 50,000.</p>

    <h2>🔢 Common Comparison Operators</h2>
    <table>
      <thead>
        <tr><th>Operator</th><th>Meaning</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td>=</td><td>Equal to</td><td>salary = 40000</td></tr>
        <tr><td>!= or &lt;&gt;</td><td>Not equal to</td><td>department != 'HR'</td></tr>
        <tr><td>&gt;</td><td>Greater than</td><td>salary &gt; 50000</td></tr>
        <tr><td>&lt;</td><td>Less than</td><td>salary &lt; 50000</td></tr>
        <tr><td>&gt;=</td><td>Greater than or equal to</td><td>salary &gt;= 50000</td></tr>
        <tr><td>&lt;=</td><td>Less than or equal to</td><td>salary &lt;= 50000</td></tr>
      </tbody>
    </table>

    <h2>🧩 Example 3: Combine Conditions with AND / OR</h2>
    <pre>{`SELECT name, department, city
FROM Employees
WHERE department = 'IT' AND city = 'Pune';`}</pre>

    <p>🧠 AND means both conditions must be true.</p>

    <pre>{`SELECT name, department
FROM Employees
WHERE department = 'HR' OR city = 'Delhi';`}</pre>
    <p>🧠 OR means any one of the conditions can be true.</p>

    <h2>⚙️ Example 4: Use BETWEEN for Range</h2>
    <pre>{`SELECT name, salary
FROM Employees
WHERE salary BETWEEN 45000 AND 60000;`}</pre>
    <p>🧠 BETWEEN includes both boundary values (45000 and 60000).</p>

    <h2>🧩 Example 5: Use IN for Multiple Values</h2>
    <pre>{`SELECT name, department
FROM Employees
WHERE department IN ('HR', 'Sales');`}</pre>
    <p>🧠 IN acts like multiple OR conditions — it checks if a value matches any in the list.</p>

    <h2>🎯 Example 6: Use LIKE for Pattern Matching</h2>
    <pre>{`SELECT name
FROM Employees
WHERE name LIKE 'S%';`}</pre>
    <p>🧠 LIKE is used for text pattern matching using wildcards such as %.</p>

    <h2>⚙️ Example 7: Use IS NULL / IS NOT NULL</h2>
    <pre>{`SELECT name
FROM Employees
WHERE city IS NULL;`}</pre>
    <p>🧠 Checks for missing (NULL) values. Use IS NOT NULL to find rows where a column has a value.</p>

    <h2>🧠 Example 8: Use NOT Keyword</h2>
    <pre>{`SELECT name, department
FROM Employees
WHERE NOT department = 'IT';`}</pre>
    <p>🧠 NOT reverses the result — shows rows where the condition is false.</p>

    <h2>⚡ Example 9: Combine Multiple Operators</h2>
    <pre>{`SELECT name, salary, city
FROM Employees
WHERE (department = 'IT' OR department = 'HR')
AND salary >= 50000;`}</pre>
    <p>🧠 Parentheses () control the order of conditions — filters employees who are in IT or HR and earn at least 50,000.</p>

    <h2>🧮 Practice Tip</h2>
    <p>
      Try forming queries like:
      <pre>{`SELECT * FROM Employees
WHERE city = 'Delhi' AND salary < 50000;`}</pre>
      Then modify it using <b>OR</b>, <b>IN</b>, <b>BETWEEN</b>, <b>LIKE</b> to strengthen your SQL filtering skills.
    </p>

    <h2>🧠 Summary Table</h2>
    <table>
      <thead>
        <tr><th>Keyword</th><th>Use</th></tr>
      </thead>
      <tbody>
        <tr><td>WHERE</td><td>Filter records based on condition</td></tr>
        <tr><td>AND / OR</td><td>Combine multiple conditions</td></tr>
        <tr><td>IN</td><td>Match multiple values</td></tr>
        <tr><td>BETWEEN</td><td>Match a range</td></tr>
        <tr><td>LIKE</td><td>Match patterns</td></tr>
        <tr><td>IS NULL</td><td>Check for NULL values</td></tr>
        <tr><td>NOT</td><td>Negate a condition</td></tr>
      </tbody>
    </table>

    <p className="summary-note">
      ✅ In short: The WHERE clause is your filter — it helps you fetch only the data you need, not everything in the table.
    </p>
  </div>
)}
{activeSection === "sql-sorting" && (
  <div className="content-section">
    <h1>🧱 Sorting Data (ORDER BY Clause)</h1>

    <h2>📘 What is Sorting in SQL?</h2>
    <p className="subtitle">
      Sorting means arranging the retrieved records in a specific order —
      ascending (A–Z / smallest to largest) or descending (Z–A / largest to
      smallest). SQL uses the <b>ORDER BY</b> clause to sort results.
    </p>

    <h2>🧩 Syntax</h2>
    <pre>{`SELECT column1, column2, ...
FROM table_name
ORDER BY column_name [ASC | DESC];`}</pre>

    <table>
      <thead>
        <tr><th>Keyword</th><th>Meaning</th></tr>
      </thead>
      <tbody>
        <tr><td>ASC</td><td>Ascending order (default)</td></tr>
        <tr><td>DESC</td><td>Descending order</td></tr>
      </tbody>
    </table>

    <h2>📊 Example Table: Employees</h2>
    <table>
      <thead>
        <tr>
          <th>emp_id</th><th>name</th><th>department</th><th>salary</th><th>city</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>John</td><td>HR</td><td>40000</td><td>Delhi</td></tr>
        <tr><td>2</td><td>Sara</td><td>IT</td><td>55000</td><td>Mumbai</td></tr>
        <tr><td>3</td><td>Alex</td><td>IT</td><td>60000</td><td>Pune</td></tr>
        <tr><td>4</td><td>Riya</td><td>Sales</td><td>45000</td><td>Delhi</td></tr>
        <tr><td>5</td><td>Mohit</td><td>HR</td><td>50000</td><td>Chennai</td></tr>
      </tbody>
    </table>

    <h2>🧩 Example 1: Sort by One Column (Ascending)</h2>
    <pre>{`SELECT * FROM Employees
ORDER BY salary;`}</pre>
    <p>🧠 Sorted by salary from lowest to highest. Ascending order (ASC) is the default if not mentioned.</p>

    <h2>⚙️ Example 2: Sort by One Column (Descending)</h2>
    <pre>{`SELECT name, salary
FROM Employees
ORDER BY salary DESC;`}</pre>
    <p>🧠 Sorted by salary from highest to lowest.</p>

    <h2>🧩 Example 3: Sort by Text Column (Alphabetically)</h2>
    <pre>{`SELECT name, city
FROM Employees
ORDER BY name ASC;`}</pre>
    <p>🧠 Sorts names in alphabetical order (A–Z).</p>

    <h2>⚙️ Example 4: Sort by Multiple Columns</h2>
    <pre>{`SELECT name, department, salary
FROM Employees
ORDER BY department ASC, salary DESC;`}</pre>
    <p>🧠 First sorts by department alphabetically (A–Z). Within each department, sorts by salary from highest to lowest.</p>

    <h2>🧮 Example 5: Using Column Position (Not Recommended)</h2>
    <pre>{`SELECT name, department, salary
FROM Employees
ORDER BY 3 DESC;`}</pre>
    <p>🧠 The number 3 refers to the 3rd column in the SELECT list (salary). Although this works, it’s better to use column names for clarity.</p>

    <h2>⚡ Example 6: Sort with WHERE Clause</h2>
    <pre>{`SELECT name, salary
FROM Employees
WHERE department = 'IT'
ORDER BY salary DESC;`}</pre>
    <p>🧠 First filters (WHERE department = 'IT'), then sorts the filtered records by salary (highest first).</p>

    <h2>🧠 Example 7: Sort with NULL Values</h2>
    <pre>{`SELECT name, salary
FROM Employees
ORDER BY salary DESC NULLS LAST;`}</pre>
    <p>🧠 Some databases allow control over where NULL values appear — at the start or end. <b>NULLS LAST</b> ensures null values come after all real values.</p>

    <h2>💡 Tip: Combine WHERE and ORDER BY</h2>
    <pre>{`SELECT name, city, salary
FROM Employees
WHERE city = 'Delhi'
ORDER BY salary DESC;`}</pre>
    <p>🧠 Retrieves employees from Delhi and sorts them by salary (highest to lowest).</p>

    <h2>🧩 Example 8: Sort by Expression</h2>
    <pre>{`SELECT name, salary * 12 AS annual_salary
FROM Employees
ORDER BY annual_salary DESC;`}</pre>
    <p>🧠 Calculates annual salary (monthly × 12) and sorts by this calculated column.</p>

    <h2>🧠 Summary Table</h2>
    <table>
      <thead>
        <tr><th>Keyword / Concept</th><th>Description</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td>ORDER BY</td><td>Sorts the result set</td><td>ORDER BY salary</td></tr>
        <tr><td>ASC</td><td>Ascending order (default)</td><td>ORDER BY name ASC</td></tr>
        <tr><td>DESC</td><td>Descending order</td><td>ORDER BY salary DESC</td></tr>
        <tr><td>Multiple Columns</td><td>Sort by more than one column</td><td>ORDER BY dept, salary DESC</td></tr>
        <tr><td>Expression Sorting</td><td>Sort by calculated value</td><td>ORDER BY salary * 12</td></tr>
      </tbody>
    </table>

    <p className="summary-note">
      ✅ In short: The ORDER BY clause helps organize your query results —
      showing them from smallest to largest, A–Z, or any order you need.
    </p>
  </div>
)}
{activeSection === "sql-grouping" && (
  <>
    <h1>🧭 Grouping Data (GROUP BY Clause)</h1>
    <p className="subtitle">
      The <b>GROUP BY</b> clause in SQL is used to arrange identical data into
      groups. It’s commonly used with aggregate functions like{" "}
      <code>COUNT()</code>, <code>SUM()</code>, <code>AVG()</code>,{" "}
      <code>MIN()</code>, and <code>MAX()</code> to summarize information.
    </p>

    <p>
      👉 Think of it like: <br />
      <b>“Group my data based on a column, and then calculate something for each
      group.”</b>
    </p>

    <h2>🧩 Syntax</h2>
    <pre className="code-block">
      {`SELECT column1, AGGREGATE_FUNCTION(column2)
FROM table_name
GROUP BY column1;`}
    </pre>

    <table className="styled-table">
      <thead>
        <tr>
          <th>Term</th>
          <th>Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AGGREGATE_FUNCTION()</td>
          <td>Performs a calculation (like total, average, etc.)</td>
        </tr>
        <tr>
          <td>GROUP BY</td>
          <td>Groups rows with the same values in specified column(s)</td>
        </tr>
      </tbody>
    </table>

    <h2>📊 Example Table: Employees</h2>
    <table className="styled-table">
      <thead>
        <tr>
          <th>emp_id</th>
          <th>name</th>
          <th>department</th>
          <th>salary</th>
          <th>city</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>John</td><td>HR</td><td>40000</td><td>Delhi</td></tr>
        <tr><td>2</td><td>Sara</td><td>IT</td><td>55000</td><td>Mumbai</td></tr>
        <tr><td>3</td><td>Alex</td><td>IT</td><td>60000</td><td>Pune</td></tr>
        <tr><td>4</td><td>Riya</td><td>Sales</td><td>45000</td><td>Delhi</td></tr>
        <tr><td>5</td><td>Mohit</td><td>HR</td><td>50000</td><td>Chennai</td></tr>
        <tr><td>6</td><td>Neha</td><td>IT</td><td>55000</td><td>Mumbai</td></tr>
      </tbody>
    </table>

    <h2>🎯 Example 1: Count Employees in Each Department</h2>
    <pre className="code-block">
      {`SELECT department, COUNT(*) AS total_employees
FROM Employees
GROUP BY department;`}
    </pre>

    <h3>Output:</h3>
    <table className="styled-table">
      <thead>
        <tr>
          <th>department</th>
          <th>total_employees</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>HR</td><td>2</td></tr>
        <tr><td>IT</td><td>3</td></tr>
        <tr><td>Sales</td><td>1</td></tr>
      </tbody>
    </table>

    <p className="explanation">
      🧠 Groups rows by <b>department</b> and counts employees in each group.
    </p>

    <h2>⚙️ Example 2: Total Salary by Department</h2>
    <pre className="code-block">
      {`SELECT department, SUM(salary) AS total_salary
FROM Employees
GROUP BY department;`}
    </pre>

    <h3>Output:</h3>
    <table className="styled-table">
      <thead>
        <tr><th>department</th><th>total_salary</th></tr>
      </thead>
      <tbody>
        <tr><td>HR</td><td>90000</td></tr>
        <tr><td>IT</td><td>170000</td></tr>
        <tr><td>Sales</td><td>45000</td></tr>
      </tbody>
    </table>

    <p className="explanation">
      🧠 Calculates the total salary for each department using{" "}
      <code>SUM()</code>.
    </p>

    <h2>🧩 Example 3: Average Salary by Department</h2>
    <pre className="code-block">
      {`SELECT department, AVG(salary) AS average_salary
FROM Employees
GROUP BY department;`}
    </pre>

    <h3>Output:</h3>
    <table className="styled-table">
      <thead>
        <tr><th>department</th><th>average_salary</th></tr>
      </thead>
      <tbody>
        <tr><td>HR</td><td>45000</td></tr>
        <tr><td>IT</td><td>56666.67</td></tr>
        <tr><td>Sales</td><td>45000</td></tr>
      </tbody>
    </table>

    <p className="explanation">
      🧠 Finds the <b>average salary</b> for each department.
    </p>

    <h2>🧠 Common Aggregate Functions (Used with GROUP BY)</h2>
    <table className="styled-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>COUNT()</td><td>Counts number of rows</td><td>COUNT(*)</td></tr>
        <tr><td>SUM()</td><td>Adds up values</td><td>SUM(salary)</td></tr>
        <tr><td>AVG()</td><td>Finds average</td><td>AVG(salary)</td></tr>
        <tr><td>MIN()</td><td>Finds minimum</td><td>MIN(salary)</td></tr>
        <tr><td>MAX()</td><td>Finds maximum</td><td>MAX(salary)</td></tr>
      </tbody>
    </table>

    <h2>🧠 Summary Table</h2>
    <table className="styled-table">
      <thead>
        <tr>
          <th>Clause</th>
          <th>Purpose</th>
          <th>When It’s Applied</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>WHERE</td><td>Filters rows before grouping</td><td>Before GROUP BY</td></tr>
        <tr><td>GROUP BY</td><td>Groups rows based on columns</td><td>After WHERE</td></tr>
        <tr><td>HAVING</td><td>Filters groups based on aggregate results</td><td>After GROUP BY</td></tr>
        <tr><td>ORDER BY</td><td>Sorts the final result</td><td>Last step</td></tr>
      </tbody>
    </table>

    <p className="summary">
      ✅ <b>In short:</b> <br />
      The <b>GROUP BY</b> clause helps you summarize data — turning large tables
      into meaningful insights like totals, averages, and counts.
    </p>
  </>
)}
{/* 🧮 Filtering Groups (HAVING Clause) */}
{activeSection === "sql-filtering-groups" && (
  <>
    <h1>🧮 Filtering Groups (HAVING Clause)</h1>
    <p className="subtitle">
      The <b>HAVING</b> clause in SQL filters groups of rows created by the
      <b> GROUP BY </b> clause.  
      It’s like <b>WHERE</b>, but it filters <b>after grouping</b>.
    </p>

    <ul>
      <li>🔹 WHERE filters rows before grouping</li>
      <li>🔹 HAVING filters groups after grouping</li>
    </ul>

    <h2>🧩 Syntax</h2>
    <pre className="code-block">
{`SELECT column1, AGGREGATE_FUNCTION(column2)
FROM table_name
GROUP BY column1
HAVING condition;`}
    </pre>

    <table className="keyword-table">
      <thead>
        <tr>
          <th>Keyword</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>GROUP BY</td>
          <td>Groups rows that have the same values</td>
        </tr>
        <tr>
          <td>HAVING</td>
          <td>Applies conditions on aggregated/grouped data</td>
        </tr>
      </tbody>
    </table>

    <h2>📊 Example Table: Sales</h2>
    <table className="example-table">
      <thead>
        <tr>
          <th>id</th>
          <th>salesman</th>
          <th>region</th>
          <th>sales_amount</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>John</td><td>East</td><td>10000</td></tr>
        <tr><td>2</td><td>Sarah</td><td>West</td><td>8000</td></tr>
        <tr><td>3</td><td>David</td><td>East</td><td>12000</td></tr>
        <tr><td>4</td><td>Maria</td><td>West</td><td>7000</td></tr>
        <tr><td>5</td><td>Alex</td><td>North</td><td>15000</td></tr>
        <tr><td>6</td><td>Priya</td><td>East</td><td>9000</td></tr>
        <tr><td>7</td><td>Raj</td><td>North</td><td>11000</td></tr>
      </tbody>
    </table>

    <h2>🎯 Example 1: Total Sales by Region</h2>
    <pre className="code-block">
{`SELECT region, SUM(sales_amount) AS total_sales
FROM Sales
GROUP BY region;`}
    </pre>

    <h3>Output:</h3>
    <table className="output-table">
      <thead>
        <tr><th>region</th><th>total_sales</th></tr>
      </thead>
      <tbody>
        <tr><td>East</td><td>31000</td></tr>
        <tr><td>West</td><td>15000</td></tr>
        <tr><td>North</td><td>26000</td></tr>
      </tbody>
    </table>

    <p className="explanation">
      🧠 Groups rows by region and sums up sales for each region.
    </p>

    <h2>⚙️ Example 2: Using HAVING to Filter Groups</h2>
    <pre className="code-block">
{`SELECT region, SUM(sales_amount) AS total_sales
FROM Sales
GROUP BY region
HAVING SUM(sales_amount) > 20000;`}
    </pre>

    <h3>Output:</h3>
    <table className="output-table">
      <thead>
        <tr><th>region</th><th>total_sales</th></tr>
      </thead>
      <tbody>
        <tr><td>East</td><td>31000</td></tr>
        <tr><td>North</td><td>26000</td></tr>
      </tbody>
    </table>

    <p className="explanation">
      HAVING filters out groups where <b>total_sales ≤ 20000</b>.
    </p>

    <h2>🧩 Example 3: HAVING vs WHERE</h2>
    <pre className="code-block">
{`SELECT region, SUM(sales_amount) AS total_sales
FROM Sales
WHERE salesman != 'Maria'
GROUP BY region
HAVING SUM(sales_amount) > 20000;`}
    </pre>

    <p className="explanation">
      WHERE removes Maria’s row before grouping, and HAVING filters grouped results.
    </p>

    <h2>⚙️ Example 4: HAVING with COUNT()</h2>
    <pre className="code-block">
{`SELECT region, COUNT(*) AS total_salespersons
FROM Sales
GROUP BY region
HAVING COUNT(*) > 2;`}
    </pre>

    <h3>Output:</h3>
    <table className="output-table">
      <thead>
        <tr><th>region</th><th>total_salespersons</th></tr>
      </thead>
      <tbody>
        <tr><td>East</td><td>3</td></tr>
      </tbody>
    </table>

    <h2>🧮 Example 5: Multiple Conditions in HAVING</h2>
    <pre className="code-block">
{`SELECT region, SUM(sales_amount) AS total_sales, AVG(sales_amount) AS avg_sales
FROM Sales
GROUP BY region
HAVING SUM(sales_amount) > 20000 AND AVG(sales_amount) > 8000;`}
    </pre>

    <h3>Output:</h3>
    <table className="output-table">
      <thead>
        <tr><th>region</th><th>total_sales</th><th>avg_sales</th></tr>
      </thead>
      <tbody>
        <tr><td>East</td><td>31000</td><td>10333.33</td></tr>
        <tr><td>North</td><td>26000</td><td>13000</td></tr>
      </tbody>
    </table>

    <h2>⚙️ Example 6: HAVING Without GROUP BY</h2>
    <pre className="code-block">
{`SELECT SUM(sales_amount) AS total_sales
FROM Sales
HAVING SUM(sales_amount) > 50000;`}
    </pre>

    <h3>Output:</h3>
    <table className="output-table">
      <thead><tr><th>total_sales</th></tr></thead>
      <tbody><tr><td>72000</td></tr></tbody>
    </table>

    <h2>🧩 Example 7: Combine HAVING and ORDER BY</h2>
    <pre className="code-block">
{`SELECT region, SUM(sales_amount) AS total_sales
FROM Sales
GROUP BY region
HAVING SUM(sales_amount) > 15000
ORDER BY total_sales DESC;`}
    </pre>

    <h3>Output:</h3>
    <table className="output-table">
      <thead>
        <tr><th>region</th><th>total_sales</th></tr>
      </thead>
      <tbody>
        <tr><td>East</td><td>31000</td></tr>
        <tr><td>North</td><td>26000</td></tr>
        <tr><td>West</td><td>15000</td></tr>
      </tbody>
    </table>

    <h2>🧠 HAVING vs WHERE — Key Differences</h2>
    <table className="comparison-table">
      <thead>
        <tr><th>Feature</th><th>WHERE</th><th>HAVING</th></tr>
      </thead>
      <tbody>
        <tr><td>Used on</td><td>Rows</td><td>Groups</td></tr>
        <tr><td>Works with aggregates</td><td>❌ No</td><td>✅ Yes</td></tr>
        <tr><td>Executes</td><td>Before GROUP BY</td><td>After GROUP BY</td></tr>
        <tr><td>Example</td><td>WHERE salary &gt; 50000</td><td>HAVING AVG(salary) &gt; 50000</td></tr>
      </tbody>
    </table>

    <h2>⚡ Quick Summary</h2>
    <table className="summary-table">
      <thead><tr><th>Step</th><th>Clause</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td>1️⃣</td><td>WHERE</td><td>Filters rows before grouping</td></tr>
        <tr><td>2️⃣</td><td>GROUP BY</td><td>Groups rows into sets</td></tr>
        <tr><td>3️⃣</td><td>HAVING</td><td>Filters groups based on aggregate values</td></tr>
        <tr><td>4️⃣</td><td>ORDER BY</td><td>Sorts final results</td></tr>
      </tbody>
    </table>

    <p className="subtitle">
      ✅ Use <b>HAVING</b> to filter grouped or aggregated results — something <b>WHERE</b> can’t do.
    </p>
  </>
)}

{/* 🧱 SQL Aliases */}
{activeSection === "sql-aliases" && (
  <>
    <h1>🧱 SQL Aliases</h1>
    <p className="subtitle">
      An <b>alias</b> is a temporary name given to a table or column in an SQL query.
      It makes query results easier to read and write — especially in complex queries.
      <br />
      💡 Aliases only exist while the query runs; they do not modify actual database names.
    </p>

    <h2>🧩 Syntax</h2>
    <h3>🧱 For Columns:</h3>
    <pre className="code-block">
{`SELECT column_name AS alias_name
FROM table_name;`}
    </pre>

    <h3>🧭 For Tables:</h3>
    <pre className="code-block">
{`SELECT column_name
FROM table_name AS alias_name;`}
    </pre>

    <p className="subtitle">
      🔹 The keyword <b>AS</b> is optional — both{" "}
      <code>SELECT name AS employee_name</code> and{" "}
      <code>SELECT name employee_name</code> work the same.
    </p>

    <h2>📊 Example Table: Employees</h2>
    <table className="example-table">
      <thead>
        <tr>
          <th>emp_id</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>department</th>
          <th>salary</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>John</td><td>Doe</td><td>HR</td><td>40000</td></tr>
        <tr><td>2</td><td>Sara</td><td>Khan</td><td>IT</td><td>55000</td></tr>
        <tr><td>3</td><td>Alex</td><td>Brown</td><td>Sales</td><td>60000</td></tr>
      </tbody>
    </table>

    <h2>🧩 Example 1: Column Alias</h2>
    <pre className="code-block">
{`SELECT first_name AS Name, salary AS "Monthly Salary"
FROM Employees;`}
    </pre>

    <h3>Output:</h3>
    <table className="output-table">
      <thead><tr><th>Name</th><th>Monthly Salary</th></tr></thead>
      <tbody>
        <tr><td>John</td><td>40000</td></tr>
        <tr><td>Sara</td><td>55000</td></tr>
        <tr><td>Alex</td><td>60000</td></tr>
      </tbody>
    </table>

    <p className="explanation">
      🧠 <b>AS</b> renames columns in the result set.  
      Double quotes (" ") allow aliases with spaces.
    </p>

    <h2>⚙️ Example 2: Alias Without AS</h2>
    <pre className="code-block">
{`SELECT first_name Name, department Dept
FROM Employees;`}
    </pre>

    <h3>Output:</h3>
    <table className="output-table">
      <thead><tr><th>Name</th><th>Dept</th></tr></thead>
      <tbody>
        <tr><td>John</td><td>HR</td></tr>
        <tr><td>Sara</td><td>IT</td></tr>
        <tr><td>Alex</td><td>Sales</td></tr>
      </tbody>
    </table>

    <p className="explanation">
      Works the same way as <b>AS</b> — just shorter syntax.
    </p>

    <h2>🧩 Example 3: Alias with Calculated Columns</h2>
    <pre className="code-block">
{`SELECT first_name, salary * 12 AS annual_salary
FROM Employees;`}
    </pre>

    <h3>Output:</h3>
    <table className="output-table">
      <thead><tr><th>first_name</th><th>annual_salary</th></tr></thead>
      <tbody>
        <tr><td>John</td><td>480000</td></tr>
        <tr><td>Sara</td><td>660000</td></tr>
        <tr><td>Alex</td><td>720000</td></tr>
      </tbody>
    </table>

    <p className="explanation">
      The alias <b>annual_salary</b> names the computed column (<code>salary * 12</code>).
    </p>

    <h2>⚙️ Example 4: Table Alias (Short Names)</h2>
    <pre className="code-block">
{`SELECT e.first_name, e.salary
FROM Employees AS e;`}
    </pre>

    <h3>Output:</h3>
    <table className="output-table">
      <thead><tr><th>first_name</th><th>salary</th></tr></thead>
      <tbody>
        <tr><td>John</td><td>40000</td></tr>
        <tr><td>Sara</td><td>55000</td></tr>
        <tr><td>Alex</td><td>60000</td></tr>
      </tbody>
    </table>

    <p className="explanation">
      🧠 The table <b>Employees</b> is temporarily renamed as <b>e</b>.
      Useful in long or multi-table queries.
    </p>

    <h2>🧩 Example 5: Aliases in Joins</h2>
    <pre className="code-block">
{`SELECT e.first_name, d.dept_name
FROM Employees AS e
JOIN Departments AS d
ON e.department = d.dept_name;`}
    </pre>

    <h3>Output:</h3>
    <table className="output-table">
      <thead><tr><th>first_name</th><th>dept_name</th></tr></thead>
      <tbody>
        <tr><td>John</td><td>HR</td></tr>
        <tr><td>Sara</td><td>IT</td></tr>
        <tr><td>Alex</td><td>Sales</td></tr>
      </tbody>
    </table>

    <p className="explanation">
      Aliases <b>e</b> and <b>d</b> make the query shorter and cleaner.  
      They connect tables via <code>e.department = d.dept_name</code>.
    </p>

    <h2>⚙️ Example 6: Alias with Concatenation</h2>
    <pre className="code-block">
{`SELECT first_name || ' ' || last_name AS full_name
FROM Employees;`}
    </pre>

    <h3>Output:</h3>
    <table className="output-table">
      <thead><tr><th>full_name</th></tr></thead>
      <tbody>
        <tr><td>John Doe</td></tr>
        <tr><td>Sara Khan</td></tr>
        <tr><td>Alex Brown</td></tr>
      </tbody>
    </table>

    <p className="explanation">
      Combines two columns using concatenation and names the result <b>full_name</b>.
    </p>

    <h2>⚡ Example 7: Alias with Aggregation</h2>
    <pre className="code-block">
{`SELECT department AS Dept, AVG(salary) AS Avg_Salary
FROM Employees
GROUP BY department;`}
    </pre>

    <h3>Output:</h3>
    <table className="output-table">
      <thead><tr><th>Dept</th><th>Avg_Salary</th></tr></thead>
      <tbody>
        <tr><td>HR</td><td>40000</td></tr>
        <tr><td>IT</td><td>55000</td></tr>
        <tr><td>Sales</td><td>60000</td></tr>
      </tbody>
    </table>

    <h2>🧠 Important Notes</h2>
    <table className="keyword-table">
      <thead><tr><th>Concept</th><th>Explanation</th></tr></thead>
      <tbody>
        <tr><td>Aliases are temporary</td><td>They exist only while the query runs</td></tr>
        <tr><td>AS keyword is optional</td><td>Both AS alias and just alias work</td></tr>
        <tr><td>Use quotes for spaces</td><td>Example: AS "Total Salary"</td></tr>
        <tr><td>Used in joins & subqueries</td><td>Makes long queries easier to read</td></tr>
      </tbody>
    </table>

    <h2>💡 Real-Life Use Case</h2>
    <pre className="code-block">
{`SELECT e.first_name AS "Employee Name",
       e.salary AS "Monthly Pay",
       e.salary * 12 AS "Annual Pay"
FROM Employees e
WHERE e.salary > 45000;`}
    </pre>

    <h3>Output:</h3>
    <table className="output-table">
      <thead>
        <tr><th>Employee Name</th><th>Monthly Pay</th><th>Annual Pay</th></tr>
      </thead>
      <tbody>
        <tr><td>Sara</td><td>55000</td><td>660000</td></tr>
        <tr><td>Alex</td><td>60000</td><td>720000</td></tr>
      </tbody>
    </table>

    <p className="explanation">
      🧠 Aliases make reports clearer and more readable for end users and analysts.
    </p>

    <h2>🧾 Summary Table</h2>
    <table className="summary-table">
      <thead><tr><th>Type</th><th>Example</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td>Column Alias</td><td>salary AS Monthly_Income</td><td>Rename column output</td></tr>
        <tr><td>Table Alias</td><td>Employees AS e</td><td>Shorten table names</td></tr>
        <tr><td>Without AS</td><td>salary Monthly_Income</td><td>Same as above (short form)</td></tr>
        <tr><td>Alias with Space</td><td>AS "Total Sales"</td><td>Readable names with spaces</td></tr>
      </tbody>
    </table>

    <p className="subtitle">
      ✅ In short: <b>Aliases</b> make SQL queries <b>cleaner, shorter, and more readable</b> —
      they rename tables or columns temporarily for better understanding.
    </p>
  </>
)}
{activeSection === "sql-set-operations" && (
  <>
    <h1>⚙️ Set Operations in SQL</h1>
    <p className="subtitle">
      Set operations allow you to combine results of two or more <code>SELECT</code> queries — just like mathematical sets: <b>Union</b>, <b>Intersection</b>, and <b>Difference</b>.
    </p>

    <h2>🧩 Types of Set Operations</h2>
    <table>
      <tr><th>Operation</th><th>Description</th></tr>
      <tr><td>UNION</td><td>Combines results and removes duplicates</td></tr>
      <tr><td>UNION ALL</td><td>Combines results and keeps duplicates</td></tr>
      <tr><td>INTERSECT</td><td>Returns common rows from both queries</td></tr>
      <tr><td>EXCEPT / MINUS</td><td>Returns rows in the first query not found in the second</td></tr>
    </table>

    <h2>📊 Example Tables</h2>
    <h3>🧱 Employees_2024</h3>
    <table>
      <tr><th>emp_id</th><th>name</th><th>department</th></tr>
      <tr><td>1</td><td>John</td><td>HR</td></tr>
      <tr><td>2</td><td>Sara</td><td>IT</td></tr>
      <tr><td>3</td><td>Alex</td><td>Sales</td></tr>
      <tr><td>4</td><td>Riya</td><td>Marketing</td></tr>
    </table>

    <h3>🧱 Employees_2025</h3>
    <table>
      <tr><th>emp_id</th><th>name</th><th>department</th></tr>
      <tr><td>3</td><td>Alex</td><td>Sales</td></tr>
      <tr><td>4</td><td>Riya</td><td>Marketing</td></tr>
      <tr><td>5</td><td>Mohit</td><td>IT</td></tr>
      <tr><td>6</td><td>Neha</td><td>HR</td></tr>
    </table>

    <h2>🧩 1️⃣ UNION — Combine and Remove Duplicates</h2>
    <pre>
{`SELECT name, department FROM Employees_2024
UNION
SELECT name, department FROM Employees_2025;`}
    </pre>
    <p><b>Output:</b></p>
    <table>
      <tr><th>name</th><th>department</th></tr>
      <tr><td>John</td><td>HR</td></tr>
      <tr><td>Sara</td><td>IT</td></tr>
      <tr><td>Alex</td><td>Sales</td></tr>
      <tr><td>Riya</td><td>Marketing</td></tr>
      <tr><td>Mohit</td><td>IT</td></tr>
      <tr><td>Neha</td><td>HR</td></tr>
    </table>
    <p className="note">✅ Removes duplicate rows automatically.</p>

    <h2>⚙️ 2️⃣ UNION ALL — Keep Duplicates</h2>
    <pre>
{`SELECT name, department FROM Employees_2024
UNION ALL
SELECT name, department FROM Employees_2025;`}
    </pre>
    <p className="note">⚡ Keeps duplicates; faster than UNION.</p>

    <h2>🧮 3️⃣ INTERSECT — Common Records</h2>
    <pre>
{`SELECT name, department FROM Employees_2024
INTERSECT
SELECT name, department FROM Employees_2025;`}
    </pre>
    <p className="note">🧠 Returns only rows that exist in both tables.</p>

    <h2>⚡ 4️⃣ EXCEPT / MINUS — Unique to First Query</h2>
    <pre>
{`SELECT name, department FROM Employees_2024
EXCEPT
SELECT name, department FROM Employees_2025;`}
    </pre>
    <p className="note">🧠 Shows employees from 2024 not in 2025.</p>

    <h2>🧩 Example — Combine Multiple Operations</h2>
    <pre>
{`(SELECT name, department FROM Employees_2024
UNION
SELECT name, department FROM Employees_2025)
EXCEPT
(SELECT name, department FROM Employees_2025 WHERE department = 'IT');`}
    </pre>

    <h2>🧩 Example — ORDER BY with Set Operations</h2>
    <pre>
{`SELECT name, department FROM Employees_2024
UNION
SELECT name, department FROM Employees_2025
ORDER BY name ASC;`}
    </pre>
    <p className="note">📘 ORDER BY must come after all SELECTs.</p>

    <h2>🧠 Comparison Summary</h2>
    <table>
      <tr><th>Operation</th><th>Removes Duplicates</th><th>Keeps All</th><th>Shows Common</th><th>Shows Unique</th></tr>
      <tr><td>UNION</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
      <tr><td>UNION ALL</td><td>❌</td><td>✅</td><td>❌</td><td>❌</td></tr>
      <tr><td>INTERSECT</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td></tr>
      <tr><td>EXCEPT / MINUS</td><td>✅</td><td>❌</td><td>❌</td><td>✅</td></tr>
    </table>

    <h2>💡 Real-Life Example</h2>
    <pre>
{`-- Find all customers (old + new)
SELECT customer_name FROM Old_Customers
UNION
SELECT customer_name FROM New_Customers;

-- Common customers
SELECT customer_name FROM Old_Customers
INTERSECT
SELECT customer_name FROM New_Customers;

-- New customers only
SELECT customer_name FROM New_Customers
EXCEPT
SELECT customer_name FROM Old_Customers;`}
    </pre>

    <h2>🧾 Quick Recap</h2>
    <table>
      <tr><th>Operation</th><th>Use Case</th><th>Example</th></tr>
      <tr><td>UNION</td><td>Combine data without duplicates</td><td>Merge employee lists</td></tr>
      <tr><td>UNION ALL</td><td>Combine all data</td><td>Combine transaction logs</td></tr>
      <tr><td>INTERSECT</td><td>Find common data</td><td>Employees in both years</td></tr>
      <tr><td>EXCEPT / MINUS</td><td>Find unique data</td><td>Employees who left company</td></tr>
    </table>
  </>
)}
{activeSection === "sql-transactions" && (
  <>
    <h1>🧩 SQL Transactions</h1>
    <p className="subtitle">
      A <b>Transaction</b> is a group of one or more SQL operations (like
      <code> INSERT</code>, <code> UPDATE</code>, or <code> DELETE</code>) executed as a
      single logical unit of work. <br /> 💡 Either all statements succeed, or none of
      them do — ensuring the database remains consistent.
    </p>

    <h2>📘 Simple Definition</h2>
    <p>“A transaction is like an all-or-nothing operation.”</p>

    <h2>🧱 Example Scenario</h2>
    <p>
      Imagine transferring ₹1000 from Alice’s account to Bob’s account. Both debit and
      credit must succeed together.
    </p>
    <ol>
      <li>Deduct ₹1000 from Alice’s account</li>
      <li>Add ₹1000 to Bob’s account</li>
    </ol>
    <p className="note">
      ✅ A transaction ensures both succeed or both fail — no money is lost.
    </p>

    <h2>🧩 Transaction Control Commands (TCL)</h2>
    <table>
      <tr><th>Command</th><th>Description</th></tr>
      <tr><td>BEGIN / START TRANSACTION</td><td>Starts a new transaction</td></tr>
      <tr><td>COMMIT</td><td>Saves all changes made during the transaction</td></tr>
      <tr><td>ROLLBACK</td><td>Cancels all changes made during the transaction</td></tr>
      <tr><td>SAVEPOINT</td><td>Creates a temporary point within a transaction</td></tr>
      <tr><td>ROLLBACK TO SAVEPOINT</td><td>Undo changes up to a specific savepoint</td></tr>
    </table>

    <h2>⚙️ 1️⃣ START TRANSACTION / BEGIN</h2>
    <pre>
{`START TRANSACTION;
-- or
BEGIN;`}
    </pre>

    <h2>⚙️ 2️⃣ COMMIT</h2>
    <pre>{`COMMIT;`}</pre>
    <p className="note">Once committed, changes cannot be undone.</p>

    <h2>⚙️ 3️⃣ ROLLBACK</h2>
    <pre>{`ROLLBACK;`}</pre>
    <p className="note">Cancels all uncommitted changes since the transaction began.</p>

    <h2>⚙️ 4️⃣ SAVEPOINT</h2>
    <pre>{`SAVEPOINT savepoint_name;`}</pre>

    <h2>⚙️ 5️⃣ ROLLBACK TO SAVEPOINT</h2>
    <pre>{`ROLLBACK TO SAVEPOINT savepoint_name;`}</pre>

    <h2>🧮 Example: Bank Transfer</h2>
    <pre>
{`START TRANSACTION;

UPDATE Accounts
SET balance = balance - 1000
WHERE name = 'Alice';

UPDATE Accounts
SET balance = balance + 1000
WHERE name = 'Bob';

COMMIT;`}
    </pre>
    <p className="note">
      Ensures both debit and credit succeed or both are rolled back.
    </p>

    <h2>⚙️ Example: Using ROLLBACK</h2>
    <pre>
{`START TRANSACTION;

UPDATE Accounts
SET balance = balance - 2000
WHERE name = 'Alice';

UPDATE Accounts
SET balance = balance + 2000
WHERE name = 'UnknownUser'; -- ❌ This will fail

ROLLBACK;`}
    </pre>
    <p className="note">💡 If any step fails, the whole transaction is rolled back.</p>

    <h2>🧩 Example: Using SAVEPOINT</h2>
    <pre>
{`START TRANSACTION;

UPDATE Accounts SET balance = balance - 500 WHERE name = 'Alice';
SAVEPOINT step1;

UPDATE Accounts SET balance = balance + 500 WHERE name = 'Bob';
SAVEPOINT step2;

-- Something goes wrong
ROLLBACK TO SAVEPOINT step1;

COMMIT;`}
    </pre>
    <p className="note">Only partial rollback happens up to the savepoint.</p>

    <h2>⚙️ Auto-Commit Mode</h2>
    <pre>
{`SET autocommit = 0;
START TRANSACTION;
-- SQL operations
COMMIT;`}
    </pre>
    <p className="note">
      In MySQL, auto-commit mode automatically commits each statement unless disabled.
    </p>

    <h2>🧠 Transaction Properties — ACID</h2>
    <table>
      <tr><th>Property</th><th>Description</th></tr>
      <tr><td>A — Atomicity</td><td>All steps succeed or none do</td></tr>
      <tr><td>C — Consistency</td><td>Database moves from one valid state to another</td></tr>
      <tr><td>I — Isolation</td><td>Each transaction runs independently</td></tr>
      <tr><td>D — Durability</td><td>Committed changes persist permanently</td></tr>
    </table>

    <h2>🧩 Example: COMMIT and ROLLBACK</h2>
    <pre>
{`START TRANSACTION;

INSERT INTO Accounts (account_no, name, balance)
VALUES (103, 'Charlie', 2000);

ROLLBACK; -- cancels insertion

INSERT INTO Accounts (account_no, name, balance)
VALUES (104, 'Riya', 2500);

COMMIT;`}
    </pre>
    <p className="note">
      The first insert was rolled back; the second was committed.
    </p>

    <h2>💡 Real-Life Use Cases</h2>
    <table>
      <tr><th>Situation</th><th>Why Use Transactions?</th></tr>
      <tr><td>💰 Bank transfers</td><td>To ensure debit and credit succeed together</td></tr>
      <tr><td>🛒 E-commerce checkout</td><td>To confirm all order steps succeed</td></tr>
      <tr><td>🏦 Financial apps</td><td>To maintain accuracy of money movement</td></tr>
      <tr><td>🧾 Multi-step updates</td><td>To prevent partial or inconsistent data</td></tr>
    </table>

    <h2>🧾 Summary Table</h2>
    <table>
      <tr><th>Command</th><th>Description</th></tr>
      <tr><td>START TRANSACTION / BEGIN</td><td>Begins a new transaction</td></tr>
      <tr><td>COMMIT</td><td>Saves all changes permanently</td></tr>
      <tr><td>ROLLBACK</td><td>Cancels uncommitted changes</td></tr>
      <tr><td>SAVEPOINT</td><td>Marks a rollback point</td></tr>
      <tr><td>ROLLBACK TO SAVEPOINT</td><td>Reverts to a specific savepoint</td></tr>
      <tr><td>ACID</td><td>Ensures data reliability and safety</td></tr>
    </table>

    <p className="note">
      ✅ <b>In short:</b> Transactions guarantee that database operations are safe,
      consistent, and reliable — either everything happens or nothing does.
    </p>
  </>
)}
{activeSection === "sql-security" && (
  <>
    <h1>🧰 SQL Security and Permissions</h1>
    <p className="subtitle">
      Database security ensures only authorized users can access or modify data — keeping your database safe and reliable.
    </p>

    <h2>🧱 1. What is SQL Security?</h2>
    <p>
      SQL Security protects your database from unauthorized access, data breaches, or accidental data loss. 
      <br />
      <strong>In short:</strong> “Not everyone should be able to do everything.”
    </p>

    <h2>🧩 2. Why Is Security Important?</h2>
    <table className="info-table">
      <thead>
        <tr><th>Reason</th><th>Explanation</th></tr>
      </thead>
      <tbody>
        <tr><td>🔒 Protect sensitive data</td><td>Stop unauthorized users from viewing personal or financial info</td></tr>
        <tr><td>🧱 Maintain integrity</td><td>Prevent accidental or malicious modifications</td></tr>
        <tr><td>⚙️ Control access</td><td>Allow users to do only what they need</td></tr>
        <tr><td>📜 Audit actions</td><td>Track who changed what and when</td></tr>
        <tr><td>🛡️ Prevent SQL Injection</td><td>Avoid malicious queries from attackers</td></tr>
      </tbody>
    </table>

    <h2>⚙️ 3. SQL Security Components</h2>
    <ul>
      <li><b>Users:</b> People or applications that connect to the database</li>
      <li><b>Roles:</b> Groups of permissions assigned to multiple users</li>
      <li><b>Privileges:</b> Rights to perform specific actions</li>
      <li><b>Authentication:</b> Verifying identity (username + password)</li>
      <li><b>Authorization:</b> Deciding what actions a user can perform</li>
    </ul>

    <h2>🧱 4. Creating and Managing Users</h2>
    <pre><code>CREATE USER 'sofia'@'localhost' IDENTIFIED BY 'mypassword';</code></pre>
    <p><b>Explanation:</b> Creates a user who can log in only from localhost using the given password.</p>

    <h2>🧰 5. Granting Privileges</h2>
    <pre><code>
GRANT SELECT, INSERT, UPDATE
ON school.students
TO 'sofia'@'localhost';
    </code></pre>
    <p>Gives sofia permission to read, insert, and update data — but not delete it.</p>

    <h3>Grant All Privileges</h3>
    <pre><code>
GRANT ALL PRIVILEGES
ON school.*
TO 'admin'@'localhost';
    </code></pre>

    <h3>Grant With Grant Option</h3>
    <pre><code>
GRANT SELECT, INSERT
ON company.employees
TO 'manager'@'localhost' WITH GRANT OPTION;
    </code></pre>

    <h2>⚙️ 6. Revoking Privileges</h2>
    <pre><code>
REVOKE INSERT, UPDATE
ON school.students
FROM 'sofia'@'localhost';
    </code></pre>

    <h2>🧱 7. Dropping a User</h2>
    <pre><code>DROP USER 'sofia'@'localhost';</code></pre>

    <h2>🧩 8. Viewing User Privileges</h2>
    <pre><code>SHOW GRANTS FOR 'sofia'@'localhost';</code></pre>

    <h2>🧮 9. Types of Privileges</h2>
    <table className="info-table">
      <thead>
        <tr><th>Privilege</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>SELECT</td><td>Read data from a table</td></tr>
        <tr><td>INSERT</td><td>Add new records</td></tr>
        <tr><td>UPDATE</td><td>Modify existing data</td></tr>
        <tr><td>DELETE</td><td>Remove data</td></tr>
        <tr><td>CREATE</td><td>Create new databases or tables</td></tr>
        <tr><td>DROP</td><td>Delete databases or tables</td></tr>
        <tr><td>ALTER</td><td>Modify table structure</td></tr>
        <tr><td>EXECUTE</td><td>Run stored procedures</td></tr>
      </tbody>
    </table>

    <h2>⚡ 10. Using Roles (Modern Practice)</h2>
    <pre><code>
CREATE ROLE 'data_analyst';
GRANT SELECT, UPDATE ON sales.* TO 'data_analyst';
GRANT 'data_analyst' TO 'sofia'@'localhost';
    </code></pre>

    <h2>🧩 12. Principle of Least Privilege (POLP)</h2>
    <p>✅ Give users the <b>minimum privileges</b> they need to do their job.</p>

    <h2>⚙️ 13. SQL Injection Protection</h2>
    <pre><code>SELECT * FROM users WHERE username = '' OR '1'='1';</code></pre>
    <p><b>Prevention:</b> Use parameterized queries, validate inputs, and limit database permissions.</p>

    <h2>🧮 14. Password and Authentication Best Practices</h2>
    <ul>
      <li>🔐 Use strong passwords</li>
      <li>🔄 Change passwords regularly</li>
      <li>🧱 Use encryption</li>
      <li>🚫 Disable unused accounts</li>
      <li>🧾 Enable audit logs</li>
    </ul>

    <h2>🧩 15. Example: Full Security Setup</h2>
    <pre><code>
CREATE USER 'sales_user'@'localhost' IDENTIFIED BY 'secure@123';
CREATE ROLE 'sales_team';
GRANT SELECT, INSERT, UPDATE ON sales.* TO 'sales_team';
GRANT 'sales_team' TO 'sales_user'@'localhost';
SHOW GRANTS FOR 'sales_user'@'localhost';
    </code></pre>

    <h2>🧠 Summary</h2>
    <table className="info-table">
      <thead><tr><th>Command</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td>CREATE USER</td><td>Create a new user</td></tr>
        <tr><td>GRANT</td><td>Give privileges</td></tr>
        <tr><td>REVOKE</td><td>Remove privileges</td></tr>
        <tr><td>DROP USER</td><td>Delete a user</td></tr>
        <tr><td>CREATE ROLE</td><td>Define a role (group of permissions)</td></tr>
        <tr><td>SHOW GRANTS</td><td>View user privileges</td></tr>
      </tbody>
    </table>

    <p className="summary">
      ✅ <strong>In short:</strong> Database security = Right users + Right permissions + Safe queries.
      <br />It protects your system from misuse, accidents, and attacks.
    </p>
  </>
)}
{activeSection === "database-design" && (
  <>
    <h1>🧠 Database Design Concepts</h1>
    <p className="subtitle">
      Database design is the blueprint of how data is stored, connected, and accessed efficiently.
      A well-structured design ensures speed, consistency, and scalability.
    </p>

    <h2>🧱 1. What Is Database Design?</h2>
    <p>
      Database Design is the process of structuring and organizing data logically in a database.
      <br />
      <strong>In simple words:</strong> “It’s about deciding what data to store, how to connect it, and how to make it efficient.”
    </p>

    <h2>🧩 2. Why Is Database Design Important?</h2>
    <table className="info-table">
      <thead>
        <tr><th>Benefit</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>⚡ Performance</td><td>Well-structured data = faster queries</td></tr>
        <tr><td>🧱 Consistency</td><td>Avoid duplicate or conflicting information</td></tr>
        <tr><td>🧮 Accuracy</td><td>Ensures correct relationships between data</td></tr>
        <tr><td>🧰 Scalability</td><td>Easy to extend when business grows</td></tr>
        <tr><td>🧠 Maintainability</td><td>Easier to understand and update later</td></tr>
      </tbody>
    </table>

    <h2>🧭 3. Database Design Process (Steps)</h2>
    <table className="info-table">
      <thead>
        <tr><th>Step</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>1️⃣ Requirement Analysis</td><td>Understand what data needs to be stored</td></tr>
        <tr><td>2️⃣ Conceptual Design (ER Model)</td><td>Create an Entity Relationship Diagram (ERD)</td></tr>
        <tr><td>3️⃣ Logical Design</td><td>Convert ERD into tables, columns, and keys</td></tr>
        <tr><td>4️⃣ Normalization</td><td>Organize tables to remove redundancy</td></tr>
        <tr><td>5️⃣ Physical Design</td><td>Optimize for performance and storage</td></tr>
        <tr><td>6️⃣ Implementation</td><td>Create tables, relationships, constraints in SQL</td></tr>
      </tbody>
    </table>

    <h2>🧩 4. Key Concepts in Database Design</h2>

    <h3>🧱 a) Entities</h3>
    <p>An Entity represents a real-world object or concept — like Student, Course, or Teacher.</p>

    <h3>🧩 b) Attributes</h3>
    <p>Attributes are characteristics (columns) of an entity.</p>
    <table className="info-table">
      <thead>
        <tr><th>Attribute</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>student_id</td><td>Unique ID for each student</td></tr>
        <tr><td>name</td><td>Student’s name</td></tr>
        <tr><td>age</td><td>Age of the student</td></tr>
        <tr><td>course_id</td><td>Course enrolled</td></tr>
      </tbody>
    </table>

    <h3>🧱 c) Relationships</h3>
    <table className="info-table">
      <thead>
        <tr><th>Type</th><th>Description</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td>One-to-One (1:1)</td><td>Each record matches one in another table</td><td>Student ↔ ID Card</td></tr>
        <tr><td>One-to-Many (1:N)</td><td>One record relates to many</td><td>Teacher ↔ Students</td></tr>
        <tr><td>Many-to-Many (M:N)</td><td>Records in both tables relate to many others</td><td>Students ↔ Courses</td></tr>
      </tbody>
    </table>

    <pre><code>
CREATE TABLE student_courses (
  student_id INT,
  course_id INT,
  PRIMARY KEY (student_id, course_id)
);
    </code></pre>

    <h2>🧮 5. ER (Entity Relationship) Diagram</h2>
    <p>
      ER Diagrams visualize entities, attributes, and relationships.
      <br />Example: <strong>Student —&lt; Enrolls &gt;— Course</strong>
    </p>

    <h2>⚙️ 6. Primary Keys and Foreign Keys</h2>
    <pre><code>student_id INT PRIMARY KEY</code></pre>
    <pre><code>FOREIGN KEY (course_id) REFERENCES Courses(course_id)</code></pre>

    <h2>🧱 7. Example: School Database Design</h2>
    <pre><code>
CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT
);

CREATE TABLE Courses (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(100)
);

CREATE TABLE Teachers (
  teacher_id INT PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE Enrollments (
  student_id INT,
  course_id INT,
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES Students(student_id),
  FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
    </code></pre>

    <h2>🧮 8. Normalization in Design</h2>
    <table className="info-table">
      <thead><tr><th>Normal Form</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>1NF</td><td>No repeating groups; atomic values</td></tr>
        <tr><td>2NF</td><td>All non-key attributes depend on primary key</td></tr>
        <tr><td>3NF</td><td>No transitive dependency</td></tr>
      </tbody>
    </table>

    <h2>🧱 9. Denormalization (When Needed)</h2>
    <p>Used in reporting systems or warehouses to improve performance — at the cost of some redundancy.</p>

    <h2>⚙️ 10. Indexes in Design</h2>
    <pre><code>CREATE INDEX idx_student_name ON Students(name);</code></pre>

    <h2>🧩 11. Referential Integrity</h2>
    <p>Ensures valid relationships between tables. Example:</p>
    <pre><code>FOREIGN KEY (course_id) REFERENCES Courses(course_id);</code></pre>

    <h2>🧠 12. Good Database Design Practices</h2>
    <ul>
      <li>✅ Use meaningful table and column names</li>
      <li>✅ Normalize up to 3NF</li>
      <li>✅ Add indexes for frequent queries</li>
      <li>❌ Avoid storing multiple values in one column</li>
      <li>❌ Don’t repeat data in multiple tables</li>
    </ul>

    <h2>🧾 13. Example: Good vs Bad Design</h2>
    <table className="info-table">
      <thead><tr><th>Bad Design</th><th>Good Design</th></tr></thead>
      <tbody>
        <tr><td>All data in one big table</td><td>Separate tables for Students, Courses, Enrollments</td></tr>
        <tr><td>Duplicate teacher names</td><td>Use teacher_id for linking</td></tr>
      </tbody>
    </table>

    <h2>🧩 14. Tools for Database Design</h2>
    <table className="info-table">
      <thead><tr><th>Tool</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>🧱 Draw.io / Diagrams.net</td><td>Free tool to draw ER diagrams</td></tr>
        <tr><td>🧩 Lucidchart / Creately</td><td>Online ERD design tools</td></tr>
        <tr><td>⚙️ MySQL Workbench</td><td>Visual design + SQL generation</td></tr>
        <tr><td>🧮 Dbdiagram.io</td><td>Easy-to-use online ERD builder</td></tr>
      </tbody>
    </table>

    <h2>🧠 15. Summary</h2>
    <table className="info-table">
      <thead><tr><th>Concept</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>Entity</td><td>Real-world object (table)</td></tr>
        <tr><td>Attribute</td><td>Column describing entity</td></tr>
        <tr><td>Relationship</td><td>Connection between tables</td></tr>
        <tr><td>Primary Key</td><td>Unique identifier</td></tr>
        <tr><td>Foreign Key</td><td>Connects tables</td></tr>
        <tr><td>Normalization</td><td>Removes redundancy</td></tr>
        <tr><td>ER Diagram</td><td>Visual structure of database</td></tr>
      </tbody>
    </table>

    <p className="summary">
      ✅ <strong>In short:</strong> Good database design = Clean structure + Logical relationships + Efficient access.
      <br />It’s the foundation of every reliable and scalable SQL system.
    </p>
  </>
)}
{activeSection === "sql-mini-projects" && (
  <>
    <h1>🚀 Mini Projects (Hands-on Practice)</h1>
    <p className="subtitle">
      Practical learning makes your SQL knowledge real — by working on small, meaningful projects, 
      you’ll understand how everything connects: tables, joins, constraints, queries, transactions, and more.
    </p>

    <p>
      Let’s go through step-by-step mini projects, arranged from beginner to intermediate level.
    </p>

    {/* 1️⃣ Student Management System */}
    <h2>🧩 1️⃣ Student Management System</h2>
    <p><strong>Concepts used:</strong> CREATE, INSERT, SELECT, UPDATE, DELETE, JOINS</p>
    <p><strong>Description:</strong> Build a database to manage students, courses, and enrollments.</p>
    <p><strong>Tables:</strong></p>
    <ul>
      <li>Students(student_id, name, age, course_id)</li>
      <li>Courses(course_id, course_name, duration)</li>
    </ul>
    <p><strong>Practice:</strong></p>
    <ul>
      <li>Insert sample data</li>
      <li>Display all students enrolled in each course</li>
      <li>Update student details</li>
      <li>Delete a student</li>
      <li>Find course-wise student count</li>
    </ul>

    {/* 2️⃣ Library Management System */}
    <h2>🧱 2️⃣ Library Management System</h2>
    <p><strong>Concepts:</strong> Primary & Foreign Keys, Relationships, Joins, Normalization</p>
    <p><strong>Tables:</strong></p>
    <ul>
      <li>Books(book_id, title, author, price, category)</li>
      <li>Members(member_id, name, join_date)</li>
      <li>Issue(book_id, member_id, issue_date, return_date)</li>
    </ul>
    <p><strong>Practice:</strong></p>
    <ul>
      <li>Display books borrowed by each member</li>
      <li>Find overdue books</li>
      <li>Count how many books are currently issued</li>
    </ul>

    {/* 3️⃣ Employee Payroll System */}
    <h2>⚙️ 3️⃣ Employee Payroll System</h2>
    <p><strong>Concepts:</strong> Functions, Aggregates, Subqueries, Constraints</p>
    <p><strong>Tables:</strong></p>
    <ul>
      <li>Employees(emp_id, name, designation, salary, dept_id)</li>
      <li>Departments(dept_id, dept_name)</li>
      <li>Attendance(emp_id, days_present)</li>
    </ul>
    <p><strong>Practice:</strong></p>
    <ul>
      <li>Find total and average salary by department</li>
      <li>Update salary for promotion</li>
      <li>Display top 3 highest-paid employees</li>
    </ul>

    {/* 4️⃣ Online Shopping Database */}
    <h2>🧭 4️⃣ Online Shopping Database</h2>
    <p><strong>Concepts:</strong> Joins, Transactions, Views, Keys</p>
    <ul>
      <li>Customers(cust_id, name, city)</li>
      <li>Products(prod_id, name, price)</li>
      <li>Orders(order_id, cust_id, order_date)</li>
      <li>OrderDetails(order_id, prod_id, quantity)</li>
    </ul>
    <p><strong>Practice:</strong></p>
    <ul>
      <li>Create a view showing customer orders</li>
      <li>Calculate total bill for each order</li>
      <li>Use transactions to process an order safely</li>
    </ul>

    {/* 5️⃣ Hospital Management System */}
    <h2>🧮 5️⃣ Hospital Management System</h2>
    <p><strong>Concepts:</strong> Relationships, Constraints, Subqueries, Grouping</p>
    <ul>
      <li>Patients(patient_id, name, age, gender)</li>
      <li>Doctors(doctor_id, name, specialization)</li>
      <li>Appointments(app_id, patient_id, doctor_id, date, fees)</li>
    </ul>
    <p><strong>Practice:</strong></p>
    <ul>
      <li>Find total fees collected by each doctor</li>
      <li>Show patients treated by a specific doctor</li>
      <li>Cancel an appointment using ROLLBACK</li>
    </ul>

    {/* Continue remaining projects in same format up to 25️⃣ */}

    <h2>✅ Tips for Hands-on Practice</h2>
    <ul>
      <li>Start with simple 2–3 table databases, then expand.</li>
      <li>Try to use every SQL feature you’ve learned: Joins, Subqueries, Views, Transactions, Constraints, Functions.</li>
      <li>Always document your project with table design and queries.</li>
      <li>Use tools like MySQL Workbench, SQLite Studio, or DB Browser for SQLite.</li>
    </ul>

    <p className="subtitle">
      🧠 In Short:<br />
      “Practice turns theory into mastery.”<br />
      Each mini project helps you apply SQL in real-world situations — making you confident in database design, querying, and management.
    </p>
  </>
)}

      </main>
    </div>
  );
};

export default SqlCourse;
