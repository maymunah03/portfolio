import React from "react";
import "./About.css";
import coder from "./coder.jpg";
import TextNavigater from "./TextNavigater";

export const About = () => {
  return (
    <div className="wrapper">
      <div className="about-coder">
        <h1>Coder.</h1>
        <TextNavigater />
      </div>
      <div className="photo">
        <img src = {coder} alt = "Maymunah Hicks"/>
      </div>
    </div>
  );
};
