import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Still included if you want pagination but no navigation buttons
import { SpecialStar } from "@/components/common/SvgContainer/SvgContainer";

const TravelImageSlider = ({ images }) => {
  return (
    <div className="relative  w-full">
      <Swiper
        slidesPerView={4}
        spaceBetween={10} // Space between images
        pagination={{ clickable: true }} // Pagination is still enabled
        loop
        className="flex items-center justify-center"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`h-[345px] w-[400px]  relative  shadow-md transition-all duration-300`} // Set width to 400px
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0.32) 100%), url(${image?.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute w-full cursor-pointer  h-5 bottom-0 left-0 flex items-center mb-10 justify-center ">
                <div className="flex flex-col gap-y-2 items-center  ">
                  <h1 className="text-white text-xl font-semibold leading-[150%] font-interTight ">
                    {" "}
                    {image.txt}{" "}
                  </h1>
                  <SpecialStar />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TravelImageSlider;
