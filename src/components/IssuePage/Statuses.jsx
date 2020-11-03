import React, { useState } from 'react';

const Statuses = (props) => {
  let inProgress = props.countInProgress;
  let resolved = props.countResolved;
  let newIssues = props.countNewIssue;

  return (
    <div className='statuses'>
      <div className='status'>New Issues: {newIssues}</div>
      <div className='status'>In Progress: {inProgress}</div>
      <div className='status'>Resolved: {resolved}</div>
    </div>
  );
};

export default Statuses;
