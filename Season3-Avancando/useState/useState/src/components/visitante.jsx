import { useState } from "react"

const Visitante = () => {
    let [nome, setNome] = useState('Sem nome');
    let [inputName, setInputName] = useState();




    let handleSubmit = (e) => {
        e.preventDefault();
        setNome(inputName)   
    }



  return (
    <article>
        <p>Visitante: <b>{nome}</b></p>

        <form onSubmit={handleSubmit}>
            <input type="text" name="nome" id="nome" required onChange={(e) => setInputName(e.target.value)}/>
            <input type="submit" value="Alterar" />
        </form>
    </article>
  )
}

export default Visitante