/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import ActivitiesDetailsGalleryCard from "../common/Cards/ActivitiesDetailsGalleryCard";
import {
  NextSlideSvg,
  PrevSlideSvg,
} from "@/components/common/SvgContainer/SvgContainer";
const ActivitiesDetailsGallery = ({ activitiesDetailsGalleryItems }) => {
  console.log(activitiesDetailsGalleryItems);

  
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="mt-16 relative">
      <Swiper
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        spaceBetween={20}
        onSwiper={setSwiperRef}
        className="mySwiper"
      >
        {activitiesDetailsGalleryItems?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <ActivitiesDetailsGalleryCard item={item?.image} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* slider navigation */}

      {/* left */}
      <button
        onClick={() => swiperRef.slidePrev()}
        className="md:size-10 size-8 bg-white shadow-md rounded-full flex items-center justify-center absolute top-1/2 md:-left-6 -left-4 z-20 -translate-y-1/2"
      >
        <PrevSlideSvg />
      </button>
      <button
        onClick={() => swiperRef.slideNext()}
        className="md:size-10 size-8 bg-white shadow-md rounded-full flex items-center justify-center absolute top-1/2 md:-right-6 -right-4 z-20 -translate-y-1/2"
      >
        <NextSlideSvg />
      </button>
    </div>
  );
};

export default ActivitiesDetailsGallery;
