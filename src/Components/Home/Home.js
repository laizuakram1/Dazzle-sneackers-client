import React from 'react';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import HomeSlider from './HomeSlider/HomeSlider';
import SavingsTag from './SavingsTag/SavingsTag';
import Tag from './Tag/Tag';

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <Tag></Tag>
            <FeaturedProducts></FeaturedProducts>
            <SavingsTag></SavingsTag>
        </div>
    );
};

export default Home;