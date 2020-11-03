const topIssues = [
  {
    title: 'Manhole cover missing',
    description:
      'There is a manhole cover missing and this is the description of that event and I could really just go on and on and on about this thing',
    username: 'BobFromNY',
    resolution_status: 'IN PROGRESS',
    issue_type: 'Traffic',
    priority: Math.floor(Math.random() * Math.floor(500)),
    date_issued: new Date() - Math.floor(Math.random() * Math.floor(100000)),
    borough: 'Manhattan',
  },
  {
    title: 'Manhole cover missing',
    description:
      'There is a manhole cover missing and this is the description of that event and I could really just go on and on and on about this thing',
    username: 'BobFromNY',
    resolution_status: 'IN PROGRESS',
    issue_type: 'Traffic',
    priority: Math.floor(Math.random() * Math.floor(500)),
    date_issued: new Date() - Math.floor(Math.random() * Math.floor(100000)),
    borough: 'Manhattan',
  },
  {
    title: 'Manhole cover missing',
    description:
      'There is a manhole cover missing and this is the description of that event and I could really just go on and on and on about this thing',
    username: 'BobFromNY',
    resolution_status: 'IN PROGRESS',
    issue_type: 'Traffic',
    priority: Math.floor(Math.random() * Math.floor(500)),
    date_issued: new Date() - Math.floor(Math.random() * Math.floor(100000)),
    borough: 'Manhattan',
  },
  {
    title: 'Manhole cover missing',
    description:
      'There is a manhole cover missing and this is the description of that event and I could really just go on and on and on about this thing',
    username: 'BobFromNY',
    resolution_status: 'IN PROGRESS',
    issue_type: 'Traffic',
    priority: Math.floor(Math.random() * Math.floor(500)),
    date_issued: new Date() - Math.floor(Math.random() * Math.floor(100000)),
    borough: 'Manhattan',
  },
  {
    title: 'Manhole cover missing',
    description:
      'There is a manhole cover missing and this is the description of that event and I could really just go on and on and on about this thing',
    username: 'BobFromNY',
    resolution_status: 'IN PROGRESS',
    issue_type: 'Traffic',
    priority: Math.floor(Math.random() * Math.floor(500)),
    date_issued: new Date() - Math.floor(Math.random() * Math.floor(100000)),
    borough: 'Manhattan',
  },
];

export default topIssues;

/* REQUEST #1
top issues by borough
5 issues per borough
the issues with the highest validation count where status is "IN PROGRESS" or "OPEN"
EXAMPLE top issues for Manhattan:
*/
const issues = [
  {
    title: 'Example Title',
    description: 'Example Description',
    username: 'ExampleUser',
    resolution_status: 'IN PROGRESS',
    issue_type: 'ExampleType',
    priority: 423,
    date_issued: 'ExampleDate',
    borough: 'Manhattan',
  },
  // plus 4 more entries for manhattan
];

/*
it would be great to just get it like this:

var top5Issues =
  {
    "manhattan": [array of 5 issues],
    "queens": [array of 5 issues],
    "brooklyn": [array of 5 issues],
    "bronx": [array of 5 issues],
    "staten island": [array of 5 issues],
  }
*/

/** ******************************************* */

/* REQUEST #2
issues count by borough
the count of tickets by status for each borough
EXAMPLE issue count for Manhattan:
*/
var issueCount = {
  manhattan: {
    open_issues: 254, // issues with status "OPEN" and in Manhattan for all time
    in_progress_issues: 142, // issues with status "IN PROGRESS" and in Manhattan for all time
    resolved_issues: 245, // issues with status "RESOLVED" and in Manhattan for all time
  },
  brooklyn: {
    open_issues: 254,
    in_progress_issues: 142,
    resolved_issues: 245,
  },
  queens: {
    open_issues: 254,
    in_progress_issues: 142,
    resolved_issues: 245,
  },
  bronx: {
    open_issues: 254,
    in_progress_issues: 142,
    resolved_issues: 245,
  },
  'staten island': {
    open_issues: 254,
    in_progress_issues: 142,
    resolved_issues: 245,
  },
};

/** ******************************************* */

/* REQUEST #3
Issue count by month - all boroughs together
the count of tickets by status for each borough
EXAMPLE RESPONSE DATA:
*/
var issueCount = {
  Jan: {
    open_issues: 254, // issues with status "OPEN" in January
    in_progress_issues: 142, // issues with status "IN PROGRESS" in January
    resolved_issues: 245, // issues with status "RESOLVED" in January
  },
  Feb: {
    open_issues: 254,
    in_progress_issues: 142,
    resolved_issues: 245,
  },
  Mar: {
    open_issues: 254,
    in_progress_issues: 142,
    resolved_issues: 245,
  },
  Apr: {
    open_issues: 254,
    in_progress_issues: 142,
    resolved_issues: 245,
  },
  Jun: {
    open_issues: 254,
    in_progress_issues: 142,
    resolved_issues: 245,
  },
  Jul: {
    open_issues: 254,
    in_progress_issues: 142,
    resolved_issues: 245,
  },
  Aug: {
    open_issues: 254,
    in_progress_issues: 142,
    resolved_issues: 245,
  },
  Sep: {
    open_issues: 254,
    in_progress_issues: 142,
    resolved_issues: 245,
  },
  Oct: {
    open_issues: 254,
    in_progress_issues: 142,
    resolved_issues: 245,
  },
  Nov: {
    open_issues: 254,
    in_progress_issues: 142,
    resolved_issues: 245,
  },
  Dec: {
    open_issues: 254,
    in_progress_issues: 142,
    resolved_issues: 245,
  },
};

/** ******************************************* */

/* REQUEST #4
User interactions by month
the count of types of user interactions by month
*****NOTE******
for this one we may want to consider making another table that just tracks a counter every time a user makes an action,  seems like it may be more effcient than actually making a compicated query to count entries but let me know
***************
EXAMPLE RESPONSE DATA:
*/
const userActions = {
  Jan: {
    issue_posts: 254, // number of times users posted issues in January
    issue_reports: 142, // number of times users reported issues in January
    issue_validations: 245, // number of times users validated issues in January
    issue_resloves: 34, // number of times users resolved issues in January
  },
  Feb: {
    issue_posts: 254,
    issue_reports: 142,
    issue_validations: 245,
    issue_resloves: 34,
  },
  Mar: {
    issue_posts: 254,
    issue_reports: 142,
    issue_validations: 245,
    issue_resloves: 34,
  },
  Apr: {
    open_issues: 254,
    in_progress_issues: 142,
    resolved_issues: 245,
  },
  Jun: {
    issue_posts: 254,
    issue_reports: 142,
    issue_validations: 245,
    issue_resloves: 34,
  },
  Jul: {
    issue_posts: 254,
    issue_reports: 142,
    issue_validations: 245,
    issue_resloves: 34,
  },
  Aug: {
    issue_posts: 254,
    issue_reports: 142,
    issue_validations: 245,
    issue_resloves: 34,
  },
  Sep: {
    issue_posts: 254,
    issue_reports: 142,
    issue_validations: 245,
    issue_resloves: 34,
  },
  Oct: {
    issue_posts: 254,
    issue_reports: 142,
    issue_validations: 245,
    issue_resloves: 34,
  },
  Nov: {
    issue_posts: 254,
    issue_reports: 142,
    issue_validations: 245,
    issue_resloves: 34,
  },
  Dec: {
    issue_posts: 254,
    issue_reports: 142,
    issue_validations: 245,
    issue_resloves: 34,
  },
};
