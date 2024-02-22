// frontend/src/pages/EmployeeDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RatingInterface from '../components/RatingInterface';
import TimesheetForm from '../components/TimesheetForm';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [timesheets, setTimesheets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const [employeeResponse, ratingsResponse, timesheetsResponse] = await Promise.all([
          axios.get(`/employees/${id}`),
          axios.get(`/ratings/employee/${id}`),
          axios.get(`/timesheets/employee/${id}`)
        ]);
        setEmployee(employeeResponse.data);
        setRatings(ratingsResponse.data);
        setTimesheets(timesheetsResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    fetchEmployeeDetails();
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Employee Details</h2>
          <div className="mb-4">
            <p><span className="font-semibold">Name:</span> {employee.name}</p>
            <p><span className="font-semibold">Email:</span> {employee.email}</p>
            <p><span className="font-semibold">Reporting Manager:</span> {employee.reportingManager}</p>
          </div>
          <hr className="my-4" />
          <RatingInterface employeeId={id} />
          <hr className="my-4" />
          <TimesheetForm employeeId={id} />
          <hr className="my-4" />
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Ratings</h3>
            <ul>
              {ratings.map((rating, index) => (
                <li key={index} className="mb-2">
                  Date: {new Date(rating.date).toLocaleDateString()}, Rating: {rating.rating}
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-4" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Timesheet Entries</h3>
            <ul>
              {timesheets.map((timesheet, index) => (
                <li key={index} className="mb-2">
                  Date: {new Date(timesheet.date).toLocaleDateString()}, Hours Worked: {timesheet.hoursWorked}, Task: {timesheet.taskDescription}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default EmployeeDetails;
