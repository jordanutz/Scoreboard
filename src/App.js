import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: [
        {
          name: "Utzipher",
          id: 1
        },
        {
          name: "Treasure",
          id: 2
        },
        {
          name: "Ashley",
          id: 3
        },
        {
          name: "James",
          id: 4
        }
      ]
    }
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( player => player.id !== id)
      }
    })
  }

  render() {
    console.log(this.state.players)

    return (
      <div>

        <Header
          title="Scoreboard"
          totalPlayers={3}
          initialPlayers={this.state.players}
          removePlayer={this.handleRemovePlayer}
          />

      </div>
    )
  }
}

export default App;
