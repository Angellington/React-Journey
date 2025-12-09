import './App.css'

//1 - Config React Router
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/about/about'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/about"} element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
