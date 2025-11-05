import React from 'react'

const GameOver = ({ retry }) => {
  return (
    <div>
      <div>Game Over</div>
      <button onClick={retry}></button>
    </div>
  )
}

export default GameOver