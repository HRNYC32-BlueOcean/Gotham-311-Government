import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveBar } from '@nivo/bar';

function UserEngagementBarChart(props) {

  var data = props.data || [
    {
      "month": "Jan",
      "POSTS": 123,
      "REPORTS": 96,
      "VALIDATIONS": 68,
      "RESOLVES": 68
    },
    {
      "month": "Feb",
      "POSTS": 66,
      "REPORTS": 23,
      "VALIDATIONS": 132,
      "RESOLVES": 68
    },
    {
      "month": "Mar",
      "POSTS": 123,
      "REPORTS": 22,
      "VALIDATIONS": 99,
      "RESOLVES": 68
    },
    {
      "month": "Apr",
      "POSTS": 81,
      "REPORTS": 78,
      "VALIDATIONS": 55,
      "RESOLVES": 68
    },
    {
      "month": "May",
      "POSTS": 33,
      "REPORTS": 45,
      "VALIDATIONS": 121,
      "RESOLVES": 68
    },
    {
      "month": "June",
      "POSTS": 122,
      "REPORTS": 175,
      "VALIDATIONS": 143,
      "RESOLVES": 68
    },
    {
      "month": "July",
      "POSTS": 123,
      "REPORTS": 33,
      "VALIDATIONS": 78,
      "RESOLVES": 68
    },
    {
      "month": "Aug",
      "POSTS": 55,
      "REPORTS": 34,
      "VALIDATIONS": 11,
      "RESOLVES": 68
    },
    {
      "month": "Sep",
      "POSTS": 123,
      "REPORTS": 75,
      "VALIDATIONS": 155,
      "RESOLVES": 68
    },
    {
      "month": "Oct",
      "POSTS": 22,
      "REPORTS": 33,
      "VALIDATIONS": 77,
      "RESOLVES": 68
    },
    {
      "month": "Nov",
      "POSTS": 146,
      "REPORTS": 22,
      "VALIDATIONS": 11,
      "RESOLVES": 68
    },
    {
      "month": "Dec",
      "POSTS": 111,
      "REPORTS": 20,
      "VALIDATIONS": 155,
      "RESOLVES": 68
    }
  ]

  var randomizeData = (data) =>{
    data.forEach((entry) => {
      entry['POSTS'] = Math.floor(Math.random() * Math.floor(100));
      entry['REPORTS'] = Math.floor(Math.random() * Math.floor(100));
      entry['VALIDATIONS'] = Math.floor(Math.random() * Math.floor(100));
      entry['RESOLVES'] = Math.floor(Math.random() * Math.floor(100));
    })
  }

  randomizeData(data);



  return (
    <div className="chart-widget">
      <p className="barchart-header">USER ENGAGEMENT</p>
      <div className="barchart-container">
        <ResponsiveBar
          data={data}
          keys={[ 'POSTS','REPORTS', 'VALIDATIONS', 'RESOLVES']}
          indexBy="month"
          margin={{ top:60, right: 20, bottom: 40, left:60 }}
          padding={.35}
          groupMode="grouped"
          colors={["rgba(255, 128, 0, .5)", "rgba(16, 104, 227,.5)", "rgba(255,255,255,.5)", "rbga(0,0,0,.3)"]}
          borderWidth={.7}
          borderColor="black"
          axisTop={null}
          axisRight={null}
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
              legendOffset: -40
          }}
          enableLabel={false}
          labelSkipHeight={12}
          labelTextColor={"rbg(0,0,0)"}
          legends={[
              {
                  dataFrom: 'keys',
                  anchor: 'top',
                  direction: 'row',
                  justify: false,
                  translateX: -20,
                  translateY: -50,
                  itemsSpacing: 10,
                  itemWidth: 70,
                  itemHeight: 15,
                  itemDirection: 'top-to-bottom',
                  itemOpacity: 1,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
          animate={true}
          motionStiffness={95}
          motionDamping={15}
      />
      </div>
    </div>
  )
}

UserEngagementBarChart.propTypes = {
}

export default UserEngagementBarChart;