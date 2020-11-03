import React from 'react';
import PropTypes from 'prop-types';
import IssueListEntry from './IssueListEntry';
import dummyData from '../../../../dummyData/dummyData';

const BoroughTopIssueList = (props) => {
  const topIssues = dummyData;
  return (
    <div className="borough-top-issue-list-container">
      <div className="issue-list-header-container">
        <div className="top-issue-header header-title">ISSUE</div>
        <div className="top-issue-header header-username">USER</div>
        <div className="top-issue-header header-type">TYPE</div>
        <div className="top-issue-header header-creationDate">DATE</div>
        <div className="top-issue-header header-priority">PRIORITY</div>
        <div className="top-issue-header header-status">STATUS</div>
      </div>
      {topIssues.map((issue) => {
        return <IssueListEntry issue={issue} id={issue.title} />;
      })}
    </div>
  );
};

BoroughTopIssueList.propTypes = {};

export default BoroughTopIssueList;
