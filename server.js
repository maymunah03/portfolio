require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();
const PORT = process.env.PORT || 5000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { to, text } = req.body; // Get email data from request body

  // Ensure both 'to' and 'text' are provided
  if (!to || !text) {
    return res
      .status(400)
      .json({ message: "Recipient email and message are required." });
  }

  const msg = {
    to: to, // Recipient email address from frontend input
    from: "maymunahhicks@icloud.com", // Verified sender email (SendGrid)
    subject: "New Blog Subscription", // Static subject for now
    text: text, // Dynamic message content from the frontend
  };

  try {
    await sgMail.send(msg); // Send the email
    res.status(200).json({ message: "Email sent successfully" }); // Success response
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error("Error response body:", error.response.body);
    }
    res.status(500).json({ message: "Email failed to send" }); // Error response
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
