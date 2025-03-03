import React from "react";
import map from "../../../assets/images/canada-tour/map.png";
import {
  Temperature,
  UnknownCreature,
} from "@/components/common/SvgContainer/SvgContainer";

const MapSection = () => {
  return (
    <div className="flex flex-col gap-y-[64px] ">
      <div className="flex flex-row gap-x-6 ">
        <img
          src={map}
          className="w-[620px] h-[394px] object-cover "
          alt="not found"
        />
        <div className="flex flex-col gap-y-[30px]">
          <div className="flex flex-row gap-x-4 items-center ">
            <div className="flex flex-col items-center h-12 w-12  border-[3px] border-solid border-[#BFBFBF]  rounded-full  justify-center">
              <UnknownCreature />
            </div>
            <div className="flex flex-col gap-y-2  ">
              <h4 className="text-[#000] text-[18px] font-semibold leading-[150%] tracking-[1px] font-interTight">
                Which provinces does it include?
              </h4>
              <span className="text-text-gray text-[16px] font-normal max-w-[577px] leading-[150%] tracking-[1px] font-interTight">
                YukonNorthwest TerritoriesNunavut
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-x-4  items-center ">
            <div className="flex flex-col items-center h-12 w-12  border-[3px] border-solid border-[#BFBFBF]  rounded-full  justify-center">
              <Temperature />
            </div>
            <div className="flex flex-col gap-y-2  ">
              <h4 className="text-[#000] text-[18px] font-semibold leading-[150%] tracking-[1px] font-interTight">
                When to go?
              </h4>
              <span className="text-text-gray text-[16px] max-w-[577px] font-normal leading-[150%] tracking-[1px] font-interTight">
                Traveling in these territories is only possible in the summer
                months and even then there is no guarantee that the weather will
                be stable. During the rest of the year, freezing temperatures
                prevent travelers from venturing into the northern regions.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-x-10 ">
        <p>
          <span>Adventure </span>. The <span>Great Canadian North</span> is
          synonymous with this, adventure! The vast territory divided between
          the <span>Canadian territories</span> of Yukon, Northwest Territories
          and Nunavut is a land of wild landscapes, moose, lakes, forests and
          majestic ice. Here everything evokes legendary adventures,
        </p>
      </div>
    </div>
  );
};

export default MapSection;
