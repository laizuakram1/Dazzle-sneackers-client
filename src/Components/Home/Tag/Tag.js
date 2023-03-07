import React from 'react';
import tagImg from '../../../assets/images/tag/tag.webp'
import tagImg2 from '../../../assets/images/tag/tag2.webp'
import tagImg3 from '../../../assets/images/tag/tag3.webp'

const Tag = () => {
    return (
        <div className='grid md:grid-cols-3 mt-8 ml-8'>
            <div className="card w-96 image-full">
                <figure><img src={tagImg} alt="Shoes" /></figure>
                <div className="card-body mx-auto justify-center items-center border h-40 mt-14">
                    <h3 className="text-xl bold">Sale 50% Off</h3>
                    <h1 className='text-2xl font-semibold'>SPORTS SHOE</h1>
                </div>
            </div>
            <div className="card w-96 shadow-xl image-full">
                <figure><img src={tagImg2} alt="Shoes" /></figure>
                <div className="card-body mx-auto justify-center items-center border h-40 mt-14">
                    <h3 className="text-xl bold">Sale 50% Off</h3>
                    <h1 className='text-2xl font-semibold'>NEW SNEACKERS</h1>
                </div>
            </div>
            <div className="card w-96 shadow-xl image-full">
                <figure><img src={tagImg3} alt="Shoes" /></figure>
                <div className="card-body mx-auto justify-center items-center border h-40 mt-14">
                    <h3 className="text-xl bold">Sale 50% Off</h3>
                    <h1 className='text-2xl font-semibold'>NEW ARRIVAL</h1>
                </div>
            </div>
        </div>
    );
};

export default Tag;