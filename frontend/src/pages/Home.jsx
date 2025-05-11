import React from 'react';
import Nav from '../components/Nav.jsx';
import hero from '../assets/images/hero-img.png';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#f1f3fd' }}>
      <div className="hero flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-0" style={{ width: '90%', margin: 'auto' }}>
        
        {/* Hero Text */}
        <div className="hero-text w-full md:w-1/2 md:text-left">
          <h3 className="text-xl md: pt-5 font-palanquin font-bold bg-gradient-to-r from-[#9390F8] to-[#3D82D4] bg-clip-text text-transparent">
            Welcome Dhinakar!
          </h3>
          <h1 className="text-5xl font-montserrat font-bold pb-3 leading-normal">
            We Bring <span className="bg-gradient-to-r from-[#9390F8] to-[#3D82D4] bg-clip-text text-transparent">Local</span> Eyes to Your <span className="bg-gradient-to-r from-[#9390F8] to-[#3D82D4] bg-clip-text text-transparent">Business</span>
          </h1>
          <p className="font-palanquin pb-6 text-xl">
            Just book a promotion on our website. We contact social media pages near your area to promote your shop. You earn customers, we handle the rest!
          </p>
          <button
            style={{
              background: 'linear-gradient(90deg, #9390F8, #3D82D4)',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '100px',
              cursor: 'pointer',
              fontSize: '20px',
            }}
          >
            Lift My Shop
          </button>
        </div>

        {/* Hero Image */}
        <div className="hero-img w-full md:w-1/2 flex justify-center">
          <img src={hero} alt="Hero" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Home;
