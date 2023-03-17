
const mongoose = require('mongoose');

const DesignationSchema = new mongoose.Schema({
      
  designation_id: {
    type: String,
    required: true,
  },
  designation_collection_index: {
    type: String,
    required: true,
  },
  designation_title: {type: String,
    default: null
  },
  department_title: {type: String,
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

module.exports = mongoose.model('designation', DesignationSchema)