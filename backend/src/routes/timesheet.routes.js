// backend/routes/timesheetRoutes.js

import express from 'express';
import {
  createTimesheetEntry,
  getEmployeeTimesheets,
  updateTimesheetEntryById,
  deleteTimesheetEntryById
} from '../controller/timesheet.controller.js';

const router = express.Router();

// Routes for timesheet-related operations

// Create a new timesheet entry
router.post('/', createTimesheetEntry);

// Get all timesheet entries for a specific employee
router.get('/employee/:employeeId', getEmployeeTimesheets);

// Update timesheet entry by ID
router.put('/:id', updateTimesheetEntryById);

// Delete timesheet entry by ID
router.delete('/:id', deleteTimesheetEntryById);

export default router;
