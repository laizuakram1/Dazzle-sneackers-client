import React from 'react';
import BestSeller from './BestSeller/BestSeller';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import HomeSlider from './HomeSlider/HomeSlider';
import SavingsTag from './SavingsTag/SavingsTag';
import Services from './Services/Services';
import Tag from './Tag/Tag';

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <Tag></Tag>
            <FeaturedProducts></FeaturedProducts>
            <SavingsTag></SavingsTag>
            <Services></Services>
            <BestSeller></BestSeller>
        </div>
    );
};

export default Home;