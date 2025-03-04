import React, { useState } from "react";
import washington from "../../../../assets/images/tour-auto/washington.png";
import bike from "../../../../assets/images/tour-auto/bike.png";

const TourAutoTabSection = () => {
  const Tabs = [
    "Increasing price",
    "Decreasing price",
    "Increasing duration",
    "Decreasing duration",
    "Increasing length",
    "Decreasing length",
  ];

  const [ActiveTab, setActiveTab] = useState("Increasing price");
  const [isMap, setIsMap] = useState(false);
  const [AcitveImg, setAcitveImg] = useState(washington); // Default image

  const handleImgShow = () => {
    // Toggle the map/image
    setIsMap(!isMap);
    setAcitveImg(isMap ? bike : washington); // Toggle image based on current state
  };

  return (
    <section className="py-20 flex flex-col w-full relative items-center justify-center gap-y-5 container">
      <div className="flex flex-col gap-y-[45px] w-full relative">
        <div className="flex flex-row justify-between w-full relative">
          {Tabs.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setActiveTab(item)}
                className={`text-[#004265] cursor-pointer ease-in-out duration-300 flex relative font-interTight text-lg font-medium leading-[120%] ${
                  item === ActiveTab &&
                  "after:content-[''] after:absolute after:bottom-0 after:mb-[-8px] after:left-1/2 after:w-[247px] after:h-[3px] after:bg-[#004265] after:transform after:-translate-x-1/2 after:rounded-t-[12px]"
                }`}
              >
                {item}
              </div>
            );
          })}
        </div>

        <div className="flex flex-row w-full relative justify-between items-center">
          <span className="text-lg font-medium leading-[120%] font-interTight text-[#004265]">
            With this selection there are 3 tours.
          </span>
          <button
            onClick={handleImgShow} // Toggle image when button is clicked
            className="px-8 py-4 bg-[#1687C7] text-lg font-medium leading-[120%] font-interTight text-white border-[1px] border-transparent ease-in-out duration-500 hover:bg-transparent hover:border-solid hover:border-[#1687C7] hover:text-[#1687C7]"
          >
            {isMap ? "Show all as image" : "Show all as maps"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-y-5 w-full relative">
        {[0, 1, 2].map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-row gap-x-5 items-start h-[456px] w-full border-[1px] border-solid border-[#0000001F]"
            >
              <div className="p-10 mt-[27px] flex flex-col gap-y-[60px]">
                <div className="flex flex-col gap-y-3">
                  <div className="flex flex-col gap-y-3">
                    <span className="w-full h-[1px] bg-[#0000001F]"></span>
                    <h2 className="text-[#004265] font-fontSpring text-[32px] font-light leading-[150%]">
                      Nova Scotia and PEI Canada
                    </h2>
                    <div className="flex flex-row w-full items-center justify-between">
                      <h4 className="text-[#004265] font-interTight text-xl font-medium leading-[120%]">
                        14 days / 13 nights
                      </h4>
                      <span className="text-[#9C9EA1] font-interTight text-lg font-normal leading-[120%]">
                        1.472 Km
                      </span>
                    </div>
                    <span className="w-full h-[1px] bg-[#0000001F]"></span>
                  </div>
                  <span className="text-[#565656] max-w-[845px] font-interTight text-base font-normal leading-[150%]">
                    Fishing villages with colorful houses are the backdrop to
                    wonderful landscapes, lighthouses on cliffs that you can
                    contemplate for hours, pink sand beaches, excellent craft
                    beers and perhaps the best fresh fish in the world including
                    lobsters, shellfish and salmon of incredible quality.
                  </span>
                </div>
                <div className="flex flex-col gap-y-1">
                  <h5 className="text-[#004265] font-fontSpring text-[32px] font-normal leading-[120%]">
                    1.630€
                  </h5>
                  <p className="text-[#565656] max-w-[845px] font-interTight text-base font-normal leading-[150%]">
                    Double room tour (per person)
                  </p>
                </div>
              </div>
              <div className="flex">
                <img
                  src={AcitveImg}
                  alt="tour image"
                  className="w-[655px] h-[456px]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TourAutoTabSection;
