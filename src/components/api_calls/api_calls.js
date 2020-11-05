import axios from 'axios';
import moment from 'moment';

const api_url = 'https://nameless-mountain-18450.herokuapp.com/';

export var getTopIssues = () => {
  return axios({
    url: api_url,
    method: 'post',
    data: {
      query: `{
        topIssues(count: 5) {
          manhattan {
            title
            type {
              name
            }
            user {
              email
            }
            create_date
            upvotes_count
            resolution_status {
              name
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
            create_date
            resolution_status {
              name
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
            create_date
            upvotes_count
            resolution_status {
              name
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
            create_date
            upvotes_count
            resolution_status {
              name
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
            create_date
            upvotes_count
            resolution_status {
              name
            }
          }
        }
      }`
    }
  })
}

export var getIssueStatusCountByBoroughForLast24hours = () => {
  var period = moment().subtract(1,'days').toDate();
  console.log(period)
  return axios({
    url: api_url,
    method: 'post',
    data: {
      query: `{
        issuesByBorough(period: "${period}") {
          manhattan {
            open
            in_progress
            resolved
          }
          bronx {
            open
            in_progress
            resolved
          }
          brooklyn {
            open
            in_progress
            resolved
          }
          queens {
            open
            in_progress
            resolved
          }
          staten_island {
            open
            in_progress
            resolved
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