import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CommonTitle from "../common/Title/CommonTitle";
import destinationSuggestionBg from "@/assets/images/tourtlist-bg.jpg";
import TravelListCard from "../common/Cards/TravelListCard";
// import { Pagination } from 'swiper/modules';


const TourListDetailsSuggestions = ({data}) => {
  return (
    <div className="my-8 sm:my-12 xl:my-20  ">
      {/* title */}
      <div>
        <CommonTitle title="Other tours you may be" italic="Interested In" />
      </div>

      {/* sliders */}
      <div className="mt-5 sm:mt-10">
        <Swiper
          //   pagination={{
          //     dynamicBullets: true,
          //   }}
          //   modules={[Pagination]}
          breakpoints={{
            360: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          spaceBetween={20}
          // onSwiper={setSwiperRef}
          className="mySwiper"
        >
          {data?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <TravelListCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TourListDetailsSuggestions;
