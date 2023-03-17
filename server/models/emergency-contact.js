
const mongoose = require('mongoose');

const EmergencyContactSchema = new mongoose.Schema({
      
  e_contact_id: {
    type: String,
    required: true,
  },
  e_contact_collection_index: {
    type: String,
    required: true,
  },
  employee_id : {type: String,
    default: null
  },
  p_name: {type: String,
    default: null
  },
  p_relationshp: {type: String,
    default: null
  },
  p_phone: {type: String,
    default: null
  },
  s_name: {type: String,
    default: null
  },
  s_relationship: {type: String,
    default: null
  },
  s_phone: {type: String,
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

module.exports = mongoose.model('emergency_contact', EmergencyContactSchema)