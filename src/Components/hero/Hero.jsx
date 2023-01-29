import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";

const Hero = ({ headline, photoLink }) => {
  return (
    <div className="heroContainer">
      <img className="heroImage" src={photoLink} alt="Hero" />
      <p className="heroHeadline">{headline}</p>
      <button className="heroButton">
        <Link to={"/ProductLine"}> EXPLORE</Link>
      </button>
    </div>
  );
};

export default Hero;
