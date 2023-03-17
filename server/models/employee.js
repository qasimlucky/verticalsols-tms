const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({

  employee_id: {
    type: String,
    required: true,
  },
  employee_collection_index: {
    type: String,
    required: true,
  },
  first_name: {type: String,
    default: null
  },
  last_name: {type: String,
    default: null
  },
  department_name: {type: String,
    default: null
  },
  address:{
    type: String,
    default: null
  },
  email:{
    type: String,
    default: null
  },
  phone_number:{
    type: String,
    default: null
  },
  gender:{
    type: String,
    default: null
  },
  joining_date:{
    type: String,
    default: null
  },
  birth_day:{
    type: String,
    default: null
  },
  employee_image:{
    type: String,
    default: null
  },
  designation:{
    type: String,
    default: null
  },
  marital_status:{
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

module.exports = mongoose.model('employee', EmployeeSchema)