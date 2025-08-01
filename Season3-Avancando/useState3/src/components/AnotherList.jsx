import { useState } from 'react'


const AnotherList = () => {
    const [list] = useState(['Mira', 'Kako', 'Aoi'])

    const [users, setUsers] = useState([
        { id: 1, name: 'Matheus' },
        { id: 2, name: 'Pedro' },
        { id: 3, name: 'João' },
        { id: 4, name: 'Maria' }
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }


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
    
    <button onClick={deleteRandom}>Delete random user</button>
    </>
  )
}

export default AnotherList