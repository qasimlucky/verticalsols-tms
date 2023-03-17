const mongoose = require('mongoose');

const EmployeeAttendanceSchema = new mongoose.Schema({

  attendance_id: {
    type: String,
    required: true,
  },
  attendance_collection_index: {
    type: String,
    required: true,
  },
  employee_id: {type: String,
    default: null
  },
  date: {type: String,
    default: null
  },
  punch_in: {type: String,
    default: null
  },
  punch_out:{
    type: String,
    default: null
  },
  production:{
    type: String,
    default: null
  },
  break_time:{
    type: String,
    default: null
  },
  overtime:{
    type: String,
    default: null
  },
  status:{
    type: String,
    default: "active"
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

module.exports = mongoose.model('employee_attendance', EmployeeAttendanceSchema)