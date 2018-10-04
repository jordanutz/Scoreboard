import React from 'react';
import Counter from '../Counter/Counter';
import './Players.css'
import {Button} from 'react-bootstrap';

const Players = (props) => {
  console.log(props)

  const {name, removePlayer, id, index, score, increaseScore, decreaseScore} = props;

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
export default Players;
