import { React, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./SingleLaundry.scss";

import SingleLaundryImg from "../../Assets/Images/singlelaundry.webp";
import datas from "../../Database/Laundries.json";

const SingleLaundry = () => {
   const params = useParams();
   const userId = params.laundryId;
   const catId = params.catId;

   const [category] = useState(datas.database.categories);

   const filteredCategories = category.filter(
      (category) => category["cat-id"] == catId
   );
   const filteredLaundries = filteredCategories.flatMap((category) =>
      category.laundries.filter((laundry) => laundry.id == userId)
   );
   return (
      <>
         {filteredLaundries.map((laundry) => (
            <div className='singlelaundry_wrapper'>
               <div className='singlelaundry_wrapper_leftcol'>
                  <img src={SingleLaundryImg} alt='' />
               </div>

               <div className='singlelaundry_wrapper_rightcol'>
                  <h1>{laundry.name}</h1>
                  <p className='singlelaundry_wrapper_rightcol_desc'>
                     {laundry.desc}
                  </p>
                  <h2>Start From Rp {laundry.price} / kg</h2>

                  <div className='singlelaundry_wrapper_rightcol_tags'>
                     <p>3 Hours Service</p>
                     <p>One Day</p>
                     <p>2 Days</p>
                     <p>3 Days</p>
                  </div>

                  <button className='singlelaundry_wrapper_rightcol_btn'>
                       <NavLink to="/confirmpurchase">Order Now</NavLink>
                  </button>
               </div>
            </div>
         ))}
      </>
   );
};

export default SingleLaundry;
