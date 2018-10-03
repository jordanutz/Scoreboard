import React, {Component} from 'react';
import './Players.css';
import {Panel, Button} from 'react-bootstrap';

class Players extends Component {
  render () {
    return (
      <div className="players-container">
        <Panel className="panel-container">
          <Panel.Heading>
            <div>Scoreboard</div>
            <div>Players</div>
          </Panel.Heading>
          <Panel.Body className="player-profile">
            <div className="player">
              <span className="player-name">Utzipher</span>
            </div>

            <div className="counter">
              <Button className="decrement-button"> - </Button>
              <span className="player-score">35</span>
              <Button className="increment-button"> + </Button>
            </div>

            </Panel.Body>
        </Panel>
      </div>
    )
  }
}

export default Players;
