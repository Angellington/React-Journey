import './App.css'
import AnotherList from './components/AnotherList'
import Count from './components/Count'
import Lista from './components/Lista'
import ListRender from './components/ListRender'

function App() {

  return (
    <>
      <h1>useState testes</h1>
      <Count />
      <div>
        <ListRender />
        <AnotherList />
      </div>
      <Lista />
    </>
  )
}

export default App
