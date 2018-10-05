import React from 'react';
import './Main.css';
import {Panel, Grid, Row, Col} from 'react-bootstrap';
import Players from '../Players/Players';
import Stats from '../Stats/Stats';
import AddPlayer from '../AddPlayer/AddPlayer';
import StopWatch from '../StopWatch/StopWatch';

const Header = (props) => {

  console.log(props)

  const {initialPlayers,
          removePlayer,
          increaseScore,
          decreaseScore,
          addPlayer} = props;

  return (
    <div className="players-container">
      <Panel className="panel-container">
        <Panel.Heading>

          <div className='main-container'>
            <h1>{props.title}</h1>
          </div>

          <div className="mainsecondary-container">
            <Grid>
              <Row className="show-grid">
                <Col xs={12} md={9}>
                  <div className="mainstats-container">
                    <Stats initialPlayers={initialPlayers} />
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div className="mainstopwatch-container">
                    <StopWatch />
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
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
