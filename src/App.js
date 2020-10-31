import React from 'react';
import Button from '@material-ui/core/Button';
import IssuesPage from './components/IssuesPage.jsx';
class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Hello {name}</h1>
        <IssuesPage />
        <Button variant='contained'>this is a material UI button</Button>
      </>
    );
  }
}

export default App;
