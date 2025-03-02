import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  NextSlideSvg,
  PrevSlideSvg,
} from "../common/SvgContainer/SvgContainer";

const ImageSlide = ({ images }) => {
  return (
    <div className="flex items-center justify-center relative md:h-[511px] gap-0">
      {images.map((image, idx) => (
        <div
          key={idx}
          className={`shadow-md transition-all duration-300
          ${
            idx === 1
              ? "w-[90%] sm:w-[75%] md:w-[70%] lg:w-[866px]"
              : "w-[80%] sm:w-[40%] md:w-[35%] lg:w-[363px]"
          }
          h-[180px] sm:h-[220px] md:h-[300px] lg:h-full`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      ))}
    </div>
  );
};

export default ImageSlide;
