import React from 'react';
import PropTypes from 'prop-types';
import { ResponsivePie } from '@nivo/pie';
import {Grid} from '@material-ui/core';

const BoroughIssuePieChart = (props) => {
  const { data } = props;
  const chartData = [
    {
      id: 'Open',
      label: 'Open',
      value: data.open,
    },
    {
      id: 'In Progress',
      label: 'In Progress',
      value: data.in_progress,
    },
    {
      id: 'Resolved',
      label: 'Resolved',
      value: data.resolved,
    },
  ];

  return (
    <div className="chart-widget">
      <div className="piechart-header">ISSUE STATUS: LAST 24 HOURS</div>
      <Grid container justify={'center'} alignItems={'center'} className="legend-container">
        <Grid item><div className="legend-square-orange"></div></Grid>
        <Grid item className="legend-text" style={{
            marginRight: '2vw',
            marginLeft: '.75vw'
        }}>OPEN</Grid>
        <Grid item><div className="legend-square-blue" ></div></Grid>
        <Grid item className="legend-text" style={{
            marginRight: '2vw',
            marginLeft: '.75vw'
        }}>IN PROGRESS</Grid>
        <Grid item><div className="legend-square-white" ></div></Grid>
        <Grid item className="legend-text" style={{
            marginRight: '2vw',
            marginLeft: '.75vw'
        }}>RESOLVED</Grid>
      </Grid>
      <div className="piechart-container">
        <ResponsivePie
          data={chartData}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          startAngle={-90}
          endAngle={90}
          innerRadius={0.5}
          padAngle={0.75}
          colors={['rgba(255, 128, 0, .8)', 'rgba(16, 104, 227,.8)', 'rgba(255,255,255,.8)']}
          borderWidth={1}
          borderColor="black"
          enableRadialLabels={false}
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="rgb(0,0,0)"
          animate
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    </div>
  );
}

BoroughIssuePieChart.propTypes = {};

export default BoroughIssuePieChart;