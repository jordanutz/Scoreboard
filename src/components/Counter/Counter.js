import React from 'react';
import {Button} from 'react-bootstrap';
import './Counter.scss'

const Counter = (props) =>  {

  console.log(props)
  console.log(props.id)

  const {index, decreaseScore, increaseScore, score} = props;

  return (
    <div className="Counter">
      <div className="CounterSecondary">
        <Button onClick={() => decreaseScore(index)}> - </Button>
        <span>{score}</span>
        <Button onClick={() => increaseScore(index)}> + </Button>
      </div>
    </div>
  )
}

export default Counter;
