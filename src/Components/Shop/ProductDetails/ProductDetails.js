import React from 'react';
// import { useParams } from 'react-router';
import ProductDetailsBanner from '../ProductDetailsBanner/ProductDetailsBanner';
import "../ProductDetails/ProductDetails.css";
import { CirclePicker } from 'react-color';


const ProductDetails = () => {
    // const { id } = useParams();
    // const [products, setProducts] = useState([])




    return (
        <div>
            <ProductDetailsBanner></ProductDetailsBanner>
            <h3>Products details here........</h3>
            <div className="product-details-container">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2">
                        <div>
                            <img src="https://htmldemo.net/shome/shome/assets/img/shop/product-single/1.webp" className="max-w-md rounded-lg" />
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold">Lather Sports Shoe</h1>
                            <h3 className='text-4xl font-bold mt-5'>$210</h3>
                            <div className="rating mt-4">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />

                                <p>(5 customer reviews)</p>
                            </div>
                            <div className="divider"></div>

                            <p className="py-3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <div className='flex flex-row cursor-pointer'>
                                <span className='text-2xl mr-8'>Color</span>
                                <div className="rounded-full bg-slate-500 border-2 border-blue-500 w-8 h-8 mr-2"></div>
                                <div className="rounded-full bg-blue-500 border-2 border-slate-500 w-8 h-8 mr-2"></div>
                                <div className="rounded-full bg-cyan-500 border-2 border-orange-400 w-8 h-8 mr-2"></div>
                                <div className="rounded-full bg-orange-500 border-2 border-teal-400 w-8 h-8 mr-2"></div>

                            </div>
                            <div className='mt-5 mb-5 cursor-pointer'>
                                <span className='text-2xl mr-8'>Size</span>
                                <div className="avatar placeholder ml-5">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-8 mr-2">
                                        <span className="text-xs">M</span>
                                    </div>
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-8 mr-2">
                                        <span className="text-xs">L</span>
                                    </div>
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-8 mr-2">
                                        <span className="text-xs">XL</span>
                                    </div>
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-8 mr-2">
                                        <span className="text-xs">XXL</span>
                                    </div>
                                </div>
                            </div>

                            <button className="btn btn-warning">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;