/* eslint-disable react/prop-types */
import destinationBg from '@/assets/images/destination-details/destination-details-img.jpg';
import DestinationDetailsDescriptionLeftSide from './DestinationDetailsDescriptionLeftSide';
import DestinationDetailsDescriptionRightSide from './DestinationDetailsDescriptionRightSide';
const DestinationDetailsDescription = ({ id }) => {
  return (
    <div id={id} className="w-full flex xl:flex-row flex-col gap-6 xl:gap-12">
      {/* image */}
      <DestinationDetailsDescriptionLeftSide destinationBg={destinationBg} />
      {/* right side */}
      <DestinationDetailsDescriptionRightSide />
    </div>
  );
};

export default DestinationDetailsDescription;
