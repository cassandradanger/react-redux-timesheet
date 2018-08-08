import React, { Component } from 'react';
import './App.css';
import Hello from './hello/Hello.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello friend="Casie" />
      </div>
    );
  }
}

export default App;
