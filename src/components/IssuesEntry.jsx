import React, { useState } from 'react';

const IssuesEntry = (props) => {
  const handleClick = (e) => {
    console.log(e.target.attributes.name.value);
    //pop out modal
  };

  //make name equal to props.issue.id
  return (
    <div className='issue-row' name='1' onClick={(e) => handleClick(e)}>
      {/* <div className='issue-data'>{props.issue.description}</div>
      <div className='issue-data'>{props.issue.id}</div>
      <div className='issue-data'>{props.issue.reported_count}</div>
      <div className='issue-data'>{props.issue.task_owner}</div>
      <div className='issue-data'>{props.issue.username}</div>
      <div className='issue-data'>{props.issue.user_id}</div>
      <div className='issue-data'>{props.issue.upvoted_count}</div>
      <div className='issue-data'>{props.issue.resolution_status}</div>
      <div className='issue-data'>{props.issue.confirm_resolved_count}</div>
      <div className='issue-data'>{props.issue.date_issued}</div>
      <div className='issue-data'>{props.issue.date_marked_in_progress}</div>
      <div className='issue-data'>{props.issue.date_marked_resolved}</div> */}
    </div>
  );
};

export default IssuesEntry;
