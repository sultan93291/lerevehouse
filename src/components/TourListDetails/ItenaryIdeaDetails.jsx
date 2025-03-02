import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import React, { useState } from "react";
import {
  ArrowLeft,
  DropDown,
  Location,
  Minus,
  Plus,
} from "../common/SvgContainer/SvgContainer";
import {
  AllItenaryData,
  recomendedAttraction,
} from "../DummyData/IntenaryDetailsData";
import ship from "../../assets/images/tour-details/ship.png";

const ItenaryIdeaDetails = () => {
  const [currentValue, setcurrentValue] = useState(0);
  const [openItems, setOpenItems] = useState(["item-0"]); // Default: First item open

  const expandAll = () => {
    const allItems = AllItenaryData.map((_, index) => `item-${index}`);
    setOpenItems(allItems);
  };

  const closeAll = () => {
    setOpenItems([]);
  };

  const handleValuePlus = () => {
    setcurrentValue(currentValue + 1);
  };

  const handleValueMinus = () => {
    if (currentValue > 0) {
      setcurrentValue(currentValue - 1);
    }
  };

  return (
    <section className="flex flex-col my-14 gap-y-5 lg:gap-y-10   ">
      <div className="flex flex-col gap-y-6  ">
        <div className="flex flex-col gap-y-4 xl:flex-row justify-between items-center ">
          <h3 className="text-primary text-[34px]  xl:text-[48px] font-normal leading-[120%] font-editorsNoteNormal  ">
            Itinerary idea in details{" "}
          </h3>
          <div className="flex flex-row w-full justify-center  gap-x-4 ">
            <span
              onClick={() => {
                closeAll();
              }}
              className="text-2xl font-normal text-[#004265] leading-[120%] font-editorsNoteNormal cursor-pointer   "
            >
              Close All
            </span>
            <span
              onClick={() => {
                expandAll();
              }}
              className="text-2xl font-normal text-[#004265] leading-[120%] font-editorsNoteNormal cursor-pointer  "
            >
              {" "}
              Expand All{" "}
            </span>
          </div>
        </div>
        <span className="text-text-gray text-base lg:text-xl leading-[150%] font-medium  ">
          Includes international flights from a choice of Itali airports,
          including Room, and others places{" "}
        </span>
      </div>
      {/* {accordion section started here} */}
      <div className="w-full font-interTight">
        <Accordion
          type="multiple" // Allows multiple open items
          className="w-full  flex flex-col gap-y-4 lg:gap-y-8"
          value={openItems}
          onValueChange={values => setOpenItems(values)} // Updates state
        >
          {AllItenaryData.map((faq, index) => (
            <AccordionItem
              className="border-[1px] border-solid border-[#0000001F]"
              key={index}
              value={`item-${index}`}
            >
              <AccordionTrigger className="text-xl w-full text-[#3E3E3E] hover:no-underline">
                <div className="flex flex-row w-full justify-between p-3">
                  <div className="flex flex-row gap-x-2 items-center">
                    <div className=" text-sm xl:text-xl font-normal leading-[123%] whitespace-nowrap  px-4 py-2 text-primary bg-[#F4F4F4]">
                      Day {faq?.dayCount}
                    </div>
                    <span className=" text-sm xl:text-lg text-primary font-medium leading-[150%]">
                      {faq?.tittle}
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <DropDown />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg text-[#3E3E3E]">
                <div className="flex p-3 lg:p-6 flex-col gap-y-6">
                  <div
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ship})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    className="w-full h-[250px] lg:h-[400px] relative"
                  >
                    <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-between">
                      <div className="w-full flex justify-end">
                        <div className=" h-10 lg:h-[56px] w-[168px] flex flex-row bg-white border-[1px] border-solid">
                          <div
                            onClick={handleValuePlus}
                            className="h-full w-[56px] bg-offWhite flex items-center justify-center cursor-pointer"
                          >
                            <Plus />
                          </div>
                          <div className="h-full w-[56px] bg-white flex items-center justify-center text-text-gray text-base font-normal leading-[150%]">
                            {currentValue}
                          </div>
                          <div
                            onClick={handleValueMinus}
                            className="h-full w-[56px] bg-offWhite flex items-center justify-center cursor-pointer"
                          >
                            <Minus />
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-row items-end justify-between">
                        <div className="p-4 xl:p-8 flex flex-col gap-y-3">
                          <h3 className=" text-[24px] xl:text-[32px] leading-[120%] text-white font-interTight font-light">
                            Orvieto, Italy
                          </h3>
                          <span className="leading-[120%] text-base xl:text-lg font-light text-white font-interTight">
                            Gothic glory in the Umbrian hills
                          </span>
                        </div>
                        <div className="bg-white py-2 lg:py-4 px-2 whitespace-nowrap  lg:px-8 border-[1px] flex flex-row items-center cursor-pointer gap-x-1 border-solid h-10 lg:h-[59px] text-primary leading-[150%] font-normal text-sm lg:text-lg">
                          Travel Guide
                          <ArrowLeft />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <span className="flex flex-row items-center gap-x-2 text-primary font-medium text-base lg:text-lg">
                      Recommended attraction <Location />
                    </span>
                    <div className="flex flex-col  xl:flex-row gap-y-3 xl:justify-between 3xl:gap-x-4">
                      {recomendedAttraction.map((item, index) => (
                        <div
                          key={index}
                          className="p-3 flex flex-col gap-y-3 bg-white shadow-primaryShadow"
                        >
                          <div
                            style={{
                              backgroundImage: `url(${item.img})`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                            }}
                            className=" w-full xl:w-[270px] 2xl:w-[350px] 3xl:w-[450px] 4xl:w-[474px] h-[200px] 2xl:h-[243px]"
                          ></div>
                          <div className="flex flex-col items-center justify-center h-[30px]">
                            <span className=" text-base lg:text-xl text-primary leading-[150%]">
                              Dinner cruise in Vancouver
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ItenaryIdeaDetails;
