import React, { useEffect, useState } from 'react';
import {FaRegCalendarAlt} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'

const LatestBlog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data.slice(0, 3)))
    }, [])
    return (
        <div>
            <h3 className='text-5xl font-bold text-center py-20'>Latest Blog</h3>
            <div className='grid md:grid-cols-3 ml-8'>
                {
                    blogs.map((blog, i) => <div className="card w-96">
                        <figure>
                            <img src={blog.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-actions justify-left mt-5 ml-3">
                            <div className="badge badge-outline"><FaRegCalendarAlt className='text-red-400 mr-2'/>{blog.createdDate}</div>
                            <div className="badge badge-outline"><FaUserAlt className='text-red-400 mr-2'/>{blog.creator}</div>
                        </div>
                        <div className="card-body px-3">
                            <h2 className="card-title text-left">{blog.title}</h2>
                            <div className="card-actions w-full">
                                <button className="blog-button">Read More...</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default LatestBlog;