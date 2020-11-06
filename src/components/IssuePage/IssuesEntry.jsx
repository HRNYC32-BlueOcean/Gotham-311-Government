import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
const IssuesEntry = (props) => {
  const [open, setOpen] = useState(false);
  const [resolutionStatus, setResolutionStatus] = useState(0);
  const [progressDate, setProgressDate] = useState();
  const [resolvedDate, setResolvedDate] = useState();

  useEffect(() => {
    if (props.issue) {
      setResolutionStatus(props.issue.resolution_status.name);
      var dtInProg = new Date(Number(props.issue.date_marked_in_progress));
      var dtRes = new Date(Number(props.issue.date_marked_resolved));

      setProgressDate(dtInProg);
      setResolvedDate(dtRes);
    }
  }, [props.issue]);

  const handleClick = (e) => {
    setOpen(!open);
  };

  const handleSubmit = (e) => {
    let date_status;
    let res_status;
    let res_status_id;
    let now = new Date();
    let iso = now.toISOString();
    let dt = iso.substring(0, 10);
    if (e.target.outerText === 'Open') {
      setResolutionStatus(1);
      return;
    } else if (e.target.outerText === 'In Progress') {
      date_status = 'date_marked_in_progress';
      res_status = 'IN PROGRESS';
      res_status_id = 2;
      setProgressDate(now);
    } else {
      res_status = 'RESOLVED';
      res_status_id = 3;
      date_status = 'date_marked_resolved';
      setResolvedDate(now);
    }
    setResolutionStatus(res_status);

    console.log(dt);
    axios({
      url: 'https://nameless-mountain-18450.herokuapp.com/',
      method: 'post',
      data: {
        query: `mutation {
          updateIssue(id: ${props.issue.id}, resolution_status_id: ${res_status_id}, ${date_status}: "${dt}")
        }`,
      },
    })
      .then(() => console.log('hoory'))
      .catch((err) => console.error(err));
  };
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
        <div className="issue-data">{resolutionStatus}</div>
        {props.issue.create_date ? (
          <div className="issue-data">{Date(props.issue.create_date).substring(0, 15)}</div>
        ) : (
          <div className="issue-data" />
        )}
        {progressDate ? (
          <div className="issue-data">{String(progressDate).substring(0, 15)}</div>
        ) : (
          <div className="issue-data" />
        )}
        {resolvedDate ? (
          <div className="issue-data">{String(resolvedDate).substring(0, 15)}</div>
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
          <div className="issue-data-detail">Resolution Status: {resolutionStatus}</div>
          <div className="issue-data-detail">
            Date Issued: {Date(props.issue.create_date).substring(0, 15)}
          </div>
          <div className="issue-data-detail">
            Date In-Progress: {String(progressDate).substring(0, 15)}
          </div>
          <div className="issue-data-detail">
            Date Resolved: {String(resolvedDate).substring(0, 15)}
          </div>
          <div className="issue-data-detail">
            Address: {props.issue.coordinates.lat}, {props.issue.coordinates.lng}
          </div>
          <div className="issue-data-detail">Description: {props.issue.description}</div>
          {/* maybe add a map? */}
          <img className="issue-data-photo" src={props.issue.photo_url}></img>
          {/* might need to do confitional rendering */}
          <br></br>
          {/* <button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Open
          </button> */}
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
