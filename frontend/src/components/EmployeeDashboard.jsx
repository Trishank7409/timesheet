// frontend/src/components/EmployeeDashboard.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EmployeeDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/employees');
        setEmployees(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Employee Dashboard</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {employees.map(employee => (
            <li key={employee._id} className="border-b py-2">
              <Link to={`/employees/${employee._id}`} className="text-blue-500 hover:underline">
                {employee.name} - {employee.email}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeDashboard;
