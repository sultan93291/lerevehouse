/* eslint-disable react/prop-types */
import destinationBg from '@/assets/images/destination-details/destination-details-img.jpg';
import DestinationDetailsDescriptionLeftSide from './DestinationDetailsDescriptionLeftSide';
import DestinationDetailsDescriptionRightSide from './DestinationDetailsDescriptionRightSide';
const DestinationDetailsDescription = ({ id }) => {
  return (
    <div id={id} className="w-full flex gap-12">
      {/* image */}
      <DestinationDetailsDescriptionLeftSide destinationBg={destinationBg} />
      {/* right side */}
      <DestinationDetailsDescriptionRightSide />
    </div>
  );
};

export default DestinationDetailsDescription;
