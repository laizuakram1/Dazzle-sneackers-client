import React from 'react';
import { Link, useParams } from 'react-router-dom';
import aboutBg from '../../../assets/images/about/bg3.webp'

const CartBanner = () => {
    return (
        <div>
            <div className="hero h-96 bg-right-bottom" style={{ backgroundImage: `url(${aboutBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className='text-6xl font-bold mb-5 w-full'>SHOPPING CART</h1>
                        <h3 className='text-2xl cursor-pointer'><Link to='/'><span className='hover:text-red-400 ease-out duration-500'>HOME</span> </Link><span className='text-red-400'>// SHOPPING CART </span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartBanner;