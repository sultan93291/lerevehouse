import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import React from "react";
import ExploreJourney from "@/components/TravelStylesDetails/ExploreJourney";
import FeaturedTravels from "@/components/TravelStylesDetails/FeaturedTravels";
import HoneyMoon from "../../assets/images/honey-moon/honeymoon.png";
import {
  useGetHoneyMoonHeroSectionDataQuery,
  useGetTransportationHeroSectionDataQuery,
  useGetTripPackageDetailsQuery,
} from "@/Redux/features/api/apiSlice";
import { InfinitySpin } from "react-loader-spinner";
import toast from "react-hot-toast";

const ViagaNozi = () => {
  const id = 1;
  const { data, error, isLoading } = useGetTripPackageDetailsQuery(id, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

    const { data:transportData, error:transportError, isLoading:isTransportLoading } = useGetTransportationHeroSectionDataQuery(id, {
      refetchOnFocus: true,
      refetchOnReconnect: true,
    });

  const {
    data: honeyMoondata,
    error: honeyMoonError,
    isLoading: isHoneymoonLoading,
  } = useGetHoneyMoonHeroSectionDataQuery(id, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  if (isLoading || isHoneymoonLoading) {
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

  if (error || honeyMoonError) {
    const errorMessage =
      error.data?.message || error.error || error.status || error.message;
    const honeyMoonErrorMsg =
      honeyMoonError.data?.message ||
      honeyMoonError.error ||
      honeyMoonError.status ||
      honeyMoonError.message;
    if (errorMessage) {
      toast.error(errorMessage);
    } else if (honeyMoonError) {
      toast.error(honeyMoonErrorMsg);
    }
  }

  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  return (
    <div>
      <CommonHeroBanner
        bg={`${imgBaseurl}/${honeyMoondata?.data?.background_image}`}
        title={honeyMoondata?.data?.title}
      />
      {/* <ExploreJourney isBtn={false} btnTxt={"All honeymoon Trips "} /> */}
      <FeaturedTravels data={data?.data} isHoneyMoon={true} />
    </div>
  );
};

export default ViagaNozi;
