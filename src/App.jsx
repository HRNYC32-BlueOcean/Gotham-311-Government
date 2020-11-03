import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmployeeDashboard from './components/EmployeeDashboard/EmployeeDashboard';
import IssuesPage from './components/IssuePage/IssuesPage';
import UserData from './components/UserData/UserData';

const App = (props) => (
      <Router>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/users">Users</Link>
          <Link to="/issues">Issues</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <EmployeeDashboard/>
          </Route>
          <Route path="/users">
            <UserData/>
          </Route>
          <Route path="/issues">
            <IssuesPage/>
          </Route>
        </Switch>
      </Router>
);


export default App;