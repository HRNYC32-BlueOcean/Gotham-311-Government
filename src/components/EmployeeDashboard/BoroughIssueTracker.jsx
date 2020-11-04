import React from 'react';
import PropTypes from 'prop-types';
import BoroughIssuePieChart from './charts/BoroughIssuePieChart';
import BoroughTopIssueList from './lists/BoroughTopIssueList';

const BoroughIssueTracker = (props) => {
  const {borough, topIssues} = props;
  return (
    <div className="borough-info-container">
      <p className="borough-info-chart-header">
        ISSUE TRACKER : {props.borough}
      </p>
      <BoroughIssuePieChart borough={borough} />
      <p className="borough-info-list-header">TOP ISSUES:</p>
      <BoroughTopIssueList borough={borough} topIssues={topIssues} />
    </div>
  );
};

BoroughIssueTracker.propTypes = {
  borough: PropTypes.string,
  topIssues: PropTypes.object
};

export default BoroughIssueTracker;
