/* eslint-disable react/prop-types */
import { ClockSvg } from '../SvgContainer/SvgContainer';
import { Link } from 'react-router-dom';
const TravelListCard = ({ item }) => {
  const descriptionLength = item?.description.length;
  if (descriptionLength > 200) {
    item.description = item?.description.slice(0, 120)+'...';
  }
  return (
    <div className="px-4 py-5 font-interTight group bg-[#f4f4f4]">
      <div className="w-full h-[150px] lg:h-[200px] xl:h-72 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
          src={item?.image}
          alt=""
        />
      </div>
      {/* contents */}
      <div className="mt-4 space-y-3 ">
        <div className="flex items-center gap-2">
          <ClockSvg />
          <span className=" font-semibold text-sm lg:text-base text-primary">
            {item?.duration} Day Trip
          </span>
        </div>
        <div className="space-y-1">
          <h4 className="text-lg lg:text-xl font-semibold">{item?.title}</h4>
          <p className="text-[#565656] h-12 text-sm lg:text-base  lg:h-20">
            {item?.description}
            <Link className="text-primary text-sm lg:text-base">Read More</Link>
          </p>
        </div>
        <div className="w-full flex items-center justify-between pt-3">
          <span className="text-primary text-sm lg:text-base font-semibold">€2,650.00</span>
          <Link
            to={`/tour-list-details/${item?.id}`}
            className="bg-primary px-4 px-4 py-2 text-white text-xs lg:text-sm border border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
          >
            VIEW THIS TOUR
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelListCard;
