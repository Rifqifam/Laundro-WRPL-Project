import React from "react";
import "./ConfirmPurchase.scss";

const ConfirmPurchase = () => {
  return (
    <div class="confirmpage_wrapper">
      <div class="confirmpage_wrapper_title">Confirm Your Order</div>
      <div class="confirmpage_wrapper_input_input_wrapper">
        <div className="confirmpage_wrapper_input_input_wrapper_box">
          <label className="confirmpage_wrapper_input_name">Full Name</label>
          <input type="text" placeholder="Type here" />
        </div>
        <div className="confirmpage_wrapper_input_input_wrapper_box">
          <label className="confirmpage_wrapper_input_name">Email</label>
          <input type="text" placeholder="Type here" />
        </div>
        <div className="confirmpage_wrapper_input_input_wrapper_box">
          <label className="confirmpage_wrapper_input_name">Phone Number</label>
          <input type="text" placeholder="Type here" />
        </div>
        <div className="confirmpage_wrapper_input_input_wrapper_box">
          <label className="confirmpage_wrapper_input_name">Voucher</label>
          <input type="text" placeholder="Type here" />
        </div>
        <div className="confirmpage_wrapper_input_input_wrapper_box">
          <label className="confirmpage_wrapper_input_name">Laundry</label>
          <input type="text" placeholder="Type here" />
        </div>
        <div className="confirmpage_wrapper_input_input_wrapper_box">
          <label className="confirmpage_wrapper_input_name">Package</label>
          <input type="text" placeholder="Type here" />
        </div>
        <div className="confirmpage_wrapper_input_input_wrapper_address_box">
          <label className="confirmpage_wrapper_input_name">Address</label>
          <input type="text" placeholder="Type here" />
        </div>
        <div className="confirmpage_wrapper_input_input_wrapper_box">
          <label className="confirmpage_wrapper_input_name">
            Estimated Weight
          </label>
          <input type="text" placeholder="Type here" />
        </div>
        <div>
          <label className="confirmpage_wrapper_input_input_wrapper_price_price_title">
            Total Price
          </label>
          <p className="confirmpage_wrapper_input_input_wrapper_price">
            Rp.20.000
          </p>
        </div>
        <div>
          <button className="confirmpage_wrapper_input_input_wrapper_button">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPurchase;
