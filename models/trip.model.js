const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
  riderId: {
    type: String,
    required: [true, 'Please provide rider id'],
  },
  driverId: {
    type: String,
  },
  fee: {
    type: Number,
  },
  taxedFee: {
    type: Number,
  },
  distance: {
    type: Number,
  },
  status: {
    type: String,
    default: 'waiting',
    required: [true, 'Please provide trip status']
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: [true, 'Please provide created at date'],
  },
  origin: {
    type: {},
    required: [true, 'Please provide origin']
  },
  destination: {
    type: {},
    required: [true, 'Please provide destination']
  }
})

module.exports = mongoose.model('Trip', tripSchema)


