/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { LocationLuxurySvg } from '../SvgContainer/SvgContainer';

const LuxuryCard = ({ item }) => {
  return (
    <Link className="group block">
      <div className="w-full h-72 overflow-hidden">
        <img
          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
          src={item?.image}
          alt=""
        />
      </div>
      <div className="mt-4 font-interTight">
        <div className="flex items-center gap-2">
          <LocationLuxurySvg />
          <span className=" font-medium text-primary">{item?.location}</span>
        </div>
        <div className="mt-3 space-y-2">
          <h4 className="text-xl font-semibold">{item?.title}</h4>
          <p className="text-[#565656]">{item?.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default LuxuryCard;
