import { useEffect, useState } from "react";
import { useMetaDetailsDataMutation } from "@/Redux/features/api/apiSlice";

import HomeFaqSection from "./Sections/HomeFaqSection";
import HomepageAdventure from "./Sections/HomepageAdventure";
import HomepageDestinationTabContainer from "./Sections/HomepageDestinationTabContainer";
import HomepageExtraOrdinarySection from "./Sections/HomepageExtraOrdinarySection";
import HomepageHero from "./Sections/HomepageHero";
import HomepageTestimonials from "./Sections/HomepageTestimonials";
import RequestedTrips from "./Sections/RequestedTrips";
import SmartOffersSection from "./Sections/SmartOffersSection";
import WhyBookSection from "./Sections/WhyBookSection";
import HelmetComponent from "@/components/Helmet/Helmet";

const Homepage = () => {
  const [metaDetailsData, { isLoading, isSuccess, isError }] =
    useMetaDetailsDataMutation();

  const [metaData, setMetaData] = useState(null);

  useEffect(() => {
    metaDetailsData("home")
      .unwrap()
      .then(res => setMetaData(res?.data))
      .catch(err => console.error("Meta save error:", err));
  }, [metaDetailsData]);

  return (
    <HelmetComponent
      title={metaData?.title}
      description={metaData?.description}
    >
      <HomepageHero />
      <HomepageDestinationTabContainer />
      <WhyBookSection />
      <RequestedTrips />
      <HomeFaqSection />
      <SmartOffersSection />
      <HomepageTestimonials />
      <HomepageExtraOrdinarySection />
      <HomepageAdventure />
    </HelmetComponent>
  );
};

export default Homepage;
