// import React from 'react';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "../HomeSlider/HomeSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import '../HomeSlider/HomeSlider.css'
// import required modules
import { Pagination } from "swiper";
import slideImg from '../../../assets/images/slider/slider.webp'
import slideImg2 from '../../../assets/images/slider/slider2.webp'

const HomeSlider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="home-slider"
            >
                <SwiperSlide>
                    <img src={slideImg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImg2} alt="" />
                </SwiperSlide>
               
                
            </Swiper>
        </>

    );
};

export default HomeSlider;