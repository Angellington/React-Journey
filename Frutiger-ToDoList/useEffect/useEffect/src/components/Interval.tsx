import { useState, useEffect } from "react"
const Interval = () => {
    const [count, setCount] = useState(0)


    const handleCount = () => {
        setCount(count + 1)
    }
    
    useEffect(() => {
        console.log("useEffect chamado")

     
            const interval = setInterval(() => {
                console.log("Intervalo de 1 segundo")
                setCount(prevCount => prevCount + 1)
            }, 2000)

            return (
                () => {
                    console.log("Limpeza do intervalo")
                    clearInterval(interval)
                }
            )
    }, [])




  return (
    <div>
        <p>{count}</p>
        <button onClick={handleCount} >CLIQUE</button>
    </div>
  )
}

export default Interval