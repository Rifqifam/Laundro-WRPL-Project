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
    return (
      <tr className="order_table">
        <td>{info.id}</td>
        <td className="order_table">{info.name}</td>
        <td className="order_table">{info.date}</td>
        <td className="order_table">Rp. {info.price}</td>
        <td style={{ backgroundColor: getStatusColor(info.status) }}>
          {info.status}
        </td>
      </tr>
    );
  });

  return (
    <table className="order_table">
      <thead>
        <tr>
          <th className="order_table_header">ID</th>
          <th className="order_table_header">Name</th>
          <th className="order_table_header">Order Date</th>
          <th className="order_table_header">Price</th>
          <th className="order_table_header">Status Date</th>
        </tr>
      </thead>
      <tbody>{DisplayData}</tbody>
    </table>
  );
}

export default JsonDataDisplay;
