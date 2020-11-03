import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveLine } from '@nivo/line';
import { linearGradientDef, select } from '@nivo/core';

function MonthlyIssueLineChart(props) {
  const data = props.data || [
    {
      id: 'OPEN',
      color: 'rgb(255, 128, 0)',
      data: [
        {
          x: 'Jan',
          y: 187,
        },
        {
          x: 'Feb',
          y: 230,
        },
        {
          x: 'Mar',
          y: 259,
        },
        {
          x: 'Apr',
          y: 15,
        },
        {
          x: 'May',
          y: 67,
        },
        {
          x: 'June',
          y: 170,
        },
        {
          x: 'July',
          y: 32,
        },
        {
          x: 'Aug',
          y: 170,
        },
        {
          x: 'Sep',
          y: 116,
        },
        {
          x: 'Oct',
          y: 1,
        },
        {
          x: 'Nov',
          y: 40,
        },
        {
          x: 'Dec',
          y: 300,
        },
      ],
    },
    {
      id: 'IN PROGRESS',
      color: 'rgb(16, 104, 227)',
      data: [
        {
          x: 'Jan',
          y: 187,
        },
        {
          x: 'Feb',
          y: 230,
        },
        {
          x: 'Mar',
          y: 259,
        },
        {
          x: 'Apr',
          y: 15,
        },
        {
          x: 'May',
          y: 67,
        },
        {
          x: 'June',
          y: 170,
        },
        {
          x: 'July',
          y: 32,
        },
        {
          x: 'Aug',
          y: 170,
        },
        {
          x: 'Sep',
          y: 116,
        },
        {
          x: 'Oct',
          y: 1,
        },
        {
          x: 'Nov',
          y: 40,
        },
        {
          x: 'Dec',
          y: 300,
        },
      ],
    },
    {
      id: 'RESOLVED',
      color: 'rgb(255,255,255)',
      data: [
        {
          x: 'Jan',
          y: 187,
        },
        {
          x: 'Feb',
          y: 230,
        },
        {
          x: 'Mar',
          y: 259,
        },
        {
          x: 'Apr',
          y: 15,
        },
        {
          x: 'May',
          y: 67,
        },
        {
          x: 'June',
          y: 170,
        },
        {
          x: 'July',
          y: 32,
        },
        {
          x: 'Aug',
          y: 170,
        },
        {
          x: 'Sep',
          y: 116,
        },
        {
          x: 'Oct',
          y: 1,
        },
        {
          x: 'Nov',
          y: 40,
        },
        {
          x: 'Dec',
          y: 300,
        },
      ],
    },
  ];

  const randomizeData = (data) => {
    data.forEach((entry) => {
      entry.data.forEach((month) => {
        month.y = Math.floor(Math.random() * Math.floor(200));
      });
    });
  };

  randomizeData(data);

  return (
    <div className="chart-widget">
      <p className="barchart-header">CITY WIDE ISSUE TRACKER</p>
      <div className="barchart-container">
        <ResponsiveLine
          data={data}
          keys={['OPEN', 'IN PROGRESS', 'RESOLVED']}
          margin={{ top: 60, right: 20, bottom: 40, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', stacked: true, reverse: false }}
          enableArea
          colors={['rgb(255, 128, 0)', 'rgb(16, 104, 227)', 'rgb(255,255,255)', 'rgb(0,0,0)']}
          defs={[
            linearGradientDef('gradientA', [
              { offset: 0, color: 'rgb(16,104,227)' },
              { offset: 100, color: 'rgb(0,0,0)', opacity: 0.5 },
            ]),
          ]}
          fill={[{ match: '*', id: 'gradientA' }]}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'TOTAL ISSUES',
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          enableGridX={false}
          pointSize={5}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={1}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh
          legends={[
            {
              anchor: 'top',
              direction: 'row',
              justify: false,
              translateX: -20,
              translateY: -50,
              itemsSpacing: 0,
              itemDirection: 'top-to-bottom',
              itemWidth: 100,
              itemHeight: 12,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

MonthlyIssueLineChart.propTypes = {};

export default MonthlyIssueLineChart;
