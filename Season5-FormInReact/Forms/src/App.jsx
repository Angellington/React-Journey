import { useState } from 'react'
import './App.css'
import MyForms from './components/MyForms'

function App() {

  return (
    <>
      <h2> forms </h2>
      <MyForms user={{name: "Josias", email: "josias@gmail.com", bio: "...", role: "Administrador"}} />
    </>
  )
}

export default App
