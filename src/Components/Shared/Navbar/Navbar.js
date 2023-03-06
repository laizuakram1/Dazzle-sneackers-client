import React from 'react';
import '../Navbar/Navbar.css'
import { RiPhoneFill } from 'react-icons/ri'
import {FaEnvelope} from 'react-icons/fa'
import {BiUserCircle} from 'react-icons/bi'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="flex-1">
                    <p>World Wide Completely Free Returns and Free Shipping</p>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal">
                        <li><a> <RiPhoneFill className='text-xl text-red-400'/>+88 112345</a></li>
                        <li ><a className='border-x-2'> <FaEnvelope className='text-xl text-red-400'/>laizuakram98@gmail.com</a></li>
                        <li><a> <BiUserCircle className='text-2xl text-red-400'/></a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;