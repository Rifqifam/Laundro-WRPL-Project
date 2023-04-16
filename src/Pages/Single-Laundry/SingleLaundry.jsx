import React from "react";
import { NavLink } from "react-router-dom";
import "./SingleLaundry.scss";

import SingleLaundryImg from "../../Assets/Images/singlelaundry.webp";

const SingleLaundry = () => {
  return (
    <>
      <div className="singlelaundry_wrapper">
        <div className="singlelaundry_wrapper_leftcol">
          <img src={SingleLaundryImg} alt="" />
        </div>

        <div className="singlelaundry_wrapper_rightcol">
          <h1>Edu Kusuma Laundry</h1>
          <p className="singlelaundry_wrapper_rightcol_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            vulputate imperdiet vestibulum. Quisque ac ipsum sit amet tortor
            volutpat laoreet. Donec eu aliquam dolor.
            <br /> Integer dapibus condimentum magna, ac condimentum ante
            convallis sit amet. Nam sit amet convallis sem. Phasellus vitae
            condimentum risus. Cras iaculis est at risus malesuada,{" "}
          </p>
          <h2>Start From Rp 1.500 / kg</h2>

          <div className="singlelaundry_wrapper_rightcol_tags">
            <p>3 Hours Service</p>
            <p>One Day</p>
            <p>2 Days</p>
            <p>3 Days</p>
          </div>

          <button className="singlelaundry_wrapper_rightcol_btn">
            <NavLink to="/confirmpurchase">Order Now</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleLaundry;
