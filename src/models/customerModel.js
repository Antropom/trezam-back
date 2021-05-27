const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  telNum: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
