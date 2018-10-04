import React from 'react';
import Counter from '../Counter/Counter';
import './Players.css'
import {Button} from 'react-bootstrap';

const Players = (props) => {
  console.log(props)
  return (
    <div className="player-container">
      <span className="player-name">{props.name}</span>
      <Button onClick={ () => props.removePlayer(props.id)}>Remove Player</Button>
      <Counter />
    </div>
  )
}
export default Players;
