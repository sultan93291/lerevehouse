import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { NextSlideSvg, PrevSlideSvg } from "../common/SvgContainer/SvgContainer";
import ImageSlide from "./ImageSlide";

const ParkDetailsSlider = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="!w-full">
      {/* Slider */}
      <div className="w-full flex flex-grow items-center relative">
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
            const images = [
              data[(idx - 1 + data.length) % data.length], // Left image
              data[idx], // Center image
              data[(idx + 1) % data.length], // Right image
            ];
            return (
              <SwiperSlide key={idx} className="flex !w-full justify-center">
                <ImageSlide images={images} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Slider Navigation */}
        <button
          onClick={() => swiperRef.slidePrev()}
          className="md:size-10 size-8 bg-[#E6ECF0] shadow-md rounded-full flex items-center justify-center absolute top-[47%] md:-left-6 -left-4 z-20"
        >
          <PrevSlideSvg />
        </button>
        <button
          onClick={() => swiperRef.slideNext()}
          className="md:size-10 size-8 bg-[#E6ECF0] shadow-md rounded-full flex items-center justify-center absolute top-[48%] md:-right-6 -right-4 z-20"
        >
          <NextSlideSvg />
        </button>
      </div>
    </div>
  );
};

export default ParkDetailsSlider;
