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
  const { to, subject, text } = req.body;

  const msg = {
    to,

    from: "maymunahhicks@icloud.com", // Must be a verified sender in SendGrid

    subject,

    text,
  };

  try {
    await sgMail.send(msg);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error("Error response body:", error.response.body);
    }

    res.status(500).json({ message: "Email failed to send" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
