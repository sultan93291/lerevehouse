import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import ExtraOrdinaryHomepageSlider from "@/components/common/Slider/ExtraOrdinaryHomepageSlider";
import {
  NextSlideSvg,
  PrevSlideSvg,
} from "@/components/common/SvgContainer/SvgContainer";
import { useState } from "react";
import TransparentButton from "@/components/common/Buttons/TransparentButton";
import { useGetDestinationOvreviewDetailsQuery } from "@/Redux/features/api/apiSlice";
import { useTranslation } from "react-i18next";

const HomepageExtraOrdinarySection = ({ title }) => {
  const { t } = useTranslation();
  const { data, error, isLoading } = useGetDestinationOvreviewDetailsQuery(
    undefined,
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="container mx-auto px-4 lg:px-8 2xl:px-16 3xl:px-32 mb-10 lg:mb-20">
      {/* Title */}
      <div className="py-5 flex items-center justify-center xl:py-10">
        <h2
          className="text-center max-w-[650px] text-primary   font-medium text-3xl xl:text-4xl 2xl:text-5xl leading-[128%] lg:leading-[1.1]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      {/* Slider */}
      <div className="pt-10 relative">
        <Swiper
          effect="coverflow"
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
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {data?.data?.map(destination => (
            <SwiperSlide key={destination?.name}>
              <ExtraOrdinaryHomepageSlider destination={destination} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="size-10 bg-white shadow-md rounded-full hidden xl:flex items-center justify-center absolute top-1/2 lg:-left-4 -left-6 z-20"
        >
          <PrevSlideSvg />
        </button>
        <button
          onClick={() => swiperRef?.slideNext()}
          className="size-10 bg-white shadow-md rounded-full hidden xl:flex items-center justify-center absolute top-1/2 lg:right-4 xl:right-6 z-20"
        >
          <NextSlideSvg />
        </button>
      </div>

      {/* Button */}
      <div className="mt-10 flex items-center justify-center">
        <TransparentButton
          title={t("extraOrdinarySection.button")}
          path="/destination"
        />
      </div>
    </section>
  );
};

export default HomepageExtraOrdinarySection;
