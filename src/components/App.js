import React, { Component } from 'react';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1>
            React API Handling
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
