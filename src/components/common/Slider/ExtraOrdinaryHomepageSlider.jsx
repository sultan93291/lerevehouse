/* eslint-disable react/prop-types */
import { LinkSvgSlider } from '../SvgContainer/SvgContainer';
import { Link } from 'react-router-dom';
const ExtraOrdinaryHomepageSlider = ({ destination }) => {
  const imgBaseurl = import.meta.env.VITE_SERVER_URL;
  
  return (
    <div
      className=" h-[300px] lg:h-[500px] flex items-end justify-center py-10 w-[220px] lg:w-[350px]"
      style={{
        background: `url(${imgBaseurl}/${destination?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat"
      }}
    >
      <Link
        to={`/destination-details/${destination?.name}`}
        className="flex items-center gap-2 font-interTight text-base md:text-lg px-2 lg:text-xl text-white"
      >
        <h5 className="uppercase">{destination?.name}</h5>
        <span>
          <LinkSvgSlider />
        </span>
      </Link>
    </div>
  );
};

export default ExtraOrdinaryHomepageSlider;
