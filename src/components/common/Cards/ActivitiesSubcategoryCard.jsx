/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { ActivitiesClockSvg } from '../SvgContainer/SvgContainer';

const ActivitiesSubcategoryCard = ({ item }) => {
  return (
    <div className="font-interTight group">
      <div className="h-72 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
          src={item?.image}
          alt=""
        />
      </div>
      {/* description */}
      <div className="bg-[#efefef] px-5 py-6">
        <div>
          <h5 className="text-xl font-medium h-16">{item?.title}</h5>
        </div>

        {/* duration */}
        <div className="w-full flex items-center justify-between mt-4">
          {/* left side */}
          <div className="flex items-center gap-2">
            <ActivitiesClockSvg />
            <span className="text-lg">{item?.duration}</span>
          </div>
          {/* right side */}
          <div>
            <Link
              to={`/activities-details/${item?.id}`}
              className="uppercase px-6 py-2 bg-primary border border-primary text-white hover:bg-transparent transition-all duration-300 hover:text-primary"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSubcategoryCard;
