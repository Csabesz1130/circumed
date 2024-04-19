// components/Inventory/InventoryList.js
import React from 'react';
import './Inventory.css';

function InventoryList() {
  return (
    <div className="InventoryList">
      <h2>Inventory List</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

export default InventoryList;