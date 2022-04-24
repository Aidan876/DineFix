import React from 'react';
import Placeholder from "../assets/DineFix.png";
import "../styles/Review.css";

function Review() {
    return (
      <div className="review">
          <h1> Review Page </h1>
        <form id="review-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="rating">Rate</label>
          <input name="rating" placeholder="rating out of ten..." type="text" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter Rating..."
            name="Review"
            required
          ></textarea>
          <button type="submit"> Send Review</button>
        </form>
      </div>       
 );
}

export default Review;