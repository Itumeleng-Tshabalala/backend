const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  driverId: {
    type: String,
    required: [true, 'Please provide driver id'],
  },
  plate: {
    type: String,
    required: [true, 'Please provide plate']
  },
  model: {
    type: String,
    required: [true, 'Please provide model']
  },
  brand: {
    type: String,
    required: [true, 'Please provide brand']
  },
  color: {
    type: String,
    required: [true, 'Please provide color']
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: [true, 'Please provide created at date'],
  },
})

module.exports = mongoose.model('Car', carSchema)


