/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ActivitiesClockSvg } from "../SvgContainer/SvgContainer";

const ActivitiesSubcategoryCard = ({ item }) => {
  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  return (
    <div className="font-interTight group">
      <div className="md:h-72 h-[200px] w-full overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
          src={`${imgBaseurl}/${item?.image}`}
          alt=""
        />
      </div>
      {/* description */}
      <div className="bg-[#efefef] md:px-5 xl:py-6 px-4 py-4">
        <div>
          <h5 className="xl:text-xl font-medium md:h-16 h-14">{item?.title}</h5>
        </div>

        {/* duration */}
        <div className="w-full flex items-center justify-between 2xl:mt-4 xl:mt-10 lg:mt-5">
          {/* left side */}
          <div className="flex items-center gap-2">
            <ActivitiesClockSvg />
            <span className="text-sm xl:text-lg">
              {item?.duration || item?.time}
            </span>
          </div>
          {/* right side */}
          <div>
            <Link
              to={`/activities-details/${item?.id}?BgImg=${item?.image}?title=${item?.title}`}
              className="uppercase 2xl:px-6 xl:px-2 px-[10px] 2xl:py-2 xl:py-1 py-1 bg-primary border border-primary text-white hover:bg-transparent transition-all duration-300 hover:text-primary text-xs xl:text-base"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSubcategoryCard;
