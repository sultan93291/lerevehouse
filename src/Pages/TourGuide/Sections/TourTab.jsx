import React, { useState } from "react";
import { Link } from "react-scroll";

const TourTab = ({ data }) => {
  const [SelectedTab, setSelectedTab] = useState(data[0]?.name);

  return (
    <div className="h-auto cursor-pointer py-5 w-full bg-prmiary-blue">
      <div className="container flex flex-row flex-wrap gap-3 md:gap-5 items-center justify-center">
        {data?.map((tab, index) => {
          console.log(tab.name);
          
          return (
            <Link
              to={tab.name}
              onClick={() => {
                setSelectedTab(tab?.name);
              }}
              key={index}
              className={`md:py-3 py-[6px] md:px-6 px-3 ${
                SelectedTab === tab?.name
                  ? "bg-light-blue border-transparent"
                  : "bg-transparent border-solid border-[rgba(255,255,255,0.2)]"
              } border-[1px] text-base md:text-[18px] leading-[160%] font-medium ease-in-out duration-300 group-hover:underline font-inter text-white`}
            >
              {tab?.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TourTab;
