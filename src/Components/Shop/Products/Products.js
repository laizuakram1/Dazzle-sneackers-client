import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaExpandArrowsAlt } from 'react-icons/fa'
import { TbArrowsShuffle } from 'react-icons/tb'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('Sneackers.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='grid md:grid-cols-3'>
                {
                    products.map((product, i) => <div
                        key={i}
                        className="card w-72 bg-base-100 mb-5">
                        <figure className='cursor-pointer'>
                            <img src={product.imageUrl} alt="Shoes" className='border-2 rounded-xl border-gray-200	' />
                        </figure>
                        <div className="card-body text-left py-3 px-2 cursor-pointer">
                            <p>
                                <span className='hover:text-red-500 duration-400'>men</span>/
                                <span className='hover:text-red-400 duration:400'>women</span>
                            </p>
                            <h2 className="card-title hover:text-red-500 ease-out duration-500">{product.name}</h2>
                            <p>${product.price}</p>
                        </div>
                        <div className='card-icons absolute ml-56 mt-8'>
                            <ul>
                                <li><AiOutlineHeart className='text-3xl text-current border bg-white w-10 p-1 rounded hover:bg-red-500 hover:text-white transition-ease-out duration:500 mb-3' /></li>
                                <li><AiOutlineShoppingCart className='text-3xl text-current border bg-white w-10 p-1 rounded hover:bg-red-500 hover:text-white transition-ease-out duration:500 mb-3' /></li>
                                <li><FaExpandArrowsAlt className='text-3xl text-current border bg-white w-10 p-1 rounded hover:bg-red-500 hover:text-white transition-ease-out duration:500 mb-3' /></li>
                                <li><TbArrowsShuffle className='text-3xl text-current border bg-white w-10 p-1 rounded hover:bg-red-500 hover:text-white transition-ease-out duration:500' /></li>
                            </ul>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;