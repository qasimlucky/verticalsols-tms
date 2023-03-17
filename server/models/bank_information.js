
const mongoose = require('mongoose');

const BankInformationSchema = new mongoose.Schema({
      
  bank_info_id: {
    type: String,
    required: true,
  },
  bank_info_collection_index: {
    type: String,
    required: true,
  },
  employee_id : {type: String,
    default: null
  },
  bank_name: {type: String,
    default: null
  },
  bank_account_no: {type: String,
    default: null
  },
  ifsc_code: {type: String,
    default: null
  },
  pan_no: {type: String,
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

module.exports = mongoose.model('bank_information', BankInformationSchema)