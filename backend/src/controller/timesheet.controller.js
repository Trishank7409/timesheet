// backend/controllers/timesheetController.js

import Timesheet from '../models/Timesheet.js';

// Controller to handle timesheet-related operations

// Create a new timesheet entry
export const createTimesheetEntry = async (req, res) => {
  try {
    const { employee, date, hoursWorked, taskDescription } = req.body;
    
    // Check if the timesheet entry for the given date already exists
    const existingEntry = await Timesheet.findOne({ employee, date });
    if (existingEntry) {
      return res.status(400).json({ message: 'Timesheet entry already exists for this date.' });
    }

    const newTimesheetEntry = new Timesheet({
      employee,
      date,
      hoursWorked,
      taskDescription
    });

    await newTimesheetEntry.save();
    res.status(201).json(newTimesheetEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all timesheet entries for a specific employee
export const getEmployeeTimesheets = async (req, res) => {
  const { employeeId } = req.params;
  try {
    const timesheets = await Timesheet.find({ employee: employeeId });
    res.status(200).json(timesheets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a timesheet entry by ID
export const updateTimesheetEntryById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedEntry = await Timesheet.findByIdAndUpdate(id, req.body, {
      new: true
    });
    if (!updatedEntry) {
      return res.status(404).json({ message: 'Timesheet entry not found' });
    }
    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a timesheet entry by ID
export const deleteTimesheetEntryById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEntry = await Timesheet.findByIdAndDelete(id);
    if (!deletedEntry) {
      return res.status(404).json({ message: 'Timesheet entry not found' });
    }
    res.status(200).json({ message: 'Timesheet entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
