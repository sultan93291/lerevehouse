import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TravelExploreCard = ({ item, travelMode }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  console.log(item);

  return (
    <div
      className="TravelExploreCard rounded-[15px] flex flex-col h-[240px] lg:h-[400px] 2xl:h-[520px] overflow-hidden items-center justify-cente relative bg-cover bg-no-repeat z-[1]"
      style={{
        backgroundImage: `url(${imgBaseurl}/${
          item?.image || item?.travel_style?.image
        })`,
      }}
    >
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full front duration-500 ease-in-out">
        <h3 className="text-2xl md:text-[30px] 2xl:text-[40px] font-semibold font-editorsNoteNormal text-white mx-auto text-center leading-[48px]">
          {item?.name || item?.travel_style?.name}
        </h3>
      </div>
      <div className="p-5 2xl:p-[64px] back text-center absolute w-full h-full flex flex-col items-center justify-center duration-500 ease-in-out">
        <h3 className="text-[20px] sm:text-lg md:text-lg 2xl:text-[40px] font-semibold font-editorsNoteNormal text-white mx-auto text-center">
          {item?.name || item?.travel_style?.name}
        </h3>
        <p className="text-xs xl:text-base text-white leading-normal mt-0 sm:mt-2 font-inter">
          {item?.description || item?.travel_style?.description}
        </p>
        <button
          className="2xl:mt-9 mt-2 md:mt-3 inline-block px-7 md:py-2 xl:py-3 py-[6px] sm:px-[62px] sm:py-2 text-white text-sm font-medium font-inter bg-secondary rounded-[5px]"
          onClick={() => {
            if (
              item.name === "honeymoon" ||
              item.name === "Honeymoon" ||
              item.name === "viaggi noze" ||
              item.name == "Viaggi noze"
            ) {
              navigate("/viaggi-noze");
            } else {
              navigate(
                travelMode === "styles"
                  ? `/travel-styles-details/${item?.id}`
                  : travelMode === "travel_details" ||
                    travelMode === "honey_moon"
                  ? `/tour-list-details/${item?.id}`
                  : `/activities/subcategory/${item?.name}?bg=${imgBaseurl}/${
                      item?.image || item?.travel_style?.image
                    }?id=${item.id}`
              );
            }
          }}
        >
          {travelMode === "travel_details"
            ? t("travelExploreCard.discoverTrip")
            : t("travelExploreCard.view")}
        </button>
      </div>
    </div>
  );
};

export default TravelExploreCard;
