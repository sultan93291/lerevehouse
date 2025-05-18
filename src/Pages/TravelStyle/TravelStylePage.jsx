import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import travelstylesBg from "../../assets/images/travelstyles-bg.png";
import Description from "../../components/TravelStyles/Description";
import ExploreTravel from "../../components/TravelStyles/ExploreTravel";
import AdvanturePlaningSection from "../../components/TravelStyles/AdvanturePlaningSection";
import TravelCta from "../../components/TravelStyles/TravelCta";
import {
  useGetTravelStylesDescreptionDataQuery,
  useGetTravelStylesHeroSectionDataQuery,
} from "@/Redux/features/api/apiSlice";
import { InfinitySpin } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

const TravelStylePage = () => {
  const { data, error, isLoading } = useGetTravelStylesHeroSectionDataQuery(
    undefined,
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  const {
    data: descreptionData,
    error: descreptionError,
    isLoading: isdecreptionLoading,
  } = useGetTravelStylesDescreptionDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  if (error) {
    const errorMessage =
      error.data?.message || error.error || error.status || error.message;
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }

  if (descreptionError) {
    const errorMessage =
      descreptionError.data?.message ||
      descreptionError.error ||
      descreptionError.status ||
      descreptionError.message;
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }

  if (isLoading || isdecreptionLoading) {
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

  const imgBaseurl = import.meta.env.VITE_SERVER_URL;
  const slicedTxt = data?.data?.title?.split(" ") || [];
  const normalTxt = slicedTxt[0];
  const styledTxt = slicedTxt.slice(1).join(" ");

  return (
    <div>
      <CommonHeroBanner
        bg={`${imgBaseurl}/${data?.data?.background_image}`}
        uppercaseItalic={true}
        uppercaseTitle={true}
        title={normalTxt}
        italic={styledTxt}
      />
      <Description Description={data?.data?.description} />
      <ExploreTravel travelMode={"styles"} />
      <AdvanturePlaningSection />
      <TravelCta
        imgUrl={`${imgBaseurl}/${descreptionData?.data[0]?.background_image}`}
        title={descreptionData?.data[0]?.title}
        description={descreptionData?.data[0]?.short_description}
        btnText="Contact Us"
      />
    </div>
  );
};

export default TravelStylePage;
