const express = require("express");
// const { body } = require("express-validator");
const { createContact } = require("../controllers/contactController");

const contactRouter = express.Router();

contactRouter.post("/", createContact);

module.exports = contactRouter;
