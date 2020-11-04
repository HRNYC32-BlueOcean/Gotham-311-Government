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
  var period = moment().subtract(1,'days').toDate();
  return axios({
    url: api_url,
    method: 'post',
    data: {
      query: `{
        latestIssues(period: ${period}) {
          manhattan {
            countOfOpenIssues
            countOfInProgressIssues
            countOfResolvedIssues
          }
          bronx {
            countOfOpenIssues
            countOfInProgressIssues
            countOfResolvedIssues
          }
          brooklyn {
            countOfOpenIssues
            countOfInProgressIssues
            countOfResolvedIssues
          }
          queens {
            countOfOpenIssues
            countOfInProgressIssues
            countOfResolvedIssues
          }
          staten_island {
            countOfOpenIssues
            countOfInProgressIssues
            countOfResolvedIssues
          }
        }
      }`
    }
  })
}

export var getIssueStatusCountForPeriod = () => {
  var oneDayAgo = moment().subtract(1,'days').toDate();
  var twoDaysAgo = moment().subtract(2,'days').toDate();
  var threeDaysAgo = moment().subtract(3,'days').toDate();
  var fourDaysAgo = moment().subtract(4,'days').toDate();
  var fiveDaysAgo = moment().subtract(5,'days').toDate();
  var sixDaysAgo = moment().subtract(6,'days').toDate();
  var sevenDaysAgo = moment().subtract(7,'days').toDate();

  return axios({
    url: api_url,
    method: 'post',
    data: {
      query: `{
        latestIssues(period: ${period}) {
          manhattan {
            countOfOpenIssues
            countOfInProgressIssues
            countOfResolvedIssues
          }
          bronx {
            countOfOpenIssues
            countOfInProgressIssues
            countOfResolvedIssues
          }
          brooklyn {
            countOfOpenIssues
            countOfInProgressIssues
            countOfResolvedIssues
          }
          queens {
            countOfOpenIssues
            countOfInProgressIssues
            countOfResolvedIssues
          }
          staten_island {
            countOfOpenIssues
            countOfInProgressIssues
            countOfResolvedIssues
          }
        }
      }`
    }
  })


}

export var getUserInteractionCountsForPeriod = () => {


}