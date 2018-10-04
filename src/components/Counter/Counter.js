import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      score: 0
    }
    this.incrementScore = this.incrementScore.bind(this);
    this.decrementScore = this.decrementScore.bind(this);
  }

  incrementScore = () => {
    this.setState(prevState => {
      return {
        score: this.state.score + 1
      }
    })
  }

  decrementScore = () => {
    this.setState(prevState => {
      return {
        score: this.state.score - 1
      }
    })
  }


  render() {
    return (
      <div className="counter">
        <Button className="decrement-button" onClick={this.decrementScore}> - </Button>
        <span className="player-score">{this.state.score}</span>
        <Button className="increment-button" onClick={this.incrementScore}> + </Button>
      </div>
    )
  }
}


export default Counter;
