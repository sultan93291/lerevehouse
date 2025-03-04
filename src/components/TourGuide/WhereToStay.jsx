import slide from "../../assets/images/tour-guide/slide.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  TestimonialNextSlide,
  TestimonialPrevSlide,
} from "@/components/common/SvgContainer/SvgContainer";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

const WhereToStay = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
      <h3 className="text-2xl font-medium mb-3 text-[#004265]">
        Palazzo Petrvs
      </h3>
      <p className="text-[#565656] text-sm md:text-base 2xl:text-lg">
        Nestled within a historic former palace in the heart of Umbria&apos;s
        Orvieto, Palazzo Petrvs is steps from the Duomo Orvieto. The luxury
        boutique hotel has nine stately guest rooms and suites with original
        architectural elements, bold textiles, and contemporary furnishings. A
        restaurant and bar specialize in Italian cuisine. Catering to guests in
        search of history and luxury, Palazzo Petrvs offers a central location
        for exploring Orvieto’s Etruscan roots.
      </p>

      {/* slider */}
      <div className="container mx-auto relative">
        <Swiper
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
        </Swiper>

        {/* slider navigation */}
        <button
          onClick={() => swiperRef.slidePrev()}
          className="size-10 hidden bg-transparent border border-white shadow-md rounded-full 2xl:flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-10 z-20"
        >
          <TestimonialPrevSlide />
        </button>
        <button
          onClick={() => swiperRef.slideNext()}
          className="size-10 hidden bg-transparent border border-white shadow-md rounded-full 2xl:flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-10 z-20"
        >
          <TestimonialNextSlide />
        </button>
      </div>
    </div>
  );
};

export default WhereToStay;
