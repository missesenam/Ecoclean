const express = require("express");
const router = express.Router();
const { createBooking } = require("../controllers/bookingController");
// const parser = require("../utils/cloudinary");
// controller

// NEW //
// const multer = require("multer");
// const { createBooking } = require("../controllers/bookingController");
// const { storage } = require("../utils/cloudinary");
// const upload = multer({ storage }); // Cloudinary middleware here

// upload.single("image");
router.post("/", createBooking);

module.exports = router;
