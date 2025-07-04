import React from 'react'
import shopkeeper from '../assets/images/shopkeeper.jpg';
import influencer from '../assets/images/influencer.jpg';

const Review = () => {
  return (
    <div id='customers' className="py-10" style={{ backgroundColor: '#f1f3fd', height: '100vh' }}>
        <h1 className='text-center text-3xl font-bold mb-10'>Client <span className='bg-gradient-to-r from-[#9390F8] to-[#3D82D4] bg-clip-text text-transparent'>Reviews</span> & Feedback</h1>
        <div className='services flex flex-col md:flex-row items-center justify-between'
         style={{ width: '90%', margin: 'auto', marginTop: '100px'}}>
            <div className='bg-[white] rounded-lg shadow-lg p-6 m-4'>
                <div className='flex flex-row'>
                    <div>
                        <img src={shopkeeper} style={{ height: '50px',width: '50px', borderRadius: '100%' }} width="50" height="50" alt="shopkeeper" />
                    </div>
                    <div className='pl-4'>
                        <h1 className='text-xl font-bold'>Harry Potter</h1>
                        <h1 className='pb-3 font-bold' style={{color: '#9390f8'}}>Shop Owner</h1>
                        <hr className='pb-3'/>
                    </div>
                </div>
                <div>
                    <p>"I never thought promoting my small shop could be this easy. After booking a promo, local influencers shared about my store and more people started visiting. This really helped grow my business!"</p>
                </div>
            </div>
            <div className='bg-[white] rounded-lg shadow-lg p-6 m-4'>
                <div className='flex flex-row'>
                    <div>
                        <img src={influencer} style={{width: '50px',height: '50px', borderRadius: '100%' }} width="50" height="50" alt="influencer" />
                    </div>
                    <div className='pl-4'>
                        <h1 className='text-xl font-bold'>Hermoine</h1>
                        <h1 className='pb-3 font-bold' style={{color: '#9390f8'}}>Influncer</h1>
                        <hr className='pb-3'/>
                    </div>
                </div>
                <div>
                    <p>"Working with Lift My Shop was smooth and fun! They connected me with a shop in my area, and I enjoyed promoting it. I got good reach and quick payment too. Loved the experience!"</p>
                </div>
            </div>
        </div>
    </div>   
  )
}

export default Review
