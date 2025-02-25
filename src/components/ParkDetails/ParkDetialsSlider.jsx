import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  NextSlideSvg,
  PrevSlideSvg,
} from "../common/SvgContainer/SvgContainer";
import ImageSlide from "./ImageSlide";

const ParkDetailsSlider = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
      {/* Slider */}
      <div className="w-[1536px] flex items-center relative">
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
            // Get the previous, current, and next images for each slide
            const images = [
              data[(idx - 1 + data.length) % data.length], // Left image
              data[idx], // Center image
              data[(idx + 1) % data.length], // Right image
            ];
            return (
              <SwiperSlide key={idx} className="flex justify-center">
                <ImageSlide images={images} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Slider Navigation */}
        <button
          onClick={() => swiperRef.slidePrev()}
          className="size-10 bg-[#E6ECF0] shadow-md rounded-full flex items-center justify-center absolute top-1/2 -left-8 z-20"
        >
          <PrevSlideSvg />
        </button>
        <button
          onClick={() => swiperRef.slideNext()}
          className="size-10 bg-[#E6ECF0] shadow-md rounded-full flex items-center justify-center absolute top-1/2 -right-8 z-20"
        >
          <NextSlideSvg />
        </button>
      </div>
    </div>
  );
};

export default ParkDetailsSlider;
