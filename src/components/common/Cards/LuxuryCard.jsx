/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LuxuryCard = ({ item }) => {
  const imgBaseurl = import.meta.env.VITE_SERVER_URL;
  console.log(item);

  return (
    <Link to={`/tour-list-details/${item?.id}`} className="group block">
      <div className="w-full h-[200px] xl:h-72 overflow-hidden">
        <img
          className="h-full cursor-pointer w-full object-cover group-hover:scale-110 transition-all duration-300"
          src={`${imgBaseurl}/${item?.trip_package_image}`}
          alt="not found"
        />
      </div>
      <div className="mt-4 font-interTight">
        <div className="mt-2 xl:mt-3 space-y-1 xl:space-y-2">
          <h4 className=" text-lg xl:text-xl font-semibold">
            {item?.trip_package_title}
          </h4>
          <p className="text-[#565656]">{item?.travel_style?.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default LuxuryCard;
