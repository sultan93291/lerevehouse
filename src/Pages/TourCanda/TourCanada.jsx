import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetAllTransportationDataQuery,
  useGetTransportationHeroSectionDataQuery,
  useGetTransportationPageDetailsQuery,
  useMetaDetailsDataMutation,
} from "@/Redux/features/api/apiSlice";
import { InfinitySpin } from "react-loader-spinner";
import HelmetComponent from "@/components/Helmet/Helmet";

const TourCanada = () => {
  const navigate = useNavigate();

   const [
     metaDetailsData,
     { isLoading: isMetaDataLoading, isSuccess, isError },
   ] = useMetaDetailsDataMutation();

   const [metaData, setMetaData] = useState(null);

   useEffect(() => {
     metaDetailsData("transportation")
       .unwrap()
       .then(res => setMetaData(res?.data))
       .catch(err => console.error("Meta save error:", err));
   }, [metaDetailsData]);

  const { data, error, isLoading } = useGetTransportationHeroSectionDataQuery(
    undefined,
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  const {
    data: transportationData,
    error: transportationError,
    isLoading: isTransportationLoading,
  } = useGetAllTransportationDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const {
    data: transportationDetailsData,
    error: transportationDetailsError,
    isLoading: isTransportationDetailsLoading,
  } = useGetTransportationPageDetailsQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  if (isLoading || isTransportationLoading || isTransportationDetailsLoading) {
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

    const transPorterrorMessage =
      transportationError.data?.message ||
      transportationError.error ||
      transportationError.status ||
      transportationError.message;

    const transPortDetialserrorMessage =
      transportationDetailsError.data?.message ||
      transportationDetailsError.error ||
      transportationDetailsError.status ||
      transportationDetailsError.message;

    if (errorMessage) {
      toast.error(errorMessage);
    } else if (transPorterrorMessage) {
      toast.error(transPorterrorMessage);
    } else if (transPortDetialserrorMessage) {
      toast.error(transPortDetialserrorMessage);
    }
  }

  const imgBaseurl = import.meta.env.VITE_SERVER_URL;
  

  return (
    <HelmetComponent
      title={metaData?.title}
      description={metaData?.description}
    >
      <section className="2xl:mt-[156px] mb-10 2xl:mb-20 mt-14 xl:py-[72px] pt-9 2xl:py-9 container flex flex-col md:gap-y-10 gap-y-5 2xl:gap-y-[148px]">
        <div className="flex flex-col gap-y-[148px]">
          <div className="flex flex-col gap-y-4 items-center ">
            <div
              dangerouslySetInnerHTML={{ __html: data?.data?.title }}
              className="text-[#1687C7] font-interTight text-[40px] 2xl:text-[56px] font-semibold leading-[160%] "
            ></div>
            <div
              dangerouslySetInnerHTML={{ __html: data?.data?.description }}
              className="text-text-gray max-w-[966px] font-interTight text-sm md:text-xl 2xl:text-2xl font-normal md:leading-[140%]"
            ></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-y-4 gap-x-4  md:items-center">
          {transportationData?.data?.map((item, index) => {
            return (
              <div
                key={index}
                className={`group ${
                  index % 3 === 2
                    ? " lg:h-[380px] 2xl:h-[570px] h-[250px] w-full"
                    : " lg:h-[380px] 2xl:h-[521px] h-[250px] xl:w-[49%] 3xl:w-[49.4%] md:w-full"
                } flex flex-col items-center justify-center relative overflow-hidden`}
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${imgBaseurl}/${item?.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "100% 100%",
                }}
              >
                {/* Content inside should only be visible on hover */}
                <div className="md:h-full h-[300px] w-full flex flex-col items-center justify-center md:gap-y-[38px] gap-y-4 px-5 md:px-0 transition-all duration-500 ease-in-out transform group-hover:scale-100 group-hover:opacity-100 opacity-0 scale-95">
                  <div className="flex flex-col items-center text-center justify-center md:gap-y-[22px]">
                    <h2 className="text-white text-2xl md:text-[32px] font-semibold leading-[150%] tracking-[1px] font-interTight">
                      {item?.title}
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: item?.subtitle }}
                      className="max-w-[629px] text-white text-xs md:text-base font-normal md:leading-[150%] leading-5 tracking-[1px] font-interTight"
                    ></div>
                  </div>
                  <button
                    onClick={() => {
                      navigate(`/road-tour-details/${item.id}`);
                    }}
                    className="bg-[#1687C7] px-4 md:py-3 py-2 text-sm md:text-lg font-semibold leading-[150%] tracking-[1px] text-white font-interTight rounded-[8px] transition-all duration-300 ease-in-out"
                  >
                    {`${item?.button_text} `}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col xl:gap-y-[72px] ">
          {transportationDetailsData?.data?.map((item, idx) => {
            return (
              <div
                className={`${
                  idx % 2 === 1
                    ? "flex flex-col-reverse xl:flex-row-reverse items-center gap-x-8 "
                    : "flex xl:flex-row flex-col-reverse items-center gap-x-8"
                }`}
              >
                <div
                  className="2xl:w-[868px] w-full lg:h-[380px] xl:h-[434px] h-[250px]"
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${imgBaseurl}/${item.background_image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="flex flex-col xl:gap-y-6 md:max-w-[698px] w-full mt-5 mb-8 xl:mt-0">
                  <h4 className="text-[#000] font-interTight text-[25px] md:text-[32px] font-semibold leading-[150%] tracking-[1px]">
                    {item.title}
                  </h4>
                  <div
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                    className="flex flex-col gap-y-6 font-interTight mt-1 xl:mt-0 text-[#000] text-sm md:text-base font-normal leading-[150%] tracking-[1px] "
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </HelmetComponent>
  );
};

export default TourCanada;
