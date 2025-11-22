import React from 'react'

const GameOver = ({ retry, score}) => {
  return (
    <div>
      <div>Game Over</div>
      <h2>A sua pontuação foi <span>{score}</span></h2>
      <button onClick={retry}>RESET GAME</button>
    </div>
  )
}

export default GameOver