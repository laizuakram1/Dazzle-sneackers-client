import React from 'react';
import { BsFacebook, BsYoutube, BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { GiRunningShoe } from 'react-icons/gi'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-800 text-white mt-32">
                <div>
                    <GiRunningShoe className='text-6xl' />
                    <p><span className='text-2xl font-bold text-red-500'>DAZZLE.</span><br />INTERNATIONAL QUALITY FOOTWEAR</p>
                    <div className='grid grid-cols-4 gap-3'>
                        <BsFacebook className='text-4xl bg-black text-white p-2 rounded-md hover:bg-red-500 ease-in cursor-pointer' />
                        <FaLinkedinIn className='text-4xl bg-black text-white p-2 rounded-md hover:bg-red-500 ease-in cursor-pointer' />
                        <BsYoutube className='text-4xl bg-black text-white p-2 rounded-md hover:bg-red-500 ease-in cursor-pointer' />
                        <BsTwitter className='text-4xl bg-black text-white p-2 rounded-md hover:bg-red-500 ease-in cursor-pointer' />
                    </div>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Home Delivery</a>
                    <a className="link link-hover">International Quality</a>
                    <a className="link link-hover">Warranty / Guaranty</a>
                    <a className="link link-hover">Replacement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">Dazzle Shoe ltd.</a>
                    <a className="link link-hover">Dazzle Palace</a>
                    <a className="link link-hover">Dazzle</a>
                    <a className="link link-hover">Sneackers King</a>
                </div>
                <div>
                    <span className="footer-title">Contacts</span>
                    <p>Main Branch: Shyamoly Square,Mohammadpur,Dhaka</p>
                    <p>Call: +56456754</p>
                    <p>E-mail: <a href="#" className='link link-hover'>dazzle@gmail.com</a></p>
                </div>
            </footer>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                <div className="items-center grid-flow-col">
                    <p>&copy;{new Date().getFullYear()} | Dazzle.</p>
                </div>
            </footer>
        </div>

    );
};

export default Footer;