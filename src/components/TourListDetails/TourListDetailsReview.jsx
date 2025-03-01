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

const TourListDetailsReview = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const allReviews = [
    {
      review: 5,
      title: "Spectacular and Seamless Trip",
      name: "Sophia and Mark T.",
      description:
        "Le Reve House made our dream of exploring Alaska and Canada a reality. Glacier Bay was magical, and Denali's landscapes were breathtaking. Every detail was so well-planned—we didn’t have to worry about a thing. Highly recommend this trip!",
    },
    {
      review: 5,
      title: "A Journey of a Lifetime",
      name: "Emily R.",
      description:
        "From cruising through Glacier Bay to hiking in Denali, this tour was an adventure we’ll never forget. Le Reve House provided exceptional service, knowledgeable guides, and luxurious accommodations. It exceeded all our expectations!",
    },
    {
      review: 5,
      title: "Unforgettable Adventure",
      name: "Emily R.",
      description:
        "This tour was everything we dreamed of and more! Glacier Bays breathtaking ice formations and Denali's rugged beauty left us in awe. Le Reve House organized every detail perfectly, from luxury accommodations to seamless. It was an adventure of a lifetime!",
    },
    {
      review: 5,
      title: "Perfectly Curated Vacation",
      name: "James and Lily P.",
      description:
        "From the moment we arrived, everything was flawlessly planned. Glacier Bay and Denali were beyond breathtaking. Le Reve House truly knows how to create an unforgettable experience. Every guide and staff member was incredibly professional and kind.",
    },
    {
      review: 5,
      title: "Exceptional Beyond Words",
      name: "Robert D.",
      description:
        "Le Reve House exceeded all our expectations. From the stunning landscapes of Alaska to the comfort of the accommodations, everything was top-notch. Their attention to detail and expertise ensured we had an incredible time.",
    },
    {
      review: 5,
      title: "A Vacation to Treasure Forever",
      name: "Isabella M.",
      description:
        "The serenity of Glacier Bay and the majesty of Denali left us speechless. This was a trip like no other, and it couldn’t have been possible without Le Reve House’s impeccable planning and guidance. Highly recommend to all nature lovers!",
    },
    {
      review: 5,
      title: "Breathtakingly Beautiful",
      name: "Alex J.",
      description:
        "Le Reve House made our dream trip to Alaska truly unforgettable. The crisp air, majestic glaciers, and the luxury they provided made it all so special. It felt like stepping into a wonderland every single day.",
    },
  ];

  return (
    <div className=" my-10 xl:my-20 px-4 lg:px-8 2xl:px-16 3xl:px-32 ">
      {/* title */}
      <div>
        <h3 className=" text-2xl xl:text-4xl font-editorsNoteNormal text-primary text-center">
          What our clients say about
          <span className="font-editorsNoteItalic">Canada And Alaska Tour</span>
        </h3>
      </div>

      {/* sliders */}

      <div className="mt-10 relative">
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
          {allReviews?.map(review => (
            <SwiperSlide key={review?.title}>
              <TourListDetailsReviewCard item={review} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* slider navigation */}

        {/* left */}
        <button
          onClick={() => swiperRef.slidePrev()}
          className="size-8 bg-transparent shadow-md  rounded-full flex items-center justify-center absolute top-1/2 ml-[-16px] 4xl:-left-10 z-[999] group hover:bg-primary transition-all duration-300 -translate-y-1/2 border border-[#9C9EA1] bg-red-500"
        >
          <PrevArrowTourListDetailsSvg />
        </button>

        <button
          onClick={() => swiperRef.slideNext()}
          className="size-8 bg-transparent shadow-md rounded-full  flex items-center justify-center absolute top-1/2 -right-4 2xl:-right-10 z-20 group hover:bg-primary transition-all duration-300 -translate-y-1/2 border border-[#9C9EA1]"
        >
          <NextArrowTourListDetailsSvg />
        </button>
      </div>

      {/* review bottom */}
      <div className=" py-3 lg:py-6 w-full  flex items-center justify-center">
        <p className="font-interTight whitespace-nowrap  text-sm lg:text-base text-text-gray flex lg:items-center gap-x-[0.8px] sm:gap-1 leading-relaxed transition-all duration-300 ease-in-out">
          Rated
          <span className="text-primary font-semibold">4.8 </span> out of 5
          based on
          <span className="text-primary font-semibold whitespace-nowrap ">
            2965 reviews
          </span>{" "}
          on
          <span>
            <TourListDetailsBottomStarSvg />
          </span>
          <span className="text-primary font-semibold">Trustpilot</span>
        </p>
      </div>
    </div>
  );
};

export default TourListDetailsReview;
