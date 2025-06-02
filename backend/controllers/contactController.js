const contactModel = require("../models/contactModel");
const mailgun = require("mailgun-js");

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
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

    // Prepare email content
    const emailData = {
      from: `${name} <${email}>`,
      to: "sandbox12345.mailgun.org", // replace with your Mailgun authorized email
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Location: ${location}
        Message: ${message}
      `,
    };

    // Send email via Mailgun
    await mg.messages().send(emailData);

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
