import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>

        <Header
          title="Scoreboard"
          totalPlayers={3}
          />

      </div>
    )
  }
}

export default App;
