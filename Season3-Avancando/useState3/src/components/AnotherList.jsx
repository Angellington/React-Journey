import { useState } from 'react'


const AnotherList = () => {
    const [list] = useState(['Mira', 'Kako', 'Aoi'])

    const [users] = useState([
        { id: 1, name: 'Matheus' },
        { id: 2, name: 'Pedro' },
        { id: 3, name: 'João' },
        { id: 4, name: 'Maria' }
    ])


  return (
    <>
    <ul>
        {list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}

      
    </ul>
    <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
    
    </>
  )
}

export default AnotherList