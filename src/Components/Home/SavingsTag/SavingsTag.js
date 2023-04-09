import React from 'react';
import "../SavingsTag/SavingsTag.css";
import artImg from '../../../assets/images/tag/colorart.webp'
import borderImg from '../../../assets/images/tag/border.webp'
import shoe from '../../../assets/images/tag/divider1.webp'

const SavingsTag = () => {
    return (
        <div className='mt-20'>
            <div className="hero bg-current savings-tag">
                <div className="hero-content flex-col lg:flex-row p-10">
                    <img src={borderImg} className="max-w-sm rounded z-10 relative ml-20" />
                    <img src={artImg} className="max-w-sm rounded z-20 absolute left-20" />
                    <img src={shoe} className="max-w-sm rounded z-30 absolute left-20" />
                    <div className='ml-64'>
                        <p className='text-6xl text-red-500'>Saving 50%</p>
                        <h1 className="text-5xl font-bold text-white mt-5">All Online Store</h1>
                        <p className="py-6 text-3xl text-white">Offer Available all shoes & Products.</p>
                        <button className="w-36 p-4 bg-red-500 text-white rounded font-bold hover:bg-white hover:border-0 hover:text-red-500">SHOP NOW</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SavingsTag;