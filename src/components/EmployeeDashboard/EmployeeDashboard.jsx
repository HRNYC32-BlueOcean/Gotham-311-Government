import React, {useState , useEffect} from 'react';
import PropTypes from 'prop-types';
import UserEngagementBarChart from './charts/UserEngagementBarChart';
import MonthlyIssueLineChart from './charts/MonthlyIssueLineChart';
import BoroughIssueTracker from './BoroughIssueTracker';
import axios from 'axios';
import { getTopIssues,
  getIssueStatusCountByBoroughForLast24hours,
  getIssueStatusCountForPeriod,
  getUserInteractionCountsForPeriod } from '../api_calls/api_calls';

const EmployeeDashboard = (props) => {

  const [topIssues, setTopIssues] = useState(null);
  const [boroughIssues, setBoroughIssues] = useState(null);
  const [interactionCounts, setInteractionCounts] = useState(null);
  const [issueCounts, setIssueCounts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    Promise.all([getTopIssues()/*,
      getIssueStatusCountByBoroughForLast24hours(),
      getUserInteractionCountsForPeriod(),
    getIssueStatusCountForPeriod()*/])
      .then((responses) => {
        const newTopIssues = responses[0].data.data.topIssues;
        // const newBoroughIssues = responses[1].data.data.boroughIssues;
        // const newInteractionCounts = responses[2].data.data.interactionCounts;
        // const newIssueCounts = responses[3].data.data.issueCounts;
        setTopIssues(newTopIssues);
        // setBoroughIssues(newBoroughIssues);
        // setInteractionCounts(newInteractionCounts);
        // setIssueCounts(newIssueCounts);
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
