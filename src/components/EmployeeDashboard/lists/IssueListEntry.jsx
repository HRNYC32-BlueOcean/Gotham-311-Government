import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Grid, Typography} from '@material-ui/core';

const BoroughTopIssueList = (props) => {
  const {issue} = props;
  const username = issue.user.email.split('@')[0];
  const status = 'IN PROGRESS'

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      style={{
        color: 'rgb(240,240,240)',
        backgroundColor: 'rgb(20,20,40)',
        boxShadow: 'inset 0 0 5px -2px rgb(255,255,255)',
        border:'1px solid black',
        borderRadius: '.15vw',
        marginBottom: '.2vw',
        paddingTop: '.6vw',
        paddingBottom: '.6vw',
        paddingLeft: '1vw',
        fontSize: '.7vw'
        }
      }>
      <Grid item xs={3}>
        {issue.title}
      </Grid>
      <Grid item xs={2}>
        {username}
      </Grid>
      <Grid item xs={2}>
        {issue.type.name}
      </Grid>
      <Grid item xs={2}>
        {moment(issue.createdAt).format('MMM Do YYYY')}
      </Grid>
      <Grid item xs={1}>
        {issue.upvotes_count}
      </Grid>
      <Grid item xs={2} style={{
      fontSize: '.5vw',
      }}>
        {status}
      </Grid>
    </Grid>
  );
};

BoroughTopIssueList.propTypes = {
  issue: PropTypes.object,
};

export default BoroughTopIssueList;