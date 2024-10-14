import React, { useEffect } from "react";
import "./Home.css";
import myPic from './my_pic.jpg';
import { Link } from "react-router-dom";
import Typed from 'typed.js'; // Import Typed.js

export const Home = () => {
  useEffect(() => {
    // Options for Typed.js
    const options = {
      strings: [
        "Hello,", 
        "My name is Maymunah Hicks.",
        "I am an aspiring software engineer who is passionate about learning and taking on new challenges.",
        "Click the button below to learn more about me. Thanks for stopping by!"
      ],
      typeSpeed: 45,
      backSpeed: 20,
      loop: false,
      startDelay: 500, // Small delay before typing starts
      backDelay: 1000, // Delay between strings
      showCursor: true, // One blinking cursor for the whole typing
      cursorChar: '|', // Customize the cursor character if you want
    };

    // Initialize Typed.js with one instance for all text
    const typed = new Typed('#typed-text', options);

    // Cleanup function to destroy the Typed instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="intro-wrapper">
      <div className="intro">
        <h2>
          <span id="typed-text"></span> {/* One element for all text */}
        </h2>
        </div>
        <div className="about-me">
        <Link to="/About">
          <button className="about-me-button">More about me</button>
        </Link>
      </div>
      <div className="photo">
        <img src={myPic} alt="Maymunah Hicks" className="photo-style" />
      </div>
    </div>
  );
};
