import React from 'react';
import Counter from '../Counter/Counter';
import './Players.css'

const Players = (props) => {
  return (
    <div className="player-container">
      <span className="player-name">{props.name}</span>
      <Counter score={props.score}/>
    </div>
  )
}
export default Players;
