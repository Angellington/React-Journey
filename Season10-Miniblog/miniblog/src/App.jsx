import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
