import { useTranslation, Trans } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useGetAllTravelStylesDataQuery } from "@/Redux/features/api/apiSlice";
import TravelExploreCard from "./TravelExploreCard";

const ExploreTravel = ({ travelMode }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const { data } = useGetAllTravelStylesDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  console.log(data);
  


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
            {data?.data?.map(item => (
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
