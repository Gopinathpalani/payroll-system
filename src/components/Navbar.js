import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Payroll System</h2>
      <div className="nav-links">
        <Link to="/">Employees</Link>
        <Link to="/add-employee">Add Employee</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/salary-slip">Salary Slip</Link>
      </div>
    </nav>
  );
};

export default Navbar;