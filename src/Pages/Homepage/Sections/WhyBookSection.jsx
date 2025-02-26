import BookCard from '@/components/common/Cards/BookCard';
import image1 from '@/assets/images/11.jpg';
import image2 from '@/assets/images/22.jpg';
import image3 from '@/assets/images/33.jpg';
import { forwardRef } from 'react';
const WhyBookSection = forwardRef(({ ...props }, ref) => {
  const cardInfo = [
    {
      image: image1,
      title: 'Personalized Adventures',
      description:
        'We create custom itineraries, aligning with your preferences for unforgettable trips, backed by expert destination knowledge.',
    },
    {
      image: image2,
      title: 'Exclusive Destinations',
      description:
        'Explore unique destinations with charm, featuring top-tier accommodations and activities tailored for travelers craving extraordinary adventures.',
    },
    {
      image: image3,
      title: ' Sustainable Luxury Travel',
      description:
        'We ensure luxurious, eco-friendly travel, letting you explore responsibly while supporting communities and preserving natural habitats.',
    },
  ];

  return (
    <section
      ref={ref}
      {...props}
      id="tour"
      className=" py-14 2xl:py-28 container mx-auto 2xl:px-32   "
    >
      <div>
        <h2 className=" text-4xl xl:text-5xl font-editorsNoteNormal text-center text-primary">
          Why book with Lerevehouse?
        </h2>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 mt-16">
        {cardInfo?.map((info) => (
          <BookCard key={info?.title} info={info} />
        ))}
      </div>
    </section>
  );
});
WhyBookSection.displayName = 'WhyBookSection';

export default WhyBookSection;
