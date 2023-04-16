import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ConfirmPurchase.scss";

import data from "../../Database/placeholder.json";

const ConfirmPurchase = () => {
   function getTodayDate() {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
      const yyyy = today.getFullYear();

      return dd + "-" + mm + "-" + yyyy;
   }
   const [formData, setFormData] = useState({
      name: "",
      date: getTodayDate(),
      price: 20000,
   });

   const handleFormSubmit = (event) => {
      event.preventDefault();

      // Create a new object with the form data
      const newOrder = {
         id: data.length + 1,
         name: formData.name,
         date: formData.date,
         price: formData.price,
         status: "Order Placed",
      };

      // Update the local JSON file with the new order
      data.push(newOrder);

      // Reset the form data
      setFormData({ name: "", date: "", price: 0 });

      console.log(data);
   };

   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
   };
   return (
      <div class='confirmpage_wrapper'>
         <div class='confirmpage_wrapper_input_input_wrapper'>
            <form action='' onSubmit={handleFormSubmit}>
               <div className='confirmpage_wrapper_title_wrapper'>
                  <h1 className='confirmpage_wrapper_title_wrapper_title'>
                     Confirm Your Order
                  </h1>
               </div>
               <div className='confirmpage_wrapper_input_input_wrapper_box'>
                  <label className='confirmpage_wrapper_input_name'>
                     Full Name
                  </label>
                  <input type='text' placeholder='Type here' />
               </div>
               <div className='confirmpage_wrapper_input_input_wrapper_box'>
                  <label className='confirmpage_wrapper_input_name'>
                     Email
                  </label>
                  <input type='text' placeholder='Type here' />
               </div>
               <div className='confirmpage_wrapper_input_input_wrapper_box'>
                  <label className='confirmpage_wrapper_input_name'>
                     Phone Number
                  </label>
                  <input type='text' placeholder='Type here' />
               </div>
               <div className='confirmpage_wrapper_input_input_wrapper_box'>
                  <label className='confirmpage_wrapper_input_name'>
                     Voucher
                  </label>
                  <input type='text' placeholder='Type here' />
               </div>
               <div className='confirmpage_wrapper_input_input_wrapper_box'>
                  <label className='confirmpage_wrapper_input_name'>
                     Laundry
                  </label>
                  <input
                     type='text'
                     placeholder='Type here'
                     name='name'
                     value={formData.name}
                     onChange={handleInputChange}
                  />
               </div>
               <div className='confirmpage_wrapper_input_input_wrapper_box'>
                  <label className='confirmpage_wrapper_input_name'>
                     Package
                  </label>
                  <input type='text' placeholder='Type here' />
               </div>
               <div className='confirmpage_wrapper_input_input_wrapper_address_box'>
                  <label className='confirmpage_wrapper_input_name'>
                     Address
                  </label>
                  <input type='text' placeholder='Type here' />
               </div>
               <div className='confirmpage_wrapper_input_input_wrapper_box'>
                  <label className='confirmpage_wrapper_input_name'>City</label>
                  <input type='text' placeholder='Type here' />
               </div>
               <div>
                  <label className='confirmpage_wrapper_input_name'>
                     Total Price
                  </label>
                  <p className='confirmpage_wrapper_input_input_wrapper_price'>
                     Rp.20.000
                  </p>
               </div>
               <div className='confirmpage_wrapper_button_wrapper'>
                  <button
                     className='confirmpage_wrapper_button_wrapper_button'
                     type='submit'
                  >
                     <Link to='/payment'>Order Now</Link>
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default ConfirmPurchase;
