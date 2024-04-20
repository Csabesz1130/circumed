// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Inventory from './components/Inventory/InventoryList';
import StockCounting from './components/StockCounting/StockCounting';
import OrderList from './components/OrderManagement/OrderList';
import ReportList from './components/Reporting/ReportList';
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

        <Routes>
          <Route path="/" element={<Dashboard />} />
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
          <Route path="/reporting" component={ReportingList} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
