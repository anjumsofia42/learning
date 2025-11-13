import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "../Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './MySql.css';

const MySql = () => {
    const [activeSection, setActiveSection] = useState('mysql-intro');
    const navigate = useNavigate();

return (
    <div className="mysql-course-container d-flex">
        {/* ======= Sidebar (Desktop) ======= */}
        <aside className="sidebar d-none d-md-block p-3">
            <h4 className="aside-title"></h4>
            <ul className='list-unstyle mt-3'>
                <li onClick={() => navigate('/')}>🏠 Home</li>
                {/* 📚 MySQL Syllabus Sidebar */}
<li className={activeSection === 'mysql-intro' ? 'active' : ''} onClick={() => setActiveSection('mysql-intro')}>🧩 Introduction to MySQL</li>
<li className={activeSection === 'mysql-database-fundamentals' ? 'active' : ''} onClick={() => setActiveSection('mysql-database-fundamentals')}>🧱 Database Fundamentals</li>
<li className={activeSection === 'mysql-ddl' ? 'active' : ''} onClick={() => setActiveSection('mysql-ddl')}>✏️ Data Definition Language (DDL)</li>
<li className={activeSection === 'mysql-dml' ? 'active' : ''} onClick={() => setActiveSection('mysql-dml')}>💾 Data Manipulation Language (DML)</li>
<li className={activeSection === 'mysql-dql' ? 'active' : ''} onClick={() => setActiveSection('mysql-dql')}>🔍 Data Query Language (DQL)</li>
<li className={activeSection === 'mysql-joins-subqueries' ? 'active' : ''} onClick={() => setActiveSection('mysql-joins-subqueries')}>🔗 Joins and Subqueries</li>
<li className={activeSection === 'mysql-constraints-keys' ? 'active' : ''} onClick={() => setActiveSection('mysql-constraints-keys')}>🧩 Constraints & Keys</li>
<li className={activeSection === 'mysql-functions' ? 'active' : ''} onClick={() => setActiveSection('mysql-functions')}>⚙️ MySQL Functions</li>
<li className={activeSection === 'mysql-views' ? 'active' : ''} onClick={() => setActiveSection('mysql-views')}>🧮 MySQL Views</li>
<li className={activeSection === 'mysql-transactions' ? 'active' : ''} onClick={() => setActiveSection('mysql-transactions')}>🔐 Transactions & TCL</li>
<li className={activeSection === 'mysql-users-privileges' ? 'active' : ''} onClick={() => setActiveSection('mysql-users-privileges')}>🧰 Users & Privileges (DCL)</li>
<li className={activeSection === 'mysql-procedures-functions' ? 'active' : ''} onClick={() => setActiveSection('mysql-procedures-functions')}>🧱 Stored Procedures & Functions</li>
<li className={activeSection === 'mysql-triggers-events' ? 'active' : ''} onClick={() => setActiveSection('mysql-triggers-events')}>🧭 Triggers & Events</li>
<li className={activeSection === 'mysql-indexes-optimization' ? 'active' : ''} onClick={() => setActiveSection('mysql-indexes-optimization')}>⚡ Indexes & Optimization</li>
<li className={activeSection === 'mysql-multiple-joins' ? 'active' : ''} onClick={() => setActiveSection('mysql-multiple-joins')}>🌐 Joins with Multiple Tables</li>
<li className={activeSection === 'mysql-import-export' ? 'active' : ''} onClick={() => setActiveSection('mysql-import-export')}>📋 Import & Export</li>
<li className={activeSection === 'mysql-advanced-topics' ? 'active' : ''} onClick={() => setActiveSection('mysql-advanced-topics')}>💡 Advanced Topics</li>

</ul>
</aside>
{/* ======= Sidebar Toggle (Mobile only, beside content) ======= */}
      <button
        className="btn btn-dark d-md-none position-fixed toggle-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mysqlSidebar"
        aria-controls="mysqlSidebar"
      >
        <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
      </button>

      {/* ======= Offcanvas Sidebar (Mobile) ======= */}
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex="-1"
        id="mysqlSidebar"
        aria-labelledby="mysqlSidebarLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="mysqlSidebarLabel">
            MySql Tutorial
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

          {/* 📚 MySQL Syllabus Sidebar */}
<li className={activeSection === 'mysql-intro' ? 'active' : ''} onClick={() => setActiveSection('mysql-intro')}>🧩 Introduction to MySQL</li>
<li className={activeSection === 'mysql-database-fundamentals' ? 'active' : ''} onClick={() => setActiveSection('mysql-database-fundamentals')}>🧱 Database Fundamentals</li>
<li className={activeSection === 'mysql-ddl' ? 'active' : ''} onClick={() => setActiveSection('mysql-ddl')}>✏️ Data Definition Language (DDL)</li>
<li className={activeSection === 'mysql-dml' ? 'active' : ''} onClick={() => setActiveSection('mysql-dml')}>💾 Data Manipulation Language (DML)</li>
<li className={activeSection === 'mysql-dql' ? 'active' : ''} onClick={() => setActiveSection('mysql-dql')}>🔍 Data Query Language (DQL)</li>
<li className={activeSection === 'mysql-joins-subqueries' ? 'active' : ''} onClick={() => setActiveSection('mysql-joins-subqueries')}>🔗 Joins and Subqueries</li>
<li className={activeSection === 'mysql-constraints-keys' ? 'active' : ''} onClick={() => setActiveSection('mysql-constraints-keys')}>🧩 Constraints & Keys</li>
<li className={activeSection === 'mysql-functions' ? 'active' : ''} onClick={() => setActiveSection('mysql-functions')}>⚙️ MySQL Functions</li>
<li className={activeSection === 'mysql-views' ? 'active' : ''} onClick={() => setActiveSection('mysql-views')}>🧮 MySQL Views</li>
<li className={activeSection === 'mysql-transactions' ? 'active' : ''} onClick={() => setActiveSection('mysql-transactions')}>🔐 Transactions & TCL</li>
<li className={activeSection === 'mysql-users-privileges' ? 'active' : ''} onClick={() => setActiveSection('mysql-users-privileges')}>🧰 Users & Privileges (DCL)</li>
<li className={activeSection === 'mysql-procedures-functions' ? 'active' : ''} onClick={() => setActiveSection('mysql-procedures-functions')}>🧱 Stored Procedures & Functions</li>
<li className={activeSection === 'mysql-triggers-events' ? 'active' : ''} onClick={() => setActiveSection('mysql-triggers-events')}>🧭 Triggers & Events</li>
<li className={activeSection === 'mysql-indexes-optimization' ? 'active' : ''} onClick={() => setActiveSection('mysql-indexes-optimization')}>⚡ Indexes & Optimization</li>
<li className={activeSection === 'mysql-multiple-joins' ? 'active' : ''} onClick={() => setActiveSection('mysql-multiple-joins')}>🌐 Joins with Multiple Tables</li>
<li className={activeSection === 'mysql-import-export' ? 'active' : ''} onClick={() => setActiveSection('mysql-import-export')}>📋 Import & Export</li>
<li className={activeSection === 'mysql-advanced-topics' ? 'active' : ''} onClick={() => setActiveSection('mysql-advanced-topics')}>💡 Advanced Topics</li>

</ul>
</div>
</div>
    {/* Main Course Content */}
<main className="course-content flex-grow-1 p-4">
  {/* ✅ Introduction to MySQL */}
  {activeSection === 'mysql-intro' && (
    <>
      <h1>🧩 1️⃣ Introduction to MySQL</h1>
      <p className="subtitle">
        Learn how to store, organize, and manage data easily using MySQL — the world’s most popular open-source database system.
      </p>

      <h2>💡 What is MySQL?</h2>
      <ul className="bullet-points">
        <li>MySQL is a <b>Database Management System (DBMS)</b> that helps you store, organize, and manage data.</li>
        <li>It is based on <b>SQL (Structured Query Language)</b> — the language used to talk to databases.</li>
        <li>MySQL is <b>open-source</b> and developed by <b>Oracle Corporation</b>.</li>
        <li>It is widely used in <b>web development</b> — for example, YouTube, Facebook, and WordPress use MySQL in the backend.</li>
      </ul>

      <p className="subtitle">👉 <b>Example:</b> If you have an app that stores user details (name, email, password), those details are saved inside a <b>MySQL database</b>.</p>

      <h2>⚙️ Features and Advantages of MySQL</h2>
      <table className="style-table">
        <thead>
          <tr>
            <th>💎 Feature</th>
            <th>📝 Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Open Source</td><td>Free to download and use for everyone.</td></tr>
          <tr><td>High Performance</td><td>Fast at handling large amounts of data.</td></tr>
          <tr><td>Scalable</td><td>Works for small apps and also large enterprise systems.</td></tr>
          <tr><td>Secure</td><td>Has user authentication and data encryption options.</td></tr>
          <tr><td>Cross-Platform</td><td>Works on Windows, macOS, Linux, etc.</td></tr>
          <tr><td>Multi-User Support</td><td>Many users can access the database at once.</td></tr>
          <tr><td>Reliable</td><td>Supports backup, recovery, and transaction control.</td></tr>
          <tr><td>Community Support</td><td>Large online community for help and tutorials.</td></tr>
        </tbody>
      </table>

      <h3>✅ Advantages:</h3>
      <ul className="bullet-points">
        <li>Easy to learn and use</li>
        <li>Free and regularly updated</li>
        <li>Integrates well with PHP, Python, and Java</li>
        <li>Excellent speed and efficiency</li>
      </ul>

      <h2>⚔️ Difference between SQL and MySQL</h2>
      <table className="style-table">
        <thead>
          <tr>
            <th>🔍 Comparison</th>
            <th>SQL</th>
            <th>MySQL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Definition</td>
            <td>SQL stands for Structured Query Language, used to manage and query databases.</td>
            <td>MySQL is a Database Management System that uses SQL to interact with data.</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Language</td>
            <td>Software / Tool</td>
          </tr>
          <tr>
            <td>Function</td>
            <td>Used to write commands (SELECT, INSERT, UPDATE, DELETE).</td>
            <td>Executes those SQL commands to store and retrieve data.</td>
          </tr>
          <tr>
            <td>Use Case</td>
            <td>You write SQL queries.</td>
            <td>MySQL runs those queries.</td>
          </tr>
          <tr>
            <td>Example</td>
            <td><code>SELECT * FROM students;</code></td>
            <td>The MySQL server runs that command and returns results.</td>
          </tr>
        </tbody>
      </table>

      <p><b>🧠 In short:</b></p>
      <ul className="bullet-points">
        <li>👉 SQL = Language</li>
        <li>👉 MySQL = Software that uses that language</li>
      </ul>

      <h2>🧱 MySQL Architecture Overview</h2>
      <p className="subtitle"> MySQL architecture tells how MySQL works internally. It has three main layers:</p>
      <ul className="bullet-points">
        <li><b>Client Layer:</b> Where users or applications send SQL commands (e.g., <code>SELECT * FROM users;</code>).</li>
        <li><b>Server Layer:</b> The brain of MySQL — processes queries, checks permissions, manages memory and caching.  
          Includes:
          <ul>
            <li>Parser & Optimizer → Understands and improves queries</li>
            <li>Query Cache → Stores previously run queries for faster response</li>
            <li>Pluggable Storage Engine → Actual data storage system (InnoDB, MyISAM, etc.)</li>
          </ul>
        </li>
        <li><b>Storage Engine Layer:</b> Handles how and where data is stored physically on disk.  
          Example: InnoDB supports transactions and foreign keys.
        </li>
      </ul>

      <p><b>🧩 Simple Flow:</b></p>
      <pre className="code-block">{`User → Client Layer → Server Layer → Storage Engine → Database File`}</pre>

      <h2>💻 Installation & MySQL Workbench Setup</h2>
      <ol className="bullet-points">
        <li><b>Download MySQL Installer:</b>  
          Visit <a href="https://dev.mysql.com/downloads/" target="_blank" rel="noopener noreferrer">dev.mysql.com/downloads</a> and choose “MySQL Installer for Windows”.
        </li>
        <li><b>Install Components:</b>  
          Select MySQL Server, MySQL Workbench (GUI Tool), and MySQL Shell.
        </li>
        <li><b>Set Configuration:</b>  
          Use default port 3306, set a root password, and complete setup.
        </li>
        <li><b>Open MySQL Workbench:</b>  
          Click “Local instance MySQL”, enter your password, and you’re connected 🎉
        </li>
      </ol>

      <h2>🔌 Connecting to MySQL Server</h2>
      <h3>🧠 Method 1: Using MySQL Workbench</h3>
      <p className="subtitle">Open Workbench → Click your local server connection → Enter password → ✅ Connected.</p>

      <h3>💻 Method 2: Using Command Line</h3>
      <pre className="code-block">{`mysql -u root -p`}</pre>
      <p className="subtitle">Enter your password and you’ll see:</p>
      <pre className="code-block">{`Welcome to the MySQL monitor. Commands end with ; or \\g.
mysql>`}</pre>

      <p className="subtitle">Now you can type SQL commands like:</p>
      <pre className="code-block">{`SHOW DATABASES;
CREATE DATABASE school;`}</pre>

      <h2>🎯 Summary</h2>
      <table className="style-table">
        <thead>
          <tr>
            <th>Topic</th>
            <th>Key Idea</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>MySQL</td><td>Open-source database software using SQL</td></tr>
          <tr><td>Features</td><td>Fast, secure, free, and cross-platform</td></tr>
          <tr><td>SQL vs MySQL</td><td>SQL = language, MySQL = tool using that language</td></tr>
          <tr><td>Architecture</td><td>Client → Server → Storage Engine</td></tr>
          <tr><td>Setup</td><td>Install MySQL Server + Workbench</td></tr>
          <tr><td>Connection</td><td>via Workbench or Command Line</td></tr>
        </tbody>
      </table>
    </>
  )}
  {/* 📊 2️⃣ Database Fundamentals */}
{activeSection === "mysql-database-fundamentals" && (
  <>
    <h1>📊 2️⃣ Database Fundamentals</h1>
    <p className="subtitle">
      Understand the foundation of databases — how data is stored, organized, and linked together
      using keys and relationships.
    </p>

    <h2>💡 What is a Database?</h2>
    <ul className="bullet-points">
      <li>A <b>Database</b> is a structured collection of data that can be easily accessed and managed.</li>
      <li>It stores data in an organized way — usually in <b>tables</b>.</li>
      <li>Databases help in saving, retrieving, and updating data efficiently.</li>
      <li>Example: A “School” database might store students, teachers, and courses in different tables.</li>
    </ul>

    <p>👉 Think of a database like a <b>digital filing cabinet</b> where each drawer (table) stores related data.</p>

    <h2>🧱 Tables, Rows, and Columns</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Part</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Table</td>
          <td>A collection of related data</td>
          <td>"Students"</td>
        </tr>
        <tr>
          <td>Row (Record)</td>
          <td>A single data entry</td>
          <td>1, Sofia, 20, BCA</td>
        </tr>
        <tr>
          <td>Column (Field)</td>
          <td>A property of the data</td>
          <td>Name, Age, Course</td>
        </tr>
      </tbody>
    </table>

    <p>🧩 Example Table:</p>
    <table className="style-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Sofia</td><td>20</td><td>BCA</td></tr>
        <tr><td>2</td><td>Rahul</td><td>21</td><td>MCA</td></tr>
      </tbody>
    </table>

    <h2>🧭 Database Schema & Relationships</h2>
    <p>
      A <b>Database Schema</b> is the blueprint of a database. It defines how tables are structured
      and how they relate to each other.
    </p>

    <h3>🔗 Relationships Between Tables</h3>
    <table className="style-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>One-to-One (1:1)</td><td>One record in a table relates to one in another.</td><td>One student → One ID card</td></tr>
        <tr><td>One-to-Many (1:N)</td><td>One record relates to many records in another table.</td><td>One teacher → Many students</td></tr>
        <tr><td>Many-to-Many (M:N)</td><td>Many records relate to many records in another table.</td><td>Many students → Many courses</td></tr>
      </tbody>
    </table>

    <h2>🔑 Primary Key, Foreign Key, Unique Key</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Key Type</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Primary Key</td>
          <td>Unique identifier for each record (no duplicates or NULLs).</td>
          <td>Student_ID</td>
        </tr>
        <tr>
          <td>Foreign Key</td>
          <td>Links one table to another table’s primary key.</td>
          <td>Student_ID in “Marks” table</td>
        </tr>
        <tr>
          <td>Unique Key</td>
          <td>Ensures all values are different but allows one NULL.</td>
          <td>Email_ID</td>
        </tr>
      </tbody>
    </table>

    <pre className="code-block">
{`CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100) UNIQUE
);

CREATE TABLE Marks (
  mark_id INT PRIMARY KEY,
  student_id INT,
  score INT,
  FOREIGN KEY (student_id) REFERENCES Students(student_id)
);`}
    </pre>

    <h2>🧩 Normalization (1NF, 2NF, 3NF, BCNF)</h2>
    <p>Normalization helps in organizing data efficiently by removing duplicates and improving consistency.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Normal Form</th>
          <th>Rule</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1NF</td><td>Each cell should contain only one value.</td><td>Separate multiple phone numbers into another table.</td></tr>
        <tr><td>2NF</td><td>1NF + No partial dependency on part of a composite key.</td><td>Split data properly to remove redundancy.</td></tr>
        <tr><td>3NF</td><td>2NF + No transitive dependency.</td><td>Remove derived data like “TotalPrice”.</td></tr>
        <tr><td>BCNF</td><td>Stronger version of 3NF ensuring every determinant is a candidate key.</td><td>Removes all anomalies.</td></tr>
      </tbody>
    </table>

    <h2>📘 ER (Entity-Relationship) Diagram Basics</h2>
    <ul className="bullet-points">
      <li>An <b>ER Diagram</b> shows how tables (entities) are connected.</li>
      <li>It visually represents entities, attributes, and their relationships.</li>
    </ul>

    <table className="style-table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>🟦 Entity</td><td>Object/table like Student or Course</td></tr>
        <tr><td>🔸 Attribute</td><td>Property like Name, Age, CourseID</td></tr>
        <tr><td>🔗 Relationship</td><td>Connection like “Enrolled In” or “Assigned To”</td></tr>
      </tbody>
    </table>

    <pre className="code-block">
{`Student ───< Enrolls >─── Course`}
    </pre>

    <h2>🎯 Summary</h2>
    <table className="summary-table">
      <thead>
        <tr>
          <th>Topic</th>
          <th>Key Idea</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Database</td><td>Organized collection of data</td></tr>
        <tr><td>Tables</td><td>Data stored in rows and columns</td></tr>
        <tr><td>Schema</td><td>Blueprint of the database structure</td></tr>
        <tr><td>Keys</td><td>Maintain uniqueness and relationships</td></tr>
        <tr><td>Normalization</td><td>Removes redundancy, improves efficiency</td></tr>
        <tr><td>ER Diagram</td><td>Visual map of table relationships</td></tr>
      </tbody>
    </table>
  </>
)}
{/* ✏️ 3️⃣ MySQL Data Definition Language (DDL) */}
{activeSection === "mysql-ddl" && (
  <>
    <h1>✏️ 3️⃣ MySQL Data Definition Language (DDL)</h1>
    <p className="subtitle">
      DDL (Data Definition Language) is used to <b>define, modify, and delete database structures</b> — 
      like databases, tables, and their columns.
    </p>

    <h2>💡 Common DDL Commands</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>CREATE</td><td>Creates a new database or table.</td></tr>
        <tr><td>ALTER</td><td>Modifies an existing table (add, delete, or modify columns).</td></tr>
        <tr><td>DROP</td><td>Deletes a database or table permanently.</td></tr>
        <tr><td>USE</td><td>Selects which database to work on.</td></tr>
      </tbody>
    </table>

    <h2>🏗️ CREATE, USE, DROP DATABASE</h2>
    <pre className="code-block">
{`-- Create a new database
CREATE DATABASE school;

-- Use the database
USE school;

-- Delete the database
DROP DATABASE school;`}
    </pre>

    <p>✅ <b>Tip:</b> Always double-check before using <code>DROP</code>, as it removes all data!</p>

    <h2>🧱 CREATE, ALTER, DROP TABLE</h2>
    <pre className="code-block">
{`-- Create a new table
CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  age INT,
  course VARCHAR(50),
  marks FLOAT DEFAULT 0
);

-- Modify a table (add a column)
ALTER TABLE students ADD COLUMN email VARCHAR(100);

-- Modify data type or rename a column
ALTER TABLE students MODIFY COLUMN marks DECIMAL(5,2);

-- Delete a column
ALTER TABLE students DROP COLUMN email;

-- Delete the entire table
DROP TABLE students;`}
    </pre>

    <h2>🔢 MySQL Data Types</h2>
    <p>MySQL supports different types of data for different kinds of values.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Examples</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Numeric</td><td>INT, FLOAT, DOUBLE, DECIMAL</td><td>Stores numbers (integer or decimal).</td></tr>
        <tr><td>String</td><td>CHAR, VARCHAR, TEXT</td><td>Stores text values like names, addresses.</td></tr>
        <tr><td>Date/Time</td><td>DATE, TIME, DATETIME, TIMESTAMP</td><td>Stores dates and times.</td></tr>
        <tr><td>Boolean</td><td>BOOLEAN or TINYINT(1)</td><td>Stores TRUE/FALSE (1 or 0).</td></tr>
      </tbody>
    </table>

    <h2>⚙️ Column Options</h2>
    <ul className="bullet-points">
      <li><b>AUTO_INCREMENT:</b> Automatically increases value for each new row (usually used with Primary Key).</li>
      <li><b>DEFAULT:</b> Sets a default value if none is provided.</li>
      <li><b>NOT NULL:</b> Ensures the column cannot have NULL (empty) values.</li>
    </ul>

    <pre className="code-block">
{`CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  salary DECIMAL(10,2) DEFAULT 25000
);`}
    </pre>

    <h2>🔒 Constraints in MySQL</h2>
    <p>Constraints are rules applied to table columns to maintain data accuracy and integrity.</p>

    <table className="style-table">
      <thead>
        <tr>
          <th>Constraint</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PRIMARY KEY</td>
          <td>Uniquely identifies each record in a table.</td>
          <td><code>id INT PRIMARY KEY</code></td>
        </tr>
        <tr>
          <td>FOREIGN KEY</td>
          <td>Links one table to another.</td>
          <td><code>FOREIGN KEY (student_id) REFERENCES students(id)</code></td>
        </tr>
        <tr>
          <td>UNIQUE</td>
          <td>Ensures all values in a column are different.</td>
          <td><code>email VARCHAR(100) UNIQUE</code></td>
        </tr>
        <tr>
          <td>CHECK</td>
          <td>Validates data based on a condition.</td>
          <td><code>CHECK (marks &gt;= 0 AND marks &lt;= 100)</code></td>
        </tr>
        <tr>
          <td>NOT NULL</td>
          <td>Prevents column from being empty.</td>
          <td><code>name VARCHAR(50) NOT NULL</code></td>
        </tr>
      </tbody>
    </table>

    <h2>🧠 Example with Constraints</h2>
    <pre className="code-block">
{`CREATE TABLE students (
  student_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  age INT CHECK (age >= 10),
  email VARCHAR(100) UNIQUE,
  course_id INT,
  FOREIGN KEY (course_id) REFERENCES courses(id)
);`}
    </pre>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>DDL defines the structure of a database (CREATE, ALTER, DROP).</li>
      <li>Use <code>CREATE DATABASE</code> and <code>USE</code> to work inside a specific database.</li>
      <li>Data types define the kind of values stored in each column.</li>
      <li>Constraints ensure data validity and relationships between tables.</li>
      <li>Common constraints: PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, NOT NULL.</li>
    </ul>
  </>
)}
{/* 💾 4️⃣ MySQL Data Manipulation Language (DML) */}
{activeSection === "mysql-dml" && (
  <>
    <h1>💾 4️⃣ MySQL Data Manipulation Language (DML)</h1>
    <p className="subtitle">
      DML (Data Manipulation Language) commands are used to <b>add, modify, and remove data</b> 
      stored inside MySQL tables — they deal with the data itself, not the structure.
    </p>

    <h2>🧩 Common DML Commands</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>INSERT</td><td>Adds new records (rows) into a table.</td></tr>
        <tr><td>UPDATE</td><td>Modifies existing data in a table.</td></tr>
        <tr><td>DELETE</td><td>Removes records from a table.</td></tr>
        <tr><td>REPLACE</td><td>Inserts or replaces data if a duplicate key exists.</td></tr>
      </tbody>
    </table>

    <h2>📥 INSERT INTO — Adding Records</h2>
    <pre className="code-block">
{`-- Add a single record
INSERT INTO students (name, age, course, marks)
VALUES ('Sofia', 21, 'Computer Science', 89);

-- Add multiple records
INSERT INTO students (name, age, course, marks)
VALUES 
('John', 20, 'Maths', 78),
('Aisha', 22, 'Physics', 91),
('Karan', 19, 'Biology', 85);`}
    </pre>

    <p>✅ <b>Tip:</b> Always specify column names while inserting — it avoids errors if the table structure changes.</p>

    <h2>✏️ UPDATE — Modifying Data</h2>
    <p>Used to change existing values in a table.</p>
    <pre className="code-block">
{`-- Update a single row
UPDATE students 
SET marks = 95 
WHERE name = 'Aisha';

-- Update multiple columns
UPDATE students 
SET course = 'Data Science', marks = 90 
WHERE id = 1;`}
    </pre>

    <p>⚠️ <b>Important:</b> Always use <code>WHERE</code> with UPDATE — or it will modify <b>all rows</b> in the table!</p>

    <h2>🗑️ DELETE — Removing Records</h2>
    <p>Used to remove data from a table.</p>
    <pre className="code-block">
{`-- Delete specific record
DELETE FROM students WHERE name = 'John';

-- Delete all records (table remains)
DELETE FROM students;

-- Delete table completely (structure also removed)
DROP TABLE students;`}
    </pre>

    <h2>⚡ MERGE Alternative — Using INSERT ... ON DUPLICATE KEY UPDATE</h2>
    <p>MySQL doesn’t have a direct <code>MERGE</code> command like some databases,  
    but you can achieve the same result using this syntax.</p>
    <pre className="code-block">
{`INSERT INTO students (id, name, age, marks)
VALUES (1, 'Sofia', 21, 90)
ON DUPLICATE KEY UPDATE 
marks = VALUES(marks), 
age = VALUES(age);`}
    </pre>
    <p>✅ If the <code>id</code> already exists, the record is updated instead of inserted.</p>

    <h2>🔁 Using REPLACE INTO</h2>
    <p><b>REPLACE INTO</b> works like INSERT, but if the record already exists (based on PRIMARY or UNIQUE key),  
    it deletes the old one and inserts the new data.</p>

    <pre className="code-block">
{`REPLACE INTO students (id, name, age, marks)
VALUES (2, 'Aisha', 22, 93);`}
    </pre>

    <p>🧠 <b>Difference:</b>  
      <ul className="bullet-points">
        <li><code>ON DUPLICATE KEY UPDATE</code> → Updates the existing record.</li>
        <li><code>REPLACE INTO</code> → Deletes the old record, then inserts a new one.</li>
      </ul>
    </p>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li><b>INSERT</b> → Adds new rows.</li>
      <li><b>UPDATE</b> → Modifies existing rows.</li>
      <li><b>DELETE</b> → Removes rows.</li>
      <li><b>REPLACE INTO</b> → Deletes old and adds new record.</li>
      <li><b>ON DUPLICATE KEY UPDATE</b> → Updates data if record already exists.</li>
      <li>⚠️ Always use <code>WHERE</code> with <b>UPDATE</b> or <b>DELETE</b> to prevent mass data loss.</li>
    </ul>

    <p className="subtitle">
      🧠 In short: DML commands let you control the actual data stored in tables — 
      they are used most frequently in any MySQL application.
    </p>
  </>
)}
{/* 🔍 5️⃣ MySQL Data Query Language (DQL) */}
{activeSection === "mysql-dql" && (
  <>
    <h1>🔍 5️⃣ MySQL Data Query Language (DQL)</h1>
    <p className="subtitle">
      DQL (Data Query Language) is used to <b>retrieve and analyze data</b> from the database.  
      The main command used is <code>SELECT</code>.
    </p>

    <h2>🧩 Common DQL Commands</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>SELECT</td><td>Retrieves data from one or more tables.</td></tr>
      </tbody>
    </table>

    <h2>📋 SELECT — Retrieving Data</h2>
    <pre className="code-block">
{`-- Retrieve all columns
SELECT * FROM students;

-- Retrieve specific columns
SELECT name, marks FROM students;`}
    </pre>

    <p>✅ <b>Tip:</b> Use <code>*</code> for all columns only in quick checks —  
    prefer column names in production for better performance.</p>

    <h2>🎯 WHERE Clause and Operators</h2>
    <p>Used to filter rows based on conditions.</p>
    <pre className="code-block">
{`SELECT * FROM students WHERE marks > 80;
SELECT * FROM students WHERE course = 'Maths';
SELECT * FROM students WHERE age BETWEEN 18 AND 22;
SELECT * FROM students WHERE name LIKE 'S%';`}
    </pre>

    <h2>⚖️ Sorting Results with ORDER BY</h2>
    <p>Used to sort the output in ascending (ASC) or descending (DESC) order.</p>
    <pre className="code-block">
{`-- Sort by marks (ascending)
SELECT * FROM students ORDER BY marks ASC;

-- Sort by marks (descending)
SELECT * FROM students ORDER BY marks DESC;`}
    </pre>

    <h2>🎚️ Filtering Results with LIMIT</h2>
    <p>Used to limit the number of records returned.</p>
    <pre className="code-block">
{`-- Get top 3 students
SELECT * FROM students ORDER BY marks DESC LIMIT 3;`}
    </pre>

    <h2>🚫 DISTINCT Keyword</h2>
    <p>Removes duplicate values from the result set.</p>
    <pre className="code-block">
{`SELECT DISTINCT course FROM students;`}
    </pre>

    <h2>🏷️ Aliases (AS)</h2>
    <p>Used to give temporary names to columns or tables for readability.</p>
    <pre className="code-block">
{`SELECT name AS StudentName, marks AS Score FROM students;`}
    </pre>

    <h2>🔡 IN, BETWEEN, LIKE, IS NULL</h2>
    <p>These are useful operators for advanced filtering.</p>
    <pre className="code-block">
{`-- IN: Matches any value in a list
SELECT * FROM students WHERE course IN ('Maths', 'Physics');

-- BETWEEN: Selects values within a range
SELECT * FROM students WHERE marks BETWEEN 70 AND 90;

-- LIKE: Pattern matching
SELECT * FROM students WHERE name LIKE 'A%';   -- starts with A
SELECT * FROM students WHERE name LIKE '%a';   -- ends with a

-- IS NULL: Finds missing values
SELECT * FROM students WHERE marks IS NULL;`}
    </pre>

    <h2>📊 Aggregate Functions</h2>
    <p>Used to perform calculations on data columns.</p>
    <table className="style-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>COUNT()</td><td>Counts number of rows.</td></tr>
        <tr><td>SUM()</td><td>Adds up values in a column.</td></tr>
        <tr><td>AVG()</td><td>Calculates average of values.</td></tr>
        <tr><td>MAX()</td><td>Finds the highest value.</td></tr>
        <tr><td>MIN()</td><td>Finds the lowest value.</td></tr>
      </tbody>
    </table>

    <pre className="code-block">
{`SELECT COUNT(*) AS TotalStudents FROM students;
SELECT AVG(marks) AS AverageMarks FROM students;
SELECT MAX(marks), MIN(marks) FROM students;`}
    </pre>

    <h2>🧮 GROUP BY and HAVING</h2>
    <p><b>GROUP BY</b> groups rows that have the same values in specified columns.  
    <b>HAVING</b> is used to filter grouped results (similar to WHERE but for groups).</p>
    <pre className="code-block">
{`-- Find average marks per course
SELECT course, AVG(marks) AS avg_marks
FROM students
GROUP BY course;

-- Show only courses with average > 80
SELECT course, AVG(marks) AS avg_marks
FROM students
GROUP BY course
HAVING avg_marks > 80;`}
    </pre>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li><b>SELECT</b> → Retrieves data.</li>
      <li><b>WHERE</b> → Filters rows.</li>
      <li><b>ORDER BY</b> → Sorts results.</li>
      <li><b>LIMIT</b> → Restricts number of rows.</li>
      <li><b>DISTINCT</b> → Removes duplicates.</li>
      <li><b>AS</b> → Gives alias name to columns/tables.</li>
      <li><b>IN, BETWEEN, LIKE, IS NULL</b> → Advanced filtering.</li>
      <li><b>COUNT, SUM, AVG, MAX, MIN</b> → Aggregate functions.</li>
      <li><b>GROUP BY</b> → Groups rows by column values.</li>
      <li><b>HAVING</b> → Filters grouped data.</li>
    </ul>

    <p className="subtitle">
      🧠 In short: DQL is the <b>heart of MySQL queries</b> —  
      it lets you view, analyze, and summarize data stored in your tables.
    </p>
  </>
)}
{/* 🔗 6️⃣ Joins and Subqueries */}
{activeSection === "mysql-joins-subqueries" && (
  <>
    <h1>🔗 6️⃣ Joins and Subqueries</h1>
    <p className="subtitle">
      Joins are used to <b>combine data from multiple tables</b> based on related columns.  
      Subqueries are <b>queries inside another query</b> for advanced filtering or calculations.
    </p>

    <h2>🧩 What is a JOIN?</h2>
    <p>
      A <b>JOIN</b> connects rows from two or more tables based on a common column — usually a <code>Primary Key</code> or <code>Foreign Key</code>.
    </p>

    <h2>📘 Example Tables</h2>
    <p>Let’s use two example tables:</p>
    <pre className="code-block">
{`Students
+----+----------+--------+
| id | name     | course |
+----+----------+--------+
| 1  | Sofia    | 101    |
| 2  | Rahul    | 102    |
| 3  | Meera    | 103    |
+----+----------+--------+

Courses
+--------+-------------+
| cid    | cname       |
+--------+-------------+
| 101    | SQL         |
| 102    | Java        |
| 104    | Python      |
+--------+-------------+`}
    </pre>

    <h2>🤝 INNER JOIN</h2>
    <p>Returns only rows that have matching values in both tables.</p>
    <pre className="code-block">
{`SELECT students.name, courses.cname
FROM students
INNER JOIN courses
ON students.course = courses.cid;`}
    </pre>
    <p>✅ Shows only students whose course exists in the Courses table.</p>

    <h2>⬅️ LEFT JOIN</h2>
    <p>Returns all records from the <b>left table</b> and matched records from the right table.  
    If there’s no match, <code>NULL</code> is returned for right table columns.</p>
    <pre className="code-block">
{`SELECT students.name, courses.cname
FROM students
LEFT JOIN courses
ON students.course = courses.cid;`}
    </pre>

    <h2>➡️ RIGHT JOIN</h2>
    <p>Returns all records from the <b>right table</b> and matched ones from the left.</p>
    <pre className="code-block">
{`SELECT students.name, courses.cname
FROM students
RIGHT JOIN courses
ON students.course = courses.cid;`}
    </pre>

    <h2>🔄 FULL OUTER JOIN (Workaround using UNION)</h2>
    <p>MySQL doesn’t have direct <code>FULL OUTER JOIN</code>,  
    but you can achieve it using <code>UNION</code> of LEFT and RIGHT joins.</p>
    <pre className="code-block">
{`SELECT students.name, courses.cname
FROM students
LEFT JOIN courses ON students.course = courses.cid
UNION
SELECT students.name, courses.cname
FROM students
RIGHT JOIN courses ON students.course = courses.cid;`}
    </pre>

    <h2>🧮 CROSS JOIN</h2>
    <p>Produces all possible combinations (Cartesian product) of both tables.</p>
    <pre className="code-block">
{`SELECT students.name, courses.cname
FROM students
CROSS JOIN courses;`}
    </pre>
    <p>⚠️ Be careful — results can be very large if both tables have many rows.</p>

    <h2>🔁 Self JOIN</h2>
    <p>A table joins with itself. Used when rows in the same table are related (like manager → employee).</p>
    <pre className="code-block">
{`SELECT A.name AS Employee, B.name AS Manager
FROM employees A
JOIN employees B
ON A.manager_id = B.id;`}
    </pre>

    <h2>📥 Nested / Subqueries</h2>
    <p>
      A <b>Subquery</b> (also called Nested Query) is a query inside another query.  
      The inner query runs first, and its result is used by the outer query.
    </p>
    <pre className="code-block">
{`-- Find students with marks above the average
SELECT name, marks
FROM students
WHERE marks > (SELECT AVG(marks) FROM students);`}
    </pre>

    <h2>🔍 Correlated Subqueries</h2>
    <p>
      A <b>Correlated Subquery</b> runs once for each row of the outer query.  
      It depends on the outer query’s data.
    </p>
    <pre className="code-block">
{`-- Find students who scored more than the average in their own course
SELECT name, course, marks
FROM students s
WHERE marks > (
  SELECT AVG(marks)
  FROM students
  WHERE course = s.course
);`}
    </pre>

    <h2>✅ Summary</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Join Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>INNER JOIN</td><td>Matches rows in both tables.</td></tr>
        <tr><td>LEFT JOIN</td><td>All from left table, matched from right.</td></tr>
        <tr><td>RIGHT JOIN</td><td>All from right table, matched from left.</td></tr>
        <tr><td>FULL OUTER JOIN</td><td>All records from both tables (via UNION).</td></tr>
        <tr><td>CROSS JOIN</td><td>All combinations of rows from both tables.</td></tr>
        <tr><td>SELF JOIN</td><td>Table joins itself.</td></tr>
        <tr><td>SUBQUERY</td><td>Query inside another query.</td></tr>
        <tr><td>CORRELATED SUBQUERY</td><td>Subquery depends on outer query values.</td></tr>
      </tbody>
    </table>

    <p className="subtitle">
      🧠 In short: <b>Joins connect data across tables</b>,  
      while <b>Subqueries extract data using conditions from other queries</b>.
    </p>
  </>
)}
{/* 🧩 7️⃣ MySQL Constraints & Keys */}
{activeSection === "mysql-constraints-keys" && (
  <>
    <h1>🧩 7️⃣ MySQL Constraints & Keys</h1>
    <p className="subtitle">
      <b>Constraints</b> are rules applied to table columns to ensure the accuracy, validity, and reliability of data.  
      <b>Keys</b> help uniquely identify and link records between tables.
    </p>

    <h2>📘 What are Constraints?</h2>
    <p>
      Constraints help maintain <b>data integrity</b> — they prevent invalid or duplicate data from being stored.
    </p>

    <h2>⚙️ Common MySQL Constraints</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Constraint</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>PRIMARY KEY</td><td>Uniquely identifies each record in a table.</td></tr>
        <tr><td>FOREIGN KEY</td><td>Links two tables and ensures referential integrity.</td></tr>
        <tr><td>UNIQUE</td><td>Ensures all values in a column are different.</td></tr>
        <tr><td>COMPOSITE KEY</td><td>Primary Key made up of two or more columns.</td></tr>
        <tr><td>CHECK</td><td>Ensures values meet a specific condition.</td></tr>
        <tr><td>DEFAULT</td><td>Sets a default value if none is provided.</td></tr>
      </tbody>
    </table>

    <h2>🔑 PRIMARY KEY</h2>
    <p>
      A <b>Primary Key</b> uniquely identifies every row in a table.  
      It doesn’t allow <code>NULL</code> or duplicate values.
    </p>
    <pre className="code-block">
{`CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT
);`}
    </pre>
    <p>✅ Only one Primary Key is allowed per table.</p>

    <h2>🔗 FOREIGN KEY</h2>
    <p>
      A <b>Foreign Key</b> creates a relationship between two tables.  
      It connects a column in one table to a Primary Key in another.
    </p>
    <pre className="code-block">
{`CREATE TABLE courses (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(50)
);

CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  course_id INT,
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);`}
    </pre>
    <p>✅ Ensures that each student’s <code>course_id</code> must exist in the <code>courses</code> table.</p>

    <h2>💎 UNIQUE KEY</h2>
    <p>
      A <b>Unique Key</b> ensures all values in a column are different, but unlike Primary Key,  
      it <b>allows one NULL</b> value and you can have multiple Unique Keys per table.
    </p>
    <pre className="code-block">
{`CREATE TABLE employees (
  emp_id INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE
);`}
    </pre>

    <h2>🧮 COMPOSITE KEY</h2>
    <p>
      A <b>Composite Key</b> uses multiple columns together as a unique identifier.
    </p>
    <pre className="code-block">
{`CREATE TABLE student_courses (
  student_id INT,
  course_id INT,
  PRIMARY KEY (student_id, course_id)
);`}
    </pre>
    <p>✅ Combination of <code>student_id</code> and <code>course_id</code> must be unique.</p>

    <h2>✅ CHECK Constraint</h2>
    <p>
      The <b>CHECK</b> constraint ensures that column values meet specific conditions.
    </p>
    <pre className="code-block">
{`CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  price DECIMAL(10,2),
  CHECK (price > 0)
);`}
    </pre>
    <p>⚠️ Prevents inserting a product with a price less than or equal to 0.</p>

    <h2>⚙️ DEFAULT Constraint</h2>
    <p>
      The <b>DEFAULT</b> constraint sets a value automatically when none is provided.
    </p>
    <pre className="code-block">
{`CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  status VARCHAR(20) DEFAULT 'Pending'
);`}
    </pre>
    <p>✅ If no status is entered, MySQL sets it to <code>'Pending'</code> automatically.</p>

    <h2>🧠 Summary</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Constraint</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>PRIMARY KEY</td><td>Uniquely identifies each record (no duplicates, no NULLs).</td></tr>
        <tr><td>FOREIGN KEY</td><td>Links tables, maintains referential integrity.</td></tr>
        <tr><td>UNIQUE</td><td>Ensures column values are distinct.</td></tr>
        <tr><td>COMPOSITE KEY</td><td>Combination of columns as unique identifier.</td></tr>
        <tr><td>CHECK</td><td>Validates data based on a logical condition.</td></tr>
        <tr><td>DEFAULT</td><td>Provides automatic value when not specified.</td></tr>
      </tbody>
    </table>

    <p className="subtitle">
      🧩 In short: Constraints keep your data valid, consistent, and meaningful —  
      they form the backbone of reliable database design.
    </p>
  </>
)}
{/* ⚙️ 8️⃣ MySQL Functions */}
{activeSection === "mysql-functions" && (
  <>
    <h1>⚙️ 8️⃣ MySQL Functions</h1>
    <p className="subtitle">
      <b>MySQL Functions</b> are built-in operations that perform calculations, modify data, or format output.  
      They make queries more powerful and flexible.
    </p>

    <h2>🧩 Types of MySQL Functions</h2>
    <ul>
      <li>🔤 String Functions</li>
      <li>🔢 Numeric Functions</li>
      <li>📅 Date & Time Functions</li>
      <li>⚙️ Conditional Functions</li>
    </ul>

    <h2>🔤 String Functions</h2>
    <p>
      Used to manipulate and handle text or character data.
    </p>
    <table className="style-table">
      <thead>
        <tr><th>Function</th><th>Description</th><th>Example</th><th>Output</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>CONCAT()</td>
          <td>Joins two or more strings.</td>
          <td><code>SELECT CONCAT('My', 'SQL');</code></td>
          <td>MySQL</td>
        </tr>
        <tr>
          <td>SUBSTRING()</td>
          <td>Extracts part of a string.</td>
          <td><code>SELECT SUBSTRING('Database', 1, 4);</code></td>
          <td>Data</td>
        </tr>
        <tr>
          <td>LENGTH()</td>
          <td>Returns the length of a string.</td>
          <td><code>SELECT LENGTH('SQL');</code></td>
          <td>3</td>
        </tr>
        <tr>
          <td>UPPER()</td>
          <td>Converts text to uppercase.</td>
          <td><code>SELECT UPPER('mysql');</code></td>
          <td>MYSQL</td>
        </tr>
        <tr>
          <td>LOWER()</td>
          <td>Converts text to lowercase.</td>
          <td><code>SELECT LOWER('MYSQL');</code></td>
          <td>mysql</td>
        </tr>
      </tbody>
    </table>

    <h2>🔢 Numeric Functions</h2>
    <p>
      Used to perform mathematical operations.
    </p>
    <table className="style-table">
      <thead>
        <tr><th>Function</th><th>Description</th><th>Example</th><th>Output</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>ROUND()</td>
          <td>Rounds a number to a given decimal place.</td>
          <td><code>SELECT ROUND(12.567, 2);</code></td>
          <td>12.57</td>
        </tr>
        <tr>
          <td>CEIL()</td>
          <td>Rounds a number up to the nearest integer.</td>
          <td><code>SELECT CEIL(4.2);</code></td>
          <td>5</td>
        </tr>
        <tr>
          <td>FLOOR()</td>
          <td>Rounds a number down to the nearest integer.</td>
          <td><code>SELECT FLOOR(4.8);</code></td>
          <td>4</td>
        </tr>
        <tr>
          <td>MOD()</td>
          <td>Returns the remainder of a division.</td>
          <td><code>SELECT MOD(10, 3);</code></td>
          <td>1</td>
        </tr>
      </tbody>
    </table>

    <h2>📅 Date & Time Functions</h2>
    <p>
      Used to work with dates and times in MySQL.
    </p>
    <table className="style-table">
      <thead>
        <tr><th>Function</th><th>Description</th><th>Example</th><th>Output</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>NOW()</td>
          <td>Returns the current date and time.</td>
          <td><code>SELECT NOW();</code></td>
          <td>2025-11-13 14:30:00</td>
        </tr>
        <tr>
          <td>CURDATE()</td>
          <td>Returns the current date only.</td>
          <td><code>SELECT CURDATE();</code></td>
          <td>2025-11-13</td>
        </tr>
        <tr>
          <td>DATEDIFF()</td>
          <td>Finds the difference (in days) between two dates.</td>
          <td><code>SELECT DATEDIFF('2025-12-01', '2025-11-13');</code></td>
          <td>18</td>
        </tr>
        <tr>
          <td>DATE_FORMAT()</td>
          <td>Formats a date into a specific style.</td>
          <td><code>SELECT DATE_FORMAT(NOW(), '%d-%M-%Y');</code></td>
          <td>13-November-2025</td>
        </tr>
      </tbody>
    </table>

    <h2>⚙️ Conditional Functions</h2>
    <p>
      Used to perform decision-making within SQL queries (like <code>if-else</code> logic).
    </p>
    <table className="style-table">
      <thead>
        <tr><th>Function</th><th>Description</th><th>Example</th><th>Output</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>IF()</td>
          <td>Checks a condition and returns one of two values.</td>
          <td><code>SELECT IF(100 {`>`} 50, 'Yes', 'No');</code></td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>CASE WHEN</td>
          <td>Performs multiple conditional checks (like switch-case).</td>
          <td>
            <pre className="code-block small">
{`SELECT CASE
  WHEN marks >= 90 THEN 'A'
  WHEN marks >= 75 THEN 'B'
  ELSE 'C'
END AS Grade;`}
            </pre>
          </td>
          <td>A / B / C</td>
        </tr>
        <tr>
          <td>COALESCE()</td>
          <td>Returns the first non-NULL value.</td>
          <td><code>SELECT COALESCE(NULL, NULL, 'SQL');</code></td>
          <td>SQL</td>
        </tr>
      </tbody>
    </table>

    <h2>📊 Summary</h2>
    <table className="style-table">
      <thead>
        <tr><th>Category</th><th>Common Functions</th><th>Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td>String</td><td>CONCAT(), SUBSTRING(), LENGTH(), UPPER(), LOWER()</td><td>Work with text data</td></tr>
        <tr><td>Numeric</td><td>ROUND(), CEIL(), FLOOR(), MOD()</td><td>Perform math operations</td></tr>
        <tr><td>Date</td><td>NOW(), CURDATE(), DATEDIFF(), DATE_FORMAT()</td><td>Handle date/time values</td></tr>
        <tr><td>Conditional</td><td>IF(), CASE WHEN, COALESCE()</td><td>Make logical decisions in queries</td></tr>
      </tbody>
    </table>

    <p className="subtitle">
      🧠 <b>Tip:</b> MySQL functions make your queries smarter — helping you format, calculate, and filter data directly inside SQL!
    </p>
  </>
)}
{/* 🧮 9️⃣ MySQL Views */}
{activeSection === "mysql-views" && (
  <>
    <h1>🧮 9️⃣ MySQL Views</h1>
    <p className="subtitle">
      A <b>View</b> is like a <b>virtual table</b> that shows data from one or more tables.  
      It doesn’t store data itself — it just saves a SQL query and displays the result whenever used.
    </p>

    <h2>📘 What is a View?</h2>
    <p>
      A <b>View</b> works like a saved <code>SELECT</code> statement.  
      When you query a view, MySQL runs the saved query behind the scenes and shows the result as if it were a table.
    </p>

    <p><b>👉 Example:</b></p>
    <pre className="code-block">
{`SELECT name, salary FROM employees WHERE salary > 50000;`}
    </pre>
    <p>
      Instead of writing this query every time, we can create a <b>view</b> called <code>high_salary_employees</code>.
    </p>

    <h2>🛠️ Creating a View (CREATE VIEW)</h2>
    <p>We use the <code>CREATE VIEW</code> command to make a view.</p>

    <pre className="code-block">
{`CREATE VIEW high_salary_employees AS
SELECT name, salary
FROM employees
WHERE salary > 50000;`}
    </pre>

    <p>
      ✅ Now you can use it like a normal table:
    </p>
    <pre className="code-block">
{`SELECT * FROM high_salary_employees;`}
    </pre>

    <h2>✏️ Updating a View</h2>
    <p>
      If you want to change a view’s query, use <code>CREATE OR REPLACE VIEW</code>.
    </p>
    <pre className="code-block">
{`CREATE OR REPLACE VIEW high_salary_employees AS
SELECT name, salary, department
FROM employees
WHERE salary > 60000;`}
    </pre>

    <p>✅ This updates the existing view with the new query.</p>

    <h2>🗑️ Dropping a View</h2>
    <p>
      If you no longer need a view, you can delete it using <code>DROP VIEW</code>.
    </p>
    <pre className="code-block">
{`DROP VIEW high_salary_employees;`}
    </pre>

    <h2>🌟 Advantages of Views</h2>
    <ul>
      <li>✅ Simplifies complex queries (you can reuse the saved query easily).</li>
      <li>✅ Improves security — users can access only specific columns or rows.</li>
      <li>✅ Increases readability — makes SQL code cleaner and shorter.</li>
      <li>✅ Acts as a virtual layer — no extra storage needed for data.</li>
      <li>✅ Makes maintenance easier — if logic changes, just update the view once.</li>
    </ul>

    <h2>📊 Summary</h2>
    <table className="style-table">
      <thead>
        <tr><th>Command</th><th>Purpose</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><code>CREATE VIEW</code></td>
          <td>Create a new view</td>
          <td><code>CREATE VIEW view_name AS SELECT ...</code></td>
        </tr>
        <tr>
          <td><code>CREATE OR REPLACE VIEW</code></td>
          <td>Update or modify an existing view</td>
          <td><code>CREATE OR REPLACE VIEW ...</code></td>
        </tr>
        <tr>
          <td><code>DROP VIEW</code></td>
          <td>Delete an existing view</td>
          <td><code>DROP VIEW view_name;</code></td>
        </tr>
      </tbody>
    </table>

    <p className="subtitle">
      💡 <b>Tip:</b> Think of a <b>View</b> as a shortcut to a frequently used SQL query!
    </p>
  </>
)}
{/* 🔐 🔟 MySQL Transactions & TCL */}
{activeSection === "mysql-transactions" && (
  <>
    <h1>🔐 🔟 MySQL Transactions & TCL (Transaction Control Language)</h1>
    <p className="subtitle">
      A <b>Transaction</b> is a group of one or more SQL operations that are executed as a single unit.  
      Either <b>all changes happen</b>, or <b>none happen</b> — ensuring data consistency and reliability.
    </p>

    <h2>📘 What is a Transaction?</h2>
    <p>
      A transaction ensures that a series of database operations are executed completely or not at all.  
      It’s mainly used in scenarios like banking — e.g., money transfers must <b>either debit and credit both</b>, or <b>neither</b>.
    </p>

    <p><b>Example:</b></p>
    <pre className="code-block">
{`-- Transferring 1000 from Account A to Account B
START TRANSACTION;

UPDATE accounts SET balance = balance - 1000 WHERE id = 1;  -- Debit A
UPDATE accounts SET balance = balance + 1000 WHERE id = 2;  -- Credit B

COMMIT;  -- Save changes permanently`}
    </pre>

    <p>
      If something goes wrong, you can <b>ROLLBACK</b> the transaction to undo the changes.
    </p>

    <h2>⚙️ TCL (Transaction Control Language) Commands</h2>

    <h3>1️⃣ START TRANSACTION</h3>
    <p>Begins a new transaction block.</p>
    <pre className="code-block">
{`START TRANSACTION;`}
    </pre>

    <h3>2️⃣ COMMIT</h3>
    <p>Saves all changes made during the current transaction permanently.</p>
    <pre className="code-block">
{`COMMIT;`}
    </pre>

    <h3>3️⃣ ROLLBACK</h3>
    <p>Undoes all changes made since the last <code>START TRANSACTION</code>.</p>
    <pre className="code-block">
{`ROLLBACK;`}
    </pre>

    <h3>4️⃣ SAVEPOINT</h3>
    <p>
      Creates a <b>temporary checkpoint</b> within a transaction.  
      You can roll back to that point instead of undoing the entire transaction.
    </p>

    <pre className="code-block">
{`START TRANSACTION;

UPDATE accounts SET balance = balance - 500 WHERE id = 1;
SAVEPOINT step1;

UPDATE accounts SET balance = balance + 500 WHERE id = 2;
ROLLBACK TO step1;  -- Undo only second update

COMMIT;`}
    </pre>

    <h3>5️⃣ SET AUTOCOMMIT</h3>
    <p>
      By default, MySQL commits every statement automatically.  
      You can disable this using <code>SET AUTOCOMMIT = 0</code> to manually control transactions.
    </p>

    <pre className="code-block">
{`SET AUTOCOMMIT = 0;

INSERT INTO products VALUES (101, 'Laptop', 45000);
ROLLBACK;  -- Undo the insert

SET AUTOCOMMIT = 1;`}
    </pre>

    <h2>🧱 ACID Properties</h2>
    <p>
      Transactions follow the <b>ACID</b> properties to ensure data reliability:
    </p>

    <table className="style-table">
      <thead>
        <tr><th>Property</th><th>Meaning</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><b>A — Atomicity</b></td>
          <td>All operations complete successfully or none at all.</td>
          <td>Money transfer — debit and credit both happen or none.</td>
        </tr>
        <tr>
          <td><b>C — Consistency</b></td>
          <td>Database remains valid before and after the transaction.</td>
          <td>Total amount in accounts stays the same.</td>
        </tr>
        <tr>
          <td><b>I — Isolation</b></td>
          <td>Transactions don’t affect each other’s intermediate states.</td>
          <td>Two users editing same data won’t interfere.</td>
        </tr>
        <tr>
          <td><b>D — Durability</b></td>
          <td>Once committed, data is permanently saved even if the system fails.</td>
          <td>Committed transactions survive power loss.</td>
        </tr>
      </tbody>
    </table>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li><b>START TRANSACTION</b> — Begin a transaction.</li>
      <li><b>COMMIT</b> — Save changes permanently.</li>
      <li><b>ROLLBACK</b> — Undo changes since the last transaction.</li>
      <li><b>SAVEPOINT</b> — Create a temporary checkpoint.</li>
      <li><b>SET AUTOCOMMIT</b> — Control automatic commits.</li>
    </ul>

    <p className="subtitle">
      💡 <b>Tip:</b> Use transactions when performing multiple operations that must succeed or fail together — like <b>bank transfers</b>, <b>inventory updates</b>, or <b>billing systems</b>.
    </p>
  </>
)}
{/* 🧰 11️⃣ MySQL Users & Privileges (DCL) */}
{activeSection === "mysql-users-privileges" && (
  <>
    <h1>🧰 11️⃣ MySQL Users & Privileges (DCL)</h1>
    <p className="subtitle">
      <b>DCL (Data Control Language)</b> is used to control access to the database.  
      It manages <b>who</b> can connect and <b>what actions</b> they can perform.
    </p>

    <h2>👤 What is a User in MySQL?</h2>
    <p>
      A <b>MySQL user</b> is an account that can connect to the database server and perform operations based on assigned privileges.
    </p>
    <p>Each user is defined as: <code>'username'@'hostname'</code></p>

    <pre className="code-block">
{`'admin'@'localhost'   -- user 'admin' can log in only from this computer
'developer'@'%'        -- user 'developer' can log in from any host`}
    </pre>

    <h2>🆕 Creating Users</h2>
    <p>Use the <code>CREATE USER</code> statement to add a new user account.</p>

    <pre className="code-block">
{`CREATE USER 'username'@'host' IDENTIFIED BY 'password';`}
    </pre>

    <p><b>Examples:</b></p>
    <pre className="code-block">
{`CREATE USER 'sofia'@'localhost' IDENTIFIED BY '12345';
CREATE USER 'dev_user'@'%' IDENTIFIED BY 'password123';`}
    </pre>

    <p>
      The first user can only access MySQL from the same machine.  
      The second can connect from any host.
    </p>

    <h2>🎁 Granting Privileges (GRANT)</h2>
    <p>
      The <code>GRANT</code> command gives specific permissions to a user for certain databases or tables.
    </p>

    <pre className="code-block">
{`GRANT privilege_list ON database_name.table_name TO 'username'@'host';`}
    </pre>

    <p><b>Examples:</b></p>
    <pre className="code-block">
{`GRANT ALL PRIVILEGES ON *.* TO 'sofia'@'localhost';
GRANT SELECT, INSERT, UPDATE ON company_db.* TO 'dev_user'@'%';`}
    </pre>

    <ul className="bullet-points">
      <li><b>ALL PRIVILEGES</b> → Grants full control (like admin).</li>
      <li><b>SELECT, INSERT, UPDATE, DELETE</b> → Control data operations.</li>
      <li><b>CREATE, DROP</b> → Allow table/database creation or removal.</li>
    </ul>

    <p>After granting privileges, always run:</p>
    <pre className="code-block">
{`FLUSH PRIVILEGES;`}
    </pre>

    <h2>🚫 Revoking Privileges (REVOKE)</h2>
    <p>
      To remove a user’s permissions, use <code>REVOKE</code>.
    </p>

    <pre className="code-block">
{`REVOKE privilege_list ON database_name.table_name FROM 'username'@'host';`}
    </pre>

    <p><b>Example:</b></p>
    <pre className="code-block">
{`REVOKE INSERT, UPDATE ON company_db.* FROM 'dev_user'@'%';`}
    </pre>

    <p>✅ Always refresh privileges after revoking:</p>
    <pre className="code-block">
{`FLUSH PRIVILEGES;`}
    </pre>

    <h2>❌ Dropping Users</h2>
    <p>
      Use <code>DROP USER</code> to permanently remove a MySQL account.
    </p>

    <pre className="code-block">
{`DROP USER 'username'@'host';`}
    </pre>

    <p><b>Example:</b></p>
    <pre className="code-block">
{`DROP USER 'dev_user'@'%';`}
    </pre>

    <h2>🔑 Role-based Access Control (RBAC)</h2>
    <p>
      Roles help manage permissions easily by assigning a set of privileges to multiple users at once.
    </p>

    <h3>1️⃣ Create a Role</h3>
    <pre className="code-block">
{`CREATE ROLE 'developer_role';`}
    </pre>

    <h3>2️⃣ Grant Privileges to Role</h3>
    <pre className="code-block">
{`GRANT SELECT, INSERT, UPDATE ON company_db.* TO 'developer_role';`}
    </pre>

    <h3>3️⃣ Assign Role to Users</h3>
    <pre className="code-block">
{`GRANT 'developer_role' TO 'sofia'@'localhost';`}
    </pre>

    <h3>4️⃣ Activate Role</h3>
    <pre className="code-block">
{`SET DEFAULT ROLE 'developer_role' TO 'sofia'@'localhost';`}
    </pre>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li><b>CREATE USER</b> → Add new database users.</li>
      <li><b>GRANT</b> → Give permissions to users.</li>
      <li><b>REVOKE</b> → Remove specific privileges.</li>
      <li><b>DROP USER</b> → Delete user accounts.</li>
      <li><b>ROLES</b> → Group privileges for easy management.</li>
    </ul>

    <p className="subtitle">
      💡 <b>Tip:</b> Always grant only the necessary permissions to users.  
      This ensures <b>security</b> and prevents <b>accidental data loss</b>.
    </p>
  </>
)}
{/* 🧱 12️⃣ MySQL Stored Procedures & Functions */}
{activeSection === "mysql-procedures-functions" && (
  <>
    <h1>🧱 12️⃣ MySQL Stored Procedures & Functions</h1>
    <p className="subtitle">
      In MySQL, <b>Stored Procedures</b> and <b>User-defined Functions (UDFs)</b> help you store SQL logic in the database itself,
      so you can reuse it multiple times without rewriting code.
    </p>

    <h2>💡 What is a Stored Procedure?</h2>
    <p>
      A <b>Stored Procedure</b> is a group of SQL statements saved in the database, which can be executed whenever needed using a single command.
    </p>
    <p>Think of it as a “function” in programming — but it runs inside the MySQL server.</p>

    <h3>✅ Syntax:</h3>
    <pre className="code-block">
{`DELIMITER //

CREATE PROCEDURE procedure_name()
BEGIN
   -- SQL statements
END //

DELIMITER ;`}
    </pre>

    <h3>🧠 Example:</h3>
    <pre className="code-block">
{`DELIMITER //

CREATE PROCEDURE GetAllStudents()
BEGIN
   SELECT * FROM students;
END //

DELIMITER ;

-- To run it:
CALL GetAllStudents();`}
    </pre>

    <p>👉 This procedure fetches all rows from the <code>students</code> table whenever called.</p>

    <h2>⚙️ IN, OUT, and INOUT Parameters</h2>
    <p>
      You can pass values to procedures or get values back using parameters:
    </p>
    <table className="style-table">
      <thead>
        <tr>
          <th>Parameter Type</th>
          <th>Description</th>
          <th>Example Use</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>IN</b></td>
          <td>Passes a value into the procedure (read-only).</td>
          <td>Input parameters like ID, name, etc.</td>
        </tr>
        <tr>
          <td><b>OUT</b></td>
          <td>Returns a value back to the caller.</td>
          <td>Return a calculated total or message.</td>
        </tr>
        <tr>
          <td><b>INOUT</b></td>
          <td>Used for both input and output.</td>
          <td>Modify and return the same variable.</td>
        </tr>
      </tbody>
    </table>

    <h3>🧩 Example with Parameters:</h3>
    <pre className="code-block">
{`DELIMITER //

CREATE PROCEDURE GetStudentById(IN studentId INT)
BEGIN
   SELECT * FROM students WHERE id = studentId;
END //

DELIMITER ;

CALL GetStudentById(3);`}
    </pre>

    <h3>🎯 Example with OUT Parameter:</h3>
    <pre className="code-block">
{`DELIMITER //

CREATE PROCEDURE CountStudents(OUT total INT)
BEGIN
   SELECT COUNT(*) INTO total FROM students;
END //

DELIMITER ;

CALL CountStudents(@result);
SELECT @result AS 'Total Students';`}
    </pre>

    <p>
      Here, <code>@result</code> stores the value returned from the procedure.
    </p>

    <h2>🧮 User-defined Functions (UDFs)</h2>
    <p>
      A <b>User-defined Function</b> (UDF) is similar to a procedure but <b>returns a single value</b> and can be used inside SQL queries.
    </p>

    <h3>✅ Syntax:</h3>
    <pre className="code-block">
{`DELIMITER //

CREATE FUNCTION function_name(parameters)
RETURNS data_type
DETERMINISTIC
BEGIN
   -- logic
   RETURN value;
END //

DELIMITER ;`}
    </pre>

    <h3>🧠 Example:</h3>
    <pre className="code-block">
{`DELIMITER //

CREATE FUNCTION GetFullName(fname VARCHAR(50), lname VARCHAR(50))
RETURNS VARCHAR(100)
DETERMINISTIC
BEGIN
   RETURN CONCAT(fname, ' ', lname);
END //

DELIMITER ;

-- Use it in a query:
SELECT GetFullName('Sofia', 'Roy') AS FullName;`}
    </pre>

    <p>✅ Output: <b>Sofia Roy</b></p>

    <h2>⚔️ Difference Between Procedure and Function</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Stored Procedure</th>
          <th>User-defined Function</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Return Type</td>
          <td>Can return multiple values (using OUT parameters).</td>
          <td>Returns only one value.</td>
        </tr>
        <tr>
          <td>Use in Queries</td>
          <td>Cannot be used directly in SELECT statements.</td>
          <td>Can be used inside SELECT, WHERE, etc.</td>
        </tr>
        <tr>
          <td>Purpose</td>
          <td>Perform actions (INSERT, UPDATE, etc.)</td>
          <td>Compute and return a result.</td>
        </tr>
        <tr>
          <td>Return Keyword</td>
          <td>Not mandatory.</td>
          <td>Mandatory.</td>
        </tr>
        <tr>
          <td>Transaction Control</td>
          <td>Can use COMMIT and ROLLBACK.</td>
          <td>Cannot use transaction control.</td>
        </tr>
      </tbody>
    </table>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li>Stored Procedures save reusable SQL logic inside the database.</li>
      <li>They can take <b>IN, OUT, or INOUT</b> parameters.</li>
      <li>User-defined Functions return a single value and can be used inside queries.</li>
      <li>Procedures are used for operations; Functions for calculations.</li>
      <li>Both improve <b>code reusability, performance, and maintainability</b>.</li>
    </ul>

    <p className="subtitle">
      🚀 <b>Pro Tip:</b> Use procedures for multi-step logic and functions for returning specific results like total salary or tax.
    </p>
  </>
)}
{/* 🧭 13️⃣ MySQL Triggers & Events */}
{activeSection === "mysql-triggers-events" && (
  <>
    <h1>🧭 13️⃣ MySQL Triggers & Events</h1>
    <p className="subtitle">
      Triggers and Events in MySQL are used to <b>automate actions</b> — they help execute SQL statements automatically
      when specific conditions occur or at scheduled times.
    </p>

    <h2>⚡ What is a Trigger?</h2>
    <p>
      A <b>Trigger</b> is a special stored program in MySQL that automatically runs (fires) when a specific
      action (INSERT, UPDATE, or DELETE) happens on a table.
    </p>
    <p>Triggers are used for auditing, validation, or maintaining log tables automatically.</p>

    <h3>✅ Syntax:</h3>
    <pre className="code-block">
{`CREATE TRIGGER trigger_name
BEFORE | AFTER INSERT | UPDATE | DELETE
ON table_name
FOR EACH ROW
BEGIN
   -- SQL statements
END;`}
    </pre>

    <h2>🧩 Example: BEFORE Trigger</h2>
    <p>This trigger runs <b>before inserting</b> a new record — we can modify or validate data before it goes into the table.</p>
    <pre className="code-block">
{`DELIMITER //

CREATE TRIGGER before_student_insert
BEFORE INSERT ON students
FOR EACH ROW
BEGIN
   SET NEW.created_at = NOW();
END //

DELIMITER ;`}
    </pre>

    <p>👉 This automatically sets the <code>created_at</code> column to the current time when a new student record is inserted.</p>

    <h2>🧠 Example: AFTER Trigger</h2>
    <p>This trigger runs <b>after</b> data is inserted — often used for logging or backup tables.</p>
    <pre className="code-block">
{`DELIMITER //

CREATE TRIGGER after_student_insert
AFTER INSERT ON students
FOR EACH ROW
BEGIN
   INSERT INTO student_log(student_id, action, log_time)
   VALUES (NEW.id, 'Inserted', NOW());
END //

DELIMITER ;`}
    </pre>

    <p>
      ✅ Here, every time a new record is added to <code>students</code>, a log entry is automatically created in
      <code>student_log</code>.
    </p>

    <h2>🔁 Types of Triggers</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>When It Executes</th>
          <th>Example Use</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>BEFORE INSERT</b></td>
          <td>Before inserting a record.</td>
          <td>Modify or validate data before saving.</td>
        </tr>
        <tr>
          <td><b>AFTER INSERT</b></td>
          <td>After inserting a record.</td>
          <td>Log or perform follow-up actions.</td>
        </tr>
        <tr>
          <td><b>BEFORE UPDATE</b></td>
          <td>Before updating a record.</td>
          <td>Track changes or validate new data.</td>
        </tr>
        <tr>
          <td><b>AFTER UPDATE</b></td>
          <td>After updating a record.</td>
          <td>Save old data to a backup table.</td>
        </tr>
        <tr>
          <td><b>BEFORE DELETE</b></td>
          <td>Before deleting a record.</td>
          <td>Prevent deletion or save data for audit.</td>
        </tr>
        <tr>
          <td><b>AFTER DELETE</b></td>
          <td>After deleting a record.</td>
          <td>Log or clean up related data.</td>
        </tr>
      </tbody>
    </table>

    <h2>📋 Row-level vs Statement-level Triggers</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Trigger Type</th>
          <th>Description</th>
          <th>Support in MySQL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Row-level Trigger</b></td>
          <td>Executes once for every affected row.</td>
          <td>✅ Supported (default in MySQL)</td>
        </tr>
        <tr>
          <td><b>Statement-level Trigger</b></td>
          <td>Executes once per SQL statement (no matter how many rows are affected).</td>
          <td>❌ Not supported in MySQL</td>
        </tr>
      </tbody>
    </table>

    <p className="note">
      💡 MySQL only supports <b>Row-level Triggers</b> — meaning it runs for each row affected by the statement.
    </p>

    <h2>🕓 MySQL Events (Scheduled Tasks)</h2>
    <p>
      An <b>Event</b> in MySQL is like a <b>scheduled job</b>.  
      It allows you to automatically run SQL statements at a specific time or repeatedly at fixed intervals.
    </p>

    <h3>✅ Enable the Event Scheduler:</h3>
    <pre className="code-block">
{`SET GLOBAL event_scheduler = ON;`}
    </pre>

    <h3>🧠 Example: Create an Event</h3>
    <pre className="code-block">
{`CREATE EVENT delete_old_logs
ON SCHEDULE EVERY 1 DAY
DO
   DELETE FROM student_log WHERE log_time < NOW() - INTERVAL 30 DAY;`}
    </pre>

    <p>
      🗓️ This event automatically deletes logs older than 30 days once every day.
    </p>

    <h3>⚙️ Managing Events</h3>
    <table className="style-table">
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>SHOW EVENTS;</code></td>
          <td>Lists all scheduled events.</td>
        </tr>
        <tr>
          <td><code>ALTER EVENT event_name ON COMPLETION PRESERVE;</code></td>
          <td>Keeps event after it executes once.</td>
        </tr>
        <tr>
          <td><code>DROP EVENT event_name;</code></td>
          <td>Deletes an existing event.</td>
        </tr>
      </tbody>
    </table>

    <h2>✅ Summary</h2>
    <ul className="bullet-points">
      <li><b>Triggers</b> run automatically when INSERT, UPDATE, or DELETE happens.</li>
      <li><b>BEFORE</b> triggers modify data before execution, <b>AFTER</b> triggers act after.</li>
      <li>MySQL supports only <b>Row-level</b> triggers.</li>
      <li><b>Events</b> are used for scheduled automatic SQL executions (like CRON jobs).</li>
      <li>Both features help automate database management and maintain data integrity.</li>
    </ul>

    <p className="subtitle">
      🚀 <b>Pro Tip:</b> Use triggers for real-time automation and events for time-based automation.
    </p>
  </>
)}
{/* 📦 14️⃣ MySQL Indexes & Optimization */}
{activeSection === "mysql-indexes-optimization" && (
  <>
    <h1>📦 14️⃣ MySQL Indexes & Optimization</h1>
    <p className="subtitle">
      MySQL <b>Indexes</b> help speed up data retrieval from large tables — they make searches, filters, and sorting operations much faster 🚀.
    </p>

    <h2>📘 What is an Index?</h2>
    <p>
      An <b>Index</b> in MySQL is a data structure (like an index in a book) that helps the database find rows quickly without scanning the entire table.
    </p>
    <p>
      Without an index, MySQL must check every row one by one (called a <b>full table scan</b>), which is slow for large data.
    </p>

    <h3>🧠 Analogy:</h3>
    <p>
      Imagine a book 📖 — without an index, you must read every page to find a topic.  
      With an index, you jump directly to the page number — much faster!
    </p>

    <h2>✅ Example Table</h2>
    <pre className="code-block">
{`CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  age INT,
  city VARCHAR(50)
);`}
    </pre>

    <h2>⚙️ Creating Indexes</h2>
    <p>
      You can create an index on one or more columns to make searching and sorting faster.
    </p>

    <pre className="code-block">
{`-- Create index on one column
CREATE INDEX idx_name ON students(name);

-- Create index on multiple columns
CREATE INDEX idx_city_age ON students(city, age);`}
    </pre>

    <h2>🔍 Viewing and Dropping Indexes</h2>
    <pre className="code-block">
{`-- Show all indexes for a table
SHOW INDEX FROM students;

-- Drop an index
DROP INDEX idx_name ON students;`}
    </pre>

    <h2>🧩 Composite Indexes</h2>
    <p>
      A <b>composite index</b> is created on <b>two or more columns</b>.  
      It’s useful when queries often filter or sort based on multiple columns together.
    </p>

    <pre className="code-block">
{`CREATE INDEX idx_city_age ON students(city, age);

-- This index helps with:
SELECT * FROM students WHERE city = 'Delhi' AND age = 20;`}
    </pre>

    <p className="note">
      💡 Order matters: <code>(city, age)</code> helps queries filtering by both or just <code>city</code>,  
      but not by <code>age</code> alone efficiently.
    </p>

    <h2>⚡ Performance Optimization Tips</h2>
    <ul className="bullet-points">
      <li>✅ Use indexes on columns that appear frequently in <b>WHERE</b>, <b>JOIN</b>, or <b>ORDER BY</b> clauses.</li>
      <li>⚠️ Avoid creating too many indexes — they make <b>INSERT</b> and <b>UPDATE</b> slower because each index must be updated.</li>
      <li>🧠 Use <b>EXPLAIN</b> to analyze query performance.</li>
      <li>🚀 Prefer <b>LIMIT</b> with pagination instead of fetching all rows at once.</li>
      <li>📏 Keep indexed columns small — indexing long text fields (like VARCHAR(500)) slows down queries.</li>
      <li>♻️ Use <b>covering indexes</b> — indexes that include all columns a query needs.</li>
    </ul>

    <h2>🔍 Using EXPLAIN Command</h2>
    <p>
      The <b>EXPLAIN</b> command shows how MySQL executes a query — which indexes it uses, how many rows it scans, and whether it performs a full table scan.
    </p>

    <h3>✅ Example:</h3>
    <pre className="code-block">
{`EXPLAIN SELECT * FROM students WHERE city = 'Mumbai';`}
    </pre>

    <p>
      The result shows which index (if any) was used.  
      Look at the <code>type</code> and <code>key</code> columns in the EXPLAIN output.
    </p>

    <h3>🧾 Common EXPLAIN Output Columns:</h3>
    <table className="style-table">
      <thead>
        <tr>
          <th>Column</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>id</b></td>
          <td>Query ID (useful when multiple SELECTs are involved).</td>
        </tr>
        <tr>
          <td><b>select_type</b></td>
          <td>Type of SELECT (simple, subquery, etc.).</td>
        </tr>
        <tr>
          <td><b>table</b></td>
          <td>Which table is being accessed.</td>
        </tr>
        <tr>
          <td><b>type</b></td>
          <td>Join type (ALL = full scan, ref/range = good, const = best).</td>
        </tr>
        <tr>
          <td><b>possible_keys</b></td>
          <td>Indexes that could be used.</td>
        </tr>
        <tr>
          <td><b>key</b></td>
          <td>Actual index used by MySQL.</td>
        </tr>
        <tr>
          <td><b>rows</b></td>
          <td>Number of rows MySQL expects to check.</td>
        </tr>
      </tbody>
    </table>

    <p className="note">
      💡 Tip: If <code>type</code> = ALL → it means a full table scan (slow). Try adding an index!
    </p>

    <h2>📊 Example Performance Comparison</h2>
    <pre className="code-block">
{`-- Without index (slow)
SELECT * FROM students WHERE city = 'Delhi';

-- With index (fast)
CREATE INDEX idx_city ON students(city);
SELECT * FROM students WHERE city = 'Delhi';`}
    </pre>

    <p>✅ The indexed query runs much faster since MySQL can jump directly to matching rows.</p>

    <h2>🎯 Summary</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Topic</th>
          <th>Key Point</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Index</td>
          <td>Speeds up data retrieval like a book index 📘</td>
        </tr>
        <tr>
          <td>Composite Index</td>
          <td>Index on multiple columns for combined searches</td>
        </tr>
        <tr>
          <td>EXPLAIN</td>
          <td>Analyzes query performance and index usage</td>
        </tr>
        <tr>
          <td>Optimization Tips</td>
          <td>Use indexes wisely, avoid over-indexing, prefer smaller indexed columns</td>
        </tr>
      </tbody>
    </table>

    <p className="subtitle">
      🚀 <b>Pro Tip:</b> Use indexes to read data faster — but remember, every index adds overhead during data updates.
    </p>
  </>
)}
{/* 🌐 15️⃣ MySQL Joins with Multiple Tables */}
{activeSection === "mysql-multiple-joins" && (
  <>
    <h1>🌐 15️⃣ MySQL Joins with Multiple Tables</h1>
    <p className="subtitle">
      In real-world databases, data is often spread across multiple tables.  
      <b>Joins</b> allow us to combine data from different tables based on related columns (usually keys).  
      Here, we’ll explore <b>3 or more table joins</b> and how they’re used in practical queries.
    </p>

    <h2>📘 Example Database</h2>
    <p>Let’s consider three tables 👇</p>

    <pre className="code-block">
{`CREATE TABLE customers (
  customer_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  city VARCHAR(50)
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY AUTO_INCREMENT,
  customer_id INT,
  order_date DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE products (
  product_id INT PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(50),
  price DECIMAL(10,2)
);

CREATE TABLE order_items (
  order_id INT,
  product_id INT,
  quantity INT,
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);`}
    </pre>

    <p>✅ These tables represent a real-world e-commerce database.</p>

    <ul className="bullet-points">
      <li><b>customers</b> → Stores customer details.</li>
      <li><b>orders</b> → Tracks orders placed by customers.</li>
      <li><b>products</b> → Contains available product information.</li>
      <li><b>order_items</b> → Connects each order to the products purchased.</li>
    </ul>

    <h2>🔗 Real-world JOIN Example (3 Tables)</h2>
    <p>Let’s find <b>which customer bought which product</b>.</p>

    <pre className="code-block">
{`SELECT 
  c.name AS Customer,
  p.product_name AS Product,
  oi.quantity AS Quantity,
  o.order_date AS Date
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
INNER JOIN order_items oi ON o.order_id = oi.order_id
INNER JOIN products p ON oi.product_id = p.product_id;`}
    </pre>

    <p>✅ This query joins four tables to show a complete purchase report.</p>

    <h3>🧠 Explanation:</h3>
    <ul className="bullet-points">
      <li>Each <b>INNER JOIN</b> matches rows where the foreign key relationships align.</li>
      <li><code>customers → orders → order_items → products</code> builds a full connection chain.</li>
      <li>Only matching rows appear (customers with valid orders and products).</li>
    </ul>

    <h2>🧩 LEFT JOIN Example (Including Customers with No Orders)</h2>
    <p>
      Sometimes, we want to list <b>all customers</b>, even those who haven’t placed any orders.
    </p>

    <pre className="code-block">
{`SELECT 
  c.name AS Customer,
  o.order_id AS OrderID,
  o.order_date AS Date
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id;`}
    </pre>

    <p>✅ Customers without orders will show <code>NULL</code> for <b>OrderID</b> and <b>Date</b>.</p>

    <h2>➡️ Combining INNER and LEFT JOINs (3 Tables)</h2>
    <p>
      Let’s list <b>all customers</b> with their <b>order details</b> and the <b>products</b> they bought — if any.
    </p>

    <pre className="code-block">
{`SELECT 
  c.name AS Customer,
  p.product_name AS Product,
  o.order_date AS Date
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
LEFT JOIN order_items oi ON o.order_id = oi.order_id
LEFT JOIN products p ON oi.product_id = p.product_id
ORDER BY c.name;`}
    </pre>

    <p>
      ✅ Even if a customer has no orders, they’ll still appear in the list — thanks to <b>LEFT JOIN</b>.
    </p>

    <h2>🔁 RIGHT JOIN Example (Less Common)</h2>
    <p>
      <b>RIGHT JOIN</b> works like LEFT JOIN but returns all rows from the right table.
    </p>

    <pre className="code-block">
{`SELECT 
  p.product_name,
  oi.quantity,
  o.order_id
FROM order_items oi
RIGHT JOIN products p ON oi.product_id = p.product_id
RIGHT JOIN orders o ON oi.order_id = o.order_id;`}
    </pre>

    <p>✅ Ensures that even products not ordered yet appear in the result.</p>

    <h2>🌐 FULL OUTER JOIN (Workaround)</h2>
    <p>
      MySQL doesn’t support <b>FULL OUTER JOIN</b> directly.  
      But we can simulate it using <b>UNION</b> of LEFT and RIGHT JOINs.
    </p>

    <pre className="code-block">
{`SELECT c.name, o.order_id
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id

UNION

SELECT c.name, o.order_id
FROM customers c
RIGHT JOIN orders o ON c.customer_id = o.customer_id;`}
    </pre>

    <p>✅ This gives all customers and all orders, whether matched or not.</p>

    <h2>🧠 Practical Example — 3+ Table Query</h2>
    <p>List each customer’s name, product bought, quantity, and total amount:</p>

    <pre className="code-block">
{`SELECT 
  c.name AS Customer,
  p.product_name AS Product,
  oi.quantity AS Quantity,
  (p.price * oi.quantity) AS TotalAmount
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
INNER JOIN order_items oi ON o.order_id = oi.order_id
INNER JOIN products p ON oi.product_id = p.product_id
ORDER BY c.name;`}
    </pre>

    <p>✅ Shows who bought what, how many, and total price — a real-world purchase report.</p>

    <h2>📊 Example Output</h2>
    <pre className="code-block">
{`Customer   | Product     | Quantity | TotalAmount
-------------------------------------------------
Sofia       | Laptop      |    1     | 75000
Sofia       | Mouse       |    2     | 1200
Rahul       | Keyboard    |    1     | 1500
Anita       | NULL        |   NULL   | NULL`}
    </pre>

    <p className="note">
      💡 Note: Anita appears even with no orders (because of LEFT JOIN).
    </p>

    <h2>🎯 Summary</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Join Type</th>
          <th>Description</th>
          <th>Result Includes</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>INNER JOIN</td><td>Returns only matching rows between tables</td><td>Common data</td></tr>
        <tr><td>LEFT JOIN</td><td>All from left + matching from right</td><td>Left + Matches</td></tr>
        <tr><td>RIGHT JOIN</td><td>All from right + matching from left</td><td>Right + Matches</td></tr>
        <tr><td>FULL JOIN (via UNION)</td><td>All from both sides</td><td>Left + Right + Matches</td></tr>
      </tbody>
    </table>

    <p className="subtitle">
      🧠 <b>In real projects</b>, multi-table joins are essential for combining normalized data into meaningful reports.  
      Mastering JOINs helps you design smarter queries and efficient database structures.
    </p>
  </>
)}
{/* 📋 16️⃣ MySQL Import & Export */}
{activeSection === "mysql-import-export" && (
  <>
    <h1>📋 16️⃣ MySQL Import & Export</h1>
    <p className="subtitle">
      Data import and export are essential for <b>backup, migration,</b> and <b>data sharing</b> in MySQL.  
      You can save entire databases, specific tables, or even restore them easily using simple commands.
    </p>

    <h2>💾 Why Import/Export?</h2>
    <ul className="bullet-points">
      <li>✅ To move databases between servers.</li>
      <li>✅ To create backups of important data.</li>
      <li>✅ To restore databases after data loss.</li>
      <li>✅ To share or migrate a database to another system.</li>
    </ul>

    <h2>📤 Exporting Data (Backup)</h2>
    <p>
      MySQL provides the <code>mysqldump</code> tool to create backups of databases or tables.  
      It exports the database into a <b>.sql file</b> containing SQL commands that recreate the data.
    </p>

    <h3>🔹 Export Entire Database</h3>
    <pre className="code-block">
{`mysqldump -u root -p database_name > backup.sql`}
    </pre>
    <p>✅ Creates a backup file named <code>backup.sql</code> for the entire database.</p>

    <h3>🔹 Export Specific Tables</h3>
    <pre className="code-block">
{`mysqldump -u root -p database_name table1 table2 > tables_backup.sql`}
    </pre>
    <p>✅ Only <code>table1</code> and <code>table2</code> will be exported.</p>

    <h3>🔹 Export All Databases</h3>
    <pre className="code-block">
{`mysqldump -u root -p --all-databases > all_databases_backup.sql`}
    </pre>
    <p>✅ Creates one backup file for all MySQL databases on the system.</p>

    <h3>🔹 Export Only Schema (No Data)</h3>
    <pre className="code-block">
{`mysqldump -u root -p -d database_name > schema_only.sql`}
    </pre>
    <p>✅ <code>-d</code> (no-data) flag exports only the table structure, not the records.</p>

    <h2>📥 Importing Data (Restore)</h2>
    <p>
      Importing means restoring a database from a backup file.  
      You can do this using the MySQL command-line tool or from tools like phpMyAdmin.
    </p>

    <h3>🔹 Import using Command Line</h3>
    <pre className="code-block">
{`mysql -u root -p database_name < backup.sql`}
    </pre>
    <p>✅ Restores the data from <code>backup.sql</code> into <code>database_name</code>.</p>

    <h3>🔹 Import All Databases</h3>
    <pre className="code-block">
{`mysql -u root -p < all_databases_backup.sql`}
    </pre>
    <p>✅ Imports all databases from the backup file.</p>

    <h3>🔹 Import via MySQL Workbench</h3>
    <ol>
      <li>Open MySQL Workbench.</li>
      <li>Go to <b>Server → Data Import</b>.</li>
      <li>Select <b>Import from Self-Contained File</b>.</li>
      <li>Choose your <code>.sql</code> backup file.</li>
      <li>Click <b>Start Import</b>.</li>
    </ol>

    <h2>🧰 Backup & Restore Examples</h2>

    <h3>🔹 Full Backup Example</h3>
    <pre className="code-block">
{`mysqldump -u root -p myshop > myshop_backup.sql`}
    </pre>

    <h3>🔹 Restore Example</h3>
    <pre className="code-block">
{`mysql -u root -p myshop < myshop_backup.sql`}
    </pre>

    <p>✅ You can now fully restore your database in case of system failure.</p>

    <h2>🧩 Backup Best Practices</h2>
    <ul className="bullet-points">
      <li>🕐 Take regular backups (daily or weekly).</li>
      <li>☁️ Store backups in multiple locations (local + cloud).</li>
      <li>📁 Compress large backups to save space.</li>
      <li>🔒 Use secure permissions to protect sensitive data.</li>
      <li>🧪 Test restoring backups periodically.</li>
    </ul>

    <h2>🎯 Summary</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Operation</th>
          <th>Command / Tool</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Export Database</td>
          <td><code>mysqldump -u root -p db {`>`} file.sql</code></td>
          <td>Creates a backup file of a database</td>
        </tr>
        <tr>
          <td>Import Database</td>
          <td><code>{`mysql -u root -p db < file.sql`}</code></td>
          <td>Restores database from a backup file</td>
        </tr>
        <tr>
          <td>Export Schema Only</td>
          <td><code>mysqldump -d db {`>`} schema.sql</code></td>
          <td>Exports only structure (no data)</td>
        </tr>
        <tr>
          <td>Export All Databases</td>
          <td><code>mysqldump --all-databases {`>`} all.sql</code></td>
          <td>Backs up every database on the server</td>
        </tr>
      </tbody>
    </table>

    <p className="subtitle">
      💡 <b>Tip:</b> Always verify backup integrity before deleting or overwriting old copies.  
      A few minutes of testing can save hours of work later!
    </p>
  </>
)}
{/* 💡 17️⃣ Advanced Topics */}
{activeSection === "mysql-advanced-topics" && (
  <>
    <h1>💡 17️⃣ Advanced Topics in MySQL</h1>
    <p className="subtitle">
      These advanced concepts help you write more powerful, flexible, and optimized MySQL programs — especially for complex data handling and performance tuning.
    </p>

    {/* 🔹 Cursors in MySQL */}
    <h2>🔹 Cursors in MySQL</h2>
    <p>
      A <b>cursor</b> is a database object that allows you to process each row returned by a query <b>one at a time</b>.
      It’s commonly used in stored procedures when you need to loop through query results.
    </p>

    <h3>🧠 When to Use:</h3>
    <ul className="bullet-points">
      <li>When you need to perform row-by-row operations (similar to loops in programming).</li>
      <li>Used in stored procedures for complex logic or calculations per row.</li>
    </ul>

    <h3>💻 Example:</h3>
    <pre className="code-block">
{`DELIMITER //
CREATE PROCEDURE show_students()
BEGIN
  DECLARE done INT DEFAULT FALSE;
  DECLARE student_name VARCHAR(100);
  DECLARE cur CURSOR FOR SELECT name FROM students;
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

  OPEN cur;
  read_loop: LOOP
    FETCH cur INTO student_name;
    IF done THEN
      LEAVE read_loop;
    END IF;
    SELECT student_name;
  END LOOP;
  CLOSE cur;
END //
DELIMITER ;`}
    </pre>

    {/* 🔹 Temporary Tables */}
    <h2>📦 Temporary Tables</h2>
    <p>
      A <b>temporary table</b> is a short-term table that exists only during your session.
      It’s automatically deleted once the session ends.
    </p>

    <h3>💻 Example:</h3>
    <pre className="code-block">
{`CREATE TEMPORARY TABLE temp_sales AS
SELECT * FROM sales WHERE year = 2025;

SELECT * FROM temp_sales;`}
    </pre>

    <p>✅ Useful for storing intermediate results in complex queries or reports.</p>

    {/* 🔹 Common Table Expressions */}
    <h2>🔗 Common Table Expressions (CTE)</h2>
    <p>
      A <b>CTE</b> (Common Table Expression) lets you create a temporary result set that you can reference within a single query — making complex queries easier to read and maintain.
    </p>

    <h3>💻 Example:</h3>
    <pre className="code-block">
{`WITH high_salary AS (
  SELECT name, salary FROM employees
  WHERE salary > 50000
)
SELECT * FROM high_salary
ORDER BY salary DESC;`}
    </pre>

    <p>✅ Similar to using subqueries, but cleaner and more reusable.</p>

    {/* 🔹 JSON Data */}
    <h2>🧱 JSON Data in MySQL</h2>
    <p>
      MySQL supports <b>JSON (JavaScript Object Notation)</b> data type, allowing you to store and query structured data directly in a column.
    </p>

    <h3>💻 Example:</h3>
    <pre className="code-block">
{`CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  details JSON
);

INSERT INTO users (details)
VALUES ('{"name": "Sofia", "age": 22, "skills": ["SQL", "Python"]}');

SELECT JSON_EXTRACT(details, '$.name') AS Name FROM users;`}
    </pre>

    <p>✅ JSON is useful for flexible, semi-structured data (e.g., storing settings or nested objects).</p>

    {/* 🔹 Regular Expressions */}
    <h2>🔍 Regular Expressions (REGEXP)</h2>
    <p>
      MySQL supports pattern matching using <b>REGEXP</b> to search for complex string patterns.
      It’s like an advanced version of <code>LIKE</code>.
    </p>

    <h3>💻 Example:</h3>
    <pre className="code-block">
{`SELECT name FROM students
WHERE name REGEXP '^A';`}
    </pre>
    <p>✅ Finds all student names that start with <code>A</code>.</p>

    <pre className="code-block">
{`SELECT email FROM users
WHERE email REGEXP 'gmail\\.com$';`}
    </pre>
    <p>✅ Finds all emails ending with <code>gmail.com</code>.</p>

    {/* 🔹 MySQL Performance Tuning */}
    <h2>⚙️ MySQL Performance Tuning</h2>
    <p>
      Performance tuning helps MySQL run faster by optimizing queries, indexes, and server configuration.
    </p>

    <h3>🚀 Tips for Optimization:</h3>
    <ul className="bullet-points">
      <li>Use <b>EXPLAIN</b> before running complex SELECT queries to analyze performance.</li>
      <li>Create <b>indexes</b> on columns used in WHERE, JOIN, and ORDER BY clauses.</li>
      <li>Avoid <b>SELECT *</b> — fetch only the columns you need.</li>
      <li>Use <b>LIMIT</b> when displaying large datasets.</li>
      <li>Use <b>proper data types</b> to reduce storage size and increase efficiency.</li>
      <li>Enable <b>query caching</b> for repeated queries.</li>
      <li>Regularly <b>analyze and optimize tables</b> using:
        <pre className="code-block">{`ANALYZE TABLE table_name;
OPTIMIZE TABLE table_name;`}</pre>
      </li>
    </ul>

    <h2>🎯 Summary</h2>
    <table className="style-table">
      <thead>
        <tr>
          <th>Topic</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cursors</td>
          <td>Loop through query results row by row</td>
          <td><code>DECLARE cur CURSOR FOR SELECT name FROM users;</code></td>
        </tr>
        <tr>
          <td>Temporary Tables</td>
          <td>Short-term table for session use</td>
          <td><code>CREATE TEMPORARY TABLE temp AS SELECT ...;</code></td>
        </tr>
        <tr>
          <td>CTE (WITH)</td>
          <td>Reusable temporary query block</td>
          <td><code>WITH cte AS (SELECT ...)</code></td>
        </tr>
        <tr>
          <td>JSON</td>
          <td>Store structured data in a single column</td>
          <td><code>JSON_EXTRACT(details, '$.name')</code></td>
        </tr>
        <tr>
          <td>REGEXP</td>
          <td>Pattern matching using regular expressions</td>
          <td><code>WHERE name REGEXP '^A'</code></td>
        </tr>
        <tr>
          <td>Performance Tuning</td>
          <td>Improve query and database speed</td>
          <td><code>EXPLAIN SELECT ...</code></td>
        </tr>
      </tbody>
    </table>

    <p className="subtitle">
      💡 <b>Pro Tip:</b> Always analyze and optimize queries regularly — performance problems usually start small and grow silently.
    </p>
  </>
)}


</main>
    </div>
 
);
};
export default MySql;