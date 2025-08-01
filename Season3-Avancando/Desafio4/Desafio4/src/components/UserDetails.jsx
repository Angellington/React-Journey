
const UserDetails = () => {
    const user = [
        {id: 1, nome: 'Letícia', idade: 19, profissao: 'Biologa'},
        {id: 2, nome: 'João', idade: 7, profissao: 'Estudante'},
        {id: 3, nome: 'Maria', idade: 30, profissao: 'Arquiteta'},
    ]

    
    return (
        <div>
            <h1>Lista de Usuários</h1>
            <ul>
                {user.map((u) => (
                    (u.idade >= 18 ? 
                        <li key={u.id}>
                        <strong>Nome:</strong> {u.nome} <br />
                        <strong>Idade:</strong> {u.idade} <br />
                        <strong>Profissão:</strong> {u.profissao}
                    </li> : 
                    <li key={u.id} style={{backgroundColor: 'red', color: 'white'}}>
                        <p>NÃO PODE TIRAR CARTEIRA DE MOTORISTA</p>
                        <strong>Nome:</strong> {u.nome} <br />
                        <strong>Idade:</strong> {u.idade} <br />
                        <strong>Profissão:</strong> {u.profissao} (Menor de idade, não pode ser exibido)
                    </li>
                    )
                ) )}
            </ul>
        </div>
    )
}

export default UserDetails