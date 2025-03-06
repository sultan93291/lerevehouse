import React from "react";
import map from "../../../assets/images/canada-tour/map.png";
import {
  Temperature,
  UnknownCreature,
} from "@/components/common/SvgContainer/SvgContainer";

const MapSection = ({ BgImg }) => {
  return (
    <div className="flex flex-col md:gap-y-[64px] gap-y-8 container">
      <div className="flex flex-col md:flex-row items-center gap-x-6">
        <div className="hidden xl:block md:h-[460px] md:w-[641px] 2xl:flex items-center justify-center">
          <img
            src={BgImg}
            alt="SVG Image"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-y-[30px] mt-8 md:mt-0">
          <div className="flex flex-row gap-x-4 items-center ">
            <div className="flex flex-col items-center md:h-12 lg:w-14 xl:w-12 w-12 h-12 border-[3px] border-solid border-[#BFBFBF] rounded-full justify-center">
              <UnknownCreature />
            </div>
            <div className="flex flex-col gap-y-2  ">
              <h4 className="text-[#000] text-[18px] font-semibold leading-[150%] tracking-[1px] font-interTight">
                Which provinces does it include?
              </h4>
              <span className="text-text-gray text-sm md:text-[16px] font-normal max-w-[577px] leading-[150%] tracking-[1px] font-interTight">
                YukonNorthwest TerritoriesNunavut
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 items-center">
            <div className="flex flex-col items-center md:h-12 lg:w-16 2xl:w-12 w-20 h-12 border-[3px] border-solid border-[#BFBFBF] rounded-full justify-center">
              <Temperature />
            </div>
            <div className="flex flex-col gap-y-2  ">
              <h4 className="text-[#000] text-[18px] font-semibold leading-[150%] tracking-[1px] font-interTight">
                When to go?
              </h4>
              <span className="text-text-gray text-sm md:text-[16px] max-w-[577px] font-normal leading-[150%] tracking-[1px] font-interTight">
                Traveling in these territories is only possible in the summer
                months and even then there is no guarantee that the weather will
                be stable. During the rest of the year, freezing temperatures
                prevent travelers from venturing into the northern regions.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-x-10 ">
        <p className="text-text-gray text-sm md:text-base 2xl:text-[18px] font-normal leading-[150%] tracking-[1px] font-interTight max-w-[523px]">
          <span className="text-[#000]">Adventure </span>. The 
          <span className="text-[#000]">Great Canadian North</span> is
          synonymous with this, adventure! The vast territory divided between
          the <span className="text-[#D40000]">Canadian territories</span> of
          Yukon, Northwest Territories and Nunavut is a land of wild landscapes,
          moose, lakes, forests and majestic ice. Here everything evokes
          legendary adventures,
        </p>
        <p className="text-text-gray text-sm md:text-base 2xl:text-[18px] font-normal leading-[150%] tracking-[1px] font-interTight max-w-[523px] ">
          even the names of the streets, and the further north you go the more
          you will feel like an explorer of virgin lands. In{" "}
          <span className="text-[#000]">Yukon</span>  you can relive the period
          of the gold rush in the Klondike , you can go trekking in the
          beautiful Kluane National Park , go canoeing along the Yukon River or
          enjoy the lively
        </p>
        <p className="text-text-gray text-sm md:text-base 2xl:text-[18px] font-normal leading-[150%] tracking-[1px] font-interTight max-w-[523px] ">
          atmosphere of Whitehorse. Outdoor activities (in summer) are also the
          best to do in the 
          <span className="text-[#000]">Northwest Territories</span> , a
          sparsely populated province with beautiful nature and legendary
          trekking or cycling routes.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-x-10">
        <p className="text-text-gray text-sm md:text-base 2xl:text-[18px] font-normal leading-[150%] tracking-[1px] font-interTight max-w-[523px] ">
          Moose, bears, caribou will keep you company in these boundless
          territories.  <span className="text-[#000]">Nunavut</span>is truly the
          last frontier of your trip to Canada, the North Pole , the Arctic
          endless mountains, polar bears and icebergs, an almost non-existent
          but native
        </p>
        <p className="text-text-gray text-sm md:text-base 2xl:text-[18px] font-normal leading-[150%] tracking-[1px] font-interTight max-w-[523px] ">
          population (the Inuit ) and master of its imposing territory. The
          costs of traveling here are high and the climate can upset any trip
          but if you are lucky and you manage to get to the Auyuttuq National
          Park you will be left speechless in front of the
        </p>
        <p className="text-text-gray text-sm md:text-base 2xl:text-[18px] font-normal leading-[150%] tracking-[1px] font-interTight max-w-[523px] ">
          highest rock walls on the planet. Nunavut is a  
          <span className="text-[#000]">unique place in the world</span> ,
          getting there and visiting it involves considerable costs, but if you
          have the opportunity you will not regret it!
        </p>
      </div>
    </div>
  );
};

export default MapSection;
