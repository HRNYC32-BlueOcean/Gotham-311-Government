import React, { useState } from 'react';
import IssuesEntry from './IssuesEntry';
const IssuesList = (props) => {
  return (
    <div className="issues-table">
      <div className="issues-header issue-row">
        <div className="issue-data">id</div>
        <div className="issue-data">description</div>
        <div className="issue-data">reported_count</div>
        <div className="issue-data">task_owner</div>
        <div className="issue-data">username</div>
        <div className="issue-data">user_id</div>
        <div className="issue-data">upvoted_count</div>
        <div className="issue-data">resolution_status</div>
        <div className="issue-data">confirm_resolved_count</div>
        <div className="issue-data">date_issued</div>
        <div className="issue-data">date_marked_in_progress</div>
        <div className="issue-data">date_marked_resolved</div>
      </div>
      <IssuesEntry />
      {props.issues.map((issueData) => {
        return <IssuesEntry issue={issueData} />;
      })}
    </div>
  );
};
export default IssuesList;
