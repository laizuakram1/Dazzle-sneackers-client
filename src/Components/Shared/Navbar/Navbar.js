import React from 'react';
import '../Navbar/Navbar.css'
import { RiPhoneFill } from 'react-icons/ri'
import { FaEnvelope } from 'react-icons/fa'
import { BiUserCircle } from 'react-icons/bi'
import { BsHeart } from 'react-icons/bs'
import { CgShoppingBag } from 'react-icons/cg'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="flex-1">
                    <p>World Wide Completely Free Returns and Free Shipping</p>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal">
                        <li><a> <RiPhoneFill className='text-xl text-red-400' />+88 112345</a></li>
                        <li ><a className='border-x-2'> <FaEnvelope className='text-xl text-red-400' />laizuakram98@gmail.com</a></li>
                        <li><a> <BiUserCircle className='text-2xl text-red-400' />Account</a></li>

                    </ul>
                </div>
            </div>

            {/* nav2 */}
            <div className="navbar bg-base-100 p-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <h2 className='text-2xl bold'>Dazzle</h2>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered w-96" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="navbar-end text-red-400">
                    <BsHeart className='text-3xl mr-5' />
                    <CgShoppingBag className='text-3xl mr-5' />
                </div>
            </div>

            {/* nav3 */}
            <div className="navbar bg-red-500 nav-3">
                <div className="navbar-start w-96">
                    <div className="dropdown lg:hidden">
                        <label htmlFor='menu' tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>About</Link></li>
                            <li><Link to='/'>Pages</Link></li>
                            <li><Link to='/'>Shop</Link></li>
                            <li><Link to='/'>Blog</Link></li>
                            <li><Link to='/'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <ul className="menu menu-horizontal rounded-box text-slate-100	">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/'>Pages</Link></li>
                        <li><Link to='/'>Shop</Link></li>
                        <li><Link to='/'>Blog</Link></li>
                        <li><Link to='/'>Contact</Link></li>

                    </ul>
                </div>
                <div className="navbar-end hidden">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;