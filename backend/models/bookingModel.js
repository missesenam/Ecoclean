const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    services: {
      type: [String],
      required: true,
    },
    message: {
      type: String,
    },
    acceptTerms: {
      type: Boolean,
      required: true,
    },
    image: {
      type: String, // image URL or path
    },
    notARobot: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
