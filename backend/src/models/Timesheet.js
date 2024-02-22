// backend/models/Timesheet.js

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const timesheetSchema = new Schema({
  employee: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  hoursWorked: {
    type: Number,
    required: true,
    min: 0
  },
  taskDescription: {
    type: String,
    required: true
  },
  isRated: {
    type: Boolean,
    default: false
  }
});

const Timesheet = model('Timesheet', timesheetSchema);

export default Timesheet;
