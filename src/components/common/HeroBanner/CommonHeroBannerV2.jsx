import { AiOutlineInfoCircle } from "react-icons/ai";

const CommonHeroBannerV2 = ({ item, bgImg, isAcitivity, altTxt }) => {
  return (
    <section className="relative mt-24 2xl:pt-[130px] md:pt-[90px] pt-14 pb-[70px] overflow-hidden">
      {/* Background image */}
      <img
        src={bgImg}
        alt={altTxt}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container">
        <div className="text-center max-w-[1030px] mx-auto">
          <p className="py-[6px] px-[12px] font-interTight bg-[#004265] rounded-[5px] text-[12px] font-medium inline-block text-white uppercase">
            {item?.title}
          </p>

          <div
            dangerouslySetInnerHTML={{
              __html: item?.subtitle || item.sub_title,
            }}
            className="text-[25px] xs:text-[28px] sm:text-[32px] lg:text-[40px] 2xl:text-[56px] font-editorsNoteNormal capitalize text-white leading-normal mt-3"
          ></div>

          <div
            dangerouslySetInnerHTML={{
              __html: item?.description || item.short_description,
            }}
            className="lg:mt-8 text-[15px] lg:text-[18px] text-white font-interTight lg:leading-9 leading-6 px-0 md:px-5"
          ></div>

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
