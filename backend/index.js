// express
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
// routers
const contactRouter = require("./routes/contactRoutes");
const bookingRouter = require("./routes/bookingRoutes");

// server
const app = express();

// Define specific CORS options
const contactCorsOptions = {
  origin: ["http://localhost:5173", "https://your-frontend.com"],
  methods: ["POST"],
  credentials: true,
};

// general cors middleware
app.use(cors(contactCorsOptions));

// body parser middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/api/contact", contactRouter);
app.use("/api/booking", bookingRouter);

// connection
mongoose
  .connect(process.env.MONGO_URI)
  .then((resu) => {
    app.listen(port, () =>
      console.log(`the server up and ready on port: ${port}`)
    );
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });
