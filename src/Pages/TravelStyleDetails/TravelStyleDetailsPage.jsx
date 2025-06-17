import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import ExploreJourney from "@/components/TravelStylesDetails/ExploreJourney";
import bg from "../../assets/images/travelstyle-detailsbg.png";
import FeaturedTravels from "@/components/TravelStylesDetails/FeaturedTravels";
import { useParams } from "react-router-dom";
import { useGetTripPackageDetailsQuery } from "@/Redux/features/api/apiSlice";
import { InfinitySpin } from "react-loader-spinner";
import toast from "react-hot-toast";

const TravelStyleDetailsPage = () => {
  const { id } = useParams();
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
        bg={`${imgBaseurl}/${data?.data[0]?.travel_style?.image}`}
        title={data?.data[0]?.travel_style?.name}
      />
      <ExploreJourney btnTxt={"View All travel Style"} />
      <FeaturedTravels data={data?.data} />
    </div>
  );
};

export default TravelStyleDetailsPage;
