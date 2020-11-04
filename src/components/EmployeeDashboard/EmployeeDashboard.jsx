import React, {useState , useEffect} from 'react';
import PropTypes from 'prop-types';
import UserEngagementBarChart from './charts/UserEngagementBarChart';
import MonthlyIssueLineChart from './charts/MonthlyIssueLineChart';
import BoroughIssueTracker from './BoroughIssueTracker';
import axios from 'axios';
import {getTopIssues} from '../api_calls/api_calls';

const EmployeeDashboard = (props) => {

  const [topIssues, setTopIssues] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    Promise.all([getTopIssues(), getIssueStatusCountByBoroughForLast24hours()])
      .then((responses) => {
        console.log(responses);
        console.log(responses[0].data.data.topIssues);
        setTopIssues(responses[0].data.data.topIssues);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('graphql error', err)
      });
  }, [])

  if (isLoading) {
    return (
      <div className="loading">Loading Data...</div>
    )
  }

  return (
      <div className="dashboard-container">
        <div className="overall-metrics-container">
          <MonthlyIssueLineChart />
          <UserEngagementBarChart />
        </div>
        <div className="borough-metrics-container">
          <BoroughIssueTracker borough="MANHATTAN" topIssues={topIssues.manhattan}/>
          <BoroughIssueTracker borough="BROOKYLYN" topIssues={topIssues.brooklyn}/>
          <BoroughIssueTracker borough="QUEENS" topIssues={topIssues.queens}/>
          <BoroughIssueTracker borough="BRONX" topIssues={topIssues.bronx}/>
          <BoroughIssueTracker borough="STATEN ISLAND" topIssues={topIssues.staten_island}/>
        </div>
      </div>
  );
}

EmployeeDashboard.propTypes = {};

export default EmployeeDashboard;
