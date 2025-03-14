import React, { useState } from "react";
import axios from "axios";

const SendEmail = () => {
  const [emailData, setEmailData] = useState({
    to: "",
    text: "",
  });

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        emailData
      );
      alert(response.data.message); // Show success message
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email."); // Show error message
    }
  };

  return (
    <div>
      <input
        type="email"
        name="to"
        placeholder="Recipient Email"
        onChange={handleChange}
      />
      <textarea
        name="text"
        placeholder="Message"
        onChange={handleChange}
      ></textarea>
      <button onClick={sendEmail}>Send</button>
    </div>
  );
};

export default SendEmail;
