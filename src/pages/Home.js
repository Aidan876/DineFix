import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home.jpg";
import "../styles/Home.css";
import HFooter from "../components/HomeFooter";
import logo2 from "../assets/logo2.png"



function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <div className="textContainer">
        <img src={logo2} alt="logo"/>  
        <p> Easy Restaurant Booking</p>
        <Link to="/menu">
          <button> Book Now </button>
        </Link>
        </div>
      </div>
      <br/>
     
      <HFooter/>
    </div>
    
  );
}

export default Home;
