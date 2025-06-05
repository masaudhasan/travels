"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { reviewData } from "@/data/data";
import { FaStar } from "react-icons/fa";

const ReviewSlider = () => {
  return (
    <div>
        <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className='md:w-[450px] w-[90%] h-[300px] md:h-[350px]' >
            {reviewData.map((data)=>{
                return (
                    <SwiperSlide key={data.id} className='bg-white rounded-3xl block' >
                        <div className="w-[80%] mx-auto mt-16">
                            {/* Review Text */}
                            <p className="text-xs sm:text-sm md:text-base font-semibold">{data.review}</p>
                            {/* Icon */}
                            <div className="flex items-center pt-4 ">
                                <FaStar className=" md:w-6 md:h-6 w-3 h-3 text-yellow-600"/>
                                <FaStar className=" md:w-6 md:h-6 w-3 h-3 text-yellow-600"/>
                                <FaStar className=" md:w-6 md:h-6 w-3 h-3 text-yellow-600"/>
                                <FaStar className=" md:w-6 md:h-6 w-3 h-3 text-yellow-600"/>
                                <FaStar className=" md:w-6 md:h-6 w-3 h-3 text-yellow-600"/>
                            </div>
                            {/* User profile */}
                            <div className="mt-10 ">
                                <div className="flex items-center space-x-4">
                                    <img src={data.image} alt="client" width={60} height={60} className=" rounded-full"/>

                                    <div>
                                        <p className="text-sm sm:text-lg font-semibold">{data.name}</p>
                                        <p className="text-gray-600 text-xs sm:text-base">Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default ReviewSlider
