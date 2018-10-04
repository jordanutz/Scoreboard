import React from 'react';
import './Header.css';
import {Panel} from 'react-bootstrap';
import Players from '../Players/Players';
import Stats from '../Stats/Stats';
import AddPlayer from '../AddPlayer/AddPlayer';

const Header = (props) => {

  console.log(props)

  const {initialPlayers, removePlayer, increaseScore, decreaseScore, addPlayer} = props;

  return (
    <div className="players-container">
      <Panel className="panel-container">
        <Panel.Heading>
          <div>{props.title}</div>

          <Stats
              initialPlayers={initialPlayers}
              />

        </Panel.Heading>
        <Panel.Body className="player-profile">
          <div className="player">
            {initialPlayers.map( (player, index) => {

              return <Players
                id={player.id}
                key={player.id}
                name={player.name}
                score={player.score}
                removePlayer={removePlayer}
                increaseScore={increaseScore}
                decreaseScore={decreaseScore}
                index={index}
                />

            })}

            <AddPlayer addPlayer={addPlayer}/>
          </div>
        </Panel.Body>
      </Panel>
    </div>
  )
}

export default Header;
