import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Nav from './components/Nav.jsx';
import Services from './pages/Services.jsx'
import 'typeface-baloo-2';
import 'typeface-open-sans';

const App = () => {
  return (
    <>
    <Nav />
    <Home/>
    <About/>
    <Services/>
    </>
  )
}

export default App
