
import './App.css'
import CarDetails from './components/CarDetails/CarDetails'

function App() {


  const details = [{
    id: 1,
    nome: 'Nissan',
    model: 'Volts',
    ano: 2025,
  },{
    id: 2,
    nome: 'Maria',
    model:'vol',
    ano: 2002
  }, {
    id: 3,
    nome: 'Mongo',
    model: 'Vouch',
    ano: 1994
  }]




  return (
    <>
      <CarDetails details={details} />

    </>
  )
}

export default App
