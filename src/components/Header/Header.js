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
          <div>Players: {props.initialPlayers.length}</div>
        </Panel.Heading>
        <Panel.Body className="player-profile">
          <div className="player">
            {props.initialPlayers.map( (player, id) => {

              return <Players
                key={id}
                name={player.name}
                removePlayer={props.removePlayer}
                id={player.id}
                />

            })}
          </div>
        </Panel.Body>
      </Panel>
    </div>
  )
}

export default Header;
