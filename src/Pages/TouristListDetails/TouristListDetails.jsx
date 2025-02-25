import CommonHeroBanner from '@/components/common/HeroBanner/CommonHeroBanner';
import bg from '../../assets/images/destination-bg.jpg';
import TourListDetailsTab from '@/components/TourListDetails/TourListDetailsTab';
import TourListDetailsDescription from '@/components/TourListDetails/TourListDetailsDescription';
import TourListDetailsItinerary from '@/components/TourListDetails/TourListDetailsItinerary';
import TourListDetailsReview from '@/components/TourListDetails/TourListDetailsReview';
import TourListDetailsDatesPrices from '@/components/TourListDetails/TourListDetailsDatesPrices';
import TourListDetailsSuggestions from '@/components/TourListDetails/TourListDetailsSuggestions';
import TourListDetailsVideoGallery from '@/components/TourListDetails/TourListDetailsVideoGallery';
const TouristListDetails = () => {
  const sectionTabs = [
    {
      label: 'Description',
      link: 'description',
    },
    {
      label: 'Itinerary Plan',
      link: 'itinerary-plan',
    },
    {
      label: 'Dates and Price',
      link: 'dates-and-price',
    },
    {
      label: 'Brochure Download',
      link: 'brochure-download',
    },
    {
      label: 'Video',
      link: 'Video',
    },
  ];

  return (
    <div>
      {/* Hero section */}
      <CommonHeroBanner
        bg={bg}
        title="Canada & Alaska"
        italic="Travel"
        duration=" 15 Days From  €3,850.00 "
      />

      {/* tabs */}
      <TourListDetailsTab sectionTabs={sectionTabs} />

      {/* tab contents */}
      <section className="container mx-auto">
        {/* description */}
        <TourListDetailsDescription />

        {/* itinerary */}
        <TourListDetailsItinerary />

        {/* Testimonials */}
        <TourListDetailsReview />

        {/* Dates and Prices */}
        <TourListDetailsDatesPrices />

        {/* video gallery section */}
        <TourListDetailsVideoGallery />

        {/* suggestions */}
        <TourListDetailsSuggestions />
      </section>
    </div>
  );
};

export default TouristListDetails;
