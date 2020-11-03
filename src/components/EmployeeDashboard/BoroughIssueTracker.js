import React from 'react';
import PropTypes from 'prop-types';
import BoroughIssuePieChart from './charts/BoroughIssuePieChart.js';
import BoroughTopIssueList from './lists/BoroughTopIssueList.js';

var BoroughIssueTracker = (props) => {
  return (
    <div className="borough-info-container">
      <p className="borough-info-chart-header">ISSUE TRACKER: {props.borough}</p>
      <BoroughIssuePieChart borough={props.borough}/>
      <p className="borough-info-list-header">TOP ISSUES:</p>
      <BoroughTopIssueList borough={props.borough} topIssues={props.topIssues}/>
    </div>
  )
}

BoroughIssueTracker.propTypes = {
}

export default BoroughIssueTracker;