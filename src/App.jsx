import React from 'react';
import Button from '@material-ui/core/Button';
import EmployeeDashboard from './components/EmployeeDashboard/EmployeeDashboard';
import IssuesPage from './components/IssuesPage';
import UserData from './components/UserData/UserData';

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
