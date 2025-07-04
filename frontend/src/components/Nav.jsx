import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo2.png';
import { Menu, X } from 'lucide-react'; // install lucide-react if not yet


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ backgroundColor: '#f1f3fd' }}>
      <div className="flex justify-between items-center bg-white rounded-full 
        h-14 px-8 shadow-md mx-auto py-10 text-xl w-[90%]">
        
        {/* Logo */}
        <div className="nav-img">
          <img src={logo} alt="logo" width={130} height={29} />
        </div>

        {/* Toggle Icon (Mobile) */}
        <div className="md:hidden block">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Links + Button */}
        <div
          className={`nav-txt md:flex gap-10 items-center cursor-pointer ${
            isOpen ? 'block' : 'hidden'
          } absolute md:static bg-white md:bg-transparent p-5 rounded-lg top-20 right-6 z-10 shadow md:shadow-none`}
        >
          <div className="nav-txt1" style={{ color: '#9390f8' }}>Home</div>
         <div className="nav-txt1" ><a href="#about">About</a></div>
          <div className="nav-txt2"><a href="#services">Services</a></div>
          <div className="nav-txt2"><a href="#customers">Customers</a></div>
          <div className="nav-txt3"><a href="#contact">Contact</a></div>

          <div className="nav-btn mt-4 md:mt-0">
            <Link to={'/login'}>
            <button
              style={{
                background: 'linear-gradient(90deg, #9390F8, #3D82D4)',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '100px',
                cursor: 'pointer'
              }}
            >
              Sign In
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
