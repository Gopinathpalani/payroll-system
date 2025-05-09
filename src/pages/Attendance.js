import React, { useEffect, useState } from 'react';
import { getAttendance } from '../services/api';

const Attendance = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getAttendance()
      .then((res) => setRecords(res.data))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div className="page">
      <h2>Attendance Records</h2>
      <table>
        <thead>
          <tr>
            <th>Employee</th><th>Date</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec, index) => (
            <tr key={index}>
              <td>{rec.employee_name}</td>
              <td>{rec.date}</td>
              <td>{rec.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;