

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ratingSchema = new Schema({
  employee: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Rating = model('Rating', ratingSchema);

export default Rating;

