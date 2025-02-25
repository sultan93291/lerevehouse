/* eslint-disable react/prop-types */

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import TravelListCard from '../common/Cards/TravelListCard';
import {
  NextSlideSvg,
  PrevSlideSvg,
} from '../common/SvgContainer/SvgContainer';
import { Link } from 'react-router-dom';

const DestinationDetailsSlider = ({ destinationSuggestions, title }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div id="suggestions" className="mt-20">
      {/* title */}
      <div>
        <h3 className="text-center text-4xl font-editorsNoteNormal text-primary">
          Suggested <span className="font-editorsNoteItalic">tours</span> for
          Alaska
        </h3>
      </div>

      {/* slider */}
      <div className="mt-16 relative">
        <Swiper
          slidesPerView={3}
          loop={true}
          spaceBetween={20}
          onSwiper={setSwiperRef}
          className="mySwiper"
        >
          {destinationSuggestions?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <TravelListCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* slider navigation */}

        {/* left */}
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

      {/* view all tour btn */}
      <div className="w-full flex items-center justify-center mt-10">
        <Link
          to={`/tour-lists/${title}`}
          className="block px-24 py-3 bg-primary text-white font-interTight font-medium border border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
        >
          View All {title} Tour
        </Link>
      </div>
    </div>
  );
};

export default DestinationDetailsSlider;
