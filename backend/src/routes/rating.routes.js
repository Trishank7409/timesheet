// backend/routes/ratingRoutes.js

import express from 'express';
import {
  rateEmployee,
  getEmployeeRatings
} from '../controller/rating.controller.js';

const router = express.Router();

// Routes for rating-related operations

// Rate an employee
router.post('/', rateEmployee);

// Get all ratings for a specific employee
router.get('/employee/:employeeId', getEmployeeRatings);

export default router;
