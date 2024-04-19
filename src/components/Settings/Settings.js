// components/Settings/Settings.js
import React from 'react';
import './Settings.css';

function Settings() {
  return (
    <div className="Settings">
      <h2>Settings</h2>
      <p>Configure webapp settings.</p>
      <form>
        <label htmlFor="apiKey">API Key:</label>
        <input type="text" id="apiKey" name="apiKey" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Settings;