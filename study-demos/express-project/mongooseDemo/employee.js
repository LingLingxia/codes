const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeesSchema = new Schema({
  emp_name: {
    type: String,
    required: true
  },
  Department: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true
  },
  onsite: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('employees', employeesSchema);