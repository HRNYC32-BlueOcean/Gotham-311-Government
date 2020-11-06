import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserEntry from './UserEntry';

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState('points');
  const [order, setOrder] = useState('desc');

  useEffect(() => {
    sortedBy(sort, order, 0)
  }, []);

  const api_url = 'https://nameless-mountain-18450.herokuapp.com/';


  const nextPage = () => {
    setPage(page + 1);
    sortedBy(sort, order, page * 20)
  };

  const prevPage = () => {
    setPage(page - 1);
    sortedBy(sort, order, page * 20)
  };

  const sortedBy = (sort, order, offset) => {
    axios({
      url: api_url,
      method: 'POST',
      data: {
        query: `{
          getSortedUsers(by: "${sort}", order: "${order}", offset: ${offset}) {
            id
            first_name
            last_name
            email
            points
            reported_count
            banned
          }
        }`,
      },
    }).then(({data}) => setUserList(data.data.getSortedUsers)).catch((err) => console.log(err));
  };


  const handleClick =() => {
    sortedBy(sort, order, 0)
  }

  return (
    <div>
      <div>
        <br></br>
        <label> Sort </label>
        <select onChange={(e) => {
          setSort(e.target.value)
        }}>
          <option value="points"> Points </option>
          <option value="reported_count"> Report Count </option>
          <option value="banned"> Status </option>
        </select>
        <label> Order </label>
        <select onChange={(e) => {setOrder(e.target.value)}}>
          <option value="desc"> Descending </option>
          <option value="asc"> Ascending </option>
        </select>
        <button
          onClick={() => {
            setPage(0);
            sortedBy(sort, order, 0);
          }}
        >
          Submit
        </button>
      </div>
      <div className="issues-table">
        <div className="issues-header issue-row">
          <div className="issue-data">Username</div>
          <div className="issue-data">First Name</div>
          <div className="issue-data">Last Initial</div>
          <div className="issue-data">Points</div>
          <div className="issue-data">Report Count</div>
          <div className="issue-data">Status</div>
          <div className="issue-data" >Block User</div>
        </div>
        {userList.map((user) => {
          return <UserEntry user={user} onClick={handleClick}/>;
        })}
      </div>
      <div>{page + 1}</div>
      {page > 0 ? (
        <button className="page-button" onClick={prevPage}>
          Previous Page
        </button>
      ) : null}
      <button className="page-button" onClick={nextPage}>
        Next Page
      </button>
    </div>
  );
};

export default UserList;
