import { useState, useEffect } from 'react'
const TextOnScreen = () => {

    useEffect(() => {
        console.log("TextOnScreen component mounted");

        return () => {
          console.log("TextOnScreen component unmounted");
        }
    }, [])

  return (
    <div>TextOnScreen</div>
  )
}

export default TextOnScreen