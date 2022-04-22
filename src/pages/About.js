import React from "react";
import placeholder from "../assets/chinese.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${placeholder})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        DineFix lets you pre-order and book your seats before you arrive at the restaurant. No more waiting, to be seated or have your order taken. You can arrive and begin to dine straight away. DineFix isn't just for dining in you can also order a takeaway for delivery or collection. DineFix gives you the option to donate to one of our charity partners As a charity Dinefix replaces the charity box by the till in restaurants. Less and less people are using cash these days, Dinefix gives you an alternative way to donate with card
        </p>
      </div>
    </div>
  );
}

export default About;
