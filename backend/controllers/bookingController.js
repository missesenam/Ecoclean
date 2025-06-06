const Booking = require("../models/bookingModel");
// new
// const formData = require("form-data");
// const Mailgun = require("mailgun.js");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({
//   username: "api",
//   key: process.env.MAILGUN_API_KEY,
// });

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
      message,
      services,
      acceptTerms,
      // notARobot,
    } = req.body;

    // i think this one is the real deal
    const imageUrl = req.file.path; // Cloudinary gives direct URL

    // Upload image to Cloudinary(try this and if not working real deal)
    // const result = await cloudinary.uploader.upload(req.file.path);
    // const imageUrl = result.secure_url;

    // Simple validation
    if (
      !firstName
      // ||
      // !lastName ||
      // !email ||
      // !phone ||
      // !address ||
      // !city ||
      // !state ||
      // !zipcode
      // ||
      // message ||
      // !services ||
      // !acceptTerms ||
      // !notARobot
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
      message,
      services,
      // image,
      image: imageUrl,
      acceptTerms,
      // notARobot,
    });
    await newBooking.save();

    // const adminbookingEmail = {
    //   from: `Booking Form <no-reply@${process.env.MAILGUN_DOMAIN}>`,
    //   to: "youremail@domain.com", // Replace with admin/business email
    //   subject: "New Booking Received",
    //   text: `
    //       A new booking was submitted:
    //       Name: ${name}
    //       Email: ${email}
    //       Phone: ${phone}
    //       Service: ${service}
    //       Date: ${date}
    //       Time: ${time}
    //       Message: ${message}
    //     `,
    // };
    // User confirmation
    // const userBookingEmail={
    //   from: `Your Business <no-reply@${process.env.MAILGUN_DOMAIN}>`,
    //   to: email, // user’s email
    //   subject: "Booking Confirmation",
    //   text: `Hi ${name},

    // Thanks for your booking! We’ve received your request and will contact you soon.

    // Details:
    // Service: ${service}
    // Date: ${date}
    // Time: ${time}

    // — Your Business Team`,
    // }

    // Send both emails
    // await mg.messages.create(process.env.MAILGUN_DOMAIN, adminEmail);
    // await mg.messages.create(process.env.MAILGUN_DOMAIN, userEmail);

    res.status(201).json({ message: "Booking submitted successfully!" });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = {
  createBooking,
};
