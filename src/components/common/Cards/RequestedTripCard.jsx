/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import bg from "@/assets/images/bg.png";
import { useTranslation } from "react-i18next";

const RequestedTripCard = ({ item, idx }) => {
  const imgBaseurl = import.meta.env.VITE_SERVER_URL;
  const { t } = useTranslation();


  return (
    <div
      className={`relative overflow-hidden h-[350px] xl:h-[450px] 2xl:h-[750px] flex ${
        item?.type === "horizontal" ? "items-center justify-end" : "items-end"
      } ${
        idx === 1
          ? "col-span-6 lg:col-span-2"
          : idx === 2
          ? "col-span-6 lg:col-span-4"
          : "col-span-6"
      }`}
    >
      {/* Main background image */}
      <img
        src={`${imgBaseurl}/${item.image}`}
        alt={item?.image_alt_txt || `${item?.title} main image`}
        className="absolute inset-0 w-full h-full object-cover"
      />

     

      {/* Content container */}
      <div
        style={{ backgroundColor: `${item?.bgColor}` }}
        className={`font-interTight text-white relative z-10 flex items-center justify-center ${
          item?.type === "horizontal"
            ? "h-full max-w-[230px] lg:max-w-[500px]"
            : "w-full h-[155px] md:h-[250px]"
        }`}
      >
        <div className="px-4 lg:px-8 space-y-1 md:space-y-3 text-center lg:text-left">
          <h3 className="text-lg xl:text-xl">{item?.title}</h3>
          <div
            dangerouslySetInnerHTML={{ __html: item?.description }}
            className="text-sm xl:text-base"
          />
          <Link
            to={`/tour-list-details/${item?.id}`}
            className="underline block pt-1 lg:pt-4"
          >
            {t("discoverMore")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RequestedTripCard;
