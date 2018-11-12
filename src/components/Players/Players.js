import React, {PureComponent} from 'react';
import Counter from '../Counter/Counter';
import './Players.scss'
import {Button} from 'react-bootstrap';
import Cancel from './Assets/Cancel.svg';

class Players extends PureComponent {
  constructor () {
    super()
    this.state = {
      hoverRemove: false
    }
  }

  hoverOn = () => {
    this.setState({
      hoverRemove: true
    })
  }

  hoverOff = () => {
    this.setState({
      hoverRemove: false
    })
  }

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
          <h2 onMouseEnter={this.hoverOn}  onClick={ () => removePlayer(id)} onMouseLeave={this.hoverOff}>{name}</h2>
        </div>
        <img src={Cancel} className={this.state.hoverRemove ? "RemoveButton" : "HideButton"} />
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
