import React from 'react';
import './Main.scss';
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
    <div className="Players">
      <Panel className="PlayersPanel">
        <Panel.Heading>

          <div className='Main'>
            <h1>{props.title}</h1>
          </div>

          <div className="MainSecondary">
            <Grid>
              <Row>
                <Col xs={12} md={8} className="QueryStats">
                  <div className="MainStats">
                    <Stats initialPlayers={initialPlayers} />
                  </div>
                </Col>
                <Col xs={6} md={4} className="QueryColumn">
                  <div className="MainStopwatch">
                    <StopWatch />
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </Panel.Heading>
        <Panel.Body className="PlayerProfile">
          <div className="PlayerSingle">
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

            <AddPlayer addPlayer={addPlayer} />
          </div>
        </Panel.Body>
      </Panel>
    </div>
  )
}

export default Header;
