import React from "react";
import "./About.css";
import coder from "./coder.jpg";

export const About = () => {
  return (
    <div className="wrapper">
      <div className="about-coder">
        <h1>Coder.</h1>
        <p>
          I was introduced to coding during my freshman year of college when I
          took a crash course on FreeCodeCamp. Ever since then, I've really
          enjoyed it. There's something amazing about seeing my ideas come to
          life on the screen. Plus, as a Black Muslim woman in the tech
          industry, I’m happy to represent diversity in this space.{" "}
        </p>
      </div>
      <div className="photo">
        <img src = {coder} alt = "Maymunah Hicks"/>
      </div>
    </div>
  );
};
