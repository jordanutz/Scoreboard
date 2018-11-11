import React, {PureComponent} from 'react';
import Counter from '../Counter/Counter';
import './Players.scss'
import {Button} from 'react-bootstrap';
import Cancel from './Assets/Cancel.svg';

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
      <div className="Player">
        <div className="PlayerName">
          <h2>{name}</h2>
        </div>
        <img src={Cancel} className="RemoveButton" onClick={ () => removePlayer(id)} />
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
