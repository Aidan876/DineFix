import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/DineFix.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> DineFix </h1>
        <p> Easy Restaurant Booking</p>
        <Link to="/menu">
          <button> View Listings </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
