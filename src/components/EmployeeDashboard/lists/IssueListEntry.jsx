import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const BoroughTopIssueList = (props) => {
  const {issue} = props;
  const username = issue.user.email.split('@')[0];

  return (
    <div className="issue-list-entry-grid">
      <div className="issue-entry issue-entry-title issue-list-grid-Col1">{issue.title}</div>
      <div className="issue-entry issue-entry-user issue-list-grid-Col2">
        {username}
      </div>
      <div className="issue-entry issue-entry-type issue-list-grid-Col3">
        {issue.type.name}
      </div>
      <div className="issue-entry issue-entry-date issue-list-grid-Col4">
        {moment(issue.createdAt).format('MMM Do YYYY')}
      </div>
      <div className="issue-entry issue-entry-priority issue-list-grid-Col5">
        {issue.upvotes_count}
      </div>
      <div className="issue-entry issue-entry-status issue-list-grid-Col6">
        {issue.resolution_status.status}
      </div>
    </div>
  );
};

BoroughTopIssueList.propTypes = {
  issue: PropTypes.object,
};

export default BoroughTopIssueList;
