import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  NextArrowTourListDetailsSvg,
  PrevArrowTourListDetailsSvg,
  TourListDetailsBottomStarSvg,
} from "../common/SvgContainer/SvgContainer";
import TourListDetailsReviewCard from "../common/Cards/TourListDetailsReviewCard";

const TourListDetailsReview = ({ isHeading , data }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  

  return (
    <div className="my-5 z-[0] 2xl:my-20">
      {/* title */}
      {isHeading && (
        <div>
          <h3 className=" text-2xl xl:text-4xl font-editorsNoteNormal text-primary text-center">
            What our clients say about
            <span className="font-editorsNoteItalic">
              Canada And Alaska Tour
            </span>
          </h3>
        </div>
      )}

      {/* sliders */}
      <div className="md:mt-10 mt-5 relative">
        <Swiper
          breakpoints={{
            360: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          spaceBetween={20}
          onSwiper={setSwiperRef}
          className="mySwiper"
        >
          {data?.map(review => (
            <SwiperSlide key={review?.title}>
              <TourListDetailsReviewCard item={review} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* slider navigation */}

        {/* left */}
        <button
          onClick={() => swiperRef.slidePrev()}
          className="size-8 bg-transparent shadow-md  z-[0] rounded-full flex items-center justify-center absolute top-1/2 ml-[-16px] 4xl:-left-10  group hover:bg-primary transition-all duration-300 -translate-y-1/2 border border-[#9C9EA1] bg-red-500"
        >
          <PrevArrowTourListDetailsSvg />
        </button>

        <button
          onClick={() => swiperRef.slideNext()}
          className="size-8 bg-transparent shadow-md rounded-full  flex items-center justify-center absolute top-1/2 -right-4  2xl:-right-3 4xl:-right-10 z-[0] group hover:bg-primary transition-all duration-300 -translate-y-1/2 border border-[#9C9EA1]"
        >
          <NextArrowTourListDetailsSvg />
        </button>
      </div>
    </div>
  );
};

export default TourListDetailsReview;
