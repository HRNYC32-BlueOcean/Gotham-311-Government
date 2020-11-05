import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveLine } from '@nivo/line';
import { linearGradientDef, select } from '@nivo/core';

const MonthlyIssueLineChart = (props) => {
  const data = props.data || [
    {
      id: 'OPEN',
      color: 'rgb(255, 128, 0)',
      data: [
        {
          x: '6 days ago',
          y: 67,
        },
        {
          x: '5 days ago',
          y: 170,
        },
        {
          x: '4 days ago',
          y: 32,
        },
        {
          x: '3 days ago',
          y: 170,
        },
        {
          x: '2 days ago',
          y: 116,
        },
        {
          x: '1 day ago',
          y: 1,
        },
        {
          x: 'Last day',
          y: 300,
        }
      ],
    },
    {
      id: 'IN PROGRESS',
      color: 'rgb(16, 104, 227)',
      data: [
        {
          x: '6 days ago',
          y: 67,
        },
        {
          x: '5 days ago',
          y: 170,
        },
        {
          x: '4 days ago',
          y: 32,
        },
        {
          x: '3 days ago',
          y: 170,
        },
        {
          x: '2 days ago',
          y: 116,
        },
        {
          x: '1 day ago',
          y: 1,
        },
        {
          x: 'Last day',
          y: 300,
        }
      ],
    },
    {
      id: 'RESOLVED',
      color: 'rgb(255,255,255)',
      data: [
        {
          x: '6 days ago',
          y: 67,
        },
        {
          x: '5 days ago',
          y: 170,
        },
        {
          x: '4 days ago',
          y: 32,
        },
        {
          x: '3 days ago',
          y: 170,
        },
        {
          x: '2 days ago',
          y: 116,
        },
        {
          x: '1 day ago',
          y: 1,
        },
        {
          x: 'Last day',
          y: 300,
        }
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
          margin={{ top: 20, right: 40, bottom: 20, left: 70 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', stacked: true, reverse: false }}
          enableArea
          colors={['rgb(255, 128, 0)', 'rgb(16, 104, 227)', 'rgb(255,255,255)', 'rgb(0,0,0)']}
          defs={[
            linearGradientDef('gradientA', [
              { offset: 0, color: 'rgb(16,104,227)' },
              { offset: 100, color: 'rgb(0,0,0)', opacity: 0.7 },
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
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'TOTAL ISSUES',
            legendOffset: -45,
            legendPosition: 'middle',
          }}
          enableGridX={false}
          pointSize={5}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={1}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh
        />
      </div>
    </div>
  );
}

MonthlyIssueLineChart.propTypes = {};

export default MonthlyIssueLineChart;
