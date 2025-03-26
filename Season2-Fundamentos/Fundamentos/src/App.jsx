import './App.css'

// components
import FirstComponent from './components/FirstComponent'
import { SecondComponent } from './components/FirstComponent'
import { ThirdComponent } from './components/FirstComponent'

function App() {

  return (
    <>
      <div>
        <h1>Fundamentoss do React</h1>
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    </>
  )
}

export default App
