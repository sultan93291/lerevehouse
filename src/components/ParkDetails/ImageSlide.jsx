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
    <div className="flex  items-center justify-center relative h-[511px] gap-0">
      {images.map((image, idx) => (
        <div
          key={idx}
          className={`h-full shadow-md transition-all duration-300 ${
            idx === 1 ? "w-[866px]" : "w-[363px]"
          }`}
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
