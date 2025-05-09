import axios from 'axios';

const BASE_URL = "http://127.0.0.1:8000/api";  // backend URL

// Option 1: Using Fetch API (if you really need it)
export async function fetchEmployees() {
  const response = await fetch(`${BASE_URL}/employees/`);
  return response.json();
}

export async function addEmployeeFetch(data) {
  const response = await fetch(`${BASE_URL}/employees/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

// Option 2: Using Axios (recommended, more concise)
const API = axios.create({
  baseURL: BASE_URL,
});

export const getEmployees = () => API.get('employees/');
export const addEmployee = (data) => API.post('employees/', data);
export const getAttendance = () => API.get('attendance/');
export const getSalaries = () => API.get('salaries/');

export default API;
