import { useState } from 'react';
import Conditional from './Conditional';


const ListRender = () => {
    const [pessoas, setPessoas] = useState([
        { nome: 'Leticia Kuberayashi', idade: 19, id: 1 },
        { nome: 'Wellington Ferreira', idade: 20, id: 2 },
        { nome: 'Maria Eduarda', idade: 18, id: 3 },
        { nome: 'Minerva Alves Barbosa', idade: 21, id: 4 }
    ]);
    

    const handleDeleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * pessoas.length);

        setPessoas((prevPessoas) => {
            console.log(prevPessoas);

            return prevPessoas.filter((_, index ) => index !== randomNumber)
        },)

        
    }

    return (
        <>
            <div>
                <h2>Lista de Pessoas</h2>
                {pessoas.length > 0 ? (
                    pessoas.map((pessoa) => (
                    <p key={pessoa.id}>
                        {pessoa.nome} - {pessoa.idade} anos - ID: {pessoa.id}
                    </p>
                    ))
                ) : (
                    <p>Não há pessoas cadastradas.</p>
                )}
            </div>

            <button onClick={handleDeleteRandom}>Delete Random User</button>
            <Conditional />
        </>
    )
}

export default ListRender