import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CommonTitle from "../common/Title/CommonTitle";
import destinationSuggestionBg from "@/assets/images/tourtlist-bg.jpg";
import TravelListCard from "../common/Cards/TravelListCard";
// import { Pagination } from 'swiper/modules';

const destinationSuggestions = [
  {
    id: 1,
    image: destinationSuggestionBg,
    duration: 11,
    title: "Vancouver to Denali Park with 8 Day Cruise",
    description:
      "Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska",
    price: 3550,
  },
  {
    id: 2,
    image: destinationSuggestionBg,
    duration: 11,
    title: "Vancouver to Denali Park with 8 Day Cruise",
    description:
      "Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska",
    price: 3550,
  },
  {
    id: 3,
    image: destinationSuggestionBg,
    duration: 11,
    title: "Vancouver to Denali Park with 8 Day Cruise",
    description:
      "Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska",
    price: 3550,
  },
  {
    id: 4,
    image: destinationSuggestionBg,
    duration: 11,
    title: "Vancouver to Denali Park with 8 Day Cruise",
    description:
      "Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska",
    price: 3550,
  },
  {
    id: 5,
    image: destinationSuggestionBg,
    duration: 11,
    title: "Vancouver to Denali Park with 8 Day Cruise",
    description:
      "Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska",
    price: 3550,
  },
];

const TourListDetailsSuggestions = () => {
  return (
    <div className=" my-12 xl:my-20 px-4 lg:px-8 2xl:px-16 3xl:px-32 ">
      {/* title */}
      <div>
        <CommonTitle title="Other tours you may be" italic="Interested In" />
      </div>

      {/* sliders */}
      <div className="mt-10">
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
          {destinationSuggestions?.map((item, idx) => (
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
