import { useEffect, useState } from "react";
import {
  useGetHomePageTitleQuery,
  useMetaDetailsDataMutation,
} from "@/Redux/features/api/apiSlice";

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

  const {
    data,
    error,
    isLoading: isHomePageTitleloading,
  } = useGetHomePageTitleQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  console.log(data?.data);

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
      <WhyBookSection title={data?.data[0].title} />
      <RequestedTrips title={data?.data[1].title} />
      <HomeFaqSection />
      <SmartOffersSection title={data?.data[2].title} />
      <HomepageTestimonials title={data?.data[3].title} />
      <HomepageExtraOrdinarySection title={data?.data[4].title} />
      <HomepageAdventure />
    </HelmetComponent>
  );
};

export default Homepage;
