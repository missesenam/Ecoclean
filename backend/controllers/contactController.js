const contactModel = require("../models/contactModel");
// const { validationResult } = require("express-validator");

const createContact = async (req, res) => {
  try {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   res
    //     .status(400)
    //     .json({ message: "validation failed", error: errors.array() });
    // }
    // data from req body
    const { name, email, phone, location, message } = req.body;
    const newContact = await contactModel.create({
      name,
      email,
      phone,
      location,
      message,
    });
    res
      .status(201)
      .json({ message: "Contact created successfully", contact: newContact });
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to create contact", error: error.message });
  }
};
module.exports = {
  createContact,
};
