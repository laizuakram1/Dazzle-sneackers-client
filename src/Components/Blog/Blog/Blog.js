import React, { useEffect, useState } from "react";
import BlogBanner from "./BlogBanner/BlogBanner";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dazzle-sneackers-server.onrender.com/api/v1/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <BlogBanner></BlogBanner>
      <div className="grid md:grid-cols-3 ml-8 mt-5">
        {blogs.map((blog, i) => (
          <div className="card w-96">
            <figure>
              <img src={blog.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-actions justify-left mt-5 ml-3">
              <div className="badge badge-outline">
                <FaRegCalendarAlt className="text-red-400 mr-2" />
                {blog.createdDate}
              </div>
              <div className="badge badge-outline">
                <FaUserAlt className="text-red-400 mr-2" />
                {blog.creator}
              </div>
            </div>
            <div className="card-body px-3">
              <h2 className="card-title text-left">{blog.title}</h2>
              <div className="card-actions w-full">
                <button
                  className="blog-button">Read More...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Blog;
