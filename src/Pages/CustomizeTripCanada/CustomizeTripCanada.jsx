import { SpecialStar } from "@/components/common/SvgContainer/SvgContainer";
import { HolidayData } from "@/components/DummyData/CustomizeTripData";
import mountainer from "../../assets/images/customize-trip/mountainer.jpg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CustomizeTripCanada = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSingleTour = () => {
    navigate("/");
  };

  return (
    <section className="mt-16 xl:mt-20 mb-0 2xl:my-[156px] py-14 md:py-[72px] relative w-full overflow-hidden flex flex-col gap-y-10 md:gap-y-16 xl:gap-y-[144px]">
      <div className="flex flex-col relative w-full gap-y-10 md:gap-y-16 xl:gap-y-[120px]">
        <div className="flex flex-col justify-center text-center gap-y-4 items-center px-1 md:px-0">
          <h2 className="text-[#1687C7] font-interTight text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-[56px] font-semibold leading-[160%]">
            {t("customizeTripCanada.title")}
          </h2>
          <p className="text-text-gray w-full px-5 xl:max-w-[966px] font-interTight text-[15px] md:text-lg 2xl:text-xl text-center 3xl:text-2xl font-normal leading-[140%]">
            {t("customizeTripCanada.intro")}
          </p>
        </div>

        <div className="flex px-3 w-full items-center justify-center gap-3 xl:gap-0 relative flex-wrap">
          {HolidayData.map((item, index) => (
            <div
              key={index}
              className="w-full group md:w-[480px] relative h-[250px] shrink-0"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${item.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full group-hover:hidden transition-all ease-in-out duration-500 group-hover:transform group-hover:scale-110 w-full flex flex-col gap-y-2 items-center justify-end xl:pb-[18.42px]">
                <span className="text-white xl:text-xl font-semibold leading-[150%] font-interTight tracking-[1px]">
                  {item.tittle}
                </span>
                <SpecialStar />
              </div>
              <div className="h-[190px] px-[13.5px] gap-y-2 flex flex-col items-center justify-center group-hover:opacity-100 ease-in-out duration-500 opacity-0 xl:w-[480px] absolute left-0 xl:bottom-0 bottom-8 bg-blackRgba">
                <p className="text-white text-xl font-semibold leading-[150%] font-interTight tracking-[1px]">
                  {item.tittle}
                </p>
                <p className="text-white text-sm text-center font-semibold leading-[150%] font-interTight tracking-[1px]">
                  {t("customizeTripCanada.cardText")}
                </p>
                <button
                  onClick={handleSingleTour}
                  className="px-6 py-3 rounded-[5px] bg-[#1687C7] text-sm font-medium leading-[120%] font-interTight text-white"
                >
                  {t("customizeTripCanada.discoverMore")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col container gap-y-10 md:gap-y-16 xl:gap-y-[171px] items-center">
        <div className="flex flex-col gap-y-8 md:gap-y-[47px]">
          <div className="flex flex-col justify-center text-center gap-y-2 items-center">
            <h2 className="text-[#000] text-2xl md:text-3xl mb-2 xl:text-5xl 2xl:text-[56px] font-light leading-[150%] tracking-[1px]">
              {t("customizeTripCanada.makeUniqueTitle")}
            </h2>
            <span className="text-[#000] md:text-[18px] font-light leading-[150%] tracking-[1px] font-interTight">
              {t("customizeTripCanada.makeUniqueSubtitle")}
            </span>
          </div>
          <div className="flex flex-col xl:flex-row gap-5 md:gap-[35px]">
            <p className="text-text-gray 2xl:text-[18px] font-interTight leading-[150%] tracking-[1px]">
              {t("customizeTripCanada.para1")}
            </p>
            <p className="text-text-gray 2xl:text-[18px] font-interTight leading-[150%] tracking-[1px]">
              {t("customizeTripCanada.para2")}
            </p>
            <p className="text-text-gray 2xl:text-[18px] font-interTight leading-[150%] tracking-[1px]">
              {t("customizeTripCanada.para3")}
            </p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-[45px] items-center">
          <div className="flex flex-col gap-y-5">
            <h4 className="text-[#000] text-3xl md:text-4xl xl:text-[56px] font-medium font-inter leading-[150%] tracking-[1px]">
              {t("customizeTripCanada.ctaTitle")}
            </h4>
            <span className="text-[#000] lg:text-[18px] font-interTight xl:max-w-[525px] font-light leading-[150%] tracking-[1px]">
              {t("customizeTripCanada.ctaText")}
            </span>
          </div>
          <div
            className="w-full xl:w-[700px] 2xl:max-w-[1063px] h-[250px] md:h-[400px] xl:h-[574px] relative"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${mountainer})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="md:h-full md:w-full flex flex-col justify-end py-8">
              <span className="text-white text-[18px] font-interTight ml-[10px] max-w-[988px] font-light leading-[150%] tracking-[1px]">
                {t("customizeTripCanada.rockyMountaineerNote")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeTripCanada;
