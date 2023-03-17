const mongoose = require('mongoose');

const LeaveSchema = new mongoose.Schema({

  leave_id: {
    type: String,
    required: true,
  },
  leave_collection_index: {
    type: String,
    required: true,
  },
  leave_reason: {type: String,
    default: null
  },
  start_date: {type: String,
    default: null
  },
  end_date: {type: String,
    default: null
  },
 leave_status:{
    type: String,
    default: "pending"
  },
  approved_by:{
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

module.exports = mongoose.model('leave', LeaveSchema)