const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

  bookingType: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  deviceType: {
    type: String,
    required: true
  },
  os: {
    type: String,
    required: true
  },
  problem: {
    type: String,
    required: true
  },
  bookingDate: {
    type: Date,
    required: true
  },
  bookingTime: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;



