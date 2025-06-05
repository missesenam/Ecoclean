const contactModel = require("../models/contactModel");
// const mailgun = require("mailgun-js");
require("dotenv").config();
// new stuff
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

const createContact = async (req, res) => {
  try {
    const { name, email, phone, location, message } = req.body;

    // Save contact in DB
    const newContact = await contactModel.create({
      name,
      email,
      phone,
      location,
      message,
    });

    // Prepare email to notify YOU (admin)
    const adminEmailData = {
      from: `Contact Form <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      to: ["jeremiahjohnboateng@gmail.com"], // Your email where you want to get notified
      subject: "New Contact Form Submission",
      text: `
      New message from:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Location: ${location}
      Message: ${message}
      `,
    };

    // Prepare confirmation email to USER (optional) new
    const userEmailData = {
      from: `Your Company <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      to: [email], // send back to user email
      subject: "Thanks for contacting us!",
      text: `Hi ${name},\n\nThank you for reaching out! We received your message and will get back to you soon.\n\nBest regards,\nYour Company Team`,
    };

    // Send email to admin N
    const toMe = await mg.messages.create(
      process.env.MAILGUN_DOMAIN,
      adminEmailData
    );

    // Send confirmation email to user (optional)
    await mg.messages.create(process.env.MAILGUN_DOMAIN, userEmailData);

    res.status(201).json({
      message: "Contact created and email sent successfully",
      contact: newContact,
    });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ message: "Failed to create contact", error: error.message });
  }
};

module.exports = { createContact };
