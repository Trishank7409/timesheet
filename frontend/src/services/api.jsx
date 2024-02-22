// frontend/src/services/api.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000', // Your backend API URL
  timeout: 5000, // Timeout duration in milliseconds
});

export const fetchEmployees = () => {
  return instance.get('/employees');
};

export const fetchEmployeeById = (id) => {
  return instance.get(`/employees/${id}`);
};

export const fetchRatingsByEmployeeId = (id) => {
  return instance.get(`/ratings/employee/${id}`);
};

export const submitRating = (ratingData) => {
  return instance.post('/ratings', ratingData);
};

export const fetchTimesheets = () => {
  return instance.get('/timesheets');
};

export const submitTimesheetEntry = (timesheetData) => {
  return instance.post('/timesheets', timesheetData);
};

export default instance;
