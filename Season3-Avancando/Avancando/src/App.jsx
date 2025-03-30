import './App.css'

import Oneshot from './assets/background.png'

function App() {
  return (
    <>
      <h1>Avançando em React</h1>
      <img src='niko.png' alt='niko-segurando-o-sol'></img>
      <img src={Oneshot} alt="Niko no escuro como robôzinho"/>
    </>
  )
}

export default App
