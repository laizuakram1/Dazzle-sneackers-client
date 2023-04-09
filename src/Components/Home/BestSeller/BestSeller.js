import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaExpandArrowsAlt } from 'react-icons/fa'
import { TbArrowsShuffle } from 'react-icons/tb'

const BestSeller = () => {
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/bestseller')
            .then(res => res.json())
            .then(data => setBestSeller(data))
    }, [])
    return (
      <div>
        <h3 className="text-4xl font-bold text-center my-20">Best Seller</h3>
        <div className="grid md:grid-cols-4 ml-5">
          {bestSeller.map((seller, i) => (
            <div key={i} className="card w-72 bg-base-100 mb-5">
              <figure className="cursor-pointer">
                <img
                  src={seller.imageUrl}
                  alt="Shoes"
                  className="border-2 rounded-xl border-gray-200	"
                />
              </figure>
              <div className="card-body text-left py-3 px-2 cursor-pointer">
                <p>
                  <span className="hover:text-red-500 duration-400">men</span>/
                  <span className="hover:text-red-400 duration:400">women</span>
                </p>
                <h2 className="card-title hover:text-red-500 ease-out duration-500">
                  {seller.name}
                </h2>
                <p>${seller.price}</p>
              </div>
              <div className="card-icons absolute ml-56 mt-8">
                <ul>
                  <li>
                    <AiOutlineHeart className="text-3xl text-current border bg-white w-10 p-1 rounded hover:bg-red-500 duration-500 hover:text-white transition-ease-out duration:500 mb-3" />
                  </li>
                  <li>
                    <AiOutlineShoppingCart className="text-3xl text-current border bg-white w-10 p-1 rounded hover:bg-red-500 duration-500 hover:text-white transition-ease-out duration:500 mb-3" />
                  </li>
                  <li>
                    <FaExpandArrowsAlt className="text-3xl text-current border bg-white w-10 p-1 rounded hover:bg-red-500 duration-500 hover:text-white transition-ease-out duration:500 mb-3" />
                  </li>
                  <li>
                    <TbArrowsShuffle className="text-3xl text-current border bg-white w-10 p-1 rounded hover:bg-red-500 duration-500 hover:text-white transition-ease-out duration:500" />
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default BestSeller;