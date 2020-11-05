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
          ID
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          TITLE
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          UPVOTES
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          VALIDATIONS
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          REPORTED
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          BOROUGH
        </div>
        {/* <div className="issue-data">username</div> */}
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          USER_ID
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          STATUS
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          DATE ISSUED
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          DATE IN PROGRESS
        </div>
        <div className="issue-data" onClick={(e) => clickHandler(e)}>
          DATE RESOLVED
        </div>
      </div>
      <IssuesEntry />

      {props.issues
        ? props.issues.map((issueData) => {
            return <IssuesEntry issue={issueData} />;
          })
        : null}
    </div>
  );
};
export default IssuesList;
