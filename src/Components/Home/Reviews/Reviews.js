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
import review from "../../../assets/images/review/member.webp";
import review2 from "../../../assets/images/review/member2.webp";
import review3 from "../../../assets/images/review/member3.webp";
import review4 from "../../../assets/images/review/member4.webp";

const Reviews = () => {
    return (
      <div>
        <h3 className="text-4xl font-extrabold text-center my-20">
          Customer Reviews
        </h3>
        <div className="Reviews">
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
                <small className="text-sm mt-3">
                  "Really awesome their products. Time to time delivery."
                </small>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="avatar grid md:grid-cols-1">
                <div className="w-24 rounded-full mx-20">
                  <img src={review2} />
                </div>
                <small className="text-sm mt-3">
                  "Dazzle is on of the best premium quality sneackers provider."
                </small>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="avatar grid md:grid-cols-1">
                <div className="w-24 rounded-full mx-20">
                  <img src={review3} />
                </div>
                <small className="text-sm mt-3">
                  "Thanks Dazzle! Provide quality full sneackers"
                </small>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="avatar grid md:grid-cols-1">
                <div className="w-24 rounded-full mx-20">
                  <img src={review4} />
                </div>
                <small className="text-sm mt-3">
                  "Really awesome their products. I order again."
                </small>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
};

export default Reviews;