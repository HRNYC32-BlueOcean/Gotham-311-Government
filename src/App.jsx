import React from 'react';
import Button from '@material-ui/core/Button';
import EmployeeDashboard from './components/EmployeeDashboard/EmployeeDashboard.jsx';
import IssuesPage from './components/IssuesPage.jsx';
import UserData from './components/UserData/UserData.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <IssuesPage />
        <UserData />
        <EmployeeDashboard />
      </div>
    );
  }
}

export default App;
