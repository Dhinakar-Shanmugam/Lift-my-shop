import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import hero from '../assets/images/hero-img.png';
import About from '../pages/About.jsx'
import Services from '../pages/Services.jsx'
import Review from '../pages/Review.jsx';
import 'typeface-baloo-2';
import 'typeface-open-sans';
import Footer from '../pages/Footer.jsx';

const Home = () => {

  const { id } = useParams();
  const [name, setName] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users/user/${id}`)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div style={{ backgroundColor: '#f1f3fd' }}>
      <Nav/>
      <div className="hero flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-0" style={{ width: '90%', margin: 'auto' }}>
        
        {/* Hero Text */}
        <div className="hero-text w-full md:w-1/2 md:text-left">
          <h3 className="text-xl md: pt-5 font-palanquin font-bold bg-gradient-to-r from-[#9390F8] to-[#3D82D4] bg-clip-text text-transparent">
            Welcome {name}!
          </h3>
          <h1 className="text-5xl font-montserrat font-bold pb-3 leading-normal">
            We Bring <span className="bg-gradient-to-r from-[#9390F8] to-[#3D82D4] bg-clip-text text-transparent">Local</span> Eyes to Your <span className="bg-gradient-to-r from-[#9390F8] to-[#3D82D4] bg-clip-text text-transparent">Business</span>
          </h1>
          <p className="font-palanquin pb-6 text-xl">
            Just book a promotion on our website. We contact social media pages near your area to promote your shop. You earn customers, we handle the rest!
          </p>
          
          <Link to={`/register/${id}`}><button
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
            Book Now
          </button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="hero-img w-full md:w-1/2 flex justify-center">
          <img src={hero} alt="Hero" className="max-w-full h-auto" />
        </div>
      </div>
      <About/>
    <Services/>
    <Review/>
    <Footer/>
    </div>
  );
};

export default Home;
