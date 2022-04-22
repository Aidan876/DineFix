import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function HFooter() {
    return (
        <div className="hfooter">
            
            <Link to="/Restaurants-Login"> Restaurants Login </Link>
            
          <Link to="/Charities-Login"> Charities Login </Link>
        </div>
        
      
    );
  }
  
  export default HFooter;