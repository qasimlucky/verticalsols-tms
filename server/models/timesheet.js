const mongoose = require('mongoose');

const TimeSheetSchema = new mongoose.Schema({

  time_sheet_id: {
    type: String,
    required: true,
  },
  time_sheet_collection_index: {
    type: String,
    required: true,
  },
  employee_id: {type: String,
    default: null
  },
  date: {type: String,
    default: null
  },
  project: {type: String,
    default: null
  },
 assigned_hours:{
    type: String,
    default: null
  },
  hours:{
    type: String,
    default: null
  },
  description:{
    type: String,
    default: null
  },
  created_at:{
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updated_at:{
    type: Date,
    default: () => Date.now(),
  },
})

module.exports = mongoose.model('time_sheet', TimeSheetSchema)