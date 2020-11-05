import React, { useState } from 'react';
import IssuesEntry from './IssuesEntry';
const IssuesList = (props) => {
  //for page sorting
  // const clickHandler = (e) => {
  //   if (props.sortVal === e.target.value) {
  //     props.setData(
  //       props.data.sort(function (obj1, obj2) {
  //         return obj2[e.target.value] - obj1[e.target.value];
  //       })
  //     );
  //     props.setSortVal(null);
  //   } else {
  //     props.setSortVal(e.target.value);
  //     props.setData(
  //       props.data.sort(function (obj1, obj2) {
  //         return obj1[e.target.value] - obj2[e.target.value];
  //       })
  //     );
  //   }
  // };

  return (
    <div className="issues-table">
      <div className="issues-header issue-row">
        <div className="issue-data">ID</div>
        <div className="issue-data">TITLE</div>
        <div className="issue-data">UPVOTES</div>
        <div className="issue-data">VALIDATIONS</div>
        <div className="issue-data">REPORTED</div>
        <div className="issue-data">BOROUGH</div>
        {/* <div className="issue-data">username</div> */}
        <div className="issue-data">USER_ID</div>
        <div className="issue-data">STATUS</div>
        <div className="issue-data">DATE ISSUED</div>
        <div className="issue-data">DATE IN PROGRESS</div>
        <div className="issue-data">DATE RESOLVED</div>
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
