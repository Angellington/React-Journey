// import { useContext } from "react";
// import CounterContext from "../../context/CounterContext";

import useCounterContext from "../../hook/useCounterContext"



const ChangeCounter = () => {
    // const { counter, setCounter } = useContext(CounterContext)

    const { counter, setCounter} = useCounterContext();
    
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Clique</button>
            {counter}
        </div>
    )
}

export default ChangeCounter