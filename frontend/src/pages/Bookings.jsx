import React, { useState, useEffect } from 'react';
import axios from 'axios';
import admin from '../assets/images/Admin.png';
import { useParams } from 'react-router-dom';

 // Fetch bookings for the logged-in user

const Bookings = () => {

  const [bookings, setBookings] = useState([]);
 

  const {userId} = useParams();
  useEffect(() => { 
  axios
    .get(`http://localhost:3000/api/bookings/user/${userId}`)
    .then((response) => {
      setBookings(response.data.bookings);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);


  return (
    <div>
      <div
        className="text-white flex flex-col md:flex-row p-5 gap-6 justify-evenly items-center"
        style={{ background: 'linear-gradient(to right, #9390F8, #3D82D4)' }}
      >
        <div className="w-full md:w-auto flex justify-center">
          <img src={admin} alt="admin" className="w-60 h-auto" />
        </div>
        <div className="text-center md:text-left w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">Hello Boss!</h1>
          <p className="text-lg">
            Here are your latest promotion bookings. Track their status, manage details, and stay updated on your shop’s marketing progress.
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto p-5'>
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <div key={index} className='p-5 bg-white shadow-md rounded-lg mt-5'>
              <p><span className='font-semibold'>Order ID :</span> {booking._id}</p>
              <p><span className='font-semibold'>User ID :</span> {booking.userid}</p>
              <p><span className='font-semibold'>User Name :</span> {booking.fullname}</p>
              <p><span className='font-semibold'>Mobile No :</span> {booking.number}</p>
              <p><span className='font-semibold'>Email :</span> {booking.email}</p>
              <p><span className='font-semibold'>Shop Name :</span> {booking.shopname}</p>
              <p><span className='font-semibold'>Shop Category :</span> {booking.shopcategory}</p>
              <p><span className='font-semibold'>Shop Address :</span> {booking.address}</p>
              <p><span className='font-semibold'>Business Type :</span> {booking.businesstype}</p>
              <p><span className='font-semibold'>Goal:</span> {booking.goal}</p>
              <p><span className='font-semibold'>Target Area :</span> {booking.targetarea}</p>
              <p><span className='font-semibold'>Starting Date :</span> {booking.startingdate}</p>
              <p><span className='font-semibold'>Ending Date :</span> {booking.endingdate}</p>
              <p><span className='font-semibold'>Booked At :</span> {new Date(booking.createdAt).toLocaleString()}</p>
              <p><span className='font-semibold'>Updated At :</span> {new Date(booking.updatedAt).toLocaleString()}</p>

              <div className='mt-3'>
                <button className='mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  Update Details
                </button>
                <button className='mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                  Cancel Order
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500 mt-10'>No bookings available right now.</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;
