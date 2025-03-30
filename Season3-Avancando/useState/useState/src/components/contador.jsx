import { useState } from "react"


const Contador = () => {
    const [count, setCount] = useState(0)

    return (
    <section>
        <div>contador</div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Contador</button>
    </section>
    
  )
}

export default Contador