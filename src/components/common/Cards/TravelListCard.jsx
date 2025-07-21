/* eslint-disable react/prop-types */
import { ClockSvg } from "../SvgContainer/SvgContainer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TravelListCard = ({ item }) => {
  const { t } = useTranslation();

  const descriptionLength = item?.travel_style?.description?.length;
  if (descriptionLength > 200) {
    item.description = item?.travel_style?.description.slice(0, 120) + "...";
  }

  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  return (
    <div className="px-4 py-5 font-interTight group bg-[#f4f4f4]">
      <div className="w-full h-[150px] lg:h-[200px] xl:h-72 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
          src={`${imgBaseurl}/${item?.trip_package_image}`}
          alt="not found"
        />
      </div>

      {/* contents */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-2">
          <ClockSvg />
          <span className="font-semibold text-sm lg:text-base text-primary">
            {t("travelCard.dayTrip", { count: item?.duration })}
          </span>
        </div>

        <div className="space-y-1">
          <h4 className="text-lg lg:text-xl font-semibold">
            {item?.trip_package_title}
          </h4>
          {item?.travel_style?.description && (
            <p className="text-[#565656] h-12 text-sm lg:text-base lg:h-20">
              {item?.travel_style?.description}
            </p>
          )}
        </div>

        <div className="w-full flex items-center justify-between pt-3">
          <span className="text-primary text-sm lg:text-base font-semibold">
            ${item.package_price}
          </span>
          <Link
            to={`/tour-list-details/${item?.id}`}
            className="bg-primary px-4 py-2 text-white text-xs lg:text-sm border border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
          >
            {t("travelCard.viewTour")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelListCard;
