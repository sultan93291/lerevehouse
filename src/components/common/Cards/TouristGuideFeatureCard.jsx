/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const TouristGuideFeatureCard = ({ bg, title }) => {
  return (
    <div
      className="h-full bg-cover bg-center flex items-end group
      justify-center text-center py-20 xl:py-32"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.43) 0%, rgba(0, 0, 0, 0.4) 100%), url(${bg})`,
        backgroundColor: 'lightgray',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Link
        to={`/all-tourist-guide/${title.toLowerCase()}`}
        className="text-xl xs:text-2xl 2xl:text-4xl group-hover:scale-105 transition-all duration-500 font-editorsNoteNormal font-light text-white"
      >
        {title} Travel Guide
      </Link>
    </div>
  );
};

export default TouristGuideFeatureCard;
