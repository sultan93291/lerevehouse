import { useTranslation, Trans } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useGetAllTravelStylesDataQuery } from "@/Redux/features/api/apiSlice";

import imageOne from "../../assets/images/explore-travel1.png";
import imageTwo from "../../assets/images/explore-travel2.png";
import imageThree from "../../assets/images/explore-travel3.png";
import imageFour from "../../assets/images/explore-travel4.png";
import imageFive from "../../assets/images/explore-travel5.png";
import imageSix from "../../assets/images/explore-travel6.png";
import TravelExploreCard from "./TravelExploreCard";

const ExploreTravel = ({ travelMode }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const { data } = useGetAllTravelStylesDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const translatedTravelData = [
    {
      id: 1,
      title: t("travelCards.honeymoon.title"),
      description: t("travelCards.honeymoon.description"),
      image: imageOne,
      btnText: t("viewAll"),
      btnLInk: "/canada-holiday",
    },
    {
      id: 2,
      title: t("travelCards.adventureObservations.title"),
      description: t("travelCards.adventureObservations.description"),
      image: imageTwo,
      btnText: t("viewAll"),
      btnLInk: "/canada-holiday",
    },
    {
      id: 3,
      title: t("travelCards.familyTrip.title"),
      description: t("travelCards.familyTrip.description"),
      image: imageThree,
      btnText: t("viewAll"),
      btnLInk: "/canada-holiday",
    },
    {
      id: 4,
      title: t("travelCards.adventure.title"),
      description: t("travelCards.adventure.description"),
      image: imageFour,
      btnText: t("viewAll"),
      btnLInk: "/canada-holiday",
    },
    {
      id: 5,
      title: t("travelCards.nightTime.title"),
      description: t("travelCards.nightTime.description"),
      image: imageFive,
      btnText: t("viewAll"),
      btnLInk: "/canada-holiday",
    },
    {
      id: 6,
      title: t("travelCards.skiing.title"),
      description: t("travelCards.skiing.description"),
      image: imageSix,
      btnText: t("viewAll"),
      btnLInk: "/canada-holiday",
    }
  ];

  return (
    <section className="pb-10 sm:pb-16 xl:pb-[120px] xl:px-5 2xl:px-14">
      <div className="container">
        {/* section title */}
        <div className="section-title">
          <h1 className="text-[24px] sm:text-[35px] lg:text-[48px] 2xl:text-[54px] max-w-[1050px] mx-auto text-center font-medium font-editorsNoteNormal leading-normal mb-8 sm:mb-12 lg:mb-20 xl:mb-[100px]">
            <Trans
              i18nKey="exploreHeading"
              components={{
                italic: <span className="font-editorsNoteItalic text-secondary" />
              }}
            />
          </h1>
        </div>

        <div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
            {(data?.data || translatedTravelData).map(item => (
              <TravelExploreCard
                travelMode={travelMode}
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreTravel;
