import React from "react";
import "./Payment.scss";

const Payment = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="rightside">
          <form action="">
            <h1>Checkout</h1>
            <h2>Payment Information</h2>
            <p>Bank Name</p>
            <select
              className="inputbox"
              name="bank_name"
              id="bank_name"
              required
            >
              <option value="">--Select Bank--</option>
              <option value="Bank_Papua">Bank Papua</option>
              <option value="BNI">BNI</option>
              <option value="Mandiri">Mandiri</option>
              <option value="BCA">BCA</option>
              <option value="BSI">BSI</option>
              <option value="BRI">BRI</option>
            </select>
            <p>Cardholder Name</p>
            <input type="text" className="inputbox" name="name" required />
            <p>Card Number</p>
            <input
              type="number"
              className="inputbox"
              name="card_number"
              id="card_number"
              required
            />
            <p></p>
            <button type="submit" className="button">
              Checkout
            </button>
          </form>
        </div>
        <img
          className="product"
          src={require("../../Assets/Images/qris.png")}
          alt="QRIS"
        />
      </div>
    </div>
  );
};

export default Payment;
