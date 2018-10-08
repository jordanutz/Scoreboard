import React from 'react';
import {Button} from 'react-bootstrap';

const Counter = (props) =>  {

  console.log(props)
  console.log(props.id)

  const {index, decreaseScore, increaseScore, score} = props;

  return (
    <div className="counter-container">
      <Button className="decrement-button" onClick={() => decreaseScore(index)}> - </Button>
      <span className="player-score">{score}</span>
      <Button className="increment-button" onClick={() => increaseScore(index)}> + </Button>
    </div>
  )
}

export default Counter;
