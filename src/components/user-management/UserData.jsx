import React from 'react';
import {Data} from './dummyData.jsx';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'email', headerName: 'Email', width: 250},
  { field: 'status', headerName: 'Status', width: 120 },
  { field: 'firstName', headerName: 'First name', width: 170 },
  { field: 'lastInit', headerName: 'Last Initial', width: 170 },
  { field: 'points', headerName: 'Points', type: 'number', width: 110 },
  { field: 'reported', headerName: 'Reported', type: 'number', width: 110 }
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const renderedList = Data.map((item, index) => {
  return {id:index, email:item.email, status:item.status, firstName:item.firstName, lastInit:item.lastInit, points:item.points}
})


export default function UserData() {
  return (
    <div>
      <button style={{fontSize: '16px'}}> Home </button>
      <button style={{ fontSize: '16px'}}> Issues </button>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={renderedList} columns={columns} pageSize={5} />
      </div>
    </div>
  );
}