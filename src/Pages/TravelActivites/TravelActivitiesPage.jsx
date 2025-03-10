import TripAttraction from "@/components/TravelActivities/TripAttraction";
import TravelActivitiesImg from "../../assets/images/travel-activities-bg.png";
import CommonHeroBannerV2 from "@/components/common/HeroBanner/CommonHeroBannerV2";
import BrowseThings from "@/components/TravelActivities/BrowseThings";
import ActivitiesCanDo from "@/components/TravelActivities/ActivitiesCanDo";
import TravelCta from "@/components/TravelStyles/TravelCta";

const travelPackage = {
  category: "Tailor-Made Journeys",
  title: "Tuscany And Umbria: Italy’s Rural Heartland",
  subtitle: "Private journey designed by you",
  description:
    "This illuminating adventure through Umbria and Tuscany takes in some of Italy’s most spectacular landscapes, visiting exquisite wineries, Renaissance hilltop towns, and the traditional workshops of master artisans.",
  details: {
    suggestedLength: "10 Days",
    bestTimeToGo: "May-Oct",
    priceFrom: "17,995",
  },
};

const TravelActivitiesPage = () => {
  return (
    <div>
      <CommonHeroBannerV2 item={travelPackage} bgImg={TravelActivitiesImg} />
      <TripAttraction />
      <BrowseThings />
      <ActivitiesCanDo />
      <div className="2xl:pt-20">
        <TravelCta
          title="Worldwide Adventure planing Holidays"
          description="we are an experienced tour operator for West Canada and West Usa, Alaska, the Caribbean, Mexico and Polynesia destinations, with 24 hour assistance"
          btnText="Contact Us"
        />
      </div>
    </div>
  );
};

export default TravelActivitiesPage;
