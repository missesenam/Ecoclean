const express = require("express");
const router = express.Router();
// controller
const { createBooking } = require("../controllers/bookingController");
// const parser = require("../utils/cloudinary");

// NEW //
const multer = require("multer");
// const { storage } = require("../utils/cloudinary");
// const upload = multer({ storage }); // Cloudinary middleware here
const upload = require("../utils/cloudinary");

// ;
router.post("/", upload.single("image"), createBooking);

module.exports = router;
