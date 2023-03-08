import React from "react";
import "./aboutUS.css";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutHeader">
        <h1 className="aboutContactH1">About us</h1>
        <p className="aboutHeadParagraph">All you need to know</p>
      </div>
      <div className="aboutUsContainer">
        <div className="aboutOurStoryDiv">
          <div className="storyDiv">
            <h1>Story</h1>
            <p>
              Passion Products is an e-commerce site that is dedicated to
              bringing you the best products for your passions. We believe that
              pursuing your passions is important, and we want to help you do
              that by providing you with products that can enhance your
              experience.
            </p>
          </div>
        </div>
        <div className="aboutOurTeam">
          <div className="teamDiv">
            <h1>Team</h1>
            <p>
              Our team is made up of passionate individuals who are dedicated to
              finding the best products for our customers. We search far and
              wide to find unique and high-quality products that are not
              commonly found in traditional stores.
            </p>
          </div>
        </div>
        <div className="aboutOurValues">
          <div className="valuesDiv">
            <h1>Values</h1>
            <p>
              We believe in providing exceptional customer service to our
              customers. If you have any questions or concerns, our team is
              always ready to help you out. We want to make sure that your
              shopping experience with us is a positive one.
            </p>
          </div>
        </div>
      </div>
      <div className="backgroundImg">
        <img
          src="https://images.unsplash.com/photo-1570173548275-32c3f59f7601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
          alt="Our sory"
        />
      </div>
    </div>
  );
};

export default AboutUs;
