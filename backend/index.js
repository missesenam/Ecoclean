const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json()); // to parse JSON body

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Ethereal test email setup (for dev)
async function sendTestEmail({ name, email, message }) {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let info = await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: "your-email@example.com", // where you want to receive the contact form messages
    subject: "New Contact Form Message",
    text: message,
  });

  console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
}

// Contact form POST endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await sendTestEmail({ name, email, message });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
