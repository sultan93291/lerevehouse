import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import ExploreJourney from "@/components/TravelStylesDetails/ExploreJourney";
import bg from "../../assets/images/travelstyle-detailsbg.png";
import FeaturedTravels from "@/components/TravelStylesDetails/FeaturedTravels";

const TravelStyleDetailsPage = () => {
  return (
    <div>
      <CommonHeroBanner bg={bg} title="WILD LIFE" italic="SAFARI" />
      <ExploreJourney />
      <FeaturedTravels />
    </div>
  );
};

export default TravelStyleDetailsPage;
