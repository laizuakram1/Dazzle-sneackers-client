import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import '../ShopSidebar/ShopSidebar.css';

//react color picker
import { BlockPicker } from 'react-color';


const ShopSidebar = () => {

    const [currentColor, setCurrentColor] = useState("#ff6")

    const handleChange = (color) =>{
        setCurrentColor(color.hex)
        
    }
    return (
        <div className='sidebar-container'>
            <div className="card w-full bg-base-200 mb-8">
                <div className="card-body">
                    <h2 className="card-title">Top Categories</h2>
                    <span className='border-2 w-40 mb-5'></span>
                    <Link className='hover:text-red-400 ease-out duration-500'>Sneackers(20)</Link>
                    <Link className='hover:text-red-400 ease-out duration-500'>Converse(10)</Link>
                    <Link className='hover:text-red-400 ease-out duration-500'>Formal Shoe(15)</Link>
                    <Link className='hover:text-red-400 ease-out duration-500'>Flat Shoe(8)</Link>
                    <Link className='hover:text-red-400 ease-out duration-500'>Loofer(12)</Link>

                </div>
            </div>
            <div className="card w-full bg-base-200 mb-8">
                <div className="card-body">
                    <h2 className="card-title">Price Filter</h2>
                    <span className='border-2 w-40 mb-5'></span>
                    <RangeSlider className='min-250'/>

                </div>
            </div>
            <div className="card w-full bg-base-200 mb-8">
                <div className="card-body">
                    <h2 className="card-title">Color</h2>
                    <span className='border-2 w-40 mb-5'></span>
                    <BlockPicker 
                    color={currentColor}
                    onChangeComplete={handleChange}
                    />

                </div>
            </div>
            <div className="card w-full bg-base-200 mb-8">
                <div className="card-body">
                    <h2 className="card-title">Size</h2>
                    <span className='border-2 w-40 mb-5'></span>
                    <Link className='hover:text-red-400 ease-out duration-500'>S (20)</Link>
                    <Link className='hover:text-red-400 ease-out duration-500'>M (10)</Link>
                    <Link className='hover:text-red-400 ease-out duration-500'>L (15)</Link>
                    <Link className='hover:text-red-400 ease-out duration-500'>XL (8)</Link>
                    <Link className='hover:text-red-400 ease-out duration-500'>XXL (12)</Link>

                </div>
            </div>
            <div className="card w-full bg-base-200 mb-8">
                <div className="card-body">
                    <h2 className="card-title">Brand</h2>
                    <span className='border-2 w-40 mb-5'></span>
                    <Link className='hover:text-red-400 ease-out duration-500'>Nike(20)</Link>
                    <Link className='hover:text-red-400 ease-out duration-500'>Jordan(10)</Link>
                    <Link className='hover:text-red-400 ease-out duration-500'>Adidas(15)</Link>
                    <Link className='hover:text-red-400 ease-out duration-500'>Puma(8)</Link>
                    <Link className='hover:text-red-400 ease-out duration-500'>Vans(12)</Link>
                    <Link className='hover:text-red-400 ease-out duration-500'>Converse(5)</Link>

                </div>
            </div>
        </div>
    );
};

export default ShopSidebar;