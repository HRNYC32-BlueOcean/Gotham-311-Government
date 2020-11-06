import React from 'react';
import PropTypes from 'prop-types';
import IssueListEntry from './IssueListEntry';
import dummyData from '../../../../dummyData/dummyData';
import {Grid} from '@material-ui/core';

const BoroughTopIssueList = (props) => {
  const {topIssues} = props;
  return (
    <div className="borough-top-issue-list-container">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="issue-list-header-container">
        <Grid item className="top-issue-header header-title" xs={3}>ISSUE</Grid>
        <Grid item className="top-issue-header header-username" xs={2}>USER</Grid>
        <Grid item className="top-issue-header header-type" xs={2}>TYPE</Grid>
        <Grid item className="top-issue-header header-creationDate" xs={2}>DATE</Grid>
        <Grid item className="top-issue-header header-priority" xs={1} style={{
          transform: `translateX(-1.2vw)`}}>
            UPVOTES
        </Grid>
        <Grid item className="top-issue-header header-status" xs={2}>STATUS</Grid>
      </Grid>
      {topIssues.map((issue) => {
        return <IssueListEntry issue={issue} id={issue.title} />;
      })}
    </div>
  );
};

BoroughTopIssueList.propTypes = {};

export default BoroughTopIssueList;
