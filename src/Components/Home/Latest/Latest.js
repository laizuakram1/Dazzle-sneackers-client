import React from 'react';
import latestImg from '../../../assets/images/latest/latest.webp'
import latestImg2 from '../../../assets/images/latest/latest2.webp'
import latestImg3 from '../../../assets/images/latest/latest3.webp'
import '../Latest/Latest.css'

const Latest = () => {
    return (
        <div className='latest-box grid md:grid-cols-3 mt-20 ml-8'>
            <div className="hero w-96" style={{
                backgroundImage: `url(${latestImg})`,
                backgroundSize: 'cover'
            }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md latest-content">
                        <h1 className="mb-3 text-4xl font-bold">Sports Shoes</h1>
                        <h4 className='text-xl font-bold'>Start From $95.00</h4>
                    </div>
                </div>
            </div>

            <div className="hero w-96" style={{
                backgroundImage: `url(${latestImg2})`,
                backgroundSize: 'cover'
            }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md latest-content">
                        <h1 className="mb-3 text-4xl font-bold">Latest Shoes</h1>
                        <h4 className='text-xl font-bold'>Start From $90.00</h4>
                    </div>
                </div>
            </div>

            <div className="hero w-96" style={{
                backgroundImage: `url(${latestImg3})`,
                backgroundSize: 'cover'
            }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md latest-content">
                        <h1 className="mb-3 text-4xl font-bold">Office Shoes</h1>
                        <h4 className='text-xl font-bold'>Start From $87.00</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Latest;