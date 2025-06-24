import React from 'react'
import{Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Admin from './pages/Admin.jsx';

const App = () => {
  return (
    <Routes>
 
    <Route path="/" element={<Signup/>} />
    <Route path="/login" element={<Login/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/home/:id' element={<Home/>} />
    <Route path='/register' element={<Register />} />
    <Route path='/register/:id' element={<Register />} />
    <Route path='/admin/:id' element={<Admin />} />

    </Routes>
  )
}

export default App
