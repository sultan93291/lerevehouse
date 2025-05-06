import TourListDetailsTab from "@/components/TourListDetails/TourListDetailsTab";
import TourListDetailsDescription from "@/components/TourListDetails/TourListDetailsDescription";
import TourListDetailsReview from "@/components/TourListDetails/TourListDetailsReview";
import TourListDetailsDatesPrices from "@/components/TourListDetails/TourListDetailsDatesPrices";
import TourListDetailsSuggestions from "@/components/TourListDetails/TourListDetailsSuggestions";
import TourListDetailsVideoGallery from "@/components/TourListDetails/TourListDetailsVideoGallery";
import ItenaryIdeaDetails from "@/components/TourListDetails/ItenaryIdeaDetails";
import TourListDetailsBanner from "@/components/TourListDetails/TourListDetailsBanner";
import bg from "../../assets/images/destination-bg.jpg";
import WaterActivity from "@/components/TourListDetails/WaterActivity";
import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import { useTripPackageDetailsQuery } from "@/Redux/features/api/apiSlice";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import toast from "react-hot-toast";

const TouristListDetails = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useTripPackageDetailsQuery(id, {
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

  const bestTimeRange = data?.data?.trip_detail?.best_time_to_go;

  let bestTimeToGo;

  if (bestTimeRange) {
    const [start, end] = bestTimeRange.split(" - ");
    const startDate = new Date(start);
    const endDate = new Date(end);

    const startMonth = startDate.toLocaleString("default", { month: "short" });
    const endMonth = endDate.toLocaleString("default", { month: "short" });
    bestTimeToGo = `${startMonth} - ${endMonth}`;
  }

  const heroSectionData = {
    heroSectionTittle: data?.data?.trip_detail?.hero_section_title,
    heroSectionSubtittle: data?.data?.trip_detail?.hero_section_sub_title,
    herSectionDescreption: data?.data?.trip_detail?.hero_section_description,
    bestTimeToGo: bestTimeToGo,
    price: data?.data?.package_price,
    suggestedHolidayLenght: data?.data.duration,
    heroImage: data?.data?.trip_package_image,
  };

  const itenariesData = {
    itenareiesSubTittle: data?.data?.trip_detail?.itinerary_sub_title,
    allItenareies: data?.data?.itineraries,
  };


  const sectionTabs = [
    {
      label: "Description",
      link: "description",
    },
    {
      label: "Itinerary Plan",
      link: "itinerary-plan",
    },
    {
      label: "Dates and Price",
      link: "dates-and-price",
    },
    {
      label: "Brochure Download",
      link: "brochure-download",
    },
    {
      label: "Video",
      link: "Video",
    },
  ];

  return (
    <div>
      {/* Hero section */}
      {/* <CommonHeroBanner
        bg={bg}
        title="Canada & Alaska"
        italic="Travel"
        duration=" 15 Days From  €3,850.00 "
      /> */}
      <TourListDetailsBanner herSectionData={heroSectionData} />

      {/* tabs */}
      <TourListDetailsTab sectionTabs={sectionTabs} />

      {/* tab contents */}
      <section className="container z-[0] mx-auto">
        {/* description */}
        <TourListDetailsDescription
          descreptionData={data?.data?.trip_detail?.description}
        />

        {/* itinerary */}
        <ItenaryIdeaDetails itenariesData={itenariesData} />

        {/* Water Activity */}
        {/* <WaterActivity /> */}

        {/* Testimonials */}
        <TourListDetailsReview isHeading={true} />

        {/* Dates and Prices */}
        <TourListDetailsDatesPrices />

        {/* video gallery section */}
        <TourListDetailsVideoGallery videos={data?.data?.videos} />

        {/* suggestions */}
        <TourListDetailsSuggestions />
      </section>
    </div>
  );
};

export default TouristListDetails;
