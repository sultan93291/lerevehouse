import TourListDetailsTab from "@/components/TourListDetails/TourListDetailsTab";
import TourListDetailsDescription from "@/components/TourListDetails/TourListDetailsDescription";
import TourListDetailsReview from "@/components/TourListDetails/TourListDetailsReview";
import TourListDetailsDatesPrices from "@/components/TourListDetails/TourListDetailsDatesPrices";
import TourListDetailsSuggestions from "@/components/TourListDetails/TourListDetailsSuggestions";
import TourListDetailsVideoGallery from "@/components/TourListDetails/TourListDetailsVideoGallery";
import ItenaryIdeaDetails from "@/components/TourListDetails/ItenaryIdeaDetails";
import TourListDetailsBanner from "@/components/TourListDetails/TourListDetailsBanner";
import WaterActivity from "@/components/TourListDetails/WaterActivity";
const TouristListDetails = () => {
  const sectionTabs = [
    {
      label: "Description",
      link: "description",
    },
    {
      label: "Itinerary Plan",
      link: "itinerary-plan",
    },
    {
      label: "Dates and Price",
      link: "dates-and-price",
    },
    {
      label: "Brochure Download",
      link: "brochure-download",
    },
    {
      label: "Video",
      link: "Video",
    },
  ];

  return (
    <div>
      {/* Hero section */}
      {/* <CommonHeroBanner
        bg={bg}
        title="Canada & Alaska"
        italic="Travel"
        duration=" 15 Days From  €3,850.00 "
      /> */}
      <TourListDetailsBanner />

      {/* tabs */}
      <TourListDetailsTab sectionTabs={sectionTabs} />

      {/* tab contents */}
      <section className="container mx-auto">
        {/* description */}
        <TourListDetailsDescription />

        {/* itinerary */}
        <ItenaryIdeaDetails />

        {/* Water Activity */}
        <WaterActivity />

        {/* Testimonials */}
        <TourListDetailsReview isHeading={true} />

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
