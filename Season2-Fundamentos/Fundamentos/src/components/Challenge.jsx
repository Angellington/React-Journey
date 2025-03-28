import React from 'react'

const Challenge = () => {
    const a = 5
    const b = 6


  return (
    <div>
        <p>A: {a}</p>
        <p>B: {b}</p>

        {(a, b) => console.log(a + b)}
    </div>
  )
}

export default Challenge