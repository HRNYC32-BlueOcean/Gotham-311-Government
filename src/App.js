import React from "react";
import Button from '@material-ui/core/Button';
import UserData from './components/user-management/UserData.jsx';


class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
        <h1>
          <UserData/>
        </h1>
    );
  }
}

export default App;
