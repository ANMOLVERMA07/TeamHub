import React from 'react'
import Navbar from './components/Navbar'
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

const App = () => {
  return (
    <>
    <Navbar/>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App