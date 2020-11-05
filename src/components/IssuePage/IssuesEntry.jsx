import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
const IssuesEntry = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(!open);
  };

  const handleSubmit = (e) => {
    let date_status;
    let res_status;
    if (e.target.outerText === 'In Progress') {
      date_status = 'date_marked_in_progress';
      res_status = 2;
    } else {
      res_status = 3;
      date_status = 'date_marked_resolved';
    }
    let dt = new Date();
    dt = dt.toISOString().substring(0, 10);
    console.log(dt);
    axios({
      url: 'https://nameless-mountain-18450.herokuapp.com/',
      method: 'post',
      data: {
        query: `mutation {
          updateIssue(id: ${props.issue.id}, resolution_status_id: ${res_status}, ${date_status}: "${dt}")
        }`,
      },
    })
      // mutation {
      //   updateIssue(id: 1, resolution_status_id: 2, date_marked_in_progress: "1604538416870")
      // }

      .then(() => console.log('hoory'))
      .catch((err) => console.error(err));
  };
  //make name equal to props.issue.id
  return props.issue ? (
    <div>
      <div className="issue-row" onClick={handleClick}>
        <div className="issue-data">{props.issue.id}</div>
        <div className="issue-data">{props.issue.title}</div>
        <div className="issue-data">{props.issue.upvotes_count}</div>
        <div className="issue-data">{props.issue.confirm_resolved_count}</div>
        <div className="issue-data">{props.issue.reported_count}</div>
        <div className="issue-data">{props.issue.borough.name}</div>
        <div className="issue-data">{props.issue.user_id}</div>
        <div className="issue-data">{props.issue.resolution_status_id}</div>
        {props.issue.create_date ? (
          <div className="issue-data">{Date(props.issue.create_date).substring(0, 15)}</div>
        ) : (
          <div className="issue-data" />
        )}
        {props.issue.date_marked_in_progress ? (
          <div className="issue-data">
            {Date(props.issue.date_marked_in_progress).substring(0, 15)}
          </div>
        ) : (
          <div className="issue-data" />
        )}
        {props.issue.date_marked_resolved ? (
          <div className="issue-data">
            {Date(props.issue.date_marked_resolved).substring(0, 15)}
          </div>
        ) : (
          <div className="issue-data" />
        )}
      </div>
      {open ? (
        <div>
          <div className="issue-data-detail">Title: {props.issue.title}</div>
          <div className="issue-data-detail">ID: {props.issue.id}</div>
          <div className="issue-data-detail">Upvotes: {props.issue.upvotes_count}</div>
          <div className="issue-data-detail">Reports: {props.issue.reported_count}</div>
          <div className="issue-data-detail">Validations: {props.issue.confirm_resolved_count}</div>
          <div className="issue-data-detail">Borough: {props.issue.borough.name}</div>
          <div className="issue-data-detail">User ID: {props.issue.user_id}</div>
          {/* <div className="issue-data-detail">Username: {props.issue.username}</div> */}
          {/* <div className="issue-data-detail">User Reported: {props.issue.username}</div> */}
          <div className="issue-data-detail">
            Resolution Status: {props.issue.resolution_status_id}
          </div>
          <div className="issue-data-detail">Date Issued: {props.issue.create_date}</div>
          <div className="issue-data-detail">
            Date In-Progress: {props.issue.date_marked_in_progress}
          </div>
          <div className="issue-data-detail">Date Resolved: {props.issue.date_marked_resolved}</div>
          {/* <div className="issue-data-detail">Address: {props.issue.date_marked_resolved}</div> */}
          <div className="issue-data-detail">Description: {props.issue.description}</div>
          {/* maybe add a map? */}
          <img className="issue-data-photo" src={props.issue.photo_url}></img>
          {/* might need to do confitional rendering */}
          <br></br>
          <button
          // onClick={(e) => {
          //   handleSubmit(e);
          // }}
          >
            Open
          </button>
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            In Progress
          </button>
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Resolved
          </button>
        </div>
      ) : null}
    </div>
  ) : null;
};

export default IssuesEntry;
