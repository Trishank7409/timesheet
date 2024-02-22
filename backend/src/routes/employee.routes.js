// backend/routes/employeeRoutes.js

import express from 'express';
import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById
} from '../controller/employee.controller.js';

const router = express.Router();

// Routes for employee-related operations

// Create a new employee
router.post('/', createEmployee);

// Get all employees
router.get('/', getAllEmployees);

// Get employee by ID
router.get('/:id', getEmployeeById);

// Update employee by ID
router.put('/:id', updateEmployeeById);

// Delete employee by ID
router.delete('/:id', deleteEmployeeById);

export default router;
