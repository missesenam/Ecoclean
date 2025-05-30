const Booking = require("../models/bookingModel");

const createBooking = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zipcode,
      services,
      message,
      acceptTerms,
      image,
      notARobot,
    } = req.body;

    // Simple validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !zipcode ||
      !services ||
      !acceptTerms ||
      !notARobot
    ) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields." });
    }

    const newBooking = new Booking({
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zipcode,
      services,
      message,
      acceptTerms,
      image,
      notARobot,
    });

    await newBooking.save();

    res.status(201).json({ message: "Booking submitted successfully!" });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = {
  createBooking,
};
