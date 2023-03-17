
const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
      
  department_id: {
    type: String,
    required: true,
  },
  department_collection_index: {
    type: String,
    required: true,
  },
  department_title: {type: String,
    default: null
  },
  number_of_employee: {type: String,
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
  }
})

module.exports = mongoose.model('department', DepartmentSchema)