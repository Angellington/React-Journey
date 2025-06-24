const Usuarios = (props) => {
    return (
        <div>
            <h2>Usuários</h2>
            <ul>
                {props.usuarios.map((usuario, index) => (
                    <li key={index}>
                        {usuario.nome} - {usuario.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Usuarios