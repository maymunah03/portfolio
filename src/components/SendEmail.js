import React, { useState } from "react";
import axios from "axios";
import "./Footer.css";



const SendEmail = () => {

    const [emailData, setEmailData] = useState({

        to: "",

        subject: "",

        text: "",

    });


    const handleChange = (e) => {

        setEmailData({ ...emailData, [e.target.name]: e.target.value });

    };


    const sendEmail = async () => {

        try {

            const response = await axios.post("http://localhost:5000/send-email", emailData);

            alert(response.data.message);

        } catch (error) {

            console.error("Error sending email:", error);

            alert("Failed to send email.");

        }

    };


return (

    <div>


        <input type="email" name="to" placeholder="Recipient Email" onChange={handleChange} />

        <input type="text" name="subject" placeholder="Subject" onChange={handleChange} />

        <textarea name="text" placeholder="Message" onChange={handleChange}></textarea>

        <button onClick={sendEmail}>Send</button>

    </div>

);

};





export default SendEmail;