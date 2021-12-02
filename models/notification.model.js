const mongoose = require('mongoose')

const NotificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide title'],
  },
  description: {
    type: String,
    required: [true, 'Please provide description'],
  },
  type: {
    type: String,
    required: [true, 'Please provide type'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: [true, 'Please provide created at date'],
  },
})

module.exports = mongoose.model('Notification', NotificationSchema)


