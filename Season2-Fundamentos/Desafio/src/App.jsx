import './App.css'
// Importações
import Goblin from './components/Goblin'

// Componentes
import Desafio from './components/Desafio'


function App() {

  return (
    <>
      <h1 style={{color: 'black'}}> Goblin apareceu!! Resolva o desafio!!!</h1>
      <h3 style={{color: 'black'}}>Digite dois números e some e veja o console!</h3>

      <Goblin/>

      <Desafio />


    </>
  )
}

export default App
