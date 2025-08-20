import { useState, useEffect } from 'react'
const TextOnScreen = () => {

    useEffect(() => {
        console.log("TextOnScreen component mounted");
    })

  return (
    <div>TextOnScreen</div>
  )
}

export default TextOnScreen