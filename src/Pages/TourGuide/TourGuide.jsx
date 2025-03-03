import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import React from "react";
import mountain from "../../assets/images/tourist-guide/mountain_sea.png";
import MapSection from "./Sections/MapSection";
import TourTab from "./Sections/TourTab";
import ParkDetails from "@/components/ParkDetails/ParkDetails";

import { parkDetailsData, TourTabData } from "@/components/DummyData/TourGuidData";

const TourGuide = () => {
  return (
<<<<<<< HEAD
    <section className="container">
      {/* Tour Gallery */}
      <div className="2xl:mt-44 mt-32 mb-10">
        <figure>
          <img src={g1} alt="g1" />
        </figure>
        <div className="grid mt-5 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="">
            <img src={g2} alt="g2" className="w-full h-full object-cover" />
          </div>
          <div className="">
            <img src={g3} alt="g2" className="w-full h-full object-cover" />
          </div>
          <div className="">
            <img src={g4} alt="g2" className="w-full h-full object-cover" />
          </div>
          <div className="">
            <img src={g5} alt="g2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Tour Guide Tabs */}
      <div className="md:mb-10 mb-16">
        <Tabs>
          <TabList className="flex md:flex-row flex-col items-center md:gap-6 gap-3 justify-between md:pb-12 pb-6">
            <Tab
              className="px-4 pb-1 outline-none border-b-2 border-transparent 
               hover:border-light-blue focus:outline-none cursor-pointer text-base xl:text-lg font-medium duration-300"
              selectedClassName="!border-light-blue text-prmiary-blue !border-b-2"
            >
              What to do
            </Tab>
            <Tab
              className="px-4 pb-1 outline-none border-b-2 border-transparent 
               hover:border-light-blue focus:outline-none cursor-pointer text-base xl:text-lg font-medium duration-300"
              selectedClassName="!border-light-blue text-prmiary-blue !border-b-2"
            >
              What to eat
            </Tab>
            <Tab
              className="px-4 pb-1 outline-none border-b-2 border-transparent 
               hover:border-light-blue focus:outline-none cursor-pointer text-base xl:text-lg font-medium duration-300"
              selectedClassName="!border-light-blue text-prmiary-blue !border-b-2"
            >
              Festivals calendar
            </Tab>
            <Tab
              className="px-4 pb-1 outline-none border-b-2 border-transparent 
               hover:border-light-blue focus:outline-none cursor-pointer text-base xl:text-lg font-medium duration-300"
              selectedClassName="!border-light-blue text-prmiary-blue !border-b-2"
            >
              MAP
            </Tab>
            <Tab
              className="px-4 pb-1 outline-none border-b-2 border-transparent 
               hover:border-light-blue focus:outline-none cursor-pointer text-base xl:text-lg font-medium duration-300"
              selectedClassName="!border-light-blue text-prmiary-blue !border-b-2"
            >
              Where to stay
            </Tab>
          </TabList>

          <TabPanel>
            <WhatToDo />
          </TabPanel>
          <TabPanel>
            <WhatToEat />
          </TabPanel>
          <TabPanel>
            <FestivalsCalendar />
          </TabPanel>
          <TabPanel>
            <Map />
          </TabPanel>
          <TabPanel>
            <WhereToStay />
          </TabPanel>
        </Tabs>
=======
    <div>
      <CommonHeroBanner
        title={"Where the world ends, the adventure begins"}
        bg={mountain}
        italic={true}
        uppercaseItalic={false}
      />
      <MapSection />
      <TourTab data={TourTabData} />
      <div className=" py-5 bg-chocolate">
        <div className="container flex items-center text-white justify-center font-editorsNoteItalic text-[40px] font-light leading-[160%] ">
          Find your best possible tour guide
        </div>
      </div>
      <div className=" flex flex-col">
        {parkDetailsData.map((details, index) => (
          <div
            key={details?.id}
            style={{
              backgroundColor: index % 2 === 0 ? "#1686c743" : "#fff",
            }}
          >
            <ParkDetails
              Heading={details?.Heading}
              SubHeading={details?.SubHeading}
              ParaOne={details?.ParaOne}
              ParaTwo={details?.ParaTwo}
              ParaThree={details?.ParaThree}
              BtnTxt={details?.BtnTxt}
              Images={details?.images}
              isHover={details?.isHover}
              isDouble={details?.isDouble}
            />
          </div>
        ))}
>>>>>>> b0d8d098d475892d9201a54ca2a3edc007d18a2b
      </div>
    </div>
  );
};
export default TourGuide;
