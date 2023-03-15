import React from 'react';
import CartBanner from '../CardBanner/CartBanner';
import CartTable from './CartTable/CartTable';

const Cart = () => {
    return (
        <div>
            <CartBanner></CartBanner>
            <CartTable></CartTable>
            <div className='flex justify-between mx-16'>
                <button className="btn btn-wide hover:bg-red-500 ease-out duration-500 hover:border-0">Continue Shopping</button>
                <div>
                <button className="btn btn-outline mr-3">Clear Cart</button>
                <button className="btn btn-outline">Update Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;