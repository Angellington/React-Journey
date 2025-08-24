import { useState, useEffect } from 'react'
const CountOdd = () => {
    const [count, setCount] = useState(0)
    const [style, setStyle] = useState({})

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Intervalo de 1 segundo")
            setCount(prevCount => prevCount + 1)
        }, 10)

        if(count % 2 == 0) {
            setStyle({
                width: "100px",
                height: "100px",
                backgroundColor: "blue",})
        } else {
            setStyle({
                width: "100px",
                height: "100px",
                backgroundColor: "red",})
        }
    })


  return (
    <div>
        <p>{count}</p>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>CLIQUE</button>
        <div style={style}>
            FAROL
        </div>
    </div>
  )
}

export default CountOdd