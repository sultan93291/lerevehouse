import CommonHeroBannerVideo from '@/components/common/HeroBanner/CommonHeroBannerVideo';
import heroBg from '@/assets/video/tourist-guide-bg-video.mp4';
import AllTouristGuideTabs from '@/components/AllTouristGuide/AllTouristGuideTabs';
import tour1 from '@/assets/images/all-tourist-guide/1.jpg';
import tour2 from '@/assets/images/all-tourist-guide/2.jpg';
import tour3 from '@/assets/images/all-tourist-guide/3.jpg';
import AllTouristGuideCard from '@/components/common/Cards/AllTouristGuideCard';
import { useParams } from 'react-router-dom';

const AllTouristGuide = () => {
  const { title } = useParams();

  const sectionTabs = [
    {
      label: 'Alaska',
      link: '#',
    },
    {
      label: 'West Canada',
      link: '#',
    },
    {
      label: 'West USA',
      link: '#',
    },
    {
      label: 'East Canada',
      link: '#',
    },
    {
      label: 'The Caribbean',
      link: '#',
    },
    {
      label: 'PACIFIC OCEAN ISLANDS',
      link: '#',
    },
  ];

  const allTours = [
    {
      image: tour1,
      title: 'Denali National Park',
    },
    {
      image: tour2,
      title: 'Glacier Bay National Park',
    },
    {
      image: tour3,
      title: 'Anchorage',
    },
    {
      image: tour1,
      title: 'Denali National Park',
    },
    {
      image: tour2,
      title: 'Glacier Bay National Park',
    },
    {
      image: tour3,
      title: 'Anchorage',
    },
  ];
  return (
    <div className="relative">
      {/* hero */}
      <CommonHeroBannerVideo
        capitalize={true}
        heroBg={heroBg}
        title={`All ${title}`}
        italic="Tourist Guide"
      />

      {/* All tourist guide Tab */}
      <AllTouristGuideTabs sectionTabs={sectionTabs} />

      <section className="container mx-auto my-16">
        {/* Title */}
        <div
          className="text-center space-y-4
        "
        >
          <h2 className="font-editorsNoteNormal text-5xl text-primary ">
            All <span className="capitalize">{title.toLowerCase()}</span> Travel
            Guides
          </h2>
          <p className="text-text-gray w-3/4 mx-auto font-interTight text-lg tracking-wide">
            Curated by our team of luxury travel specialists, these guides are
            packed with insider knowledge and inspiration to help you discover
            the world&lsquo;s most exquisite destinations. From hidden gems to
            iconic landmarks, we provide tailored recommendations, ensuring your
            journey is nothing short of extraordinary.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-3 gap-8 mt-16 pb-10">
          {allTours?.map((tour, idx) => (
            <AllTouristGuideCard key={idx} tour={tour} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllTouristGuide;
