const express = require("express");
const router = express.Router();
const parser = require("../utils/cloudinary");
// controller
const { createBooking } = require("../controllers/bookingController");

router.post("/", parser.single("image"), createBooking);

module.exports = router;
