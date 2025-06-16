import canadaMap from "../../assets/images/guida-turistica/canadaMap.png";
import { ArrowSignSvg } from "@/components/common/SvgContainer/SvgContainer";
import TravelDetailsSlider from "@/components/GuidaTuristica/GuidaTuristica";

import tent from "../../assets/images/guida-turistica/tent.jpg";
import dolphin from "../../assets/images/guida-turistica/dolphin.jpg";
import helicopter from "../../assets/images/guida-turistica/helicopter.jpg";
import lakeMountain from "../../assets/images/guida-turistica/lakeMountain.jpg";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { useEffect } from "react";

import {
  useGetTouristGuideHeroSectionDataQuery,
  useGetTouristGuideSpecailistsSectionDataQuery,
  useGetCanadaTravelDataQuery,
  useGetTouristGuidePlacesQuery,
} from "@/Redux/features/api/apiSlice";
import toast from "react-hot-toast";

const FeaturedLinks = [
  {
    txt: "View the map of Canada",
    redirect: "/canada-map",
  },
  {
    txt: "Natural Wonders: National Parks Special",
    redirect: "/tour-guide",
  },
  {
    txt: "Eating and drinking in Canada, discover our tips",
    redirect: "/eat&-drink",
  },
  {
    txt: "Discover one of our tours in Canada",
    redirect: "/destination-details/Canada%20Ovest",
  },
  {
    txt: "Customize your trip to Canada",
    redirect: "/tour-mezi",
  },
];

const TouristGuide = () => {
  const { data, error, isLoading } = useGetTouristGuideHeroSectionDataQuery(
    undefined,
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  const { id } = useParams();

  const {
    data: tourPlacesData,
    error: tourPalcesError,
    isLoading: isTouristPlaceLoading,
  } = useGetTouristGuidePlacesQuery(id, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const {
    data: canadaData,
    error: canadaError,
    isLoading: isCanadaLoading,
  } = useGetCanadaTravelDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const {
    data: getSpecaillistData,
    error: getspcialistsError,
    isLoading: isSpecaillistLoading,
  } = useGetTouristGuideSpecailistsSectionDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const navigate = useNavigate();

  console.log(tourPlacesData);

  useEffect(() => {
    if (error) {
      const errorMessage =
        error.data?.message || error.error || error.status || error.message;
      if (errorMessage) toast.error(errorMessage);
    } else if (getspcialistsError) {
      const errorMessage =
        getspcialistsError.data?.message ||
        getspcialistsError.error ||
        getspcialistsError.status ||
        getspcialistsError.message;
      if (errorMessage) toast.error(errorMessage);
    } else if (canadaError) {
      const errorMessage =
        canadaError.data?.message ||
        canadaError.error ||
        canadaError.status ||
        canadaError.message;
      if (errorMessage) toast.error(errorMessage);
    } else if (tourPalcesError) {
      const errorMessage =
        tourPalcesError.data?.message ||
        tourPalcesError.error ||
        tourPalcesError.status ||
        tourPalcesError.message;
      if (errorMessage) toast.error(errorMessage);
    }
  }, [error, getspcialistsError]);

  if (
    isLoading ||
    isSpecaillistLoading ||
    isCanadaLoading ||
    isTouristPlaceLoading
  ) {
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

  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  return (
    <section className="md:mt-[128px] mt-28 2xl:py-[96px] container flex flex-col 2xl:gap-y-[153px] gap-y-10">
      <div className="flex flex-col 2xl:gap-y-[96px] gap-y-9">
        <div className="flex flex-col 2xl:gap-y-8 items-center justify-center">
          <div
            dangerouslySetInnerHTML={{ __html: data?.data[0]?.title }}
            className="text-[#1687C7] text-3xl md:text-[50px] space-y-3  2xl:text-[64px] font-interTight font-bold leading-[160%]  "
          ></div>
          <div className="flex items-center flex-col 2xl:flex-row 2xl:gap-x-[155px] gap-12">
            <img
              src={canadaMap}
              className="hidden xl:block md:w-[750px] md:h-[471px]"
              alt="not foun"
            />
            <div className="flex flex-col gap-y-4 md:mt-0">
              <div
                dangerouslySetInnerHTML={{ __html: data.data[0].description }}
                className="text-text-gray text-sm md:text-base leading-[180%] font-normal tracking-[1px] mt-3 md:mt-0"
              ></div>
              <div className="flex flex-col gap-y-[6px]">
                {FeaturedLinks.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" flex flex-row gap-x-3 hover:underline ease-in-out duration-300 items-center "
                    >
                      <div className="h-[18px] flex items-center cursor-pointer justify-center w-[18px] rounded-full bg-[#1687C7]  ">
                        <ArrowSignSvg className="bg-red-500" />
                      </div>
                      <NavLink
                        to={item?.redirect}
                        className=" text-[#000000] cursor-pointer font-interTight text-sm md:text-base font-normal leading-[180%]  "
                      >
                        {" "}
                        {item?.txt}{" "}
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4">
          {tourPlacesData?.data?.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  navigate(`/tour-guides?id=${item?.id}`);
                }}
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${imgBaseurl}/${item.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="2xl:h-[404px] cursor-pointer h-[220px] 2xl:w-[312px] w-full relative"
              >
                <div className="h-full w-full flex items-center  justify-center ">
                  <NavLink
                    className="text-white md:max-w-[238px] text-center cursor-pointer font-interTight
                  md:text-2xl font-bold leading-[160%]"
                    to={item.title}
                  >
                    {" "}
                    {item?.title}{" "}
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col 2xl:gap-y-[96px] items-center">
        <div className="flex flex-col gap-y-6 items-center ">
          <div className="flex flex-col items-center ">
            <div
              dangerouslySetInnerHTML={{
                __html: getSpecaillistData?.data[0]?.title,
              }}
              className="text-[#000000] font-fontSpring text-[30px] xl:text-[40px] 2xl:text-[56px] font-light 2xl:leading-[160%]"
            ></div>
            <div
              dangerouslySetInnerHTML={{
                __html: getSpecaillistData?.data[0]?.short_description,
              }}
              className="md:max-w-[1001px] w-full leading-[160%] text-base mt-4 2xl:mt-0 md:text-xl font-interTight text-[#000] text-center"
            ></div>
          </div>
          <div className="flex flex-col md:gap-y-[48px] gap-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div
                dangerouslySetInnerHTML={{
                  __html: getSpecaillistData?.data[0]?.description,
                }}
                className="text-[#787878] flex flex-col gap-y-2 font-interTight text-base 2xl:text-xl font-normal 2xl:leading-[180%] leading-[160%] tracking-[1px]"
              ></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 mt-10 2xl:mt-0 mb-10 md:mb-10 2xl:mb-0">
          <div className="flex flex-col items-center">
            <div
              dangerouslySetInnerHTML={{
                __html: canadaData?.data[0]?.title,
              }}
              className="text-[#000000] font-fontSpring text-[30px] xl:text-[40px] 2xl:text-[56px] font-light 2xl:leading-[160%]"
            ></div>
            <div
              dangerouslySetInnerHTML={{
                __html: canadaData?.data[0]?.short_description,
              }}
              className="md:max-w-[1001px] w-full leading-[160%] text-base mt-4 2xl:mt-0 md:text-xl font-interTight text-[#000] text-center"
            ></div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <div
              dangerouslySetInnerHTML={{
                __html: canadaData?.data[0]?.description,
              }}
              className="text-[#787878] font-interTight flex flex-col gap-y-2  text-base 2xl:text-xl font-normal 2xl:leading-[180%] leading-[160%] tracking-[1px]"
            ></div>
          </div>
          {/* <div className="w-full h-[345px] flex flex-col items-center justify-center">
            <TravelDetailsSlider data={imagesData} />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TouristGuide;

// re pushing
