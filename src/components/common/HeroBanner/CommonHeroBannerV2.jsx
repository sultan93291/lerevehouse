import { AiOutlineInfoCircle } from "react-icons/ai";

const CommonHeroBannerV2 = ({ item, bgImg, isAcitivity }) => {
  return (
    <section
      className="mt-24 bg-cover bg-center 2xl:pt-[130px] md:pt-[90px] pt-14 pb-[70px]"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${bgImg})`,
        backgroundColor: "lightgray",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="text-center max-w-[1030px] mx-auto">
          <p className="py-[6px] px-[12px] font-interTight bg-[#004265] rounded-[5px] text-[12px] font-medium inline-block text-white uppercase">
            {item?.category}
          </p>
          <h1 className="text-[25px] xs:text-[28px] sm:text-[32px] lg:text-[40px] 2xl:text-[56px] font-editorsNoteNormal capitalize text-white leading-normal mt-3">
            {item?.title}
          </h1>
          <p className="text-[15px] lg:text-[18px] font-interTight mt-4 text-white">
            {item?.subtitle}
          </p>
          <p className="lg:mt-8 text-[15px] lg:text-[18px] text-white font-interTight lg:leading-9 leading-6 px-0 md:px-5">
            {item?.description}
          </p>
          {!isAcitivity && (
            <div className="sm:mt-8 mt-4 flex items-center justify-center gap-4 sm:gap-8">
              <div className="text-center">
                <p className="font-interTight text-[20px] lg:text-[24px] leading-9 text-white">
                  {item?.details?.suggestedLength}
                </p>
                <p className="uppercase font-interTight text-white text-[12px]">
                  suggested length
                </p>
              </div>
              <div className="text-center">
                <p className="font-interTight text-[20px] lg:text-[24px] leading-9 text-white">
                  {item?.details?.bestTimeToGo}
                </p>
                <p className="uppercase font-interTight text-white text-[12px]">
                  best time to go
                </p>
              </div>
              <div className="text-center">
                <p className="font-interTight text-[20px] lg:text-[24px] leading-9 text-white">
                  ${item?.details?.priceFrom}
                </p>
                <p className="uppercase font-interTight text-white text-[12px] flex items-center gap-2">
                  price from{" "}
                  <span className="text-[16px]">
                    <AiOutlineInfoCircle />
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommonHeroBannerV2;
