import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
const IssuesEntry = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(!open);
    //pop out modal
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
      {open ? <div>RENDER DETAILS</div> : null}
    </div>
  ) : null;
};

export default IssuesEntry;
