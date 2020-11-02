import React from "react";
import Button from '@material-ui/core/Button';
import EmployeeDashboard from './components/EmployeeDashboard/EmployeeDashboard.js';

class App extends React.Component {

  render() {
    const { name } = this.props;
    return (
      <>
        <EmployeeDashboard/>
      </>
    );
  }
}

export default App;