import React from "react";
import map from "../../../assets/images/canada-tour/map.png";
import {
  Temperature,
  UnknownCreature,
} from "@/components/common/SvgContainer/SvgContainer";

const MapSection = ({ data }) => {
  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  return (
    <div className="flex flex-col 2xl:gap-y-[64px] gap-y-10 container">
      <div className="flex flex-col md:flex-row items-center gap-x-6">
        <div className="hidden xl:block md:h-[460px] md:w-[641px] 2xl:flex items-center justify-center">
          <img
            src={`${imgBaseurl}/${data[0]?.map_image}`}
            alt={data[0]?.image_alt_txt}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-y-[30px] mt-8 xl:mt-0">
          <div className="flex flex-col  xl:flex-row gap-4 items-start xl:items-center ">
            <div className="flex flex-col items-center h-12 w-12 border-[3px] border-solid border-[#BFBFBF] rounded-full justify-center">
              <UnknownCreature />
            </div>
            <div className="flex flex-col gap-y-2  ">
              <h4 className="text-[#000] text-[18px] font-semibold leading-[150%] tracking-[1px] font-interTight">
                {data[0]?.first_question}
              </h4>
              <span className="text-text-gray text-sm md:text-[16px] font-normal max-w-[577px] leading-[150%] tracking-[1px] font-interTight">
                {data[0]?.first_answer}
              </span>
            </div>
          </div>
          <div className="flex flex-col  xl:flex-row gap-4 items-start xl:items-center">
            <div className="flex flex-col items-center  w-12  h-12 border-[3px] border-solid border-[#BFBFBF] rounded-full justify-center">
              <Temperature />
            </div>
            <div className="flex flex-col gap-y-2  ">
              <h4 className="text-[#000] text-[18px] font-semibold leading-[150%] tracking-[1px] font-interTight">
                {data[0]?.second_question}
              </h4>
              <span className="text-text-gray text-sm md:text-[16px] max-w-[577px] font-normal leading-[150%] tracking-[1px] font-interTight">
                {data[0]?.second_answer}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-x-10 ">
        <div
          dangerouslySetInnerHTML={{ __html: data[0]?.description }}
          className="text-text-gray text-sm md:text-base 2xl:text-[18px] font-normal leading-[150%] tracking-[1px] font-interTight flex flex-col gap-y-2 "
        ></div>
      </div>
    </div>
  );
};

export default MapSection;
