import React from "react";
import "./Category.scss";

import CategoryBlock from "../../Components/Category-Block/CategoryBlock";
import CategoryImg from "../../Assets/Images/categoryimg.webp";

const Category = () => {
   return (
      <>
         <div className='category_wrapper'>
            <div className='banner category_wrapper_banner'>
               <h1>Categories</h1>
            </div>

            <div className='category_wrapper_content'>
               <CategoryBlock
                  title='One Day Service'
                  image={CategoryImg}
                  link='/category/oneday-service'
               />
               <CategoryBlock
                  title='One Customer One Machine'
                  image={CategoryImg}
                  link='/category/one-customer'
               />
               <CategoryBlock
                  title='Wash Only'
                  image={CategoryImg}
                  link='/category/washonly'
               />
               <CategoryBlock
                  title='Steam'
                  image={CategoryImg}
                  link='/category/steam'
               />
               <CategoryBlock
                  title='3 Hours Express'
                  image={CategoryImg}
                  link='/category/three-hours'
               />
               <CategoryBlock
                  title='Under 2 kg'
                  image={CategoryImg}
                  link='/category/under-2-kg'
               />
            </div>
         </div>
      </>
   );
};

export default Category;
