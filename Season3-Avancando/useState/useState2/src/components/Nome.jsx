import { useState } from 'react'


const Nome = () => {
    const [nome, setNome] = useState('Insira seu nome!')
    const [inputName, setInputName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setNome(inputName)
    }

  return (
    <section>
        <div>Nome: <b>{nome}</b></div>
        <form onSubmit={handleSubmit}> 
            <input type="text" id='name' name='name'required onChange={(e) => {setInputName(e.target.value)}}/>
            
            <button type='submit'>Inserir</button>
        </form>
    </section>
  )
}

export default Nome