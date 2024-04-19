import React from 'react';
import './Forecasting.css';

function Forecasting() {
  return (
    <div className="Forecasting">
      <h2>AI Forecasting and Prediction</h2>
      <p>Use advanced AI algorithms to forecast demand and predict inventory needs.</p>
      <div className="forecasting-cards">
        <div className="card">
          <h3>Demand Forecasting</h3>
          <p>Predict future demand for medical supplies and equipment based on historical data and trends.</p>
          <button className="btn-forecast">Forecast Demand</button>
        </div>
        <div className="card">
          <h3>Inventory Optimization</h3>
          <p>Optimize inventory levels based on predicted demand and supply chain constraints.</p>
          <button className="btn-optimize">Optimize Inventory</button>
        </div>
        <div className="card">
          <h3>Predictive Maintenance</h3>
          <p>Predict maintenance needs for medical equipment to minimize downtime and ensure optimal performance.</p>
          <button className="btn-predict">Predict Maintenance</button>
        </div>
      </div>
    </div>
  );
}

export default Forecasting;