import React from 'react';
import {TbTruckDelivery} from 'react-icons/tb'

const Services = () => {
    return (
        <div className='mx-6 bg-base-200 mt-20 rounded'>
            <div className='grid md:grid-cols-4 py-20 px-10'>
                <div>
                    <p className='text-xl'><TbTruckDelivery className='inline text-6xl text-red-400 mr-5'/>Free Home Delivery</p>
                </div>
                <div>
                    <p className='border-l-2 pl-5 text-xl'><TbTruckDelivery className='inline text-6xl text-red-400 mr-5'/>Secure Payment</p>
                </div>
                <div>
                    <p className='border-l-2 pl-5 text-xl'><TbTruckDelivery className='inline text-6xl text-red-400 mr-5'/>Order Discount</p>
                </div>
                <div>
                    <p className='border-l-2 pl-5 text-xl'><TbTruckDelivery className='inline text-6xl text-red-400 mr-5'/>24/7 Support</p>
                </div>
                
            </div>
        </div>
    );
};

export default Services;