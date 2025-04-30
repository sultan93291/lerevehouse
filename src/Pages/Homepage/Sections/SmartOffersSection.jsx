import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "@/assets/images/destination/1.jpg";
import image2 from "@/assets/images/destination/2.png";
import image3 from "@/assets/images/destination/3.jpg";
import image4 from "@/assets/images/destination/4.jpg";
import image5 from "@/assets/images/destination/5.png";
import image6 from "@/assets/images/destination/6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import DestinationCard from "@/components/common/Cards/DestinationCard";
import {
  NextSlideSvg,
  PrevSlideSvg,
} from "@/components/common/SvgContainer/SvgContainer";
import { useState } from "react";
import { useGetSmartOfferDataQuery } from "@/Redux/features/api/apiSlice";
const SmartOffersSection = () => {
  const { data, error, isLoading } = useGetSmartOfferDataQuery(
    undefined,
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className="container flex flex-col gap-y-[40px] lg:gap-y-[60px] mx-auto px-4 lg:px-8 2xl:px-16 3xl:px-32 py-10 2xl:py-20">
      {/* title */}
      <div>
        <h2 className="text-center text-4xl xl:text-5xl font-editorsNoteNormal text-primary">
          <span className="text-secondary">Smart</span> Offers
        </h2>
      </div>

      {/* sliders */}
      <div className="relative">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1 }, 
            768: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 }, 
          }}
          loop={true}
          spaceBetween={20}
          onSwiper={setSwiperRef}
          className="mySwiper"
        >
          {data?.data?.map(item => (
            <SwiperSlide key={item?.destinationTitle}>
              <DestinationCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* slider navigation */}

        {/* left */}
        <button
          onClick={() => swiperRef.slidePrev()}
          className=" size-10 bg-white shadow-md rounded-full flex items-center justify-center absolute top-1/2 -left-4 lg:-left-8 z-20"
        >
          <PrevSlideSvg />
        </button>
        <button
          onClick={() => swiperRef.slideNext()}
          className="size-10 bg-white shadow-md rounded-full flex items-center justify-center absolute top-1/2 -right-4 lg:-right-8 z-20"
        >
          <NextSlideSvg />
        </button>
      </div>
    </section>
  );
};

export default SmartOffersSection;
