import React from "react";
import "./OrderTable.scss";
import JsonData from "../../Database/placeholder.json";

const getStatusColor = (status) => {
   switch (status) {
      case "Order Placed":
         return "#E3E3E3";
      case "Cleaning on Progress":
         return "#D9DB65";
      case "Cleaning Done":
         return "green";
      default:
         return "black";
   }
};

function JsonDataDisplay() {
   const DisplayData = JsonData.map((info) => {
      let myNumber = info.price;
      let formattedNumber = myNumber
         .toLocaleString("en-US", {
            useGrouping: true,
            maximumFractionDigits: 0,
         })
         .replace(",", ".");
      return (
         <tr>
            <td>
               <p>{info.id}</p>
            </td>
            <td>
               <p>{info.name}</p>
            </td>
            <td>
               <p>{info.date}</p>
            </td>
            <td>
               <p>Rp {formattedNumber}</p>
            </td>
            <td>
               <p style={{ backgroundColor: getStatusColor(info.status) }}>
                  {info.status}
               </p>
            </td>
         </tr>
      );
   });

   return (
      <table
         className='Order_wrapper_content_table'
         cellspacing='0'
         cellpadding='0'
      >
         <thead>
            <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Order Date</th>
               <th>Price</th>
               <th>Status Date</th>
            </tr>
         </thead>
         <tbody>{DisplayData}</tbody>
      </table>
   );
}

export default JsonDataDisplay;
