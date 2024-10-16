import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>Maymunah Hicks</p>
          <p>(704) 685-5241</p>
        </div>
        <div className="socials">
          <p>Follow me:</p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/path/to/facebook-icon.png" alt="Facebook" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/path/to/twitter-icon.png" alt="Twitter" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/path/to/instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="subscribe">
          <p>Subscribe to my blog</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};
