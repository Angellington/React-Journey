import { useState, useEffect } from 'react'

const DemoProps = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // the code that we want to run
        console.log("This count is: ", count)

        //optional return function
        return () => {
            console.log("I am being cleaned up")
        }
    }, [count]) // empty dependency array means this effect runs once after the initial render


  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default DemoProps