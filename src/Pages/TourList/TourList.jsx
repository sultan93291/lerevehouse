import CommonHeroBanner from '@/components/common/HeroBanner/CommonHeroBanner';
import bg from '@/assets/images/tourtlist-bg.jpg';
import TravelListCard from '@/components/common/Cards/TravelListCard';
import { useParams } from 'react-router-dom';
import destinationSuggestionBg from '@/assets/images/tourtlist-bg.jpg';

const TourList = () => {
  const { title } = useParams();

  const allTours = [
    {
      id: 1,
      image: destinationSuggestionBg,
      duration: 11,
      title: 'Vancouver to Denali Park with 8 Day Cruise',
      description:
        'Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska',
      price: 3550,
    },
    {
      id: 2,
      image: destinationSuggestionBg,
      duration: 11,
      title: 'Alaskan Adventure: Anchorage to Juneau',
      description:
        'Explore the rugged beauty of Alaska from Anchorage to Juneau. This tour covers the top highlights, scenic stops, and cultural attractions.',
      price: 4200,
    },
    {
      id: 3,
      image: destinationSuggestionBg,
      duration: 8,
      title: 'Whistler and Victoria: Best of British Columbia',
      description:
        'A scenic journey through British Columbia, featuring Whistler’s snowy peaks and Victoria’s charming harbor.',
      price: 3000,
    },
    {
      id: 4,
      image: destinationSuggestionBg,
      duration: 10,
      title: 'Canadian Rockies Grand Tour',
      description:
        'Immerse yourself in the majestic beauty of the Rockies. Enjoy stunning landscapes, wildlife, and luxury accommodations.',
      price: 4700,
    },
    {
      id: 5,
      image: destinationSuggestionBg,
      duration: 9,
      title: 'Alaska Wildlife and Glacier Discovery',
      description:
        'Experience Alaska’s breathtaking glaciers and diverse wildlife on this once-in-a-lifetime adventure.',
      price: 3800,
    },
    {
      id: 6,
      image: destinationSuggestionBg,
      duration: 12,
      title: 'Yukon and Beyond: An Epic Northern Escape',
      description:
        'This epic journey takes you through Yukon’s pristine wilderness, gold rush history, and northern lights displays.',
      price: 5000,
    },
    {
      id: 7,
      image: destinationSuggestionBg,
      duration: 7,
      title: 'Seattle to Vancouver Coastal Highlights',
      description:
        'Relax on this coastal journey between Seattle and Vancouver. Enjoy beautiful seascapes, islands, and vibrant cities.',
      price: 2800,
    },
    {
      id: 8,
      image: destinationSuggestionBg,
      duration: 15,
      title: 'Ultimate Canada-Alaska Expedition',
      description:
        'An all-inclusive 15-day expedition showcasing the best of Canada and Alaska. Nature, history, and luxury await you.',
      price: 6500,
    },
    {
      id: 9,
      image: destinationSuggestionBg,
      duration: 6,
      title: 'Banff and Jasper Scenic Escape',
      description:
        'Discover the wonders of Banff and Jasper. A perfect escape for nature lovers looking to unwind in style.',
      price: 3200,
    },
    {
      id: 10,
      image: destinationSuggestionBg,
      duration: 8,
      title: 'Alaska Inside Passage Cruise',
      description:
        'A luxurious cruise through the Inside Passage. Witness glaciers, marine life, and stunning coastal towns.',
      price: 4100,
    },
    {
      id: 11,
      image: destinationSuggestionBg,
      duration: 13,
      title: 'Vancouver to Fairbanks: Nature’s Best',
      description:
        'Traverse through pristine landscapes from Vancouver to Fairbanks. Enjoy rich cultural experiences and natural beauty.',
      price: 5800,
    },
    {
      id: 12,
      image: destinationSuggestionBg,
      duration: 10,
      title: 'Alaska’s Hidden Gems Adventure',
      description:
        'Unearth the hidden treasures of Alaska on this carefully curated 10-day adventure.',
      price: 4400,
    },
  ];

  return (
    <div>
      <CommonHeroBanner bg={bg} title="Travel to" italic={title} />

      {/* Tour Lists */}
      <section className=" my-10 xl:my-20 container mx-auto  ">
        {/* title */}
        <div>
          <h2 className="text-center text-3xl xl:text-4xl font-editorsNoteNormal text-primary">
            All <span className="font-editorsNoteItalic">tours</span> for
            <span> {title}</span>
          </h2>
        </div>

        {/* cards */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3  gap-4 xl:gap-6 mt-10">
          {allTours?.map(item => (
            <TravelListCard key={item?.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TourList;
