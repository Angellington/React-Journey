import './App.css'

// components
import FirstComponent from './components/FirstComponent'
import { SecondComponent } from './components/FirstComponent'
import { ThirdComponent } from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'

function App() {

  return (
    <>
      <div>
        <h1>Fundamentoss do React</h1>
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <TemplateExpressions />
      </div>
    </>
  )
}

export default App
