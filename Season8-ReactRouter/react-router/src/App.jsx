import './App.css'

//1 - Config React Router
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/about/about'
import Navbar from './components/Navbar'
import Products from './pages/Product/Products'
import Info from './pages/Product/info/Info'
import NotFound from './pages/NotFound/NotFound'
import SearchForm from './components/SearchForm'
import Search from './pages/Search/Search'

function App() {

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
      <SearchForm />
      <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/search"} element={<Search />}></Route> 
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/products/:id/"} element={<Products />}></Route>
          <Route path={"/products/:id/info/"} element={<Info />}></Route>
          <Route path={"*"} element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
