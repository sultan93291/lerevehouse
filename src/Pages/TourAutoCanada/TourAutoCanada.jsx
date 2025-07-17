import { useTranslation } from "react-i18next";
import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import mountain from "../../assets/images/tour-auto/mountain.png";
import TourListDetailsReview from "@/components/TourListDetails/TourListDetailsReview";
import Map from "../../assets/images/tour-auto/map.png";
import TourAutoFAqSections from "./Sections/TourAutoFAqSections";
import TourAutoTabSection from "./Sections/TourAutoTabSection/TourAutoTabSection";

const TourAutoCanada = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-10">
      <CommonHeroBanner bg={mountain} title={t("tourAutoCanada.title")} />
      <div className="flex flex-col 2xl:py-20 py-10 container">
        <div className="flex flex-col">
          <div className="flex flex-col 2xl:flex-row items-center gap-x-[62px]">
            <div className="flex flex-col gap-y-5">
              <p className="text-[#565656] font-interTight text-sm md:text-base font-normal leading-[160%]">
                {t("tourAutoCanada.description")}
              </p>
              <TourAutoFAqSections />
            </div>
            <img
              className="hidden xl:block 2xl:max-w-[790px] md:h-[576px] h-[250px] object-cover"
              src={Map}
              alt="not found"
            />
          </div>
          <TourListDetailsReview isHeading={false} />
        </div>
        <TourAutoTabSection />
      </div>
    </section>
  );
};

export default TourAutoCanada;
