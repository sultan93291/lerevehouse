import { TourTabData } from "@/components/DummyData/TourGuidData";
import React, { useState } from "react";

const TourTab = () => {
  const [SelectedTab, setSelectedTab] = useState("Alaska");

  return (
    <div className="h-auto py-5 w-full bg-prmiary-blue">
      <div className="container flex flex-row flex-wrap gap-5 items-center justify-center">
        {TourTabData.map((tab, index) => {
          return (
            <button
              onClick={() => {
                setSelectedTab(tab);
              }}
              key={index}
              className={`py-3 px-6 ${
                SelectedTab === tab
                  ? "bg-light-blue border-transparent"
                  : "bg-transparent border-solid border-[rgba(255,255,255,0.2)]"
              } border-[1px] text-[18px] leading-[160%] font-medium ease-in-out duration-300 group-hover:underline font-inter text-white`}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TourTab;
