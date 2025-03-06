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
    <div className="flex container flex-col xl:my-20 md:my-10 mt-5 mb-0 pb-3 md:gap-y-[51px]">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1">
          <h2 className="text-prmiary-blue text-[28px] xl:text-[32px] font-semibold font-interTight leading-[160%]">
            {" "}
            {Heading}{" "}
          </h2>
          <h5 className="text-prmiary-blue text-[18px] font-normal font-interTight leading-[160%] ">
            {SubHeading}
          </h5>
        </div>
        <div className="flex flex-col gap-y-5 ">
          <div className="flex flex-col xl:flex-row w-full gap-5   ">
            <p className="text-text-gray xl:text-[18px]  font-normal font-interTight leading-[160%] ">
              {ParaOne}{" "}
              {isDouble && (
                <>
                  <p className="mt-8">{ParaOne}</p>
                </>
              )}
            </p>
            <p className="text-text-gray xl:text-[18px] font-normal font-interTight leading-[160%] ">
              {ParaTwo}{" "}
              {isDouble && (
                <>
                  <p className="mt-8">{ParaTwo}</p>
                </>
              )}
            </p>
            <p className="text-text-gray xl:text-[18px] font-normal font-interTight leading-[160%] ">
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
      <div className="flex">
        <ParkDetialsSlider data={Images} />
      </div>
    </div>
  );
};

export default ParkDetails;

//ok responsive
