import React, { useState, useEffect } from 'react';
import IssuesList from './IssuesList';
import axios from 'axios';

const IssuesPage = (props) => {
  const [sortVal, setSortVal] = useState('id');
  const [data, setData] = useState([]);
  const [borough, setBorough] = useState(0);
  const [sort, setSort] = useState('confirm_resolved_count');
  const [order, setOrder] = useState('desc');
  const [page, setPage] = useState(0);

  const getData = (bor, sor, ord, offset) => {
    if (bor === 0) {
      return axios({
        url: 'https://nameless-mountain-18450.herokuapp.com/',
        method: 'post',
        data: {
          query: `{
            getSortedIssues(by:"${sor}", order:"${ord}", offset:${offset}){
              id
              title
              description
              upvotes_count
              reported_count
              user_id
              borough{
                name
              }
              coordinates{
                lat
                lng
              }
              photo_url
              confirm_resolved_count
              confirm_not_resolved_count
              date_marked_resolved
              create_date
              date_marked_in_progress
              resolution_status {
                name
              }
            }
          }`,
        },
      })
        .then((data) => {
          setData(data.data.data.getSortedIssues);
          if (data.data.data.getSortedIssues.length === 0) {
            return false;
          }
          return true;
        })
        .catch((err) => console.error(err));
    } else {
      return axios({
        url: 'https://nameless-mountain-18450.herokuapp.com/',
        method: 'post',
        data: {
          query: `{
            getSortedIssues(borough_id:${bor}, by:"${sor}", order:"${ord}", offset:${offset}){
              id
              title
              description
              upvotes_count
              reported_count
              user_id
              borough{
                name
              }
              coordinates{
                lat
                lng
              }
              photo_url
              confirm_resolved_count
              confirm_not_resolved_count
              date_marked_resolved
              date_marked_in_progress
              create_date
              resolution_status {
                name
              }
            }
          }`,
        },
      })
        .then((data) => {
          console.log(data.data.data);
          if (data.data.data.getSortedIssues.length === 0) {
            return false;
          }
          setData(data.data.data.getSortedIssues);
          return true;
        })
        .catch((err) => console.error(err));
    }
  };

  // const filterData = (filter) => {
  //   let arr = [];
  //   for (var i = 0; i < data.length; i++) {
  //     let tempArr = Object.values(data[i]);
  //     let strArr = tempArr.map((val) => String(val));
  //     if (strArr.includes(filter)) {
  //       arr.push(data[i]);
  //     }
  //   }
  //   setData(arr);
  // };

  const clickHandler = () => {
    setPage(0);
    getData(borough, sort, order, page);
  };

  const nextPage = () => {
    getData(borough, sort, order, (page + 1) * 20)
      .then((flag) => {
        console.log(flag);
        if (flag) setPage(page + 1);
      })
      .catch((err) => console.error(err));
  };

  const prevPage = () => {
    getData(borough, sort, order, (page - 1) * 20);
    setPage(page - 1);
  };

  useEffect(() => {
    clickHandler();
  }, []);

  return (
    <div>
      <br></br>
      <label>Borough: </label>
      <select
        onChange={(e) => {
          setBorough(e.target.value);
        }}
      >
        <option value={0}> All </option>
        <option value={1}> Manhattan </option>
        <option value={2}> Brooklyn </option>
        <option value={3}> Queens </option>
        <option value={4}> Bronx </option>
        <option value={5}> Staten Island </option>
      </select>
      <label> Sort: </label>
      <select
        onChange={(e) => {
          setSort(e.target.value);
        }}
      >
        <option value="confirm_resolved_count"> Validations </option>
        <option value="upvotes_count"> Upvotes </option>
        <option value="reported_count"> Reports </option>
      </select>
      <label> Order: </label>
      <select
        onChange={(e) => {
          setOrder(e.target.value);
        }}
      >
        <option value="desc"> Descending </option>
        <option value="asc"> Ascending </option>
      </select>
      <button onClick={(e) => clickHandler()}> Submit</button>
      {/* <Statuses /> */}
      <IssuesList
        sortVal={sortVal}
        setSortVal={setSortVal}
        issues={data}
        setData={setData}
        data={data}
      />
      <div>Page: {page + 1}</div>
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

export default IssuesPage;
