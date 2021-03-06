import React from 'react';
import './Stats.scss'

const Stats = (props) => {

  const {initialPlayers} = props;
  console.log(props);

  const totalPlayers = initialPlayers.length
  const totalPoints = initialPlayers.reduce( (total, player) => {
    return total + player.score;
  }, 0);

  return (
    <div className="Stats">
      <h2>Players: {totalPlayers} </h2>
      <h2>Total Points: {totalPoints} </h2>

    </div>
  )
}

export default Stats;
