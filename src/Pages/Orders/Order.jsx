import React from "react";
import "./Order.scss";
import OrderTable from "../../Components/Order-Table/OrderTable";

const Order = () => {
   return (
      <>
         <div className='Order_wrapper'>
            <div className='banner Order_wrapper_banner'>
               <h1>Your Orders</h1>
            </div>
            <div className='Order_wrapper_content'>
               <div className='Order_wrapper_content_text'>
                  <h2>All Orders</h2>
                  <OrderTable />
               </div>
            </div>
         </div>
      </>
   );
};

export default Order;
