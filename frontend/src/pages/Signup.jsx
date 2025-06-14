import React from 'react';
import SignupImg from '../assets/images/SignupImg.png';

const Signup = () => {
  return (
    <div className='container flex max-sm:flex-col' style={{backgroundColor: "#f1f3fd"}}>
      <div className="m-auto flex flex-col">
        <h1 className='my-4 text-3xl font-bold'>Welcome Star Seller!</h1>
        <p className='my-4'>Create an account to promote your shop with local influencers.</p>
        <label className='font-bold my-4'>Name<span style={{ color: "red" }}>*</span></label>
        <input
          type="text"
          style={{ border: "1px solid black" }}
          className='rounded p-3'
          placeholder='Enter your name'
        />
        <label className='font-bold my-4'>Email<span style={{ color: "red" }}>*</span></label>
        <input
          type="text"
          style={{ border: "1px solid black" }}
          className='rounded p-3'
          placeholder='Enter your email'
        />
        <label className='font-bold my-4'>Password<span style={{ color: "red" }}>*</span></label>
        <input
          type="password"
          style={{ border: "1px solid black" }}
          className='rounded p-3'
          placeholder='Enter your password'
        />
        <button
          style={{ background:'linear-gradient(to right, #9390F8, #3D82D4)', color: "white" }}
          className='my-5 p-3 rounded'
        >
          Sign Up
        </button>
        <center>
          <p className='my-2'>
            Already have an account? 
            <span style={{ color: "blue" }}>    Log In</span>
          </p>
        </center>
      </div>
      <div className="max-sm:hidden sign-img flex flex-col h-screen w-1/2">
        <img src={SignupImg} alt="signup-img" />
      </div>
    </div>
  );
};

export default Signup;

