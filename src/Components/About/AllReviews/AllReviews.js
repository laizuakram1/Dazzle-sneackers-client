import React from 'react';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import review from '../../../assets/images/our-team/member.webp'

// Import Swiper styles
import 'swiper/css';
import '../AllReviews/AllReviews.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const AllReviews = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='my-10 mx-5'>
            <h3 className='text-4xl font-bold text-center py-10'>All Reviews</h3>
            <div className='flex review-container'>
                <div className='review-slide-container'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="all-reviews-slider"
                    >
                        <SwiperSlide>
                            <div>
                                <p className='text-sm w-72 text-center mt-5 ml-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, autem. Vero temporibus magnam aut hic!</p>
                                <div className="divider text-red-5000"></div>
                                <div className='review-rattings grid md:grid-cols-2 mt-5'>
                                    <div>
                                        <div className="avatar mr-10">
                                            <div className="w-24 rounded-full">
                                                <img src={review} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>Laizu</h3>
                                        <p>React Developer</p>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <p className='text-sm w-72 text-center mt-5 ml-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, autem. Vero temporibus magnam aut hic!</p>
                                <div className="divider text-red-5000"></div>
                                <div className='review-rattings grid md:grid-cols-2 mt-5'>
                                    <div>
                                        <div className="avatar mr-10">
                                            <div className="w-24 rounded-full">
                                                <img src={review} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>Laizu</h3>
                                        <p>React Developer</p>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <p className='text-sm w-72 text-center mt-5 ml-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, autem. Vero temporibus magnam aut hic!</p>
                                <div className="divider text-red-5000 mr-10"></div>
                                <div className='review-rattings grid md:grid-cols-2 mt-5'>
                                    <div>
                                        <div className="avatar">
                                            <div className="w-24 rounded-full">
                                                <img src={review} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>Laizu</h3>
                                        <p>React Developer</p>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <p className='text-sm w-72 text-center mt-5 ml-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, autem. Vero temporibus magnam aut hic!</p>
                                <div className="divider text-red-5000 mr-10"></div>
                                <div className='review-rattings grid md:grid-cols-2 mt-5'>
                                    <div>
                                        <div className="avatar">
                                            <div className="w-24 rounded-full">
                                                <img src={review} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>Laizu</h3>
                                        <p>React Developer</p>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <p className='text-sm w-72 text-center jusitify-center mt-5 ml-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, autem. Vero temporibus magnam aut hic!</p>
                                <div className="divider text-red-5000 mr-10"></div>
                                <div className='review-rattings grid md:grid-cols-2 mt-5'>
                                    <div>
                                        <div className="avatar mr-10">
                                            <div className="w-24 rounded-full">
                                                <img src={review} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>Laizu</h3>
                                        <p>React Developer</p>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </div>
                <div className='review-description'>
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">See what our client says!</h2>
                            <p>Our every curious client give review after buy our products.You can buy our product after see all reviews.</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllReviews;