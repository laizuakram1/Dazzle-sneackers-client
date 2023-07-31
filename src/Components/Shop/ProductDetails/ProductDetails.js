import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
import ProductDetailsBanner from '../ProductDetailsBanner/ProductDetailsBanner';
import "../ProductDetails/ProductDetails.css";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHeart } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

// tabs import component
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    
    const [products, setProducts] = useState([])
    const [counter, setCounter] = useState(0);
    const [countError, setCountError] = useState('')

    useEffect(() =>{
        fetch(`https://dazzle-sneackers-server.onrender.com/api/v1/sneackers/${id}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[id])

    const increase = () => {
        setCountError('')
        if (counter > 10) {
            return setCountError('this quantity not available!')
        }
        setCounter(count => count + 1);
    };
    const decrease = () => {
        setCountError('')
        if (counter < 0) {
            return setCountError('select positive number')
        }
        setCounter(count => count - 1);
    };

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleCartItems = () =>{

       fetch(`https://dazzle-sneackers-server.onrender.com/api/v1/sneackers`, {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(products),
       })
         .then((res) => res.json())
         .then((data) => console.log(data));
    }



    return (
      <div>
        <ProductDetailsBanner></ProductDetailsBanner>
        <div className="product-details-container">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2">
              <div className="flex justify-center">
                <img src={products?.imageUrl} className="max-w-md rounded-lg" />
              </div>
              <div>
                <h1 className="text-5xl font-bold">{products?.name}</h1>
                <h3 className="text-4xl font-bold mt-5">${products?.price}</h3>
                <div className="rating mt-4">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />

                  <p>(5 customer reviews)</p>
                </div>
                <div className="divider"></div>

                <p className="py-3">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <div className="flex flex-row cursor-pointer">
                  <span className="text-2xl mr-8">Color</span>
                  <div className="rounded-full bg-slate-500 border-2 border-blue-500 w-8 h-8 mr-2"></div>
                  <div className="rounded-full bg-blue-500 border-2 border-slate-500 w-8 h-8 mr-2"></div>
                  <div className="rounded-full bg-cyan-500 border-2 border-orange-400 w-8 h-8 mr-2"></div>
                  <div className="rounded-full bg-orange-500 border-2 border-teal-400 w-8 h-8 mr-2"></div>
                </div>
                <div className="mt-5 mb-5 cursor-pointer">
                  <span className="text-2xl mr-8">Size</span>
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
                <div className="flex cursor-pointer">
                  <div className="w-24">
                    <p className="border-2 w-10 ml-2 text-center">{counter}</p>
                    <div>
                      <AiOutlineMinus
                        onClick={decrease}
                        className="inline mr-3 font-bold border text-2xl hover:bg-red-400 ease-out duration-500 rounded"
                      />
                      <AiOutlinePlus
                        onClick={increase}
                        className="inline border font-bold text-2xl hover:bg-red-400 ease-out duration-500 rounded"
                      />
                    </div>
                    <p className="text-red-500">{countError}</p>
                  </div>
                  <Link
                    onClick={handleCartItems}
                    to=""
                    className="btn btn-warning w-36"
                  >
                    Add to Cart
                  </Link>
                  <Link
                    to={`/cart/${id}`}
                    className="btn btn-success w-36 ml-3"
                  >
                    Checkout
                  </Link>
                </div>
                <div className="flex mt-8 text-xl">
                  <p className="mr-10">
                    <AiOutlineHeart className="inline text-2xl text-red-400 mr-2" />
                    Add to Whishlist
                  </p>
                  <p>
                    <AiOutlineHeart className="inline text-2xl text-red-400 mr-2" />
                    Add to Compare
                  </p>
                </div>
                <div className="divider"></div>
                <div className="flex justify-between items-center cursor-pointer">
                  <p>
                    <span className="text-red-500">CODE:</span> DS-23
                  </p>
                  <p>
                    <span className="text-red-500 mr-3">SHARE</span>{" "}
                    <BsFacebook className="inline text-xl mr-4 hover:text-red-400 ease-out duration-500" />
                    <BsInstagram className="inline text-xl mr-4 hover:text-red-400 ease-out duration-500" />
                    <FaPinterestP className="inline text-xl mr-4 hover:text-red-400 ease-out duration-500" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-container">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Information" value="1" />
                    <Tab label="Description" value="2" />
                    <Tab label="Review(5)" value="3" />
                  </TabList>
                </Box>
                <TabPanel className="border mx-16" value="1">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae, omnis saepe! Nostrum earum excepturi deserunt
                    rerum necessitatibus laudantium sit suscipit velit,
                    officiis, ut sequi molestias repellat. Dolor vero
                    reprehenderit suscipit distinctio tempore facilis voluptas
                    molestias ad, provident corporis soluta illo rerum laborum
                    qui ex incidunt dolorem aliquid at, debitis quaerat?
                  </p>
                </TabPanel>
                <TabPanel className="border mx-16" value="2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere cum veritatis corrupti necessitatibus asperiores sint
                    accusamus reiciendis eaque mollitia dolores? Illo impedit
                    repudiandae nobis vel dolorum vero, deserunt optio tempora
                    sit sequi similique repellat animi aliquid architecto
                    voluptates repellendus omnis a? Quo debitis accusamus
                    officia nesciunt nisi. Quo, corporis voluptatibus.
                  </p>
                </TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
            </Box>
          </div>
          <div className="related-products">
            <RelatedProducts></RelatedProducts>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;