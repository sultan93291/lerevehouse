import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import React from "react";
import ExploreJourney from "@/components/TravelStylesDetails/ExploreJourney";
import FeaturedTravels from "@/components/TravelStylesDetails/FeaturedTravels";
import HoneyMoon from "../../assets/images/honey-moon/honeymoon.png"

const ViagaNozi = () => {
  return (
    <div>
      <CommonHeroBanner bg={HoneyMoon} title="VIAGGI NOZZE" />
      <ExploreJourney btnTxt={"All honeymoon Trips "} />
      <FeaturedTravels isHoneyMoon={true} />
    </div>
  );
};

export default ViagaNozi;
