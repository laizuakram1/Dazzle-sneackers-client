import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import AllReviews from './AllReviews/AllReviews';
import LatestBlog from './LatestBlog/LatestBlog';
import OurTeam from './OurTeam/OurTeam';
import State from './State/State';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <State></State>
            <OurTeam></OurTeam>
            <AllReviews></AllReviews>
            <LatestBlog></LatestBlog>
        </div>
    );
};

export default About;