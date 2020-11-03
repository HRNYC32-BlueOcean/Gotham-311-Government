import React from 'react';
import { Data } from './dummyData.jsx';
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';



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
    valueGetter: function(params){
      this._data = params
      console.log(params.getValue('ban'))
      return params
    },
    renderCell: function(values = valueGetter){
      const returnId  = () => {
        //console.log(this._data.data.id)
        console.log(this._data.getValue('id'))
        return this._data.getValue('ban')
      }
      if (this._data.data.hasOwnProperty('ban') && this._data.data.ban === true ) {
        return (<strong>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={returnId}
            >
            Ban
            </Button>
          </strong>)

      }
    },
    width: 170
  },
];

//change email to username

export default function UserData() {

  const renderedList = Data.map((item, index) => {
    return {
      id: item.firstName,
      email: item.email,
      status: item.status,
      firstName: item.firstName,
      lastInit: item.lastInit,
      points: item.points,
      ban: item.status === 'Active' ? true: false,
    };
  });


  return (
    <div>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={renderedList} columns={columns} pageSize={50} />
      </div>
    </div>
  );
}
