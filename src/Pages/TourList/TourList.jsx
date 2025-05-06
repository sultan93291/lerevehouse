import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import bg from "@/assets/images/tourtlist-bg.jpg";
import TravelListCard from "@/components/common/Cards/TravelListCard";
import { useParams } from "react-router-dom";
import destinationSuggestionBg from "@/assets/images/tourtlist-bg.jpg";
import { InfinitySpin } from "react-loader-spinner";
import toast from "react-hot-toast";
import { useGetTripPackageDetailsQuery } from "@/Redux/features/api/apiSlice";

const TourList = () => {
  const { title } = useParams();

  const { data, error, isLoading } = useGetTripPackageDetailsQuery(title, {
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
        title="Travel to"
        bg={`${imgBaseurl}/${data?.data[0]?.travel_style?.image}`}
        italic={data?.data[0]?.travel_style?.name}
      />

      {/* Tour Lists */}
      <section className=" my-10 xl:my-20 container mx-auto  ">
        {/* title */}
        <div>
          <h2 className="text-center text-3xl xl:text-4xl font-editorsNoteNormal text-primary">
            All <span className="font-editorsNoteItalic">tours</span> for
            <span> {data?.data[0]?.travel_style?.name} </span>
          </h2>
        </div>

        {/* cards */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3  gap-4 xl:gap-6 mt-10">
          {data?.data?.map(item => (
            <TravelListCard key={item?.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TourList;
