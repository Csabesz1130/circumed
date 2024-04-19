// components/OrderManagement/OrderList.js
import React from 'react';
import './OrderManagement.css';
import OrderDetails from './OrderDetails';

function OrderList() {
  return (
    <div className="OrderList">
      <h2>Order Management</h2>
      <p>Manage and track purchase orders.</p>
      <ul className="order-list">
        <OrderDetails />
        {/* Add more OrderDetails components as needed */}
      </ul>
    </div>
  );
}

export default OrderList;