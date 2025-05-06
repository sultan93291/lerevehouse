import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import React from "react";
import ExploreJourney from "@/components/TravelStylesDetails/ExploreJourney";
import FeaturedTravels from "@/components/TravelStylesDetails/FeaturedTravels";
import HoneyMoon from "../../assets/images/honey-moon/honeymoon.png";
import { useGetTripPackageDetailsQuery } from "@/Redux/features/api/apiSlice";
import { InfinitySpin } from "react-loader-spinner";
import toast from "react-hot-toast";

const ViagaNozi = () => {
  const  id  = 1
  const { data, error, isLoading } = useGetTripPackageDetailsQuery(id, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  if (isLoading) {
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

  if (error) {
    const errorMessage =
      error.data?.message || error.error || error.status || error.message;
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }

  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  return (
    <div>
      <CommonHeroBanner
        bg={`${imgBaseurl}/${data?.data[0].travel_style?.image}`}
        title="VIAGGI NOZZE"
      />
      {/* <ExploreJourney isBtn={false} btnTxt={"All honeymoon Trips "} /> */}
      <FeaturedTravels data={data?.data} isHoneyMoon={true} />
    </div>
  );
};

export default ViagaNozi;
