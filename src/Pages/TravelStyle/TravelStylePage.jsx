import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import travelstylesBg from "../../assets/images/travelstyles-bg.png";
import Description from "../../components/TravelStyles/Description";
import ExploreTravel from "../../components/TravelStyles/ExploreTravel";
import AdvanturePlaningSection from "../../components/TravelStyles/AdvanturePlaningSection";
import TravelCta from "../../components/TravelStyles/TravelCta";
import { useGetTravelStylesDescreptionDataQuery, useGetTravelStylesHeroSectionDataQuery } from "@/Redux/features/api/apiSlice";

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
