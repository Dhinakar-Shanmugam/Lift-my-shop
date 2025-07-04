import React from 'react'
import{Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Admin from './pages/Admin.jsx';
import Bookings from './pages/Bookings.jsx';
import BookingDelete from './pages/BookingDelete.jsx';
import BookingUpdate from './pages/BookingUpdate.jsx';

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
    <Route path='/admin' element={<Admin />} />
    <Route path='/bookings/:userId' element={<Bookings />} />
    <Route path='/booking/delete/:id' element={<BookingDelete />} />
    <Route path='/booking/update/:id' element={<BookingUpdate />} />


    </Routes>
  )
}

export default App
