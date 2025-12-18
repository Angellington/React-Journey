import { useContext } from "react";
import CounterContext from "../../context/CounterContext";


const ChangeCounter = () => {
    const { counter, setCounter } = useContext(CounterContext)

    
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Clique</button>
            {counter}
        </div>
    )
}

export default ChangeCounter