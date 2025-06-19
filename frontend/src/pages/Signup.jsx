import React from 'react';
import SignupImg from '../assets/images/SignupImg.png';
import axios from 'axios';
import { useSnackbar } from 'notistack'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Signup = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()


 const handleSignup = async () => {
  const data = { name, email, password };

  if (!name || !email || !password) {
    enqueueSnackbar('Please fill all the fields', { variant: 'error' });
    return; // Prevent the request from continuing
  }

  try {
    console.log("Sending request to backend:", data);
    const res = await axios.post('http://localhost:3000/api/users/signup', data);
    console.log("Signup success:", res.data);
    enqueueSnackbar('User created successfully', { variant: 'success' });
    const userId = res.data.id;
    navigate(`/home/${userId}`);
  } catch (error) {
    // Log every possible error object
    console.error("Signup error:", error);
    console.error("Full error object:", JSON.stringify(error, null, 2));

    enqueueSnackbar(
      error?.response?.data?.message || error?.message || 'Signup failed',
      { variant: 'error' }
    );
  }
};


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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className='font-bold my-4'>Email<span style={{ color: "red" }}>*</span></label>
        <input
          type="text"
          style={{ border: "1px solid black" }}
          className='rounded p-3'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className='font-bold my-4'>Password<span style={{ color: "red" }}>*</span></label>
        <input
          type="password"
          style={{ border: "1px solid black" }}
          className='rounded p-3'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value )}
        />
        <button
          style={{ background:'linear-gradient(to right, #9390F8, #3D82D4)', color: "white" }}
          className='my-5 p-3 rounded'
          onClick={handleSignup}
        >
          Sign Up
        </button>
        <center>
          <p className='my-2'>
            Already have an account? <Link to={"/login"}>
            <span style={{ color: "#4B53F2" }} className='underline'>
              Login Here
            </span>
            </Link>
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

