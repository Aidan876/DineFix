import React from "react";
import Placeholder from "../assets/DineFix.png";
import "../styles/Checkout.css";

function checkout() {
  return (
    <div className="checkout">
      <div
        className="rightSide"
        style={{ backgroundImage: `url(${Placeholder})` }}
      ></div>
      <div className="leftSide">
        <h1> Checkout</h1>

        <form id="checkout-form" method="POST">
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" required />
          <label htmlFor="address">Address</label>
          <input name="address" placeholder="Enter address..." type="address" required />
          <label htmlFor="card number">Card Number</label>
          <input name="card number" placeholder="Enter Card Number..." type="card number" required />
          <label htmlFor="holder name">Card Holder Name</label>
          <input name="holder name" placeholder="Enter Holders Name..." type="holder name" required />
          <label htmlFor="expiry">Expiry Date</label>
          <input name="expiry" placeholder="Enter Expiry Date..." type="expiry" required />
          <label htmlFor="cvv">CVV</label>
          <input name="cvv" placeholder="Enter CVV..." type="cvv" required />
          <label htmlFor="delivery details">Order Specification</label>
          <textarea
            rows="6"
            placeholder="No Nuts / No Straws / Leave at door etc..."
            name="Order Details"
          ></textarea>
          <button type="submit"> Complete Payment</button>
        </form>
      </div>
    </div>
  );
}

export default checkout;