import React from 'react'
import { useState, useEffect } from 'react'

const Title = () => {

    const [title, setTitle] = useState("Título Inicial");

    useEffect(() => {
        console.log("Título atualizado:", title);

        document.title = title
    }, [title])

  return (
    <div>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
    </div>
  )
}

export default Title