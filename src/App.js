// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Inventory from './components/Inventory/Inventory';
import StockCounting from './components/StockCounting/StockCounting';
import OrderManagement from './components/OrderManagement/OrderManagement';
import Reporting from './components/Reporting/Reporting';
import Settings from './components/Settings/Settings';
import Forecasting from './components/Forecasting/Forecasting';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">CircuMed</div>
          <ul className="nav-links">
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            <li>
              <Link to="/stock-counting">Stock Counting</Link>
            </li>
            <li>
              <Link to="/forecasting">Forecasting</Link>
            </li>
            <li>
              <Link to="/order-management">Order Management</Link>
            </li>
            <li>
              <Link to="/reporting">Reporting</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/stock-counting" component={StockCounting} />
          <Route path="/forecasting" component={Forecasting} />
          <Route path="/order-management" component={OrderManagement} />
          <Route path="/reporting" component={Reporting} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;