import React from 'react';
import './Header.css';
import Players from '../Players/Players';
import {Panel, Button} from 'react-bootstrap';

const Header = (props) => {
  console.log(props)
  return (
    <div className="players-container">
      <Panel className="panel-container">
        <Panel.Heading>
          <div>{props.title}</div>
          <div>Players: {props.totalPlayers}</div>
        </Panel.Heading>
        <Panel.Body className="player-profile">
          <div className="player">
            <Players name="Utzipher" score={50}/>
            <Players name="Aisha" score={20}/>
            <Players name="Sean" score={30}/>
          </div>
        </Panel.Body>
      </Panel>
    </div>
  )
}

export default Header;
