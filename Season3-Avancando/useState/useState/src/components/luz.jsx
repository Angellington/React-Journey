import { useState } from 'react'
const Luz = () => {
    let [luz, setLuz] = useState(true);

    let statusLuz;

    if(luz == true) {
        statusLuz = 'Ligada'
    } else {
        statusLuz = 'desligada'
    }

    
  return (
    <article>
        <p>Ligando a luz!</p>
        <p><b>{statusLuz}</b></p>
        <button onClick={
            () => (luz == true) ? setLuz(false) : setLuz(true)}>Ligar a luz?</button>
    </article>
  )
}

export default Luz