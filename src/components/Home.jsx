import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import myPic from "../images/my_pic.jpg";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import { Link } from "react-router-dom";
import Typed from "typed.js"; // Import Typed.js

export const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [myPic, pic2, pic1];
  const hoverInterval = useRef(null);

  const handleMouseHovers = () => {
    if (!hoverInterval.current) {
      hoverInterval.current = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000); // Slow down interval to 1 second (1000 ms) for smoother transitions
    }
  };
  const handleMouseLeaves = () => {
    clearInterval(hoverInterval.current);
    hoverInterval.current = null; // Reset the ref
    setCurrentImage(0); // Reset to the first image
  };


  const firstTypedRef = useRef(null);
  const secondTypedRef = useRef(null);

  useEffect(() => {
    const firstTyped = new Typed(firstTypedRef.current, {
      strings: [
        'Hello. My name is <span class="name"> Maymunah Hicks\n</span> <br>Welcome to my Portfolio!'],
      typeSpeed: 45,
      showCursor: false,
      startDelay: 1000,
      loop: false,
      onComplete: () => {
        // Start the second Typed instance when the first one is done
        new Typed(secondTypedRef.current, {
          strings: [
            "I am an aspiring software engineer who is passionate about learning and taking on new challenges.",
            "Click one of the buttons below to learn more about me. Thanks for stopping by :)"
          ],
          typeSpeed: 45,
          backSpeed: 20,
          backDelay: 1000,
          loop: false,
          showCursor: false,
        });
      }
    });
  
    return () => {
      firstTyped.destroy();
    };
  }, []);
  
 
  return (
    <div className="home-container">
    {/* Text Section */}
    <div className="intro-wrapper">
      <div className="intro">
        <h2 ref={firstTypedRef}>{/* First text will be typed here */}</h2>
        <h2 ref={secondTypedRef}>{/* Second text will then be typed here.*/}</h2>
      </div>
      <div className="about-me">
        <Link to="/About">
          <button className="about-me-button">More about me</button>
          <Link to="Projects">
            <button className="view-mywork-button">View My Work</button>
          </Link>
        </Link>
      </div>
    </div>
  
    {/* Image Section */}
    <div className="photo-wrapper">
      <div
        className="photo"
        onMouseEnter={handleMouseHovers}
        onMouseLeave={handleMouseLeaves}
      >
        <img
          src={images[currentImage]}
          alt="Maymunah Hicks"
          className="photo-style"
        />
      </div>
    </div>
  </div>
  ) 
};
