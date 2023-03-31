import React from "react";
import { NavLink } from "react-router-dom";
import "./CategoryBlock.scss";

const CategoryBlock = (prop) => {
   return (
      <>
         <NavLink to={prop.link}>
            <div className='categoryblock_wrapper'>
               <h2>{prop.title}</h2>
               <img
                  src={prop.image}
                  alt=''
                  className='categoryblock_wrapper_bg'
               />
            </div>
         </NavLink>
      </>
   );
};

export default CategoryBlock;
