import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import React from "react";
import mountain from "../../assets/images/tourist-guide/mountain_sea.png";
import MapSection from "./Sections/MapSection";
import TourTab from "./Sections/TourTab";
import ParkDetails from "@/components/ParkDetails/ParkDetails";

import {
  parkDetailsData,
  TourTabData,
} from "@/components/DummyData/TourGuidData";

const TourGuide = () => {
  return (
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
      </div>
    </div>
  );
};
export default TourGuide;
