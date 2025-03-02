import React from "react";
import ParkDetialsSlider from "./ParkDetialsSlider";

const ParkDetails = ({
  Heading,
  SubHeading,
  ParaOne,
  ParaTwo,
  ParaThree,
  BtnTxt,
  Images,
  isHover,
  isDouble,
}) => {
  return (
    <div className="flex container flex-col my-20 gap-y-[51px]">
      <div className="flex flex-col gap-y-4 ">
        <div className="flex flex-col gap-y-1">
          <h2 className="text-prmiary-blue text-[32px] font-semibold font-interTight leading-[160%] ">
            {" "}
            {Heading}{" "}
          </h2>
          <h5 className="text-prmiary-blue text-[18px] font-normal font-interTight leading-[160%] ">
            {SubHeading}
          </h5>
        </div>
        <div className="flex flex-col gap-y-5  ">
          <div className="flex flex-row w-full gap-x-6   ">
            <p className="text-text-gray text-[18px]   font-normal font-interTight leading-[160%] ">
              {ParaOne}{" "}
              {isDouble && (
                <>
                  <p className="mt-8">{ParaOne}</p>
                </>
              )}
            </p>
            <p className="text-text-gray text-[18px] font-normal font-interTight leading-[160%] ">
              {ParaTwo}{" "}
              {isDouble && (
                <>
                  <p className="mt-8">{ParaTwo}</p>
                </>
              )}
            </p>
            <p className="text-text-gray text-[18px] font-normal font-interTight leading-[160%] ">
              {ParaThree}{" "}
              {isDouble && (
                <>
                  <p className="mt-8">{ParaThree}</p>
                </>
              )}
            </p>
          </div>
          {/* {BtnTxt && (
            <div className="w-full items-start">
              <button
                className={`px-[56.5px] py-[13px] bg-light-blue border-[1px] border-solid border-transparent text-white text-base tracking-[-0.16px] leading-[19.2px] font-medium font-interTight ease-in-out duration-500 ${
                  isHover
                    ? "hover:bg-white hover:text-light-blue"
                    : "hover:border-light-blue hover:text-light-blue hover:bg-transparent"
                }  `}
              >
                {BtnTxt}
              </button>
            </div>
          )} */}
        </div>
      </div>
      <div className="flex flex-row container  ">
        <ParkDetialsSlider data={Images} />
      </div>
    </div>
  );
};

export default ParkDetails;
