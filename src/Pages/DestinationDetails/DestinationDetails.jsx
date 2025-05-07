import CommonHeroBannerVideo from "@/components/common/HeroBanner/CommonHeroBannerVideo";
import heroBg from "@/assets/video/destination-details.mp4";
import DestinationDetailsTabs from "@/components/DestinationDetails/DestinationDetailsTabs";
import DestinationDetailsDescription from "@/components/DestinationDetails/DestinationDetailsDescription";
import destinationSuggestionBg from "@/assets/images/tourtlist-bg.jpg";
import DestinationDetailsSlider from "@/components/DestinationDetails/DestinationDetailsSlider";
import WhyBookSection from "../Homepage/Sections/WhyBookSection";
import place1 from "@/assets/images/places-to-visit/1.jpg";
import place2 from "@/assets/images/places-to-visit/2.jpg";
import place3 from "@/assets/images/places-to-visit/3.jpg";
import DestinationPlacesToVisit from "@/components/DestinationDetails/DestinationPlacesToVisit";
import lux1 from "@/assets/images/luxury/1.jpg";
import lux2 from "@/assets/images/luxury/2.jpg";
import lux3 from "@/assets/images/luxury/3.jpg";
import lux4 from "@/assets/images/luxury/4.jpg";
import lux5 from "@/assets/images/luxury/5.jpg";
import lux6 from "@/assets/images/luxury/6.jpg";
import lux7 from "@/assets/images/luxury/7.jpg";
import lux8 from "@/assets/images/luxury/8.jpg";
import DestinationLuxurySection from "@/components/DestinationDetails/DestinationLuxurySection";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetDestinationDetailsPackageQuery,
  useGetDestinationDetailsQuery,
} from "@/Redux/features/api/apiSlice";
import toast from "react-hot-toast";
import { InfinitySpin } from "react-loader-spinner";

const DestinationDetails = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetDestinationDetailsQuery(id, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const {
    data: destinationSuggestionData,
    error: destinationSuggestionError,
    isLoading: isdestinationLoading,
  } = useGetDestinationDetailsPackageQuery(id, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });


  const title = data?.data?.name || "";
  const sectionTabs = [
    { label: `${title} Holiday`, link: `${title}-holiday` },
    { label: "Tour", link: "suggestions" },
    { label: "Place to visit", link: "places-to-visit" },
    { label: "Where to stay", link: "where-to-stay" },
  ];

  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    if (title) {
      setActiveTab(sectionTabs[0]);
    }
  }, [title]);

  // Loading state
  if (isLoading || isdestinationLoading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-white">
        <InfinitySpin
          visible={true}
          width="200"
          color="#004265"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }

  // Error state
  if (error) {
    const errorMessage =
      error.data?.message || error.error || error.status || error.message;
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }

  if (destinationSuggestionError) {
    const errorMessage =
      destinationSuggestionError.data?.message ||
      destinationSuggestionError.error ||
      destinationSuggestionError.status ||
      destinationSuggestionError.message;
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }

  // Wait for title and tab setup
  if (!title || !activeTab) return null;

  const imgBaseurl = import.meta.env.VITE_SERVER_URL;
  const DescreptionData = data?.data?.destination_details;

  return (
    <div className="relative ">
      {/* hero */}
      <CommonHeroBannerVideo
        heroBg={`${imgBaseurl}/${data?.data?.destination_details?.video}`}
        title={title.toLowerCase()}
        capitalize={true}
      />

      {/*  Section Tabs */}
      <DestinationDetailsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sectionTabs={sectionTabs}
      />

      <section className="container  mx-auto my-10 xl:my-20    ">
        {/* description container*/}
        <DestinationDetailsDescription
          data={DescreptionData}
          id={`${title}-holiday`}
        />

        {/* Suggestions container */}
        <DestinationDetailsSlider
          destinationSuggestions={destinationSuggestionData?.data}
          title={title}
        />

        {/* why book this tour section */}
        <WhyBookSection />

        {/* places to visit section */}
        <DestinationPlacesToVisit placesToVisitInfo={data?.data} />

        {/* Luxury Section */}
        <DestinationLuxurySection luxuryPlacesInfo={destinationSuggestionData?.data} />
      </section>
    </div>
  );
};

export default DestinationDetails;
