import './App.css'

//1 - Config React Router
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/about/about'
import Navbar from './components/Navbar'
import Products from './pages/Product/Products'
import Info from './pages/Product/info/Info'

function App() {

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/products/:id/"} element={<Products />}></Route>
          <Route path={"/products/:id/info/"} element={<Info />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
