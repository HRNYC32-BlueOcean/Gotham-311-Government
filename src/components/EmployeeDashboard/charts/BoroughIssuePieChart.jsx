import React from 'react';
import PropTypes from 'prop-types';
import { ResponsivePie } from '@nivo/pie';

function BoroughIssuePieChart(props) {
  const data = props.data || [
    {
      id: 'Open',
      label: 'Open',
      value: 306,
    },
    {
      id: 'In Progress',
      label: 'In Progress',
      value: 100,
    },
    {
      id: 'Resolved',
      label: 'Resolved',
      value: 40,
    },
  ];

  const randomizeData = (data) => {
    data.forEach((entry) => {
      entry.value = Math.floor(Math.random() * Math.floor(200));
    });
  };

  randomizeData(data);

  return (
    <div className="chart-widget">
      <div className="piechart-container">
        <ResponsivePie
          data={data}
          margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
          startAngle={-90}
          endAngle={90}
          innerRadius={0.5}
          padAngle={0.75}
          colors={['rgba(255, 128, 0, .7)', 'rgba(16, 104, 227,.7)', 'rgba(255,255,255,.7)']}
          borderWidth={1}
          borderColor="black"
          enableRadialLabels={false}
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="rgb(0,0,0)"
          animate
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              anchor: 'bottom',
              direction: 'column',
              itemDirection: 'left-to-right',
              translateY: -8,
              translateX: -15,
              itemWidth: 40,
              itemHeight: 18,
              itemTextColor: 'rgb(0,0,0)',
              symbolSize: 12,
              symbolShape: 'circle',
            },
          ]}
          theme={{
            fontFamily: 'sans-serif',
            fontSize: '.8vw',
          }}
        />
      </div>
    </div>
  );
}

BoroughIssuePieChart.propTypes = {};

export default BoroughIssuePieChart;
