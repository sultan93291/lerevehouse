/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import ActivitiesDetailsGalleryCard from '../common/Cards/ActivitiesDetailsGalleryCard';
import {
  NextSlideSvg,
  PrevSlideSvg,
} from '@/components/common/SvgContainer/SvgContainer';
const ActivitiesDetailsGallery = ({ activitiesDetailsGalleryItems }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="mt-16 relative">
      <Swiper
        slidesPerView={4}
        loop={true}
        spaceBetween={20}
        onSwiper={setSwiperRef}
        className="mySwiper"
      >
        {activitiesDetailsGalleryItems?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <ActivitiesDetailsGalleryCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* slider navigation */}

      {/* left */}
      <button
        onClick={() => swiperRef.slidePrev()}
        className="size-10 bg-white shadow-md rounded-full flex items-center justify-center absolute top-1/2 -left-8 z-20 -translate-y-1/2"
      >
        <PrevSlideSvg />
      </button>
      <button
        onClick={() => swiperRef.slideNext()}
        className="size-10 bg-white shadow-md rounded-full flex items-center justify-center absolute top-1/2 -right-8 z-20 -translate-y-1/2"
      >
        <NextSlideSvg />
      </button>
    </div>
  );
};

export default ActivitiesDetailsGallery;
