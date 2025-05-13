import React from "react";

// type PricingCardProps = {
//   title: string;
//   description: string;
//   price: number | string;
//   priceSuffix?: string;
//   buttonText: string;
//   features: string[];
//   supportInfo: string;
//   isCurrent?: boolean;
//   extraFeatures?: string[];
// };

const Pricingcards = ({
  title,
  description,
  price,
  priceSuffix = "Month",
  buttonText,
  features,
  supportInfo,
  extraFeatures,
  paddingBottom,
}) => {
  return (
    <div className="group">
      <section
        style={{ paddingBottom: `${paddingBottom}px` }}
        className={`
        flex flex-col pt-[35px] px-[35px] h-auto max-w-[560px] justify-between cursor-pointer border border-[#D7D7D7] rounded-[30px] duration-300 group-hover:bg-[#003072] bg-white min-h-[1570px] ease-in-out  `}
      >
        <div className="flex flex-col gap-y-[30px]">
          <div className="flex flex-col gap-y-[90px] items-center">
            <div className="flex col gap-y-5">
              <div className="flex flex-col gap-y-[15px]">
                <h4 className="text-[42px] font-popins font-semibold text-[#000] group-hover:text-white">
                  {title}
                </h4>
                <p className="text-[20px] font-popins text-[#A6A6A6] font-normal group-hover:text-[#B9CBE2]">
                  {description}
                </p>

                <div className="flex flex-row w-full justify-between items-center">
                  <h5 className="font-semibold text-[#000] font-popins text-[44px] group-hover:text-white">
                    €{price}
                  </h5>
                  <span className="font-popins text-[#A6A6A6] font-medium text-right text-[24px] group-hover:text-white">
                    {priceSuffix}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-[158px] w-full relative items-center ">
              <button className="border border-[#D7D7D7] rounded-[20px] px-[60px] py-[18px] font-semibold font-popins text-[24px] group-hover:bg-white group-hover:text-[#003072] cursor-pointer max-w-[272px]">
                {buttonText}
              </button>
              <hr className="w-full h-[1px]" />
            </div>
          </div>

          <div className="flex flex-col gap-y-5 ">
            <h3 className="font-semibold text-[#000] font-popins text-[42px] group-hover:text-white">
              Features
            </h3>
            <ul className="flex flex-col gap-[20px] items-start  group-hover:text-[#B9CBE2]">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex gap-x-[20px] text-[#ADADAD] font-popins font-normal text-[20px] items-center"
                >
                  <span className="h-4 w-4 rounded-full border border-[#A6A6A6] flex-shrink-0 inline-block"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <h3 className="font-semibold text-[#000] font-popins text-[42px] group-hover:text-white">
            Support
          </h3>
          {extraFeatures?.length > 0 ? (
            <ul className="flex flex-col gap-[20px] group-hover:text-[#B9CBE2] mt-6">
              {extraFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex gap-x-[20px] text-[#ADADAD] font-popins font-normal text-[20px] items-center"
                >
                  <span className="h-4 w-4 rounded-full border border-[#A6A6A6] flex-shrink-0 inline-block"></span>
                  {feature}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[#ADADAD] font-popins font-normal text-[20px]">
              {supportInfo}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Pricingcards;
