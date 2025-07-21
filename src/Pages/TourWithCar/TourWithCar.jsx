import React, { useEffect, useState } from "react";
import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import mountain from "../../assets/images/tour-auto/mountain.png";
import TourAutoTabSection from "../TourAutoCanada/Sections/TourAutoTabSection/TourAutoTabSection";
import ford from "../../assets/images/tour-auto/ford.jpg";
import suv from "../../assets/images/tour-auto/suv.png";
import minivan from "../../assets/images/tour-auto/minivan.jpg";
import TestModal from "@/components/Modals/TestModal";
import { Modal } from "@/components/Modals/Modal";
import {
  useGetTransportationPageDetailsDataQuery,
  useMetaDetailsDataMutation,
} from "@/Redux/features/api/apiSlice";
import { useParams } from "react-router-dom";
import DestinationDetails from "../DestinationDetails/DestinationDetails";
import HelmetComponent from "@/components/Helmet/Helmet";

const vechicles = [
  {
    id: 1,
    imgSrc: ford,
    heading: "Compact",
    subHeading: "Ford Focus or similar - 4 seats",
    price: "3635€	",
  },
  {
    id: 2,
    imgSrc: suv,
    heading: "Mini SUV",
    subHeading: "Toyota Rav4 or similar 5 seats",
    price: "1550€	",
  },
  {
    id: 3,
    imgSrc: minivan,
    heading: "Minivan",
    subHeading: "Dodge Grand Caravan or similar 7 seats",
    price: "1650€	",
  },
];

const TourWithCar = () => {
  const [metaDetailsData, { isLoading: isMetaLoading, isSuccess, isError }] =
    useMetaDetailsDataMutation();

  const [metaData, setMetaData] = useState(null);

  useEffect(() => {
    metaDetailsData("transportation_details")
      .unwrap()
      .then(res => setMetaData(res?.data))
      .catch(err => console.error("Meta save error:", err));
  }, [metaDetailsData]);

  const [open, setOpen] = useState(false);
  const [selectedVehice, setselectedVehice] = useState(vechicles[0].id);
  const { id } = useParams();

  const { data, error, isLoading } = useGetTransportationPageDetailsDataQuery(
    id,
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  const transPortationDetails = data?.data?.transportations_details;
  const priceArray = [
    data?.data?.transportation_prices?.single,
    data?.data?.transportation_prices?.double,
    data?.data?.transportation_prices?.triple,
    data?.data?.transportation_prices?.quadruple,
  ];

  const imgBaseUrl = import.meta.env.VITE_SERVER_URL;

  return (
    <HelmetComponent
      title={metaData?.title}
      description={metaData?.description}
    >
      <Modal open={open} setOpen={setOpen}>
        <TestModal setOpen={setOpen} />
      </Modal>
      <section className=" mt-10">
        <CommonHeroBanner
          bg={`${imgBaseUrl}/${data?.data?.image}`}
          title={data?.data?.title}
        />
        <div className="flex flex-col xl:gap-y-[112px] gap-y-10 py-4 container">
          <div className="flex flex-col gap-y-4 ">
            <div className="flex flex-col md:gap-y-[60px] gap-y-8">
              <div className="flex flex-col xl:flex-row md:justify-between justify-center items-center gap-5 xl:gap-0">
                <div className="flex flex-row 2xl:gap-x-[197.1px] items-center ">
                  <div className="flex flex-col 2xl:gap-y-3 items-center">
                    <h4 className="text-[#004265] font-interTight text-base leading-[160%] font-semibold ">
                      Length{" "}
                    </h4>
                    <span className="text-[#565656] font-interTight text-base leading-[160%] font-semibold ">
                      {transPortationDetails?.length}
                    </span>
                  </div>
                  <span className="hidden 2xl:block w-[1px] h-[64px] bg-[#0000001F]"></span>
                </div>
                <div className="flex flex-row 2xl:gap-x-[197.1px] items-center ">
                  <div className="flex flex-col 2xl:gap-y-3 items-center">
                    <h4 className="text-[#004265] font-interTight text-sm md:text-base leading-[160%] font-semibold ">
                      Duration{" "}
                    </h4>
                    <span className="text-[#565656] font-interTight text-sm md:text-base leading-[160%] font-semibold ">
                      {transPortationDetails?.duration}
                    </span>
                  </div>
                  <span className="hidden 2xl:block w-[1px] h-[64px] bg-[#0000001F] "></span>
                </div>
                <div className="flex flex-row 2xl:gap-x-[197.1px] items-center ">
                  <div className="flex flex-col 2xl:gap-y-3 items-center">
                    <h4 className="text-[#004265] font-interTight text-sm md:text-base leading-[160%] font-semibold ">
                      Starting from
                    </h4>
                    <span className="text-[#565656] font-interTight text-base leading-[160%] font-semibold ">
                      {transPortationDetails?.starting_from}
                    </span>
                  </div>
                  <span className="hidden 2xl:block w-[1px] h-[64px] bg-[#0000001F] "></span>
                </div>
                <button
                  onClick={() => {
                    setOpen(true);
                  }}
                  className="xl:px-[61px] px-8 xl:py-5 py-3 rounded-[5px] bg-[#1687C7] text-sm md:text-xs font-medium leading-[120%] font-interTight text-white border-[1px] border-transparent ease-in-out duration-500 hover:bg-transparent hover:border-solid hover:border-[#1687C7] hover:text-[#1687C7]"
                >
                  Make An Enquiry
                </button>
              </div>
              <div className="flex flex-col md:gap-y-6 gap-y-3">
                <div className="flex flex-col gap-y-2">
                  <h2 className="text-[#004265] font-fontSpring text-3xl 2xl:text-[48px] leading-[120%] font-light">
                    Book your {data?.data?.title}
                  </h2>
                  <span className="text-[#004265] font-interTight text-xl leading-[150%] font-medium">
                    {" "}
                    {transPortationDetails?.title}
                  </span>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: transPortationDetails?.description,
                  }}
                  className="text-[#565656] max-w-[1328px] font-interTight text-sm md:text-lg md:leading-[150%] leading-6 font-normal"
                ></div>
              </div>
            </div>
            <div className="flex flex-col gap-y-6 w-full items-center ">
              <span className="text-[#004265] text-lg font-medium leading-[120%] ">
                Prices
              </span>
              <hr className="w-full h-[2px] bg-[#004265] rounded-[12px] " />
              <div className="flex flex-col gap-y-6 w-full items-center">
                <h5 className="text-[#004265] font-fontSpring text-4xl md:text-[48px] font-light leading-[120%]">
                  Tour prices
                </h5>
                <div className="flex flex-col  w-full relative items-center ">
                  <div className="bg-RgbaBlue w-full py-3 flex flex-row gap-x-6 ">
                    <div className="lg:w-[438px] will-auto  "></div>
                    <div className="flex flex-row justify-around w-full">
                      {["single", "double", "Triple", "Quadruple"].map(
                        (item, index) => {
                          return (
                            <span
                              key={index}
                              className="max-w-[267px] capitalize text-[#252525] font-interTight text-[18px] leading-[120%] font-medium  "
                            >
                              {" "}
                              {item}{" "}
                            </span>
                          );
                        }
                      )}
                    </div>
                  </div>
                  <div className="border-[2px] border-solid border-RgbaBlue w-full py-3 flex md:flex-row flex-col gap-x-[24px] gap-3 md:gap-0 px-2 md:px-0">
                    <div className="lg:w-[428px] md:w-[80%]    flex items-center lg:justify-center">
                      <h4 className="text-[#004265] font-interTight text-base md:text-[22px] 2xl:text-[32px] leading-[120%] font-medium hidden lg:block">
                        Prices starting from
                      </h4>
                    </div>
                    <div className="flex flow-row justify-around md:justify-center xl:justify-around gap-[55px] xl:gap-10 w-full">
                      {priceArray.map((item, index) => {
                        return (
                          <span
                            key={index}
                            className="text-[#252525] font-interTight text-base md:text-[22px] 2xl:text-[32px] leading-[120%] font-medium "
                          >
                            € {item}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* <span className="text-center max-w-[1060px] ">
                  Fishing villages with colorful houses are the backdrop to
                  wonderful landscapes, lighthouses on cliffs that you can
                  contemplate for hours, pink sand beaches, excellent craft
                  beers and perhaps the best fresh fish in the world including
                  lobsters, shellfish and salmon of incredible quality.
                </span> */}
                <div className="flex flex-col 2xl:flex-row md:gap-x-5 gap-y-3">
                  {data?.data.transportation_mediums?.map((item, index) => {
                    return (
                      <div
                        onClick={() => {
                          setselectedVehice(item.id);
                        }}
                        key={index}
                        className={`flex py-2 ${
                          item.id == selectedVehice &&
                          "border-[1px] border-solid border-[#1687C7]"
                        } cursor-pointer ease-in duration-500 flex-col 4xl:w-[500px] w-full items-center gap-y-6`}
                      >
                        <img
                          src={`${imgBaseUrl}/${item?.image}`}
                          className="3xl:w-[332px] w-full h-[192px]"
                          alt="not found"
                        />
                        <div className="flex flex-col gap-y-3 items-center ">
                          <h2 className="text-[#1687C7] text-[24px] md:text-[32px] leading-[120%] font-interTight text-normal">
                            {item.name}
                          </h2>
                          <span className="text-[#565656] text-center px-2 text-[16px] leading-[120%] font-interTight text-normal  ">
                            {" "}
                            {item.description}{" "}
                          </span>
                          <h4 className="text-[#004265] text-[28px] md:text-[32px] leading-[120%] font-interTight text-normal  ">
                            {item.price}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className=" flex flex-col text-[#565656] text-sm md:text-[16px] leading-[150%] items-start md:items-center font-interTight text-normal">
                  <div
                    className="max-w-[502px] text-center "
                    dangerouslySetInnerHTML={{
                      __html: transPortationDetails?.subtitle,
                    }}
                  ></div>
                </div>
                <div className="flex flex-col xl:flex-row w-full gap-x-12 bg-RgbaBlue">
                  <div className="flex flex-col gap-y-3 p-6">
                    <h4 className="text-[#004265] text-[16px] leading-[150%] items-center font-bold  font-interTight text-normal">
                      What's included
                    </h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: transPortationDetails?.included,
                      }}
                      className="flex flex-col gap-y-2 max-w-[746px] text-[#565656] text-sm md:text-[16px] leading-[150%] items-center  font-interTight text-normal "
                    ></div>
                  </div>
                  <div className="flex flex-col gap-y-3 px-6 p-6">
                    <h4 className="text-[#004265] text-[16px] leading-[150%] items-center font-bold  font-interTight text-normal">
                      What's not included
                    </h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: transPortationDetails?.not_included,
                      }}
                      className="flex flex-col gap-y-2 max-w-[403px] text-[#565656] text-sm md:text-[16px] leading-[150%] items-center  font-interTight text-normal "
                    ></div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row w-full justify-between gap-5 md:gap-8 3xl:gap-0 items-center">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: transPortationDetails?.short_description,
                    }}
                    className="text-[#565656] text-sm md:text-[16px] max-w-auto 3xl:max-w-[1194px] w-full 2xl:w-[1020px] leading-[150%] items-center  font-interTight text-normal"
                  ></div>
                  <button
                    onClick={() => {
                      setOpen(true);
                    }}
                    className="2xl:px-[61px] md:w-1/2 w-full xl:w-[215px] py-4 rounded-[5px] bg-[#1687C7] text-xs font-medium leading-[120%] font-interTight text-white border-[1px] border-transparent ease-in-out duration-500 hover:bg-transparent hover:border-solid hover:border-[#1687C7] hover:text-[#1687C7]"
                  >
                    Make An Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>

          <TourAutoTabSection data={data?.data?.transportation_ways} />
        </div>
      </section>
    </HelmetComponent>
  );
};

export default TourWithCar;
