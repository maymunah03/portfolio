import React from "react";
import "./Home.css";
import myPic from './my_pic.jpg';

export const Home = () => {
  return (
    <div className="intro-wrapper">
      <div className="intro">
        <p>Hello, I am</p>
        <div className="name-intro"><p>Maymunah Hicks</p></div>
        <div className="additional-info">
          <p>I am an aspiring software engineer who is passionate about learning
          and taking on new challenges.
          <br /> Feel free to explore my projects. Thanks for stopping by!</p>
        </div>
        <button className="contact-button">Contact Me</button>
      </div>
      <div className="photo">
      <img src={myPic} alt="Maymunah Hicks" className="photo-style"/>
      </div>
    </div>
  );
};
