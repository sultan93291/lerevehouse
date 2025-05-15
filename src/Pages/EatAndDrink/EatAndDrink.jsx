import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import TourTab from "../TourGuide/Sections/TourTab";
import ParkDetails from "@/components/ParkDetails/ParkDetails";
import crab from "../../assets/images/eat-and-drink/crab.jpg";
import {
  EatAndDrink,
  EatAndDrinkTabData,
} from "@/components/DummyData/EatAndDrinkDummyData";
import Delights from "./Sections/Delights";
import {
  useGetEatingAndDrinkingHeroSectionDataQuery,
  useGetAllEatingAndDrinkingDataQuery,
} from "@/Redux/features/api/apiSlice";
import { InfinitySpin } from "react-loader-spinner";
import toast from "react-hot-toast";

const TourGuide = () => {
  const imgBaseurl = import.meta.env.VITE_SERVER_URL;
  const { data, error, isLoading } =
    useGetEatingAndDrinkingHeroSectionDataQuery(undefined, {
      refetchOnFocus: true,
      refetchOnReconnect: true,
    });

  const {
    data: allEatingandDrinkingkData,
    error: allEatingandDrinkingError,
    isLoading: isEatingAndDrinkigLaoding,
  } = useGetAllEatingAndDrinkingDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  if (isLoading || isEatingAndDrinkigLaoding) {
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
    } else if (allEatingandDrinkingError) {
      errorMessage =
        allEatingandDrinkingError.data?.message ||
        allEatingandDrinkingError.error ||
        allEatingandDrinkingError.status ||
        allEatingandDrinkingError.message;
    }
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }

  console.log(allEatingandDrinkingkData?.data);

  return (
    <div>
      <CommonHeroBanner
        title={`${data?.data?.title}`}
        isDangerousHtml={true}
        // subTittle={data?.data?.sub_title}
        bg={`${imgBaseurl}/${data?.data?.background_image}`}
        italic={true}
        uppercaseItalic={false}
      />
      <Delights data={data?.data} />
      <TourTab data={allEatingandDrinkingkData?.data} />
      <div className="md:py-5 py-2 bg-chocolate">
        <div className="container flex items-center text-white justify-center font-editorsNoteItalic text-[28px] md:text-[40px] font-light leading-[160%] ">
          We&apos;ve added a seat at the table, yours!
        </div>
      </div>
      <div className=" flex flex-col">
        {allEatingandDrinkingkData?.data?.map((details, index) => (
          <div
            key={details?.id}
            id={details?.name}
            style={{
              backgroundColor: index % 2 === 0 ? "#1686c743" : "#fff",
            }}
          >
            <ParkDetails
              Heading={details?.name}
              SubHeading={details?.eating_drinking_details?.title}
              descreption={details?.eating_drinking_details?.description}
              BtnTxt={details?.BtnTxt}
              Images={details?.eating_drinking_details?.images}
              isHover={details?.isHover}
              isDouble={details?.isDouble}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourGuide;
