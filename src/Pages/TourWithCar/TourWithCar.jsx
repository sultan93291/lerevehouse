import React from "react";
import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import mountain from "../../assets/images/tour-auto/mountain.png";
import TourAutoTabSection from "../TourAutoCanada/Sections/TourAutoTabSection/TourAutoTabSection";
import ford from "../../assets/images/tour-auto/ford.jpg";
import suv from "../../assets/images/tour-auto/suv.png";
import minivan from "../../assets/images/tour-auto/minivan.jpg";

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
  return (
    <section className=" mt-10">
      <CommonHeroBanner bg={mountain} title={"Tour in auto in Canada"} />
      <div className="flex flex-col md:gap-y-[112px] gap-y-14 py-4 container">
        <div className="flex flex-col gap-y-4 ">
          <div className="flex flex-col gap-y-[60px]">
            <div className="flex flex-col md:flex-row xl:justify-between justify-center gap-10 md:gap-0">
              <div className="flex flex-row 2xl:gap-x-[197.1px] items-center ">
                <div className="flex flex-col gap-y-3 items-center">
                  <h4 className="text-[#004265] font-interTight text-base leading-[160%] font-semibold ">
                    Length{" "}
                  </h4>
                  <span className="text-[#565656] font-interTight text-base leading-[160%] font-semibold ">
                    2.942 km{" "}
                  </span>
                </div>
                <span className="hidden xl:block w-[1px] h-[64px] bg-[#0000001F]"></span>
              </div>
              <div className="flex flex-row 2xl:gap-x-[197.1px] items-center ">
                <div className="flex flex-col gap-y-3 items-center">
                  <h4 className="text-[#004265] font-interTight text-base leading-[160%] font-semibold ">
                    Duration{" "}
                  </h4>
                  <span className="text-[#565656] font-interTight text-base leading-[160%] font-semibold ">
                    16 days / 15 nights{" "}
                  </span>
                </div>
                <span className="hidden xl:block w-[1px] h-[64px] bg-[#0000001F] "></span>
              </div>
              <div className="flex flex-row 2xl:gap-x-[197.1px] items-center ">
                <div className="flex flex-col gap-y-3 items-center">
                  <h4 className="text-[#004265] font-interTight text-base leading-[160%] font-semibold ">
                    Starting from
                  </h4>
                  <span className="text-[#565656] font-interTight text-base leading-[160%] font-semibold ">
                    € 1835 per person
                  </span>
                </div>
                <span className="hidden xl:block w-[1px] h-[64px] bg-[#0000001F] "></span>
              </div>
              <button className="px-[61px] py-5 rounded-[5px] bg-[#1687C7] text-xs font-medium leading-[120%] font-interTight text-white border-[1px] border-transparent ease-in-out duration-500 hover:bg-transparent hover:border-solid hover:border-[#1687C7] hover:text-[#1687C7]">
                Make An Enquiry
              </button>
            </div>
            <div className="flex flex-col gap-y-6 ">
              <div className="flex flex-col gap-y-2">
                <h2 className="text-[#004265] font-fontSpring  text-[48px] leading-[120%] font-light ">
                  Book your road trip in Canada.
                </h2>
                <span className="text-[#004265] font-interTight text-[24px] leading-[150%] font-medium ">
                  {" "}
                  A wide range of excursions available.
                </span>
              </div>
              <span className="text-[#565656] max-w-[1328px] font-interTight text-lg leading-[150%] font-normal ">
                Choosing an Xplore car tour means taking advantage of the
                experience and professionalism of a tour operator specialized in
                trips to Canada. Remember that these prices do not include
                flights and that children under 12 do not pay for hotels (but
                excursions do) if they share a room with their parents. You can
                choose to ask us for a quote for this tour without any changes
                or you can contact us to customize it to your liking.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 w-full items-center ">
            <span className="text-[#004265] text-lg font-medium leading-[120%] ">
              Prices
            </span>
            <hr className="w-full h-[2px] bg-[#004265] rounded-[12px] " />
            <div className="flex flex-col gap-y-6 w-full items-center">
              <h5 className="text-[#004265] font-fontSpring text-[48px] font-light leading-[120%] ">
                Tour prices
              </h5>
              <div className="flex flex-col  w-full relative items-center ">
                <div className="bg-RgbaBlue w-full py-3 flex flex-row gap-x-6 ">
                  <div className="w-[438px]"></div>
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
                <div className="border-[2px] border-solid border-RgbaBlue w-full py-3 flex md:flex-row flex-col gap-x-[24px]">
                  <div className="w-[428px]  flex items-center justify-center ">
                    <h4 className="text-[#004265] font-interTight text-[32px] leading-[120%] font-medium ">
                      Prices starting from
                    </h4>
                  </div>
                  <div className="flex flow-row justify-around   w-full ">
                    {["3635	", "1835	", "1335	", "1085"].map((item, index) => {
                      return (
                        <span
                          key={index}
                          className="text-[#252525] font-interTight text-[32px] leading-[120%] font-medium "
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              <span className="text-center max-w-[1060px] ">
                Fishing villages with colorful houses are the backdrop to
                wonderful landscapes, lighthouses on cliffs that you can
                contemplate for hours, pink sand beaches, excellent craft beers
                and perhaps the best fresh fish in the world including lobsters,
                shellfish and salmon of incredible quality.
              </span>
              <div className="flex flex-col xl:flex-row gap-x-5">
                {vechicles.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col 3xl:w-[500px] w-full items-center gap-y-6"
                    >
                      <img
                        src={item.imgSrc}
                        className="3xl:w-[332px] w-full h-[192px]"
                        alt="not found"
                      />
                      <div className="flex flex-col gap-y-3 items-center ">
                        <h2 className="text-[#1687C7] text-[32px] leading-[120%] font-interTight text-normal  ">
                          {item.heading}
                        </h2>
                        <span className="text-[#565656] text-[16px] leading-[120%] font-interTight text-normal  ">
                          {" "}
                          {item.subHeading}{" "}
                        </span>
                        <h4 className="text-[#004265] text-[32px] leading-[120%] font-interTight text-normal  ">
                          {item.price}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className=" flex flex-col  text-[#565656] text-[16px] leading-[150%] items-center  font-interTight text-normal">
                <span>
                  Car prices are total per vehicle, in euros, to be added to the
                  tour fee.
                </span>
                <span>
                  Other car models are also available at the quote stage
                </span>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-x-12 bg-RgbaBlue">
                <div className="flex flex-col gap-y-3 p-6">
                  <h4 className="text-[#004265] text-[16px] leading-[150%] items-center font-bold  font-interTight text-normal">
                    What's included
                  </h4>
                  <div className="flex flex-col gap-y-2 max-w-[746px] ">
                    <p className="text-[#565656] text-[16px] leading-[150%] items-center  font-interTight text-normal">
                      Overnight stays for the entire duration of the tour in
                      tourist category hotels, for first category hotels contact
                      our offices
                    </p>
                    <p className="text-[#565656] text-[16px] leading-[150%] items-center  font-interTight text-normal">
                      One-Hour Sightseeing Cruise to 1000 Islands
                    </p>
                    <p className="text-[#565656] text-[16px] leading-[150%] items-center  font-interTight text-normal">
                      Xplore assistance and consultancy for travel preparation
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-3 p-6">
                  <h4 className="text-[#004265] text-[16px] leading-[150%] items-center font-bold  font-interTight text-normal">
                    What's not included
                  </h4>
                  <div className="flex flex-col gap-y-2 max-w-[403px] ">
                    <p className="text-[#565656] text-[16px] leading-[150%] items-center  font-interTight text-normal">
                      intercontinental and internal flights, to add them to your
                      quote contact us
                    </p>
                    <p className="text-[#565656] text-[16px] leading-[150%] items-center  font-interTight text-normal">
                      satellite navigator in the car (quotes on request)
                    </p>
                    <p className="text-[#565656] text-[16px] leading-[150%] items-center  font-interTight text-normal">
                      any entrance fees to the parks
                    </p>
                    <p className="text-[#565656] text-[16px] leading-[150%] items-center  font-interTight text-normal">
                      high season supplements, meals, tips and extras in general
                    </p>{" "}
                    <p className="text-[#565656] text-[16px] leading-[150%] items-center  font-interTight text-normal">
                      booking fees including Europ Assistance medical insurance
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row w-full justify-between gap-5 md:gap-0">
                <p className="text-[#565656] text-[16px] max-w-[1194px] leading-[150%] items-center  font-interTight text-normal">
                  The overnight stay rates during the tour may vary during the
                  quote depending on the season and the hotels chosen. You can
                  decide to book the tour as is or ask us to customize the
                  itinerary to your liking.
                </p>
                <button className="md:px-[61px] py-5 rounded-[5px] bg-[#1687C7] text-xs font-medium leading-[120%] font-interTight text-white border-[1px] border-transparent ease-in-out duration-500 hover:bg-transparent hover:border-solid hover:border-[#1687C7] hover:text-[#1687C7]">
                  Make An Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        <TourAutoTabSection />
      </div>
    </section>
  );
};

export default TourWithCar;
