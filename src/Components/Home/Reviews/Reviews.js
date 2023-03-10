import React from 'react';

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import '../Reviews/Reviews.css'
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";
import review from '../../../assets/images/review/reviews.jpeg'

const Reviews = () => {
    return (
        <div>
            <h3 className='text-4xl font-extrabold text-center my-20'>Customer Reviews</h3>
            <div className='Reviews'>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="review-swiper"
                >
                    <SwiperSlide>
                        <div className="avatar grid md:grid-cols-1">
                            <div className="w-24 rounded-full mx-20">
                                <img src={review} />
                            </div>
                            <small className='text-sm mt-3'>Really awesome their products. Time to time delivery.</small>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="avatar grid md:grid-cols-1">
                            <div className="w-24 rounded-full mx-20">
                                <img src={review} />
                            </div>
                            <small className='text-sm mt-3'>Really awesome their products. Time to time delivery.</small>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="avatar grid md:grid-cols-1">
                            <div className="w-24 rounded-full mx-20">
                                <img src={review} />
                            </div>
                            <small className='text-sm mt-3'>Really awesome their products. Time to time delivery.</small>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="avatar grid md:grid-cols-1">
                            <div className="w-24 rounded-full mx-20">
                                <img src={review} />
                            </div>
                            <small className='text-sm mt-3'>Really awesome their products. Time to time delivery.</small>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;