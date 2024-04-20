// src/components/Inventory/InventoryList.js
import React from 'react';
import inventoryData from '../../data/inventoryData';

const InventoryList = () => {
  return (
    <div>
      <h2>Inventory List</h2>
      <ul>
        {inventoryData.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong> ({item.type}) - {item.description} [Quantity: {item.quantity}]
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
