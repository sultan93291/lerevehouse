import leftBg from "../../../assets/images/testimonials-left-bg.png";
import rightBg from "../../../assets/images/testimonials-bg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TestimonialSliderHomepage from "@/components/common/Slider/TestimonialSliderHomepage";
import {
  TestimonialNextSlide,
  TestimonialPrevSlide,
} from "@/components/common/SvgContainer/SvgContainer";
import { useEffect, useState } from "react";
import { useGetAllReviewsQuery } from "@/Redux/features/api/apiSlice";
import { InfinitySpin } from "react-loader-spinner";
import toast from "react-hot-toast";

const HomepageTestimonials = () => {
  const { data, error, isLoading } = useGetAllReviewsQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    if (error) {
      const errorMessage =
        error.data?.message || error.error || error.status || error.message;
      if (errorMessage) {
        setTimeout(() => toast.error(errorMessage), 0); // safe rendering
      }
    }
  }, [error]);

  console.log(data);
  

  const [swiperRef, setSwiperRef] = useState(null);

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-white">
        <InfinitySpin
          visible={true}
          width="200"
          color="#004265"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }

  return (
    <section className="bg-primary relative px-4 lg:px-8 2xl:px-16 3xl:px-32 mx-auto w-full 2xl:min-h-[750px]">
      <div className="flex flex-col gap-y-[30px] 2xl:gap-y-[60px]">
        {/* title */}
        <div className="py-10">
          <h2 className="text-center text-white font-editorsNoteNormal font-medium text-3xl xl:text-4xl 2xl:text-5xl leading-[128%] lg:leading-[1.1]">
            Client Experiences That Speak for <br className="hidden lg:block" />{" "}
            Themselves
          </h2>
        </div>

        {/* slider */}
        <div className="container mx-auto 2xl:px-32 relative homepage-testimonial-slider">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            onSwiper={setSwiperRef}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data?.data?.map((item, idx) =>
              item ? (
                <SwiperSlide key={idx}>
                  <TestimonialSliderHomepage data={item} />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>

          {/* slider navigation */}
          <button
            onClick={() => swiperRef?.slidePrev()}
            className="size-10 hidden mb-[500px] bg-transparent border border-white shadow-md rounded-full 2xl:flex items-center justify-center absolute top-1/2 left-36 z-20 -translate-y-1/2"
          >
            <TestimonialPrevSlide />
          </button>
          <button
            onClick={() => swiperRef?.slideNext()}
            className="size-10 bg-transparent border border-white shadow-md rounded-full hidden 2xl:flex items-center justify-center absolute top-1/2 right-20 z-20 -translate-y-1/2"
          >
            <TestimonialNextSlide />
          </button>
        </div>
      </div>

      {/* bg decorations */}
      <div className="absolute top-10 left-0">
        <img src={leftBg} alt="Left Background" />
      </div>
      <div className="absolute top-10 right-0">
        <img src={rightBg} alt="Right Background" />
      </div>
    </section>
  );
};

export default HomepageTestimonials;
