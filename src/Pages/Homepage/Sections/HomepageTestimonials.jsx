import leftBg from '../../../assets/images/testimonials-left-bg.png';
import rightBg from '../../../assets/images/testimonials-bg.png';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TestimonialSliderHomepage from '@/components/common/Slider/TestimonialSliderHomepage';
import {
  TestimonialNextSlide,
  TestimonialPrevSlide,
} from '@/components/common/SvgContainer/SvgContainer';
import { useState } from 'react';

const HomepageTestimonials = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className="bg-primary relative min-h-[750px]">
      {/* main section */}
      <div>
        {/* title */}
        <div className="py-10">
          <h2 className="text-center text-white font-editorsNoteNormal font-medium text-5xl leading-[1.1]">
            Client Experiences That Speak for <br /> Themselves
          </h2>
        </div>

        {/* slider */}
        <div className="container mx-auto px-32 relative homepage-testimonial-slider">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            onSwiper={setSwiperRef}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <TestimonialSliderHomepage />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialSliderHomepage />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialSliderHomepage />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialSliderHomepage />
            </SwiperSlide>
          </Swiper>

          {/* slider navigation */}

          {/* left */}
          <button
            onClick={() => swiperRef.slidePrev()}
            className="size-10 bg-transparent border border-white shadow-md rounded-full flex items-center justify-center absolute top-1/2 left-36 z-20 -translate-y-1/2"
          >
            <TestimonialPrevSlide />
          </button>
          <button
            onClick={() => swiperRef.slideNext()}
            className="size-10 bg-transparent border border-white shadow-md rounded-full flex items-center justify-center absolute top-1/2 right-20 z-20 -translate-y-1/2"
          >
            <TestimonialNextSlide />
          </button>
        </div>
      </div>

      {/* bg */}
      <div className="absolute top-10 left-0">
        <img className="" src={leftBg} alt="" />
      </div>
      <div className="absolute top-10 right-0">
        <img className="" src={rightBg} alt="" />
      </div>
    </section>
  );
};

export default HomepageTestimonials;
