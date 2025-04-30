import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";
import HeroSlide from "@/components/Homepage/HeroSlide";
import { useGetHomePageHeroSectionDataQuery } from "@/Redux/features/api/apiSlice";

const HomepageHero = () => {
  const { data, error, isLoading } = useGetHomePageHeroSectionDataQuery(
    undefined,
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  return (
    <div className="-mt-[56px] 2xl:mt-0 4xl:-mt-[56px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {data?.data?.map((item, idx) => {
          return (
            <SwiperSlide>
              <HeroSlide
                key={idx}
                vidoeUrl={item?.file_url}
                title={item?.title}
                subTitle={item.short_description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomepageHero;
