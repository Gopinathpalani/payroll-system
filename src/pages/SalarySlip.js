import React, { useEffect, useState } from 'react';
import { getSalaries } from '../services/api';

const SalarySlip = () => {
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    getSalaries()
      .then((res) => setSalaries(res.data))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div className="page">
      <h2>Salary Slips</h2>
      <table>
        <thead>
          <tr>
            <th>Employee</th><th>Month</th><th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map((s, index) => (
            <tr key={index}>
              <td>{s.employee_name}</td>
              <td>{s.month}</td>
              <td>{s.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalarySlip;