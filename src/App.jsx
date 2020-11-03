import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmployeeDashboard from './components/EmployeeDashboard/EmployeeDashboard';
import IssuesPage from './components/IssuePage/IssuesPage';
import UserData from './components/UserData/UserData';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';


const App = (props) => (
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ marginRight: '3vw' }}>
              NYAAN - Employee Portal
            </Typography>
            <Link to="/" style={{ textDecoration: 'none', marginRight: '1.5vw' }}>
              <Button style={{ color: 'white'}}>Dashboard</Button>
            </Link>
            <Link to="/users" style={{ textDecoration: 'none', marginRight: '1.5vw'  }}>
              <Button style={{ color: 'white'}}>Users</Button>
            </Link>
            <Link to="/issues" style={{ textDecoration: 'none', marginRight: '1.5vw'  }}>
              <Button style={{ color: 'white'}}>Issues</Button>
            </Link>
          </Toolbar>
        </AppBar>
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