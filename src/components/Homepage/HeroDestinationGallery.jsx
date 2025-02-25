/* eslint-disable react/prop-types */


import DestinationCard from '../common/Cards/DestinationCard';

const HeroDestinationGallery = ({tabContents}) => {


  return (
    <div className="grid grid-cols-3 gap-8 mt-10">
      {tabContents?.map((item) => (
        <DestinationCard key={item?.destinationTitle} item={item} />
      ))}
    </div>
  );
};

export default HeroDestinationGallery;
