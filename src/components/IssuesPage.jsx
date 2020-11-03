import React, { useState } from 'react';
import IssuesList from './IssuesList';
const example = [
  {
    description: 'test',
    id: 'test',
    reported_count: 'test',
    task_owner: 'test',
    username: 'test',
    user_id: 'test',
    upvoted_count: 'test',
    resolution_status: 'test',
    confirm_resolved_count: 'test',
    date_issued: 'test',
    date_marked_in_progress: 'test',
    date_marked_resolved: 'test',
  },
  {
    description: 'test2',
    id: 'test2',
    reported_count: 'test2',
    task_owner: 'test2',
    username: 'test2',
    user_id: 'test2',
    upvoted_count: 'test2',
    resolution_status: 'test2',
    confirm_resolved_count: 'test2',
    date_issued: 'test2',
    date_marked_in_progress: 'test2',
    date_marked_resolved: 'test2',
  },
];
const IssuesPage = (props) => (
  <div>
    {/* <Statuses /> */}
    <IssuesList issues={example} />
  </div>
);

export default IssuesPage;
