import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron" style={{backgroundColor: "rgb(100, 100, 150)", color: "white"}}>
          <h1>
            React API Handling.
          </h1>
          <p>
            A quick rundown on API handling in React.
          </p>
        </div>
        <List />
      </div>
    );
  }
}

export default App;
