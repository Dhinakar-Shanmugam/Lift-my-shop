import React from 'react'

const Services = () => {
  return (
    <div className="py-10" style={{ backgroundColor: '#f1f3fd', height: '100vh' }}>
        <div className='services flex flex-col md:flex-row items-center justify-between'
         style={{ width: '90%', margin: 'auto', marginTop: '100px'}}>
            <div className='bg-[white] rounded-lg shadow-lg p-6 m-4'>
                <img width="35" height="35" className='pb-3' src="https://img.icons8.com/ios-filled/50/9390f8/discount--v1.png" alt="discount--v1"/>
                <h1 className='pb-3 text-xl font-bold'>Promotion Booking</h1>
                <p>Easily book promotions for your shop through our website.</p>
            </div>
            <div className='bg-[white] rounded-lg shadow-lg p-6 m-4'>
                <img width="35" height="35" className='pb-3' src="https://img.icons8.com/ios-filled/50/9390f8/business-network.png" alt="business-network"/>
                <h1 className='pb-3 text-xl font-bold'>Influencer Connect</h1>
                <p>We help connect your shop with local influencers.</p>
            </div>
            <div className='bg-[white] rounded-lg shadow-lg p-6 m-4'    >
                <img width="40" height="40" className='pb-3' src="https://img.icons8.com/ios-filled/50/9390f8/cheap-2.png" alt="cheap-2"/>
                <h1 className='pb-3 text-xl font-bold'>Payment Handling</h1>
                <p>We take care of payments between you and influencers.</p>
            </div>
        </div>
    </div>     
            
  )
}

export default Services
