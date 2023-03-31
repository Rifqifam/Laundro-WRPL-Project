import React from "react";
import "./SingleCat.scss";

import LaundryBlock from "../../Components/Laundry-Block/LaundryBlock";
import LaundryBlockImg from "../../Assets/Images/LaundryBlockImg.webp";

const SingleCat = (props) => {
   return (
      <>
         <div className='Singlecat_wrapper'>
            <div className='banner Singlecat_wrapper_banner'>
               <h1>{props.title}</h1>
            </div>
            <div className='Singlecat_wrapper_content'>
               <div className='homepage_wrapper_find'>
                  <div className='homepage_wrapper_find_headerwrapper'>
                     <h2>Select Laundries</h2>
                     <div className='homepage_wrapper_find_headerwrapper_filter'>
                        <div className='select_filter'>
                           <select name='City' id='select_filter_city'>
                              <option value='Yogyakarta'>Yogyakarta</option>
                           </select>
                        </div>

                        <div className='select_filter'>
                           <select
                              name='District'
                              id='select_filter_district'
                              placeholder='District'
                           >
                              <option value='Sleman'>Sleman</option>
                              <option value='Yogyakarta'>Yogyakarta</option>
                              <option value='GunungKidul'>Gunung Kidul</option>
                              <option value='Bantul'>Bantul</option>
                           </select>
                        </div>

                        <div className='select_filter'>
                           <select
                              name='Price'
                              id='select_filter_price'
                              placeholder='Price'
                           >
                              <option value=''>
                                 Rp 3.000 / kg - Rp 5.000 / kg
                              </option>
                              <option value=''>
                                 Rp 5.000 / kg - Rp 10.000 / kg
                              </option>
                              <option value=''>
                                 Rp 10.000 / kg - Rp 15.000 / kg
                              </option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div className='homepage_wrapper_find_item_wrapper'>
                     <LaundryBlock
                        image={LaundryBlockImg}
                        name='Edu Kusuma Laundry'
                        price='1500'
                     />
                     <LaundryBlock
                        image={LaundryBlockImg}
                        name='Edu Kusuma Laundry'
                        price='1500'
                     />
                     <LaundryBlock
                        image={LaundryBlockImg}
                        name='Edu Kusuma Laundry'
                        price='1500'
                     />
                     <LaundryBlock
                        image={LaundryBlockImg}
                        name='Edu Kusuma Laundry'
                        price='1500'
                     />
                     <LaundryBlock
                        image={LaundryBlockImg}
                        name='Edu Kusuma Laundry'
                        price='1500'
                     />
                     <LaundryBlock
                        image={LaundryBlockImg}
                        name='Edu Kusuma Laundry'
                        price='1500'
                     />
                     <LaundryBlock
                        image={LaundryBlockImg}
                        name='Edu Kusuma Laundry'
                        price='1500'
                     />
                     <LaundryBlock
                        image={LaundryBlockImg}
                        name='Edu Kusuma Laundry'
                        price='1500'
                     />
                     <LaundryBlock
                        image={LaundryBlockImg}
                        name='Edu Kusuma Laundry'
                        price='1500'
                     />
                     <LaundryBlock
                        image={LaundryBlockImg}
                        name='Edu Kusuma Laundry'
                        price='1500'
                     />
                     <LaundryBlock
                        image={LaundryBlockImg}
                        name='Edu Kusuma Laundry'
                        price='1500'
                     />
                     <LaundryBlock
                        image={LaundryBlockImg}
                        name='Edu Kusuma Laundry'
                        price='1500'
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleCat;
