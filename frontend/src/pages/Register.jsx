import {Link, useNavigate} from 'react-router-dom'
import form from '../assets/images/form.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Register = () => {

  const { id } = useParams();

  const [fullname, setFullname] = useState('');
  const [userid, setUserid] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [shopname, setShopname] = useState('');
  const [shopcategory, setShopcategory] = useState('');
  const [address, setAddress] = useState('');
  const [businesstype, setBusinesstype] = useState('');
  const [goal, setGoal] = useState('');
  const [targetarea, setTargetarea] = useState('');
  const [startingdate, setStartingdate] = useState('');
  const [endingdate, setEndingdate] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fullname,
      userid,
      number,
      email,
      shopname,
      shopcategory,
      address,
      businesstype,
      goal,
      targetarea,
      startingdate,
      endingdate
    };
    try {
      const res = await axios.post('http://localhost:3000/api/bookings/create', data);
      console.log(res.data);
      navigate(`/home/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div>
      <div className='h-min flex flex-col md:flex-row items-center justify-around px-4 md:px-0' style={{background:'linear-gradient(to right, #9390F8, #3D82D4)'}} >
        <div className='w-full md:w-1/2 flex justify-center'>
          <img src={form} alt="form" className="max-w-full h-auto" />
        </div>
        <div className='mx-4 md:mx-20 text-center md:text-left'>
          <h1 className='text-3xl font-bold text-white'>Promotion Booking Form</h1>
          <p className='text-white py-3'>Please fill in your shop and contact details. We’ll connect you with trusted local influencers to boost your business.</p>

          <Link to={`/home/${id}`}>
            <button
              style={{
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }} className='underline'
            >
              Go Back
            </button>
            </Link>
        </div>
      </div>
      <div style={{ width: '90%', margin: 'auto' }} className='py-10 flex flex-col gap-4 items-center'>

        <div className='flex flex-col gap-4 w-full max-w-md'>
          <label className='font-bold'>Full Name <span style={{color: 'red'}}>*</span></label>
          <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Ex: Dhinakar" style={{border: '1px solid black'}} className='rounded-lg px-2 py-1 w-full' />
        </div>
        <div className='flex flex-col gap-4 w-full max-w-md'>
          <label className='font-bold'>User Id <span className='text-sm font-normal'>( {id} )</span><span style={{color: 'red'}}>*</span></label>
          <input type="text" 
          
          value= {userid}  placeholder='copy the above user id and paste here...'
          
          onChange={(e) => setUserid(e.target.value)} 
          style={{border: '1px solid black'}} className='rounded-lg px-2 py-1 w-full' />
        </div>
        <div className='flex flex-col gap-4 w-full max-w-md'>
          <label className='font-bold'>Mobile Number <span style={{color: 'red'}}>*</span></label>
          <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Ex: 00000-00000' style={{border: '1px solid black'}} className='rounded-lg px-2 py-1 w-full' />
        </div>
        <div className='flex flex-col gap-4 w-full max-w-md'>
          <label className='font-bold'>Email <span style={{color: 'red'}}>*</span></label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Ex: abc@gmail.com' style={{border: '1px solid black'}} className='rounded-lg px-2 py-1 w-full' />
        </div>
    

        <h1 className='font-bold my-12 text-center md:text-left' style={{background:'linear-gradient(to right, #9390F8, #3D82D4)', padding: '10px', color: 'white', width: '100%'}}>Shop Details</h1>

        <div className='flex flex-col gap-4 w-full max-w-md'>
          <label className='font-bold'>Shop Name <span style={{color: 'red'}}>*</span></label>
          <input type="text" value={shopname} onChange={(e) => setShopname(e.target.value)} placeholder="Ex: GM Bakery" style={{border: '1px solid black'}} className='rounded-lg px-2 py-1 w-full' />
        </div>
        <div className='flex flex-col gap-4 w-full max-w-md'>
          <label className='font-bold'>Shop Category <span style={{color: 'red'}}>*</span></label>
          <input type="text" value={shopcategory} onChange={(e) => setShopcategory(e.target.value)}  placeholder='Ex: Salon, Clothing, etc' style={{border: '1px solid black'}} className='rounded-lg px-2 py-1 w-full' />
        </div>
        <div className='flex flex-col gap-4 w-full max-w-md'>
          <label className='font-bold'>Shop Address <span style={{color: 'red'}}>*</span></label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Ex: Star Street, CBE' style={{border: '1px solid black'}} className='rounded-lg px-2 py-1 w-full' />
        </div>
        <div className='flex flex-col gap-4 w-full max-w-md'>
          <label className='font-bold'>Business Type <span style={{color: 'red'}}>*</span></label>
          <select style={{border: '1px solid black'}} value={businesstype} onChange={(e) => setBusinesstype(e.target.value)} className='rounded-lg px-2 py-1 w-full'>
            <option>None</option>
            <option>Small Business</option>
            <option>Franchise</option>
            <option>Individual seller</option>
          </select>
        </div>

        <h1 className='font-bold my-12 text-center md:text-left' style={{background:'linear-gradient(to right, #9390F8, #3D82D4)', padding: '10px', color: 'white', width: '100%'}}>Promotion Details</h1>

        <div className='flex flex-col gap-4 w-full max-w-md'>
          <label className='font-bold'>Promotion Goal <span style={{color: 'red'}}>*</span></label>
          <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="Product Launch, Offer..." style={{border: '1px solid black'}} className='rounded-lg px-2 py-1 w-full' />
        </div>
        <div className='flex flex-col gap-4 w-full max-w-md'>
          <label className='font-bold'>Target Area / Locality <span style={{color: 'red'}}>*</span></label>
          <input type="text" value={targetarea} onChange={(e) => setTargetarea(e.target.value)} placeholder='Ex: Coimbatore' style={{border: '1px solid black'}} className='rounded-lg px-2 py-1 w-full' />
        </div>
        <div className='flex flex-col gap-4 w-full max-w-md'>
          <label className='font-bold'>Starting Date (₹499/day) <span style={{color: 'red'}}>*</span></label>
          <input type="text" value={startingdate} onChange={(e) => setStartingdate(e.target.value)} placeholder='Ex: 15-05-2025' style={{border: '1px solid black'}} className='rounded-lg px-2 py-1 w-full' />
        </div>
        <div className='flex flex-col gap-4 w-full max-w-md'>
          <label className='font-bold'>Ending Date <span style={{color: 'red'}}>*</span></label>
          <input type="text" value={endingdate} onChange={(e) => setEndingdate(e.target.value)} placeholder='Ex: 22-05-2025' style={{border: '1px solid black'}} className='rounded-lg px-2 py-1 w-full' />
        </div>

        

      </div>

      <div className='flex justify-center items-center m-8 py-2 rounded-full text-white text-xl bg-gradient-to-r from-[#9390F8] to-[#3D82D4]'>
        <button className='px-6 py-2 bg-transparent border-none cursor-pointer' 
        onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Register
