import slide from "../../assets/images/tour-guide/slide.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  TestimonialNextSlide,
  TestimonialPrevSlide,
} from "@/components/common/SvgContainer/SvgContainer";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

const WhereToStay = ({ data }) => {
  console.log(data);

  const imgBaseUrl = import.meta.env.VITE_SERVER_URL;

  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: data?.whereToStayData,
        }}
        className="what-to-eat"
      ></div>

      {/* slider */}
      <div className="mx-auto relative">
        <figure className="rounded mt-5">
          <img
            src={`${imgBaseUrl}/${data?.whereToStaImage}`}
            alt="w-full h-full object-cover rounded"
          />
        </figure>

        {/* <Swiper
          slidesPerView={1}
          spaceBetween={30}
          onSwiper={setSwiperRef}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <figure className="rounded mt-5">
              <img src={slide} alt="w-full h-full object-cover rounded" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="rounded mt-5">
              <img src={slide} alt="w-full h-full object-cover rounded" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="rounded mt-5">
              <img src={slide} alt="w-full h-full object-cover rounded" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="rounded mt-5">
              <img src={slide} alt="w-full h-full object-cover rounded" />
            </figure>
          </SwiperSlide>
        </Swiper> */}

        {/* slider navigation */}
        {/* <button
          onClick={() => swiperRef.slidePrev()}
          className="size-10 hidden bg-transparent border border-white shadow-md rounded-full xl:flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-10 z-20"
        >
          <TestimonialPrevSlide />
        </button>
        <button
          onClick={() => swiperRef.slideNext()}
          className="size-10 hidden bg-transparent border border-white shadow-md rounded-full xl:flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-10 z-20"
        >
          <TestimonialNextSlide />
        </button> */}
      </div>
    </div>
  );
};

export default WhereToStay;
