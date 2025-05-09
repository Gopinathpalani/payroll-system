import React, { useEffect, useState } from 'react';
import { getEmployees } from '../services/api';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees()
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="page">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Department</th><th>Position</th><th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.position}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;