import React from "react";
import "./Footer.css";
import SendEmail from "./SendEmail";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>Maymunah Hicks</p>
          <p>(704) 685-5241</p>
        </div>
        <div className="socials">
          <p>Connect with me:</p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/maymunah-hicks-19aa08233/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/linkedin.png" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/maymunah03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/github.png" alt="GitHub"/>
            </a>
          </div>
        </div>
        <div className="subscribe">
          <p>Subscribe to my blog:</p>
          {/* <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form> */}
          <SendEmail />
        </div>
      </div>
    </footer>
  );
};
