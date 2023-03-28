import React from "react";
import "./LaundryBlock.scss";
import { NavLink } from "react-router-dom";

const LaundryBlock = (props) => {
   return (
      <div className='laundryBlock_wrapper'>
         <div className='laundryBlock_wrapper_image'>
            <img src={props.image} alt='' />
         </div>
         <div className='laundryBlock_wrapper_content'>
            <h3>{props.name}</h3>
            <p>{`Rp ${props.price} / kg`}</p>
         </div>
         <div className='laundryBlock_wrapper_btn'>
            <NavLink>Order Now</NavLink>
         </div>
      </div>
   );
};

export default LaundryBlock;
