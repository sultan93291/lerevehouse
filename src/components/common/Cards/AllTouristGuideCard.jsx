/* eslint-disable react/prop-types */
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const AllTouristGuideCard = ({ tour, className }) => {
  return (
    <div
      className={cn(
        'h-[600px] w-full flex items-end justify-center pb-10 group',
        className
      )}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${tour?.image})`,
        backgroundColor: 'lightgray',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Link
        to={`/all-tourist-guide-details/${tour?.title}`}
        className="block group-hover:scale-105 transition-all duration-500 font-editorsNoteNormal text-white font-semibold text-3xl"
      >
        {tour?.title}
      </Link>
    </div>
  );
};

export default AllTouristGuideCard;
