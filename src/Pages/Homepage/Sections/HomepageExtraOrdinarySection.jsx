import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import bg1 from '@/assets/images/extraordinary/1.jpg';
import bg2 from '@/assets/images/extraordinary/2.png';
import bg3 from '@/assets/images/extraordinary/3.jpg';
import bg4 from '@/assets/images/extraordinary/4.jpg';
import bg5 from '@/assets/images/extraordinary/5.jpg';
import bg6 from '@/assets/images/extraordinary/6.jpg';
import bg7 from '@/assets/images/all-destination/7.jpg';
import ExtraOrdinaryHomepageSlider from '@/components/common/Slider/ExtraOrdinaryHomepageSlider';
import {
  NextSlideSvg,
  PrevSlideSvg,
} from '@/components/common/SvgContainer/SvgContainer';
import { useState } from 'react';
import TransparentButton from '@/components/common/Buttons/TransparentButton';

const HomepageExtraOrdinarySection = () => {
  const extraordinaryDestinations = [
    {
      image: bg1,
      title: 'ALASKA',
    },
    {
      image: bg2,
      title: 'Canada Ovest',
    },
    {
      image: bg3,
      title: 'Canada East',
    },
    {
      image: bg4,
      title: 'Caraibi',
    },
    {
      image: bg5,
      title: 'Messico - Baja California',
    },
    {
      image: bg6,
      title: 'Ovest USA',
    },
    {
      image: bg7,
      title: 'Isolepecifico',
    },
  ];
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className="container mx-auto mb-20">
      {/* title */}
      <div className="py-10">
        <h2 className="text-center text-primary font-editorsNoteNormal font-medium text-5xl leading-[1. ]">
          Find the <span className="text-secondary">Hidden Gem</span> That Will
          Make Your Next <br />{' '}
          <span className="text-secondary">Trip Extraordinary</span>
        </h2>
      </div>

      {/* extra ordinary slider */}
      <div className="pt-10 relative">
        <Swiper
          effect={'coverflow'}
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
          {extraordinaryDestinations?.map((destination) => (
            <SwiperSlide key={destination?.title}>
              <ExtraOrdinaryHomepageSlider destination={destination} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* slider navigation */}

        {/* left */}
        <button
          onClick={() => swiperRef.slidePrev()}
          className="size-10 bg-white shadow-md rounded-full flex items-center justify-center absolute top-1/2 -left-8 z-20"
        >
          <PrevSlideSvg />
        </button>
        <button
          onClick={() => swiperRef.slideNext()}
          className="size-10 bg-white shadow-md rounded-full flex items-center justify-center absolute top-1/2 right-16 z-20"
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