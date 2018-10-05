import React, {Component} from 'react';
import './App.css';
import Main from './components/Main/Main';

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: [
        {
          id: 1,
          name: "Utzipher",
          score: 0
        },
        {
          id: 2,
          name: "Treasure",
          score: 0
        },
        {
          id: 3,
          name: "Ashley",
          score: 0
        },
        {
          id: 4,
          name: "James",
          score: 0
        }
      ]
    }
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
    this.decrementScore = this.decrementScore.bind(this);
  }

  handleRemovePlayer = (id) => {
    this.setState({
      players: this.state.players.filter( player => player.id !== id)
    })
  }

  previousPlayerId = 4

  handleAddPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name,
          score: 0,
          id: this.previousPlayerId += 1
        }
      ]
    })
  }

  incrementScore = (index) => {
    this.setState({
      score: this.state.players[index].score += 1
    })
  }


  decrementScore = (index) => {
    this.setState({
      score: this.state.players[index].score -= 1
    })
  }

  render() {
    console.log(this.state.players)
    const {players} = this.state;
    const {handleRemovePlayer, incrementScore, decrementScore, handleAddPlayer} = this;

    return (
      <div className="app-container">

        <Main
          title="Scoreboard"
          initialPlayers={players}
          removePlayer={handleRemovePlayer}
          increaseScore={incrementScore}
          decreaseScore={decrementScore}
          addPlayer={handleAddPlayer}
          />

      </div>
    )
  }
}

export default App;
