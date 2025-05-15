import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import mountain from "../../assets/images/tourist-guide/mountain_sea.png";
import MapSection from "./Sections/MapSection";
import TourTab from "./Sections/TourTab";
import ParkDetails from "@/components/ParkDetails/ParkDetails";

import {
  parkDetailsData,
  TourTabData,
} from "@/components/DummyData/TourGuidData";
import {
  useGetNationalParkHeroSectionDataQuery,
  useGetAllNationalParkDataQuery,
} from "@/Redux/features/api/apiSlice";
import { InfinitySpin } from "react-loader-spinner";
import toast from "react-hot-toast";

const TourGuide = () => {
  const { data, error, isLoading } = useGetNationalParkHeroSectionDataQuery(
    undefined,
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  const {
    data: allNationalParkData,
    error: allNationalParkError,
    isLoading: isallnationalParkLaoding,
  } = useGetAllNationalParkDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  if (isLoading || isallnationalParkLaoding) {
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
    let errorMessage;
    if (error) {
      errorMessage =
        error.data?.message || error.error || error.status || error.message;
    } else if (allNationalParkError) {
      errorMessage =
        allNationalParkError.data?.message ||
        allNationalParkError.error ||
        allNationalParkError.status ||
        allNationalParkError.message;
    }
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }


  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  return (
    <div>
      <CommonHeroBanner
        title={data?.data?.title}
        bg={`${imgBaseurl}/${data?.data?.background_image}`}
        italic={true}
        uppercaseItalic={false}
      />
      <MapSection data={data?.data} />
      <TourTab data={allNationalParkData.data} />
      <div className=" py-5 bg-chocolate">
        <div className="container flex items-center text-white justify-center font-editorsNoteItalic text-2xl md:text-[40px] font-light leading-[160%] ">
          Find your best possible tour
        </div>
      </div>
      <div className=" flex flex-col">
        {allNationalParkData?.data?.map((details, index) => {
          return (
            <div
              id={details?.name}
              key={details?.id}
              style={{
                backgroundColor: index % 2 === 0 ? "#1686c743" : "#fff",
              }}
            >
              <ParkDetails
                Heading={details?.name}
                SubHeading={details?.national_park_details?.title}
                descreption={details?.national_park_details?.description}
                BtnTxt={details?.BtnTxt}
                Images={details?.national_park_details?.images}
                isHover={details?.isHover}
                isDouble={details?.isDouble}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TourGuide;
