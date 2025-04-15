import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';
import HeroSlide from '@/components/Homepage/HeroSlide';
const HomepageHero = () => {
   
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
        <SwiperSlide>
          <HeroSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomepageHero;
