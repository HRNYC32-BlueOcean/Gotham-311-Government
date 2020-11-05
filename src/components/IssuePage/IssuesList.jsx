import React, { useState } from 'react';
import IssuesEntry from './IssuesEntry';
const IssuesList = (props) => {
  const clickHandler = (e) => {
    if (props.sortVal === e.target.outerText) {
      props.setData(
        props.data.sort(function (obj1, obj2) {
          return obj2[e.target.outerText] - obj1[e.target.outerText];
        })
      );
      props.setSortVal(null);
    } else {
      props.setSortVal(e.target.outerText);
      props.setData(
        props.data.sort(function (obj1, obj2) {
          return obj1[e.target.outerText] - obj2[e.target.outerText];
        })
      );
    }
  };
  return (
    <div className="issues-table">
      <div className="issues-header issue-row">
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          id
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          description
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          reported_count
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          task_owner
        </div>
        {/* <div className="issue-data">username</div> */}
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          user_id
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          upvoted_count
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          resolution_status
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          confirm_count
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          dt_issued
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          dt_in_progress
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          dt_resolved
        </div>
      </div>
      <IssuesEntry />
      {props.issues.map((issueData) => {
        return <IssuesEntry issue={issueData} />;
      })}
    </div>
  );
};
export default IssuesList;
