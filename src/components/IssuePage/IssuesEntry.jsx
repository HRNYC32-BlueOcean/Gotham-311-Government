import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
const IssuesEntry = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(!open);
  };

  //make name equal to props.issue.id
  return props.issue ? (
    <div>
      <div className="issue-row" onClick={handleClick}>
        <div className="issue-data">{props.issue.description}</div>
        <div className="issue-data">{props.issue.id}</div>
        <div className="issue-data">{props.issue.reported_count}</div>
        <div className="issue-data">{props.issue.task_owner}</div>
        <div className="issue-data">{props.issue.username}</div>
        <div className="issue-data">{props.issue.user_id}</div>
        <div className="issue-data">{props.issue.upvoted_count}</div>
        <div className="issue-data">{props.issue.resolution_status}</div>
        <div className="issue-data">{props.issue.confirm_resolved_count}</div>
        <div className="issue-data">{props.issue.date_issued}</div>
        <div className="issue-data">{props.issue.date_marked_in_progress}</div>
        <div className="issue-data">{props.issue.date_marked_resolved}</div>
      </div>
      {open ? (
        <div>
          <div className="issue-data-detail">ID: {props.issue.id}</div>
          <div className="issue-data-detail">{props.issue.upvoted_count}</div>
          <div className="issue-data-detail">Reported: {props.issue.reported_count}</div>
          <div className="issue-data-detail">Task Owner: {props.issue.task_owner}</div>
          <div className="issue-data-detail">User ID: {props.issue.user_id}</div>
          <div className="issue-data-detail">
            Resolution Status: {props.issue.resolution_status}
          </div>
          <div className="issue-data-detail">
            Confirmed Count: {props.issue.confirm_resolved_count}
          </div>
          <div className="issue-data-detail">Date Issued: {props.issue.date_issued}</div>
          <div className="issue-data-detail">
            Date In-Progress{props.issue.date_marked_in_progress}
          </div>
          <div className="issue-data-detail">Date Resolved{props.issue.date_marked_resolved}</div>
          <div className="issue-data-detail">Description{props.issue.description}</div>
          {/* maybe add a map? */}
          {/* <img src={props.issue.img}></img> */}
          {/* might need to do confitional rendering */}
          <button>Own Ticket</button>
          <button>Mark Resolved</button>
        </div>
      ) : null}
    </div>
  ) : null;
};

export default IssuesEntry;
