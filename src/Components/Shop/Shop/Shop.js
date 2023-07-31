import React from 'react';
import "../Shop/Shop.css"
import ShopBanner from '../ShopBanner/ShopBanner';
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaList } from 'react-icons/fa'
import Products from '../Products/Products';
import ShopSidebar from '../ShopSidebar/ShopSidebar';

const Shop = () => {
    return (
        <div>
            <ShopBanner></ShopBanner>
            <div className="product-container mx-5 mt-20 flex">
                <div className="left-sidebar max-w-xl">
                    <ShopSidebar></ShopSidebar>
                </div>
                <div className="right-product-items w-full mx-5">
                    <div className="product-nav w-full border rounded mb-5">
                        <div className="navbar bg-base-100">
                            <div className="navbar-start">
                                <div>
                                    <p>12 product found of 30</p>
                                </div>
                            </div>
                            <div className="navbar-center">
                                <BsFillGrid3X3GapFill className='text-xl mr-5 active:text-red-400' />
                                <FaList className='text-xl active:text-red-400' />
                            </div>
                            <div className="navbar-end">
                                <div className="navbar-start">
                                    <select className="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Sort by :</option>
                                        <option>price</option>
                                        <option>popular</option>
                                        <option>sneackers</option>
                                        <option>trendy</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Products></Products>
                </div>
            </div>
        </div>
    );
};

export default Shop;