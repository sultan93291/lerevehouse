/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import bg from "@/assets/images/bg.png";

const RequestedTripCard = ({ item, idx }) => {
  return (
    <div
      className={` h-[350px] xl:h-[750px] flex ${
        item?.type == "horizontal" ? "items-center justify-end" : "items-end"
      }  ${idx == 1 ? "col-span-6 lg:col-span-2" : idx == 2 ? "col-span-6 lg:col-span-4" : "col-span-6"}`}
      style={{
        background: `url(${item?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{ backgroundColor: `${item?.bgColor}` }}
        className={` font-interTight flex items-center justify-center text-white relative
          ${
            item?.type == "horizontal"
              ? "  h-full max-w-[230px] lg:max-w-[500px]"
              : "w-full h-[155px] md:h-[250px]"
          }
          `}
      >
        <div className="px-4 lg:px-8 relative z-10 space-y-2 md:space-y-3">
          <h3 className="text-lg lg:text-xl">{item?.title}</h3>
          <p className="text-sm lg:text-base">{item?.description}</p>

          <Link
            to={`/tour-list-details/${item?.id}`}
            className="underline block pt-2 lg:pt-4"
          >
            Discover More
          </Link>
        </div>

        {/* Adjusted Overlay for Small Screens */}
        <div className="absolute inset-0 sm:h-1/2 sm:w-1/2 lg:h-full lg:w-full">
          <img className="h-full w-full object-cover" src={bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RequestedTripCard;
