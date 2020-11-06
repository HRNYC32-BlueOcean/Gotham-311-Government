import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';


const UserEntry = ({user, onClick}) => {

  const api_url = 'https://nameless-mountain-18450.herokuapp.com/';

  const handleBan = () => {
    //console.log(user.id)
    axios({
      url: api_url,
      method: "POST",
      data: {
        query: `mutation {
          updateUser(id: ${user.id}, banned:${!user.banned} )
        }`
      }
    })
    .then(() => {
      onClick();
    })
  };

  const handleUnban =() => {
    //make axios request
    //console.log(!user.banned)
    axios({
      url: api_url,
      method: "POST",
      data: {
        query: `mutation {
          updateUser(id: ${user.id}, banned:${!user.banned} )
        }`
      }
    })
    .then(() => {
      onClick();
    })
  }


  return (
    <div className="issue-row" key={user.id}>
      <div className="issue-data">{user.email}</div>
      <div className="issue-data">{user.first_name}</div>
      <div className="issue-data">{user.last_name.substring(0,1)}</div>
      <div className="issue-data">{user.points}</div>
      <div className="issue-data">{user.reported_count}</div>
      <div className="issue-data">{user.banned ? "Banned" : null }</div>
      <div className="issue-data">
        {user.banned === false ? (
          <button style={{width:'56px'}} onClick={handleBan}> Ban </button>) : (<button style={{width:'56px'}} onClick={handleUnban}> Unban </button>
        )}
      </div>
    </div>
  )
}


export default UserEntry;