import axios from 'axios';
import moment from 'moment';

const api_url = 'https://nameless-mountain-18450.herokuapp.com/';

export var getTopIssues = () => {
  return axios({
    url: api_url,
    method: 'post',
    data: {
      query: `{
        topIssues(count:5) {
          manhattan {
            title
            type {
              name
            }
            user {
              email
            }
            createdAt
            upvotes_count
            resolution_status {
              status
            }
          }
          bronx {
            title
            type {
              name
            }
            user {
              email
            }
            createdAt
            upvotes_count
            resolution_status {
              status
            }
          }
          brooklyn {
            title
            type {
              name
            }
            user {
              email
            }
            createdAt
            upvotes_count
            resolution_status {
              status
            }
          }
          queens {
            title
            type {
              name
            }
            user {
              email
            }
            createdAt
            upvotes_count
            resolution_status {
              status
            }
          }
          staten_island {
            title
            type {
              name
            }
            user {
              email
            }
            createdAt
            upvotes_count
            resolution_status {
              status
            }
          }
        }
      }`
    }
  })
}

export var getIssueStatusCountByBoroughForLast24hours = () => {


}

export var getUserInteractionCountsForPeriod = () => {


}

export var getIssueStatusCountForPeriod = () => {


}