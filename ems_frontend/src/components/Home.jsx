import React from "react";
import { Link } from "react-router-dom";

function Home() {
return (
<div
style={{marginTop:"100px" , marginBottom:"80px"}}
>
{/* Hero Section */} 
<section className="container text-center mt-5"


> 
    <h1 className="display-4 fw-bold">Employee Management System </h1>

    <p className="lead mt-3">
      Manage employee records efficiently using
      React, Spring Boot and MySQL.
    </p>

    <div className="mt-4">
      <Link
        to="/employees"
        className="btn btn-primary me-3"
      >
        View Employees
      </Link>

      <Link
        to="/login"
        className="btn btn-outline-dark"
      >
        Admin Login
      </Link>
    </div>
  </section>
  <div className="container mt-5">
  <div className="row">

    <div className="col-md-4">
      <div className="card shadow">
        <div className="card-body text-center">
          <h2>58+</h2>
          <p>Employees Managed</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow">
        <div className="card-body text-center">
          <h2>React + Spring Boot</h2>
          <p>Full Stack Application</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow">
        <div className="card-body text-center">
          <h2>MySQL</h2>
          <p>Database Powered</p>
        </div>
      </div>
    </div>

  </div>
</div>

  {/* Features Section */}
  <section className="container mt-5">
    <h2 className="text-center mb-4">Features</h2>

    <div className="row">

      <div className="col-md-3">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <h5>Add Employee</h5>
            <p>Add new employee records.</p>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <h5>Update Employee</h5>
            <p>Edit employee information.</p>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <h5>Delete Employee</h5>
            <p>Remove employee records.</p>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <h5>View Employees</h5>
            <p>See all employee details.</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/* Technology Stack */}
  <section className="container mt-5">
    <h2 className="text-center mb-4">
      Technology Stack
    </h2>

    <div className="row text-center">

      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h4>React.js</h4>
            <p>Frontend Development</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h4>Spring Boot</h4>
            <p>Backend REST APIs</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h4>MySQL</h4>
            <p>Database Management</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/* About Project */}
  <section className="container mt-5 mb-5">
    <h2 className="text-center mb-3">
      About Project
    </h2>

    <p className="text-center">
      This Employee Management System is a Full
      Stack Application developed using React.js,
      Spring Boot and MySQL. It provides employee
      CRUD operations with a clean and responsive
      user interface.
    </p>
  </section>
</div>


);
}

export default Home;
