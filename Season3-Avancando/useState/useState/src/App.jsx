import './App.css'

// componentes
import Contador from './components/contador'
import Visitante from './components/visitante'
import Luz from './components/luz'
import ListaObjeto from './components/ListaObjeto'
function App() {
  return (
    <>
      <h1>Testando o useState</h1>
      <img src="niko.png" alt="niko com o sol" />
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Contador />
        <Visitante />
        <Luz />
      </div>
      <div>
        <ListaObjeto />
      </div>
    </>
  )
}

export default App
