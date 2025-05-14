import React from "react";
import Mountain from "../../../assets/images/canada-tour/lake.jpg";

const ConsultCard = ({ data }) => {
  console.log(data);

  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  return (
    <div
      id={data?.name}
      className="flex flex-col h-auto max-w-[1600px] bg-white p-4 md:p-8 2xl:p-[64px] gap-y-6 lg:gap-y-12"
    >
      <div className="flex flex-col gap-y-[22px] ">
        <div className="flex flex-col md:gap-y-8 gap-y-4">
          <h2 className="text-[#1687C7] text-[32px] md:text-[40px] font-bold leading-[150%] font-interTight tracking-[1px]">
            {data?.name}
          </h2>
          <span className="text-[#484848] text-lg md:text-[24px] font-bold leading-[150%] font-interTight tracking-[1px]  ">
            {data?.place_details?.title}
          </span>
        </div>
        <div className="flex flex-col gap-y-[22px]">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.place_details?.description,
            }}
            className="text-[#787878] flex flex-col gap-y-2 text-sm md:text-[16px] font-normal leading-[150%] font-interTight tracking-[1px]  "
          ></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 2xl:h-[383px] h-full">
        {data?.place_details?.images?.map((item, index) => {
          return (
            <img
              className="xl:w-[480px] w-full 2xl:h-[383px] h-[180px] object-cover"
              src={`${imgBaseurl}/${item?.image}`}
              alt="not found"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ConsultCard;
