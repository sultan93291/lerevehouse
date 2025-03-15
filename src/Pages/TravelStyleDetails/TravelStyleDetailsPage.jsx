import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import ExploreJourney from "@/components/TravelStylesDetails/ExploreJourney";
import bg from "../../assets/images/travelstyle-detailsbg.png";
import FeaturedTravels from "@/components/TravelStylesDetails/FeaturedTravels";
import { useParams } from "react-router-dom";

const TravelStyleDetailsPage = () => {
  const { slug } = useParams();
  return (
    <div>
      <CommonHeroBanner bg={bg} title={slug} />
      <ExploreJourney btnTxt={"View All travel Style"} />
      <FeaturedTravels />
    </div>
  );
};

export default TravelStyleDetailsPage;
