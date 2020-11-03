import React from 'react';
import PropTypes from 'prop-types';
import UserEngagementBarChart from './charts/UserEngagementBarChart.jsx';
import MonthlyIssueLineChart from './charts/MonthlyIssueLineChart.jsx';
import BoroughIssueTracker from './BoroughIssueTracker.jsx';

const EmployeeDashboard = (props) => {
  return (
    <div className="dashboard-container">
      <div className="overall-metrics-container">
        <MonthlyIssueLineChart />
        <UserEngagementBarChart />
      </div>
      <div className="borough-metrics-container">
        <BoroughIssueTracker borough="MANHATTAN" />
        <BoroughIssueTracker borough="BROOKYLYN" />
        <BoroughIssueTracker borough="QUEENS" />
        <BoroughIssueTracker borough="BRONX" />
        <BoroughIssueTracker borough="STATEN ISLAND" />
      </div>
    </div>
  );
};

EmployeeDashboard.propTypes = {};

export default EmployeeDashboard;
