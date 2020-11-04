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
        getBoroughIssues(period: ${period}) {
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
        getIssueCounts(
          one: ${oneDayAgo},
          two: ${twoDaysAgo},
          three: ${threeDaysAgo},
          four: ${fourDaysAgo},
          five: ${fiveDaysAgo},
          six: ${sixDaysAgo},
          seven: ${sevenDaysAgo}
          ) {
          oneDayAgo {
            countOfOpenIssues
            countOfInProgressIssues
            countOfResolvedIssues
          }
          twoDaysAgo {
            countOfOpenIssues
            countOfInProgressIssues
            countOfResolvedIssues
          }
          threeDaysAgo {
            countOfOpenIssues
            countOfInProgressIssues
            countOfResolvedIssues
          }
          fourDaysAgo {
            countOfOpenIssues
            countOfInProgressIssues
            countOfResolvedIssues
          }
          fiveDaysAgo {
            countOfOpenIssues
            countOfInProgressIssues
            countOfResolvedIssues
          }
          sixDaysAgo {
            countOfOpenIssues
            countOfInProgressIssues
            countOfResolvedIssues
          }
          sevenDaysAgo {
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
        getInteractionCounts(
          one: ${oneDayAgo},
          two: ${twoDaysAgo},
          three: ${threeDaysAgo},
          four: ${fourDaysAgo},
          five: ${fiveDaysAgo},
          six: ${sixDaysAgo},
          seven: ${sevenDaysAgo}
          ) {
          oneDayAgo {
            countOfIssuePosts
            countOfIssueReports
            countOfIssueUpvotes
            countOfIssueResolveVotes
          }
          twoDaysAgo {
            countOfIssuePosts
            countOfIssueReports
            countOfIssueUpvotes
            countOfIssueResolveVotes
          }
          threeDaysAgo {
            countOfIssuePosts
            countOfIssueReports
            countOfIssueUpvotes
            countOfIssueResolveVotes
          }
          fourDaysAgo {
            countOfIssuePosts
            countOfIssueReports
            countOfIssueUpvotes
            countOfIssueResolveVotes
          }
          fiveDaysAgo {
            countOfIssuePosts
            countOfIssueReports
            countOfIssueUpvotes
            countOfIssueResolveVotes
          }
          sixDaysAgo {
            countOfIssuePosts
            countOfIssueReports
            countOfIssueUpvotes
            countOfIssueResolveVotes
          }
          sevenDaysAgo {
            countOfIssuePosts
            countOfIssueReports
            countOfIssueUpvotes
            countOfIssueResolveVotes
          }
        }
      }`
    }
  })
}