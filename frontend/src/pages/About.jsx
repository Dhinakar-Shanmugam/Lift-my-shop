import React from 'react';
import about from '../assets/images/about.png';

const About = () => {
  return (
    <div className="about py-10" style={{ backgroundColor: '#f1f3fd', height: '100vh' }}>
      <div className="flex flex-col md:flex-row items-center justify-between px-4 gap-10 md:px-0" style={{ width: '90%', margin: 'auto' }}>
 
        {/* About Image */}
        <div className="about-img w-full md:w-1/2 flex justify-center">
          <img src={about} alt="about" className="mt-8 max-w-full h-auto" />
        </div>

        {/* About Text */}
        <div className="about-txt w-full md:w-1/2 text-center md:text-left">
          <h1 className="font-bold text-3xl pb-6">
            <span className="font-montserrat bg-gradient-to-r from-[#9390F8] to-[#3D82D4] bg-clip-text text-transparent">About</span> Us
          </h1>
          <p className="pb-6 font-palanquin text-xl">
            Lift My Shop connects local businesses with nearby social media influencers to help them grow. We make it easy for shops to book promotions, and we handle the rest. Our goal is to boost visibility and bring more customers to your door through trusted local voices. Simple, smart, and community-driven.
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
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
