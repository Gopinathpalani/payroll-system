import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import Attendance from './pages/Attendance';
import SalarySlip from './pages/SalarySlip';
import NotFound from './pages/NotFound'; // Import the NotFound component
import './App.css';

function App = () {
  return (
    <div classname="App">
      <h1>Welcome to my react app</h1>
      <p>this is the homepage.</p>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/salary-slip" element={<SalarySlip />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </Router>
    </div>
  );
};

export default App;
