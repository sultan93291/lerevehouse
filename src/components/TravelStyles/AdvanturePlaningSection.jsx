import {
  useGetStylesAdventureDataQuery,
  useGetTravelStylesDescreptionDataQuery,
} from "@/Redux/features/api/apiSlice";
import { useTranslation } from "react-i18next";

import ActiveImage from "../../assets/images/active.svg";
import SustainableImage from "../../assets/images/sustainable.svg";
import TrustedImage from "../../assets/images/trusted.svg";
import WorldWideImage from "../../assets/images/worldwide.svg";
import AdvanturePlaningCard from "../../components/TravelStyles/AdvanturePlaningCard";

const AdvanturePlaningSection = () => {
  const { t } = useTranslation();

  const { data } = useGetStylesAdventureDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const {
    data: descreptionData,
  } = useGetTravelStylesDescreptionDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const holidaysData = [
    {
      id: 1,
      title: t("holidayCards.trusted.title"),
      description: t("holidayCards.trusted.description"),
      image: TrustedImage,
    },
    {
      id: 2,
      title: t("holidayCards.active.title"),
      description: t("holidayCards.active.description"),
      image: ActiveImage,
    },
    {
      id: 3,
      title: t("holidayCards.worldwide.title"),
      description: t("holidayCards.worldwide.description"),
      image: WorldWideImage,
    },
    {
      id: 4,
      title: t("holidayCards.sustainable.title"),
      description: t("holidayCards.sustainable.description"),
      image: SustainableImage,
    },
  ];

  return (
    <section className="xl:px-5 2xl:px-14">
      <div className="container">
        <div className="section-title text-center mb-3 md:mb-10">
          <h3 className="title--xxl">{t("adventurePlanningHeading")}</h3>
        </div>

        <div className="row row-custom flex pt-0 pb-2 lg:py-0 flex-wrap ml-[-17px] mr-[-17px]">
          {(data?.data || holidaysData).map(item => (
            <div
              key={item?.id}
              className="custom-column pl-[17px] pr-[17px] lg:pb-0 w-full sm:w-[50%] lg:w-[25%]"
            >
              <AdvanturePlaningCard item={item} />
            </div>
          ))}
        </div>

        {/* Optional: Rich HTML description (uncomment if needed) */}
        {/* <div className="text-center sm:pt-5 pb-10 xs:py-10 lg:py-20 2xl:py-[120px] font-interTight text-[15px] xs:text-base lg:text-lg xl:text-xl 2xl:text-[24px] leading-[180%] hidden">
          <div
            dangerouslySetInnerHTML={{
              __html: descreptionData?.data[0]?.description,
            }}
          />
        </div> */}
      </div>
    </section>
  );
};

export default AdvanturePlaningSection;
