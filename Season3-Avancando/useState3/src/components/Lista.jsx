import { useState } from 'react'

const Lista = () => {
    const [count, setCount] = useState(0)


    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Acrescentar</button>
        </div>
    )
}

export default Lista