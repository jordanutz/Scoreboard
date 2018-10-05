import React, {PureComponent} from 'react';
import Counter from '../Counter/Counter';
import './Players.css'
import {Button} from 'react-bootstrap';

class Players extends PureComponent {
  render() {
    const {name,
          removePlayer,
          id,
          index,
          score,
          increaseScore,
          decreaseScore} = this.props;

    return (
      <div className="player-container">
        <span className="player-name">{name}</span>
        <Button onClick={ () => removePlayer(id) }>Remove Player</Button>
        <Counter
          score={score}
          increaseScore={increaseScore}
          decreaseScore={decreaseScore}
          id={id}
          index={index}
          />
      </div>
    )
  }
}

export default Players;
