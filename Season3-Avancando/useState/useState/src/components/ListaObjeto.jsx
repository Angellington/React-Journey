import { useState } from 'react'

const ListaObjeto = () => {
    const [pessoas, setPessoas] = useState([])

    const [novoUsuario, setNovoUsuario] = useState({
        nome: '',
        idade: '',
        mensagem: ''
    })


    // É para mudança , ele copia os valores do novo usuario  
    const handleChange = (e) => {
        setNovoUsuario({
            ...novoUsuario,
            [e.target.name]: e.target.value,
        })
    }

    // Vai mudar ao enviar... ele coloca o antigo pessoas e o novo usuario... A cada carregamento ele faz mais coisas... 
    let handleSubmit = (e) => {
        e.preventDefault();

        setPessoas([...pessoas, novoUsuario])

        setNovoUsuario({ nomeefef '', idade: '', mensagem: ''});

        e.target.reset();
    } 

  return (
    <section className='tabela'>
        <div>
            <p>Lista de Objetos</p>
        </div>

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome: </label>
            <input type="text" name="nome" id="nome" required onChange={handleChange}/>

            <label htmlFor="idade">Idade: </label>
            <input type="number" name='idade' id='idade' required
            onChange={handleChange}/>

            <label htmlFor="mensagem">Mensagem: </label>
            <textarea name="mensagem" id="mensagem" required onChange={handleChange}></textarea>

            <input type="submit" value="Adicionar" />
        </form>
        
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Mensagem</th>
                </tr>
            </thead>
            <tbody>    
                {pessoas.map((pessoa, index) => (
                    <tr key={index}>
                        <td>{pessoa.nome}</td>
                        <td>{pessoa.idade}</td>
                        <td>{pessoa.mensagem}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
  )
}

export default ListaObjeto