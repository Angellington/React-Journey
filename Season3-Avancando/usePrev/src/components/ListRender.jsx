import { useState } from 'react'

const ListRender = () => {

    const [lista] = useState(['Matheus, Sáfira, Kayo'])

    return (
        <div>
            <p>Renderizar Lista</p>
            <ul>
                {lista.map((item) => (
                <li>{item}</li>
            ))}
            </ul>
        
        </div>
    )
}

export default ListRender