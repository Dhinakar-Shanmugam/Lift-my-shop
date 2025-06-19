import React from 'react';
import admin from '../assets/images/Admin.png';

const Admin = () => {
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
          <h1 className="text-3xl font-bold mb-2">Hello Chief!</h1>
          <p className="text-lg">
            Here are the latest bookings from shop owners. Review, assign influencers,
            and keep promotions running smoothly.
          </p>
        </div>
      </div>

      <div>{/* Future bookings or admin dashboard content here */}</div>
    </div>
  );
};

export default Admin;
