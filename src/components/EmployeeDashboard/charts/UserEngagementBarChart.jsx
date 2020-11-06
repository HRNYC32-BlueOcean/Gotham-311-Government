import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveBar } from '@nivo/bar';
import {Grid} from '@material-ui/core';

const UserEngagementBarChart = (props) => {
  const data = [
    {
      period: '5 days ago',
      POSTS: 123,
      REPORTS: 96,
      UPVOTES: 68,
      // RESOLVES: 68,
    },
    {
      period: '4 days ago',
      POSTS: 66,
      REPORTS: 23,
      UPVOTES: 132,
      // RESOLVES: 68,
    },
    {
      period: '3 days ago',
      POSTS: 123,
      REPORTS: 22,
      UPVOTES: 99,
      // RESOLVES: 68,
    },
    {
      period: '2 days ago',
      POSTS: 81,
      REPORTS: 78,
      UPVOTES: 55,
      // RESOLVES: 68,
    },
    {
      period: '1 day ago',
      POSTS: 33,
      REPORTS: 45,
      UPVOTES: 121,
      // RESOLVES: 68,
    },
    {
      period: 'Last 24 hrs',
      POSTS: 122,
      REPORTS: 175,
      UPVOTES: 143,
      // RESOLVES: 68,
    }
  ];

  const randomizeData = (data) => {
    data.forEach((entry) => {
      entry.POSTS = Math.floor(Math.random() * Math.floor(100));
      entry.REPORTS = Math.floor(Math.random() * Math.floor(100));
      entry.UPVOTES = Math.floor(Math.random() * Math.floor(100));
      // entry.RESOLVES = Math.floor(Math.random() * Math.floor(100));
    });
  };

  randomizeData(data);

  return (
    <div className="chart-widget">
      <p className="barchart-header">USER ENGAGEMENT</p>
      <Grid container justify={'center'} alignItems={'center'} className="legend-container">
        <Grid item><div className="legend-square-orange"></div></Grid>
        <Grid item className="legend-text" style={{
            marginRight: '2vw',
            marginLeft: '.75vw'
        }}>POSTS</Grid>
        <Grid item><div className="legend-square-blue"></div></Grid>
        <Grid item className="legend-text" style={{
            marginRight: '2vw',
            marginLeft: '.75vw'
        }}>REPORTS</Grid>
        <Grid item><div className="legend-square-white"></div></Grid>
        <Grid item className="legend-text" style={{
            marginRight: '2vw',
            marginLeft: '.75vw'
        }}>UPVOTES</Grid>
        {/*<Grid item><div className="legend-square-black"></div></Grid>
         <Grid item className="legend-text" style={{
            marginRight: '2vw',
            marginLeft: '.75vw'
        }}>RESOLVES</Grid> */}
      </Grid>
      <div className="barchart-container">
        <ResponsiveBar
          data={data}
          keys={['POSTS', 'REPORTS', 'UPVOTES'/*, 'RESOLVES'*/]}
          indexBy="period"
          margin={{ top: 20, right: 20, bottom: 20, left: 60 }}
          padding={0.35}
          groupMode="grouped"
          colors={[
            'rgba(255, 128, 0, .8)',
            'rgba(16, 104, 227,.8)',
            'rgba(255,255,255,.8)',
            // 'rbga(0,0,0,.8)',
          ]}
          borderWidth={0.7}
          borderColor="black"
          axisTop={null}
          axisRight={null}
          theme={{
            axis: {
              fontSize: "14px",
              tickColor: "#ffffff",
              ticks: {
                line: {
                  stroke: "#ffffff"
                },
                text: {
                  fill: "#ffffff"
                }
              },
              legend: {
                text: {
                  fill: "#ffffff"
                }
              }
            },
            grid: {
              line: {
                stroke: "#ffffff"
              }
            }
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'INTERACTIONS',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          enableLabel={false}
          labelSkipHeight={12}
          labelTextColor="rbg(255,255,255)"
          animate
          motionStiffness={95}
          motionDamping={15}
        />
      </div>
    </div>
  );
}

UserEngagementBarChart.propTypes = {};

export default UserEngagementBarChart;
