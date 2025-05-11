import React from 'react'

const Services = () => {
  return (
    <div className="py-10" style={{ backgroundColor: '#f1f3fd', height: '100vh' }}>
        <div className='services flex flex-col md:flex-row items-center justify-between'
         style={{ width: '90%', margin: 'auto' }}>
            <div className='bg-[white] rounded-lg shadow-lg p-6 m-4'>
                <h1>Promotion Booking</h1>
                <p>Easily book promotions for your shop through our website.</p>
            </div>
            <div className='bg-[white] rounded-lg shadow-lg p-6 m-4'>
                <h1>Influencer Connect</h1>
                <p>We help connect your shop with local influencers.</p>
            </div>
            <div className='bg-[white] rounded-lg shadow-lg p-6 m-4'>
                <h1>Payment Handling</h1>
                <p>We take care of payments between you and influencers.</p>
            </div>
        </div>
    </div>     
            
  )
}

export default Services
