import React from 'react';
import PropTypes from 'prop-types';

const BoroughTopIssueList = (props) => {
  return (
    <div className="issue-list-entry-grid">
      <div className="issue-entry issue-entry-title issue-list-grid-Col1">{props.issue.title}</div>
      <div className="issue-entry issue-entry-user issue-list-grid-Col2">
        {props.issue.username}
      </div>
      <div className="issue-entry issue-entry-type issue-list-grid-Col3">
        {props.issue.issue_type}
      </div>
      <div className="issue-entry issue-entry-date issue-list-grid-Col4">
        {props.issue.date_issued}
      </div>
      <div className="issue-entry issue-entry-priority issue-list-grid-Col5">
        {props.issue.priority}
      </div>
      <div className="issue-entry issue-entry-status issue-list-grid-Col6">
        {props.issue.resolution_status}
      </div>
    </div>
  );
};

BoroughTopIssueList.propTypes = {
  issue: PropTypes.object,
};

export default BoroughTopIssueList;
