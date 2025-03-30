import { useState } from 'react'

const ManageData = () => {
    let someData = 10;

    console.log(someData)

    const [number, setNumber] = useState(10)

    alert(number, setNumber)
  return (
    <section>
        <div>
            <p>Valor {someData}</p>
            <button onClick={() =>
                (someData = 15)}>Mudar variavel</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar o state</button>
        </div>
    </section>
  )

}

export default ManageData