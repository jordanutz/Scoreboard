import React, {Component} from 'react';
import './App.css';
import Main from './components/Main/Main';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: [
        {
          id: 1,
          name: "Jordan",
          score: 0
        },
      ],
      hover: false
    }
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
    this.decrementScore = this.decrementScore.bind(this);
  }

  updateHover = () => {
    this.setState({
      hover: !this.state.hover
    })
  }

  handleRemovePlayer = (id) => {
    this.setState({
      players: this.state.players.filter( player => player.id !== id)
    })
  }

  previousPlayerId = 1

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
