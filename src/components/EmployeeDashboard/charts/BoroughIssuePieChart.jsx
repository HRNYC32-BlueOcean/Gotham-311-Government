import React from 'react';
import PropTypes from 'prop-types';
import { ResponsivePie } from '@nivo/pie';

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

  const randomizeData = (data) => {
    chartData.forEach((entry) => {
      entry.value = Math.floor(Math.random() * Math.floor(200));
    });
  };

  randomizeData(chartData);

  return (
    <div className="chart-widget">
      <div className="piechart-header">ISSUE STATUS: LAST 24 HOURS</div>
      <div className="piechart-container">
        <ResponsivePie
          data={chartData}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          startAngle={-90}
          endAngle={90}
          innerRadius={0.5}
          padAngle={0.75}
          colors={['rgba(255, 128, 0, .9)', 'rgba(16, 104, 227,.9)', 'rgba(255,255,255,.9)']}
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
