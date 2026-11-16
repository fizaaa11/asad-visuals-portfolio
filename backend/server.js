import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
dotenv.config();

const app = express();
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});
app.use(cors({
  origin: "https://asad-visuals-portfolio.vercel.app"
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get("/", (req, res) => {
  console.log("HOME HIT");
  res.send("Hello");
});

app.post("/contact", contactLimiter, async (req, res) => {
  console.log("🔥 CONTACT ROUTE HIT 🔥");
  console.log("Body:", req.body);

  const { firstName, lastName, email, phone, subject, message } = req.body;
  if (!firstName || !email || !subject || !message) {
  return res.status(400).json({
    success: false,
    message: "Please fill all required fields.",
  });
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  return res.status(400).json({
    success: false,
    message: "Please enter a valid email address.",
  });
}

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Contact: ${subject}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Project Type: ${subject}

Message:
${message}
      `,
    });

    res.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.log("EMAIL ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});