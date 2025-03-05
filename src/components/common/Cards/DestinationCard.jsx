/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { DurationSvg, LinkSvg } from "../SvgContainer/SvgContainer";
import map from "../../../assets/images/card-map.png";

const DestinationCard = ({ item }) => {
  const [showExplore, setShowExplore] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowExplore(true)}
      onMouseLeave={() => setShowExplore(false)}
      className="h-[300px] xl:h-[350px] 3xl:h-[550px] group font-interTight text-white px-5 flex items-end relative"
      style={{
        background: `linear-gradient(180deg, rgba(30, 48, 63, 0.00) 41.29%, rgba(0, 0, 0, 0.52) 77.46%), url(${item?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pb-8 space-y-2">
        <div className="space-y-1">
          <h3 className="text-xl 3xl:text-2xl">{item?.destinationTitle}</h3>
          <h4 className="text-xl 3xl:text-2xl">€{item?.price}</h4>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <DurationSvg />
          <span>{item?.duration} days</span>
        </div>
      </div>

      {/* explore button */}
      <Link
        to={`/tour-list-details/${item?.id}`}
        className={`bg-black/20 backdrop-blur-sm px-3 py-1 absolute top-5 right-5 flex items-center gap-1 text-sm transition-all duration-300 ${
          showExplore ? "opacity-100" : "opacity-0"
        }`}
      >
        Explore <LinkSvg />
      </Link>

      {/* map */}
      {item?.mapBg && (
        <div className="absolute top-4 left-5">
          <img src={map} alt="" />
        </div>
      )}
    </div>
  );
};

export default DestinationCard;
