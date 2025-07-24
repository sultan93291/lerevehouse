import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import ExploreJourney from "@/components/TravelStylesDetails/ExploreJourney";
import bg from "../../assets/images/travelstyle-detailsbg.png";
import FeaturedTravels from "@/components/TravelStylesDetails/FeaturedTravels";
import { useParams } from "react-router-dom";
import {
  useGetTravelStylesDetailsDataQuery,
  useGetTripPackageDetailsQuery,
  useMetaDetailsDataMutation,
} from "@/Redux/features/api/apiSlice";
import { InfinitySpin } from "react-loader-spinner";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import HelmetComponent from "@/components/Helmet/Helmet";
import { useTranslation } from "react-i18next";

const TravelStyleDetailsPage = () => {
  const { id } = useParams();

  const { t } = useTranslation();

  const [metaDetailsData, { isLoading: isMetaLoading, isSuccess, isError }] =
    useMetaDetailsDataMutation();

  const [metaData, setMetaData] = useState(null);

  useEffect(() => {
    metaDetailsData("travel_style_details")
      .unwrap()
      .then(res => setMetaData(res?.data))
      .catch(err => console.error("Meta save error:", err));
  }, [metaDetailsData]);

  const { data, error, isLoading } = useGetTripPackageDetailsQuery(id, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const {
    data: singleData,
    error: singleError,
    isLoading: isSingleLoading,
  } = useGetTravelStylesDetailsDataQuery(id, {
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

  console.log(`${imgBaseurl}/${singleData?.data[0]?.image}}`);

  console.log(singleData);
  

  return (
    <HelmetComponent
      title={metaData?.title}
      description={metaData?.description}
    >
      <CommonHeroBanner
        bg={`${imgBaseurl}/${singleData?.data[0]?.image}`}
        title={singleData?.data[0]?.title}
        altTxt={singleData?.data[0]?.image_alt_txt}
      />
      <ExploreJourney
        data={singleData?.data[0]}
        btnTxt={t("viewAllTravelStyle")}
      />
      <FeaturedTravels data={data?.data} />
    </HelmetComponent>
  );
};

export default TravelStyleDetailsPage;
