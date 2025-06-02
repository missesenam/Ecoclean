const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    zipcode: {
      type: String,
      required: false,
    },
    message: {
      type: String,
    },
    services: {
      type: [String],
      required: false,
    },
    image: {
      type: String, // image URL or path
    },
    acceptTerms: {
      type: Boolean,
      required: false,
    },
    // notARobot: {
    //   type: Boolean,
    //   required: false,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
