import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  NextSlideSvg,
  PrevSlideSvg,
  WhiteArrowRight,
  WhiteArroleft,
  SpecialStar,
} from "../common/SvgContainer/SvgContainer";

const TravelDetailsSlider = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="w-[350px] md:w-[400px] lg:w-[700px] 2xl:w-[1200px] 3xl:w-[1600px]">
      {/* Slider */}
      <div className="w-full flex items-center relative">
        <Swiper
          loop={true}
          breakpoints={{
            360: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          centeredSlides={true}
          onSwiper={setSwiperRef}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {data.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div
                  className="h-[345px] bg-RgbaBlue  w-[450px] relative shadow-md transition-all duration-300"
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0.32) 100%), url(${item?.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="relative w-full h-full cursor-pointer hidden xl:block">
                    <div className="absolute bottom-4 left-0 right-0 flex flex-col justify-center items-center mx-auto w-full">
                      <h1 className="text-white  text-xl font-semibold leading-[150%] font-interTight">
                        {item.txt}
                      </h1>
                      <SpecialStar />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Slider Navigation */}
        <div className="absolute top-1/2 z-[5] left-0 right-0 flex justify-between items-center md:px-6 px-3 transform -translate-y-1/2 w-full">
          <button
            onClick={() => swiperRef && swiperRef.slidePrev()}
            className="xl:w-12 w-8 md:w-10 xl:h-12 h-8 md:h-10 bg-[#000000] shadow-md rounded-full flex items-center justify-center z-20"
          >
            <WhiteArroleft />
          </button>
          <button
            onClick={() => swiperRef && swiperRef.slideNext()}
            className="xl:w-12 w-8 md:w-10 xl:h-12 h-8 md:h-10 bg-[#000000] shadow-md rounded-full flex items-center justify-center z-20"
          >
            <WhiteArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelDetailsSlider;
