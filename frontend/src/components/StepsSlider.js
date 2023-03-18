import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import steps img
import Step1 from '../utils/img/step 1.png'

// import required modules
import { Pagination, Navigation } from "swiper";

export default function StepSlider() {
    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex flex-row max-w-[90%] ml-[5%] mt-8">
                        <div className="max-w-[25%] text-gray-800 text-xl">
                            <div className="font-bold text-3xl text-gray-900">Step #</div>
                            <div className="mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, libero ut corporis ullam, incidunt quos optio autem itaque assumenda voluptas consequatur aliquid placeat blanditiis inventore deserunt quasi. Nesciunt, blanditiis doloribus!</div>

                            </div>
                        <div className="ml-8"><img className="" src={Step1} alt="" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-row max-w-[90%] ml-[5%] mt-8">
                        <div className="max-w-[25%] text-gray-800 text-xl">
                            <div className="font-bold text-3xl text-gray-900">Step #</div>
                            <div className="mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, libero ut corporis ullam, incidunt quos optio autem itaque assumenda voluptas consequatur aliquid placeat blanditiis inventore deserunt quasi. Nesciunt, blanditiis doloribus!</div>

                            </div>
                        <div className="ml-8"><img className="" src={Step1} alt="" /></div>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="flex flex-row max-w-[90%] ml-[5%] mt-8">
                        <div className="max-w-[25%] text-gray-800 text-xl">
                            <div className="font-bold text-3xl text-gray-900">Step #</div>
                            <div className="mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, libero ut corporis ullam, incidunt quos optio autem itaque assumenda voluptas consequatur aliquid placeat blanditiis inventore deserunt quasi. Nesciunt, blanditiis doloribus!</div>

                            </div>
                        <div className="ml-8"><img className="" src={Step1} alt="" /></div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}
