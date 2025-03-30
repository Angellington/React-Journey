import './App.css'

import Oneshot from './assets/background.png'

import ManageData from './components/ManageData'

import TrainingManageData from './components/TrainingManageData'
function App() {
  return (
    <>
      <h1>Avançando em React</h1>
      <img src='niko.png' alt='niko-segurando-o-sol'></img>
      <img src={Oneshot} alt="Niko no escuro como robôzinho"/>
      <ManageData />
      <TrainingManageData />
      
    </>
  )
}

export default App
