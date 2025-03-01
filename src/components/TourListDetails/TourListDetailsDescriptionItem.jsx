/* eslint-disable react/prop-types */
import { TickMarkSvg } from '../common/SvgContainer/SvgContainer';

const TourListDetailsDescriptionItem = ({ item }) => {
  return (
    <div className="flex gap-2 text-sm xl:text-lg">
      <TickMarkSvg className="w-5 h-5" />
      <p className="text-text-gray font-interTight  font-medium">
        {item?.title && (
          <span className="font-semibold text-primary">{item?.title}</span>
        )}
        {item?.description}
      </p>
    </div>
  );
};

export default TourListDetailsDescriptionItem;
