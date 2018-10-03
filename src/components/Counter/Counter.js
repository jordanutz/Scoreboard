import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

const Counter = (props) => {
  console.log(props)
  return (
    <div className="counter">
      <Button className="decrement-button"> - </Button>
      <span className="player-score">{props.score}</span>
      <Button className="increment-button"> + </Button>
    </div>
  )
}

export default Counter;
