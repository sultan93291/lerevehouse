import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import bg1 from "@/assets/images/extraordinary/1.jpg";
import bg2 from "@/assets/images/extraordinary/2.png";
import bg3 from "@/assets/images/extraordinary/3.jpg";
import bg4 from "@/assets/images/extraordinary/4.jpg";
import bg5 from "@/assets/images/extraordinary/5.jpg";
import bg6 from "@/assets/images/extraordinary/6.jpg";
import bg7 from "@/assets/images/all-destination/7.jpg";
import ExtraOrdinaryHomepageSlider from "@/components/common/Slider/ExtraOrdinaryHomepageSlider";
import {
  NextSlideSvg,
  PrevSlideSvg,
} from "@/components/common/SvgContainer/SvgContainer";
import { useState } from "react";
import TransparentButton from "@/components/common/Buttons/TransparentButton";
import { useGetDestinationOvreviewDetailsQuery } from "@/Redux/features/api/apiSlice";

const HomepageExtraOrdinarySection = () => {
  const { data, error, isLoading } = useGetDestinationOvreviewDetailsQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className="container mx-auto px-4 lg:px-8 2xl:px-16 3xl:px-32 mb-10 lg:mb-20">
      {/* title */}
      <div className=" py-5 xl:py-10">
        <h2 className="text-center text-primary font-editorsNoteNormal font-medium text-3xl xl:text-4xl 2xl:text-5xl leading-[128%] lg:leading-[1.1]">
          Find the <span className="text-secondary">Hidden Gem</span> That Will
          Make Your Next <br />{" "}
          <span className="text-secondary">Trip Extraordinary</span>
        </h2>
      </div>

      {/* extra ordinary slider */}
      <div className="pt-10 relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          onSwiper={setSwiperRef}
          centeredSlides={true}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 10,
            stretch: 20,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          // pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {data?.data?.map(destination => (
            <SwiperSlide key={destination?.name}>
              <ExtraOrdinaryHomepageSlider destination={destination} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* slider navigation */}

        {/* left */}
        <button
          onClick={() => swiperRef.slidePrev()}
          className="size-10 bg-white shadow-md rounded-full  hidden xl:flex items-center justify-center absolute top-1/2 lg:-left-4 -left-6 z-20"
        >
          <PrevSlideSvg />
        </button>
        <button
          onClick={() => swiperRef.slideNext()}
          className="size-10 bg-white shadow-md rounded-full hidden xl:flex items-center justify-center absolute top-1/2 lg:right-4 xl:right-6 z-20"
        >
          <NextSlideSvg />
        </button>
      </div>

      {/* view destination page */}
      <div className="mt-10 flex items-center justify-center">
        <TransparentButton title="View All Destination" path="/destination" />
      </div>
    </section>
  );
};

export default HomepageExtraOrdinarySection;
//
