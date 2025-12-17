
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Images from './pages/Images/Images'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/images' element={<Images />}></Route>
        </Routes> 
    </>
  )
}

export default App
