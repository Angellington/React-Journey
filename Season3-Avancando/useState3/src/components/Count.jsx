import { useState } from 'react'
export default function Count(){
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Um contador simples: </p>
            <p>{count}</p>
            <button 
                onClick={() => setCount(prev => prev + 1)}
                >Acrescentar</button>
            
            <button
                onClick={() => setCount(0)}
                >Resetar</button>

        </div>
    )
}
