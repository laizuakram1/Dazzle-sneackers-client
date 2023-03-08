import React from 'react';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import HomeSlider from './HomeSlider/HomeSlider';
import Tag from './Tag/Tag';

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <Tag></Tag>
            <FeaturedProducts></FeaturedProducts>
        </div>
    );
};

export default Home;