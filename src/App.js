// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Inventory from './components/Inventory/InventoryList';
import StockCounting from './components/StockCounting/StockCounting';
import OrderList from './components/OrderManagement/OrderList';
import ReportList from './components/Reporting/ReportList';
import Settings from './components/Settings/Settings';
import Forecasting from './components/Forecasting/Forecasting';

function App() {
  const navigate = useNavigate();

  // Example database: Array of objects simulating inventory items, now including new items
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Amlodipine', quantity: 10, description: 'Standard medical pills' },
    { id: 2, name: 'Knee Prosthetics', quantity: 15, description: 'Advanced prosthetic limbs' },
    { id: 3, name: 'Bavezicumab', quantity: 20, description: 'Basic anti-tumor medicine' },
    { id: 4, name: 'Pills', quantity: 100, description: 'Pain relief pills' },
    { id: 5, name: 'Prosthetics', quantity: 30, description: 'Customized prosthetic arms' },
    { id: 6, name: 'Anti-Tumor Medicine', quantity: 50, description: 'Advanced cancer treatment medicine' }
  ]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">CircuMed</div>
          <ul className="nav-links">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/stock-counting">Stock Counting</Link></li>
            <li><Link to="/forecasting">Forecasting</Link></li>
            <li><Link to="/order-management">Order Management</Link></li>
            <li><Link to="/reporting">Reporting</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
        
        <button onClick={goBack} className="back-button">Go Back</button>

        <Routes>
          <Route path="/" element={<Dashboard inventory={inventory} />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/stock-counting" element={<StockCounting />} />
          <Route path="/forecasting" element={<Forecasting />} />
          <Route path="/order-management" element={<OrderList />} />
          <Route path="/reporting" element={<ReportList />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
