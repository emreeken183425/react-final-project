import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login.jsx'
import {  Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App' >
     <Navbar />
     <Routes>
      <Route path='Login' element={<Login /> } />


     </Routes>

     
    </div>
  )
}

export default App
