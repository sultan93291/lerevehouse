import CommonHeroBanner from '@/components/common/HeroBanner/CommonHeroBanner';
import travelstylesBg from '../../assets/images/travelstyles-bg.png';
import Description from '../../components/TravelStyles/Description';
import ExploreTravel from '../../components/TravelStyles/ExploreTravel';
import AdvanturePlaningSection from '../../components/TravelStyles/AdvanturePlaningSection';
import TravelCta from '../../components/TravelStyles/TravelCta';


const TravelStylePage = () => {
  return (
    <div>
      <CommonHeroBanner
        bg={travelstylesBg}
        uppercaseItalic={true}
        uppercaseTitle={true}
        title="TRAVEL"
        italic="STYLES"
      />
      <Description />
      <ExploreTravel travelMode={"styles"} />
      <AdvanturePlaningSection />
      <TravelCta
        title="Travel Questions? We're Here to Help!"
        description="From itinerary ideas to personalized travel solutions, our team is here to make your journey unforgettable. Let’s plan together!"
        btnText="Contact Us"
      />
    </div>
  );
};

export default TravelStylePage;
