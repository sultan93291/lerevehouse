import bg from "../../assets/images/destination-bg.jpg";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

const TourListDetailsBanner = ({ herSectionData }) => {
  const { t } = useTranslation();
  const baseImgUrl = import.meta.env.VITE_SERVER_URL;

  return (
    <section
      className="h-auto py-14 md:py-0 md:h-[500px] lg:h-[600px] mt-20 xl:mt-24 px-4 sm:px-8 xl:px-0 bg-cover bg-center flex flex-col gap-3 sm:gap-5 lg:gap-10 items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${baseImgUrl}/${herSectionData?.heroImage})`,
        backgroundColor: "lightgray",
        backgroundPosition: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <span className="text-white uppercase bg-[#004265] px-3 sm:px-4 py-1 sm:py-[6px] rounded">
        {herSectionData?.heroSectionTittle}
      </span>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center xl:text-left font-editorsNoteNormal font-light text-white">
        {herSectionData?.heroSectionSubtittle}
      </h1>
      <div className="tour-desc-hero">
        {parse(herSectionData?.herSectionDescreption || "")}
      </div>
      <div className="flex items-center flex-wrap justify-center gap-5 md:gap-10 lg:gap-14">
        <div className="text-center">
          <p className="text-white mb-1 font-editorsNoteNormal text-xl lg:text-2xl">
            {herSectionData?.suggestedHolidayLenght}
          </p>
          <p className="text-white uppercase text-sm sm:text-base">
            {t("tourBanner.suggestedLength")}
          </p>
        </div>
        <div className="text-center">
          <p className="text-white mb-1 font-editorsNoteNormal text-xl lg:text-2xl">
            {herSectionData?.bestTimeToGo}
          </p>
          <p className="text-white uppercase text-sm sm:text-base">
            {t("tourBanner.bestTime")}
          </p>
        </div>
        <div className="text-center">
          <p className="text-white mb-1 font-editorsNoteNormal text-xl lg:text-2xl">
            $ {herSectionData?.price}
          </p>
          <p className="text-white uppercase text-sm sm:text-base">
            {t("tourBanner.priceFrom")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TourListDetailsBanner;
