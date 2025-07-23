import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import TravelListCard from "@/components/common/Cards/TravelListCard";
import { useParams, useSearchParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import toast from "react-hot-toast";
import {
  useGetDestinationDetailsPackageQuery,
  useGetTripPackageDetailsQuery,
} from "@/Redux/features/api/apiSlice";
import { useTranslation } from "react-i18next";

const TourList = () => {
  const { title } = useParams();
  const [searchParams] = useSearchParams();
  const isDestination = searchParams.get("isdestination") === "true";

  const { data, error, isLoading } = useGetTripPackageDetailsQuery(title, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const { t } = useTranslation();

  const {
    data: destinationSuggestionData,
    error: destinationSuggestionError,
    isLoading: isdestinationLoading,
  } = useGetDestinationDetailsPackageQuery(title, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

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

  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  const bannerImage = isDestination
    ? `${imgBaseurl}/${destinationSuggestionData?.data?.[0]?.trip_package_image}`
    : `${imgBaseurl}/${data?.data?.[0]?.travel_style?.image}`;

  const italicText = isDestination
    ? destinationSuggestionData?.data?.[0]?.trip_package_title
    : data?.data?.[0]?.travel_style?.name;

  const tourData = isDestination ? destinationSuggestionData?.data : data?.data;

  return (
    <div>
      <CommonHeroBanner
        title={t("travelTo")}
        bg={bannerImage}
        italic={italicText}
      />

      {/* Tour Lists */}
      <section className="my-10 xl:my-20 container mx-auto">
        {/* Title */}
        <div>
          <h2 className="text-center text-3xl xl:text-4xl font-editorsNoteNormal text-primary">
            {t("allToursFor")}
            <span>
              {" "}
              {isDestination
                ? destinationSuggestionData?.data?.[0]?.trip_package_title
                : data?.data?.[0]?.travel_style?.name}
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-4 xl:gap-6 mt-10">
          {tourData?.length > 0 ? (
            tourData.map(item => <TravelListCard key={item?.id} item={item} />)
          ) : (
            <p className="col-span-full text-center text-gray-500">
              {t("noTourFound")}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default TourList;
