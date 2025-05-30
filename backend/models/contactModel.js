const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const contactModel = mongoose.model("contact", contactSchema);

module.exports = contactModel;
