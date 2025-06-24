import { useState } from "react"

const Conditional = () => {
    const [x] = useState(true)

    const [name, setName] = useState("Leticia Kuberayashi")

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Sim, isso será exibido!</p>}
            {!x && <p>Não, isso não será exibido!</p>}

            {/* If ternario */}
            {name === "Leticia Kuberayashi" ? ( 
                <p>O nome é Letícia Kuberayashi</p>)
            : (
                <p>O nome não é Letícia Kuberayashi</p>
                )
            }

            <button onClick={() => setName('Minerva')}>Clica</button>
        </div>
    )
}

export default Conditional