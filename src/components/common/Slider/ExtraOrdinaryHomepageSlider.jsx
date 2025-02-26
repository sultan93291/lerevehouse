/* eslint-disable react/prop-types */
import { LinkSvgSlider } from '../SvgContainer/SvgContainer';
import { Link } from 'react-router-dom';
const ExtraOrdinaryHomepageSlider = ({ destination }) => {
  return (
    <div
      className=" h-[300px] lg:h-[500px] flex items-end justify-center py-10 w-[220px] lg:w-[350px]"
      style={{
        background: `url(${destination?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Link
        to={`/destination-details/${destination?.title}`}
        className="flex items-center gap-2 font-interTight text-base md:text-lg px-2 lg:text-xl text-white"
      >
        <h5 className='uppercase'>{destination?.title}</h5>
        <span>
          <LinkSvgSlider />
        </span>
      </Link>
    </div>
  );
};

export default ExtraOrdinaryHomepageSlider;
