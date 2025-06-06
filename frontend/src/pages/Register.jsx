import React from 'react'
import form from '../assets/images/form.png';

{/* style={{backgroundColor: '#9390F8', padding: '10px', color: 'white'}} */ }

const Register = () => {
  return (
    <div>
      <div className='h-min flex flex-col md:flex-row items-center justify-around px-4 md:px-0'style={{background:'linear-gradient(to right, #9390F8, #3D82D4)'}} >
        <div className='w-full md:w-1/2 flex justify-center'>
            <img src={form} alt="form"/>
        </div>
        <div className='mx-20'>
           <h1 className='text-3xl font-bold text-white'>Promotion Booking Form</h1>
           <p className='text-white py-3'>Please fill in your shop and contact details. We’ll connect you with trusted local influencers to boost your business.</p>
        </div>
      </div> 
      <div style={{ width: '90%', margin: 'auto' }} className='py-10 justify-center flex flex-col gap-4 items-center'>

        <div className='flex flex-col gap-4'>
            <label className=' font-bold'>Full Name <span style={{color: 'red'}}>*</span></label>
            <input type="text" placeholder="Ex: Dhinakar" style={{border: '1px solid black'}} className='rounded-lg px-2 py-1' />
        </div>
        <div className='flex flex-col gap-4 '>
            <label className=' font-bold'>Mobile Number <span style={{color: 'red'}}>*</span></label>
            <input type="text" placeholder='Ex: 00000-00000' style={{border: '1px solid black'}} className='rounded-lg  px-2 py-1'/>
        </div>
        <div className='flex flex-col gap-4 '>
            <label className=' font-bold'>Email <span style={{color: 'red'}}>*</span></label>
            <input type="email" placeholder='Ex: abc@gmail.com' style={{border: '1px solid black'}} className='rounded-lg  px-2 py-1'/>
        </div>
        <div className='flex flex-col gap-4 '>
            <label className=' font-bold'>Password <span style={{color: 'red'}}>*</span></label>
            <input type="password" style={{border: '1px solid black'}} className='rounded-lg  px-2 py-1'/>
        </div>


        <h1 className=' font-bold my-12' style={{background:'linear-gradient(to right, #9390F8, #3D82D4)', padding: '10px', color: 'white', width: '95%'}}>Shop Details</h1>

        <div className='flex flex-col gap-4'>
            <label className=' font-bold'>Shop Name <span style={{color: 'red'}}>*</span></label>
            <input type="text" placeholder="Ex: GM Bakery" style={{border: '1px solid black'}} className='rounded-lg px-2 py-1' />
        </div>
        <div className='flex flex-col gap-4 '>
            <label className=' font-bold'>Shop Category <span style={{color: 'red'}}>*</span></label>
            <input type="text" placeholder='Ex: Salon, Clothing, etc' style={{border: '1px solid black'}} className='rounded-lg  px-2 py-1'/>
        </div>
        <div className='flex flex-col gap-4 '>
            <label className=' font-bold'>Shop Address <span style={{color: 'red'}}>*</span></label>
            <input type="email" placeholder='Ex: Star Street, CBE' style={{border: '1px solid black'}} className='rounded-lg  px-2 py-1'/>
        </div>
        <div className='flex flex-col gap-4 '>
            <label className=' font-bold'>Business Type <span style={{color: 'red'}}>*</span></label>
            <select style={{border: '1px solid black'}} className='rounded-lg  px-2 py-1'>
              <option >None</option>
              <option >Small Business</option>
              <option>Franchise</option>
              <option>Individual seller</option>
            </select>
        </div>

        <h1 className=' font-bold my-12' style={{background:'linear-gradient(to right, #9390F8, #3D82D4)', padding: '10px', color: 'white', width: '95%'}}>Promotion Details</h1>

        <div className='flex flex-col gap-4'>
            <label className=' font-bold'>Promotion Goal <span style={{color: 'red'}}>*</span></label>
            <input type="text" placeholder="Product Launch, Offer..." style={{border: '1px solid black'}} className='rounded-lg px-2 py-1' />
        </div>
        <div className='flex flex-col gap-4 '>
            <label className=' font-bold'>Target Area / Locality <span style={{color: 'red'}}>*</span></label>
            <input type="email" placeholder='Ex: Coimbatore' style={{border: '1px solid black'}} className='rounded-lg  px-2 py-1'/>
        </div>
        <div className='flex flex-col gap-4 '>
            <label className=' font-bold'>Preferred Date <span style={{color: 'red'}}>*</span></label>
            <input type="password" style={{border: '1px solid black'}} className='rounded-lg  px-2 py-1'/>
        </div>

       </div>
    </div>
  )
}

export default Register
