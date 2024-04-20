// components/Reporting/ReportList.js
import React from 'react';
import './Reporting.css';
import ReportDetails from './ReportDetails';

function ReportList() {
  return (
    <div className="ReportList">
      <h2>Report Management</h2>
      <p>Manage and review report details below:</p>
      <ul className="report-list">
        {/* Example ReportDetails */}
        <ReportDetails />
        {/* More ReportDetails components can be dynamically added here */}
      </ul>
    </div>
  );
}

export default ReportList;
