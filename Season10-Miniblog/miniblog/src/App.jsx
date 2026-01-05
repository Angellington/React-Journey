import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { onAuthStateChanged } from 'firebase/auth';

import { useState, useEffect } from 'react';
import useAuth from './hooks/useAuth'
import { useAuthValue } from './context/AuthContext.jsx'
import CreatePost from './pages/CreatePost/CreatePost.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Search from './pages/Search/Search.jsx'
import Post from './pages/Post/Post.jsx'
import EditPost from './pages/EditPost/EditPost.jsx'

function App() {
  const {  loading , user} = useAuthValue();

  const loadingUser = user === undefined

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/post/:id' element={<Post />}></Route>

        <Route path='/login' element={!user ? <Login /> : <Navigate to="/"/>}></Route>
<Route
  path="/post/edit/:id"
  element={user ? <EditPost /> : <Navigate to="/" />}
/>        <Route path='/register' element={!user ? <Register /> : <Navigate to="/"/>}></Route>
        <Route path='/posts/create' element={user ? <CreatePost /> : <Navigate to="/login"/>}></Route>
        <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to="/login"/>}></Route>
        
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
