import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Players from './components/Players/Players';

class App extends Component {
  render() {
    return (
      <div>
        <Players />
      </div>
    )
  }
}

export default App;
