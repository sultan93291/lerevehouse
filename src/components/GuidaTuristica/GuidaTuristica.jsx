import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  NextSlideSvg,
  PrevSlideSvg,
  WhiteArrowRight,
  WhiteArroleft,
} from "../common/SvgContainer/SvgContainer";
import TravelImageSlider from "./TravelImageSlider/TravelImageSlider";

const TravelDetailsSlider = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
      {/* Slider */}
      <div className="lg:w-[1600px] flex items-center relative">
        <Swiper
          loop={true}
          slidesPerView={1}
          centeredSlides={true} // Centers the active slide
          onSwiper={setSwiperRef}
          spaceBetween={0}
          autoplay={{
            delay: 3000, // Set autoplay delay in milliseconds
            disableOnInteraction: false, // Keeps autoplay after user interaction
          }}
        >
          {data.map((_, idx) => {
            return (
              <SwiperSlide key={idx} className="flex justify-center">
                <TravelImageSlider images={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Slider Navigation */}
        <div className="absolute top-1/2 z-[5] left-0 right-0 flex justify-between items-center px-4 transform -translate-y-1/2 w-full">
          <button
            onClick={() => swiperRef.slidePrev()}
            className="w-12 h-12 bg-[#000000] shadow-md rounded-full flex items-center justify-center z-20"
          >
            <WhiteArroleft />
          </button>
          <button
            onClick={() => swiperRef.slideNext()}
            className="w-12 h-12 bg-[#000000] shadow-md rounded-full flex items-center justify-center z-20"
          >
            <WhiteArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelDetailsSlider;
