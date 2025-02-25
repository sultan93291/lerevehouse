/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import bg from '@/assets/images/bg.png';
const RequestedTripCard = ({ item, idx }) => {
  return (
    <div
      className={`h-[750px] flex ${
        item?.type == 'horizontal' ? 'items-center justify-end' : 'items-end'
      }  ${idx == 1 ? 'col-span-2' : idx == 2 ? 'col-span-4' : 'col-span-6'}`}
      style={{
        background: ` url(${item?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{ backgroundColor: `${item?.bgColor}` }}
        className={`  font-interTight flex items-center justify-center text-white relative
          ${
            item?.type == 'horizontal' ? 'h-full max-w-[500px]' : 'w-full h-[250px]'
          }
          `}
      >
        <div className="px-8 relative z-10 space-y-3">
          <h3 className="text-xl">{item?.title}</h3>
          <p>{item?.description}</p>

          <Link
            to={`/tour-list-details/${item?.id}`}
            className="underline block pt-4"
          >
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

export default RequestedTripCard;
