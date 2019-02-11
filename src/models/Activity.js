const mongoose = require('mongoose');

const { Schema } = mongoose;

const ActivitySchema = mongoose.Schema({
  name: String,
  hours: Date,
  startDate: Date,
  endDate: Date,
  trainerName: String,
  location: String,
  program: { type: Schema.Types.ObjectId, ref: 'Program' },
  objective: { type: Schema.Types.ObjectId, ref: 'Objective' },
});

module.exports = mongoose.model('Activity', ActivitySchema);