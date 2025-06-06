// const multer = require("multer");
// const path = require("path");

// // Define storage config
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Make sure this folder exists
//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       `${Date.now()}-${file.fieldname}${path.extname(file.originalname)}`
//     );
//   },
// });

// // File filter (optional)
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = /jpeg|jpg|png/;
//   const extname = allowedTypes.test(
//     path.extname(file.originalname).toLowerCase()
//   );
//   const mimetype = allowedTypes.test(file.mimetype);

//   if (extname && mimetype) {
//     return cb(null, true);
//   } else {
//     cb("Only images (jpeg, jpg, png) are allowed");
//   }
// };

// const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
//   fileFilter,
// });
// module.exports = upload;

// the New //
//
//
//

// require("dotenv").config();
// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const multer = require("multer");
// // Configure cloudinary with your credentials
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // or your actual cloud name string
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
// // console.log(cloudinary.config());
// // Configure storage to upload files to Cloudinary
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "ecoclean-bookings", // optional folder name in your cloudinary
//     allowed_formats: ["jpg", "jpeg", "png"],
//   },
// });
// const parser = multer({ storage: storage });
// module.exports = parser;

// the Newest //
//
//
//

require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "ecoclean-bookings", // optional folder name in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

module.exports = {
  cloudinary,
  storage,
};
