import { useState } from "react"

const Count = () => {

    let [count, setCount] = useState(0)

  return (
    <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)} >+</button>
    </div>
  )
}

export default Count