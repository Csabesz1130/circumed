// Forecasting.js
import React, { useState } from 'react';
import './Forecasting.css';

function Forecasting() {
  const [forecastingResult, setForecastingResult] = useState(null);

  const handleForecastingClick = () => {
    // Simulating API call to get forecasting result
    const result = {
      demandForecast: {
        surgicalMasks: 10000,
        handSanitizers: 5000,
        ivFluids: 8000,
      },
      inventoryOptimization: {
        surgicalMasks: {
          currentStock: 8000,
          recommendedStock: 12000,
        },
        handSanitizers: {
          currentStock: 3000,
          recommendedStock: 6000,
        },
        ivFluids: {
          currentStock: 7000,
          recommendedStock: 9000,
        },
      },
      predictiveMaintenance: [
        { equipment: 'X-Ray Machine', maintenanceDate: '2023-06-15' },
        { equipment: 'MRI Scanner', maintenanceDate: '2023-07-10' },
        { equipment: 'Ventilator', maintenanceDate: '2023-08-01' },
      ],
    };

    setForecastingResult(result);
  };

  return (
    <div className="Forecasting">
      <h2>AI Forecasting and Prediction</h2>
      <p>Use advanced AI algorithms to forecast demand and predict inventory needs.</p>

      <div className="forecasting-section">
        <h3>Demand Forecasting</h3>
        {forecastingResult ? (
          <div className="forecasting-result">
            <p>Surgical Masks: {forecastingResult.demandForecast.surgicalMasks} units</p>
            <p>Hand Sanitizers: {forecastingResult.demandForecast.handSanitizers} units</p>
            <p>IV Fluids: {forecastingResult.demandForecast.ivFluids} units</p>
          </div>
        ) : (
          <p>Click the button to generate demand forecast.</p>
        )}
      </div>

      <div className="forecasting-section">
        <h3>Inventory Optimization</h3>
        {forecastingResult ? (
          <div className="forecasting-result">
            <p>Surgical Masks:</p>
            <ul>
              <li>Current Stock: {forecastingResult.inventoryOptimization.surgicalMasks.currentStock}</li>
              <li>Recommended Stock: {forecastingResult.inventoryOptimization.surgicalMasks.recommendedStock}</li>
            </ul>
            <p>Hand Sanitizers:</p>
            <ul>
              <li>Current Stock: {forecastingResult.inventoryOptimization.handSanitizers.currentStock}</li>
              <li>Recommended Stock: {forecastingResult.inventoryOptimization.handSanitizers.recommendedStock}</li>
            </ul>
            <p>IV Fluids:</p>
            <ul>
              <li>Current Stock: {forecastingResult.inventoryOptimization.ivFluids.currentStock}</li>
              <li>Recommended Stock: {forecastingResult.inventoryOptimization.ivFluids.recommendedStock}</li>
            </ul>
          </div>
        ) : (
          <p>Click the button to optimize inventory.</p>
        )}
      </div>

      <div className="forecasting-section">
        <h3>Predictive Maintenance</h3>
        {forecastingResult ? (
          <div className="forecasting-result">
            <ul>
              {forecastingResult.predictiveMaintenance.map((item, index) => (
                <li key={index}>
                  {item.equipment}: {item.maintenanceDate}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Click the button to predict maintenance needs.</p>
        )}
      </div>

      <button className="btn-forecast" onClick={handleForecastingClick}>
        Generate Forecast
      </button>
    </div>
  );
}

export default Forecasting;