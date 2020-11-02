import React from 'react';
import Button from '@material-ui/core/Button';
import IssuesPage from './components/IssuesPage.jsx';
import UserData from './components/UserData/UserData.jsx'
class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <IssuesPage />
        <UserData/>
      </div>
    );
  }
}

export default App;
