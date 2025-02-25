/* eslint-disable react/prop-types */
import bg from '@/assets/images/bg.png';
import { Link } from 'react-router-dom';

const RequestedTourCard = ({card}) => {
  return (
    <div
      className="h-[750px] flex items-center justify-end"
      style={{
        background: ` url(${card?.bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="h-full max-w-[500px] bg-[#002B4D] font-interTight flex items-center justify-center text-white relative">
        <div className="px-8 relative z-10 space-y-3">
          <h3 className="text-2xl">Western Canada Tour </h3>
          <p className="text-lg">
            Experience the breathtaking landscapes of Western Canada, from
            majestic mountains to serene lakes, with unforgettable adventures
            and cultural highlights.
          </p>

          <Link to="/" className="underline block pt-4">
            Discover More
          </Link>
        </div>
        <div className="h-full w-full absolute inset-0">
          <img className="h-full w-full object-cover" src={bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RequestedTourCard;
