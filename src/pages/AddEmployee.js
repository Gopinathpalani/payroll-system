import React, { useState } from 'react';
import { addEmployee } from '../services/api';

const AddEmployee = () => {
  const [form, setForm] = useState({
    name: '',
    department: '',
    position: '',
    salary: ''
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(form)
      .then(() => alert('Employee added successfully'))
      .catch((err) => console.error('Error:', err));
  };

  return (
    <div className="form-container">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="department" placeholder="Department" onChange={handleChange} required />
        <input type="text" name="position" placeholder="Position" onChange={handleChange} required />
        <input type="number" name="salary" placeholder="Salary" onChange={handleChange} required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddEmployee;