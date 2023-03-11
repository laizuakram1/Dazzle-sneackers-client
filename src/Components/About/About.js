import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import OurTeam from './OurTeam/OurTeam';
import State from './State/State';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <State></State>
            <OurTeam></OurTeam>
        </div>
    );
};

export default About;