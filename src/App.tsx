import * as React from 'react';
import './App.css';
import Tasks from './containers/Tasks';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to TaskChef</h1>
        </header>
        <Tasks />
      </div>
    );
  }
}

export default App;
