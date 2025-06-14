import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Nav from './components/Nav.jsx';
import Services from './pages/Services.jsx'
import Review from './pages/Review.jsx';
import 'typeface-baloo-2';
import 'typeface-open-sans';
import Footer from './pages/Footer.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

const App = () => {
  return (
    <>
    <Signup/>
    <Login/>
    <Nav />
    <Home/>
    <About/>
    <Services/>
    <Review/>
    <Footer/>
    <Register />
    </>
  )
}

export default App
