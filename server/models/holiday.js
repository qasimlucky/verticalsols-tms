const mongoose = require('mongoose');

const HolidaySchema = new mongoose.Schema({

  holiday_id: {
    type: String,
    required: true,
  },
  holiday_collection_index: {
    type: String,
    required: true,
  },
  holiday_title: {type: String,
    default: null
  },
  holiday_date: {type: String,
    default: null
  },
  holiday_day: {type: String,
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

module.exports = mongoose.model('holiday', HolidaySchema)