import React from 'react';
import {useState,useEffect} from 'react';
import { Data } from './dummyData.jsx';
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';

const click = () => {
  console.log('')
}

const columns = [
  { field: 'email', headerName: 'Username', width: 250 },
  { field: 'firstName', headerName: 'First name', width: 170 },
  { field: 'lastInit', headerName: 'Last Initial', width: 170 },
  { field: 'points', headerName: 'Points', type: 'number', width: 170 },
  { field: 'reported', headerName: 'Reported', type: 'number', width: 170 },
  { field: 'status', headerName: 'Status', width: 170 },
  {
    field: 'ban', //this may change
    headerName: 'Ban User',
    type: 'boolean',
    renderCell: () => (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={click}
        >
        Ban
        </Button>
      </strong>
      ),
      width: 170,
    },
];

//change email to username

export default function UserData() {

  const [value, setValue] = useState([])

  var banUser =(email) => {
    if (value.includes(email) === false) {
      let newVal = value.slice(0);
      newVal.push(email)
      setValue(newVal)
    } else {
      let newVal = value.slice(0);
      newVal.splice(newVal.indexOf(email), 1)
      setValue(newVal)
    }
  }



  const renderedList = Data.map((item, index) => {
    return {
      id: index,
      email: item.email,
      status: value.includes(item.email) ? "Inactive" : "Active",
      firstName: item.firstName,
      lastInit: item.lastInit,
      points: item.points,
    };
  });

  return (
    <div>
      <div style={{ height: '90vh', width: '100%' }}>
        <DataGrid rows={renderedList} columns={columns} pageSize={50} onSelectionChange={(selected) => {
            if (selected.rows.length) {
              banUser(selected.rows[0].email);
            }
        }}
        />
      </div>
    </div>
  );
}

