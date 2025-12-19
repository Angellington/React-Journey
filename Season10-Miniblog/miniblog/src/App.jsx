import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'

function App() {

  return (
    <>
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
